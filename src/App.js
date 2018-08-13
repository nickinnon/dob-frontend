import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Screen1 } from './Screen1';
import { Screen2 } from './Screen2';
import { Screen3 } from './Screen3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Screen1></Screen1>
      </div>
    );
  }
}

export default App;
