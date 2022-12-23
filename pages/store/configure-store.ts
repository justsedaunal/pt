<<<<<<< HEAD
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import RootReducer from "./root-reducers";

export default function ConfigureStore() {
    return createStore(RootReducer, applyMiddleware(thunkMiddleware));
=======
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import RootReducer from "./root-reducers";

export default function ConfigureStore() {
  return createStore(RootReducer, applyMiddleware(thunkMiddleware));
>>>>>>> 46e4a417636404535a07f3715f9c2da3eaf4ebb1
}