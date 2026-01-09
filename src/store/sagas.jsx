import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from './slices/auth';
import axios from '../services/axios'
import { toast } from 'react-toastify';
import history from '../services/history'
import { get } from 'lodash';
import { REHYDRATE } from 'redux-persist';


function* login(action) {
  try {
    const { email, password, prevPath } = action.payload;
    const response = yield call(axios.post, '/tokens', { email, password });
    yield put(loginSuccess(response.data));
    toast.success('User logged!')
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    console.log(prevPath)
    history.push(prevPath);
  } catch {
    yield put(loginFailure());
    toast.error('User or password is invalid!')
  }
}

function rehydrate(action){
  const token = get(action, 'payload.auth.token')
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`
}

export default function* rootSaga() {
  yield all([
    takeLatest(loginRequest.type, login),
    takeLatest(REHYDRATE, rehydrate)
  ]);
}
