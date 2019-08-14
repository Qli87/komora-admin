import { connect } from 'react-redux'
import { getMembers_request, deleteMember_success, addBoardMember_success } from '../actions/member.actions';
import MemberList from '../components/MemberList';

const mapStateToProps = state => ({
    members: state.memberReducer.members
})

const mapDispatchToProps = dispatch => ({
    getMembers: () => dispatch(getMembers_request()),
    deleteMember: (id) => dispatch(deleteMember_success(id)),
    addToBoard: (member) => dispatch(addBoardMember_success(member))
})

const MemberListCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(MemberList)

export default MemberListCnt