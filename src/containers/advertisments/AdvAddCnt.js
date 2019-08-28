import { connect } from 'react-redux'
import AdvAdd from '../../components/advertisments/AdvAdd';
import { addAdv_success } from '../../actions/adv.action'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    addAdv: (adv) => dispatch(addAdv_success(adv))
})

const AdvAddCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdvAdd)

export default AdvAddCnt