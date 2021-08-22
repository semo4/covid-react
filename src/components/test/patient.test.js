import {
  Container,
  H3,
  MYForm,
  Label,
  Submit,
  Input,
  ErrorDiv,
} from "../styleComponents/login";
import { shallow } from "enzyme";
import HomePage from "../homePage";
import React from "react";
import Patient from "../Patient";

describe("<Patient />", () => {
  it("call didmount", () => {
    expect(Patient.prototype.componentDidMount);
  });
  it("test Patient", () => {
    const wrapper = shallow(<Patient />);
    expect(wrapper.instance().populateAddresses());
    expect(wrapper.instance().populateUser());
    expect(wrapper.instance().doSubmit());
    expect(wrapper.find(Container));
    expect(wrapper.find(H3).text());
    expect(wrapper.find(MYForm));
    expect(wrapper.find(Label));
    expect(wrapper.find(Submit));
    expect(wrapper.find(Input));
    expect(wrapper.find(ErrorDiv));
  });

  it("simulate click", () => {
    const wrapper = shallow(<Patient />);
    wrapper.find(Submit).simulate("click");
    expect(shallow(<HomePage />));
  });
});
