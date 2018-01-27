import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class RadioList extends Component {
  static propTypes = {
    data: PropTypes.array,
    keyExtractor: PropTypes.func,
    renderItem: PropTypes.func,
    allItem: PropTypes.any,
    tail: PropTypes.bool,
  };
  render() {
    const {
      data,
      keyExtractor,
      renderItem,
      allItem = null,
      tail = false,
    } = this.props;
    let items;
    if (allItem) {
      items = tail ? [...data, allItem] : [allItem, ...data];
    }

    return (
      <ul className="no-list-style">
        {items.map(item => (
          <li key={keyExtractor(item)}>{renderItem(item)}</li>
        ))}
      </ul>
    );
  }
}

export default RadioList;
