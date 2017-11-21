import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { onLoadDetails } from '../actions/detailsActions'

const mapStateToProps = (state) => {
  return {
    search: state.search,
    details: state.details
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
        onLoadDetails: (carId, models) => {dispatch(onLoadDetails(carId, models))}
    })
}

class Details extends React.Component{
  constructor(props){
    super(props);
    this.formatNumber = this.formatNumber.bind(this)
  }

  formatNumber(value) {
    value += '';
    const list = value.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
      result = `,${num.slice(-3)}${result}`;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
  }

  componentDidMount(){
    if(this.props.search.models){
      this.props.onLoadDetails(this.props.routeParams.id, this.props.search.models)
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.search.models && !nextProps.details.selectedModel){
      this.props.onLoadDetails(this.props.routeParams.id, nextProps.search.models)
    }
  }

  render(){
    return(
      <div>
          <div className="list-group-item-head">
            <h4>Car Details</h4>
          </div>
          {this.props.details.selectedModel?<div>
            <p>{this.props.details.selectedModel.name}</p>
            <p>Price: $ {this.formatNumber(this.props.details.selectedModel.price)}</p>
            <img src={this.props.details.selectedModel.imageUrl} alt="Car" width="600" height="400"/>
          </div>:<div className="loader"></div>}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details))