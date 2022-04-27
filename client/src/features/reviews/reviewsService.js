import axios from "axios";

const API_URL = "http://localhost:5000/api/reviwes/";

// @desc    Get all reviews
const getReviews = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// @desc    Add review
const addReview = async (reviewData) => {
  console.log(reviewData);
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
    credentials: "include",
  });

  return res.data;
};

// @desc    Update review
const updateReview = async (id, reviewData) => {
  const res = await axios.put(API_URL + id, reviewData);
  return res.data;
};

// @desc    Delete review
const deleteReview = async (id) => {
  const res = await axios.delete(API_URL + id);
  return res.data;
};

const reviewsService = {
  getReviews,
  addReview,
  updateReview,
  deleteReview,
};
export default reviewsService;
