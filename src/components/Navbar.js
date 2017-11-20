import React from 'react'
import { Link } from 'react-router'

class Navbar extends React.Component{
	render(){
		return(
			<div>
				<ul className="navbar">
					<Link to="/">Home</Link>
					<Link to="/search">Search</Link>
				</ul>
			</div>
		);
	}
}

export default Navbar