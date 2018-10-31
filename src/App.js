import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import NotFound from './components/NotFound'
import TopBar from './components/TopBar'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <TopBar/>
          </nav>
          <main>
            <Route exact path="/" render={() => <Redirect to="/photos"/>} />
            <Route component={NotFound}/>
          </main>
        </div>
      </Router>
     
    );
  }
}

export default App;
