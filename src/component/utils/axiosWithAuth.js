import axios from "axios";
import axiosWithAuth from "./utils/axiosWithAuth";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://zero5nelsonm-lendr.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};
