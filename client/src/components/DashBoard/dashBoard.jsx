import TopBar from "./components/topbar";
import SideBar from "./components/sidebar";



const DashBoard = (prpos) => {
  return (
    <div className="h-screen  w-screen flex">
    <SideBar/>
    <div className="grow px-4" >
        <TopBar/>
        <h1>this is just test</h1>
    </div>
    </div>
  );
};

export default DashBoard;
