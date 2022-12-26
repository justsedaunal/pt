import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Products from "./products/ProductList";
import { Action } from "../store/actions/product.actions";

const Mainlayout = ({children}:any) => {

  return (
    <>
    <Navbar/>
    {children}
    </>
  );
};

export default Mainlayout;
