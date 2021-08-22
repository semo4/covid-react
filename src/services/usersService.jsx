import { usersApi } from "../config.json";
import http from "./httpService";
import { toast } from "react-toastify";

const config_ = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export function getUsers() {
  return http.get(usersApi, config_);
}

export function getUser(id) {
  return http.get(usersApi + id, config_);
}

export function getUserByAddress(id) {
  return http.get(usersApi + "address/" + id, config_);
}

export function deleteUser(user) {
  const id = user.id;
  return http.delete(usersApi + id, config_);
}

export async function saveUser(userData) {
  if (userData.id === "new") {
    const user = {
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
      state: userData.state,
      isAdmin: false,
      address_id: userData.address_id ? userData.address_id : userData.address,
    };
    try {
      return http.post(usersApi, user, config_);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("Error in add Patient");
      }
    }
  } else {
    const user = {
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      phone: userData.phone,
      state: userData.state,
      password: userData.password,
      isAdmin: false,
      address_id: userData.address_id ? userData.address_id : userData.address,
    };
    try {
      await getUser(userData.id);
      return http.patch(usersApi + userData.id, user, config_);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("Error in update Patient");
      }
    }
  }
}
