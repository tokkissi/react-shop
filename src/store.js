import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import cartData from "./store/cartDataSlice";

const stocknum = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    tokki: user.reducer,
    stock: stocknum.reducer,
    cartData: cartData.reducer,
  },
});
