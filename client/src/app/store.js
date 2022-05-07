import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import categoryReducer from "../features/category/categorySlice";
import brandSlice from "../features/brand/brandSlice";
import shoppingCartSlice from "../features/shoppingCartSlice";
import reviewsSlice from "../features/reviews/reviewsSlice";
import orderSlice from "../features/orders/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
    brand: brandSlice,
    shoppingCart: shoppingCartSlice,
    reviews: reviewsSlice,
    order:orderSlice,
  },
});
