import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from './slices/auth';
import axios from '../services/axios'
import { toast } from 'react-toastify';



function* login(payload) {
  try{
    console.log('Estou dentro do saga e esse é o payload:')
    console.log({ payload })
  } catch (e) {

  }
}

export default function* rootSaga() {
  yield all([takeLatest(loginRequest.type, login)]);
}
