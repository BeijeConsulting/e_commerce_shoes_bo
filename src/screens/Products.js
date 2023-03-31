import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import Header from "../components/functionalComponents/header/Header";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { useTranslation } from "react-i18next";
import { getProducts } from "../services/servicesProducts";
import { productsColumns } from "../utils/tableUtils";

import { productsListIcons } from "../utils/tableUtils";
import {
  getProductsAuth,
  deleteProductAuthById,
} from "../services/servicesProducts";

function Products(props) {
  const [state, setState] = useState({
    productsList: null,
    results: null,
  });
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    async function getResources() {
      const response = await getProductsAuth(1, 10, language);
      console.log("RESPONSE:", response.data);
      setState({
        ...state,
        results: response.data?.results,
        productsList: response.data?.products,
      });
    }
    getResources(0, 5);
  }, []);

  async function deleteProduct(id) {
    alert(`Are you sure you want to delete product with id ${id}?`);
    const response = await deleteProductAuthById(id);
    console.log("RESPONSE DELETE:", response);
    if (response.status === 200) {
      alert("Usuario eliminado correctamente");
      window.location.reload();
    } else {
      alert("Error al eliminar usuario");
    }
  }

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
            <FiltersRow
              label={t("productsList")}
              addLabel={t("addProduct")}
              addUrl="/products/add-product"
            />
            {state.productsList && (
              <GenericTable
                fields={state.productsList}
                icons={productsListIcons}
                columns={productsColumns}
                getResources={getResourcesTest}
                results={state?.results}
                deleteAction={deleteProduct}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
