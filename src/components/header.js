import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authBtn() {
    if(this.props.authed) {
      return <button className="btn btn-secondary" onClick={ () => this.props.authFunc(false) }>Sign Out</button>
    }
    return <button className="btn btn-secondary" onClick={ () => this.props.authFunc(true) }>Sign In</button>
  }

  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-secondary">
          <Link to='/'>Home</Link>
        </button>
        <button className="btn btn-secondary">
          <Link to='/listInfo'>List Info</Link>
        </button>
        {this.authBtn()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authed: state.authed
  }
}
export default connect(mapStateToProps, actions)(Header);
