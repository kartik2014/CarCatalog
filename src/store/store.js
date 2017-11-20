import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import home from '../reducers/home'
import search from '../reducers/search'
import selectBox from '../reducers/selectBox'
import details from '../reducers/details'

const rootReducer = combineReducers({
  home,
  search,
  selectBox,
  details
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store