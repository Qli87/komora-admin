import {combineReducers}  from 'redux'
import memberReducer from './memberReducer'
import newsReducer from './newsReducer'
import categoryReducer from './categoryReducer'
import biographyReducer from './biographyReducer'

export default combineReducers({
    memberReducer,
    newsReducer,
    categoryReducer,
    biographyReducer
})