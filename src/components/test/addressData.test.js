import {
  Update,
  Delete,
  Buttons,
  H3,
  DetailContainer,
  Img,
  ImgContainer,
  Row,
  Container,
} from "../styleComponents/home";
import Pages from "../common/pages";
import { shallow } from "enzyme";
import React from "react";
import AddressHome from "../common/addressData";

describe("<AddressHome", () => {
  it("test Address Home", () => {
    const addresses = [
      {
        id: "address/03caaa82-d8f8-4d02-81bd-b01cf0c08dfb",
        name: "Amman",
      },
      {
        id: "address/e36490f0-5ba2-4d29-a604-3ccba1d5bd4b",
        name: "Zarqa",
      },
    ];
    const itemCount = addresses.length;
    const pageSize = 8;
    const currentPage = 1;

    const wrapper = shallow(
      <AddressHome
        addresses={addresses}
        itemCount={itemCount}
        pageSize={pageSize}
        currentPage={currentPage}
      />
    );
    const onPageChange = wrapper.instance().onPageChange;
    const onDelete = wrapper.instance().onDelete;
    const onUpdate = wrapper.instance().onUpdate;
    expect(wrapper.find(Container));
    expect(wrapper.find(Row));
    expect(wrapper.find(ImgContainer));
    expect(wrapper.find(DetailContainer));
    expect(wrapper.find(H3));
    expect(wrapper.find(Buttons));
    expect(wrapper.find(Delete));
    expect(wrapper.find(Update));
    expect(wrapper.find(Img));
    expect(
      wrapper.find(
        <Pages
          onPageChange={onPageChange}
          itemsCount={itemCount}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      )
    );
  });
});
