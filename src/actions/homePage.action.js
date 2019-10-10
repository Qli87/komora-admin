import { homePageConstants } from '../constants/homePage.constants'

export function homePage_request(content) {
    return {
        type: homePageConstants.HOMEPAGE_REQUEST,
        payload: content
    }
}

export function homePage_success(content) {
    return {
        type: homePageConstants.HOMEPAGE_SUCCESS,
        payload: content
    }
}

export function homePage_failure(error) {
    return {
        type: homePageConstants.HOMEPAGE_FAILURE,
        payload: error
    }
}