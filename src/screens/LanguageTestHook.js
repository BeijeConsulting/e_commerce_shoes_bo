import React from "react";
import { useTranslation } from "react-i18next";

function LanguageTestHook() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <p>{t("greeting")}</p>
    </div>
  );
}

export default LanguageTestHook;
