import axios from "axios";

const API_URL = "http://localhost:5000/api/orders";

// get Orders
const getAllOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// get Order
const getOrder = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

// add Order
const addOrder = async (OrderData) => {
  const response = await axios.post(API_URL, OrderData);
  return response.data;
};

// update Order
const updateOrder = async (id, OrderData) => {
  const response = await axios.put(API_URL + id, OrderData);
  return response.data;
};

// delete Order
const deleteOrder = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const OrderService = {
  getAllOrders,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
};
export default OrderService;
