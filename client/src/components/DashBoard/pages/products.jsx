import Product from "../components/product";
import { AiOutlinePlus, AiOutlineFilter } from "react-icons/ai";
import { useState } from "react";

const Products = () => {
  const [filter, setFilter] = useState(false);
  const [popup, setPopup] = useState(false);

  const handelAdding = (e) => {
    console.log("from if ", popup);
    console.log(e.target.id, e.target.id === "popBg", popup);
    if (popup && e.target.id === "popBg") {
      setPopup(false);
    } else {
      setPopup(true);
    }
  };
  return (
    <>
      <div
        id="popBg"
        onClick={handelAdding}
        className={
          (popup ? "" : "hidden") +
          " absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black opacity-75"
        }
      >
        <div className="relative p-4 rounded-md bg-white">
          
        </div>
      </div>
      <h1 className="text-gray-800 font-bold capitalize text-xl text-center">
        Products Page
      </h1>
      <div className="flex flex-row-reverse my-4 gap-4">
        <div
          onClick={handelAdding}
          className="group flex items-center justify-center gap-1 p-2 bg-green-600 rounded border border-green-600 hover:border-transparent hover:bg-green-800"
        >
          <AiOutlinePlus className="text-white" />
          <button className="text-white">Add product</button>
        </div>
        <div
          className={
            (filter ? "border-transparent bg-primary " : "border-primary ") +
            " group flex items-center justify-center gap-1 p-2 rounded border   hover:border-transparent  hover:bg-primary "
          }
        >
          <AiOutlineFilter
            className={
              (filter ? "text-white" : " text-primary") +
              " text-lg group-hover:text-white"
            }
          />
          <button
            onClick={() => {
              setFilter((preFilter) => !preFilter);
            }}
            className={
              (filter ? "text-white " : "text-primary ") +
              " group-hover:text-white"
            }
          >
            filter
          </button>
        </div>
        <div className=""></div>
      </div>
      {/* <div className={(filter ? "" : "hidden ") + "w-full p-4 duration-200"}>
        <h3>filter by</h3>
        <div className="flex">
          <button>Category</button>
          <button>price</button>
        </div>
      </div> */}

      {/* <Catagory/> */}
    </>
  );
};

export default Products;
