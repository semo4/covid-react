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
import addressImage from "../../images/location.jpg";
import { Link } from "react-router-dom";
import Pages from "../common/pages";
import PropTypes from "prop-types";

class AddressHome extends Component {
  render() {
    const { addresses, itemCount, pageSize, currentPage, onPageChange } =
      this.props;
    return (
      <React.Fragment>
        <Container>
          {addresses.map((address) => (
            <Row key={address.id}>
              <ImgContainer>
                <Link to={`users/address/${address.id}`}>
                  {" "}
                  <Img src={addressImage} />
                </Link>
              </ImgContainer>
              <DetailContainer>
                <H3>Name: {address.name}</H3>
              </DetailContainer>
              <Buttons>
                <Update onClick={() => this.props.onUpdate(address)}>
                  Update
                </Update>
                <Delete onClick={() => this.props.onDelete(address)}>
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

AddressHome.propTypes = {
  addresses: PropTypes.array,
  itemCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default AddressHome;
