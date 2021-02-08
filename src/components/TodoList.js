import React, { useEffect } from "react";
import _ from "lodash";
import CompleteTask from "./CompleteTask";
import Header from "./Header";
import TaskList from "./TaskList";
import { getTodo, markTaskComplete, markTaskFavorite } from "./TodoService";
// import { Redirect, useHistory } from "react-router-dom";
import style from "./TodoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  logout,
  updateToDoList,
  setLoadingOfTodoList,
  setErrorOfTodoList,
  setCount,
} from "../redux/actionCreator";

export default function TodoList() {
  const taskList = useSelector(state => state.todo.taskList);
  const isLoading = useSelector(state => state.status.todoList.isLoading);
  const isError = useSelector(state => state.status.todoList.isError);
  const loadingCount = useSelector(state => state.status.todoList.count);
  const currentUser = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const convertDate = time => new Date(time).getTime();

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await getTodo();
        dispatch(
          updateToDoList(
            response.map(task => {
              return {
                ...task,
                createdDate: convertDate(task.createdDate),
                completedDate: convertDate(task.completedDate),
              };
            })
          )
        );
        dispatch(setErrorOfTodoList(false));
        dispatch(setLoadingOfTodoList(false));
      } catch (err) {
        console.log(err);
        dispatch(setErrorOfTodoList(true));
      } finally {
        dispatch(setLoadingOfTodoList(false));
      }
    };

    asyncFunc();
  }, [loadingCount, dispatch]);

  const [completedList, incompletedList] = _.partition(
    taskList,
    e => e.isCompleted
  );

  const handleChangeCompleteStatus = async (taskId, newStatus) => {
    try {
      dispatch(setLoadingOfTodoList(true));
      dispatch(setErrorOfTodoList(false));
      await markTaskComplete(taskId, newStatus);
      dispatch(setCount());
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoadingOfTodoList(false));
    }
  };

  const handleChangeFavoriteStatus = async (taskId, newStatus) => {
    try {
      dispatch(setLoadingOfTodoList(true));
      dispatch(setErrorOfTodoList(false));
      await markTaskFavorite(taskId, newStatus);
      dispatch(setCount());
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoadingOfTodoList(false));
    }
  };

  const renderContent = () => {
    return isLoading ? (
      "Loading..."
    ) : (
      <div className={style.todoList}>
        <Header onChangeLoading={setLoadingCount} userName={currentUser.name} />
        <TaskList
          incompletedList={incompletedList}
          onChangeCompleteStatus={handleChangeCompleteStatus}
          onChangeFavoriteStatus={handleChangeFavoriteStatus}
        />
        <CompleteTask
          completedList={completedList}
          onChangeCompleteStatus={handleChangeCompleteStatus}
          onChangeFavoriteStatus={handleChangeFavoriteStatus}
        />
        <button onClick={() => dispatch(logout())}>Log out</button>
      </div>
    );
  };

  const setLoadingCount = () => {
    dispatch(setErrorOfTodoList(false));
    dispatch(setLoadingOfTodoList(true));
    dispatch(setCount());
  };

  const renderErrorContent = () => {
    return (
      <div>
        <div>"error"</div>
        <button
          onClick={() => {
            setLoadingCount();
          }}
        >
          ReLoad App
        </button>
      </div>
    );
  };

  return isError ? renderErrorContent() : renderContent();
}
