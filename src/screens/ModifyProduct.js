import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductById,
  editProductByIdAuth,
} from "../services/servicesProducts";
import { useTranslation } from "react-i18next";
import { modifyProductFormProps } from "../utils/formUtils";
import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
//import ViewDetails from "../components/functionalComponents/viewDetails/ViewDetails";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";
import Form from "../components/hookComponents/form/Form";

function ModifyProduct() {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    product: null,
    formProps: [],
  });
  const language = i18n.language;
  const canUploadPictures = true;
  const screenName = "ModifyProduct";

  const { id } = useParams();

  const editUser = (data) => {
    console.log("DATA", data);
    delete data.id;
    console.log("DATA2", data);
    /*Object.keys(data).forEach((item) => {
      if (item === "authorities") {
        return (data[item] = ["USER", data[item]]);
      }
    });*/
    editProductByIdAuth(id, data);
  };

  useEffect(() => {
    async function getResources() {
      const response = await getProductById(id, language);
      console.log("RESPONSE:", response.data);
      setState({ ...state, product: response.data });
      if (!state.product) return;
      modProductFormProps(modifyProductFormProps);
    }
    getResources();
  }, [state.product]);

  function modProductFormProps(formFields) {
    let newformProps = [];

    for (let i = 0; i < formFields.length; i++) {
      newformProps.push({
        ...formFields[i],
        defaultValue: Object.values(state.product)[i],
      });
    }
    console.log("OLD FORM PROPS", modifyProductFormProps);
    console.log("NEW FORM PROPS", newformProps);
    //let concatenazione = [...newformProps, ...images];
    //console.log("CONCATENAZIONE ", concatenazione);

    setState({ ...state, formProps: newformProps });
    //setState({ ...state, formProps: concatenazione });
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        {state.formProps.length > 0 && (
          <div className="screen-bg w-100 flex flex-column flex-center">
            <h1 className="screen-title">Modify product</h1>
            <div className="flex w-100 align-center justify-center">
              <MediaCard
                imageSrc="https://shop.saravecchi.it/wp-content/uploads/2020/06/Coupon_NoText.jpg"
                height={{ height: 300 }}
                title="Coupon"
                width={{ width: 300, marginRight: "40px" }}
                style={{
                  boxShadow: "10px 10px 50px #0371bc",
                  borderRadius: "25px",
                }}
              />

              <Form
                propsData={state.formProps}
                abilitatePictures={canUploadPictures}
                screenName={screenName}
                buttonTitle={t("modify")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModifyProduct;
