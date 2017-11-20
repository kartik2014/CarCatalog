import { 
  GET_MAKES_REQUEST, 
  GET_MAKES_REQUEST_SUCCESS,
  GET_MODELS_REQUEST, 
  GET_MODELS_REQUEST_SUCCESS,
  NAVIGATE_TO_DETAILS,
  ON_SEARCH_LOAD
} from '../constants/actionTypes.js'
import { 
  API_ROOT, 
  MAKES, 
  MODELS, 
  CAR_DETAILS 
} from '../constants/url.js'
import axios from 'axios'

export function getMakes() {
  return function(dispatch, getState) {
    dispatch(getMakesRequest())
    axios.get(`${API_ROOT}${MAKES}`)
    .then((response) => {
        dispatch(getMakesRequestSuccessAction(response.data))
    })
    .catch((error) => {
        console.log(error)
    })
  }
}

export function getModels() {
  return function(dispatch, getState) {
    dispatch(getModelsRequest())
    axios.get(`${API_ROOT}${MODELS}`)
    .then((response) => {
        dispatch(getModelsRequestSuccessAction(response.data))
    })
    .catch((error) => {
        console.log(error)
    })
  }
}

export function getMakesRequest() {
  return { type: GET_MAKES_REQUEST }
}

export function getMakesRequestSuccessAction(makes) {
  return { type: GET_MAKES_REQUEST_SUCCESS , makes }
}

export function getModelsRequest() {
  return { type: GET_MODELS_REQUEST }
}

export function getModelsRequestSuccessAction(models) {
  return { type: GET_MODELS_REQUEST_SUCCESS , models }
}

export function navigateToDetails(selectedModel) {
  const navigateTo = `${CAR_DETAILS}${selectedModel.id}`
  return { type: NAVIGATE_TO_DETAILS , navigateTo }
}

export function onLoad() {
  return { type: ON_SEARCH_LOAD , navigateTo: null, selectedMake: null, selectedModel: null }
}
