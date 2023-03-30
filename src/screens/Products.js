import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { useTranslation } from "react-i18next";
import { getProducts } from "../services/servicesProducts";
import { productsColumns } from "../utils/tableUtils";

import { productsListIcons } from "../utils/tableUtils";
import { getProductsAuth } from "../services/servicesProducts";

function Products(props) {
  const [state, setState] = useState({
    productsList: null,
    results: null,
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function getResources() {
      const response = await getProductsAuth(0, 5);
      console.log("RESPONSE:", response.data);
      setState({
        ...state,
        results: response.data?.results,
        productsList: response.data?.products,
      });
    }
    getResources(0, 5);
  }, []);

  async function getResourcesTest(page, perPage) {
    const response = await getProductsAuth(page, perPage);
    console.log("RESPONSE:", response.data?.products);
    setState({
      ...state,
      results: response.data?.results,
      productsList: response.data?.products,
    });
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("productsManagement")}</h1>
          <div style={{ width: "95%", margin: "0 auto" }}>
            <FiltersRow label={t("productsList")} />
            {state.productsList && (
              <GenericTable
                fields={state.productsList}
                icons={productsListIcons}
                columns={productsColumns}
                getResources={getResourcesTest}
                results={state?.results}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
