import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render( 
    <Router history = { browserHistory }>
        <Route path = "/rtcovid.html" component = { App } />
    </Router> ,
    document.getElementById('app')
);