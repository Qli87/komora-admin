import axios from 'axios'

//PG starts
export function getMembersPg_api () {
    return axios.get('http://api.zk.test/parliamentPg')
}
export function editMembersPg_api(members) {
    return axios.put('', {

    })
}
//PG ends


//Nk starts
export function getMembersNk_api () {
    return axios.get('http://api.zk.test/parliamentNk')
}
export function editMembersNk_api(members) {
    return axios.post('', {
        
    })
}
//Nk ends


//Ct starts
export function getMembersCt_api () {
    return axios.get('http://api.zk.test/parliamentCt')
}
export function editMembersCt_api(members) {
    return axios.post('', {
        
    })
}
//Ct ends


//South starts
export function getMembersSouth_api () {
    return axios.get('http://api.zk.test/parliamentSouth')
}
export function editMembersSouth_api(members) {
    return axios.post('', {
        
    })
}
//South ends


//North starts
export function getMembersNorth_api () {
    return axios.get('http://api.zk.test/parliamentNorth')
}
export function editMembersNorth_api(members) {
    return axios.post('', {
        
    })
}
//North ends
