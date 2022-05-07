import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";

const initialState = {
  orders: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  meesage: "",
};

// get Orders
export const getOrders = createAsyncThunk(
  "order/getOrders",

  async (thunkAPI) => {
    try {
      return await orderService.getAllOrders();
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

// get Order
export const getOrder = createAsyncThunk(
  "order/getOrder",
  async (id, thunkAPI) => {
    try {
      return await orderService.getOrder(id);
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

// add Order
export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (orderData, thunkAPI) => {
    try {
      return await orderService.addOrder(orderData);
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

// update Order
export const updateOrder = createAsyncThunk(
  "Order/updateOrder",
  async (id, orderData, thunkAPI) => {
    try {
      return await orderService.updateOrder(id, orderData);
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

// delete Order
export const deleteOrder = createAsyncThunk(
  "Order/deleteOrder",
  async (id, thunkAPI) => {
    try {
      return await orderService.deleteOrder(id);
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

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.meesage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(addOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.meesage = "Order added successfully";
        state.orders.push(action.payload);
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(updateOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.meesage = "Order updated successfully";
        state.orders = state.Orders.map((order) =>
          order._id === action.payload._id ? action.payload : order
        );
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(deleteOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.meesage = "Order deleted successfully";
        state.orders = state.orders.filter(
          (order) => order._id !== action.payload
        );
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      });
  },
});
export const { resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
