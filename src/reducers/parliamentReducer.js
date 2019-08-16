import { parliamentConstants } from '../constants/parliament.constants'

const initialState = {
    parliamentPg: [],
    parliamentNk: [],
    parliamentCt: [],
    parliamentSouth: [],
    parliamentNorth: []
}

export default function parliamentReducer(state = initialState, action) {
    switch(action.type) {
        //parliament PG
        case parliamentConstants.GETPARLIAMENTPG_REQUEST:
            console.log();
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.GETPARLIAMENTPG_SUCCESS:
            return {
                ...state,
                loading: true,
                parliamentPg: action.payload
            }
        case parliamentConstants.GETPARLIAMENTPG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        //parliamentNK
        case parliamentConstants.GETPARLIAMENTNK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.GETPARLIAMENTNK_SUCCESS:
            return {
                ...state,
                loading: false,
                parliamentNk: action.payload
            }
        case parliamentConstants.GETPARLIAMENTNK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }  

        //parliament CT
        case parliamentConstants.GETPARLIAMENTCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.GETPARLIAMENTCT_SUCCESS:
            return {
                ...state,
                loading: true,
                parliamentCt: action.payload
            }
        case parliamentConstants.GETPARLIAMENTCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
   

        //parliamentSouth
        case parliamentConstants.GETPARLIAMENTSOUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.GETPARLIAMENTSOUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                parliamentSouth: action.payload
            }
        case parliamentConstants.GETPARLIAMENTSOUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            
        //parliamentNorth
        case parliamentConstants.GETPARLIAMENTNORTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case parliamentConstants.GETPARLIAMENTNORTH_SUCCESS:
            return {
                ...state,
                loading: false,
                parliamentNorth: action.payload
            }
        case parliamentConstants.GETPARLIAMENTNORTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}