import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route,Switch} from 'react-router-dom'
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
import './assets/css/reset.css'
import indexRouter  from './views/index/index.jsx'
let vConsole = new VConsole();
ReactDOM.render(
	<Router>
	    <Route exact path="/" component={indexRouter}>
	    </Route>
	</Router>,
  document.getElementById('app')
);