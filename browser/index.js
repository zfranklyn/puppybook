'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import {retrievePuppies, retrievePuppy} from './actions';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';

// onEnter functions
const openPuppies = () => {
	store.dispatch(retrievePuppies());
}
const openPuppy = (nextState) => {
	store.dispatch(retrievePuppy(nextState.params.puppyId));
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<Route path='/puppies/:puppyId' component={SinglePuppyContainer} onEnter={openPuppy}/>
				<IndexRoute component={AllPuppiesContainer} onEnter={openPuppies}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
