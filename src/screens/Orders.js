import React, { Component } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";

export default class Orders extends Component {
  render() {
    return (
      <div>
        {/* <h1>ORDERS</h1>
        <button>ADD ORDER</button>
        <button>MODIFY ORDER</button> */}
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar />
          <div style={{ backgroundColor: "red", width: "100%" }}>
            <h1>UTENTE LOGGATO</h1>
            <GenericTable />
          </div>
        </div>
      </div>
    );
  }
}
