import React from "react";
import Form from "../components/hookComponents/form/Form";
import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import { useTranslation } from "react-i18next";
import {
  addProductFormProps,
  addProductDetailsFormProps,
} from "../utils/formUtils";
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

  async function addProd(data) {
    console.log("FORM DATA:", data);
    const response = await addProductAuth(data);
    console.log("RESPONSE ADD PRODUCT:", response);
    if (response.status === 200) {
      alert("Product added successfully");
      // window.location.href = "/products";
    } else {
      alert("Error adding product");
    }
  }

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
              propsProductDetails={addProductDetailsFormProps}
              abilitatePictures={canUploadPictures}
              buttonTitle={t("addProduct")}
              // onSubmit={addProduct}
              addProductAuth={addProd}
              productDetails={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
