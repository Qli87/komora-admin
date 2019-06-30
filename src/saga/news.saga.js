import { takeEvery, put, call} from 'redux-saga/effects'
import { getNews_api, addNews_api, editNews_api, deleteNews_api } from '../api/news.api'
import { getNews_failure, getNews_success, addNews_failure, addNews_success, editNews_failure, editNews_success, deleteNews_failure, deleteNews_success } from '../actions/news.actions'
import { newsConstants } from '../constants/news.constants';

export function* getNews() {
    const response = yield call(getNews_api)
    if(!response || !response.data) {
        return yield put(getNews_failure('Internal server error for get news'))
    }
    if(response.status === 200) {
        return yield put(getNews_success(response.data))
    } else {
        return yield put(getNews_failure('Error for get news'))
    }
}

export function* addNews(news) {
    const response = yield call(addNews_api(news))
    if(!response || !response.data) {
        return yield put(addNews_failure('Internal server error for add news'))
    } 
    if(response.status === 200) {
        return yield put(addNews_success(response.data))
    } else {
        return yield put(addNews_failure('Error for add news'))
    }
}

export function* editNews(news) {
    const response = yield call(editNews_api(news))
    if(!response || !response.data) {
        return yield put(editNews_failure('Internal server error for edit news'))
    }
    if(response.status === 200) {
        return yield put(editNews_success(response.data))
    } else {
        return yield put(editNews_failure('Error for edit news'))
    }
}

export function* deleteNews(news) {
    const response = yield call(deleteNews_api(news))
    if(!response || !response.data) {
        return yield put(deleteNews_failure('Internal server error for delete news'))
    }
    if(response.status === 200) {
        return yield put(deleteNews_success(response.data))
    } else {
        return yield put(deleteNews_failure('Error for delete news'))
    }
}

export function* newsSaga() {
    yield takeEvery(newsConstants.GETNEWS_REQUEST, getNews)
    yield takeEvery(newsConstants.ADDNEWS_REQUEST, addNews)
    yield takeEvery(newsConstants.EDITNEWS_REQUEST, editNews)
    yield takeEvery(newsConstants.DELETENEWS_REQUEST, deleteNews)
}