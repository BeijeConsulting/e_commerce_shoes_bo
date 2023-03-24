import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { modifyCouponFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getCouponById } from "../services/servicesCoupons";

function ModifyCoupon(props) {
  const { t } = useTranslation();

  const [state, setState] = useState({
    coupon: null,
    formProps: [],
  });

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getCouponById(id);
      console.log("RESPONSE:", response.data[0]?.coupon);
      setState({ ...state, coupon: response.data[0]?.coupon });
      modCouponFormProps(modifyCouponFormProps);
    }
    getResources();
  }, [state.coupon]);

  function modCouponFormProps(formFields) {
    if (!state.coupon) return;
    let newformProps = [];

    for (let i = 0; i < formFields.length; i++) {
      newformProps.push({
        ...formFields[i],
        defaultValue: Object.values(state.coupon)[i],
      });
    }
    console.log("OLD FORM PROPS", modifyCouponFormProps);
    console.log("NEW FORM PROPS", newformProps);

    setState({ ...state, formProps: newformProps });
    // return newformProps;
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("modifyCoupon")}</h1>
          <div
            style={{
              width: "95%",
              margin: "0 auto",
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
                width: "50%",
              }}
            >
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
    </div>
  );
}

export default ModifyCoupon;
