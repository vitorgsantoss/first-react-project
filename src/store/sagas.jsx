import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from './slices/auth';
import { toast } from 'react-toastify';



function* login(payload) {}

export default function* rootSaga() {
  yield all([takeLatest(loginRequest.type, login)]);
}
