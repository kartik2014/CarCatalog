import React from 'react'

class CarOfTheWeek extends React.Component{
	render(){
		return(
	      <div className="list-container">
	      	<h3>{this.props.carOfTheWeek.name}</h3>
	        <p>{this.props.carOfTheWeek.review}</p>
	        <img src={this.props.carOfTheWeek.imageUrl} alt="Car" width="600" height="400"/>
	      </div>
	    );
	}
}

export default CarOfTheWeek