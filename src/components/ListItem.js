import React from "react";
import TaskListItems from "./TaskListItems";
import classes from "./ListItem.module.css";
import { CaretDownOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux';
import {
  changeDisplayOfIncompletedList,
  changeDisplayOfCompletedList
} from '../redux/actionCreator';

export default function ListItem({
  listName,
  renderedItem,
  onChangeCompleteStatus,
  onChangeFavoriteStatus,
  }) { 
  
  let isExpandInCompletedList = useSelector(state => state.display.IncompletedList.expand);
  let isExpandCompletedList = useSelector(state => state.display.CompletedList.expand);
  const dispatch = useDispatch();

  const handleChangeExpand = () => {
    switch(listName) {
      case "Incompleted": {
        dispatch(changeDisplayOfIncompletedList());
        break;
      }
      case "Completed": {
        dispatch(changeDisplayOfCompletedList());
        break;
      }
      default: return;
    }
  }

  const renderListItem = () => (
    <ul>
      {renderedItem.map(task =>
        <TaskListItems 
          key = {task.id}
          task = {task}
          onChangeCompleteStatus = {onChangeCompleteStatus}
          onChangeFavoriteStatus = {onChangeFavoriteStatus}
        />
      )}
    </ul>
  )

  return (
    <section className={classes.listTask}>
      <span className={classes.listName}>{listName}</span>
      <CaretDownOutlined onClick = {() => handleChangeExpand()}/>
      { 
        (listName === "Incompleted") ? (
          isExpandInCompletedList ? renderListItem() : (<span></span>)
        ) : (
          isExpandCompletedList ? renderListItem() : (<span></span>)
        )  
      }
    </section>
  );
}
