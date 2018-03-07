import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'

import rootReducers from './reducers/index';

const store = createStore(rootReducers);

ReactDOM.render(    <Provider store={store}>
                        <App />
                    </Provider> , 
                    document.getElementById('root'));

registerServiceWorker();