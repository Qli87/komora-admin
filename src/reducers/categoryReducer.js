import { categoryContants } from "../constants/category.constants";

const initialState = {
    categories: []
}


export default function categoryReducer(state = initialState, action) {
    switch(action.type) {
        case categoryContants.GETCATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case categoryContants.GETCATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case categoryContants.GETCATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}