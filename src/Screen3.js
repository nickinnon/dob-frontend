import React, { Component } from 'react';
import './App.css';
import { fetchOrders } from './scripts/api.js';

export class Screen3 extends Component {
  state = {};

  componentDidMount() {
    fetchOrders()
      .then(json => this.setState({json}))
  }

  get list() {
    if(!this.state.json) return false;

    const users = this.state.json.users;
    return users.map( (user) => {
      const { name, order } = user;

      if( ['yes'].includes(order.toLowerCase()) ){
        return(
          <li key={`${name}${order}`}>
            <span>{name}</span>
            <span>{order.toUpperCase()}</span>
          </li>
        )
      }else {
        return false;
      }
    });
  }

  render() {
    return (
      <div className="App">
        <img src="page3.png" style={{width: "20vw"}} />
        <h1>Orders</h1>
        <ul>
          <li className={'bold'}>
            <span>{'name'}</span>
            <span>{'order'}</span>
          </li>
          {this.list}
        </ul>
      </div>
    );
  }
}
