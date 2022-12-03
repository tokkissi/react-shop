import { createSlice } from "@reduxjs/toolkit";

const cartData = createSlice({
  name: "cartData",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plusCount(state, idx) {
      state.find((el) => el.id === idx.payload).count++;
    },
  },
});

export const { plusCount } = cartData.actions;

export default cartData;
