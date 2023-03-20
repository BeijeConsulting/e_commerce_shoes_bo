import React from "react";
import "./header.css";
import AccountPopover from "../accountPopover/AccountPopover";
import LanguagePopover from "../languagePopover/LanguagePopover";
import Logo from "../../../assets/images/logo/logo.svg";

function Header() {
  return (
    <div className="header-body">
      <img src={Logo} className="header-logo" />
      <div className="header-right">
        <div className="header-buttons">
          <LanguagePopover />
          <AccountPopover />
        </div>
      </div>
    </div>
  );
}

export default Header;
