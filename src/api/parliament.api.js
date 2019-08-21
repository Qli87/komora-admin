import axios from 'axios'

//PG
//PG
//PG
//PG starts
export function getMembersPg_api () {
    return axios.get('http://www.mocky.io/v2/5d4171603100004d005393cd')
}
export function editMembersPg_api(members) {
    return axios.post('', {

    })
}
//PG ends
//
//

//Nk starts
//Nk starts
export function getMembersNk_api () {
    return axios.get('http://www.mocky.io/v2/5d41741d3100007e005393ee')
}
export function editMembersNk_api(members) {
    return axios.post('', {
        
    })
}
//Nk ends
//Nk ends


//Ct starts
//Ct starts
export function getMembersCt_api () {
    return axios.get('http://www.mocky.io/v2/5d417f83310000570053944c')
}

export function editMembersCt_api(members) {
    return axios.post('', {
        
    })
}
//Ct ends
//Ct ends


//South starts
export function getMembersSouth_api () {
    return axios.get('http://www.mocky.io/v2/5d417950310000530053941a')
}
export function editMembersSouth_api(members) {
    return axios.post('', {
        
    })
}
//South ends


//North starts
export function getMembersNorth_api () {
    return axios.get('http://www.mocky.io/v2/5d417c333100007bc253942d')
}
export function editMembersNorth_api(members) {
    return axios.post('', {
        
    })
}
//North ends
