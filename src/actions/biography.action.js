import { biographyConstants } from '../constants/biography.constants'


export function editBiography_request(biography) {
    return {
        type: biographyConstants.EDITBIOGRAPHY_REQUEST,
        payload: biography
    }
}

export function editBiography_success(biography) {
    return {
        type: biographyConstants.EDITBIOGRAPHY_SUCCESS,
        payload: biography
    }
}

export function editBiography_failure(error) {
    return {
        type: biographyConstants.EDITBIOGRAPHY_REQUEST,
        payload: error
    }
}


// export function getBiography_request(biography) {
//     return {
//         type: biographyConstants.GETBIOGRAPHY_REQUEST,
//         payload: biography
//     }
// }

// export function getBiography_success(biography) {
//     return {
//         type: biographyConstants.GETBIOGRAPHY_SUCCESS,
//         payload: biography
//     }
// }

// export function getBiography_failure(error) {
//     return {
//         type: biographyConstants.GETBIOGRAPHY_FAILURE,
//         payload: error
//     }
// }

// export function addBiography_request(biography) {
//     return {
//         type: biographyConstants.ADDBIOGRAPHY_REQUEST,
//         payload: biography
//     }
// }

// export function addBiography_success(biography) {
//     return {
//         type: biographyConstants.ADDBIOGRAPHY_SUCCESS,
//         payload: biography
//     }
// }

// export function addBiography_failure(error) {
//     return {
//         type: biographyConstants.ADDBIOGRAPHY_REQUEST,
//         payload: error
//     }
// }

// export function deleteBiography_request(biography) {
//     return {
//         type: biographyConstants.DELETE_BIOGRAPHY_REQUEST,
//         payload: biography
//     }
// }

// export function deleteBiography_success(biography) {
//     return {
//         type: biographyConstants.DELETE_BIOGRAPHY_SUCCESS,
//         payload: biography
//     }
// }

// export function deleteBiography_failure(error) {
//     return {
//         type: biographyConstants.DELETE_BIOGRAPHY_REQUEST,
//         payload: error
//     }
// }