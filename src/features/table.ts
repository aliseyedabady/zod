import { createSlice } from "@reduxjs/toolkit";

export interface Table {
  depend: boolean;
}

const initialState: Table = {
  depend: false,
};

export const table = createSlice({
  name: "table",
  initialState,
  reducers: {
    toggle: state => {
      state.depend = !state.depend;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = table.actions;

export default table.reducer;
