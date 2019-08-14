import { takeEvery, put, call} from 'redux-saga/effects'
import { getMembers_failure, getMembers_success, addMembar_failure, addMembar_succeess, editMember_failure, editMember_success, deleteMember_failure, deleteMember_success, getBoardMembers_failure, getBoardMembers_success, addBoardMember_failure, addBoardMember_success } from '../actions/member.actions'
import  { memberConstants } from '../constants/member.constants'
import { getMembers_api, addMember_api, deleteMember_api, getBoardMembers_api, addBoardMember_api, deleteBoardMember_api, editMember_api } from '../api/members.api'

export function* getMembers() {
    const response = yield call(getMembers_api)
    if(!response || !response.data) {
        return yield put(getMembers_failure('Internal server error for loading members'))
    }
    if(response.status === 200) {
        return yield put(getMembers_success(response.data))
    } else {
        return yield put(getMembers_failure('Error for getMembers'))
    }
}

export function* addMember(member) {
    const response = yield call(addMember_api(member))
    if(!response || !response.data) {
        return yield put(addMembar_failure('Internal server error for add member'))
    }
    if(response.status === 200) {
        return yield put(addMembar_succeess(response.data))
    } else {
        return yield put(addMembar_failure('Error for add member'))
    }
}

export function* editMember(member) {
    const response = yield call(editMember_api(member))
    if(!response || !response.data){
        return yield put(editMember_failure('Internal server error for edit member'))
    }
    if(response.status === 200) {
        return yield put(editMember_success(response.data))
    } else {
        return yield put(editMember_failure('Error for edit member'))
    }
}

export function* deleteMember(member) {
    const response = yield call(deleteMember_api(member))
    if(!response || !response.data) {
        return yield put(deleteMember_failure('Internal server error fore delete member'))
    }
    if(response.status === 200) {
        return yield put(deleteMember_success(response.data))
    } else {
        return yield put(deleteMember_failure('Error for delete member'))
    }
}

export function* getBoardMembers() {
    const response = yield call(getBoardMembers_api)
    if(!response || !response.data) {
        return yield put(getBoardMembers_failure('Internal server error for loading board members'))
    }
    if(response.status === 200) {
        return yield put(getBoardMembers_success(response.data))
    } else {
        return yield put(getBoardMembers_failure('Error for loading board members'))
    }
}

export function* addBoardMember(member) {
    console.log('saga');
    const response = yield call(addBoardMember_api(member))
    if(!response || !response.data) {
        return yield put(addBoardMember_failure('Internal server error for adding board member'))
    }
    if(response.status === 200) {
        return yield put(addBoardMember_success(response.data))
    } else {
        return yield put(addBoardMember_failure('Error for adding board member'))
    }
}

export function* deleteBoardMember(member) {
    const response = yield call(deleteBoardMember_api(member))
    if(!response || !response.data) {
        return yield put(addBoardMember_failure('Internal server error for delete board member'))
    }
    if(response.status === 200) {
        return yield put(addBoardMember_success(response.data))
    } else {
        return yield put(addBoardMember_failure('Error for delete board member'))
    }
}

export function* memberSaga() {
    yield takeEvery(memberConstants.GETMEMBERS_REQUEST, getMembers)
    yield takeEvery(memberConstants.ADDMEMBER_REQUEST, addMember)
    yield takeEvery(memberConstants.EDITMEMBER_REQUEST, editMember)
    yield takeEvery(memberConstants.DELETEMEMBER_REQUEST, deleteMember)
    yield takeEvery(memberConstants.GETBOARDMEMBERS_REQUEST, getBoardMembers)
    yield takeEvery(memberConstants.BOARDMEMBERADD_REQUEST, addBoardMember)
    yield takeEvery(memberConstants.BOARDMEMBERDELETE_REQUEST, deleteBoardMember)
}