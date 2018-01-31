import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import TrackList from '..';

it('renders correctly', () => {
  const wrapper = shallow(<TrackList selected="全部课程" />);
  expect(wrapper).toMatchSnapshot();
});

it('selected right item ', () => {
  const wrapper = mount(
    <MemoryRouter>
      <TrackList selected="全部课程" />
    </MemoryRouter>
  );
  expect(
    wrapper
      .find('.radio-item')
      .slice(-1)
      .hasClass('selected')
  ).toBe(true);
});

it('can trigger onSelect prop', () => {
  const handleSelect = jest.fn();
  const wrapper = mount(
    <MemoryRouter>
      <TrackList selected="全部课程" onSelect={handleSelect}/>
    </MemoryRouter>
  );
  wrapper
    .find('.radio-item')
    .at(1)
    .simulate('click');
  expect(handleSelect).toHaveBeenCalled();
});
