import { useState, useEffect } from "react";
import { HiStar } from "react-icons/hi";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Review from "./Review";
import { useDispatch } from "react-redux";
import { addReview } from "../features/reviews/reviewsSlice";
import { addProduct } from "../features/shoppingCartSlice";
import Footer from "./footer";

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
  const dispatch = useDispatch();

  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});
  const [reviewForm, setReviewForm] = useState({
    title: "",
    rating: 0,
    body: "",
    product: productId,
  });
  const [reviewsList, setReviewsList] = useState([]);

  const { title, rating, body } = reviewForm;

  const onChange = (e) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addReview(reviewForm));
  };

  const onAddToCart = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
  };

  // fetch the product data from the server with the product id from the url
  // and set it to the product state.
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`/api/products/${productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();
      setProduct(data);
    };

    const getReviews = async () => {
      const res = await fetch(`/api/reviwes/product/${productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const { data } = await res.json();
      setReviewsList(data);
    };
    getReviews();
    getProduct();
  }, []);
  return (
    <div className="overview">
      <NavBar />
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
                onClick={onAddToCart}
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
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {product.richdescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*reviews*/}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center pb-5">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Reviews
            </h2>
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-indigo-500 text-white">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-1 text-sm text-gray-600">
                    {reviewsList?.length} reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-5">
            <div className="flex flex-col">
              {reviewsList.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* input form review */}
      <div className="mt-16 mx-auto sm:px-6 max-w-7xl px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <form onSubmit={onSubmit} className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Leave a review
            </h3>
            <div className="mt-2 space-y-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Title
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      name="title"
                      id="review-title"
                      value={title}
                      type="text"
                      onChange={onChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Rating
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <select
                      name="rating"
                      id="review-rating"
                      value={rating}
                      onChange={onChange}
                      required
                      className="block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    >
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Body
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <textarea
                      name="body"
                      value={body}
                      onChange={onChange}
                      id="review-body"
                      rows={4}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-5">
              <div className="flex justify-end">
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
