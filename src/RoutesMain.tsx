import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import ProductsList from "./pages/ProductsList/ProductsList";
import Categories from "./pages/Categories/Categories";
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";
import Login from "./pages/Login/Login";

const RoutesMain = () => (
  <Routes>
    {/* render all routes here */}
    <Route path="/online_shop-react_redux-/" element={<Home />} />
    <Route
      path="/online_shop-react_redux-/all-products"
      element={<ProductsList />}
    />
    <Route
      path="/online_shop-react_redux-/all-products/:id"
      element={<Product />}
    />
    <Route path="/online_shop-react_redux-/cart" element={<Cart />} />
    <Route
      path="/online_shop-react_redux-/categories"
      element={<Categories />}
    />
    <Route
      path="/online_shop-react_redux-/categories/:id"
      element={<CategoryProducts />}
    />
    <Route path="/online_shop-react_redux-/login" element={<Login />} />
  </Routes>
);

export default RoutesMain;
