import { Inter } from "@next/font/google";
import Login from "./auths/Login";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainlayout from "./main_layout";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetAuth } from "../store/actions/auth.actions";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: any) {
  const dispatch = useDispatch();
  const authR = useSelector<RootState>((state) => state.authReducer) as any;
  const authControl = useCallback(() => {
    var token = "";
    var fullName = "";
    var localToken = localStorage.getItem("token");
    var localFullName = localStorage.getItem("fullName");
    var sessionToken = localStorage.getItem("token");
    var sessionFullName = localStorage.getItem("fullName");
    if (localToken != "" && localToken != null) {
      token = localToken;
    } else if (sessionToken != "" && sessionToken) {
      token = sessionToken;
    }
    if (localFullName != "" && localFullName != null) {
      fullName = localFullName;
    } else if (sessionFullName != "" && sessionFullName != null) {
      fullName = sessionFullName;
    }
    dispatch(
      SetAuth({
        fullname: fullName,
        token: token,
      }) as any
    );
  }, [dispatch]);
  useEffect(() => {
    authControl();
    return () => {};
  }, [authControl]);

  return (
    <>
      {authR.auth.token == "" ? <Login /> : <Mainlayout>{children}</Mainlayout>}
    </>
  );
}
