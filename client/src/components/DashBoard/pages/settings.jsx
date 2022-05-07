import { Link, Outlet } from "react-router-dom";
const setItems = ["","account", "payment", "apperance", "about"];
const Settings = () => {
  return (
    <>
      <h1 className="text-gray-900 text-lg md:text-2xl md:font-bold text-center">
        Settings
      </h1>
      <div className="container flex">
        <div className="relative bg-white dark:bg-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-around">
            <div className="w-72 h-full">
              <nav className="mt-10 px-6 ">
                {setItems.map((item, i) => (
                  <SetItem key={i} link={item} />
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="grow-[3] mt-10 px-6">
          <Outlet context={setItems}/>
        </div>
      </div>
    </>
  );
};

const SetItem = (props) => {
  return (
    <Link
      to={`${props.link}`}
      className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
    >
      <span className="mx-4 text-lg font-normal">
        {props.link?props.link.charAt(0).toUpperCase() + props.link.slice(1):"Home"}
      </span>
      <span className="flex-grow text-right"></span>
    </Link>
  );
};
export default Settings;
