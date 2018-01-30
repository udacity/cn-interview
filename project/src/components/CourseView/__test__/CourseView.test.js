import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { CourseView } from '..';

it('renders correctly', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <CourseView />
    </MemoryRouter>
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
});
