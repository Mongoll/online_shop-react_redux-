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
    <Route path="/" element={<Home />} />
    <Route path="/all-products" element={<ProductsList />} />
    <Route path="/all-products/:id" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/categories/:id" element={<CategoryProducts />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default RoutesMain;
