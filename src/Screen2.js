import React, { Component } from 'react';
import './App.css';
import { fetchScores } from './scripts/api.js';

export class Screen2 extends Component {
  state = {};

  componentDidMount() {
    fetchScores()
      .then(json => this.setState({json}))
  }

  get list() {

    if(!this.state.json) return false;

    const users = this.state.json.users;
    return users.map( (user) => {
      const { name, answer } = user;

      return(
        <li key={`${name}${answer}`}>
          <span>{name}</span>
          <span>{answer}</span>
        </li>
      )
    });
  }
  
  render() {
    return (
      <div className="App">
        <img src="page2.jpg" style={{width: "20vw"}} />
        <h1>Winners</h1>
        <ul>
          <li className={'bold'}>
            <span>{'name'}</span>
            <span>{'answer'}</span>
          </li>

          {this.list}
        </ul>
      </div>
    );
  }
}
