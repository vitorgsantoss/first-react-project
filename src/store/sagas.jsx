import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from './slices/auth';
import axios from '../services/axios'
import { toast } from 'react-toastify';
import axios from '../services/axios'
import history from '../services/history'


function* login(action) {
  try {
    console.log('Estou dentro de login', action.payload)
    const { email, password, prevPath } = action.payload;
    const response = yield call(axios.post, '/tokens', { email, password });
    yield put(loginSuccess(response.data));
    toast.success('User logged!')
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(prevPath);
  } catch {
    yield put(loginFailure());
    toast.error('User or password is invalid!')
  }
}


export default function* rootSaga() {
  yield all([takeLatest(loginRequest.type, login)]);
}
