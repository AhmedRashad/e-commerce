
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { getProducts } from "../../../features/product/productSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
const Product = (props) => {
  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    axios.delete(`/api/products/${id}`).then((res) => {
      dispatch(getProducts());
    });
  };

  console.log(props.product)

  return (
    <div className="w-full shadow rounded-lg p-2 m-2 flex">
      <div className="grid place-items-center">
        <div
          className={`inline-block p-2 rounded shadow w-20 h-20 lg:w-28 lg:h-28`}
        >
          <img
            className="block overflow-hidden w-full"
            src={props.product.image[0]}
          />
        </div>
      </div>
      {/* //<Divder /> */}
      <div className="w-[2px] w- mx-4 bg-gray-900"></div>
      {/* about product */}
      <div className="grow flex justify-start">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="my-2 md:my-0">
            <h3 className="capitalize font-bold text-sm md:text-base md:mb-4">
              {props.product.name}
            </h3>
            <p className="font-thin">{props.product.category}</p>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div>
              <p className="font-bold text-sm md:text-base md:mb-4">Brand </p>
              <p className="font-thin">{props.product.brand}</p>
            </div>
            <div>
              <p className="font-bold text-sm md:text-base md:mb-4">price </p>
              <p className="font-thin">
                {props.product.price}{" "}
                <span className="font-bold text-sm md:text-base">$</span>
              </p>
            </div>
          </div>
        </div>
        <div className="grow" />
        <div className="self-stretch flex flex-col justify-around">
          <div className=" group flex items-center justify-center gap-1 p-2 rounded border border-primary  hover:border-transparent hover:bg-primary">
            <BsPencil className="text-primary group-hover:text-white" />
            <button className="hidden xs:block text-xs text-primary group-hover:text-white">
              update
            </button>
          </div>
          <div className="group flex items-center justify-center gap-1 p-2 rounded border border-red-500  hover:border-transparent hover:bg-red-500">
            <RiDeleteBinLine className="text-red-500 group-hover:text-white" />
            <button
              onClick={() => {
                deleteProduct(props.product._id);
              }}
              className="hidden xs:block text-xs text-red-500 group-hover:text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
