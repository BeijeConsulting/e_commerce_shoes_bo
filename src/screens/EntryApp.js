import React, { Component } from "react";
import i18next from "i18next";
import i18n from "../assets/translations/i18n";
import LanguageSelector from "../components/functionalComponents/languageSelector/LanguageSelector";
import withRouter from "../routing/wrapRoutingClass/withNavigation";
import { connect } from "react-redux";
import GenericTable from "../components/functionalComponents/table/GenericTable";

class EntryApp extends Component {
  constructor(props) {
    super(props);
  }

  navigateToLogin = () => {
    this.props.router.navigate("/login");
  };

  render() {
    return (
      <div>
        <h1>{i18next.t("test")}</h1>
        <p>{i18next.t("greeting")}</p>
        <p>Stiamo provando le traduzioni</p>
        <p></p>

        <LanguageSelector />
        <button onClick={this.navigateToLogin}>To Login</button>
        <GenericTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  languageDuck: state.languageDuck.language,
});

export default connect(mapStateToProps)(withRouter(EntryApp));
