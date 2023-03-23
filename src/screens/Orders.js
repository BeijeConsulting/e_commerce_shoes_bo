import React, { Component } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { ordersColumns } from "../utils/tableUtils";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getOrders } from "../services/servicesOrders";

export default function Orders() {
  const [state, setState] = useState({
    ordersList: null,
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function getResources() {
      const response = await getOrders();
      console.log("RESPONSE orders:", response.data);
      setState({ ordersList: response.data.orders });
    }
    getResources();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">Gestione ordini</h1>
          <div style={{ width: "95%", margin: "0 auto" }}>
            <FiltersRow label={t("ordersList")} />
            <GenericTable fields={state.ordersList} columns={ordersColumns} />
          </div>
        </div>
      </div>
    </div>
  );
}
