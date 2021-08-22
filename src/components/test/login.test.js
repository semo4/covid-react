import Login from "../login";
import { shallow } from "enzyme";
import React from "react";
import { Container, H3, MYForm } from "../styleComponents/login";

describe("<Login />", () => {
  it("login test", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(Container));
    expect(wrapper.find(H3).text());
    expect(wrapper.find(MYForm));
  });

  it("test submit function", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.instance().doSubmit());
  });
});
