import { actionTypes } from "./actionTypes";

export const changeHeaderInputValue = newTask => {
  return {
    type: actionTypes.CHANGE_INPUT,
    payload: {
      newTask,
    },
  };
}

export const changeEmailInputValue = newEmail => {
  return {
    type: actionTypes.CHANGE_EMAIL,
    payload: {
      newEmail,
    },
  };
}

export const changePasswordInputValue = newPassword => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    payload: {
      newPassword,
    },
  };
}

export const login = () => ({
  type: actionTypes.LOGIN,
  payload: {},
})

export const logout = () => ({
  type: actionTypes.LOGOUT,
  payload: {},
})

export const updateToDoList = newTodoList => ({
  type: actionTypes.UPDATE_TODOLIST,
  payload: {
    newTodoList,
  },
})

export const setLoadingOfTodoList = loadingStatus => ({
  type: actionTypes.CHANGE_LOADING_STATUS.OF_TODOLIST,
  payload: {
    loadingStatus,
  },
})

export const setLoadingOfLogin = loadingStatus => ({
  type: actionTypes.CHANGE_LOADING_STATUS.OF_LOGIN,
  payload: {
    loadingStatus,
  },
})

export const setErrorOfTodoList = errorStatus => ({
  type: actionTypes.CHANGE_ERROR_STATUS.OF_TODOLIST,
  payload: {
    errorStatus,
  },
})

export const setErrorOfLogin = errorStatus => ({
  type: actionTypes.CHANGE_ERROR_STATUS.OF_LOGIN,
  payload: {
    errorStatus,
  },
})

export const setCount = () => ({
  type: actionTypes.CHANGE_LOADING_COUNT,
  payload: {},
})

export const changeDisplayOfIncompletedList = () => ({
  type: actionTypes.CHANGE_DISPLAY.OF_INCOMPLETEDLIST,
  payload: {}
})

export const changeDisplayOfCompletedList = () => ({
  type: actionTypes.CHANGE_DISPLAY.OF_COMPLETEDLIST,
  payload: {}
})


