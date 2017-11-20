import React from 'react'
import { connect } from 'react-redux'
import { setSelection } from '../actions/selectBoxActions'

const mapDispatchToProps = (dispatch) => {
  return({
         onSelectBoxChange: (selectBoxValue, selectBoxType, carsData) => {dispatch(setSelection(selectBoxValue, selectBoxType, carsData))}
    })
}

const mapStateToProps = (state) => {
  return {
    selectBoxState: state.selectBox,
    carsData: state.search
  }
}

class SelectBox extends React.Component{
	constructor(props){
	    super(props);
	    this.handleSelectBoxChange = this.handleSelectBoxChange.bind(this)
    }

    handleSelectBoxChange(event){
    	const selectBoxType = event.target.id
    	const selectBoxValue = event.target.value
    	if(selectBoxValue!=="-1"){
    		this.props.onSelectBoxChange(selectBoxValue, selectBoxType, this.props.carsData)
    	}
  	}

	render(){
		let selectValue
		let options
		if(this.props.type==="makes"){
			if(!this.props.selectBoxState.selectedMake){
				selectValue = this.props.selectBoxState.makeDefaultValue
			}else{
				const selectedMake = this.props.carsData.makes.filter(make=>make.id===Number(this.props.selectBoxState.selectedMake))
				selectValue = selectedMake[0].name
			}
			options = this.props.carsData.makes
		}

		else if(this.props.type==="models"){
			if(!this.props.selectBoxState.selectedModel){
				selectValue = this.props.selectBoxState.modelDefaultValue
			}else{
				selectValue = this.props.selectBoxState.selectedModel.name
			}
			options = this.props.selectBoxState.filteredModels
		}

		let dropdownData
		if(options){
			dropdownData = options.map(function(item, i) {
				return <option value = {
					item.id
				}> {
					item.name
				} </option>
			})
		}else{
			dropdownData = null
		}

		return(
			<div className = "custom-select">
				<div className = "custom-select-value" > {selectValue} </div> 
				<select name={this.props.type} id={this.props.type} onChange={this.handleSelectBoxChange}>
				<option value={-1}>Select an option</option>
				{dropdownData}
				</select> 
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectBox)