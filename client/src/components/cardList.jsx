import { Link } from "react-router-dom";
import { addProduct } from "../features/shoppingCartSlice";
import { useDispatch } from "react-redux";


const CardList = (props) => {
  return (
    <div className="container px-4">
      <h2 className="font-bebas-neue text-gray-900 text-center font-bold text-3xl m-4 mb-8">
        Top Products
        <span className="mx-auto block w-20 h-1 bg-indigo-500 dark:bg-white my-4"></span>
      </h2>

      <div className="grid grid-cols-1   lg:grid-cols-3  gap-4 my-4">
        {props.products.map((product) => (
          <InnerCard key={product._id} product={product} />
        ))}
      </div>

      <div className="w-full flex flex-row-reverse pl-8">
        <Link className="hover:text-indigo-500" to="/products">
          See all products
        </Link>
      </div>
    </div>
  );
};

const InnerCard = (props) => {
  const dispatch = useDispatch();
  const onAddToCart = (e) => {
    dispatch(addProduct(props.product));
  };
  return (
    <>
      <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <Link to={"/overview/" + props.product._id}>
          <img
            className="max-h-40 w-full object-cover"
            src={props.product.image[0]}
            alt="product image"
          />
          <div className="bg-white dark:bg-gray-800 w-full px-4">
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {props.product.name}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              {props.product.description}
            </p>
          </div>
        </Link>
        <button
          onClick={onAddToCart}
          className="my-4 mx-auto w-[80%] bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default CardList;
