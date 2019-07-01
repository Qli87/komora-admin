import { biographyConstants } from '../constants/biography.constants'

const initialState = {
    biography: []
}

export default function biographyReducer(state = initialState, action) {
    switch(action.type) {
        case biographyConstants.GETBIOGRAPHY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case biographyConstants.GETBIOGRAPHY_SUCCESS:
            return {
                ...state,
                loading: false,
                biography: action.payload
            }
        case biographyConstants.GETBIOGRAPHY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case biographyConstants.ADDBIOGRAPHY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case biographyConstants.ADDBIOGRAPHY_SUCCESS:
            return {
                ...state,
                loading: false,
                biography: state.biography.add([action.payload])
            }
        case biographyConstants.ADDBIOGRAPHY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case biographyConstants.EDITBIOGRAPHY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case biographyConstants.EDITBIOGRAPHY_SUCCESS:
            return {
                ...state,
                loading: false,
                //to do
            }
        case biographyConstants.EDITBIOGRAPHY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case biographyConstants.DELETE_BIOGRAPHY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case biographyConstants.DELETE_BIOGRAPHY_SUCCESS:
            return {
                ...state,
                loading: false,
                //to do
            }
        case biographyConstants.DELETE_BIOGRAPHY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}