import { shallow } from "enzyme";
import NavBar from "../navBar";
import { Header, Nav, Ul, Li } from "../styleComponents/navbar";
import React from "react";
import { NavLink } from "react-router-dom";

describe("<NavBar />", () => {
  it("test navbar", () => {
    const user = {
      id: "6987a192-3c9d-43d4-b233-7c0ca5474c9a",
      first_name: "osama",
      last_name: "Yousef",
      email: "semo@hotmail.com",
      phone: "0785621318",
      password: "$2b$12$GkGFevE69Xihp8WNLTNDdOcHuD1OfVT9x2ermY2uHTs8y2e0c2C5i",
      isAdmin: true,
      state: "Second Dose",
      created_at: "2021-08-15T14:15:11.800771",
      updated_at: "2021-08-15T14:15:11.800778",
      address_id: "e36490f0-5ba2-4d29-a604-3ccba1d5bd4b",
      name: "Zarqa",
    };
    const user2 = {
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
    const wrapper = shallow(<NavBar user={user} />);
    const wrapper2 = shallow(<NavBar user={user2} />);
    expect(wrapper2);
    expect(wrapper.find(Header));
    expect(wrapper.find(Nav));
    expect(wrapper.find(Ul));
    expect(wrapper.find(Li));
    expect(wrapper.find(<NavLink to="/home" />));
    expect(wrapper.find(<NavLink to="/addresses" />));
    expect(wrapper.find(<NavLink to={"/profile/" + user.id} />));
    expect(wrapper.find(<NavLink to="/logout" />));
  });
});
