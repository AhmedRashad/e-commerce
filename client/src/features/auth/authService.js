import axios from "axios";

const API_URL = "/api/users/";

//register user
const register = async (userData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response.json();
};
// login user
const login = async (userData) => {
  const response = await fetch(API_URL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    credentials: "include",
  });
  return response.json();
};
// logout user
const logout = async () => {
  const response = await fetch(API_URL + "logout", {
    method: "GET",
    credentials: "include",
  });
  return response.json();
};

// get user
const getUser = async () => {
  const response = await fetch(API_URL + "me", {
    method: "GET",
    credentials: "include",
  });
  return response.json();
};

const authService = {
  register,
  login,
  logout,
  getUser,
};
export default authService;
