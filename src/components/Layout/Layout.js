import { Outlet } from "react-router-dom";
import React from "react";

import { NavState } from "../../context/navState";

import MainMenu from "../MainMenu";
import Footer from "../../page/Footer/Footer";

export default function Layout() {
  return (
    <>
      <NavState>
        <MainMenu />
      </NavState>

      <Outlet />
      <Footer/>
    </>
  );
}