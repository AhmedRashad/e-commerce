import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overview from "./components/Overview";
import Review from "./components/Review";
import ProductsList from "./pages/ProductsList";
import DashBoard from "./components/DashBoard/dashBoard";

import { getUser } from "./features/auth/authSlice";
import { getBrands } from "./features/brand/brandSlice";
import { getCategories } from "./features/category/categorySlice";
import { getProducts } from "./features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import FQA from "./pages/fqa";
import NotFound from "./pages/404";
import Products from "./components/DashBoard/pages/products";
import Offers from "./components/DashBoard/pages/offers";
import Settings from "./components/DashBoard/pages/settings";
import Orders from "./components/DashBoard/pages/orders";
import DashBoardPage from "./components/DashBoard/pages/dashBoardPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/overview/:id" element={<Overview />} />
        <Route path="/review" element={<Review />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route exact path="" element={<DashBoardPage/>}/>
          <Route exact path="products" element={<Products />} />
          <Route exact path="offers" element={<Offers />} />
          <Route exact path="orders" element={<Orders />} />
          <Route exact path="settings" element={<Settings />} />
        </Route>
        <Route path="/fqa" element={<FQA />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
