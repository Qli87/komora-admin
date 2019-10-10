import axios from 'axios'

export function homePage_api() {
    return axios.get('http://api.zk.test/homePage')
}

