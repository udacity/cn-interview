import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';
import LevelBar from './LevelBar';
import './index.css';

export class Item extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    level: PropTypes.string,
    subtitle: PropTypes.string,
    short_summary: PropTypes.string,
    projects: PropTypes.array,
  };

  render() {
    const {
      image,
      title,
      level,
      subtitle,
      short_summary: shortSummary,
      projects,
    } = this.props;
    const projectNum = projects.length;
    return (
      <Row className="course-list-item">
        <Col md={3}>
          <Image className="img-fluid" src={image} />
        </Col>
        <Col md={9}>
          <Row>
            <Col md={8}>
              <h3 className="h-title">{title}</h3>
            </Col>
            <Col md={4}><LevelBar level={level}/></Col>
          </Row>
          <h4 className="h-light course-list-projects">{projectNum} 个项目</h4>
          <h3 className="h-bold">{subtitle}</h3>
          <p className="p-normal">{shortSummary}</p>
        </Col>
      </Row>
    );
  }
}

export default class CourseList extends Component {
  static propTypes = {
    courses: PropTypes.array,
  };

  render() {
    const { courses = [] } = this.props;
    const listItems = courses.map(course => (
      <Item {...course} key={course.key} />
    ));

    return <div className="course-list">{listItems}</div>;
  }
}
