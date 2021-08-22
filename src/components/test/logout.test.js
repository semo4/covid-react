import Logout from "../logout";
import { shallow } from "enzyme";
import React from "react";

describe("<Logout />", () => {
  it("test logout", () => {
    const wrapper = shallow(<Logout />);
    expect(wrapper.instance());
  });
});
