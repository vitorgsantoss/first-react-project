import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import axios from '../../services/axios'
import { registerSuccess, registerFailure } from '../slices/auth';
import history from '../../services/history';

export default function* register({ payload }){
    try {
        const { id, email, password, name:nome } = payload;
        let response = {}
        if (id){
            response = yield call(axios.put, `/users`, { id, email, nome });
            toast.success("User changed successfully")
        } else {
            response = yield call(axios.post, '/users', { email, password, nome });
            toast.success("User registered successfully")
            history.push('/login');
        }
        yield put(registerSuccess(response.data));
        
    } catch (e) {
        toast.error(e);
        yield put(registerFailure());
    }
}




