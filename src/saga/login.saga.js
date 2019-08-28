import { takeEvery, put, call} from 'redux-saga/effects'
import { loginConstants } from '../constants/login.constants';
import { login_api } from '../api/login.api';
import { login_failure, login_success } from '../actions/login.action';

export function* login(credentials) {
    const response = yield call(login_api(credentials))
    if(!response || !response.data) {
        return yield put(login_failure('Internal server error fog login'))
    }
    if(response.status === 200) {
        localStorage.setItem('user', response.data)
        return yield put(login_success(response.data))
    } else {
        return yield put(login_failure('Error fog login'))
    }
}

export function* loginSaga() {
    yield takeEvery(loginConstants.LOGIN_REQUEST, login)
}