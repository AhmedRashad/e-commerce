import { useState } from "react";
import {MdHome,MdProductionQuantityLimits,MdCategory,MdDocumentScanner,MdPerson,MdLocalOffer} from "react-icons/md"
const SideBar = () => {
    const [isOpen,setIsOpen] = useState(true);
  return (
    <aside className="p-4 bg-gray-800 h-screen flex flex-col items-center  justify-start text-white">
      <div className="pb-8">
        <a className="font-bold text-xl" href="#">Logo</a>
      </div>
      <nav className="flex flex-col items-start gap-2">
      <NavItem icon ={<MdHome size={25}/>} title="Dashboard" isOpen={isOpen}/>
      <NavItem icon ={<MdProductionQuantityLimits size={25}/>} title="products" isOpen={isOpen}/>
      <NavItem icon ={<MdDocumentScanner size={25}/>} title="orders" isOpen={isOpen}/>
      <NavItem icon ={<MdPerson size={25}/>} title="Custmoers" isOpen={isOpen}/>
      
      <NavItem icon ={<MdLocalOffer  size={25}/>}  title="copones" isOpen={isOpen}/>
      </nav>
      <button onClick={()=>{setIsOpen(!isOpen)}}> {isOpen?"<":">"} </button>
    </aside>
  );
};

const NavItem = (props) => {
  return (
  <div className="flex gap-2 items-center justify-center group mb-4 ">
      <div className="group-hover:text-accent group-hover:cursor-pointer"> {props.icon}</div>
      { props.isOpen &&
        <p className="group-hover:text-accent group-hover:cursor-pointer">{props.title}</p>}
      </div>);
};

export default SideBar;
