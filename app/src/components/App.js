import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CourseView from './CourseView';

export default class App extends Component {
  render() {
    return [
      <Route key="/" exact path="/" component={() => <Redirect to="/all" />} />,
      <Route key="track" path="/:track" component={CourseView} />,
    ];
  }
}
