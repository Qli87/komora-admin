import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header';
import Sidebar from '../Sidebar';

class AdvAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: ''
        }
    }

    componentDidMount(){
        console.log('did mount');
    }

    changeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    changeText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    addAdv = () => {
        const adv = {
            title: this.state.title,
            text: this.state.text
        }
        this.props.addAdv(adv)
    }

    render() {
        return(
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="col-md-4 box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Dodaj oglas</h3>
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
                                <textarea className="textAreaNews" value={this.state.text || ""} onChange={this.changeText} ></textarea>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary" onClick={() => this.addAdv()}>Sačuvaj</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AdvAdd)