import { createSlice } from "@reduxjs/toolkit";

export interface ModalDelete {
  isOpen: boolean;
  id: string | number;
  route: string;
  deleted: number[];
}
const initialState: ModalDelete = {
  isOpen: false,
  id: "",
  route: "",
  deleted: [],
};
export const modalDelete = createSlice({
  name: "modalDelete",
  initialState,
  reducers: {
    open: (state, data) => {
      state.isOpen = true;
      state.id = data.payload.id;
      state.route = data.payload.route;
    },
    close: state => {
      state.isOpen = false;
    },
    deleted: (state, data) => {
      state.isOpen = false;
      state.deleted = [...state.deleted, data.payload];
    },
  },
});
export const { close, open, deleted } = modalDelete.actions;
export default modalDelete.reducer;
