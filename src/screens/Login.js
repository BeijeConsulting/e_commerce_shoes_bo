/* import React from "react";
import store from "../redux/store";
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

export default Login; */

import React from "react";
import store from "../redux/store";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/functionalComponents/languageSelector/LanguageSelector";
import Form from "../components/hookComponents/form/Form";
import { addProductFormProps } from "../utils/formUtils";

function Login() {
  const { t, i18n } = useTranslation();
  const canUploadPictures = true;

  return (
    <div>
      Login
      <h3>{t("test")}</h3>
      <LanguageSelector />
      <Form
        propsData={addProductFormProps}
        abilitatePictures={canUploadPictures}
      />
    </div>
  );
}

export default Login;
