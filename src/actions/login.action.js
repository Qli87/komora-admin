import { loginConstants } from "../constants/login.constants";

export function login_request(credentials) {
    return {
        type: loginConstants.LOGIN_REQUEST,
        payload: credentials
    }
}

export function login_success(credentials) {
    return {
        type: loginConstants.LOGIN_SUCCESS,
        payload: credentials
    }
}

export function login_failure(error) {
    return {
        type: loginConstants.LOGIN_FAILURE,
        payload: error
    }
}