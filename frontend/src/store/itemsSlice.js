import { createSlice } from "@reduxjs/toolkit";
let itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});
export const itemsActions = itemSlice.actions;
export default itemSlice;
