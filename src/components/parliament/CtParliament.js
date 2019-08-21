import React from 'react'
import Select from 'react-select'

class CtParliament extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            parliamentCt: '',
            select1: '',
            members: ''
        }
    }

    setup = () => {
        this.props.getParliamentCt()
        this.props.getMembers()
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        let par = nextProps.parliamentCt.map(item => {return {value: item.id, label: item.name}})
        let mem = nextProps.members.map(item => {return {value: item.id, label: item.name}})
        let _select1 = par.find(item => item.value === 1)
        this.setState({
            parliamentNk: par,
            select1: _select1,
            members: mem
        })
    }

    onChange = (input, value) => {
        let s1 = this.state.select1
        if(parseInt(value.name) === 1) {
            s1 = input
        } 
        this.setState({
            select1: s1
        })
    }

    saveChanges = () => {
        let newMembers = {
            select1: this.state.select1
        }
        console.log(newMembers);
        // this.props.editParliamentCt(newMembers)
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-4">
                    <h3 className="box-title">Članovi skupštine - Cetinje</h3>
                        <div className="addMemberMargin">
                            <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select1} options={this.state.members} onChange={this.onChange} name="1" />
                        </div>
                        <div className="addMemberMargin">
                            <button type="submit" className="btn btn-primary"
                            onClick={this.saveChanges}>Izmjeni</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default (CtParliament)