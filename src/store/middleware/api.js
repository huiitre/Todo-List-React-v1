import axios from 'axios';

export const apiMiddleware = (store) => (next) => (action) => {
  axios
    .get('http://localhost:1234/tasks')
    .then((response) => {
      console.log('success', response);
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export default apiMiddleware;
