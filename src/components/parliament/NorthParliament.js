import React from 'react'
import Select from 'react-select'

class NorthParliament extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            parliamentNorth: '',
            select1: '',
            select2: '',
            select3: '',
            select4: '',
            select5: '',
            select6: '',
            select7: '',
            select8: '',
            select9: '',
            select10: '',
            members: ''
        }
    }

    setup = () => {
        this.props.getParliamentNorth()
        this.props.getMembers()
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        let par = nextProps.parliamentNorth.map(item => {return {value: item.id, label: item.name}})
        let mem = nextProps.members.map(item => {return {value: item.id, label: item.name}})
        let _select1 = par.find(item => item.value === 1)
        let _select2 = par.find(item => item.value === 2)
        let _select3 = par.find(item => item.value === 3)
        let _select4 = par.find(item => item.value === 4)
        let _select5 = par.find(item => item.value === 5)
        let _select6 = par.find(item => item.value === 6)
        let _select7 = par.find(item => item.value === 7)
        let _select8 = par.find(item => item.value === 8)
        let _select9 = par.find(item => item.value === 9)
        let _select10 = par.find(item => item.value === 10)
        this.setState({
            parliamentNorth: par,
            select1: _select1,
            select2: _select2,
            select3: _select3,
            select4: _select4,
            select5: _select5,
            select6: _select6,
            select7: _select7,
            select8: _select8,
            select9: _select9,
            select10: _select10,
            members: mem
        })
    }

    onChange = (input, value) => {
        let s1 = this.state.select1
        let s2 = this.state.select2
        let s3 = this.state.select3
        let s4 = this.state.select4
        let s5 = this.state.select5
        let s6 = this.state.select6
        let s7 = this.state.select7
        let s8 = this.state.select8
        let s9 = this.state.select9
        let s10 = this.state.select10
        if(parseInt(value.name) === 1) {
            s1 = input
        } else if(parseInt(value.name) === 2){
            s2 = input
        } else if(parseInt(value.name) === 3){
            s3 = input
        } else if(parseInt(value.name) === 4){
            s4 = input
        } else if(parseInt(value.name) === 5){
            s5 = input
        } else if(parseInt(value.name) === 6){
            s6 = input
        } else if(parseInt(value.name) === 7){
            s7 = input
        } else if(parseInt(value.name) === 8){
            s8 = input
        } else if(parseInt(value.name) === 9){
            s9 = input
        } else if(parseInt(value.name) === 10){
            s10 = input
        }
        this.setState({
            select1: s1,
            select2: s2,
            select3: s3,
            select4: s4,
            select5: s5,
            select6: s6,
            select7: s7,
            select8: s8,
            select9: s9,
            select10: s10
        })
    }

    saveChanges = () => {
        let newMembers = {
            select1: this.state.select1,
            select2: this.state.select2,
            select3: this.state.select3,
            select4: this.state.select4,
            select5: this.state.select5,
            select6: this.state.select6,
            select7: this.state.select7,
            select8: this.state.select8,
            select9: this.state.select9,
            select10: this.state.select10
        }
        console.log(newMembers);
        // this.props.editParliamentNorth(newMembers)
    }

    render() {
        return(
            <div className="row">
            <div className="col-md-4">
                <h3 className="box-title">Članovi skupštine - Jug</h3>
                    <div className="addMemberMargin">
                        <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select1} options={this.state.members} onChange={this.onChange} name="1" />
                        <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select2} options={this.state.members} onChange={this.onChange} name="2" />
                        <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select3} options={this.state.members} onChange={this.onChange} name="3" />
                        <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select4} options={this.state.members} onChange={this.onChange}  name="4" />
                        <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select5} options={this.state.members} onChange={this.onChange} name="5" />
                        <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select6} options={this.state.members} onChange={this.onChange} name="6" />
                        <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select7} options={this.state.members} onChange={this.onChange} name="7" />
                        <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select8} options={this.state.members} onChange={this.onChange} name="8" />
                        <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select9} options={this.state.members} onChange={this.onChange} name="9" />
                        <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select10} options={this.state.members} onChange={this.onChange} name="10" />
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

export default (NorthParliament)