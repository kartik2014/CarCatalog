import './assets/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import store from './store/store'
import App from './App'
import Home from './components/Home'
import Search from './components/Search'
import Details from './components/Details'

ReactDOM.render(
    <Provider store={store}>
    	<Router history={browserHistory}>
  	  		<Route path="/" component={App}>
  	  			<IndexRoute component={Home} />
  	  			<Route path="search" component={Search} />
  	  			<Route path="make/model/:id" component={Details} />
  	  		</Route>
  	  </Router>
    </Provider>,
    document.getElementById('root')
)
