import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import RootReducer from "./root-reducers";

export default function ConfigureStore() {
  return createStore(RootReducer, applyMiddleware(thunkMiddleware));
}