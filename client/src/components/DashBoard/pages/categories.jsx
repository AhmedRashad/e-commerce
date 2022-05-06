import { useEffect, useRef, useState } from "react";
import Table from "../components/table";
import PopUp from "../components/popup";
import Category from "../../Form/Category";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getCategory,
} from "../../../features/category/categorySlice";

const thead = ["name", "description"];

const Categories = () => {
  const [content, setContent] = useState(<Category />);
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const popUp = useRef();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handelAction = (target, id) => {
    // this simple mapping
    // 0 ===== > view
    // 1 ===== > update
    // 2 ===== > delete

    if (target === 0) {
      setContent(<Cat id={id} />);
      console.log(id);

      popUp.current.handelPopState();
    }
  };
  return (
    <>
      <PopUp ref={popUp} form={content} />
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
      <Table thead={thead} items={categories} handelAction={handelAction} />
    </>
  );
};

const Cat = (props) => {
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <h2 className="text-gray-900 text-xl font-bold mb-4">{console.log(category)}</h2>
    </>
  );
};

export default Categories;
