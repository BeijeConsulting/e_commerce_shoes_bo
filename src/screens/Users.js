import React, { Component } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";

export default class Users extends Component {
  render() {
    return (
      <div>
        {/* <h1>USERS</h1>
        <button>ADD USER</button>
        <button>MODIFY USER</button> */}
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar />
          <div style={{ width: "100%" }} className="screen-bg">
            <h1>UTENTE LOGGATO</h1>
            <GenericTable />
          </div>
        </div>
      </div>
    );
  }
}
