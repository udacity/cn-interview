import { RECEIVE_COURSES, REQUEST_COURSES } from '../actions';

const initialCourseState = {
  isFetching: false,
  courses: [],
};

const course = (state = initialCourseState, action) => {
  switch (action.type) {
    case REQUEST_COURSES:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_COURSES:
      return {
        ...state,
        courses: action.courses,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default course;
