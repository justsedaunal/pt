import { logout } from "../store/actions/auth.actions";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";

export default function Navbar() {
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout()as any);
  }, [dispatch]);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand btn bg-grad text-white rounded-pill"
          href="#"
        >
          PitonShop
        </a>
        <a
        onClick={logOut}
          className="navbar-brand btn bg-white text-black rounded-pill"
        >
          Logout
        </a>
      </div>
    </nav>
  );
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

