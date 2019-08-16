import { connect } from 'react-redux'
import MemberEdit from '../components/MemberEdit';
import { getMemberDetails_success, editMember_request } from '../actions/member.actions';

const mapStateToProps = state => ({
    memberDetails: state.memberReducer.member
})

const mapDispatchToProps = dispatch => ({
    getMemberDetails: (id) => dispatch(getMemberDetails_success(id)),
    editMember: (member) => dispatch(editMember_request(member))
})

const MemberEditCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(MemberEdit)

export default MemberEditCnt