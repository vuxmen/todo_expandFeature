import React from "react";
import classes from "./Header.module.css";
import { addTodo } from "./TodoService";
import { useSelector, useDispatch } from "react-redux";
import { changeHeaderInputValue } from "../redux/actionCreator";

export default function Header({ onChangeLoading, userName }) {
  const currentItem = useSelector(state => state.todo.newTask);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    // console.log("handleChange");
    dispatch(changeHeaderInputValue(value));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && currentItem) {
      handleAddTodo(currentItem);
      dispatch(changeHeaderInputValue(""));
    }
  };

  const handleAddTodo = async (newTaskName) => {
    try {
      await addTodo(newTaskName);
      onChangeLoading();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className={classes.heading}>
      <h1>Welcome {userName}</h1>
      <h2>New Task</h2>
      <input
        type="text"
        value={currentItem}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </header>
  );
}
