import React, { Component } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";

export default class Users extends Component {
  render() {
    return (
      <div>
        <h1>USERS</h1>
        <button>ADD USER</button>
        <button>MODIFY USER</button>
        <SideBar />
      </div>
    );
  }
}
