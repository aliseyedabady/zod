import axios from "axios";
import Cookie from "js-cookie";
import toast from "react-hot-toast";
import { User } from "../types/user";

export const API = axios.create({
  baseURL: "https://api.zanbuur.com/api/v1/",
  withCredentials: true,
  headers: {},
});

API.interceptors.request.use(
  config => {
    let _userJson = Cookie.get("user");
    let _user: User = { full_name: "", token: "", mobile: "" };
    if (_userJson) {
      _user = JSON.parse(_userJson);
    }
    if (_user?.token) config.headers.Authorization = `Bearer ${_user?.token}`;
    return config;
  },
  error => {
    toast.error("خطایی پیش آمده است لطفا مجددا تلاش نمایید.");
    // Do something with requesåt error
    return Promise.reject(error);
  }
);
API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      Cookie.remove("user");
      window.location.replace("/welcome");
    } else if (error?.response?.status === 422) {
      let _errors = error.response.data.message;
      toast.error(_errors);
    } else if (
      error?.response?.data?.message &&
      typeof error.response.data.message === "string"
    ) {
      toast.error(error.response.data.message);
    } else if (typeof error?.response?.message === "string") {
      toast.error(error.response.message);
    } else {
      toast.error("خطایی پیش آمده است. لطفا مجددا تلاش نمایید.");
    }
    return Promise.reject(error);
  }
);
