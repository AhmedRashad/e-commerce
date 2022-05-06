import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

const initialState = {
  categories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  meesage: "",
};

// get categories
export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (thunkAPI) => {
    try {
      return await categoryService.getCategories();
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

// get category
export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (id, thunkAPI) => {

    try {
      return await categoryService.getCategory(id);
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

// add category
export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (categoryData, thunkAPI) => {
    try {
      return await categoryService.addCategory(categoryData);
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

// update category
export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (id, categoryData, thunkAPI) => {
    try {
      return await categoryService.updateCategory(id, categoryData);
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

// delete category
export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id, thunkAPI) => {
    try {
      return await categoryService.deleteCategory(id);
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

// slice
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    restCategory: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.meesage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(addCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories.push(action.payload);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = state.categories.map((category) =>
          category._id === action.payload._id ? action.payload : category
        );
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = state.categories.filter(
          (category) => category._id !== action.payload
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      });
  },
});

// export

export const { restCategory } = categorySlice.actions;
export default categorySlice.reducer;
