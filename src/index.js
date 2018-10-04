import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRoute from "./AppRoute";

ReactDOM.render(
	<App>
		{store => (
			<AppRoute {...store} />
		)}
	</App>
, document.getElementById('root'));