import { 
  GET_CAR_OF_THE_WEEK_REQUEST, 
  GET_CAR_OF_THE_WEEK_SUCCESS
} from '../constants/actionTypes.js'

const defaultState = {
	inProgress: false
}

const getRequestSuccess = (state, action) => {
	const newState = {}
	Object.assign( newState, state, {carOfTheWeek: action.carOfTheWeek, inProgress: false} )
	return newState
}

const getRequest = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {inProgress: true})
  return newState
}


export default (state=defaultState, action) => {
	switch(action.type){
    case GET_CAR_OF_THE_WEEK_REQUEST:
      return getRequest(state, action)
    case GET_CAR_OF_THE_WEEK_SUCCESS:
      return getRequestSuccess(state, action)
    default:
      return state
  }
}