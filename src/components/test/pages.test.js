import React from "react";
import { shallow } from "enzyme";
import Pages from "../common/pages";
import { PaginationContainer, ALink } from "../styleComponents/pagenation";

describe("<Pages />", () => {
  it("test pages", () => {
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
      <Pages
        itemsCount={itemCount}
        pageSize={pageSize}
        currentPage={currentPage}
      />
    );
    const onPageChange = wrapper.instance().onPageChange;
    expect(wrapper.find(PaginationContainer));
    expect(wrapper.find(ALink).onClick(onPageChange));
  });
});
