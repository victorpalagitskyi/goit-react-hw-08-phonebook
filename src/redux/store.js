import { combineReducers } from "redux";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./slice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});