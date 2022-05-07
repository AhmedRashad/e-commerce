import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, getUser } from "../../../features/auth/authSlice";

import {
  HiOutlineLogout,
  HiOutlineBell,
  HiOutlineCog,
} from "react-icons/hi";
import { Link ,useNavigate} from "react-router-dom";

const TopBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };


  return (
    <header className=" w-full py-2 px-4 bg-gray-200 opacity-75 sticky top-0 right-0">
      <div className="flex flex-row-reverse gap-2 sm:gap-4 items-center">
        <button  onClick={handleLogout}
          className="group flex justify-center items-center gap-2 p-2 bg-transparent border-2 border-transparent md:hover:border-accent border-solid rounded-lg duration-100"
          to="/"
        >
          <span className="text-sm hidden  sm:inline-block group-hover:text-accent">
            Log out
          </span>
          <HiOutlineLogout className="w-6 h-6 group-hover:text-accent duration-100" />
        </button>

        <Link to="settings"><HiOutlineCog  className="w-6 h-6 hover:text-accent duration-100" /></Link>

        <div className="relative">
          <span className="absolute -top-2 -right-1 h-4 aspect-square rounded-full bg-accent  text-xs text-white font-bold flex justify-center items-center ">
            2
          </span>
          <HiOutlineBell className="w-6 h-6 hover:text-accent duration-100" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
