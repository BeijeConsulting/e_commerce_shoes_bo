import React, { Component } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { useTranslation } from "react-i18next";
import { usersListIcons, usersColumns } from "../utils/tableUtils";
import { Tabs, Tab } from "@mui/material";
import { getUsers, getEmployees } from "../services/servicesUsers";

import { useState, useEffect } from "react";

export default function Users() {
  const { t, i18n } = useTranslation();

  const [state, setState] = useState({
    users: null,
    employees: null,
    authority: "users",
  });

  useEffect(() => {
    async function getResources() {
      const response = await getUsers(0, 10);
      const responseEmployees = await getEmployees(0, 10);
      console.log("RESPONSE USERS:", response.data);
      setState({
        ...state,
        users: response.data,
        employees: responseEmployees.data,
      });
    }
    getResources();
  }, []);

  function changeUser(e) {
    setState({
      ...state,
      authority: e.target.textContent.toLowerCase(),
    });
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("manageUsers")}</h1>
          {state.users && (
            <div style={{ width: "95%", margin: "0 auto" }}>
              <FiltersRow label={t("usersList")} />
              <Tabs
                value={state.authority}
                onChange={changeUser}
                style={{
                  marginBottom: "10px",
                  backgroundColor: "white",
                  border: "2px solid #0171bc",
                  borderRadius: "7px",
                }}
              >
                <Tab label="Users" value="users" />
                <Tab label="Employees" value="employees" />
              </Tabs>
              <GenericTable
                fields={
                  state.authority === "users" ? state.users : state.employees
                }
                columns={usersColumns}
                icons={usersListIcons}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
