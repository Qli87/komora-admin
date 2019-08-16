import axios from 'axios'

export function getNews_api(){
    return axios.get('http://www.mocky.io/v2/5d569b06300000360030abf8')
}

export function getNoveltyDetails_api() {
    return axios.get('http://www.mocky.io/v2/5d42d5eb3200005b00764370')
}

export function getNewsForCategory_api() {
    return axios.get('http://www.mocky.io/v2/5d42d5eb3200005b00764370')
}

export function addNews_api(newsLetter) {
    return axios.post('', {

    })
}

export function editNews_api(newsLetter) {
    return axios.post('', {
        
    })
}

export function deleteNews_api(newsLetter) {
    return axios.post('', {
        
    })
}


