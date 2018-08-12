import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-action';

import { createSelector } from 'reselect';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

const productsSelector = createSelector(
  (state) => state.products,
  (products) => products,
);

const userSelector = createSelector((state) => state.user, (user) => user);

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products, user) => ({
    products,
    user,
  }),
);

const mapActionToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(App);
