import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Outlet/>
      </div>
    </div>
  );
};

export default SharedLayout;