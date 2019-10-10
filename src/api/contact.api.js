import axios from 'axios'

export function getCompanyDetails_api() {
    return axios.get('http://api.zk.test/footer')
}

export function changeDetails_api(details) {
    console.log('details in api: ', details);
    return axios.put('', {
        
    })
}