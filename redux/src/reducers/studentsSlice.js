import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
  name: "students",
  initialState: ["Jaye"],
  reducers: {
    // addStudent: (state) => // you are going to add yourself to the array,
    // removeLastStudent: (state) => // remove last student in the array
  },
});

export const { addStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
