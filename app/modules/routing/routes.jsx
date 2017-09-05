import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'modules/store.js';

import Home from 'components/home/Home.jsx';

export default class Routes extends Component {
	render() {
		return (
			<Router history={history}>
				<Route path='/' component={Home} />
			</Router>
		);
	}
}
