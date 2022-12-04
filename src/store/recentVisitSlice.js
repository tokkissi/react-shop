import { createSlice } from "@reduxjs/toolkit";

const recentVisit = createSlice({
  name: "recentVisit",
  initialState: [],
  reducers: {
    updateRecentVisit(state, action) {
      const newState = state.filter(
        (el) => JSON.stringify(el) !== JSON.stringify(action.payload)
      );
      if (state.length < 3) {
        // 같은 요소 찾기로 필터된 것이 없다면, 원본과 요소 수가 같다
        if (newState.length === state.length) {
          state.shift();
          state.push(action.payload);
        }
      }
    },
  },
});

export const { updateRecentVisit } = recentVisit.actions;
export default recentVisit;
