import axios from "axios";
import { AxiosConstants } from "../constants/axios_constants";

export const axiosInstance =  axios.create({
    baseURL: AxiosConstants.baseUrl,
    timeout: AxiosConstants.timeout,
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