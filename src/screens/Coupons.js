import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { useTranslation } from "react-i18next";
import { getCoupons } from "../services/servicesCoupons";
import { couponsColumns } from "../utils/tableUtils";

function Coupons(props) {
  const [state, setState] = useState({
    couponsList: null,
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function getResources() {
      const response = await getCoupons();
      console.log("RESPONSE:", response.data);
      setState({ couponsList: response.data });
    }
    getResources();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("couponsManagement")}</h1>
          <div style={{ width: "95%", margin: "0 auto" }}>
            <FiltersRow label={t("couponsList")} />
            <GenericTable
              fields={state.couponsList}
              columns={couponsColumns}
              isFromCoupons={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
