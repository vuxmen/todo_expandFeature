import axios from "axios";
const user = "vu";
const url = "http://localhost:5000";
const getTodoEndpoint = `${url}/Todo/GetTodos`;
const addTodoEndpoint = `${url}/Todo/AddTodo`;
const markTaskCompletedEndPoint = `${url}/Todo/ChangeTaskCompletedState`;
const markTaskFavoriteEndPoint = `${url}/Todo/ChangeTaskFavoriteState`;

export const getTodo = async () => (
    await axios.get(getTodoEndpoint, {
      params: {
        user: user
      }
    })
  ).data.data

export const addTodo = async (taskName) => 
  await axios.post(addTodoEndpoint, {
    user: user,
    taskName: taskName
  })

export const markTaskComplete = async (id, isCompleted) => 
  await axios.post(markTaskCompletedEndPoint, {
    taskId: id,
    isCompleted: isCompleted
  })

export const markTaskFavorite = async (id, isFavorite) => 
  await axios.post(markTaskFavoriteEndPoint, {
    taskId: id,
    isFavorite: isFavorite
  })