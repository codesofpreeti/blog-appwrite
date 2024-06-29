import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    },
  },
});

//slice we export in two steps, one is with all the reducers and a full slice
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
