import React from "react";
import Navbar from "../components/Navbar";
import Products from "./products/Products";

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <Products />;
    </>
  );
};

export default Mainlayout;
