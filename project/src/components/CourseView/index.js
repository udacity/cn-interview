import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Searcher from '../Searcher';
import RadioList from '../RadioList';
import Billboard from '../Billboard';
import CourseList from '../CourseList';
import classNames from 'classnames';
import {
  adWords,
  TRACK_ARRAY,
  LEVEL_ARRAY,
  searchRule,
} from '../../utils/helper';
import './index.css';

class App extends Component {
  static propTypes = {
    courses: PropTypes.array,
    match: PropTypes.object,
  };

  state = {
    track: '全部课程',
    level: '全部',
  };

  componentDidMount() {
    const router = this.props.match.params.track;
    const trackObj = TRACK_ARRAY.find(each => each.router === router);
    const track = trackObj ? trackObj.name : '全部课程';
    this.setState({ track });
  }

  filterCourses = ({ track, level, userInput, courses = [] }) => {
    if (track !== '全部课程') {
      courses = courses.filter(course => course.tracks.includes(track));
    }
    if (level !== '全部') {
      courses = courses.filter(course => course.level === level);
    }
    if (userInput !== '') {
      courses = courses.filter(course => searchRule(course, userInput));
    }
    return courses;
  };

  _trackItem = track => {
    const className = classNames('radio-item', {
      selected: track.name === this.state.track,
    });
    return (
      <Link to={`/${track.router}`} style={{ textDecoration: 'none' }}>
        <div
          className={className}
          onClick={() => this.handleSelectTrack(track.name)}
        >
          <h3 className="h-title h-radio">{track.name}</h3>
        </div>
      </Link>
    );
  };

  _levelItem = level => {
    const className = classNames('radio-item', {
      selected: level === this.state.level,
    });
    return (
      <div className={className} onClick={() => this.handleSelectLevel(level)}>
        <h3 className="h-title h-radio">{level}</h3>
      </div>
    );
  };

  handleSelectTrack = track => {
    this.setState({ track });
  };

  handleSelectLevel = level => {
    this.setState({ level });
  };

  handleInputChange = event => {
    const userInput = event.target.value;
    this.setState({ userInput });
  };

  render() {
    const { courses } = this.props;
    const { track, level, userInput } = this.state;
    const filtedCourses = this.filterCourses({
      track,
      level,
      userInput,
      courses,
    });

    return (
      <Grid className="app">
        <Row className="app-header">
          <Col md={6}>
            <h1 className="app-h-top">免费课程和纳米学位项目</h1>
          </Col>
          <Col md={6}>
            <div className="searcher-container">
              <Searcher onChange={this.handleInputChange} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <h4 className="radio-title">类别</h4>
            <RadioList
              data={TRACK_ARRAY}
              renderItem={this._trackItem}
              keyExtractor={track => track.name}
              allItem={{ name: '全部课程', router: 'all' }}
              tail
            />
            <hr />
            <h4 className="radio-title">难度</h4>
            <RadioList
              data={LEVEL_ARRAY}
              renderItem={this._levelItem}
              keyExtractor={level => level}
              allItem="全部"
            />
          </Col>

          <Col md={9}>
            <Billboard {...adWords} />
            <div className="app-course-container">
              <CourseList courses={filtedCourses} />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = ({ courses }) => {
  return { courses };
};

export default connect(mapStateToProps)(App);
