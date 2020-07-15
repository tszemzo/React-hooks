import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Team } from './components/Team';
import { ProductPage } from './components/Product';

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <App />
    </Route>
    <Route exact path="/equipo">
      <Team />
    </Route>
    <Route path="/producto/:description/:id" component={ProductPage}></Route>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
