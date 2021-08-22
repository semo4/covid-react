import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import NavBar from "./components/navBar";
import ProtectedRoute from "./components/common/protectedRoute";
import HomePage from "./components/homePage";
describe("navBar render", () => {
  let wrapper;
  beforeEach(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODdhMTkyLTNjOWQtNDNkNC1iMjMzLTdjMGNhNTQ3NGM5YSIsImVtYWlsIjoic2Vtb0Bob3RtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJvc2FtYSIsImxhc3RfbmFtZSI6IllvdXNlZiIsInBob25lIjoiMDc4NTYyMTMxOCIsInN0YXRlIjoiU2Vjb25kIERvc2UiLCJpc0FkbWluIjp0cnVlfQ.BXglH_1tDSIWXrErAeOATEtOHBWzsd0KHeCL-cJWEbM"
    );
    wrapper = shallow(<App />);
  });

  it("should render App page ", () => {
    expect(wrapper);
  });
  it("should render NavBar ", () => {
    const user = {
      id: "6987a192-3c9d-43d4-b233-7c0ca5474c9a",
      first_name: "osama",
      last_name: "Yousef",
      email: "semo@hotmail.com",
      phone: "0785621318",
      password: "$2b$12$GkGFevE69Xihp8WNLTNDdOcHuD1OfVT9x2ermY2uHTs8y2e0c2C5i",
      isAdmin: true,
      state: "Second Dose",
      created_at: "2021-08-15T14:15:11.800771",
      updated_at: "2021-08-15T14:15:11.800778",
      address_id: "e36490f0-5ba2-4d29-a604-3ccba1d5bd4b",
      name: "Zarqa",
    };
    expect(wrapper.find(<NavBar user={user} />));
  });

  it("render homepage", () => {
    const testUser = {
      id: "6987a192-3c9d-43d4-b233-7c0ca5474c9a",
      email: "semo@hotmail.com",
      first_name: "osama",
      last_name: "Yousef",
      phone: "0785621318",
      state: "Second Dose",
      isAdmin: true,
    };

    expect(
      wrapper.find(
        <ProtectedRoute
          render={(props) => <HomePage {...props} user={testUser} />}
        />
      )
    );
  });
});
