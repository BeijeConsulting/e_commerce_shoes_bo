import React from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Form from "../components/hookComponents/form/Form";
import { personalAreaFormProps } from "../utils/formUtils";
import "../styles/personalArea/personalArea.css";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";

export default function PersonalArea() {
  const { t, i18n } = useTranslation();
  const addTitle = t("save");
  return (
    <div>
      <Header />
      <div className="personalArea-box">
        <SideBar />
        <div>
          <div className="personalArea-user">
            <h1>Area Personale</h1>
            <div>
              <img src="../assets/images/languageIcons/gb.svg" />
              <h2>Nome Cognome</h2>
              <h3>Ruolo</h3>
            </div>
          </div>
          <div className="personalArea-form">
            <Form propsData={personalAreaFormProps} buttonTitle={addTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}
