import { actionTypes } from "../actionTypes";

export const status = (
  state = { 
    todoList: {
      isLoading: true,
      isError: false,
      count: 0   
    },
    login: {
      isLoading: true,
      isError: false
    }
  },
  action
) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOADING_STATUS.OF_TODOLIST: {
      return {
        ...state,
        todoList: {
          ...state.todoList,
          isLoading: action.payload.loadingStatus
        }
      };
    }
    case actionTypes.CHANGE_LOADING_STATUS.OF_LOGIN: {
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: action.payload.loadingStatus
        }
      };
    }
    case actionTypes.CHANGE_ERROR_STATUS.OF_TODOLIST: {
      return {
        ...state,
        todoList: {
          ...state.todoList,
          isError: action.payload.errorStatus
        }
      };
    }
    case actionTypes.CHANGE_ERROR_STATUS.OF_LOGIN: {
      return {
        ...state,
        login: {
          ...state.login,
          isError: action.payload.errorStatus
        }
      };
    }
    case actionTypes.CHANGE_LOADING_COUNT: {
      return {
        ...state,
        todoList: {
          ...state.todoList,
          count: state.todoList.count + 1
        }
      };
    }
    default:
      return state;
  }
};
