<<<<<<< HEAD
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
=======
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
>>>>>>> 46e4a417636404535a07f3715f9c2da3eaf4ebb1
