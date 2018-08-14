import React, { Component } from 'react';
import './App.css';

export class Screen1 extends Component {
  render() {
    return (
      <div className="App">
        <img src="page1.png" style={{width: "70vw"}} />
        <a>Next</a>
      </div>
    );
  }
}