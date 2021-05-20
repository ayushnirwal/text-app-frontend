import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";

export default configureStore({
  reducer: { counter: CounterReducer },
  middleware: [thunk, logger],
});
