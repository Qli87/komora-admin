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
            company: ''
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

    add = (member) => {
        member = {
            name: this.state.name,
            phone: this.state.phone,
            city: this.state.city,
            company: this.state.company
        }
        this.props.addMember(member)
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
                        <form>
                            <div className="col-md-6">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Dodaj člana komore</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label>Ime i prezime</label>
                                            <input type="text" className="form-control"  placeholder="Unesite ime i prezime" value={this.state.name} onChange={this.changeName} required />
                                        </div>
                                        <div className="form-group">
                                            <label >Telefon</label>
                                            <input type="number" className="form-control" placeholder="Unesite broj telefona" value={this.state.phone} onChange={this.changePhone} required />
                                        </div>
                                        <div className="form-group">
                                            <label >Grad</label>
                                            <input type="text" className="form-control" placeholder="Unesite broj telefona" value={this.state.city} onChange={this.changeCity} required />
                                        </div>
                                        <div className="form-group">
                                            <label >Naziv ustanove</label>
                                            <input type="text" className="form-control" placeholder="Unesite naziv ustanove u kojoj je član zaposlen" value={this.state.company} onChange={this.changeCompany} required/>
                                        </div>
                                    </div>

                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary" onClick={() => this.add()}>Dodaj</button>
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