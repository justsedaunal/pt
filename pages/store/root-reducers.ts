import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers/auth-reducers";
import { ProductDetailReducer, ProductReducer } from "./reducers/product-reducers";

const RootReducer = combineReducers({
  authReducer: AuthReducer,
  productReducer: ProductReducer,
  productDetailReducer: ProductDetailReducer
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
