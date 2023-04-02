import React from "react";
import { addAddress } from "../services/servicesAddresses";
import { useTranslation } from "react-i18next";
import { addAddressFormProps } from "../utils/formUtils";
import Form from "../components/hookComponents/form/Form";

function AddAddress() {
  const { t } = useTranslation();

  async function addNewAddress(data) {
    console.log("FORM DATA:", data);
    const response = await addAddress(data);
    console.log("RESPONSE:", response);
    if (response.status === 200) {
      alert("Address added successfully");
      window.location.href = "/personal-area/addresses";
    } else {
      alert("Error adding address");
    }
  }

  return (
    <>
      <h1 className="screen-title">{t("addAddress")}</h1>
      <div className="flex flex-center">
        <Form
          propsData={addAddressFormProps}
          buttonTitle={t("add")}
          onSubmit={addNewAddress}
        />
      </div>
    </>
  );
}

export default AddAddress;
