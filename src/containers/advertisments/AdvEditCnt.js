import { connect } from 'react-redux'
import AdvEdit from '../../components/advertisments/AdvEdit';
import { getAdvDetails_request, editAdv_request } from '../../actions/adv.action';

const mapStateToProps = state => ({
    advDetails: state.advReducer.advDetails
})

const mapDispatchToProps = dispatch => ({
    getAdvDetails: (adv) => dispatch(getAdvDetails_request(adv)),
    editAdv: (adv) => dispatch(editAdv_request(adv))
})

const AdvEditCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdvEdit)

export default AdvEditCnt