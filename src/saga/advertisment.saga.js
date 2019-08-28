import { call, put, takeEvery } from 'redux-saga/effects'
import { getAdvertisments_api, addAdvertisment_api, deleteAdv_api, editAdv_api } from '../api/advertisment.api';
import { advertismentConstants } from '../constants/advertisment.constants';
import { getAdv_failure, getAdv_success, addAdv_failure, addAdv_success, deleteAdv_failure, deleteAdv_success, editAdv_failure, editAdv_success } from '../actions/adv.action';


export function* getAdvertisments() {
    const response = yield call(getAdvertisments_api)
    if(!response || !response.data) {
        return yield put(getAdv_failure('Internal server error for get advertisments'))
    }
    if(response.status === 200) {
        return yield put(getAdv_success(response.data))
    } else {
        return yield put(getAdv_failure('Error for get advertisments'))
    }
}

export function* addAdvertisment(adv) {
    const response = yield call(addAdvertisment_api(adv))
    if(!response || !response.data) {
        return yield put(addAdv_failure('Internal server error for add advertisment'))
    }
    if(response.status === 200) {
        return yield put(addAdv_success(response.data))
    } else {
        return yield put(addAdv_failure('Error for add advertisment'))
    }
}

export function* deleteAdvertisment(adv) {
    const response = yield call(deleteAdv_api(adv))
    if(!response || !response.data) {
        return yield put(deleteAdv_failure('Internal server error for delete advertisment'))
    }
    if(response.status === 200) {
        return yield put(deleteAdv_success(response.data))
    } else {
        return yield put(deleteAdv_failure('Error for delete advertisment'))
    }
}

export function* editAdvertisment(adv) {
    const response = yield call(editAdv_api(adv))
    if(!response || !response.data) {
        return yield put(editAdv_failure('Intertnal server error for edit advertisment'))
    }
    if(response.status === 200) {
        return yield put(editAdv_success(response.data))
    } else {
        return yield put(editAdv_failure('Error for edit advertisment'))
    }
}

export function* advertismentSaga() {
    yield takeEvery(advertismentConstants.GETADV_REQUEST, getAdvertisments)
    yield takeEvery(advertismentConstants.ADDADV_REQUEST, addAdvertisment)
    yield takeEvery(advertismentConstants.DELETEADV_REQUEST, deleteAdvertisment)
    yield takeEvery(advertismentConstants.EDITADV_REQUEST, editAdvertisment)
}

