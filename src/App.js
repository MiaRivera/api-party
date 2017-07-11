import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API PARTY</h1>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/github">Github API</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/github" render={() => <h1>Github</h1>} />
          <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
