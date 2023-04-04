import React, { Component } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { ordersColumns } from "../utils/tableUtils";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  getOrders,
  getOrdersAuth,
  deleteOrderByIdAuth,
} from "../services/servicesOrders";
import { ordersListIcons } from "../utils/tableUtils";

export default function Orders() {
  const [state, setState] = useState({
    ordersList: null,
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function getResources() {
      const response = await getOrdersAuth();
      console.log("RESPONSE orders:", response.data);
      setState({ ordersList: response.data?.orders });
    }
    getResources();
  }, []);

  async function deleteOrder(id) {
    alert(`Are you sure you want to delete order with id ${id}?`);
    const response = await deleteOrderByIdAuth(id);
    console.log("RESPONSE DELETE:", response);
    if (response.status === 200) {
      alert("Order eliminado correctamente");
      window.location.reload();
    } else {
      alert("Error al eliminar order");
    }
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">Gestione ordini</h1>
          <div style={{ width: "95%", margin: "0 auto" }}>
            <FiltersRow
              label={t("ordersList")}
              addLabel={t("addOrder")}
              addUrl="/orders/add-order"
            />
            <GenericTable
              fields={state.ordersList}
              columns={ordersColumns}
              icons={ordersListIcons}
              deleteAction={deleteOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
