import axios from "axios";
import { NetworkConstants } from "../constants/network_constants";

export const axiosInstance =  axios.create({
    baseURL: NetworkConstants.baseUrl,
    timeout: NetworkConstants.timeout,
    headers: { "Content-Type":"application/json"}
})

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent 
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    console.log(response.data)
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);