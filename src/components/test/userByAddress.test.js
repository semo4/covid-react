import { shallow } from "enzyme";
import React from "react";
import { Title, H1, H3, AddPatient, Search } from "../styleComponents/home";
import SearchBox from "../common/searchBox";
import Home from "../common/patientsData";
import UsersAddress from "../usersByAddress";

describe("<UsersAddress />", () => {
  it("test user by address", () => {
    const user = {
      id: "6987a192-3c9d-43d4-b233-7c0ca5474c9a",
      first_name: "osama",
      last_name: "Yousef",
      email: "semo@hotmail.com",
      phone: "0785621318",
      password: "$2b$12$GkGFevE69Xihp8WNLTNDdOcHuD1OfVT9x2ermY2uHTs8y2e0c2C5i",
      isAdmin: false,
      state: "Second Dose",
      created_at: "2021-08-15T14:15:11.800771",
      updated_at: "2021-08-15T14:15:11.800778",
      address_id: "e36490f0-5ba2-4d29-a604-3ccba1d5bd4b",
      name: "Zarqa",
    };
    const id = "address/03caaa82-d8f8-4d02-81bd-b01cf0c08dfb";
    const wrapper = shallow(<UsersAddress id={id} />);
    expect(wrapper.instance().handleDelete(user));
    expect(wrapper.instance().handleUpdate(user));
    expect(wrapper.instance().handlePageChange(1));
    expect(wrapper.instance().getPageData());
    expect(wrapper.instance().handleSearch(""));
    expect(wrapper.find(H1));
    expect(wrapper.find(Title));
    expect(wrapper.find(H3));
    expect(wrapper.find(AddPatient));
    expect(wrapper.find(Search));
    expect(wrapper.find(<Home />));
    expect(wrapper.find(<SearchBox />));
  });
});
