import { newsConstants } from '../constants/news.constants' 

const initialState = {
    news: [],
    noveltyDetails: []
}

export default function newsReducer(state = initialState, action) {
    switch(action.type) {
        case newsConstants.GETNEWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case newsConstants.GETNEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload
            }
        case newsConstants.GETNEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case newsConstants.GETNOVELTYDETAILS_REQUEST:
                return {
                    ...state,
                    loading: true,
                    noveltyDetails: []
                }
            case newsConstants.GETNOVELTYDETAILS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    noveltyDetails: action.payload
                }
            case newsConstants.GETNOVELTYDETAILS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
            case newsConstants.GETNEWSFORCATEGORY_REQUEST:
                return {
                    ...state,
                    loading: true,
                    news: []
                }
            case newsConstants.GETNEWSFORCATEGORY_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    news: action.payload
                }
            case newsConstants.GETNEWSFORCATEGORY_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
        case newsConstants.ADDNEWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case newsConstants.ADDNEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: state.news.concat([action.payload])
            }
        case newsConstants.ADDNEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case newsConstants.EDITNEWS_REQUEST:
            return {
                ...state,
                loading: false,
            }
        case newsConstants.EDITNEWS_SUCCESS:
            // TODO
            return {
                ...state,
                loading: false
            // TODO
            }
        case newsConstants.EDITNEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case newsConstants.DELETENEWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case newsConstants.DELETENEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: state.news.filter(news => news.id !== action.payload.id)
            }
        case newsConstants.DELETENEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}