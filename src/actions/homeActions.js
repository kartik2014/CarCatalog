import { 
  GET_CAR_OF_THE_WEEK_REQUEST, 
  GET_CAR_OF_THE_WEEK_SUCCESS
} from '../constants/actionTypes.js'
import { API_ROOT, CAR_OF_THE_WEEK } from '../constants/url.js'
import axios from 'axios'

export function getCarOfTheWeek(models) {
  return function(dispatch, getState) {
    dispatch(getCarOfTheWeekRequest())
    axios.get(`${API_ROOT}${CAR_OF_THE_WEEK}`)
    .then((response) => {
        dispatch(getCarOfTheWeekSuccessAction(models, response.data[0]))
    })
    .catch((error) => {
        console.log(error)
    })
  }
}

export function getCarOfTheWeekRequest() {
  return { type: GET_CAR_OF_THE_WEEK_REQUEST }
}

export function getCarOfTheWeekSuccessAction(models, carOfTheWeek) {
  const carData = models.filter(model=>model.id===Number(carOfTheWeek.modelId))
  const mergedData = {}
  Object.assign(mergedData, carData[0], {review: carOfTheWeek.review})
  return { type: GET_CAR_OF_THE_WEEK_SUCCESS , carOfTheWeek: mergedData }
}



