import React, { Component } from "react";
import {
  Update,
  Delete,
  Buttons,
  H3,
  DetailContainer,
  Img,
  ImgContainer,
  Row,
  Container,
} from "../styleComponents/home";
import covid from "../../images/download.jpeg";
import { Link } from "react-router-dom";
import Pages from "../common/pages";
import PropTypes from "prop-types";

class Home extends Component {
  render() {
    const { users, itemCount, pageSize, currentPage, onPageChange } =
      this.props;
    return (
      <React.Fragment>
        <Container>
          {users.map((user) => (
            <Row key={user.id}>
              <ImgContainer>
                <Link to={`/profile/${user.id}`}>
                  <Img src={covid} />
                </Link>
              </ImgContainer>
              <DetailContainer>
                <H3>
                  Patient Name: {user.first_name} {user.last_name}
                </H3>
              </DetailContainer>
              <DetailContainer>
                <H3>Patient Phone: {user.phone}</H3>
              </DetailContainer>
              <DetailContainer>
                <H3>Patient Email: {user.email}</H3>
              </DetailContainer>
              <DetailContainer>
                <H3>Patient Address: {user.name}</H3>
              </DetailContainer>
              <DetailContainer>
                <H3>Patient State: {user.state}</H3>
              </DetailContainer>
              <Buttons>
                <Update onClick={() => this.props.onUpdate(user)}>
                  Update
                </Update>
                <Delete
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this user?"
                      )
                    )
                      this.props.onDelete(user);
                  }}
                >
                  Delete
                </Delete>
              </Buttons>
            </Row>
          ))}
        </Container>
        <Pages
          itemsCount={itemCount}
          pageSize={pageSize}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}
Home.propTypes = {
  users: PropTypes.array,
  itemCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default Home;
