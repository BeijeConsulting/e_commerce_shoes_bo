import React, { useState } from "react";
import Form from "../components/hookComponents/form/Form";
import { modifyOrderFormProps } from "../utils/formUtils";
import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import { useTranslation } from "react-i18next";
import { getDetailOrderAuth } from "../services/servicesOrders";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { editOrderByIdAuth } from "../services/servicesOrders";

function ModifyOrder() {
  const { t, i18n } = useTranslation();
  const addTitle = t("modify");

  const { id } = useParams();

  const [state, setState] = useState({
    order: null,
    formProps: [],
  });

  useEffect(() => {
    async function getResources() {
      const response = await getDetailOrderAuth(id);
      console.log(response.data);
      if (!response) return;
      setState({
        ...state,
        order: response.data?.status,
      });
      modOrderFormProps(modifyOrderFormProps);
    }
    getResources();
  }, [state.order]);

  function modOrderFormProps(formFields) {
    if (!state.order) return;
    let newformProps = [];

    for (let i = 0; i < formFields.length; i++) {
      if (formFields[i].label === "status") {
        newformProps.push({
          ...formFields[i],
          defaultValue: state.order,
        });
      }
    }

    setState({ ...state, formProps: newformProps });
  }

  const editOrder = (data) => {
    console.log(data);
    const status = data.status;
    const orderSent = { id: id, status };
    console.log(orderSent);
    editOrderByIdAuth(orderSent);
  };

  return (
    <div>
      <Header />
      <div className="personalArea-box">
        <SideBar />
        <div>
          <div className="personalArea-user">
            <h1>Modify Order</h1>
          </div>
          <div className="personalArea-form">
            {state.formProps.length > 0 && (
              <>
                <Form
                  propsData={state.formProps}
                  buttonTitle={addTitle}
                  onSubmit={editOrder}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifyOrder;
