import { connect } from 'react-redux'
import Member from '../components/singleComponents/Member';
import { addBoardMember_request } from '../actions/boardMember.action';

const mapStateToProps = state => ({
    members: state.memberReducer.members,
    boardMembers: state.boardMemberReducer.boardMembers
})

const mapDispatchToProps = dispatch => ({
    addToBoard : (member) => dispatch(addBoardMember_request(member))
})

const MemberCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(Member)

export default MemberCnt