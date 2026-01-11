import { get } from 'lodash';
import { REHYDRATE } from 'redux-persist';
import { all, takeLatest } from 'redux-saga/effects';
import * as actions from '../slices/auth';
import axios from '../../services/axios'
import login from './login';
import register from './register';

function rehydrate(action){
  const token = get(action, 'payload.auth.token')
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.loginRequest.type, login),
    takeLatest(actions.registerRequest.type, register),
    takeLatest(REHYDRATE, rehydrate)
  ]);
}
