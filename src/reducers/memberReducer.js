import { memberConstants } from '../constants/member.constants'

const initialState = {
    members: []
}


export default function memberReducer(state = initialState, action) {
    switch(action.type) {
        case memberConstants.GETMEMBERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.GETMEMBERS_SUCCESS:
            return {
                ...state,
                loading: false,
                members: action.payload
            }
        case memberConstants.GETMEMBERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstants.ADDMEMBER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.ADDMEMBER_SUCCESS:
            return {
                ...state,
                loading: false,
                members: state.members.concat([action.payload])
            }
        case memberConstants.ADDMEMBER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstants.EDITMEMBER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.EDITMEMBER_SUCCESS:
            return {

            }
        case memberConstants.EDITMEMBER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstants.DELETEMEMBER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstants.DELETEMEMBER_SUCCESS:
            return {
                ...state,
                loading: false,
                members: state.members.filter(member => member.id !== action.payload.id)
            }
        case memberConstants.DELETEMEMBER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

