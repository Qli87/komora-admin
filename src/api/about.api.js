import axios from 'axios'

export function about_api() {
    return axios.get('http://api.zk.test/about')
}


export function editAbout_api(content) {
    return axios.put('http://api.zk.test/about/update?'+content.aboutTitle+"?"+content.aboutContent+"?"+content.parliamentContent, {
        params: {
            aboutTitle: content.payload.aboutTitle,
            aboutContent: content.payload.aboutContent,
            parliamentContent: content.payload.parliamentContent
        }
    })
}