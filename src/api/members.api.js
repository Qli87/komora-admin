import axios from 'axios'

export function getMembers_api(){
    return axios.get('')
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