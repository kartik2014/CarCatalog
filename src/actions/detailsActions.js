import { 
  ON_DETAILS_LOAD
} from '../constants/actionTypes.js'


export function onLoadDetails(carId, models) {
  const selectedModel = models.filter(model=>model.id===Number(carId))
  return { type: ON_DETAILS_LOAD, selectedModel: selectedModel[0] }
}