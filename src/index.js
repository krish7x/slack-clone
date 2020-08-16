import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './Context API/StateProvider';
import reducer, { initialState } from './Context API/reducer';
ReactDOM.render(
	<StateProvider reducer={reducer} initialState={initialState}>
		<App />
	</StateProvider>,
	document.getElementById('root')
);
