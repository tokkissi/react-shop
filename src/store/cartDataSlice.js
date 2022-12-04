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
    addOrder(state, oj) {
      const newOrder = state.find((el) => el.id === oj.payload.id);
      if (newOrder) {
        newOrder.count++;
      } else {
        state.push({
          id: oj.payload.id,
          name: oj.payload.title,
          count: 1,
        });
      }
    },
    deleteOrder(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { plusCount, addOrder, deleteOrder } = cartData.actions;

export default cartData;
