import React from "react";
import Form from "../components/hookComponents/form/Form";
import { loginFormProps } from "../utils/formUtils";
import { useTranslation } from "react-i18next";
import "../styles/login/login.css";

function Login() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-center screen-bg w-100 login-page-container">
      <Form
        propsData={loginFormProps}
        abilitatePictures={false}
        buttonTitle={t("login")}
      />
    </div>
  );
}

export default Login;
