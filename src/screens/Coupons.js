import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { useTranslation } from "react-i18next";
import {
  getCouponsAuth,
  deleteCouponByIdAuth,
} from "../services/servicesCoupons";
import { couponsColumns, couponsListIcons } from "../utils/tableUtils";

function Coupons(props) {
  const [state, setState] = useState({
    couponsList: null,
  });
  const { t } = useTranslation();

  useEffect(() => {
    async function getData() {
      const response = await getCouponsAuth(0, 10);
      if (!response.data) return;
      console.log("RESPONSE COUPONS:", response.data);
      setState({ couponsList: response.data });
    }
    getData();
  }, []);

  async function getResources(page, perPage) {
    const response = await getCouponsAuth(page, perPage);
    if (!response.data) return;
    console.log("RESPONSE COUPONS:", response.data);
    setState({ couponsList: response.data });
  }

  async function deleteCoupon(id) {
    alert(`Are you sure you want to delete coupon with id ${id}?`);
    const response = await deleteCouponByIdAuth(id);
    console.log("RESPONSE DELETE:", response);
    if (response.status === 200) {
      alert("Coupon deleted correctly");
      window.location.reload();
    } else {
      alert("Error while deleting the coupon");
    }
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("couponsManagement")}</h1>
          <div style={{ width: "95%", margin: "0 auto" }}>
            <FiltersRow
              label={t("couponsList")}
              addLabel={"Coupon"}
              addUrl={"/coupons/add-coupon"}
            />
            <GenericTable
              fields={state.couponsList?.coupons}
              columns={couponsColumns}
              icons={couponsListIcons}
              results={state.couponsList?.total_element}
              getResources={getResources}
              deleteAction={deleteCoupon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
