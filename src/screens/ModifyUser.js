import React from "react";
import { useState, useEffect } from "react";
import { getUserById } from "../services/servicesUsers";
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

  const optionValues = [
    { value: null, label: "Customer" },
    { value: "admin", label: "Admin" },
    { value: "data-entry", label: "Data Entry" },
    { value: "marketing", label: "Marketing" },
  ];

  const { t, i18n } = useTranslation();

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getUserById(id);
      if (!response) return;
      console.log("RESPONSE:", response.data[0]);
      setState({ ...state, user: response.data[0] });
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
    // return newformProps;
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="screen-bg w-100 flex flex-column flex-center">
          <h1 className="screen-title">Modify user</h1>
          <div className="flex w-100 align-center justify-center">
            {state.formProps.length > 0 && (
              <Form
                propsData={state.formProps}
                abilitatePictures={false}
                buttonTitle={t("modify")}
                optionValues={optionValues}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifyUser;
