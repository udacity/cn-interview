import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Billboard extends Component {
  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
  };

  render() {
    const { title, body } = this.props;
    return (
      <div className="billboard">
        <h1 className="billboard-title">{title}</h1>
        <p className="billboard-body">{body}</p>
      </div>
    );
  }
}

export default Billboard;
