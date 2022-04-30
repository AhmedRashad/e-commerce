import { useState } from "react";
import {
  MdHome,
  MdProductionQuantityLimits,
  MdDocumentScanner,
  MdPerson,
  MdLocalOffer,
  MdCategory,
} from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";
import { HiCog } from "react-icons/hi";
import { Link } from "react-router-dom";

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
        <Link to="">
          <NavItem
            icon={<MdHome size={25} />}
            title="DashBoard"
            isOpen={isOpen}
          />
        </Link>
        <Link to="products">
          <NavItem
            icon={<MdProductionQuantityLimits size={25} />}
            title="Products"
            isOpen={isOpen}
          />
        </Link>
        <Link to="orders">
          <NavItem
            icon={<MdDocumentScanner size={25} />}
            title="Orders"
            isOpen={isOpen}
          />
        </Link>
        <Link to="">
          <NavItem
            icon={<MdPerson size={25} />}
            title="Custmomers"
            isOpen={isOpen}
          />
        </Link>
        <Link to="offers">
          <NavItem
            icon={<MdLocalOffer size={25} />}
            title="Offers"
            isOpen={isOpen}
          />
        </Link>
        <Link to="categories">
          <NavItem
            icon={<MdCategory size={25} />}
            title="Categories"
            isOpen={isOpen}
          />
        </Link>
        <Link to="brands">
          <NavItem
            icon={<SiBrandfolder size={25} />}
            title="Brands"
            isOpen={isOpen}
          />
        </Link>

        <Link to="settings">
          <NavItem
            icon={<HiCog size={25} />}
            title="Settings"
            isOpen={isOpen}
          />
        </Link>
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
    <div className="flex gap-2 items-center justify-center group mb-4 ">
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
