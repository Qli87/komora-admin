import React from 'react'
import { withRouter } from 'react-router-dom'
import ImageUploader from 'react-images-upload'
import Header from '../Header';
import Sidebar from '../Sidebar';


class MemberAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            city: '',
            company: '',
            errorName: '',
            errorCity: '',
            errorCompany: '',
            errorPhone: ''
        }
    }

    changeName = (input) => {   
        this.setState({
            name: input.target.value
        })
    }

    changePhone = (input) => {
        this.setState({
            phone: input.target.value
        })
    }

    changeCity = (input) => {
        this.setState({
            city: input.target.value
        })
    }

    changeCompany = (input) => {
        this.setState({
            company: input.target.value
        })
    }

    handleValidation = () => {
        let errorName = this.state.errorName
        let errorCompany = this.state.errorCompany
        let errorCity = this.state.errorCity
        let errorPhone = this.state.errorPhone
        let formIsValid = true
        if(typeof this.state.name !== "undefined") {
            if(!this.state.name.match(/^[a-zA-Z]+$/)) {
                formIsValid = false
                errorName = "Polje za ime mora sadrzati samo slova!"
            } else {errorName=''}
        }
        if(typeof this.state.company !== 'undefined') {
            if(!this.state.company.match(/^[a-zA-Z]+$/)) {
                formIsValid = false
                errorCompany = "Polje za naziv ustanove mora sadrzati samo slova"
            } else {errorCompany=''}
        }
        if(typeof this.state.city !== 'undefined') {
            if(!this.state.city.match(/^[a-zA-Z]+$/)) {
                formIsValid = false
                errorCity = "Polje za naziv grada mora sadrzati samo slova"
            } else {errorCity=''}
        }
        if(typeof this.state.phone !== 'undefined') {
            if(this.state.phone.length < 9){
                formIsValid = false
                errorPhone = "Broj telefona mora imati minimum 9 cifri"
            } else {errorPhone=''}
        }
        this.setState({
            errorName: errorName,
            errorCompany: errorCompany,
            errorCity: errorCity,
            errorPhone: errorPhone
        })
        return formIsValid
    }


    submitForm = (e) => {
        e.preventDefault()

        if(this.handleValidation()) {
            let member = {
                name: this.state.name,
                phone: this.state.phone,
                city: this.state.city,
                company: this.state.company
            }
            console.log(member);
            this.props.addMember(member)
            alert("Uspjesna akcija")
            window.location.reload()
        } else {
            alert("Greska!")
        }
    }


    render() {
        return(
           
           <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>      
                <div className="col-md-10 mainContent">
                    <div className="row box addMemberMargin">
                        <form name="addForm" onSubmit={this.submitForm}>
                            <div className="col-md-6">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Dodaj člana komore</h3>
                                    </div>
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label>Ime i prezime</label>
                                                <input type="text" className="form-control"  placeholder="Unesite ime i prezime" value={this.state.name} onChange={this.changeName} required />
                                                <span style={{'color':'red'}}>{this.state.errorName}</span>
                                            </div>
                                            <div className="form-group">
                                                <label >Telefon</label>
                                                <input type="number" className="form-control" placeholder="Unesite broj telefona" value={this.state.phone} onChange={this.changePhone} required />
                                                <span style={{'color':'red'}}>{this.state.errorPhone}</span>
                                            </div>
                                            <div className="form-group">
                                                <label >Grad</label>
                                                <input type="text" className="form-control" placeholder="Unesite broj telefona" value={this.state.city} onChange={this.changeCity} required />
                                                <span style={{'color':'red'}}>{this.state.errorCity}</span>
                                            </div>
                                            <div className="form-group">
                                                <label >Naziv ustanove</label>
                                                <input type="text" className="form-control" placeholder="Unesite naziv ustanove u kojoj je član zaposlen" value={this.state.company} onChange={this.changeCompany} required/>
                                                <span style={{'color':'red'}}>{this.state.errorCompany}</span>
                                            </div>
                                        </div>

                                        <div className="box-footer">
                                            <button type="submit" className="btn btn-primary">Dodaj</button>
                                        </div>
                            </div>
                            <div className="col-md-6">
                                {/* IMAGE UPLOADER */}
                                <ImageUploader
                                    withPreview={true}
                                    withIcon={true}
                                    buttonText='Choose images'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                                    singleImage={true}
                                    label='Odaberite sliku za korisnika'
                                />
                            </div>
                        </form>

                    </div>
                </div>
        </div>

        )
    }
}

export default withRouter(MemberAdd)