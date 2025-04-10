import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function Layout() {
  return (
    <div>
     <div className="">
      <Navbar/>
     </div>
      <Outlet /> 
    </div>
  );
}

export default Layout;
