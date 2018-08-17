import React from 'react';
import ListItem from './ListItem/ListItem';

const list = ({todos, deleteToDo}) => todos.map(todo => {
  return  <ListItem key={todo.id} task={todo.task} deleteToDo={deleteToDo} />
});

export default list;