import { connect } from 'react-redux'
import AddNovelty from '../../components/news/AddNovelty';
import { addNews_request } from '../../actions/news.actions';
import { getCategory_request } from '../../actions/category.action';

const mapStateToProps = state => ({
    news: state.newsReducer.news,
    categories: state.categoryReducer.categories
})

const mapDispatchToProps = dispatch => ({
    addNovelty: (novelty) => dispatch(addNews_request(novelty)),
    getCategories: () => dispatch(getCategory_request())
})

const AddNoveltyCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNovelty)

export default AddNoveltyCnt