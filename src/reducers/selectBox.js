import { 
  SET_MAKE, 
  SET_MODEL,
  ON_SEARCH_LOAD
} from '../constants/actionTypes.js'

const defaultState = {
  selectedMake: null,
  selectedModel: null,
  selectBoxType: null,
  filteredModels: null,
  makeDefaultValue: "Select Make",
  modelDefaultValue: "Select Model"
}

const setMake = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    selectedMake: action.selectedMake, 
    selectBoxType: action.selectBoxType, 
    filteredModels: action.filteredModels,
    selectedModel: null
  })
  return newState
}

const setModel = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    selectedModel: action.selectedModel, 
    selectBoxType: action.selectBoxType 
  })
  return newState
}

const setDefaultState = (state, action) => {
  const newState = {}
  Object.assign(newState, state, defaultState)
  return newState
}

export default (state=defaultState, action) => {
	switch(action.type){
    case SET_MAKE:
      return setMake(state, action)
    case SET_MODEL:
      return setModel(state, action)
    case ON_SEARCH_LOAD:
      return setDefaultState(state, action)
    default:
      return state
  }
}