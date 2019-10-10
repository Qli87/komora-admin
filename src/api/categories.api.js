import axios from 'axios'

export function getCategories_api() {
    return axios.get('http://api.zk.test/category')
}