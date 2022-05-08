import Product from "../components/product";
import { AiOutlinePlus, AiOutlineFilter } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import ProductForm from "../../Form/Product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../features/product/productSlice";
import { getCategories } from "../../../features/category/categorySlice";
import PopUp from "../components/popup";

const Products = () => {
  const [filter, setFilter] = useState(false);
  const { products } = useSelector((state) => state.product);
 
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const popUp = useRef();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories())
  }, []);

 const handelClose = (state)=>{
    popUp.current.handelState(state)
 }


  return (
    <>
      <PopUp ref={popUp} form={<ProductForm handelClose={handelClose}/>} />
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
        <div className={(filter ? "" : "hidden ") + "duration-200"}>
          <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
            <p>Category:</p>
            {/* TODO: add function to handel filteration process */}
            <select
              aria-label="select"
              className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
            >
              {categories.map((cat) => (
                <option key={cat._id} className="text-sm text-indigo-800">
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </>
  );
};

export default Products;
