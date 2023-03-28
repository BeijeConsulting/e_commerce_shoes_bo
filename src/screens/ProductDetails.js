import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/servicesProducts";
import LanguageSelector from "../components/functionalComponents/languageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import ViewDetails from "../components/functionalComponents/viewDetails/ViewDetails";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";

function ProductDetails() {
  const { i18n } = useTranslation();
  const [state, setState] = useState({
    product: null,
  });
  const language = i18n.language;

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getProductById(id, language);
      console.log("RESPONSE:", response.data);
      setState({ ...state, product: response.data });
    }
    getResources();
  }, [language]);

  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="screen-bg w-100 flex flex-column flex-center">
          <h1 className="screen-title">Product details</h1>
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
            {state.product && <ViewDetails details={state.product} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
