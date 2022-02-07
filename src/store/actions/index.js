//* ACTION TYPE SET_NEW_TASK
export const SET_NEW_TASK = 'SET_NEW_TASK';
//* ACTION CREATOR SET_NEW_TASK
export const setNewTask = (newTaskValue) => ({
  type: SET_NEW_TASK,
  newTaskValue,
});
