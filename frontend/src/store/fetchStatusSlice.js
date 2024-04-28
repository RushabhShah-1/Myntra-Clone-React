import { createSlice } from "@reduxjs/toolkit";
let fetchStatusSlice = createSlice({
  name: "fetchStatusSlice",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});
export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
