import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    loggedIn: (state) => true,
    loggedOut: (state) => false,
  },
});

export const { loggedIn, loggedOut } = loginSlice.actions;
export default loginSlice.reducer;
