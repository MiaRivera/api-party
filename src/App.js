import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom'
import Github from './Github'
import Nasa from './Nasa'
import Yoda from './Yoda'
import Pokemon from './Pokemon'

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
          <li>
            <NavLink to="/nasa">NASA API</NavLink>
          </li>
          <li>
            <NavLink to="/yoda">Yoda API</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon">Pokemon API</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/nasa" component={Nasa} />
          <Route path="/yoda" component={Yoda} />
          <Route path="/pokemon" component={Pokemon} />
          <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
