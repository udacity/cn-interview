import 'isomorphic-fetch';

export const HOST = 'http://localhost:4200';
export const defaultHeader = {
  'Content-Type': 'application/json',
};

export const getCourses = () => {
  return fetch(`${HOST}/api/courses`, { header: defaultHeader }).then(res =>
    res.json()
  );
};
