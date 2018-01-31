import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { REQUEST_COURSES, RECEIVE_COURSES, fetchCourses } from '..';
import { courses } from 'mock-courses';
import fetchMock from 'fetch-mock';
import { HOST, defaultHeader } from '../../utils/api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('create RECEIVE_COURSES when fetching courses has been done', () => {
    fetchMock.getOnce(`${HOST}/api/courses`, {
      body: courses,
      headers: defaultHeader,
    });

    const expectedActions = [
      { type: REQUEST_COURSES },
      { type: RECEIVE_COURSES, courses },
    ];
    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
