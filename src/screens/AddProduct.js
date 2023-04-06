import React from "react";
import Form from "../components/hookComponents/form/Form";
import { useTranslation } from "react-i18next";
import {
  addProductFormProps,
  addProductDetailsFormProps,
} from "../utils/formUtils";
import { addProductAuth } from "../services/servicesProducts";
import { notifyAddSuccess, notifyAddError } from "../utils/notificationsUtils";
import { useNavigate } from "react-router-dom";

export default function AddProduct(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
      notifyAddSuccess("Product");
      navigate(`/products`);
    } else {
      notifyAddError("product");
    }
  }

  return (
    <>
      <h1 className="screen-title">{t("addProduct")}</h1>
      <div style={{ width: "50%", margin: "0 auto" }}>
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
    </>
  );
}
