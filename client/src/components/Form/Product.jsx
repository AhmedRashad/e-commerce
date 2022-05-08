import React from "react";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../features/product/productSlice";

function Product() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    richdescription: "",
    image: [],
    category: "",
    brand: "",
  });
  const { name, price, description, richdescription, image, category, brand } =
    formData;
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);
  const { brands } = useSelector((state) => state.brand);

  const onSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    fetch("/api/products", {
      method: "POST",
      body: formdata,
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => dispatch(getProducts()));
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Name"
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Price"
            name="price"
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Description"
            name="description"
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rich Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Rich Description"
            name="richdescription"
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            name="image"
            placeholder="Image"
            multiple
            min={4}
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Category"
            name="category"
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Brand
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Brand"
            name="brand"
          >
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Product;
