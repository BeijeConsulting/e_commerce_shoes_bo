import React, { Component } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";

export default class Orders extends Component {
  render() {
    return (
      <div>
        <h1>ORDERS</h1>
        <button>ADD ORDER</button>
        <button>MODIFY ORDER</button>
        <SideBar />
      </div>
    );
  }
}
