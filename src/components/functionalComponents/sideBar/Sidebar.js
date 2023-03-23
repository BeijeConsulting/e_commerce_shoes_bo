import React from "react";
import SideNav from "../sideNav/SideNav";
import "./sideBar.css";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";

function SideBar() {
  const { t, i18n } = useTranslation();

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
            {t("logout")}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
