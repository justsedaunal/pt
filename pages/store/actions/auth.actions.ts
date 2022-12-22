import { AuthReduxModel } from "../models/auth-redux.model";

export const AUTH = "AUTH";
const setTokenLocal = (value: AuthReduxModel) => (dispatch: any) => {
  return dispatch({
    type: AUTH,
    payload: value,
  });
};
export const SetAuth = (value: AuthReduxModel) => (dispatch: any) => {
  dispatch(setTokenLocal(value));
};
