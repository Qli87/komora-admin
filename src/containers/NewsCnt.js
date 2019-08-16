import { connect } from 'react-redux'
import News from '../components/News'
import { getNews_request } from '../actions/news.actions';

const mapStateToProps = state => ({
    news: state.newsReducer.news
})

const mapDispatchToProps = dispatch => ({
    getNews: () => dispatch(getNews_request())
})

const NewsCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(News)

export default NewsCnt