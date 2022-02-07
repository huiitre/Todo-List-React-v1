import axios from 'axios';
import { loadTasksFromApi, LOAD_TASKS_FROM_API } from '../actions';

export const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default apiMiddleware;
