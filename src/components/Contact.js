import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            workTime: '',
            phone1: '',
            phone2: '',
            email: '',
            bankAccount: ''
        }
    }

    setup = () => {
        this.props.getDetails()
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps: ', nextProps);
        this.setState({
            address: nextProps.contactDetails.address,
            workTime: nextProps.contactDetails.work_time,
            phone1: nextProps.contactDetails.phone1,
            phone2: nextProps.contactDetails.phone2,
            email: nextProps.contactDetails.email,
            bankAccount: nextProps.contactDetails.bank_account
        })
    }

    changeAddress = (input) => {
        this.setState({
            address: input.target.value
        })
    }
    
    changeWorkTime = (input) => {
        this.setState({
            workTime: input.target.value
        })
    }

    changePhone1 = (input) => {
        this.setState({
            phone1: input.target.value
        })
    }

    changePhone2 = (input) => {
        this.setState({
            phone2: input.target.value
        })
    }

    changeEmail = (input) => {
        this.setState({
            email: input.target.value
        })
    }

    changeBankAccount = (input) => {
        this.setState({
            bankAccount: input.target.value
        })
    }

    saveChanges = () => {
        let _details = {
            address: this.state.address,
            workTime: this.state.workTime,
            phone1: this.state.phone1,
            phone2: this.state.phone2,
            email: this.state.email,
            bankAccount: this.state.bankAccount
        }
        this.props.saveChanges(_details)
        alert('Uspješno ste promjenili podatke o firmi')
        this.props.history.push('/spisakClanova')
    }

    render(){
        return(
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">

                    <div className="box addMemberMargin">
                        <div className="contactForm">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Detalji o komori:</h3>
                                </div>
                                <div className="box-body">
                                    <div className="form-group">
                                        <label>Adresa:</label>
                                        <input type="text" className="form-control"  placeholder="Unesite adresu" value={this.state.address} onChange={this.changeAddress} required/>
                                    </div>
                                    <div className="form-group">
                                        <label >Telefon1:</label>
                                        <input type="text" className="form-control" placeholder="Unesite broj telefona1" value={this.state.phone1} onChange={this.changePhone1} />
                                    </div>
                                    <div className="form-group">
                                        <label >Telefon2:</label>
                                        <input type="text" className="form-control" placeholder="Unesite broj telefona2" value={this.state.phone2} onChange={this.changePhone2} />
                                    </div>
                                    <div className="form-group">
                                        <label >E-mail:</label>
                                        <input type="text" className="form-control" placeholder="Unesite e-mail" value={this.state.email} onChange={this.changeEmail} />
                                    </div>
                                    <div className="form-group">
                                        <label>Radno vrijeme:</label>
                                        <input type="text" className="form-control" placeholder="Unesite radno vrijeme" value={this.state.workTime} onChange={this.changeWorkTime} />
                                    </div>
                                    <div className="form-group">
                                        <label>Žiro račun:</label>
                                        <input type="text" className="form-control" placeholder="Unesite broj žiro računa" value={this.state.bankAccount} onChange={this.changeBankAccount} />
                                    </div>
                                </div>

                                <div className="box-footer">
                                    <button type="submit" className="btn btn-primary" onClick={() => this.saveChanges()}>Sačuvaj</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Contact)
