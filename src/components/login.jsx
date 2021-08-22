import React from "react";
import { Container, H3, MYForm } from "./styleComponents/login";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";
import Form from "./common/form";
import { ToastContainer, toast } from "react-toastify";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data.detail;
        this.setState({ errors });
        toast.error("Login Failed");
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <Container>
        <ToastContainer />
        <H3>Login</H3>
        <MYForm onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </MYForm>
      </Container>
    );
  }
}

export default Login;
