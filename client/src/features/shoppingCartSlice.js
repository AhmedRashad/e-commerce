import { createSlice } from "@reduxjs/toolkit";

// shoping cart slice
const initialState = {
  products: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    resetShoppingCart: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, resetShoppingCart } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
