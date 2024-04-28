import { createSlice } from "@reduxjs/toolkit";

const bag = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      console.log("Action payload", typeof action.payload);
      let newState = state.filter((itemId) => {
        return itemId !== action.payload;
      });
      return newState;
    },
  },
});
export const bagActions = bag.actions;
export default bag;
