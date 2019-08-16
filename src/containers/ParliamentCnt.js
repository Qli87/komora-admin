import { connect } from 'react-redux'
import Parliament from '../components/Parliament';
import { getParliamentPg_request, getParliamentNk_request, getParliamentCt_request, getParliamentSouth_request, getParliamentNorth_request } from '../actions/parliament.action';

const mapStateToProps = state => ({
    parliamentPg: state.parliamentReducer.parliamentPg,
    parliamentNk: state.parliamentReducer.parliamentNk,
    parliamentCt: state.parliamentReducer.parliamentCt,
    parliamentSouth: state.parliamentReducer.parliamentSouth,
    parliamentNorth: state.parliamentReducer.parliamentNorth

})

const mapDispatchToProps = dispatch => ({
    getParliamentPg: () => dispatch(getParliamentPg_request()),
    getParliamentNk: () => dispatch(getParliamentNk_request()),
    getParliamentCt: () => dispatch(getParliamentCt_request()),
    getParliamentSouth: () => dispatch(getParliamentSouth_request()),
    getParliamentNorth: () => dispatch(getParliamentNorth_request())
})

const ParliamentCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Parliament)

export default ParliamentCnt