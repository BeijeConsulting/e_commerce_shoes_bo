import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { addOrderFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/servicesProducts";
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
              display: "flex",
              marginTop: "50px",
              justifyContent: "center",
            }}
          >
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
                propsData={addOrderFormProps}
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
