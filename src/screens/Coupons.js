import React, { Component } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";

export default class Coupons extends Component {
  render() {
    return (
      <div>
        <h1>COUPON</h1>
        <button>ADD COUPON</button>
        <button>MODIFY COUPON</button>
        <SideBar />
        {/* <Outlet /> */}
      </div>
    );
  }
}
