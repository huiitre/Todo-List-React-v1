//* ACTION TYPE SET_NEW_TASK
export const SET_NEW_TASK = 'SET_NEW_TASK';
//* ACTION CREATOR SET_NEW_TASK
export const setNewTask = (newTaskValue) => ({
  type: SET_NEW_TASK,
  newTaskValue,
});

//* ACTION TYPE SET_NEW_CATEGORY
export const SET_NEW_CATEGORY = 'SET_NEW_CATEGORY';
//* ACTION CREATOR setNewCategory
export const setNewCategory = (newCategoryValue) => ({
  type: SET_NEW_CATEGORY,
  newCategoryValue,
});

//* ACTION TYPE LOAD_TASKS_FROM_API
export const LOAD_TASKS_FROM_API = 'LOAD_TASKS_FROM_API';
//* ACTION CREATOR loadTasksFromApi
export const loadTasksFromApi = (tasks, categories) => ({
  type: LOAD_TASKS_FROM_API,
  tasks,
  categories,
});

//* ACTION TYPE LOAD_SPINNER
export const LOAD_TASKS = 'LOAD_TASKS';
//* ACTION CREATOR loadSpinner
export const loadTasks = () => ({
  type: LOAD_TASKS,
});

//* ACTION TYPE ADD_NEW_TASK
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
//* ACTION CREATOR addNewTask
export const addNewTask = () => ({
  type: ADD_NEW_TASK,
});

//* ACTION TYPE INSERT_NEW_TASK_ON_API
export const INSERT_NEW_TASK_ON_API = 'INSERT_NEW_TASK_ON_API';
//* ACTION CREATOR insertNewTaskOnApi
export const insertNewTaskOnApi = (newTask) => ({
  type: INSERT_NEW_TASK_ON_API,
  newTask,
});

//* ACTION TYPE SET_IS_ERROR
export const SET_IS_ERROR = 'SET_IS_ERROR';
//* ACTION CREATOR setIsError
export const setIsError = (bool) => ({
  type: SET_IS_ERROR,
  isError: bool,
});
