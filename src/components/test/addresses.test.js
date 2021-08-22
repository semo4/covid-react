import { shallow } from "enzyme";
import Addresses from "../addresses";
import React from "react";
import { Title, H1, H3, AddPatient, Search } from "../styleComponents/home";
import AddressHome from "../common/addressData";

describe("<Addresses />", () => {
  it("test addresses", () => {
    const wrapper = shallow(<Addresses />);
    const address = {
      id: "address/03caaa82-d8f8-4d02-81bd-b01cf0c08dfb",
      name: "Amman",
    };
    expect(wrapper.instance().getPageData());
    expect(wrapper.instance().handleSearch());
    expect(wrapper.instance().handelPageChange(1));
    expect(wrapper.instance().handleUpdate(address));
    expect(wrapper.instance().handleDelete(address));
  });

  it("test addresses display", () => {
    const wrapper = shallow(<Addresses />);
    expect(wrapper.find(Title));
    expect(wrapper.find(H1));
    expect(wrapper.find(H3));
    expect(wrapper.find(AddPatient));
    expect(wrapper.find(Search));
    expect(wrapper.find(<AddressHome />));
  });
});
