import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';

class Routes extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={Home} />
          </div>
      </Router>
    );
  }
}

export default Routes;
