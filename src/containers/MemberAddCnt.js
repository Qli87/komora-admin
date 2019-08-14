import { connect } from 'react-redux'
import MemberAdd from '../components/MemberAdd';
import { addMembar_succeess } from '../actions/member.actions';

const mapStateToProps = state => ({
    members: state.memberReducer.members
})

const mapDispatchToProps = dispatch => ({
    addMember: (user) => dispatch(addMembar_succeess(user))
})

const MemberAddCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(MemberAdd)

export default MemberAddCnt