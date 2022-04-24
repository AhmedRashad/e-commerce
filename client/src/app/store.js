import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import categoryReducer from "../features/category/categorySlice";
import brandSlice from "../features/brand/brandSlice";
import shoppingCartSlice from "../features/shoppingCart/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
    brand: brandSlice,
    shoppingCart: shoppingCartSlice,
  },
});
