import { call, put } from 'redux-saga/effects';
import * as authActions from '../slices/auth';
import axios from '../../services/axios'
import { toast } from 'react-toastify';
import history from '../../services/history'


export default function* login(action) {
  try {
    const { email, password, prevPath } = action.payload;
    const response = yield call(axios.post, '/tokens', { email, password });
    yield put(authActions.loginSuccess(response.data));
    toast.success('User logged!')
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(prevPath);
  } catch {
    yield put(authActions.loginFailure());
    toast.error('User or password is invalid!')
  }
}




