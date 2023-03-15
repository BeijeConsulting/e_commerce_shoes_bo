import React, { Component } from "react";
import withRouter from "../routing/wrapRoutingClass/withNavigation";

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
      </div>
    );
  }
}

export default withRouter(Products);
