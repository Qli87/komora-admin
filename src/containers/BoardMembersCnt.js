import { connect } from 'react-redux'
import BoardMembers from '../components/BoardMembers';
import { getBoardMembers_request } from '../actions/boardMember.action';

const mapStateToProps = state => ({
    members: state.boardMemberReducer.boardMembers
})

const mapDispatchToProps = dispatch => ({
    getBoardMembers: () => dispatch(getBoardMembers_request())
})

const BoardMembersCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(BoardMembers)

export default BoardMembersCnt