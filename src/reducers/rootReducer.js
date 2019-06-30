import {combineReducers}  from 'redux'
import memberReducer from './memberReducer'
import newsReducer from './newsReducer'
import categoryReducer from './categoryReducer'

export default combineReducers({
    memberReducer,
    newsReducer,
    categoryReducer
})