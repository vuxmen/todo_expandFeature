import { actionTypes } from "../actionTypes";

export const todo = (state = { taskList: [], newTask: '' }, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TODOLIST: {
      return {
        ...state,
        taskList: action.payload.newTodoList,
      };
    }
    case actionTypes.CHANGE_INPUT: {
        return {
          ...state,
          newTask: action.payload.newTask,
        };
      }
    
    default:
      return state;
  }
};
