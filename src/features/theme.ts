import { createSlice } from "@reduxjs/toolkit";

export interface Theme {
  drawer: boolean;
}
const initialState: Theme = {
  drawer: false,
};
export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDrawer: state => {
      state.drawer = !state.drawer;
    },
  },
});
export const { toggleDrawer } = theme.actions;
export default theme.reducer;
