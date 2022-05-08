import { createSlice } from "@reduxjs/toolkit";

// shoping cart slice
const initialState = {
  carts: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.carts.push(action.payload);
    },
    removeProduct: (state, action) => {
      console.log(action.payload);
      state.carts = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
    resetShoppingCart: (state) => {
      state.carts = [];
    },
  },
});

export const { addProduct, removeProduct, resetShoppingCart } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
