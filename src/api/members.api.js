import axios from 'axios'

export function getMembers_api(){
    return axios.get('http://www.mocky.io/v2/5d480fbd3300009287a3eceb')
}

export function addMember_api(user) {
    console.log('user in api: ', user);
    return axios.post('', {
        
    })
}

export function editMember_api(member) {
    console.log('user in api, edit: ', member);
    return axios.post('', {
        
    })
}

export function deleteMember_api(member) {
    console.log('user in api, delete: ', member);
    return axios.post('', {
        
    })
}

export function getBoardMembers_api() {
    return axios.get('http://www.mocky.io/v2/5d415a2b3100004d005392ba')
}

export function addBoardMember_api(member) {
    console.log("member in api: ", member);
    //todo
}

export function deleteBoardMember_api(member) {
    console.log("member in api: ", member);
    //todo
    return axios.post('', {
        
    })
}

export function getBoardMemberDetails_api() {
    //make a valid board memeber details for edit biography
    //ONLY FOR BOARD MEMBERS
    return axios.get('http://www.mocky.io/v2/5d402caa330000911c9d2a2e')
}