import React from 'react';
import 'babel-polyfill'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configStore from './redux/configStore'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configStore()


ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'));
registerServiceWorker();
