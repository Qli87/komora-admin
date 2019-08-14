import { connect } from 'react-redux'
import Member from '../components/singleComponents/Member';
import { addBoardMember_request } from '../actions/member.actions';

const mapStateToProps = state => ({
    members: state.memberReducer.members,
    boardMembers: state.memberReducer.boardMembers
})

const mapDispatchToProps = dispatch => ({
    addToBoard : (member) => dispatch(addBoardMember_request(member))
})

const MemberCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(Member)

export default MemberCnt