import React, { Component } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { useTranslation } from "react-i18next";
import { productsListIcons, usersColumns } from "../utils/tableUtils";
import { Tabs, Tab } from "@mui/material";

import { useState } from "react";

export default function Users() {
  const { t, i18n } = useTranslation();

  const [state, setState] = useState({
    user: "utenti",
  });

  const usersArr = [
    {
      id: 1,
      name: "Francesco",
      surname: "Cataletto",
      email: "C@gmail.com",
      telephone: "111222333",
      birthdate: "7/12/1997",
      address: "Via Trieste",
    },
  ];

  const workersArr = [
    {
      id: 3,
      name: "Paolo",
      surname: "Di Martino",
      email: "PM@gmail.com",
      telephone: "45566654",
      birthdate: "10/2/1994",
      address: "Via Napoli",
    },
  ];

  function changeUser(e) {
    setState({
      ...state,
      user: e.target.textContent.toLowerCase(),
    });
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("manageUsers")}</h1>
          <div style={{ width: "95%", margin: "0 auto" }}>
            <FiltersRow label={t("usersList")} />
            <Tabs
              value={state.user}
              onChange={changeUser}
              style={{
                marginBottom: "10px",
                backgroundColor: "white",
                border: "2px solid #0171bc",
                borderRadius: "7px",
              }}
            >
              <Tab label="Utenti" value="utenti" />
              <Tab label="Dipendenti" value="dipendenti" />
            </Tabs>
            <GenericTable
              fields={state.user === "utenti" ? usersArr : workersArr}
              columns={usersColumns}
              icons={productsListIcons}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
