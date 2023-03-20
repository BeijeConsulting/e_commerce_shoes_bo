import React from "react";
import SideNav from "../sideNav/SideNav";
import Button from "../button/Button";
import "./sideBar.css";

function SideBar() {
  return (
    <div className="sideNavWrapper">
      <nav className="sideNavMenu">
        <SideNav />
        <Button action="Disconnetti" />
      </nav>
    </div>
  );
}

export default SideBar;
