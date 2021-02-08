import React from "react";
import _ from "lodash";
import ListItem from "./ListItem";

export default function TaskList({
  incompletedList,
  onChangeCompleteStatus,
  onChangeFavoriteStatus
  }) {
  
  const sortIncompletedList = _.orderBy(
    incompletedList,
    ['isFavorite', 'createdDate'],
    ['desc', 'desc']
  );
  
  return (
    <ListItem
      listName = "Incompleted"
      renderedItem = {sortIncompletedList}
      onChangeCompleteStatus = {onChangeCompleteStatus}
      onChangeFavoriteStatus = {onChangeFavoriteStatus}
    />
  );
}


