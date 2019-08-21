import { connect } from 'react-redux'
import NorthParliament from '../../components/parliament/NorthParliament'
import { getParliamentNorth_request, editParliamentNorth_request } from '../../actions/parliament.action';
import { getMembers_request } from '../../actions/member.actions';

const mapStateToProps = state => ({
    parliamentNorth: state.parliamentReducer.parliamentNorth,
    members: state.memberReducer.members
})

const mapDispatchToProps = dispatch => ({
    getParliamentNorth: () => dispatch(getParliamentNorth_request()),
    editParliamentNorth: (members) => dispatch(editParliamentNorth_request(members)),
    getMembers: () => dispatch(getMembers_request())
})

const NorthCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(NorthParliament)

export default NorthCnt