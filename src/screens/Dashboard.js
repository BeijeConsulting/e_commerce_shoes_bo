import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import "../styles/dashboard/dashboard.css";
import LineChart from "../components/functionalComponents/lineChart/LineChart";
import DonutChart from "../components/functionalComponents/donutChart/DonutChart";
import { getOrdersAuth } from "../services/servicesOrders";
import { recentOrdersColumns } from "../utils/tableUtils";
import {
  yearlySellsStats,
  top5mostRecentOrders,
  countrySellsStats,
  yearlyIncomeStats,
} from "../utils/dashboardUtils";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const [state, setState] = useState({
    ordersList: null,
  });

  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function getResources() {
      const response = await getOrdersAuth();
      console.log("RESPONSE orders:", response.data);
      console.log(
        "yearly sells stats",
        yearlySellsStats(response.data?.orders)
      );
      setState({
        ordersList: response.data?.orders,
        mostRecentOrders: top5mostRecentOrders(response.data?.orders),
      });
    }
    getResources();
  }, []);

  return (
    <div>
      {/* Dashboard */}
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <div className="flex">
            <div className="dashboardHeightCalc w-70">
              <div className="h-50">GRAFICO VENDITE ANNUALI</div>
              <div className="h-50">
                <GenericTable
                  fields={state.mostRecentOrders}
                  columns={recentOrdersColumns}
                  //icons={ordersListIcons}
                />
                <LineChart
                  data={yearlySellsStats(state?.ordersList)}
                  dataName={t("numberOrders")}
                />
                {state.ordersList && (
                  <DonutChart data={countrySellsStats(state?.ordersList)} />
                )}
                <LineChart
                  data={yearlyIncomeStats(state?.ordersList)}
                  dataName={t("monthlyIncome")}
                />
              </div>
              <div className="flex h-50">
                <div className="w-50">RECENT ORDERS</div>
                <div className="w-50">TOP COUNTRIES</div>
              </div>
            </div>
            <div className="dashboardHeightCalc w-30 topSellingWrapper">
              <div>
                <h3>TOP SELLING</h3>
                <div>CARD CON TOP SELL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
