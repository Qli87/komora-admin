import { connect } from 'react-redux'
import NkParliament from '../../components/parliament/NkParliament'
import { editParliamentNk_request, getParliamentNk_request } from '../../actions/parliament.action';
import { getMembers_request } from '../../actions/member.actions'

const mapStateToProps = state => ({
    parliamentNk: state.parliamentReducer.parliamentNk,
    members: state.memberReducer.members
})

const mapDispatchToProps = dispatch => ({
    getParliamentNk: () => dispatch(getParliamentNk_request()),
    editParliamentNk: (members) => dispatch(editParliamentNk_request(members)),
    getMembers: () => dispatch(getMembers_request())    
})

const NkCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(NkParliament)

export default NkCnt