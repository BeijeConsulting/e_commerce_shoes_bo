import React from "react";
import store from "../redux/store";
// import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/functionalComponents/languageSelector/LanguageSelector";

function Login() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      Login
      <h3>{t("test")}</h3>
      <LanguageSelector />
    </div>
  );
}

export default Login;
