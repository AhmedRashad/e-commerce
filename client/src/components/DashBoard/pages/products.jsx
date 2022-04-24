import Product from "../components/product";
import { AiOutlinePlus, AiOutlineFilter } from "react-icons/ai";
import { useState, useEffect } from "react";
import ProductForm from "../../Form/Product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../features/product/productSlice";

const Products = () => {
  const [filter, setFilter] = useState(false);
  const [popup, setPopup] = useState(false);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handelAdding = (e) => {
    if (popup && e.target.id === "popBg") {
      setPopup(false);
    } else {
      setPopup(true);
    }
  };

  // FIXME: make the list match database schema
  const categories = [
    {
      id:1,
      name:"computers"
    },
    {
      id:2,
      name:"laptops"
    },
    {
      id:3,
      name:"accessories"
    },
    
  ]
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
          <ProductForm />
        </div>
      </div>
      {/* <h1 className="text-gray-800 font-bold capitalize text-xl text-center">
        Products Page
      </h1> */}
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
        <div className={(filter ? "" : "hidden ") + "duration-200"}>
                    <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                        <p>Category:</p>
                        {/* TODO: add function to handel filteration process */}
                        <select aria-label="select" className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                          { categories.map(cat => <option key={cat.id} class="text-sm text-indigo-800">{cat.name}</option>)
                          }
                        </select>
                    </div>
                </div>
      </div>

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default Products;
