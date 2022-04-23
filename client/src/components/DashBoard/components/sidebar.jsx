import { useState } from "react";
import {
  MdHome,
  MdProductionQuantityLimits,
  MdDocumentScanner,
  MdPerson,
  MdLocalOffer,
} from "react-icons/md";
import {HiCog} from "react-icons/hi"

const SideBar = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <aside className="p-4 bg-primary h-screen flex flex-col items-center  justify-start text-white">
      <div className="pb-8">
        <a className="font-bold text-xl" href="#">
          Logo
        </a>
      </div>
      <nav className="flex flex-col items-start gap-2">
        <NavItem
          icon={<MdHome size={25} />}
          title="DashBoard"
          isOpen={isOpen}
          handelContent={props.handelContent}
        />
        <NavItem
          icon={<MdProductionQuantityLimits size={25} />}
          title="Products"
          isOpen={isOpen}
          handelContent={props.handelContent}
        />
        <NavItem
          icon={<MdDocumentScanner size={25} />}
          title="Orders"
          isOpen={isOpen}
          handelContent={props.handelContent}
        />
        <NavItem
          icon={<MdPerson size={25} />}
          title="Custmomers"
          isOpen={isOpen}
          handelContent={props.handelContent}
        />
        <NavItem
          icon={<MdLocalOffer size={25} />}
          title="Offers"
          isOpen={isOpen}
          handelContent={props.handelContent}
        />
        <NavItem
          icon={<HiCog size={25} />}
          title="Settings"
          isOpen={isOpen}
          handelContent={props.handelContent}
        />
      </nav>
      <button
        className="hidden md:block"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {" "}
        {isOpen ? "<" : ">"}{" "}
      </button>
    </aside>
  );
};

const NavItem = (props) => {
  return (
    <div
      onClick={() => {
        console.log("this is ");
        props.handelContent(props.title);
      }}
      className="flex gap-2 items-center justify-center group mb-4 "
    >
      <div className="group-hover:text-pink-500 group-hover:cursor-pointer">
        {" "}
        {props.icon}
      </div>
      {props.isOpen && (
        <p className="hidden md:block group-hover:text-pink-500 group-hover:cursor-pointer">
          {props.title}
        </p>
      )}
    </div>
  );
};

export default SideBar;
