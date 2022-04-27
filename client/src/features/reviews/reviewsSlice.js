import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reviewsService from "./reviewsService";

const initialState = {
  reviews: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  meesage: "",
};
// Get reviews
export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (thunkAPI) => {
    try {
      return await reviewsService.getReviews();
    } catch (error) {
      const meesage =
        (error.response &&
          error.response.data &&
          error.response.data.meesage) ||
        error.meesage ||
        error.toString();
      return thunkAPI.rejectWithValue(meesage);
    }
  }
);
// Add review
export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (reviewData, thunkAPI) => {
    try {
      return await reviewsService.addReview(reviewData);
    } catch (error) {
      const meesage =
        (error.response &&
          error.response.data &&
          error.response.data.meesage) ||
        error.meesage ||
        error.toString();
      return thunkAPI.rejectWithValue(meesage);
    }
  }
);
// Update review
export const updateReview = createAsyncThunk(
  "reviews/updateReview",
  async (id, reviewData, thunkAPI) => {
    try {
      return await reviewsService.updateReview(id, reviewData);
    } catch (error) {
      const meesage =
        (error.response &&
          error.response.data &&
          error.response.data.meesage) ||
        error.meesage ||
        error.toString();
      return thunkAPI.rejectWithValue(meesage);
    }
  }
);
// Delete review
export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (id, thunkAPI) => {
    try {
      return await reviewsService.deleteReview(id);
    } catch (error) {
      const meesage =
        (error.response &&
          error.response.data &&
          error.response.data.meesage) ||
        error.meesage ||
        error.toString();
      return thunkAPI.rejectWithValue(meesage);
    }
  }
);

// create slice
const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    restReviews: (state) => {
      state.reviews = [];
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.meesage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.meesage = "";
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.meesage = "";
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.meesage = "";
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.meesage = action.payload;
      })
      .addCase(updateReview.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.meesage = "";
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        const index = state.reviews.findIndex(
          (review) => review.id === action.payload.id
        );
        state.reviews[index] = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.meesage = "";
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.meesage = action.payload;
      })
      .addCase(deleteReview.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.meesage = "";
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter(
          (review) => review.id !== action.payload
        );
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.meesage = "";
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.meesage = action.payload;
      });
  },
});

const { restReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
