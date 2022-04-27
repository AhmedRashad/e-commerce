import axios from "axios";

const API_URL = "/api/users/";

//register user
const register = async (userData) => {
  console.log(userData);
  const response = await axios.post(API_URL, userData);
  return response.data;
};
// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};
// logout user
const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data;
};

// get user
const getUser = async () => {
  const response = await axios.get(API_URL + "me");
  return response.data;
}

const authService = {
  register,
  login,
  logout,
  getUser,
};
export default authService;
