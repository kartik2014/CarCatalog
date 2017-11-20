import { 
  ON_DETAILS_LOAD
} from '../constants/actionTypes.js'

const defaultState = {
  selectedModel: null
}


const onLoad = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {selectedModel: action.selectedModel})
  return newState
}

export default (state=defaultState, action) => {
	switch(action.type){
    case ON_DETAILS_LOAD:
      return onLoad(state, action)
    default:
      return state
  }
}