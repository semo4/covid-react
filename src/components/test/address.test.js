import { shallow } from "enzyme";
import {
  Container,
  H3,
  MYForm,
  Label,
  Submit,
  Input,
  ErrorDiv,
} from "../styleComponents/login";
import Address from "../address";
import React from "react";

describe("<Address />", () => {
  it("test address", () => {
    const wrapper = shallow(<Address />);
    const address = {
      id: "address/03caaa82-d8f8-4d02-81bd-b01cf0c08dfb",
      name: "Amman",
    };
    expect(wrapper.instance().populateAddress());
    expect(wrapper.instance().mapToViewAddress(address));
    expect(wrapper.instance().doSubmit());
    expect(wrapper.find(Container));
    expect(wrapper.find(H3).text());
    expect(wrapper.find(MYForm));
    expect(wrapper.find(Label));
    expect(wrapper.find(Submit));
    expect(wrapper.find(Input));
    expect(wrapper.find(ErrorDiv));
  });
});
