import axios from "axios";

const API_URL = "/api/brands/";

// get brands
const getBrands = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// add brand
const addBrand = async (brandData) => {
  const response = await axios.post(API_URL, brandData);
  return response.data;
};

// update brand
const updateBrand = async (id, brandData) => {
  const response = await axios.put(API_URL + id, brandData);
  return response.data;
};

// delete brand
const deleteBrand = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const brandService = {
  getBrands,
  addBrand,
  updateBrand,
  deleteBrand,
};

export default brandService;
