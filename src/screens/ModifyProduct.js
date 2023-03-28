import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/servicesProducts";
import { useTranslation } from "react-i18next";
import { modifyProductFormProps } from "../utils/formUtils";
import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import ViewDetails from "../components/functionalComponents/viewDetails/ViewDetails";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";
import Form from "../components/hookComponents/form/Form";

function ModifyProduct() {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    product: null,
    formProps: [],
  });
  const language = i18n.language;

  const { id } = useParams();

  // const optionImagesValues = [
  //   // { value: null, label: "Customer" },
  //   // { value: "admin", label: "Admin" },
  //   // { value: "data-entry", label: "Data Entry" },
  //   // { value: "marketing", label: "Marketing" },
  // ];

  // function generateSizes() {
  //   if (!state.product) return;
  //   // I need to push this object in the formProps array
  //  /* {
  //   label: "name",
  //   type: "text",
  //   id: "name",
  //   name: "name",
  //   required: true,
  // }, */
  //   let sizes = state.product.sizes;
  //   let newSizes = [];
  //   for (let i = 0; i < sizes.length; i++) {
  //     newSizes.push({
  //       label: sizes[i].name,
  //       type: "text",
  //       id: sizes[i].name,
  //       name: sizes[i].name,
  //       required: true,
  //     });
  //   }
  //   return newSizes;
  // }

  // function addExtraFields(formProps) {
  //   let newFormProps = [...formProps];
  //   newFormProps.push({
  //     type: "select",
  //     name: "images",
  //     label: "Images",
  //     options: optionImagesValues,
  //     isMulti: true,
  //   });
  //   newFormProps.push({
  //     type: "select",
  //     name: "sizes",
  //     label: "Sizes",
  //     options: optionSizesValues,
  //     isMulti: true,
  //   });
  //   return newFormProps;
  // }

  useEffect(() => {
    async function getResources() {
      const response = await getProductById(id, language);
      console.log("RESPONSE:", response.data);
      setState({ ...state, product: response.data });
      modProductFormProps(modifyProductFormProps);
    }
    getResources();
  }, [language]);

  function modProductFormProps(formFields) {
    if (!state.product) return;
    let newformProps = [];

    for (let i = 0; i < formFields.length; i++) {
      // if (Array.isArray(formFields[i])) {
      //   formFields[i].forEach((el) => {
      //     console.log("EL", el);
      //   });
      // }
      newformProps.push({
        ...formFields[i],
        defaultValue: Object.values(state.product)[i],
      });
    }
    console.log("OLD FORM PROPS", modifyProductFormProps);
    console.log("NEW FORM PROPS", newformProps);

    setState({ ...state, formProps: newformProps });
    // return newformProps;
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
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
            {state.formProps.length > 0 && (
              <Form
                propsData={state.formProps}
                abilitatePictures={false}
                buttonTitle={t("modify")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifyProduct;
