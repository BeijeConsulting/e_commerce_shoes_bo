import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { addUserFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/servicesProducts";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";
import { addUserAuth } from "../services/servicesUsers";

function AddUser(props) {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({});
  const language = i18n.language;

  const { id } = useParams();

  const optionValues = [
    { value: "USER", label: "Customer" },
    { value: "ADMIN", label: "Admin" },
    { value: "DATA_ENTRY", label: "Data Entry" },
    { value: "MARKETING", label: "Marketing" },
  ];

  const addUser = (data) => {
    Object.keys(data).forEach((item) => {
      if (item === "authorities") {
        return (data[item] = [data[item]]);
      }
    });
    addUserAuth(data);
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
                onSubmit={addUser}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
