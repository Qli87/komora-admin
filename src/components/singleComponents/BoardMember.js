import React from 'react'
import { withRouter } from 'react-router-dom'

class BoardMember extends React.Component {


    deleteFromBoard = (id) => {
        this.props.deleteFromBoard(id)
        alert(`Uspješno ste uklonili člana: "${this.props.name}" iz izvršnog odbora`)
    }

    biografyMember = (id) => {
        let path = '/biografija/'+id
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
                    <span className="fa fa-file-word-o fa-md" title="Biografija člana" onClick={() => this.biografyMember(this.props.id)} ></span>
                    <span className="fa fa-trash-o fa-md iconsStyle" title="Uklonite člana iz odbora" onClick={() => this.deleteFromBoard(this.props.id)}></span>
                </td>
            </tr>
        )
    }
}

export default withRouter(BoardMember)