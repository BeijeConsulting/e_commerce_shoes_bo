import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./routing/routing";
import { BrowserRouter } from "react-router-dom";
import "./styles/common.css";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Provider>
);
