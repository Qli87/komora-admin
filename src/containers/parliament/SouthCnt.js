import { connect } from 'react-redux'
import SouthParliament from '../../components/parliament/SouthParliament'
import { getMembers_request } from '../../actions/member.actions';
import { getParliamentSouth_request, editParliamentSouth_request } from '../../actions/parliament.action';

const mapStateToProps = state => ({
    parliamentSouth: state.parliamentReducer.parliamentSouth,
    members: state.memberReducer.members
})

const mapDispatchToProps = dispatch => ({
    getParliamentSouth: () => dispatch(getParliamentSouth_request()),
    editParliamentSouth: (members) => dispatch(editParliamentSouth_request(members)),
    getMembers: () => dispatch(getMembers_request())
})

const SouthCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(SouthParliament)

export default SouthCnt