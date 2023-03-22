import React from "react";
import SideNav from "../sideNav/SideNav";
import "./sideBar.css";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

function SideBar() {
  return (
    <div className="sideNavWrapper">
      <nav className="sideNavMenu">
        <SideNav />
        <div className="logoutButton">
          <LogoutIcon style={{ color: "white", margin: "8px 15px" }} />
          <Link
            to={"/login"}
            style={{
              color: "white",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
