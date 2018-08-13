import React, { Component } from 'react';
import './App.css';
import { fetchScores } from './scripts/api.js';

export class Screen2 extends Component {
  componentDidMount() {
    fetchScores()
  }
  render() {
    return (
      <div className="App">
        <h1>Winners</h1>
        <ul>
          <li>Cindy</li>
          <li>Deborah</li>
        </ul>
      </div>
    );
  }
}
