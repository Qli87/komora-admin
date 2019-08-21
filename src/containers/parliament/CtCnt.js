import { connect } from 'react-redux'
import CtParliament from '../../components/parliament/CtParliament'
import { getParliamentCt_request, editParliamentCt_request } from '../../actions/parliament.action';
import { getMembers_request } from '../../actions/member.actions';

const mapStateToProps = state => ({
    parliamentCt: state.parliamentReducer.parliamentCt,
    members: state.memberReducer.members
})

const mapDispatchToProps = dispatch => ({
    getParliamentCt: () => dispatch(getParliamentCt_request()),
    editParliamentCt: (members) => dispatch(editParliamentCt_request(members)),
    getMembers: () => dispatch(getMembers_request())
})

const CtCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(CtParliament)

export default CtCnt