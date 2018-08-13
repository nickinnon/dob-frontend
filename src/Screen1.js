import React, { Component } from 'react';
import './App.css';

export class Screen1 extends Component {
  render() {
    return (
      <div className="App">
        <h1>What active ingredient does Counter Control have?</h1>

        <ul>
            <li>A) 75% </li>
            <li>B) 90% </li>
            <li>C) 95% </li>
            <li>D) 80%</li>
        </ul>

        <div> Text your answer to <strong>(805) 874-5677</strong></div>

      </div>
    );
  }
}

