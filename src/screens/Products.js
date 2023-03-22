import React, { Component } from "react";
import withRouter from "../routing/wrapRoutingClass/withNavigation";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";

class Products extends Component {
  constructor(props) {
    super(props);
    console.log(this.props?.router.params.id);
  }
  render() {
    return (
      <div>
        {/* <h1>PRODUCTS</h1>
        <button>ADD PRODUCT</button>
        <button>MODIFY PRODUCT</button> */}
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

export default withRouter(Products);
