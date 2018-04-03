import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from 'react-icons/lib/fa/stop';
import { getIconArr } from '../../utils/helper';

export default class LevelBar extends Component {
  getLevelIcons = iconArr => {
    const levelIcons = iconArr.map((each, index) => {
      if (each) {
        return <Square key={index} size={16} color="#666" />;
      }
      return <Square key={index} size={16} color="#dcdcdc" />;
    });
    return levelIcons;
  };

  static propTypes = {
    level: PropTypes.string,
  };

  render() {
    const { level } = this.props;
    const iconArr = getIconArr(level);
    const levelIcons = this.getLevelIcons(iconArr);

    return (
      <div className="level-bar vertical-center">
        <div className="level-icons vertical-center">{levelIcons}</div>
        <span>{level}</span>
      </div>
    );
  }
}
