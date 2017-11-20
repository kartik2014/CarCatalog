import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { connect } from 'react-redux'
import { getCarOfTheWeek } from './actions/homeActions'
import { getMakes, getModels } from './actions/searchActions'
import './App.css';

const mapDispatchToProps = (dispatch) => {
  return({
        loadCarOfTheWeek: (models) => {dispatch(getCarOfTheWeek(models))},
       	loadCarMakes: () => {dispatch(getMakes())},
       	loadCarModels: () => {dispatch(getModels())}
    })
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    carOfTheWeek: state.home.carOfTheWeek
  }
}

class App extends Component {

	componentDidMount(){
		//this.props.loadCarOfTheWeek()
		this.props.loadCarMakes()
		this.props.loadCarModels()
	}

	componentWillReceiveProps(nextProps){
	    if(nextProps && nextProps.search.models && !nextProps.carOfTheWeek ){
	      this.props.loadCarOfTheWeek(nextProps.search.models)
	    }
  	}

	render() {
		return (
			<div className="page-container">
			<div className="container">
			<Navbar />
			{
				this.props.search.makes && this.props.search.models && this.props.carOfTheWeek?<div>{this.props.children}</div>:<div className="loader"></div>

			}
			</div>
			</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)