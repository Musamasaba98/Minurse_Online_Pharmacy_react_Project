
import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./index.css";

function Root() {


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
