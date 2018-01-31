import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MdSearch from 'react-icons/lib/md/search';
import './index.css';

export default class Searcher extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  render() {
    const { onChange } = this.props;
    return (
      <div className="searcher">
        <input
          placeholder="搜索你喜欢的课程"
          type="text"
          className="searcher-input"
          maxLength={50}
          onChange={onChange}
        />
        <MdSearch size={30} color="#1db3e2" />
      </div>
    );
  }
}
