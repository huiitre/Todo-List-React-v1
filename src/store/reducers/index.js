import {
  LOAD_TASKS,
  LOAD_TASKS_FROM_API,
  SET_NEW_TASK,
  SET_NEW_CATEGORY,
  INSERT_NEW_TASK_ON_API,
} from '../actions';

/* eslint-disable spaced-comment */
const initialState = {
  tasks: [],
  categories: [],

  //? gère l'input controlé du formulaire d'ajout d'une tâche
  newTaskValue: '',

  //? gère le select controlé du formulaire d'ajout d'une tâche
  newCategoryValue: 0,

  //? gère l'affichage du spinner
  loadSpinner: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_TASK: {
      return {
        ...state,
        newTaskValue: action.newTaskValue,
      };
    }
    case SET_NEW_CATEGORY: {
      return {
        ...state,
        newCategoryValue: action.newCategoryValue,
      };
    }
    case LOAD_TASKS_FROM_API: {
      return {
        ...state,
        tasks: [...state.tasks, ...action.tasks],
        categories: [...state.categories, ...action.categories],
        loadSpinner: false,
      };
    }
    case LOAD_TASKS: {
      return {
        ...state,
        loadSpinner: true,
      };
    }
    case INSERT_NEW_TASK_ON_API: {
      console.log(action.newTask);
      console.log(state.tasks);
      return {
        ...state,
        tasks: [...state.tasks, action.newTask],
      };
    }
    default:
      return state;
  }
};

export default reducer;
