import { connect } from 'react-redux'
import Contact from '../components/Contact';
import { getContactDetails_request, changeDetails_request } from '../actions/contact.action';

const mapStateToProps = state => ({
    contactDetails: state.contactReducer.details
})

const mapDispatchToProps = dispatch => ({
    getDetails: () => dispatch(getContactDetails_request()),
    saveChanges: (details) => dispatch(changeDetails_request(details))
})

const ContactCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact)

export default ContactCnt