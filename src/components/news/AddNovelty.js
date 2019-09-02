import React from 'react'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import Header from '../Header';
import Sidebar from '../Sidebar';

class AddNovelty extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            category_id: '',
            category_name: '',
            content: '',
            full_text: '',
            categories: [],
            errorName: '',
            errorCity: '',
            errorCompany: '',
            errorPhone: '',
            defaultCategory: ''
        }
    }

    componentDidMount(){
        this.props.getCategories()
    }

    componentWillReceiveProps(nextProps) {
        let categoriesForSelect = nextProps.categories.map(cat => {
            return {
                value: cat.id,
                label: cat.name
            }
        })
        this.setState({
            categories: categoriesForSelect,
            defaultCategory: categoriesForSelect[0],
            category_id: categoriesForSelect[0].value,
            category_name: categoriesForSelect[0].label
        })
    }

    changeTitle = (input) => {
        this.setState({
            title: input.target.value
        })
    }

    changeContent = (input) => {
        this.setState({
            content: input.target.value
        })
    }

    changeFullText = (input) => {
        this.setState({
            full_text: input.target.value
        })
    }

    changeCategory = (cat) => {
        this.setState({
            category_id: cat.value,
            category_name: cat.label
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        const details = {
            category_id: this.state.category_id,
            category_name: this.state.category_name,
            content: this.state.content,
            date: new Date(),
            full_text: this.state.full_text,
            posted_by: 'admin',
            title: this.state.title
        }
        console.log(details);
        // this.props.addNovelty(details)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="row box addMemberMargin addNews">
                        <form name="addForm" onSubmit={this.submitForm}>
                            <div className="col-md-4">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Dodaj vijest</h3>
                                </div>
                                <div className="box-body">
                                    <div className="form-group">
                                        <label>Naslov</label>
                                        <input type="text" className="form-control" placeholder="Unesite ime i prezime" value={this.state.title} onChange={this.changeTitle} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Kategorija</label>
                                        <Select 
                                            onChange={this.changeCategory}
                                            value={this.state.defaultCategory}
                                            options={this.state.categories}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Sadržaj</label>
                                        <input type="text" className="form-control" placeholder="Unesite broj telefona" value={this.state.content} onChange={this.changeContent} required/>
                                    </div>
                                </div>

                                <div className="box-footer">
                                    <button type="submit" className="btn btn-primary">Sačuvaj</button>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <textarea className="textAreaNews" value={this.state.full_text} onChange={this.changeFullText} ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}

export default withRouter(AddNovelty)