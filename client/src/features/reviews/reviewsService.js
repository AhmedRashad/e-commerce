const API_URL = "/api/reviwes/";

// @desc    Get all reviews
const getReviews = async () => {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return res.json();
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
  return res.json();
};

// @desc    Update review
const updateReview = async (id, reviewData) => {
  const res = await fetch(API_URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
    credentials: "include",
  });
  return res.json();
};

// @desc    Delete review
const deleteReview = async (id) => {
  const res = await fetch(API_URL + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return res.json();
};

const reviewsService = {
  getReviews,
  addReview,
  updateReview,
  deleteReview,
};
export default reviewsService;
