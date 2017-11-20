import { 
  SET_MAKE, 
  SET_MODEL
} from '../constants/actionTypes.js'

export function setSelection(selectBoxValue, selectBoxType, carsData) {
  if(selectBoxType==="makes"){
    const filteredModels = carsData.models.filter(model=>model.makeId===Number(selectBoxValue))
    return { type: SET_MAKE ,  selectedMake: selectBoxValue , selectBoxType, filteredModels }
  }else{
  	const selectedModel = carsData.models.filter(model=>model.id===Number(selectBoxValue))
    return { type: SET_MODEL , selectedModel: selectedModel[0], selectBoxType }
  }
}



