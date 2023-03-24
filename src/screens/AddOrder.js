import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { addOrdertFormProps } from "../utils/formUtils";
import { modifyDiscountFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/servicesProducts";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";
import { getProducts } from "../services/servicesProducts";

function AddOrder(props) {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    product: null,
    productArr: [],
  });
  const language = i18n.language;

  const { id } = useParams();

  // USEFFECT CHE CHIAMA I PRODOTTI E VENGONO PASSATI IN UN ARRAY AL FORM E VISUALIZZATI NELLA SCREEN DI ADD-ORDER
  useEffect(() => {
    async function getResourcesProd() {
      const response = await getProducts();
      setState({
        ...state,
        productArr: response.data,
      });
    }
    getResourcesProd();
  }, []);

  // useEffect(() => {
  //   async function getResources() {
  //     const response = await getProductById(id, language);
  //     console.log("RESPONSE:", response.data);
  //     setState({ ...state, product: response.data });
  //   }
  //   getResources();
  // }, [language]);

  const canUploadPictures = false;
  const addTitle = t("add");

  console.log(state.productArr);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("addOrder")}</h1>
          <div
            style={{
              width: "95%",
              height: "80%",
              margin: "0 auto",
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 50,
                width: "50%",
              }}
            >
              <p>{state.product?.description}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Form
                propsData={addOrdertFormProps}
                abilitatePictures={canUploadPictures}
                buttonTitle={addTitle}
                products={state.productArr}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrder;
