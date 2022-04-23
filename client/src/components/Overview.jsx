import { useState, useEffect } from "react";
import { HiStar } from "react-icons/hi";
import axios from "axios";
import { useParams } from "react-router-dom";

/*
Made by: Mohammed Khaled, T#6.
Expected props:
- product.name, .price, .href, .images, .description, .highlights, .details
- reviews.average, .totalCount, .href
*/

const reviews = { href: "#reviews", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Overview() {
  const [product, setProduct] = useState({});

  const params = useParams();
  const productId = params.id;
  console.log(productId);

  // fetch the product data from the server with the product id from the url
  // and set it to the product state.
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/products/${productId}`
      );
      setProduct(res.data);
    };
    getProduct();
  }, []);
  return (
    <div className="bg-white">
      {/* Image gallery */}
      <div className="mt-6 mx-auto sm:px-6 max-w-7xl px-8 grid grid-cols-3 gap-x-8">
        <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden block">
          <img
            src={product?.image?.[0]}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="grid grid-cols-1 gap-y-8">
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src={product?.image?.[1]}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src={product?.image?.[2]}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden aspect-w-3 aspect-h-4">
          <img
            src={product?.image?.[3]}
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>

      {/* product info */}
      <div className="mx-auto sm:px-6 max-w-7xl pt-16 pb-24 px-8 grid grid-cols-3 grid-rows-[auto,auto,1fr] gap-x-8">
        <div className="col-span-2 border-r border-gray-200 pr-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {product.name}
          </h1>
        </div>

        {/* Price */}
        <div className="mt-4 row-span-3">
          <p className="text-3xl text-gray-900">{product.price}</p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <HiStar
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                  />
                ))}
              </div>
              <p>{reviews.average} out of 5 stars</p>
              <a
                href={reviews.href}
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {reviews.totalCount} reviews
              </a>
            </div>
          </div>

          <form className="mt-10">
            <button
              type="submit"
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to cart
            </button>
          </form>
        </div>

        <div className="py-10 pt-6 pb-16 col-start-1 col-span-2 border-r border-gray-200 pr-8">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>

          {/* <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{product.richdescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
