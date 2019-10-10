import axios from 'axios'

export function getNews_api(){
    return axios.get('http://api.zk.test/news')
}

export function getNoveltyDetails_api(id) {
    return axios.get('http://api.zk.test/news/'+id)
}

export function getNewsForCategory_api(id) {
    return axios.get('http://api.zk.test/newsForCategory/'+id)
}

export function addNews_api(novelty) {
    return axios.post('', {

    })
}

export function editNews_api(novelty) {
    return axios.put('', {
        
    })
}

export function deleteNews_api(novelty) {
    return axios.delete('', {
        
    })
}


