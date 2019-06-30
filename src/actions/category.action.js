import { categoryContants } from '../constants/category.constants'

export function getCategory_request(category) {
    return {
        type: categoryContants.GETCATEGORY_REQUEST,
        payload: category
    }
}

export function getCategory_success(category) {
    return {
        type: categoryContants.GETCATEGORY_SUCCESS,
        payload: category
    }
}

export function getCategory_failure(error) {
    return {
        type: categoryContants.GETCATEGORY_FAILURE,
        payload: error
    }
}