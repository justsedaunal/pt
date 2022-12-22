import { ActionPayload } from "../action.payload";
import { AUTH } from "../actions/auth.actions";
import * as AuthIntialValues from "../initial-values/auth-intial-values";
const initialState = {
  auth: AuthIntialValues.auth,
};

export const AuthReducer = (
  state = initialState,
  action: ActionPayload<string>
) => {
  switch (action.type) {
    case AUTH:
      return {
        auth: action.payload,
      };

    default:
      return state;
  }
};
