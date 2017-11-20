import { 
  GET_MAKES_REQUEST, 
  GET_MAKES_REQUEST_SUCCESS,
  GET_MODELS_REQUEST, 
  GET_MODELS_REQUEST_SUCCESS,
  NAVIGATE_TO_DETAILS,
  ON_SEARCH_LOAD
} from '../constants/actionTypes.js'

const defaultState = {
	makesInProgress: false,
  modelsInProgress: false,
  navigateTo: null
}

const getMakesRequestSuccess = (state, action) => {
	const newState = {}
	Object.assign( newState, state, {makes: action.makes, makesInProgress: false} )
	return newState
}

const getMakesRequest = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {makesInProgress: true})
  return newState
}

const getModelsRequestSuccess = (state, action) => {
  const newState = {}
  Object.assign( newState, state, {models: action.models, modelsInProgress: false} )
  return newState
}

const getModelsRequest = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {modelsInProgress: true})
  return newState
}

const navigateTo = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { navigateTo: action.navigateTo })
  return newState
}


export default (state=defaultState, action) => {
	switch(action.type){
    case GET_MAKES_REQUEST:
      return getMakesRequest(state, action)
    case GET_MAKES_REQUEST_SUCCESS:
      return getMakesRequestSuccess(state, action)
    case GET_MODELS_REQUEST:
      return getModelsRequest(state, action)
    case GET_MODELS_REQUEST_SUCCESS:
      return getModelsRequestSuccess(state, action)
    case NAVIGATE_TO_DETAILS:
    case ON_SEARCH_LOAD:
      return navigateTo(state, action)
    default:
      return state
  }
}