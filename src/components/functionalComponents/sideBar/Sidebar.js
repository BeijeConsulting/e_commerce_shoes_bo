import React from "react";
import SideNav from "../sideNav/SideNav";
import "./sideBar.css";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";
import { signOut } from "../../../services/servicesAuth";
import { useDispatch, useSelector } from "react-redux";
import { clearLocalStorage } from "../../../utils/localStorageUtils";
import { removeToken, setToken } from "../../../redux/duck/token/tokenDuck";
import {
  setUserCredentials,
  initUserCredentials,
} from "../../../redux/duck/user/userDuck";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import {
  notifyLogOutSuccess,
  notifyLogOutError,
} from "../../../utils/notificationsUtils";

function SideBar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, refreshToken } = useSelector((state) => state.tokenDuck);
  // async function userLogOut() {
  //   const response = await signOut(refreshToken, token);
  //   console.log("SIGNOUT", response);

  //   dispatch(removeUserCredentials());

  //   dispatch(removeToken());

  //   clearLocalStorage();
  //   navigate(`/${lang}/`);
  // }

  async function userLogOut() {
    const response = await signOut(refreshToken, token);
    if (response.status < 300) {
      dispatch(initUserCredentials());
      dispatch(removeToken());
      clearLocalStorage();

      notifyLogOutSuccess();
      setTimeout(() => {
        navigate(`/login`);
      }, 1500);
    } else {
      notifyLogOutError();
    }
  }

  return (
    <div className="sideNavWrapper">
      {" "}
      <nav className="sideNavMenu">
        <SideNav />
        <div className="logoutButton">
          <LogoutIcon style={{ color: "white", margin: "8px 15px" }} />
          <Button
            onClick={userLogOut}
            style={{
              color: "white",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            {t("logout")}
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
