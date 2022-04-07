import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  meesage: "",
};

// get products
export const getProducts = createAsyncThunk(
  "product/getProducts",

  async (thunkAPI) => {
    try {
      return await productService.getProducts();
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

// get product
export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getProduct(id);
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

// add product
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (productData, thunkAPI) => {
    try {
      return await productService.addProduct(productData);
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

// update product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (id, productData, thunkAPI) => {
    try {
      return await productService.updateProduct(id, productData);
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

// delete product
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.deleteProduct(id);
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

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProduct: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.meesage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(getProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(addProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.meesage = "Product added successfully";
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(updateProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.meesage = "Product updated successfully";
        state.products = state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.meesage = "Product deleted successfully";
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      });
  },
});
export const { resetProduct } = productSlice.actions;
export default productSlice.reducer;
