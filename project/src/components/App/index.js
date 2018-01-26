import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
// import Sercher from '../../components/Sercher';
// import CategoryList from '../../components/CategoryList';
import Billboard from '../Billboard';
import CourseList from '../CourseList';
import { adWords } from '../../utils/helper';
import './index.css';

class App extends Component {
  static propTypes = {
    courses: PropTypes.array,
  };

  render() {
    const { courses } = this.props;

    return (
      <Grid className="app">
        <Row className="app-header">
          <Col md={6}>
            <h1 className="app-h-top">免费课程和纳米学位项目</h1>
          </Col>
          <Col md={6}>
            <div className="sercher-container">{/* <Sercher /> */}</div>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            {/* <CategoryList /> */}
            <hr />
            {/* <CategoryList /> */}
          </Col>

          <Col md={9}>
            <Billboard {...adWords} />
            <div className="app-course-container">
              <CourseList courses={courses} />
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
