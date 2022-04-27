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

const DashBoard = () => {
  const [page, setPage] = useState(<DashBoardPage />);
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
        break;
        case "Settings":
          setPage(<Settings/>);
          break;
      default:
        setPage(<DashBoardPage />);
        break;
    }
  };
  return (
    // <div className="h-screen  w-screen flex  ">
    //   <SideBar handelContent={handelContent} />
    //   <div className="grow overflow-auto bg-gray-200 px-4  ">
    //     <TopBar handelContent={handelContent}/>
    //     {/* TODO : find solution for exess part of the page */}
    //     <div className="py-4 md:py-7 px-4 md:px-6 xl:px-8 rounded bg-white h-full">{page}</div>
    //   </div>
    // </div>
    <HomePage/>
  );
};

export default DashBoard;
