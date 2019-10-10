import { connect } from 'react-redux'
import Biography from '../components/Biography';
import { getBoardMemberDetails_request, getBoardMemberDetails_success } from '../actions/boardMember.action';
import { editBiography_request } from '../actions/biography.action';

const mapStateToProps = state => ({
    boardMember: state.boardMemberReducer.boardMember
})

const mapDispatchToProps = dispatch => ({
    getDetails: (id) => dispatch(getBoardMemberDetails_request(id)),
    saveChanges: (data) => dispatch(editBiography_request(data))
})

const BiographyCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(Biography)

export default BiographyCnt