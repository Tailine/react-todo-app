import React from 'react';
import classes from './ListItem.css';

const listItem = ({ task, deleteToDo }) => {

  return (
    <div className={classes.ListItem}>
      <div className={classes.text}>{task}</div> 
      <div className={classes.icon}>
        <i className="fas fa-times" style={{cursor: 'pointer', color: '#f9ac75'}} 
        onClick={(index) => deleteToDo(index)}></i>
      </div>
    </div>
  )
}
export default listItem;