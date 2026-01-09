import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: null,
  user: {},
  isLoading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
    },

    loginSuccess(state, action){
      const { token, user } = action.payload;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = token;
      state.user = user;
    },

    loginFailure() {
      return initialState
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
