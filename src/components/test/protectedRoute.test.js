import React from "react";
import { shallow } from "enzyme";
import ProtectedRoute from "../common/protectedRoute";
import { Route, Redirect } from "react-router-dom";

describe("<ProtectedRoute />", () => {
  it("test ProtectedRoute", () => {
    const wrapper = shallow(<ProtectedRoute />);
    expect(wrapper.find(<Route />));
    expect(wrapper.find(<Redirect />));
  });
});
