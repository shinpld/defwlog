import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons'
import App from './containers/App.js'

import { robots } from './robots'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
          <App />
            ,document.getElementById('root'));
registerServiceWorker();
