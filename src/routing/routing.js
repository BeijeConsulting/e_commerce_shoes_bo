import React from "react";
import { Routes, Route } from "react-router-dom";
import AddUser from "../screens/AddUser";
import Coupons from "../screens/Coupons";
import AddCoupon from "../screens/AddCoupon";
import ModifyCoupon from "../screens/ModifyCoupon";
import EntryApp from "../screens/EntryApp";
import Login from "../screens/Login";
import ModifyUser from "../screens/ModifyUser";
import PageNotFound from "../screens/PageNotFound";
import Users from "../screens/Users";
import Orders from "../screens/Orders";
import AddOrder from "../screens/AddOrder";
import ModifyOrder from "../screens/ModifyOrder";
import PersonalArea from "../screens/PersonalArea";
import Dashboard from "../screens/Dashboard";
import Products from "../screens/Products";
import AddProduct from "../screens/AddProduct";
import ModifyProduct from "../screens/ModifyProduct";
import ProductDetails from "../screens/ProductDetails";
import AddDiscount from "../screens/AddDiscount";
import ModifyDiscount from "../screens/ModifyDiscount";
import CouponDetails from "../screens/CouponDetails";
import UserDetails from "../screens/UserDetails";
import OrderDetails from "../screens/OrderDetails";
import Layout from "../screens/Layout";
import UserAddresses from "../screens/UserAddresses";
import AddAddress from "../screens/AddAddress";
import ModifyAddress from "../screens/ModifyAddress";

import { useState } from "react";
import { getLocalStorage } from "../utils/localStorageUtils";
import { setUserCredentials } from "../redux/duck/user/userDuck";
import { getUserAuth } from "../services/servicesAuth";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/duck/token/tokenDuck";
import { useEffect } from "react";
import PrivateRoutes from "./PrivateRoutes";
import { setLocalStorage } from "../utils/localStorageUtils";

function Routing(props) {
  const dispatch = useDispatch();
  const token = getLocalStorage("token");
  const refreshToken = getLocalStorage("refreshToken");

  const [state, setState] = useState({
    isLoading: false,
  });

  // check if the token exists
  useEffect(() => {
    let loading = false;
    console.log("USEEFFECT ROUTING");
    async function getUserInfo() {
      const response = await getUserAuth(token);

      if (response.status === 200) {
        // aggiungere controllo se c'e errore             *************************************************************
        loading = true;
        dispatch(
          setUserCredentials({
            isLogged: true,
            name: response.data.first_name,
            surname: response.data.last_name,
            email: response.data.email,
            addresses: response.data.addresses,
            birthDate: response.data.birth_date,
          })
        );
        setLocalStorage("isLogged", true);
      }
    }
    if (token) {
      dispatch(
        setToken({
          token,
          refreshToken,
        })
      );
      getUserInfo();
    }
    setState({ ...state, isLoading: loading });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/add-order" element={<AddOrder />} />
        <Route path="/orders/edit-order/:id" element={<ModifyOrder />} />
        <Route path="orders/order-details/:id" element={<OrderDetails />} />

        <Route path="/products" element={<Products />} />
        <Route
          path="/products/product-details/:id"
          element={<ProductDetails />}
        />
        <Route path="/products/add-product" element={<AddProduct />} />
        <Route path="/products/edit-product/:id" element={<ModifyProduct />} />

        <Route path="/products/:id/discount" element={<AddDiscount />} />
        <Route
          path="/products/:id/modify-discount"
          element={<ModifyDiscount />}
        />

        {/* LAYOUT */}
        <Route path="/" element={<Layout />}>
          {/* PRIVATE ROUTES */}
          <Route element={<PrivateRoutes />}>
            {/* PERSONAL AREA */}
            <Route path="/personal-area" element={<PersonalArea />} />
            <Route
              path="/personal-area/addresses"
              element={<UserAddresses />}
            />
            <Route
              path="/personal-area/addresses/add-address"
              element={<AddAddress />}
            />
            <Route
              path="/personal-area/addresses/modify-address/:id"
              element={<ModifyAddress />}
            />

            {/* DASHBOARD */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* USERS */}
            <Route path="/users" element={<Users />} />
            <Route path="/users/add-user" element={<AddUser />} />
            <Route path="/users/edit-user/:id" element={<ModifyUser />} />
            <Route path="/users/user-details/:id" element={<UserDetails />} />

            {/* COUPONS */}
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/coupons/add-coupon" element={<AddCoupon />} />
            <Route path="/coupons/edit-coupon/:id" element={<ModifyCoupon />} />
            <Route
              path="/coupons/coupon-details/:id"
              element={<CouponDetails />}
            />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
