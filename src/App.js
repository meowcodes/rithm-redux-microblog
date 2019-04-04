import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Routes from './Components/Routes';
import './App.css';

/**
 * Renders Navbar and Routes
 */
class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
