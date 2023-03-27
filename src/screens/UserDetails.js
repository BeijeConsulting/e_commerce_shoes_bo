import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { addUserFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/servicesUsers";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";

function UserDetails(props) {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    // product: null,
  });

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getUserById(id);
      if (!response) return;
      console.log("RESPONSE:", response.data[0]);
      setState({ ...state, product: response.data[0] });
    }
    getResources();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("userDetails")}</h1>
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
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
