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
      return initialState;
    },
    
    registerRequest(state) {
      state.isLoading = true;
    },

    registerSuccess(state, action){
      const { email, nome } = action.payload;
      if (email !== state.user.email) {
        toast.success('Log in again!');
        history.push('/login');
        return initialState;
      }
      state.user.nome = nome;
      state.isLoading = false;
      },

    registerFailure(state) {
      state.isLoading = false;
    }    
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure
} = authSlice.actions;

export const authReducer = authSlice.reducer;

