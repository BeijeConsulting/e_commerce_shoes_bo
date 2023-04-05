import React from "react";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { addUserFormProps } from "../utils/formUtils";
import { addUserAuth } from "../services/servicesUsers";

function AddUser(props) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const optionValues = [
    { value: "USER", label: "Customer" },
    { value: "ADMIN", label: "Admin" },
    { value: "DATA_ENTRY", label: "Data Entry" },
    { value: "MARKETING", label: "Marketing" },
  ];

  const addUser = async (data) => {
    console.log("DATA", data);
    Object.keys(data).forEach((item) => {
      if (item === "authorities") {
        return (data[item] = ["USER", data[item]]);
      }
    });
    const response = await addUserAuth(data);
    console.log("RESPONSE", response);
    if (response.status === 200) {
      alert("User added successfully");
      window.location.href = "/users";
    } else {
      alert("Error adding user");
    }
  };

  return (
    <>
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
    </>
  );
}

export default AddUser;
