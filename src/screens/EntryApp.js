import React, { Component } from "react";
import i18next from "i18next";
import i18n from "../assets/translations/i18n";

export default class EntryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "en",
    };
  }

  changeLanguageIt = () => {
    i18n.changeLanguage("it");
    this.setState({ language: "it" });
  };

  changeLanguageEN = () => {
    i18n.changeLanguage("en");
    this.setState({ language: "en" });
  };

  render() {
    return (
      <div>
        <h1>Ciao, questo è un test</h1>
        <p>Stiamo provando le traduzioni</p>
        <p>{i18next.t("greeting")}</p>
        <p>{i18next.t("test")}</p>
        <button onClick={this.changeLanguageIt}>IT</button>
        <button onClick={this.changeLanguageEN}>EN</button>
      </div>
    );
  }
}
