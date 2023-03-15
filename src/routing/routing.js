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
import LanguageTestHook from "../screens/LanguageTestHook";
import Products from "../screens/Products";
import AddProduct from "../screens/AddProduct";
import ModifyProduct from "../screens/ModifyProduct";

function Routing(props) {
  return (
    <Routes>
      <Route path="/" element={<EntryApp />} />
      <Route path="/login" element={<Login />} />

      <Route path="/users" element={<Users />} />
      <Route path="/users/add-user" element={<AddUser />} />
      <Route path="/users/modify-user/:id" element={<ModifyUser />} />

      <Route path="/coupons" element={<Coupons />} />
      <Route path="/coupons/add-coupon" element={<AddCoupon />} />
      <Route path="/coupons/modify-coupon/:id" element={<ModifyCoupon />} />

      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/add-order" element={<AddOrder />} />
      <Route path="/orders/modify-order/:id" element={<ModifyOrder />} />

      <Route path="/products" element={<Products />} />
      <Route path="/products/add-product" element={<AddProduct />} />
      <Route path="/products/modify-product/:id" element={<ModifyProduct />} />

      <Route path="/personal-area" element={<PersonalArea />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/language" element={<LanguageTestHook />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Routing;
