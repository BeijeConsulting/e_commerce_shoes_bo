import React from "react";
import { useState, useEffect } from "react";
import { getUserByIdAuth, editUserByIdAuth } from "../services/servicesUsers";
import { modifyUserFormProps } from "../utils/formUtils";
import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import { useParams } from "react-router-dom";
import Form from "../components/hookComponents/form/Form";
import { useTranslation } from "react-i18next";

function ModifyUser() {
  const [state, setState] = useState({
    user: null,
    formProps: [],
  });

  const { t } = useTranslation();
  const { id } = useParams();

  const optionValues = [
    { value: "", label: "Customer" },
    { value: "ADMIN", label: "Admin" },
    { value: "DATA_ENTRY", label: "Data Entry" },
    { value: "MARKETING", label: "Marketing" },
  ];

  useEffect(() => {
    async function getResources() {
      const response = await getUserByIdAuth(id);
      if (!response) return;
      console.log("RESPONSE:", response.data?.usersDTO[0]);
      setState({ ...state, user: response.data?.usersDTO[0] });
      modUserFormProps(modifyUserFormProps);
    }
    getResources();
  }, [state.user]);

  function modUserFormProps(formFields) {
    if (!state.user) return;
    let newformProps = [];

    for (let i = 0; i < formFields.length; i++) {
      newformProps.push({
        ...formFields[i],
        defaultValue: Object.values(state.user)[i],
      });
    }
    console.log("OLD FORM PROPS", modifyUserFormProps);
    console.log("NEW FORM PROPS", newformProps);

    setState({ ...state, formProps: newformProps });
  }

  const editUser = (data) => {
    console.log("DATA", data);
    delete data.id;
    console.log("DATA2", data);
    Object.keys(data).forEach((item) => {
      if (item === "authorities") {
        return (data[item] = ["USER", data[item]]);
      }
    });
    editUserByIdAuth(id, data);
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="screen-bg w-100 flex flex-column flex-center">
          <h1 className="screen-title">Modify user</h1>
          <p>
            <span className="bold">Previous roles: </span>
            {state.user?.authories
              .toString()
              .toLowerCase()
              .split(",")
              .join(", ")}
          </p>
          <div className="flex w-100 align-center justify-center">
            {state.formProps.length > 0 && (
              <>
                <Form
                  propsData={state.formProps}
                  abilitatePictures={false}
                  buttonTitle={t("modify")}
                  optionValues={optionValues}
                  onSubmit={editUser}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifyUser;
