import axios from 'axios'

export function getAdvertisments_api() {
    return axios.get('http://api.zk.test/advertisment')
}

export function addAdvertisment_api(adv) {
    return axios.post('', {

    })
}

export function deleteAdv_api(adv) {
    return axios.delete('', {

    })
}

export function editAdv_api(adv) {
    return axios.post('', {
        
    })
}

export function getAdvDetails_api(action) {
    return axios.get('http://api.zk.test/advertisment/'+action)
}