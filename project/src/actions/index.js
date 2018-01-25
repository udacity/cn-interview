import { getCourses } from '../utils/api';

export const REQUEST_COURSES = 'REQUEST_COURSES';
export const RECEIVE_COURSES = 'RECEIVE_COURSES';

const requestCourses = () => ({
  type: REQUEST_COURSES,
});

const receiveCourses = courses => ({
  type: RECEIVE_COURSES,
  courses,
});

export const fetchCourses = () => dispatch => {
  dispatch(requestCourses());
  return getCourses().then(courses => dispatch(receiveCourses(courses)));
};
