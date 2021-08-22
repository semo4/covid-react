import { Label, Submit, Input, ErrorDiv } from "../styleComponents/login";
import SelectInput from "../common/select";
import React from "react";
import { shallow } from "enzyme";
import Form from "../common/form";

describe("<Form />", () => {
  it("test form", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find(Label));
    expect(wrapper.find(Submit));
    expect(wrapper.find(Input));
    expect(wrapper.find(ErrorDiv));
    expect(wrapper.find(SelectInput));
    expect(wrapper.instance().validate());
    expect(wrapper.instance().validateProperty());
    expect(wrapper.instance().handleSubmit());
    expect(wrapper.instance().handleChange());
  });
});
