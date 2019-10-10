import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            aboutTitle: '',
            aboutContent: '',
            parliamentContent: ''
        }
    }

    componentDidMount() {
        this.props.getContent()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.content[0].id,
            aboutTitle: nextProps.content[0].aboutTitle,
            aboutContent: nextProps.content[0].aboutContent,
            parliamentContent: nextProps.content[0].parliamentContent
        })
    }

    chageAboutTitle = (e) => {
        this.setState({aboutTitle: e.target.value})
    }

    changeAboutContent = (e) => {
        this.setState({aboutContent: e.target.value})
    }

    changeParliamentContent = (e) => {
        this.setState({parliamentContent: e.target.value})
    }

    submitForm = (e) => {
        e.preventDefault()
        const details = {
            id: this.state.id,
            aboutTitle: this.state.aboutTitle,
            aboutContent: this.state.aboutContent,
            parliamentContent: this.state.parliamentContent
        }
        console.log(details);
        this.props.editContent(details)
    }

    render() {
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
                                    <h3 className="box-title">O nama:</h3>
                                </div>
                                <div className="box-body">
                                    <div className="form-group">
                                        <label>About - naslov:</label>
                                        <textarea type="text" rows="6" className="form-control"  placeholder="Unesite adresu" value={this.state.aboutTitle} onChange={this.chageAboutTitle} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>About - sadržaj</label>
                                        <textarea type="text" rows="6" className="form-control" placeholder="Unesite broj telefona1" value={this.state.aboutContent} onChange={this.changeAboutContent} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Skupština - sadržaj</label>
                                        <textarea type="text" rows="6" className="form-control" placeholder="Unesite broj telefona2" value={this.state.parliamentContent} onChange={this.changeParliamentContent} required></textarea>
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


export default withRouter(About)