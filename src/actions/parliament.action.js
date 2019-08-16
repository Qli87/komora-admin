import { parliamentConstants } from '../constants/parliament.constants'

//PG
export function getParliamentPg_request(members) {
    console.log('object');
    return {
        type: parliamentConstants.GETPARLIAMENTPG_REQUEST,
        payload: members
    }
}
export function getParliamentPg_success(members) {
    return {
        type: parliamentConstants.GETPARLIAMENTPG_SUCCESS,
        payload: members
    }
}
export function getParliamentPg_failure(error) {
    return {
        type: parliamentConstants.GETPARLIAMENTPG_FAILURE,
        payload: error
    }
}

//NK
export function getParliamentNk_request(members) {
    return {
        type: parliamentConstants.GETPARLIAMENTNK_REQUEST,
        payload: members
    }
}
export function getParliamentNk_success(members) {
    return {
        type: parliamentConstants.GETPARLIAMENTNK_SUCCESS,
        payload: members
    }
}
export function getParliamentNk_failure(error) {
    return {
        type: parliamentConstants.GETPARLIAMENTNK_FAILURE,
        payload: error
    }
}

//CT
export function getParliamentCt_request(members) {
    return {
        type: parliamentConstants.GETPARLIAMENTCT_REQUEST,
        payload: members
    }
}
export function getParliamentCt_success(members) {
    return {
        type: parliamentConstants.GETPARLIAMENTCT_SUCCESS,
        payload: members
    }
}
export function getParliamentCt_failure(error) {
    return {
        type: parliamentConstants.GETPARLIAMENTCT_FAILURE,
        payload: error
    }
}

//SOUTH
export function getParliamentSouth_request(members) {
    return {
        type: parliamentConstants.GETPARLIAMENTSOUTH_REQUEST,
        payload: members
    }
}
export function getParliamentSouth_success(members) {
    return {
        type: parliamentConstants.GETPARLIAMENTSOUTH_SUCCESS,
        payload: members
    }
}
export function getParliamentSouth_failure(error) {
    return {
        type: parliamentConstants.GETPARLIAMENTSOUTH_FAILURE,
        payload: error
    }
}

//NORTH
export function getParliamentNorth_request(members) {
    return {
        type: parliamentConstants.GETPARLIAMENTNORTH_REQUEST,
        payload: members
    }
}
export function getParliamentNorth_success(members) {
    return {
        type: parliamentConstants.GETPARLIAMENTNORTH_SUCCESS,
        payload: members
    }
}
export function getParliamentNorth_failure(error) {
    return {
        type: parliamentConstants.GETPARLIAMENTNORTH_FAILURE,
        payload: error
    }
}