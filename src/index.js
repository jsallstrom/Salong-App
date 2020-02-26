import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import TestCssFlex from './playground/testCssFlex'

import TestCssFlex2 from './playground/testCssFlex2'

// Origin
ReactDOM.render(<App />, document.getElementById('root'));


// ReactDOM.render(<TestCssFlex />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
