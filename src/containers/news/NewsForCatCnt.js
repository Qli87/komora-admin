import { connect } from 'react-redux'
import NewsForCat from '../../components/news/NewsForCat';
import { getNewsForCategory_request, deleteNews_request, deleteNews_success } from '../../actions/news.actions';

const mapStateToProps = state => ({
    news: state.newsReducer.news
})

const mapDispatchToProps = dispatch => ({
    getNewsForCat: (id) => dispatch(getNewsForCategory_request(id)),
    deleteNovelty: (novelty) => dispatch(deleteNews_request(novelty))
    // deleteNovelty: (novelty) => dispatch(deleteNews_success(novelty))
})

const NewsForCatCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsForCat)

export default NewsForCatCnt