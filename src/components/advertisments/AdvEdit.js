import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header';
import Sidebar from '../Sidebar';

class AdvEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            full_text: ''
        }
    }

    componentDidMount() {
        console.log('did mount');
        this.props.getAdvDetails(parseInt(this.props.adv.id))
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            id: nextProps.advDetails[0].id,
            title: nextProps.advDetails[0].title,
            full_text: nextProps.advDetails[0].full_text,
            phone: nextProps.advDetails[0].phone
        })
    }

    changeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    changeText = (e) => {
        this.setState({
            full_text: e.target.value
        })
    }

    changePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    editAdv = () => {
        let adv = {
            id: this.state.id,
            title: this.state.title,
            full_text: this.state.full_text,
            phone: this.state.phone
            // date: new Date()
        }
        console.log(adv)
        this.editAdv(adv)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="col-md-4 box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Izmjeni oglas</h3>
                        </div>
                        <div className="box-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Naslov</label>
                                        <input type="text" className="form-control" placeholder="Unesite naslov oglasa" value={this.state.title || ""} onChange={this.changeTitle} required/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Telefon</label>
                                        <input type="text" className="form-control" placeholder="Unesite broj telefona" value={this.state.phone || ""} onChange={this.changePhone} required/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea className="textAreaNews" value={this.state.full_text || ""} onChange={this.changeText} ></textarea>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary" onClick={() => this.editAdv()}>Sačuvaj</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AdvEdit)