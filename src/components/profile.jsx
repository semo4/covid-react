import React, { Component } from "react";
import {
  Update,
  ButtonsContainer,
  H3,
  Details,
  SubContainer,
  Img,
  ImgContainer,
  Container,
} from "./styleComponents/profile";
import personImage from "../images/images.jpeg";
import { getUser } from "../services/usersService";
import auth from "../services/authService";
import PropTypes from "prop-types";

class Profile extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    await this.getUserData();
  }

  handelUpdate = (id) => {
    window.location = "/patient/" + id;
  };

  async getUserData() {
    try {
      const id = this.props.match.params.id;
      const { data: user } = await getUser(id);
      this.setState({ user });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found");
      }
    }
  }
  render() {
    const { user } = this.state;
    const authUser = auth.getCurrentUser();
    return (
      <Container>
        <ImgContainer>
          <Img src={personImage} />
        </ImgContainer>
        <SubContainer>
          <Details>
            <H3>
              Name: {user.first_name} {user.last_name}
            </H3>
            <H3>Email: {user.email}</H3>
            <H3>Phone Number: {user.phone}</H3>
          </Details>
          <Details>
            <H3>Address: {user.name}</H3>
            <H3>Vaccine Status: {user.state}</H3>
          </Details>
        </SubContainer>
        <ButtonsContainer>
          {authUser.isAdmin === true ? (
            <Update onClick={() => this.handelUpdate(user.id)}>Update</Update>
          ) : (
            ""
          )}
        </ButtonsContainer>
      </Container>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default Profile;
