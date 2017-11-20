import React from 'react'
import { connect } from 'react-redux'
import SelectBox from './SelectBox'
import { navigateToDetails, onLoad } from '../actions/searchActions'
import { withRouter } from 'react-router'

const mapDispatchToProps = (dispatch) => {
  return({
        onViewDetailsClick: (selectedModel) => {dispatch(navigateToDetails(selectedModel))},
        onLoadSearchPage: () => {dispatch(onLoad())}
    })
}

const mapStateToProps = (state) => {
  return {
  	selectBoxState: state.selectBox,
    search: state.search
  }
}

class Search extends React.Component{
	constructor(props){
	    super(props);
	    this.handleViewDetailsClick = this.handleViewDetailsClick.bind(this)
  	}

  	componentDidMount(){
      this.props.onLoadSearchPage()
  	}

  	componentWillReceiveProps(nextProps){
	    if(nextProps && nextProps.search.navigateTo){
	      this.props.router.push(nextProps.search.navigateTo)
	    }
  	}

  	handleViewDetailsClick(event){
    	this.props.onViewDetailsClick(this.props.selectBoxState.selectedModel)
  	}

	render(){
		return(
			<div>
				{this.props.search.makes?<SelectBox type="makes"/>:<div className="loader"></div>}
				{this.props.search.models?<SelectBox type="models"/>:<div className="loader"></div>}
				<button type="button" className="details-button" onClick={this.handleViewDetailsClick} disabled={
					!this.props.selectBoxState.selectedMake||!this.props.selectBoxState.selectedModel
				}>
					<span>View details</span>
				</button>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search))