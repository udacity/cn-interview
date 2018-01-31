import React from 'react';
import { mount } from 'enzyme';
import CourseList from '..';
import { courses } from 'mock-courses';

it('renders correctly', () => {
  const wrapper = mount(<CourseList courses={courses} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders without crashing when courses is empty', () => {
  mount(<CourseList courses={[]} />);
});

it('should have correct project message', () => {
  const wrapper = mount(<CourseList courses={[...courses]} />);
  expect(
    wrapper
      .find('h4')
      .at(1)
      .text()
  ).toEqual('1 个项目');
  expect(
    wrapper
      .find('h4')
      .at(2)
      .text()
  ).toEqual('没有项目');
});
