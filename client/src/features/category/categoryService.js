import axios from "axios";

const API_URL = "/api/categories/";

// get categories
const getCategories = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// get category 
const getCategory = async (id) =>{
  console.log("from service");

  const response = await axios.get(API_URL + id);
  console.log(response);
  return response.data;
}

// add category
const addCategory = async (categoryData) => {
  const response = await axios.post(API_URL, categoryData);
  return response.data;
};

// update category
const updateCategory = async (id, categoryData) => {
  const response = await axios.put(API_URL + id, categoryData);
  return response.data;
};

// delete category
const deleteCategory = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const categoryService = {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};

export default categoryService;
