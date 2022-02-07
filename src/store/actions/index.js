//* ACTION TYPE SET_NEW_TASK
export const SET_NEW_TASK = 'SET_NEW_TASK';
//* ACTION CREATOR SET_NEW_TASK
export const setNewTask = (newTaskValue) => ({
  type: SET_NEW_TASK,
  newTaskValue,
});

//* ACTION TYPE LOAD_TASKS_FROM_API
export const LOAD_TASKS_FROM_API = 'LOAD_TASKS_FROM_API';
//* ACTION CREATOR loadTasksFromApi
export const loadTasksFromApi = (tasks) => ({
  type: LOAD_TASKS_FROM_API,
  tasks,
});
