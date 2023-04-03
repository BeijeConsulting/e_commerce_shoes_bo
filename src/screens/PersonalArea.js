import React, { useState, useEffect } from "react";
import Form from "../components/hookComponents/form/Form";
import { personalAreaFormProps, modifyFormProps } from "../utils/formUtils";
import "../styles/personalArea/personalArea.css";
import { useTranslation } from "react-i18next";
import { getUserAuth } from "../services/servicesAuth";
import { Button } from "@mui/material";
import { editUserAuth } from "../services/servicesUsers";
import { Link } from "react-router-dom";

export default function PersonalArea() {
  const { t } = useTranslation();

  const [state, setState] = useState({
    user: null,
    formProps: [],
    isEditing: false,
  });

  function toggleEditUser() {
    setState({ ...state, isEditing: !state.isEditing });
    // modUserFormProps(personalAreaFormProps);
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  async function getUserDetails() {
    const response = await getUserAuth();
    if (!response) return;
    console.log(response.data);
    setState({
      ...state,
      user: response.data,
      formProps: modifyFormProps(personalAreaFormProps, response.data),
    });
  }

  async function editUser(data) {
    const response = await editUserAuth(data);
    console.log("RESPONSE:", response);
    if (response.status === 200) {
      alert("User data modified successfully");
    } else {
      alert("Error modifying coupon");
    }
    window.location.reload();
  }

  return (
    <div className="personalArea-form">
      <h1 className="screen-title">{t("personalArea")}</h1>
      <div className="flex flex-center">
        <div className="w-50">
          <div
            className={
              state.formProps?.length > 0
                ? "user-details-container w-70"
                : "user-details-container w-100"
            }
          >
            <h3> {t("personalData")}</h3>
            <p>
              <span className="bold">{t("name")}:&nbsp;</span>{" "}
              {state.user?.first_name}
            </p>
            <p>
              <span className="bold">{t("lastName")}:&nbsp;</span>{" "}
              {state.user?.last_name}
            </p>
            <p>
              <span className="bold">{t("email")}:&nbsp;</span>{" "}
              {state.user?.email}
            </p>
            <p>
              <span className="bold">{t("telephone")}:&nbsp;</span>{" "}
              {state.user?.telephone}
            </p>
            <p>
              <span className="bold">{t("birthDate")}:&nbsp;</span>{" "}
              {state.user?.birth_date}
            </p>
            <Link to="/personal-area/addresses" className="addresses-link">
              {t("yourAddresses")}
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={toggleEditUser}
            >
              {t("modify")}
            </Button>
          </div>
        </div>
        {state.isEditing && (
          <div className="w-50">
            <Form
              propsData={state?.formProps}
              buttonTitle={t("save")}
              buttonColor="primary"
              onSubmit={editUser}
            />
          </div>
        )}
      </div>
    </div>
  );
}
