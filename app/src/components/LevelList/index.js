import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LEVEL_ARRAY } from '../../utils/helper';

export default class LevelList extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    selected: PropTypes.string,
  };

  _Item = (level, selected, onSelect) => {
    const className = classNames('radio-item', {
      selected: level === selected,
    });
    return (
      <div className={className} onClick={() => onSelect(level)}>
        <h3 className="h-title h-radio">{level}</h3>
      </div>
    );
  };

  render() {
    const { onSelect, selected } = this.props;
    const levels = ['全部', ...LEVEL_ARRAY];
    return (
      <ul className="no-list-style">
        {levels.map(level => (
          <li key={level}>{this._Item(level, selected, onSelect)}</li>
        ))}
      </ul>
    );
  }
}
