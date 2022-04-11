import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar/NavBar";
import Overview from "./components/Overview"
import AllForm from "./components/Form/AllForm";

import { getUser } from "./features/auth/authSlice";
import { getBrands } from "./features/brand/brandSlice";
import { getCategories } from "./features/category/categorySlice";
import { getProducts } from "./features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

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
        <Route path="/" element={<AllForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
