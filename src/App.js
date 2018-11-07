import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import BRoute from './Components/Route';



class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
          <BRoute />
        </Router>
      </div>
    );
  }
}

export default App;
