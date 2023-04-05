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
    mostRecentOrders: [],
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

  function mapRecentOrders(orders) {
    return orders.map((order) => {
      console.log(order.id);
      return <p>{order.id}</p>;
    });
  }

  return (
    <>
      <div className="flex justify-around ">
        <div>
          <div className="flex align-center flex-column bg-charts m-pie-chart">
            <h2 className="mtmb-20">{t("countrySells")}</h2>
            {state.ordersList && (
              <DonutChart data={countrySellsStats(state?.ordersList)} />
            )}
          </div>
          <div className="flex">
            <div className="flex align-center flex-column bg-charts m-bar-chart">
              <h2 className="mtmb-20">{t("yearlyIncome")}</h2>
              <LineChart
                data={yearlyIncomeStats(state?.ordersList)}
                dataName={t("monthlyIncome")}
              />
            </div>
            <div className="flex align-center flex-column bg-charts m-bar-chart">
              <h2 className="mtmb-20">{t("yearlySales")}</h2>
              <LineChart
                data={yearlySellsStats(state?.ordersList)}
                dataName={t("numberOrders")}
              />
            </div>
          </div>
        </div>
        <div>
          {state.mostRecentOrders && (
            <div>{mapRecentOrders(state.mostRecentOrders)}</div>
          )}
        </div>
      </div>
    </>
  );
}
