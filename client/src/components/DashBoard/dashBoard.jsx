import TopBar from "./components/topbar";
import SideBar from "./components/sidebar";
import Custmomers from "./pages/custmomers";
import Offers from "./pages/offers";
import Products from "./pages/products";
import Orders from "./pages/orders";
import DashBoardPage from "./pages/dashBoardPage";
import { useState } from "react";

const DashBoard = () => {
  const [page,setPage] = useState(<DashBoardPage />);
  const handelContent = (page) => {
    console.log(page);
    switch (page) {
      case "Custmomers":
        setPage(<Custmomers />);
        break;
      case "Offers":
        setPage(<Offers />);
        break;
      case "Products":
        setPage(<Products />);
        break;
      case "Orders":
      setPage(<Orders />);
        break;
      case "DashBoard":
        setPage(<DashBoardPage />);
      default:
        setPage(<DashBoardPage />);
        break;
    }
  };
  return (
    <div className="h-screen  w-screen flex">
      <SideBar handelContent={handelContent}/>
      <div className="grow px-4 overflow-scroll">
        <TopBar />
        {page}
      </div>
    </div>
  );
};

export default DashBoard;
