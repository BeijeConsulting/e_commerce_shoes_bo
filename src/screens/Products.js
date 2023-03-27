import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { useTranslation } from "react-i18next";
import { getProducts } from "../services/servicesProducts";
import { productsColumns } from "../utils/tableUtils";

import { productsListIcons } from "../utils/tableUtils";

function Products(props) {
  const [state, setState] = useState({
    productsList: null,
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function getResources() {
      const response = await getProducts();
      console.log("RESPONSE:", response.data);
      setState({ productsList: response.data });
    }
    getResources();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("productsManagement")}</h1>
          <div style={{ width: "95%", margin: "0 auto" }}>
            <FiltersRow label={t("productsList")} />
            <GenericTable
              fields={state.productsList}
              icons={productsListIcons}
              columns={productsColumns}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
