import { contactConstants } from '../constants/contact.constants'

export function getContactDetails_request(details) {
    return {
        type: contactConstants.GETCONTACTDETAILS_REQUEST,
        payload: details
    }
}

export function getContactDetails_success(details) {
    return {
        type: contactConstants.GETCONTACTDETAILS_SUCCESS,
        payload: details
    }
}

export function getContactDetails_failure(error) {
    return {
        type: contactConstants.GETCONTACTDETAILS_FAILURE,
        payload: error
    }
}

export function changeDetails_request(details) {
    return {
        type: contactConstants.CHANGEDETAILS_REQUEST,
        payload: details
    }
}

export function changeDetails_success(details) {
    return {
        type: contactConstants.CHANGEDETAILS_SUCCESS,
        payload: details
    }
}

export function changeDetails_failure(error) {
    return {
        type: contactConstants.CHANGEDETAILS_FAILURE,
        payload: error
    }
}