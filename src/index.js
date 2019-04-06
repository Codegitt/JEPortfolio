import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import JEPortfolio from './JE Portfolio';
import rootReducer from './rootReducer';
import './JE Portfolio.css';
import './ReminderTemplate.css';



const store = createStore(rootReducer);


ReactDOM.render( <Provider store={store}> <JEPortfolio /> </Provider> , document.getElementById('root'));

serviceWorker.unregister();
