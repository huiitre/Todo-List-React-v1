import { IS_LOADED_TASKS, LOAD_TASKS_FROM_API, SET_NEW_TASK } from '../actions';

/* eslint-disable spaced-comment */
const initialState = {
  tasks: [],
  categories: [],

  //? gère l'input controlé du formulaire d'ajout d'une tâche
  newTaskValue: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_TASK: {
      return {
        ...state,
        newTaskValue: action.newTaskValue,
      };
    }
    case LOAD_TASKS_FROM_API: {
      return {
        ...state,
        tasks: [...state.tasks, ...action.tasks],
      };
    }
    default:
      return state;
  }
};

export default reducer;
