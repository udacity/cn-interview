import React from 'react';
import { mount } from 'enzyme';
import Searcher from '..';

it('renders correctly', () => {
  const wrapper = mount(<Searcher />);
  expect(wrapper).toMatchSnapshot();
});

it('can trigger onChange prop', () => {
  const handleChange = jest.fn();
  const wrapper = mount(
    <Searcher onChange={handleChange} />
  );
  wrapper
    .find('input')
    .simulate('change');
  expect(handleChange).toHaveBeenCalled();
});