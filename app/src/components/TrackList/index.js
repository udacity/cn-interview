import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { TRACK_ARRAY } from '../../utils/helper';

export default class TrackList extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    selected: PropTypes.string,
  };

  _Item = (track, selected, onSelect) => {
    const className = classNames('radio-item', {
      selected: track.name === selected,
    });
    return (
      <Link to={`/${track.router}`} style={{ textDecoration: 'none' }}>
        <div className={className} onClick={() => onSelect(track.name)}>
          <h3 className="h-title h-radio">{track.name}</h3>
        </div>
      </Link>
    );
  };

  render() {
    const { onSelect, selected } = this.props;
    const tracks = [...TRACK_ARRAY, { name: '全部课程', router: 'all' }];
    return (
      <ul className="no-list-style">
        {tracks.map(track => (
          <li key={track.name}>{this._Item(track, selected, onSelect)}</li>
        ))}
      </ul>
    );
  }
}