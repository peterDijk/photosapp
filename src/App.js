import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'
import TopBar from './components/TopBar'
import PhotosContainer from './components/PhotosContainer'

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
            <Switch>
              <Route path="/photos" component={PhotosContainer}/>
              <Route exact path="/" render={() => <Redirect to="/photos"/>} />
              <Route component={NotFound}/>
            </Switch>
          </main>
        </div>
      </Router>
     
    );
  }
}

export default App;
