import axios from "axios";

const API_URL = "/api/products/";

// get products
const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// get product
const getProduct = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

// add product
const addProduct = async (productData) => {
  const response = await axios.post(API_URL, productData);
  return response.data;
};

// update product
const updateProduct = async (id, productData) => {
  const response = await axios.put(API_URL + id, productData);
  return response.data;
};

// delete product
const deleteProduct = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const productService = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
export default productService;
