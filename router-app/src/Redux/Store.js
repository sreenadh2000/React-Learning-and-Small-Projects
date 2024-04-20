import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

const rootReduser = combineReducers({ user: Reducer });
const Store = configureStore({
  reducer: rootReduser,
  middleware: [thunk, logger],
});

export default Store;
