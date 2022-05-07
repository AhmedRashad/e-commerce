import TopBar from "./components/topbar";
import SideBar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Forbidden from "../../pages/forbidden";

const DashBoard = () => {
  const { user } = useSelector((state) => state.auth);
  if(user){
   return (
    <div className="h-screen  w-screen flex  ">
      <SideBar  />
      <div className="grow overflow-auto bg-gray-200 px-4  ">
        <TopBar/>
        {/* TODO : find solution for exess part of the page */}
        <div className="py-4 md:py-7 px-4 md:px-6 xl:px-8 rounded bg-white min-h-full">
            <Outlet/>
        </div>
      </div>
    </div>
  );}
  else{
    return(
      <Forbidden/>
    );
  }
};

export default DashBoard;
