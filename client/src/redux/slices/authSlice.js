import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
  isSidebarOpen: false
  };

  const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
  reducers: {
setCredentials : (state, action) => {
    state.user = action.
    localStorage.setItem('userInfo')
}
  }
  });
  
  export const authReducer = authSlice.reducer;



  