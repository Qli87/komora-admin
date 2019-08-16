import React from 'react'

class Novelty extends React.Component {

    detailsPage = (id) => {
        let path = '/detaljnije/'+id
        this.props.history.push(path)
    }

    render() {
        return(
        <tr>
            <td>{this.props.id}</td>
            <td>{this.props.title}</td>
            <td>{this.props.category_name}</td>
            <td>{this.props.content.slice(0,120)}</td>
            <td>{this.props.date}</td>
            <td className="sortCursor">
                <span className="fa fa-pencil-square-o fa-md" title="Izmjeni vijest" onClick={() => this.editUser(this.props.id)}></span>
                <span className="fa fa-trash-o fa-md iconsStyle" title="Obriši vijest" onClick={() => this.props.deleteMember(this.props.id)}></span>
            </td>
        </tr>
        )
    }
}

export default Novelty