import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';

class Biography extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            member: '',
            biography: ''
        }
    }

    setup = () => {
        this.props.getDetails(parseInt(this.props.biography.id))
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.boardMember.name,
            biography: nextProps.boardMember.biography
        })
    }

    changeBio = (input) => {
        this.setState({
            biography: input.target.value
        })
    }
    
    saveChanges = () => {
        var _member = {
            id: this.props.biography.id,
            biography: this.state.biography
        }
        this.props.saveChanges(_member)
    }

    render(){
        return(
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">
                                Biografija
                            </h3>
                        </div>
                        <div className="box-body pad">  
                            <textarea className="textarea bioArea" placeholder="Unesite biografiju" value={this.state.biography} onChange={this.changeBio}></textarea>
                            <div className="box-footer">
                                <button type="submit" className="btn btn-primary" onClick={ () => this.saveChanges()}>Sačuvaj</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}


export default withRouter(Biography)
