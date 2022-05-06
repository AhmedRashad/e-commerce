import { useEffect, useRef } from "react";
import Table from "../components/table";
import PopUp from "../components/popup";
import Category from "../../Form/Category";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../features/category/categorySlice";

const thead = ["name", "description"];

const Categories = () => {
  const {categories} = useSelector((state)=> state.category);
  const dispatch = useDispatch(); 
  const popUp = useRef();
  useEffect(()=>{
    dispatch(getCategories());
  },[]);

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

