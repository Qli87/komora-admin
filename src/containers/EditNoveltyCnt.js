import { connect } from 'react-redux'
import EditNovelty from '../components/EditNovelty';
import { editNews_request, getNoveltyDetails_request } from '../actions/news.actions';
import { getCategory_request } from '../actions/category.action';

const mapStateToProps = state => ({
    noveltyDetails: state.newsReducer.noveltyDetails,
    categories: state.categoryReducer.categories
})

const mapDispatchToProps = dispatch => ({
    getDetails: (id) => dispatch(getNoveltyDetails_request(id)),
    editNovelty: (novelty) => dispatch(editNews_request(novelty)),
    getCategories: () => dispatch(getCategory_request())
})

const EditNoveltyCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(EditNovelty)

export default EditNoveltyCnt