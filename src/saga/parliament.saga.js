import { takeEvery, put, call} from 'redux-saga/effects'
import { getMembersPg_api, getMembersNk_api, getMembersCt_api, getMembersSouth_api, getMembersNorth_api } from '../api/parliament.api';
import { parliamentConstants } from '../constants/parliament.constants';
import { getParliamentPg_failure, getParliamentPg_success, getParliamentNk_failure, getParliamentNk_success, getParliamentCt_failure, getParliamentCt_success, getParliamentSouth_failure, getParliamentSouth_success, getParliamentNorth_failure, getParliamentNorth_success } from '../actions/parliament.action';

//PG
export function* getParliamentPg() {
    const response = yield call(getMembersPg_api)
    if(!response || !response.data) {
        return yield put(getParliamentPg_failure('Internal server error for loading pg parliament memebers'))
    }
    if(response.status === 200){
        return yield put(getParliamentPg_success(response.data))
    } else {
        return yield put(getParliamentPg_failure('Error for loading pg parliament memebers'))
    }
}

//NK
export function* getParliamentNk() {
    const response = yield call(getMembersNk_api)
    if(!response || !response.data) {
        return yield put(getParliamentNk_failure('Internal server error for loading nk parliament'))
    }
    if(response.status === 200){
        return yield put(getParliamentNk_success(response.data))
    } else {
        return yield put(getParliamentNk_failure('Error for loading nk parliament'))
    }
}

//CT
export function* getParliamentCt() {
    const response = yield call(getMembersCt_api)
    if(!response || !response.data) {
        return yield put(getParliamentCt_failure('Internal server error for loading ct parliament'))
    }
    if(response.status === 200){
        return yield put(getParliamentCt_success(response.data))
    } else {
        return yield put(getParliamentCt_failure('Error for loading ct parliament'))
    }
}

//South
export function* getParliamentSouth() {
    const response = yield call(getMembersSouth_api)
    if(!response || !response.data) {
        return yield put(getParliamentSouth_failure('Internal server error for loading south parliamnet'))
    }
    if(response.status === 200){
        return yield put(getParliamentSouth_success(response.data))
    } else {
        return yield put(getParliamentSouth_failure('Error for loading south parliamnet'))
    }
}

//North
export function* getParliamentNorth() {
    const response = yield call(getMembersNorth_api)
    if(!response || !response.data) {
        return yield put(getParliamentNorth_failure('Internal server error for loading north members'))
    }
    if(response.status === 200){
        return yield put(getParliamentNorth_success(response.data))
    } else {
        return yield put(getParliamentNorth_failure('Error for loading north members'))
    }
}



export function* parliamentSaga() {
    yield takeEvery(parliamentConstants.GETPARLIAMENTPG_REQUEST, getParliamentPg)
    yield takeEvery(parliamentConstants.GETPARLIAMENTNK_REQUEST, getParliamentNk)
    yield takeEvery(parliamentConstants.GETPARLIAMENTCT_REQUEST, getParliamentCt)
    yield takeEvery(parliamentConstants.GETPARLIAMENTSOUTH_REQUEST, getParliamentSouth)
    yield takeEvery(parliamentConstants.GETPARLIAMENTNORTH_REQUEST, getParliamentNorth)
}