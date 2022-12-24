import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers/auth-reducers";

const RootReducer = combineReducers({
  authReducer: AuthReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
