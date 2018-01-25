import fetch from 'isomorphic-fetch';

const HOST = 'http://localhost:50983';
const defaultHeader = {
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const getCourses = () => {
  return fetch(`${HOST}/api/courses`, { header: defaultHeader }).then(res =>
    res.json()
  );
};
