import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { modifyCouponFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getCouponByIdAuth, editCouponAuth } from "../services/servicesCoupons";

function ModifyCoupon(props) {
  const { t } = useTranslation();

  const [state, setState] = useState({
    coupon: null,
    formProps: [],
  });

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getCouponByIdAuth(id);
      console.log("RESPONSE:", response.data);
      setState({ ...state, coupon: response.data[0] });
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

  async function editCoupon(data) {
    console.log("FORM DATA", data);
    const response = await editCouponAuth(data);
    console.log("RESPONSE:", response);
    if (response.status === 200) {
      alert("Coupon modified successfully");
      window.location.href = "/coupons";
    } else {
      alert("Error modifying coupon");
    }
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
                  onSubmit={editCoupon}
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
