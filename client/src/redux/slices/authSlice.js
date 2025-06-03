import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) : null
  };

  const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
          .addCase(apiRegistor.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          .addCase(apiRegistor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSignedIn = true;
            state.userData = action.payload.user
            state.token = action.payload.token
          })
          .addCase(apiRegistor.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
          })

      }
  });
  
  export const authReducer = authSlice.reducer;



  