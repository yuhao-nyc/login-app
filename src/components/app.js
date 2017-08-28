import React, { Component } from 'react';
import Login from './login';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="box-signin">
          <h2>Hi Welcome!</h2>
          <Login />
        </div>
      </div>
    );
  }
}
