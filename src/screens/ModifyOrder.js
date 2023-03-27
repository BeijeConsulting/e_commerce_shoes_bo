import React from "react";
import Form from "../components/hookComponents/form/Form";
import { modifyOrderFormProps } from "../utils/formUtils";
import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import { useTranslation } from "react-i18next";

function ModifyOrder() {
  const { t, i18n } = useTranslation();
  const addTitle = t("modify");
  return (
    <div>
      <Header />
      <div className="personalArea-box">
        <SideBar />
        <div>
          <div className="personalArea-user">
            <h1>Modify Order</h1>
          </div>
          <div className="personalArea-form">
            <Form propsData={modifyOrderFormProps} buttonTitle={addTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifyOrder;
