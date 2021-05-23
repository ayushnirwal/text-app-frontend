import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import UserReducer from "./user/userSlice";
import ThemeReducer from "./theme/themeSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const reducers = combineReducers({
  counter: CounterReducer,
  user: UserReducer,
  theme: ThemeReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});
