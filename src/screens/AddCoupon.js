import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { addCouponFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/servicesProducts";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";
import { addCouponAuth } from "../services/servicesCoupons";

function AddCoupon(props) {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    // product: null,
  });
  const language = i18n.language;

  const { id } = useParams();

  const addCoupon = async (data) => {
    console.log("Success");
    console.log(data);
    return await addCouponAuth(data);
    // return await addUserAuth(data);
    // const response = await signin({
    //   email: data.email,
    //   password: data.password,
    // });

    // if (response.status === 200) {
    //   const user = await getUser(response.data.token);
    //   console.log("user", user);

    //   dispatch(
    //     setUserCredentials({
    //       name: user.data.name,
    //       surname: user.data.surname,
    //       authorities: response.data.permission,
    //       email: user.data.email,
    //       isLogged: true,
    //     })
    //   );

    //   setLocalStorage("token", response.data.token);
    //   setLocalStorage("refreshToken", response.data.refreshToken);

    //   navigate(`/`);
    // }

    // console.log(response);
  };

  // useEffect(() => {
  //   async function getResources() {
  //     const response = await getProductById(id, language);
  //     console.log("RESPONSE:", response.data);
  //     setState({ ...state, product: response.data });
  //   }
  //   getResources();
  // }, [language]);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("addCoupon")}</h1>
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
                gap: 50,
                width: "50%",
              }}
            >
              <MediaCard
                imageSrc="https://shop.saravecchi.it/wp-content/uploads/2020/06/Coupon_NoText.jpg"
                height={{ height: 300 }}
                title="Coupon"
                width={{ width: 300 }}
                style={{
                  boxShadow: "10px 10px 50px #0371bc",
                  borderRadius: "25px",
                }}
              />
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
                propsData={addCouponFormProps}
                abilitatePictures={false}
                buttonTitle={t("add")}
                language={language}
                onSubmit={addCoupon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCoupon;
