import { FaPaintBrush } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdPayments } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = () => {
  const setItems = useOutletContext().slice(1);
  const icons = [
    <VscAccount size={30} />,
    <MdPayments size={30} />,
    <FaPaintBrush size={30} />,
    <BsFillInfoCircleFill size={30} />,
  ];
  return (
    <>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 md:gap-4">
        {setItems.map((item, i) => (
          <InnerCard key={i} name={item} icon={icons[i]} />
        ))}
      </div>
    </>
  );
};

const InnerCard = (props) => {
  return (
    <Link to={props.name}>
      <div className="shadow-lg rounded-2xl w-64 p-4 py-6 bg-white">
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 h-24 bg-indigo-200 rounded-full relative grid place-items-center text-white hover:text-pink-500 duration-200 ease-in">
            {props.icon}
          </div>
          <p className="text-gray-800 text-xl font-medium mb-4 mt-4">
            {props.name} Settings
          </p>
          
        </div>
      </div>
    </Link>
  );
};

export default Home;
