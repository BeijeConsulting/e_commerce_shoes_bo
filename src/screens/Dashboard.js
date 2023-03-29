import React, { Component } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import "../styles/dashboard/dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* Dashboard */}
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar />
          <div style={{ width: "100%" }} className="screen-bg">
            <div className="flex">
              <div className="dashboardHeightCalc w-70">
                <div className="h-50">GRAFICO VENDITE ANNUALI</div>
                <div className="flex h-50">
                  <div className="w-50">RECENT ORDERS</div>
                  <div className="w-50">TOP COUNTRIES</div>
                </div>
              </div>
              <div className="dashboardHeightCalc w-30 topSellingWrapper">
                <div>
                  <h3>TOP SELLING</h3>
                  <div>CARD CON TOP SELL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
