import React from "react";
import { NavLink } from "react-router-dom";
import { Header, Nav, Ul, Li } from "./styleComponents/navbar";
import PropTypes from "prop-types";

const NavBar = ({ user }) => {
  return (
    <Header>
      <Nav>
        <Ul>
          <React.Fragment>
            {user && user.isAdmin === true && (
              <React.Fragment>
                <Li>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </Li>
                <Li>
                  <NavLink className="nav-link" to="/addresses">
                    {" "}
                    Addresses
                  </NavLink>
                </Li>

                <Li>
                  <NavLink className="nav-link" to={"/profile/" + user.id}>
                    {" "}
                    {user.first_name}
                  </NavLink>
                </Li>

                <Li>
                  <NavLink className="nav-link" to="/logout">
                    {" "}
                    Logout
                  </NavLink>
                </Li>
              </React.Fragment>
            )}

            {user && user.isAdmin === false && (
              <React.Fragment>
                <Li>
                  <NavLink className="nav-link" to={"/profile/" + user.id}>
                    {" "}
                    {user.first_name}
                  </NavLink>
                </Li>

                <Li>
                  <NavLink className="nav-link" to="/logout">
                    {" "}
                    Logout
                  </NavLink>
                </Li>
              </React.Fragment>
            )}

            {!user && (
              <Li>
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </Li>
            )}
          </React.Fragment>
        </Ul>
      </Nav>
    </Header>
  );
};

NavBar.propTypes = {
  user: PropTypes.object,
};

export default NavBar;
