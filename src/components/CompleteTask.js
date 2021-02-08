import React from "react";
import _ from "lodash";
import ListItem from "./ListItem";

export default function CompleteTask({
  completedList,
  onChangeCompleteStatus,
  onChangeFavoriteStatus
}) {
  
  const sortCompletedList = _.orderBy(
    completedList, 
    ['isFavorite', 'completedDate'],
    ['desc', 'desc']
  ); 

  return (
    <ListItem
      listName = "Completed"
      renderedItem = {sortCompletedList}
      onChangeCompleteStatus = {onChangeCompleteStatus}
      onChangeFavoriteStatus = {onChangeFavoriteStatus}    
      />
  );
}


