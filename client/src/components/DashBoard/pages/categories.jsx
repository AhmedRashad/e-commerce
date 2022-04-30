import { useRef } from "react";
import Table from "../components/table";
import PopUp from "../components/popup";
import Category from "../../Form/Category";
import { AiOutlinePlus } from "react-icons/ai";

const thead = ["name", "description"];
const categories = [
  {
    id: 1,
    name: "test Category 1",
    description: "test description 1",
  },
  {
    id: 2,
    name: "test Category 2",
    description: "test description 2",
  },
  {
    id: 3,
    name: "test Category 3",
    description: "test description 3",
  },
  {
    id: 4,
    name: "test Category 4",
    description: "test description 4",
  },
];

const Categories = () => {
  const popUp = useRef();

  return (
    <>
      <PopUp ref={popUp} form={<Category />} />
      {/* <h1 className="text-gray-800 font-bold capitalize text-xl text-center">
        Products Page
      </h1> */}
      <div className="flex flex-row-reverse my-4 gap-4">
        <div
          onClick={() => {
            popUp.current.handelPopState();
          }}
          className="group flex items-center justify-center gap-1 p-2 bg-green-600 rounded border border-green-600 hover:border-transparent hover:bg-green-800"
        >
          <AiOutlinePlus className="text-white" />
          <button className="text-white">Add Category</button>
        </div>
      </div>

      <h1 className="text-gray-700 text-xl mb-8 font-bold text-center">
        Categories
      </h1>
      <Table thead={thead} items={categories} />
    </>
  );
};
export default Categories;

