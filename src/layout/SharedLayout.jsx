import React from "react";
import { NavbarComponents } from "../components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <main>
      <NavbarComponents />

      <Outlet />
    </main>
  );
};

export default SharedLayout;
