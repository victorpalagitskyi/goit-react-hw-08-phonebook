import { createSlice } from "@reduxjs/toolkit";
import { register, signIn } from "./operation";


const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, (_, { payload }) => {
        console.log(payload);
      })
      .addCase(signIn.fulfilled, handleFulfilled);
  },
});

export const authReducer = authSlice.reducer;