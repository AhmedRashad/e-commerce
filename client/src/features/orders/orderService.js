const API_URL = "/api/orders";

// get Orders
const getAllOrders = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response.json();
};

// get Order
const getOrder = async (id) => {
  const response = await fetch(API_URL + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response.json();
};

// add Order
const addOrder = async (OrderData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(OrderData),
    credentials: "include",
  });
  return response.json();
};

// update Order
const updateOrder = async (id, OrderData) => {
  const response = await fetch(API_URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(OrderData),
    credentials: "include",
  });
  return response.json();
};

// delete Order
const deleteOrder = async (id) => {
  const response = await fetch(API_URL + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response.json();
};

const OrderService = {
  getAllOrders,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
};
export default OrderService;
