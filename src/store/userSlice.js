import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "tokkissi", age: 20 },
  reducers: {
    plusAge(state, num) {
      state.age += num.payload;
    },
  },
});

export const { plusAge } = user.actions;

export default user;
