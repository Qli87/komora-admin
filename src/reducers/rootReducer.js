import {combineReducers}  from 'redux'
import memberReducer from './memberReducer'
import newsReducer from './newsReducer'
import categoryReducer from './categoryReducer'
import biographyReducer from './biographyReducer'
import boardMemberReducer from './boardMemberReducer'
import contactReducer from './contactReducer'
import parliamentReducer from './parliamentReducer'

export default combineReducers({
    memberReducer,
    newsReducer,
    categoryReducer,
    biographyReducer,
    boardMemberReducer,
    contactReducer,
    parliamentReducer
})