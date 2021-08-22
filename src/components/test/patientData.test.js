import React from "react";
import { shallow } from "enzyme";
import Home from "../common/patientsData";
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

describe("<Home />", () => {
  it("test patient data", () => {
    const users = [
      {
        id: "7b391e27-0250-4b0d-86e8-f0e1b4e95006",
        first_name: "osama",
        last_name: "yousef",
        email: "voses67909@asmm5.com",
        phone: "0748596352",
        state: "First Dose",
        password:
          "$2b$12$iMBM5l.YP2SjTGwvalSS1ujI0isasMJwUzoJg02g4ewAU.lAX1eHy",
        isAdmin: false,
        created_at: "2021-08-15T14:27:16.185232",
        updated_at: "2021-08-15T14:27:16.185238",
        address_id: "e36490f0-5ba2-4d29-a604-3ccba1d5bd4b",
        name: "Zarqa",
      },
      {
        id: "1bb95edb-ee02-4383-80c9-f43f206de205",
        first_name: "awawawaw",
        last_name: "awawawaw",
        email: "feteta8447@asmm5.com",
        phone: "1239854760",
        state: "First Dose",
        password:
          "$2b$12$7Pi0wma48xIGTbf.8Apd4.jdNW6KLKR1sVhY.aXUXF0mnK6Esg0zC",
        isAdmin: false,
        created_at: "2021-08-16T11:28:08.693592",
        updated_at: "2021-08-16T11:28:08.693597",
        address_id: "e36490f0-5ba2-4d29-a604-3ccba1d5bd4b",
        name: "Zarqa",
      },
      {
        id: "22ef804f-2856-4a65-ac7c-29d81b014e88",
        first_name: "dfgtdfvt",
        last_name: "vdvdfvdfvd",
        email: "geyevax982@alltekia.com",
        phone: "1452369870",
        state: "Second Dose",
        password:
          "$2b$12$SpreEXOpXq0WHgQ0tZFNBen4DRggUZ3dkEe5Vdb.po85epsbXzZUi",
        isAdmin: false,
        created_at: "2021-08-16T11:30:22.605473",
        updated_at: "2021-08-16T11:30:22.605478",
        address_id: "b6595daf-be60-4acd-bac5-87182dec7ecc",
        name: "Aqaba",
      },
    ];
    const itemCount = users.length;
    const pageSize = 8;
    const currentPage = 1;
    const wrapper = shallow(
      <Home
        users={users}
        itemCount={itemCount}
        pageSize={pageSize}
        currentPage={currentPage}
      />
    );
    const onPageChange = wrapper.instance().onPageChange;

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
    expect(wrapper.find(Container));
    expect(wrapper.find(Row));
    expect(wrapper.find(ImgContainer));
    expect(wrapper.find(Img));
    expect(wrapper.find(DetailContainer));
    expect(wrapper.find(H3));
    expect(wrapper.find(Buttons));
    expect(wrapper.find(Delete));
    expect(wrapper.find(Update));
  });
});
