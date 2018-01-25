import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import './index.css';

class App extends Component {
  static propTypes = {
    fetchCourses: PropTypes.func,
  };

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
      </div>
    );
  }
}

const mapStateToProps = ({ courses }) => {
  return { courses };
};

export default connect(mapStateToProps)(App);
