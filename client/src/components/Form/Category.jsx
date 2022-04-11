import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCategory } from "../../features/category/categorySlice";

function Category() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const { name, description } = formData;
  const dispatch = useDispatch();

  const { isSuccess, isLoading, isError, meesage } = useSelector(
    (state) => state.category
  );
  const onSubmit = (e) => {
    e.preventDefault();
    const categoryData = {
      name,
      description,
    };
    dispatch(addCategory(categoryData));
  };

  useEffect(() => {
    if (isError) {
      console.log(meesage);
    }
  }, [isError, dispatch]);

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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between">
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

export default Category;
