import { createSlice } from "@reduxjs/toolkit";

const initialState = { confirmed: false };

const confirmSlice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    confirm(state) {
      state.confirmed = true;
    },
    continue(state) {
      state.confirmed = false;
    },
  },
});

export const confirmActions = confirmSlice.actions;

export default confirmSlice.reducer;
