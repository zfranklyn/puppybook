'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppies from './AllPuppies';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={AllPuppies}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);

// <Route path='/:puppyName' component={}/>