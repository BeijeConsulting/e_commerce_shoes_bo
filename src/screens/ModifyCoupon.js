import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { addCouponFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getCouponById } from "../services/servicesCoupons";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";

function ModifyCoupon(props) {
  const { t } = useTranslation();
  const [state, setState] = useState({
    coupon: null,
  });

  const { id } = useParams();

  useEffect(() => {
    console.log(addCouponFormProps);
    modifyCouponFormProps(addCouponFormProps);
    async function getResources() {
      const response = await getCouponById(id);
      console.log("RESPONSE:", response.data[0]?.coupon);
      setState({ ...state, coupon: response.data[0]?.coupon });
    }
    getResources();
  }, []);

  function modifyCouponFormProps(formProps) {
    // I want to give each formProp a placeholder value equal to the value of each state.coupon property
    let newformProps = [];
    for (let i = 0; i < formProps.length; i++) {
      newformProps.push({
        ...formProps[i],
        placeholder: state.coupon?.[formProps[i].name],
      });
    }
    console.log("NEW FORM PROPS", newformProps);
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
                justifyContent: "start",
                gap: 20,
                width: "50%",
              }}
            >
              <h2 style={{ paddingTop: "20px" }}>Old values:</h2>
              <p>
                <span style={{ fontWeight: "bold" }}>{t("code")}:</span>{" "}
                {state.coupon?.code}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>{t("value")}:</span>
                {state.coupon?.value}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>{t("maxUsages")}:</span>{" "}
                {state.coupon?.max_usages}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>{t("userId")}:</span>{" "}
                {state.coupon?.user_id}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>{t("expireDate")}:</span>{" "}
                {state.coupon?.expire_date}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>{t("type")}:</span>{" "}
                {state.coupon?.type}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>{t("minOrder")}:</span>{" "}
                {state.coupon?.min_order}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {t("descriptionIt")}:
                </span>{" "}
                {state.coupon?.description_it}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {t("descriptionEn")}:
                </span>{" "}
                {state.coupon?.description_eng}
              </p>
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
              <h2 style={{ paddingTop: "20px", alignSelf: "start" }}>
                New values:
              </h2>
              <Form
                propsData={addCouponFormProps}
                abilitatePictures={false}
                buttonTitle={t("modify")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifyCoupon;
