import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getUserByIdAuth } from "../services/servicesUsers";
import ViewDetails from "../components/functionalComponents/viewDetails/ViewDetails";

function UserDetails(props) {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    user: null,
  });

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getUserByIdAuth(id);
      if (!response) return;
      console.log("RESPONSE:", response.data?.usersDTO[0]);
      setState({ ...state, user: response.data?.usersDTO[0] });
    }
    getResources();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="screen-bg w-100 flex flex-column flex-center">
          <h1 className="screen-title">{t("userDetails")}</h1>
          <div className="w-50">
            {state.user && <ViewDetails details={state.user} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
