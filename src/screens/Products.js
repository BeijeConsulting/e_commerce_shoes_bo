import React, { Component } from "react";
import withRouter from "../routing/wrapRoutingClass/withNavigation";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";

class Products extends Component {
  constructor(props) {
    super(props);
    console.log(this.props?.router.params.id);
  }
  render() {
    return (
      <div>
        <h1>PRODUCTS</h1>
        <button>ADD PRODUCT</button>
        <button>MODIFY PRODUCT</button>
        <SideBar />
      </div>
    );
  }
}

export default withRouter(Products);
