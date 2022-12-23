<<<<<<< HEAD
import { AuthService } from "../../api/services/auth.service";
import { AuthReduxModel } from "../models/auth-redux.model";

const _authService = new AuthService();
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
export const LoginFunc = (value: any) => (dispatch: any) => {
    _authService
        .login({
            email: value.email,
            password: value.password,
        })
        .then((response) => {
            if (response.token != "") {
                if (value.beniHatırla) {
                    localStorage.setItem("token", response.token);
                    localStorage.setItem("fullName", value.email);
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("fullName");
                } else {
                    sessionStorage.setItem("token", response.token);
                    sessionStorage.setItem("fullName", value.email);
                    localStorage.removeItem("token");
                    localStorage.removeItem("fullName");
                }
                dispatch(
                    SetAuth({ token: response.token, fullname: value.email }) as any
                );
            } else {
                alert("Kullanıcı Bilgileri Hatalı");
            }
        });
};


export const RegisterFunc = (value: any) => (dispatch: any) => {
    _authService.register(value).then((response) => {
        if (response.token != "") {
            sessionStorage.setItem("token", response.token);
            sessionStorage.setItem("fullName", value.name);
            dispatch(SetAuth({ token: response.token, fullname: value.name }) as any);
            //  window.location.href="/Deneme"
        }
    });
};
=======
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
>>>>>>> 46e4a417636404535a07f3715f9c2da3eaf4ebb1
