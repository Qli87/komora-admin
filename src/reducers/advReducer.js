import { advertismentConstants } from "../constants/advertisment.constants";

const initialState = {
    advs: [],
    advDetails: []
}

export default function advReducer(state = initialState, action) {
    switch(action.type) {
        //get all advertisments
        case advertismentConstants.GETADV_REQUEST:
            return {
                ...state,
                loading: true
            }
        case advertismentConstants.GETADV_SUCCCESS:
            return {
                ...state,
                loading: false,
                advs: action.payload
            }
        case advertismentConstants.GETADV_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        //get all advertisments end


        //add advertisment
        case advertismentConstants.ADDADV_REQUEST:
            return {
                ...state,
                loading: true
            }
        case advertismentConstants.ADDADV_SUCCESS:
            return {
                ...state,
                loading: false,
                advs: state.advs.concat([action.payload])
            }
        case advertismentConstants.ADDADV_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        //add advertisment ends

        //delete adv starts
        case advertismentConstants.DELETEADV_REQUEST:
            return {
                ...state,
                loading: true
            }
        case advertismentConstants.DELETEADV_SUCCESS:
            return {
                ...state,
                loading: false,
                advs: state.advs.filter(adv => adv.id !== action.payload.id)
            }
        case advertismentConstants.DELETEADV_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        //get adv details
        case advertismentConstants.GETADVDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case advertismentConstants.GETADVDETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                advDetails: action.payload
            }
        case advertismentConstants.GETADVDETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        //get adv details end
        default:
            return state
    }
}