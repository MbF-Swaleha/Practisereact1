import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './js/components/App';
import {createStore} from 'redux';
import allReducers from './js/reducers';
import allReducers1 from './js/reducers';

const store = createStore(allReducers);
const store1 = createStore(allReducers1);

ReactDOM.render(<Provider store={store}><App /></Provider>, 
	document.getElementById('root'));

