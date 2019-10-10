import { call, put, takeEvery } from 'redux-saga/effects'
import { editBiography_api } from '../api/biography.api';
import { editBiography_failure, editBiography_success, deleteBiography_failure} from '../actions/biography.action'
import { biographyConstants } from '../constants/biography.constants';

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


export function* biographySaga() {
    yield takeEvery(biographyConstants.EDITBIOGRAPHY_REQUEST, editBiography)
}