import React from "react";
import Form from "../components/hookComponents/form/Form";
import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import { useTranslation } from "react-i18next";
import { addProductFormProps } from "../utils/formUtils";

export default function AddProduct(props) {
  const { t } = useTranslation();
  const canUploadPictures = true;

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ backgroundColor: "#f9fafb", width: "100%" }}>
          <h1 className="screen-title">{t("addProduct")}</h1>
          <div style={{ width: "95%", margin: "0 auto" }}>
            <Form
              propsData={addProductFormProps}
              abilitatePictures={canUploadPictures}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
