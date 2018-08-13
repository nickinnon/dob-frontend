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
        <Screen1 />
        <Screen2 />
        <Screen3 />
      </div>
    );
  }
}

export default App;
