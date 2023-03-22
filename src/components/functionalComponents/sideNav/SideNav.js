import React from "react";
import "./sideNav.css";
import { sidebarConfig } from "../../../utils/sidebarConfigUtils";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function SideNav() {
  // stato per settare utente corrente
  // verrà preso da redux store in base al token iniziale
  const [state, setState] = useState({
    user: [],
  });

  //   oggetto custom che contiene i vari utenti e le relative voci del menu che possono visualizzare e cliccare
  const { admin, marketing, data_entry } = sidebarConfig;

  //   inizializza una sola volta al mount lo stato e il conseguente map del menu
  useEffect(() => {
    setState({
      ...state,
      user: admin,
    });
  }, []);

  //   funzione per mappare le voci del menu in base all'utente loggato
  function mapMenu() {
    const arrMenu = state.user.map((link, key) => {
      return (
        <li key={Math.random(key)}>
          <div>{link.icon}</div>
          <NavLink to={link.link}>{link.label}</NavLink>
        </li>
      );
    });
    return arrMenu;
  }

  return (
    <div className="menuListWrapper">
      <ul>{mapMenu()}</ul>
    </div>
  );
}

export default SideNav;
