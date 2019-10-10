import axios from 'axios'

export function getMembers_api(){
    return axios.get('http://api.zk.test/member')
}

export function addMember_api(user) {
    console.log('user in api: ', user);
    return axios.post('', {
        
    })
}

export function editMember_api(member) {
    console.log('user in api, edit: ', member);
    return axios.put('', {
        
    })
}

export function deleteMember_api(member) {
    console.log('user in api, delete: ', member);
    return axios.delete('', {
        
    })
}

export function getBoardMembers_api() {
    return axios.get('http://api.zk.test/boardMember')
}


export function deleteBoardMember_api(member) {
    console.log("member in api: ", member);
    return axios.put('', {
        
    })
}

export function getBoardMemberDetails_api(id) {
    return axios.get('http://api.zk.test/biography/'+id);
}