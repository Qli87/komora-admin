import React from 'react'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'

class Parliament extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parliamentPg: '',
            parliamentNk: '',
            parliamentCt: '',
            parliamentSouth: '',
            parliamentNorth: ''
        }
    }

    setup = () => {
        this.props.getParliamentPg()
        this.props.getParliamentNk()
        this.props.getParliamentCt()
        this.props.getParliamentSouth()
        this.props.getParliamentNorth()
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            parliamentPg: nextProps.parliamentPg,
            parliamentNk: nextProps.parliamentNk,
            parliamentCt: nextProps.parliamentCt,
            parliamentSouth: nextProps.parliamentSouth,
            parliamentNorth: nextProps.parliamentNorth
        })
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="box-header with-border">
                            <h3 className="box-title">Članovi skupštine - Podgorica</h3>
                        </div>
                        <div className="">
                            <Select className="selectStyle" placeholder="Odaberite ime"/>
                            <Select className="selectStyle" placeholder="Odaberite ime"/>
                            <Select className="selectStyle" placeholder="Odaberite ime"/>
                            <Select className="selectStyle" placeholder="Odaberite ime"/>
                            <Select className="selectStyle" placeholder="Odaberite ime"/>
                            <Select className="selectStyle" placeholder="Odaberite ime"/>
                            <Select className="selectStyle" placeholder="Odaberite ime"/>
                            <Select className="selectStyle" placeholder="Odaberite ime"/>
                            <Select className="selectStyle" placeholder="Odaberite ime"/>
                            <Select className="selectStyle" placeholder="Odaberite ime"/>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary">Izmjeni</button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box-header with-border">
                            <h3 className="box-title">Članovi skupštine - Nikšić</h3>
                        </div>
                        <div className="">
                
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary">Izmjeni</button>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary">Izmjeni</button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box-header with-border">
                            <h3 className="box-title">Članovi skupštine - Sjever</h3>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <label>Ime i prezime</label>
                                <input type="text" className="form-control"  placeholder="Unesite ime i prezime"  required/>
                            </div>
                            <div className="form-group">
                                <label >Telefon</label>
                                <input type="text" className="form-control" placeholder="Unesite broj telefona" />
                            </div>
                            <div className="form-group">
                                <label >Grad</label>
                                <input type="text" className="form-control" placeholder="Unesite broj telefona" />
                            </div>
                            <div className="form-group">
                                <label >Naziv ustanove</label>
                                <input type="text" className="form-control" placeholder="Unesite naziv ustanove u kojoj je član zaposlen"  />
                            </div>
                        </div>

                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary">Izmjeni</button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box-header with-border">
                            <h3 className="box-title">Članovi skupštine - Jug</h3>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <label>Ime i prezime</label>
                                <input type="text" className="form-control"  placeholder="Unesite ime i prezime"  required/>
                            </div>
                            <div className="form-group">
                                <label >Telefon</label>
                                <input type="text" className="form-control" placeholder="Unesite broj telefona" />
                            </div>
                            <div className="form-group">
                                <label >Grad</label>
                                <input type="text" className="form-control" placeholder="Unesite broj telefona" />
                            </div>
                            <div className="form-group">
                                <label >Naziv ustanove</label>
                                <input type="text" className="form-control" placeholder="Unesite naziv ustanove u kojoj je član zaposlen"  />
                            </div>
                        </div>

                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary">Izmjeni</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="box-header with-border">
                            <h3 className="box-title">Članovi skupštine - Cetinje</h3>
                        </div>
                            <div className="box-body">
                                <div className="form-group">
                                    <label>Ime i prezime</label>
                                    <input type="text" className="form-control"  placeholder="Unesite ime i prezime"  required/>
                                </div>
                                <div className="form-group">
                                    <label >Telefon</label>
                                    <input type="text" className="form-control" placeholder="Unesite broj telefona" />
                                </div>
                                <div className="form-group">
                                    <label >Grad</label>
                                    <input type="text" className="form-control" placeholder="Unesite broj telefona" />
                                </div>
                                <div className="form-group">
                                    <label >Naziv ustanove</label>
                                    <input type="text" className="form-control" placeholder="Unesite naziv ustanove u kojoj je član zaposlen"  />
                                </div>
                            </div>

                            <div className="box-footer">
                                <button type="submit" className="btn btn-primary">Izmjeni</button>
                            </div>
                        </div>

                </div>
                
            </div>
        )
    }
}


export default withRouter(Parliament)