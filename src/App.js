import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Screen1 } from './Screen1';
import { Screen2 } from './Screen2';
import { Screen3 } from './Screen3';



class App extends Component {
  state = {
    i: 1,
  }
  pages = [
    <Screen1 />,
    <Screen2 />,
    <Screen3 />,
  ];

  get showIndex() {
    return this.state.i % this.pages.length;
  }

  nextPage = () => {
    this.setState({i: this.state.i + 1});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.nextPage}>Next</button>
        {this.pages[this.showIndex]}
      </div>
    );
  }
}

export default App;
