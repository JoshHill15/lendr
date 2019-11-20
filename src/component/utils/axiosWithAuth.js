import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://zero5nelsonm-lendr.herokuapp.com',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};