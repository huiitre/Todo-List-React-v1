import { SET_NEW_TASK } from '../actions';

/* eslint-disable spaced-comment */
const initialState = {
  tasks: {},
  categories: {},

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
    default:
      return state;
  }
};

export default reducer;
