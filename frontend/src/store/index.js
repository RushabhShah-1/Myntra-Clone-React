import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bag from "./bagSlice";

let store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bag.reducer,
  },
});
export default store;
