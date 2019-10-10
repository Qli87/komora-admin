import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';

class HomePage extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            goal: '',
            licence: '',
            about: '', 
            titleh1: '',
            titleMembers: '',
            titleMember: '',
            titleMemberH: ''
        }
    }

    componentDidMount() {
        this.props.getContent()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            goal: nextProps.content.goal,
            licence: nextProps.content.licence,
            about: nextProps.content.about,
            titleh1: nextProps.content.titleh1,
            titleMembers: nextProps.content.titleMembers,
            titleMember: nextProps.content.titleMember,
            titleMemberH: nextProps.content.titleMemberH
        })
    }

    changeGoal = (e) => {
        this.setState({
            goal: e.target.value
        })
    }

    changeLicence = (e) => {
        this.setState({
            licence: e.target.value
        })
    }

    changeAbout = (e) => {
        this.setState({
            about: e.target.value
        })
    }

    changeTitleh1 = (e) => {
        this.setState({
            titleh1: e.target.value
        })
    }

    changeTitleMembers = (e) => {
        this.setState({
            titleMembers: e.target.value
        })
    }

    changeTitleMember = (e) => {
        this.setState({
            titleMember: e.target.value
        })
    }

    changeTitleMemberH = (e) => {
        this.setState({
            titleMemberH: e.target.value
        })
    }

    submitForm = () => {

    }

    render(){
        return (
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="box addMemberMargin">
                        <form name="aboutForm" onSubmit={this.submitForm}>
                            <div className="contactForm">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Početna stranica:</h3>
                                </div>
                                <div className="box-body">
                                    <div className="form-group">
                                        <label>Cilj komore:</label>
                                        <textarea type="text" rows="6" className="form-control" value={this.state.goal} onChange={this.changeGoal} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Licenca</label>
                                        <textarea type="text" rows="6" className="form-control" value={this.state.licence} onChange={this.changeLicence} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>O komori</label>
                                        <textarea type="text" rows="6" className="form-control" value={this.state.about} onChange={this.changeAbout} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Naslov</label>
                                        <textarea type="text" rows="6" className="form-control" value={this.state.titleh1} onChange={this.changeTitleh1} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Članovi komore</label>
                                        <textarea type="text" rows="6" className="form-control" value={this.state.titleMembers} onChange={this.changeTitleMembers} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Član komore</label>
                                        <textarea type="text" rows="6" className="form-control" value={this.state.titleMember} onChange={this.changeTitleMember} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Počastni članovi</label>
                                        <textarea type="text" rows="6" className="form-control" value={this.state.titleMemberH} onChange={this.changeTitleMemberH} required></textarea>
                                    </div>
                                </div>

                                <div className="box-footer">
                                    <button type="submit" className="btn btn-primary">Sačuvaj</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage)