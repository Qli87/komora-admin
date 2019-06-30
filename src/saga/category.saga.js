import { takeEvery, put, call} from 'redux-saga/effects'
import { categoryContants } from '../constants/category.constants'
import { getCategory_failure, getCategory_success } from '../actions/category.action'
import { getCategories_api } from '../api/categories.api'

export function* getCategories() {
    const response = yield call(getCategories_api);
    if(!response || !response.data) {
        return yield put(getCategory_failure('Internal server error for loading categories'))
    }
    if(response.status === 200) {
        return yield put(getCategory_success(response.data))
    } else {
        return yield put(getCategory_failure('Error for loading categories'))
    }
} 

export function* categorySaga() {
    yield takeEvery(categoryContants.GETCATEGORY_REQUEST, getCategories)
}