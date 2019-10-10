import React from 'react'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import Header from '../Header';
import Sidebar from '../Sidebar';

class EditNovelty extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            category_id: '',
            category_name: '',
            content: '',
            date: '',
            full_text: '',
            posted_by: '',
            title: '',
            categories: '',
            selectedCategory: ""
        }
    }

    setup = () => {
        this.props.getCategories()
        this.props.getDetails(parseInt(this.props.novelty.id))
    }

    componentDidMount(){
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        let categoriesForSelect = nextProps.categories.map(cat => {
            return {
                value: cat.id,
                label: cat.name
            }
        })
        let _selectedCategory = categoriesForSelect.find(item => item.value === parseInt(this.props.novelty.id))
        this.setState({
            category_id: nextProps.noveltyDetails.category_id,
            category_name: nextProps.noveltyDetails.category_name,
            content: nextProps.noveltyDetails.content,
            date: nextProps.noveltyDetails.date,
            full_text: nextProps.noveltyDetails.full_text,
            posted_by: nextProps.noveltyDetails.posted_by,
            title: nextProps.noveltyDetails.title,
            categories: categoriesForSelect,
            selectedCategory: _selectedCategory
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
        console.log('on change: ',cat);
        this.setState({
            // category_id: cat.value,
            // category_name: cat.label
            selectedCategory: cat
        })
    }

    edit = () => {
        const details = {
            category_id: this.state.category_id,
            category_name: this.state.category_name,
            content: this.state.content,
            date: this.state.date,
            full_text: this.state.full_text,
            posted_by: this.state.posted_by,
            title: this.state.title
        }
        this.props.editNovelty(details)
    }

    render() {
        return(
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">

                    <div className="row box addMemberMargin addNews">
                        <div className="col-md-4">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Izmijeni vijest</h3>
                                </div>
                                <div className="box-body">
                                    <div className="form-group">
                                        <label>Naslov</label>
                                        <input type="text" className="form-control" placeholder="Unesite ime i prezime" value={this.state.title || ""} onChange={this.changeTitle} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Kategorija</label>
                                        <Select 
                                            onChange={this.changeCategory}
                                            value={this.state.selectedCategory || ""} 
                                            options={this.state.categories}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Sadržaj</label>
                                        <input type="text" className="form-control" placeholder="Unesite broj telefona" value={this.state.content || ""} onChange={this.changeContent} />
                                    </div>
                                </div>

                                <div className="box-footer">
                                    <button type="submit" className="btn btn-primary" onClick={() => this.edit()}>Sačuvaj</button>
                                </div>
                        </div>
                        <div className="col-md-8">
                            <textarea className="textAreaNews" value={this.state.full_text} onChange={this.changeFullText || ""} ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditNovelty)