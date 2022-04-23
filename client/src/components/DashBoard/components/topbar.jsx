import {
  HiOutlineLogout,
  HiOutlineBell,
  HiOutlineCog,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const TopBar = (props) => {
  return (
    <header className=" w-full py-2 px-4 bg-gray-200 opacity-75 sticky top-0 right-0">
      <div className="flex flex-row-reverse gap-2 sm:gap-4 items-center">
        <Link
          className="group flex justify-center items-center gap-2 p-2 bg-transparent border-2 border-transparent md:hover:border-accent border-solid rounded-lg duration-100"
          to="/"
        >
          <span className="text-sm hidden  sm:inline-block group-hover:text-accent">
            Log out
          </span>
          <HiOutlineLogout className="w-6 h-6 group-hover:text-accent duration-100" />
        </Link>

        <HiOutlineCog className="w-6 h-6 hover:text-accent duration-100" />

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
