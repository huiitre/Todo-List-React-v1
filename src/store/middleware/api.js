import axios from 'axios';
import {
  insertNewTaskOnApi,
  loadTasksFromApi,
  LOAD_TASKS,
  ADD_NEW_TASK,
} from '../actions';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      {
        const state = store.getState();
        const { newTaskValue: title, newCategoryValue: categoryId } = state;
        axios
          .post('http://localhost:1234/tasks', {
            title,
            categoryId,
          })
          .then((response) => {
            console.log(response);
            const newTask = { ...response.data };
            store.dispatch(insertNewTaskOnApi(newTask));
            console.log(newTask);
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
      next(action);
      break;

    case LOAD_TASKS:
      {
        const tasksRequest = axios.get('http://localhost:1234/tasks');
        const categoriesRequest = axios.get('http://localhost:1234/categories');
        /* axios
        .get('http://localhost:1234/tasks')
        .then((response) => {
          // console.log('success', response);
          store.dispatch(loadTasksFromApi(response.data));
        })
        .catch((error) => {
          console.log('error', error);
        }); */
        axios.all([tasksRequest, categoriesRequest]).then((response) => {
          console.log(response[1]);
          store.dispatch(loadTasksFromApi(response[0].data, response[1].data));
        });
      }
      next(action);
      break;

    default:
      next(action);
  }
};

export default apiMiddleware;
