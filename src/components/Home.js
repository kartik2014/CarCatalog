import React from 'react'
import { connect } from 'react-redux'
import CarOfTheWeek from './CarOfTheWeek'


const mapStateToProps = (state) => {
  return {
    carOfTheWeek: state.home.carOfTheWeek
  }
}

class Home extends React.Component{
	render(){
		return(
			<div className="list-container landing">
				<div className="list-group">
          <h1>Car of the week</h1>
      			{this.props.carOfTheWeek?
        		<CarOfTheWeek carOfTheWeek={this.props.carOfTheWeek} />
      			:<div className="loader"></div>}
    			</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, null)(Home)