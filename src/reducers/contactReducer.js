import { contactConstants } from '../constants/contact.constants'

const initialState = {
    details: []
}

export default function contactReducer(state = initialState, action) {
    switch(action.type) {
        case contactConstants.GETCONTACTDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case contactConstants.GETCONTACTDETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                details: action.payload
            }
        case contactConstants.GETCONTACTDETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case contactConstants.CHANGEDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case contactConstants.CHANGEDETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                details: action.payload
            }
        case contactConstants.CHANGEDETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}