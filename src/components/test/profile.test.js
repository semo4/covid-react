import { shallow } from "enzyme";
import Profile from "../profile";
import React from "react";
import {
  Update,
  ButtonsContainer,
  H3,
  Details,
  SubContainer,
  Img,
  ImgContainer,
  Container,
} from "../styleComponents/profile";

describe("<Profile />", () => {
  it("test profile", () => {
    const wrapper = shallow(<Profile />);
    const id = "7b391e27-0250-4b0d-86e8-f0e1b4e95006";
    expect(wrapper.instance().handleUpdate(id));
    expect(wrapper.instance().getUserData());
    expect(wrapper.instance().componentDidMount());
    expect(wrapper.find(H3));
    expect(wrapper.find(Img));
    expect(wrapper.find(Update));
    expect(wrapper.find(ButtonsContainer));
    expect(wrapper.find(Details));
    expect(wrapper.find(SubContainer));
    expect(wrapper.find(ImgContainer));
    expect(wrapper.find(Container));
  });
});
