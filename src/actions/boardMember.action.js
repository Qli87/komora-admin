import { memberConstants } from '../constants/member.constants'

// GET BOARD MEMBERS ACTIONS
export function getBoardMembers_request(members) {
    return {
        type: memberConstants.GETBOARDMEMBERS_REQUEST,
        payload: members
    }
}

export function getBoardMembers_success(members) {
    return {
        type: memberConstants.GETBOARDMEMBERS_SUCCESS,
        payload: members
    }
}

export function getBoardMembers_failure(error) {
    return {
        type: memberConstants.GETBOARDMEMBERS_FAILURE,
        payload: error
    }
}
// END GET BOARD MEMBERS ACTIONS

// ADD BOARD MEMBERS ACTIONS
export function addBoardMember_request(member) {
    return {
        type: memberConstants.BOARDMEMBERADD_REQUEST,
        payload: member
    }
}

export function addBoardMember_success(member) {
    return {
        type: memberConstants.BOARDMEMBERADD_SUCCESS,
        payload: member
    }
}

export function addBoardMember_failure(error) {
    return {
        type: memberConstants.BOARDMEMBERADD_FAILURE,
        payload: error
    }
}

//END ADD BOARD MEMBERS ACTIONS

//DELETE BOARD MEMEBERS ACTIONS
export function deleteBoardMember_request(member){
    return {
        type: memberConstants.BOARDMEMBERDELETE_REQUEST,
        payload: member
    }
}

export function deleteBoardMember_success(member){
    return {
        type: memberConstants.BOARDMEMBERDELETE_SUCCESS,
        payload: member
    }
}

export function deleteBoardMember_failure(error){
    return {
        type: memberConstants.BOARDMEMBERDELETE_FAILURE,
        payload: error
    }
}
//END DELETE BOARD MEMEBERS ACTIONS



//DETAILS FOR BOARD MEMBERS
export function getBoardMemberDetails_request(member) {
    return {
        type: memberConstants.GETBOARDMEMBERDETAILS_REQUEST,
        payload: member
    }
}

export function getBoardMemberDetails_success(member) {
    return {
        type: memberConstants.GETBOARDMEMBERDETAILS_SUCCESS,
        payload: member
    }
}

export function getBoardMemberDetails_failure(error) {
    return {
        type: memberConstants.GETBOARDMEMBERDETAILS_FAILURE,
        payload: error
    }
}
//END DETAILS FOR BOARD MEMBERS
