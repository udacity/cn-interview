import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import CourseView from '..';
import { courses } from 'mock-courses';
import configureStore from 'redux-mock-store';
import { TRACK_ARRAY } from '../../../utils/helper';

describe('test connected CourseView', () => {
  const routers = TRACK_ARRAY.map(track => ({
    key: track.name,
    pathname: `/${track.router}`,
  }));
  routers.push({ key: '全部课程', pathname: '/all' });
  const initialState = { isFetching: false, courses };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <MemoryRouter initialEntries={routers} initialIndex={routers.length - 1}>
        <Route
          path="/:track"
          render={props => <CourseView {...props} store={store} />}
        />
      </MemoryRouter>
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be filted by track', () => {
    wrapper
      .find('TrackList')
      .find('.radio-item')
      .at(0)
      .simulate('click');
    expect(
      wrapper.find('CourseList').find('div.course-list-item')
    ).toHaveLength(1);
  });

  it('should be filted by level', () => {
    wrapper
      .find('LevelList')
      .find('.radio-item')
      .at(1)
      .simulate('click');
    expect(
      wrapper.find('CourseList').find('div.course-list-item')
    ).toHaveLength(1);
  });

  it('should be filted by search', () => {
    wrapper
      .find('Searcher')
      .find('input')
      .simulate('change', { target: { value: 'mock-title-1' } });
    expect(
      wrapper.find('CourseList').find('div.course-list-item')
    ).toHaveLength(1);
  });
});
