import React, { Component } from "react";
import { getUserByAddress, deleteUser } from "../services/usersService";
import { Title, H1, H3, AddPatient, Search } from "./styleComponents/home";
import { toast } from "react-toastify";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";
import Home from "./common/patientsData";
import PropTypes from "prop-types";
class UsersAddress extends Component {
  state = {
    users: [],
    pageSize: 8,
    currentPage: 1,
    searchQuery: "",
  };

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const { data } = await getUserByAddress(id);
      const filteredUsers = data.filter((user) => user.isAdmin !== true);
      this.setState({ users: filteredUsers });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error(ex.response.data.detail);
      }
    }
  }
  handleDelete = async (user) => {
    const originalUsers = this.state.users;
    const users = this.state.users.filter((u) => u.id !== user.id);
    this.setState({ users });
    try {
      await deleteUser(user);
      toast.success("User has been deleted Successfully");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This User has already been deleted");
      }
      this.setState({ users: originalUsers });
    }
  };

  handleUpdate = (user) => {
    window.location = "/patient/" + user.id;
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPageData = () => {
    const { users: allUsers, pageSize, currentPage, searchQuery } = this.state;
    let filteredUsers = allUsers;
    if (searchQuery) {
      filteredUsers = allUsers.filter((u) =>
        u.first_name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    const users = paginate(filteredUsers, currentPage, pageSize);
    return { totalCount: filteredUsers.length, data: users };
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  render() {
    try {
      const { length: count } = this.state.users;
      if (count === 0) {
        return (
          <React.Fragment>
            <Title>
              <H1>There are No Patient</H1>{" "}
            </Title>
            <Search>
              <AddPatient>
                <Link to="/patient/new" className="nav-link">
                  Add New Patient
                </Link>
              </AddPatient>
            </Search>
          </React.Fragment>
        );
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        return (
          <Title>
            <H1>There are No Patient</H1>{" "}
          </Title>
        );
      }
    }
    const { pageSize, currentPage, searchQuery } = this.state;

    const { totalCount, data: users } = this.getPageData();

    return (
      <React.Fragment>
        <Title>
          <H1>Covid-19 Statistic</H1>
        </Title>
        <Search>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
        </Search>
        <Search>
          <AddPatient>
            <Link to="/patient/new" className="nav-link">
              Add New Patient
            </Link>{" "}
          </AddPatient>
          <H3>Showing {totalCount} Patient</H3>
        </Search>
        <Home
          users={users}
          onDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
          itemCount={totalCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

UsersAddress.propTypes = {
  match: PropTypes.object,
};

export default UsersAddress;
