import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import auth from "./services/authService";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import Profile from "./components/profile";
import Login from "./components/login";
import Patient from "./components/Patient";
import Logout from "./components/logout";
import Addresses from "./components/addresses";
import Address from "./components/address";
import UsersAddress from "./components/usersByAddress";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/common/protectedRoute";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <Switch>
          <ProtectedRoute path="/users/address/:id" component={UsersAddress} />
          <ProtectedRoute path="/profile/:id" component={Profile} />
          <ProtectedRoute path="/address/:id" component={Address} />
          <ProtectedRoute path="/addresses" component={Addresses} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/patient/:id" component={Patient} />
          <Route path="/logout" component={Logout} />
          <ProtectedRoute
            path="/home"
            render={(props) => <HomePage {...props} user={user} />}
          />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
