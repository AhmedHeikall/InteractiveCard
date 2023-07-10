import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardName: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  cardCvc: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    cardName(state, action) {
      state.cardName = action.payload;
    },
    cardNumber(state, action) {
      state.cardNumber = action.payload;
    },
    cardMonth(state, action) {
      state.cardMonth = action.payload;
    },
    cardYear(state, action) {
      state.cardYear = action.payload;
    },
    cardCvc(state, action) {
      state.cardCvc = action.payload;
    },
    reset(state) {
      state.cardName = "";
      state.cardNumber = "";
      state.cardMonth = "";
      state.cardYear = "";
      state.cardCvc = "";
    },
  },
});

export const inputAction = inputSlice.actions;

export default inputSlice.reducer;
