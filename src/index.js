import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import results from './store/reducers/results';
import counter from './store/reducers/counter';

const reducer = combineReducers({
    ctr: counter,
    res: results
});

const store = createStore(reducer);

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
