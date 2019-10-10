import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { homePage_request } from '../actions/homePage.action'

const mapStateToProps = state => ({
    content: state.homePageReducer.content
})

const mapDispatchToProps = dispatch => ({
    getContent: () => dispatch(homePage_request())
})

const HomePageCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)

export default HomePageCnt