import { advertismentConstants } from "../constants/advertisment.constants";

const initialState = {
    advs: [],
    advDetails: []
}

export default function advReducer(state = initialState, action) {
    switch(action.type) {
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
            console.log('reducer: ',action.payload);
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
        default:
            return state
    }
}