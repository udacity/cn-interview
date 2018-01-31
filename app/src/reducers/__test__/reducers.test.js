import reducer from '..';
import { RECEIVE_COURSES } from '../../actions';
import { courses } from 'mock-courses';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    isFetching: false,
    courses: [],
  });
});

it('should handle RECEIVE_COURSES', () => {
  expect(
    reducer([], {
      type: RECEIVE_COURSES,
      courses,
    })
  ).toEqual({
    isFetching: false,
    courses,
  });
});
