import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { addUserFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/servicesProducts";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";

function AddUser(props) {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    // product: null,
  });
  const language = i18n.language;

  const { id } = useParams();

  const optionValues = [
    { value: null, label: "Customer" },
    { value: "admin", label: "Admin" },
    { value: "data-entry", label: "Data Entry" },
    { value: "marketing", label: "Marketing" },
  ];

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
          <h1 className="screen-title">{t("addUser")}</h1>
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
              <Form
                propsData={addUserFormProps}
                optionValues={optionValues}
                abilitatePictures={false}
                buttonTitle={t("add")}
                language={language}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
