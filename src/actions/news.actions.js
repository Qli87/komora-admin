import { newsConstants } from '../constants/news.constants'

export function getNews_request(news) {
    return {
        type: newsConstants.GETNEWS_REQUEST,
        payload: news
    }
}

export function getNews_success(news) {
    return {
        type: newsConstants.GETNEWS_SUCCESS,
        payload: news
    }
}

export function getNews_failure(error) {
    return {
        type: newsConstants.GETNEWS_FAILURE,
        payload: error
    }
}

export function getNoveltyDetails_request(novelty) {
    return {
        type: newsConstants.GETNOVELTYDETAILS_REQUEST,
        payload: novelty
    }
}

export function getNoveltyDetails_success(novelty) {
    return {
        type: newsConstants.GETNOVELTYDETAILS_SUCCESS,
        payload: novelty
    }
}

export function getNoveltyDetails_failure(error) {
    return {
        type: newsConstants.GETNOVELTYDETAILS_FAILURE,
        payload: error
    }
}

export function getNewsForCategory_request(news) {
    return {
        type: newsConstants.GETNEWSFORCATEGORY_REQUEST,
        payload: news
    }
}

export function getNewsForCategory_success(news) {
    return {
        type: newsConstants.GETNEWSFORCATEGORY_SUCCESS,
        payload: news
    }
}

export function getNewsForCategory_failure(news) {
    return {
        type: newsConstants.GETNEWSFORCATEGORY_FAILURE,
        payload: news
    }
}

export function addNews_request(newsLetter) {
    return {
        type: newsConstants.ADDNEWS_REQUEST,
        payload: newsLetter
    }
}

export function addNews_success(newsLetter) {
    return {
        type: newsConstants.ADDNEWS_SUCCESS,
        payload: newsLetter
    }
}

export function addNews_failure(error) {
    return {
        type: newsConstants.ADDNEWS_FAILURE,
        payload: error
    }
}

export function editNews_request(newsLetter) {
    return {
        type: newsConstants.EDITNEWS_REQUEST,
        payload: newsLetter
    }
}

export function editNews_success(newsLetter) {
    return {
        type: newsConstants.EDITNEWS_SUCCESS,
        payload: newsLetter
    }
}

export function editNews_failure(error) {
    return {
        type: newsConstants.EDITNEWS_FAILURE,
        payload: error
    }
}


export function deleteNews_request(newsLetter) {
    return {
        type: newsConstants.DELETENEWS_REQUEST,
        payload: newsLetter
    }
}

export function deleteNews_success(newsLetter) {
    return {
        type: newsConstants.DELETENEWS_SUCCESS,
        payload: newsLetter
    }
}

export function deleteNews_failure(error) {
    return {
        type: newsConstants.DELETENEWS_FAILURE,
        payload: error
    }
}