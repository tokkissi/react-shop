import { createSlice } from "@reduxjs/toolkit";

const recentVisit = createSlice({
  name: "recentVisit",
  initialState: [],
  reducers: {
    updateRecentVisit(state, action) {
      // 객체로 가져옴 {id: any, name: any, price: any}
      // 가져온 객체를 state 에서 findIndex 해서 -1이 아니면, 해당 인덱스를 splice(idx,1)로 삭제
      // 해당 객체를 state에 push
      // state.length > 3 이면 shift
      const finded = state.findIndex((el) => el.id === action.payload.id);
      if (finded !== -1) {
        state.splice(finded, 1);
      }
      state.push(action.payload);
      if (state.length > 3) {
        state.shift();
      }
    },
  },
});

export const { updateRecentVisit } = recentVisit.actions;
export default recentVisit;
