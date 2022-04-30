import TopBar from "./components/topbar";
import SideBar from "./components/sidebar";
import Custmomers from "./pages/custmomers";
import Offers from "./pages/offers";
import Products from "./pages/products";
import Orders from "./pages/orders";
import DashBoardPage from "./pages/dashBoardPage";
import { useState } from "react";
import Settings from "./pages/settings";
import ProductsListCart from "../Cart/productListCart";
import HomePage from "../../pages/HomePage";
import { Route, BrowserRouter as Router, Routes, Outlet } from "react-router-dom";

const DashBoard = () => {
   return (
    <div className="h-screen  w-screen flex  ">
      <SideBar  />
      <div className="grow overflow-auto bg-gray-200 px-4  ">
        <TopBar/>
        {/* TODO : find solution for exess part of the page */}
        <div className="py-4 md:py-7 px-4 md:px-6 xl:px-8 rounded bg-white h-full">
            <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
