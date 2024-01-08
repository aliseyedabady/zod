import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

export interface User {
  token: string;
  full_name: string;
  mobile: string;
  role: "buyer" | "seller" | "none";
  id: string | number;
}
const initialState: User = {
  token: "",
  full_name: "",
  mobile: "",
  role: "none",
  id: "",
};
export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    initial: state => {
      const user = Cookie.get("user");
      if (user) {
        state.token = JSON.parse(user).token;
        state.role = JSON.parse(user).role;
        state.id = JSON.parse(user).id;
      }
    },
    logout: state => {
      state = { full_name: "", mobile: "", token: "", role: "buyer", id: "" };
      Cookie.remove("user");
    },
    setRole: (state, data) => {
      state.role = data.payload;
    },
    setMobile: (state, data) => {
      state.mobile = data.payload;
    },
    setToken: (state, data) => {
      state.token = data.payload.token;
      state.id = data.payload.id;
      state.role = data.payload.role;
      Cookie.set(
        "user",
        JSON.stringify({
          id: data.payload.id,
          token: data.payload.token,
          role: state.role || data.payload.role,
        }),
        {
          expires: Number(process.env.REACT_APP_COOKIE_EXPIRE_IN_DAYS) || 30,
        }
      );
    },
  },
});
export const { initial, setRole, setMobile, setToken, logout } = user.actions;
export default user.reducer;
