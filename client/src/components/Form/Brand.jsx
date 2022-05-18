import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrands } from "../../features/brand/brandSlice";
import { getUser } from "../../features/auth/authSlice";

function Brand() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });
  const { name, description, image } = formData;
  const dispatch = useDispatch();

  const { isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.brand
  );
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    fetch("/api/brands", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => dispatch(getBrands()));
  };

  useEffect(() => {
    dispatch(getUser);
  }, []);

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
            value={name}
            onChange={onChange}
            name="name"
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
            value={description}
            onChange={onChange}
            name="description"
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            placeholder="Image"
            value={image}
            onChange={onChange}
            name="image"
            multiple
          />
        </div>
        <div className="flex flex-col">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Brand;
