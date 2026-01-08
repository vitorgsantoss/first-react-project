import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  buttonClickedRequest,
  buttonClickedSuccess,
  buttonClickedFailure,
} from './slices/auth';
import { toast } from 'react-toastify';

function fakeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      reject();
    }, 600);
  });
}

function* exampleRequest() {
  try {
    yield call(fakeRequest);
    yield put(buttonClickedSuccess());
  } catch {
    toast.error('Deu erro!');
    yield put(buttonClickedFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(buttonClickedRequest.type, exampleRequest)]);
}
