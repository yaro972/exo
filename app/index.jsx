import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'modules/store.js';
import Routes from 'modules/routing/routes.jsx';

import 'bootstrap/dist/css/bootstrap.css';

import 'asset/img/favicon.png';
import 'file?name=[name].[ext]!asset/img/favicon.ico';

var rootElement = (
	<Provider store={store}>
		<Routes />
	</Provider>
);

var root = ReactDOM.render(rootElement, document.getElementById('content'));

if (process.env.NODE_ENV) {
	var { RootInstanceProvider } = require('react-hot-loader/Injection');

	RootInstanceProvider.injectProvider({
		getRootInstances: () => {
			return [root];
		}
	});
}
