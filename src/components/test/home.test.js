import HomePage from "../homePage";
import { shallow } from "enzyme";
import React from "react";
import { H1, Title } from "../styleComponents/home";
import Home from "../common/patientsData";
import SearchBox from "../common/searchBox";

describe("<HomePage/>", () => {
  it("test home page", () => {
    const wrapper = shallow(<HomePage />);
    const user = {
      id: "7b391e27-0250-4b0d-86e8-f0e1b4e95006",
      first_name: "osama",
      last_name: "Yousef",
      email: "voses67909@asmm5.com",
      phone: "0748596352",
      password: "$2b$12$GkGFevE69Xihp8WNLTNDdOcHuD1OfVT9x2ermY2uHTs8y2e0c2C5i",
      isAdmin: false,
      state: "First Dose",
      address_id: "address/03caaa82-d8f8-4d02-81bd-b01cf0c08dfb",
      name: "Amman",
    };
    expect(wrapper.instance().handleUpdate(user));
    expect(wrapper.instance().handlePageChange(1));
    expect(wrapper.instance().getPageData());
    expect(wrapper.instance().handleSearch(""));
    expect(wrapper.instance().handleAddPatient());
    expect(wrapper.instance().handleDelete(user));
    expect(wrapper.find(H1));
    expect(wrapper.find(Title));
    expect(wrapper.find(<Home />));
    expect(wrapper.find(<SearchBox />));
  });
});
