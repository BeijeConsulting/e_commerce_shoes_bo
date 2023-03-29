import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";

function Layout() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="screen-bg w-100 flex flex-column flex-center">
          <h1 className="screen-title">Coupon details</h1>
          <div className="w-50">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
