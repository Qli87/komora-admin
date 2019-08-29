import axios from 'axios'

export function getAdvertisments_api() {
    return axios.get('http://www.mocky.io/v2/5d453720300000e931c5c7fc')
}

export function addAdvertisment_api(adv) {
    return axios.post('', {

    })
}

export function deleteAdv_api(adv) {
    return axios.post('', {

    })
}

export function editAdv_api(adv) {
    return axios.post('', {
        
    })
}

//adv
export function getAdvDetails_api() {
    return axios.get('http://www.mocky.io/v2/5d678d483300008500e657df')
}