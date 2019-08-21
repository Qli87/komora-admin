import { parliamentConstants } from '../constants/parliament.constants'

//PG starts
export function getParliamentPg_request(members) {
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
export function editParliamentPg_request(members) {
    return {
        type: parliamentConstants.EDITPARLIAMENTPG_REQUEST,
        payload: members
    }
}

export function editParliamentPg_success(members) {
    return {
        type: parliamentConstants.EDITPARLIAMENTPG_SUCCESS,
        payload: members
    }
}
export function editParliamentPg_failure(error) {
    return {
        type: parliamentConstants.EDITPARLIAMENTPG_REQUEST,
        payload: error
    }
}
//Pg ends
//

//
//
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
export function editParliamentNk_request(members) {
    return {
        type: parliamentConstants.EDITPARLIAMENTNK_REQUEST,
        payload: members
    }
}

export function editParliamentNk_success(members) {
    return {
        type: parliamentConstants.EDITPARLIAMENTNK_SUCCESS,
        payload: members
    }
}
export function editParliamentNk_failure(error) {
    return {
        type: parliamentConstants.EDITPARLIAMENTNK_FAILURE,
        payload: error
    }
}
//NK ends
//
//



//CT
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
export function editParliamentCt_request(members) {
    return {
        type: parliamentConstants.EDITPARLIAMENTCT_REQUEST,
        payload: members
    }
}

export function editParliamentCt_success(members) {
    return {
        type: parliamentConstants.EDITPARLIAMENTCT_SUCCESS,
        payload: members
    }
}
export function editParliamentCt_failure(error) {
    return {
        type: parliamentConstants.EDITPARLIAMENTCT_FAILURE,
        payload: error
    }
}
//CT ends
//CT ends



//SOUTH
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
export function editParliamentSouth_request(members) {
    return {
        type: parliamentConstants.EDITPARLIAMENTSOUTH_REQUEST,
        payload: members
    }
}

export function editParliamentSouth_success(members) {
    return {
        type: parliamentConstants.EDITPARLIAMENTSOUTH_SUCCESS,
        payload: members
    }
}
export function editParliamentSouth_failure(error) {
    return {
        type: parliamentConstants.EDITPARLIAMENTSOUTH_FAILURE,
        payload: error
    }
}
//SOUTH ends
//SOUTH ends




//NORTH
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
export function editParliamentNorth_request(members) {
    return {
        type: parliamentConstants.EDITPARLIAMENTNORTH_REQUEST,
        payload: members
    }
}

export function editParliamentNorth_success(members) {
    return {
        type: parliamentConstants.EDITPARLIAMENTNORTH_SUCCESS,
        payload: members
    }
}
export function editParliamentNorth_failure(error) {
    return {
        type: parliamentConstants.EDITPARLIAMENTNORTH_SUCCESS,
        payload: error
    }
}
//NORTH ends
//NORTH ends