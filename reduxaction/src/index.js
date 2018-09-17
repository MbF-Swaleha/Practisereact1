import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './js/components/App';
import {createStore} from 'redux';
import allReducers from './js/reducers';

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, 
	document.getElementById('root'));

