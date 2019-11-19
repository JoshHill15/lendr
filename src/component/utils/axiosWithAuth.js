import axios from "axios";
import axiosWithAuth from './utils/axiosWithAuth';

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "",
    headers: {
      Authorization: token
    }
  });
};
