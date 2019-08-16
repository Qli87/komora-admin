import axios from 'axios'

export function getCompanyDetails_api() {
    return axios.get('http://www.mocky.io/v2/5d47d634330000ed3ea3eb48')
}

export function changeDetails_api(details) {
    console.log('details in api: ', details);
    return axios.post('', {
        
    })
}