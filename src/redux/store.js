import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import UserReducer from "./user/userSlice";
import ThemeReducer from "./theme/themeSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";

export default configureStore({
  reducer: { counter: CounterReducer, user: UserReducer, theme: ThemeReducer },
  middleware: [thunk, logger],
});
