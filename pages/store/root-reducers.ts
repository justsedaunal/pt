<<<<<<< HEAD
import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers/auth-reducers";

const RootReducer = combineReducers({
  authReducer: AuthReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
=======
import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers/auth-reducers";

const RootReducer = combineReducers({
  authReducer: AuthReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
>>>>>>> 46e4a417636404535a07f3715f9c2da3eaf4ebb1
