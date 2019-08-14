import React from 'react'
import { withRouter } from 'react-router-dom'

class Member extends React.Component {

    addToBoard = (id) => {
        this.props.addToBoard(id)
        alert(`Uspješno ste dodali člana: "${this.props.name}" u izvršni odbor`)
    }

    editUser = (id) => {
        let path="/izmjeniClana/"+id
        this.props.history.push(path)
    }

    render() {
        return(

            <tr>
                <td> {this.props.id} </td>
                <td> {this.props.name} </td>
                <td> {this.props.phone} </td>
                <td> {this.props.city} </td>
                <td> {this.props.company} </td>
                <td style={{'cursor':'pointer'}}>
                    <span className="fa fa-trash-o" title="Obriši člana" onClick={() => this.props.deleteMember(this.props.id)}></span>
                    <span className="fa fa-user-o iconsStyle" title="Izmjeni člana" onClick={() => this.editUser(this.props.id)}></span>
                    <span className="fa fa-address-card-o iconsStyle" title="Dodaj člana odbora" onClick={() => this.addToBoard(this.props.id)}></span>
                </td>
            </tr>
        )
    }
}

export default withRouter(Member)