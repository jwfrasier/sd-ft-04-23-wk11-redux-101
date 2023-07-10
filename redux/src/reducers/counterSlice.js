import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    addFive: (state) => state + 5,
    minusFive: (state) => state - 5,
  },
});

export const { increment, decrement, addFive, minusFive } =
  counterSlice.actions;
export default counterSlice.reducer;
