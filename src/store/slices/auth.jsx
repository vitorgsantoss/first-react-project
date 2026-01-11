import { createSlice } from '@reduxjs/toolkit';
import history from '../../services/history';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

export const initialState = {
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
      delete axios.defaults.headers.Authorization;
      return initialState
    },
    registerRequest() {},

    registerSuccess(state, action){
      const { email, nome } = action.payload;
      if (email === state.user.email) {
        state.user.nome = nome;
      } else {
        toast.success('Log in again!');
        history.push('/login');
        return initialState;
      }
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess
} = authSlice.actions;

export const authReducer = authSlice.reducer;

