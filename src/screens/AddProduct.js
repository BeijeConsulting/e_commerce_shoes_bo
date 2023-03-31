import React from "react";
import Form from "../components/hookComponents/form/Form";
import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import { useTranslation } from "react-i18next";
import { addProductFormProps } from "../utils/formUtils";
import { addProductAuth } from "../services/servicesProducts";

export default function AddProduct(props) {
  const { t, i18n } = useTranslation();
  const canUploadPictures = true;

  // const addProduct = (data) => {
  /* Object.keys(data).forEach((item) => {
      if (item === "authorities") {
        return (data[item] = [data[item]]);
      }
    });*/
  //console.log(data);
  //addProductAuth(data);
  //};

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
              buttonTitle={t("addProduct")}
              // onSubmit={addProduct}
              addProductAuth={addProductAuth}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
