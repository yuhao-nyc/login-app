import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ' '
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    if ( !username || !password ) {
      this.setState({
        error: "The username and password are empty"
      })
    } else if (password.length<10) {
      this.setState({
        error: "The password is at least 10 characters long"
      })
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username)) {
      this.setState({
        error: "Username is invalid"
      })
    } else if ( username === 'test@zola.com' && password === 'zola#frontend' ) {
      this.setState({
        error: "Login Success! Redirecting now..."
      })
      window.location.href = "http://localhost:8080/listInfo";
      //not a good approach need to rework on auth with a valid sessions
    } else {
      this.setState({
        error: "Denied! Please double check your username and password"
      })
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Password"/>
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
        </form> <br />
        <h6 className="error-msg">{this.state.error}</h6>
      </div>
    )
  }
}
