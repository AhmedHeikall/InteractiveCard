import { configureStore } from "@reduxjs/toolkit";

import inputReducer from "./input-slice";
import confirmReducer from "./confirm-slice";

const store = configureStore({
  reducer: { input: inputReducer, confirm: confirmReducer },
});

export default store;
