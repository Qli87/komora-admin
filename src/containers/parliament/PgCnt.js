import { connect } from 'react-redux'
import PgParliament from '../../components/parliament/PgParliament'
import { getParliamentPg_request, editParliamentPg_request } from '../../actions/parliament.action';
import { getMembers_request } from '../../actions/member.actions';

const mapStateToProps = state => ({
    parliamentPg: state.parliamentReducer.parliamentPg,
    members: state.memberReducer.members
})

const mapDispatchToProps = dispatch => ({
    getParliamentMembers: () => dispatch(getParliamentPg_request()),
    editParliamentPg: (members) => dispatch(editParliamentPg_request(members)),
    getMembers: () => dispatch(getMembers_request())
})

const PgCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(PgParliament)

export default PgCnt