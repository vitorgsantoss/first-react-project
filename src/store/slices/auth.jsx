import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    buttonClickedRequest() {
      console.log('Doing request');
    },

    buttonClickedSuccess(state) {
      console.log('success');
      state.isLoggedIn = !state.isLoggedIn;
    },

    buttonClickedFailure() {
      console.log('Request Failure');
    },
  },
});

export const {
  buttonClickedRequest,
  buttonClickedFailure,
  buttonClickedSuccess,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
