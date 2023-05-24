import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { goalsReducer } from "../features/GoalsContainer/goalsSlice.js";

export const store = configureStore({
  reducer: combineReducers({
    goals: goalsReducer,
  }),
});
