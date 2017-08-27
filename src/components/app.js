import React, { Component } from 'react';
import Login from './login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      loggedIn: true
    }
  }
  render() {
    return (
      <div className="container">
        <h2>Hi Welcome</h2>
        <Login />
      </div>
    );
  }
}
