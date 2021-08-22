import React from "react";
import { Container, H3, MYForm } from "./styleComponents/login";
import Form from "./common/form";
import Joi from "joi-browser";
import { getAddresses } from "../services/addressesService";
import { getUser, saveUser } from "../services/usersService";

class Patient extends Form {
  state = {
    data: {
      id: "new",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      state: "",
      address: "",
    },
    errors: {},
    addresses: [],
    userStates: [
      { id: "First Dose", name: "First Dose" },
      { id: "Second Dose", name: "Second Dose" },
      { id: "Receive appointment", name: "Receive appointment" },
    ],
  };

  schema = {
    id: Joi.string().label("ID"),
    first_name: Joi.string().required().min(5).label("First Name"),
    last_name: Joi.string().required().min(5).label("Last Name"),
    email: Joi.string().required().label("Email"),
    phone: Joi.string().length(10).regex(/^\d+$/).required().label("Phone"),
    password: Joi.string().min(8).label("Password"),
    state: Joi.string().required().label("State"),
    address: Joi.string().required().label("Address"),
    address_id: Joi.string().guid(),
  };

  async populateAddresses() {
    try {
      const { data } = await getAddresses();
      this.setState({ addresses: data });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data.detail;
        this.setState({ errors });
      }
    }
  }

  async populateUser() {
    try {
      const id = this.props.match.params.id;
      if (id === "new") {
        return;
      }
      const { data } = await getUser(id);
      this.setState({ data: this.mapToViewUser(data) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  mapToViewUser(user) {
    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      state: user.state,
      address_id: user.address_id,
      address: user.name,
    };
  }

  async componentDidMount() {
    await this.populateAddresses();
    await this.populateUser();
  }

  doSubmit = async () => {
    try {
      await saveUser(this.state.data);
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data.detail;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { addresses, userStates: userState } = this.state;
    return (
      <Container>
        <H3>Add New Patient</H3>
        <MYForm onSubmit={this.handleSubmit}>
          {this.renderInput("id", "ID", "hidden")}
          {this.renderInput("first_name", "First Name", "text")}
          {this.renderInput("last_name", "Last Name", "text")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("phone", "Phone", "number")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSelect("state", "State", userState)}
          {this.renderSelect("address", "Address", addresses)}
          {this.renderButton("Save")}
        </MYForm>
      </Container>
    );
  }
}

export default Patient;
