import React from "react";
import Form from "./common/form";
import { Container, H3, MYForm } from "./styleComponents/login";
import Joi from "joi-browser";
import { getAddress, saveAddress } from "../services/addressesService";

class Address extends Form {
  state = {
    data: { id: "new", name: "" },
    errors: {},
  };

  schema = {
    id: Joi.string().label("ID"),
    name: Joi.string().required().min(5).label("Name"),
  };

  async populateAddress() {
    try {
      const id = this.props.match.params.id;
      if (id === "new") return;
      const { data } = await getAddress(id);
      this.setState({ data: this.mapToViewAddress(data) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found");
      }
    }
  }

  mapToViewAddress(address) {
    return {
      id: address.id,
      name: address.name,
    };
  }

  componentDidMount() {
    this.populateAddress();
  }

  doSubmit = async () => {
    try {
      await saveAddress(this.state.data);
      this.props.history.push("/addresses");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.name = ex.response.data.detail;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <Container>
        <H3>Add New Address</H3>
        <MYForm onSubmit={this.handleSubmit}>
          {this.renderInput("id", "ID", "hidden")}
          {this.renderInput("name", "Name", "text")}
          {this.renderButton("Save")}
        </MYForm>
      </Container>
    );
  }
}

export default Address;
