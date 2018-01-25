import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Sercher } from '../../components/Sercher';
// import { CategoryList } from '../../components/CategoryList';
// import { Billboard } from '../../components/Billboard';
// import { CourseList } from '../../components/CourseList';
import './index.css';

class App extends Component {
  static propTypes = {
    fetchCourses: PropTypes.func,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header container">
          <h1 className="h-top">免费课程和纳米学位项目</h1>
          <div className="sercher-container">
            {/* <Sercher /> */}
          </div>
        </header>

        <section className="container">
          <div className="categories-container">
            {/* <CategoryList /> */}
            <hr/>
            {/* <CategoryList /> */}
          </div>

          <div className="course-list-container">
            {/* <Billboard />
            <CourseList /> */}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ courses }) => {
  return { courses };
};

export default connect(mapStateToProps)(App);
