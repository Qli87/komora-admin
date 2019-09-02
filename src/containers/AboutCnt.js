import { connect } from 'react-redux'
import About from '../components/About'
import { getAboutContent_request, editAboutContent_request } from '../actions/aboute.action';

const mapStateToProps = state => ({
    content: state.aboutReducer.content
})

const mapDispatchToProps = dispatch => ({
    getContent: () => dispatch(getAboutContent_request()),
    editContent: (content) => dispatch(editAboutContent_request(content))
})

const AboutCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(About)

export default AboutCnt