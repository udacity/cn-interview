import React from 'react';
import { mount } from 'enzyme';
import LevelList from '..';

it('renders correctly', () => {
  const wrapper = mount(<LevelList selected="全部" />);
  expect(wrapper).toMatchSnapshot();
});

it('selected right item ', () => {
  const wrapper = mount(<LevelList selected="全部" />);
  expect(
    wrapper
      .find('.radio-item')
      .at(0)
      .hasClass('selected')
  ).toBe(true);
});

it('can trigger onSelect prop', () => {
  const handleSelect = jest.fn();
  const wrapper = mount(
    <LevelList selected="全部课程" onSelect={handleSelect} />
  );
  wrapper
    .find('.radio-item')
    .at(1)
    .simulate('click');
  expect(handleSelect).toHaveBeenCalled();
});
