import { memberConstants } from '../constants/member.constants'


export function getMembers_request(members) {
    return {
        type: memberConstants.GETMEMBERS_REQUEST,
        payload: members
    }
}

export function getMembers_success(members) {
    return {
        type: memberConstants.GETMEMBERS_SUCCESS,
        payload: members
    }
}

export function getMembers_failure(error) {
    return {
        type: memberConstants.GETMEMBERS_FAILURE,
        payload: error
    }
}

export function addMember_request(member) {
    return {
        type: memberConstants.ADDMEMBER_REQUEST,
        payload: member
    }
}

export function addMembar_succeess(member) {
    return {
        type: memberConstants.ADDMEMBER_SUCCESS,
        payload: member
    }
}

export function addMembar_failure(error) {
    return {
        type: memberConstants.ADDMEMBER_FAILURE,
        payload: error
    }
}

export function editMember_request(member) {
    return {
        type: memberConstants.EDITUSER_REQUEST,
        payload: member
    }
}

export function editMember_success(member) {
    return {
        type: memberConstants.EDITUSER_SUCCESS,
        payload: member
    }
}

export function editMember_failure(error) {
    return {
        type: memberConstants.EDITUSER_FAILURE,
        payload: error
    }
}

export function deleteMember_request(member) {
    return {
        type: memberConstants.DELETEMEMBER_REQUEST,
        payload: member
    }
}

export function deleteMember_success(member) {
    return {
        type: memberConstants.DELETEMEMBER_SUCCESS,
        payload: member
    }
}

export function deleteMember_failure(error) {
    return {
        type: memberConstants.DELETEMEMBER_FAILURE,
        payload: error
    }
}