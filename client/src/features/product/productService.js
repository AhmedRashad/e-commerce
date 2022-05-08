const API_URL = "/api/products";

// get products
const getAllProducts = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response.json();
};

// get product
const getProduct = async (id) => {
  const response = await (API_URL + id,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response.json();
};

// add product
const addProduct = async (productData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
    credentials: "include",
  });
  return response.json();
};

// update product
const updateProduct = async (id, productData) => {
  const response = await fetch(API_URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
    credentials: "include",
  });
  return response.json();
};

// delete product
const deleteProduct = async (id) => {
  const response = await fetch(API_URL + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response.json();
};

const productService = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
export default productService;
