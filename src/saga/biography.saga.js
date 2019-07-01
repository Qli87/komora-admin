import { call, put, takeEvery } from 'redux-saga/effects'
import { getBiography_api, addBiography_api, editBiography_api, deleteBiography_api } from '../api/biography.api';
import { getBiography_request, getBiography_success, getBiography_failure, addBiography_failure, addBiography_success, editBiography_failure, editBiography_success, deleteBiography_failure, deleteBiography_success } from '../actions/biography.action'
import { biographyConstants } from '../constants/biography.constants';

export function* getBiography(memberId) {
    const response = yield call(getBiography_api(memberId))
    if(!response || !response.data) {
        return yield put(getBiography_request('Internal server error for get bioprahy'))
    }
    if(response.status === 200) {
        return yield put(getBiography_success(response.data))
    } else {
        return yield put(getBiography_failure('Error for get biography'))
    }
}

export function* addBiography(details) {
    const response = yield call(addBiography_api(details))
    if(!response || !response.data) {
        return yield put(addBiography_failure('Internal server error for add biography'))
    }
    if(response.status === 200) {
        return yield put(addBiography_success(response.data))
    } else {
        return yield put(addBiography_failure('Error for add biography'))
    }
}

export function* editBiography(details) {
    const response = yield call(editBiography_api(details))
    if(!response || !response.data) {
        return yield put(editBiography_failure('Internal server error for edit biography'))
    }
    if(response.status === 200) {
        return yield put(editBiography_success(response.data))
    } else {
        return yield put(editBiography_failure('Error for edit biography'))
    }
}

export function* deleteBiography(details) {
    const response = yield call(deleteBiography_api(details)) 
    if(!response || !response.data) {
        return yield put(deleteBiography_failure('Internal server error for delete biography'))
    }
    if(response.status === 200) {
        return yield put(deleteBiography_success(response.data))
    } else {
        return yield put(deleteBiography_failure('Error for delete biography'))
    }
}

export function* biographySaga() {
    yield takeEvery(biographyConstants.GETBIOGRAPHY_REQUEST,  getBiography)
    yield takeEvery(biographyConstants.ADDBIOGRAPHY_REQUEST, addBiography)
    yield takeEvery(biographyConstants.EDITBIOGRAPHY_REQUEST, editBiography)
    yield takeEvery(biographyConstants.DELETE_BIOGRAPHY_REQUEST, deleteBiography)
}