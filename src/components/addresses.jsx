import React, { Component } from "react";
import { getAddresses, deleteAddress } from "../services/addressesService";
import { toast } from "react-toastify";
import { Title, H1, H3, AddPatient, Search } from "./styleComponents/home";
import { Link } from "react-router-dom";
import { paginate } from "../utils/paginate";
import SearchBox from "./common/searchBox";
import AddressHome from "./common/addressData";

class Addresses extends Component {
  state = {
    addresses: [],
    pageSize: 8,
    currentPage: 1,
    searchQuery: "",
  };

  async componentDidMount() {
    try {
      const { data } = await getAddresses();
      this.setState({ addresses: data });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("an Error Occurred");
      }
    }
  }

  getPageData = () => {
    const {
      addresses: allAddresses,
      pageSize,
      currentPage,
      searchQuery,
    } = this.state;
    let filteredAddresses = allAddresses;
    if (searchQuery) {
      filteredAddresses = allAddresses.filter((address) =>
        address.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    const addresses = paginate(filteredAddresses, currentPage, pageSize);
    return { totalCount: filteredAddresses.length, data: addresses };
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handelPageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleUpdate = (address) => {
    window.location = "/address/" + address.id;
  };

  handleDelete = async (address) => {
    const originalAddresses = this.state.addresses;
    const addresses = this.state.addresses.filter(
      (addr) => addr.id !== address.id
    );
    this.setState({ addresses });
    try {
      await deleteAddress(address);
      toast.success("Address has been Deleted Successfully");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This Address has already been deleted");
      }
      this.setState({ addresses: originalAddresses });
    }
  };

  render() {
    try {
      const { length: count } = this.state.addresses;
      if (count === 0) {
        return (
          <React.Fragment>
            <Title>
              <H1>There are No Address</H1>{" "}
            </Title>
            <Search>
              <AddPatient>
                <Link to="/address/new" className="nav-link">
                  Add New Address
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
            <H1>There are No Address</H1>{" "}
          </Title>
        );
      }
    }

    const { pageSize, currentPage, searchQuery } = this.state;

    const { totalCount, data: addresses } = this.getPageData();

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
            <Link to="/address/new" className="nav-link">
              Add New Address
            </Link>{" "}
          </AddPatient>
          <H3>Showing {totalCount} Address</H3>
        </Search>
        <AddressHome
          addresses={addresses}
          onUpdate={this.handleUpdate}
          onDelete={this.handleDelete}
          itemCount={totalCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Addresses;
