import { addressesApi } from "../config.json";
import http from "./httpService";
import { toast } from "react-toastify";
const config_ = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export function getAddresses() {
  return http.get(addressesApi, config_);
}

export function getAddress(id) {
  return http.get(addressesApi + id, config_);
}

export function deleteAddress(address) {
  const id = address.id;
  return http.delete(addressesApi + id, config_);
}

export async function saveAddress(addressData) {
  if (addressData.id === "new") {
    const address = {
      name: addressData.name,
    };
    try {
      return http.post(addressesApi, address, config_);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("Error in add Address");
      }
    }
  } else {
    const address = {
      id: addressData.id,
      name: addressData.name,
    };

    try {
      await getAddress(addressData.id);
      return http.patch(addressesApi + addressData.id, address, config_);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("Error in update Address");
      }
    }
  }
}
