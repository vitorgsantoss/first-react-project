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
    loginRequest(state, action) {
      console.log(state);
      console.log(action.payload);

    },

    loginSuccess(state, action) {
      console.log('success');
      // state.isLoggedIn = !state.isLoggedIn;
    },

    loginFailure(state, action) {
      console.log('Request Failure');
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
