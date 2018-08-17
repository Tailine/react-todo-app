import React from 'react';
import classes from './AddItems.css';

const addItems = ({ addToDo, updateInputValue, value }) => {

  return (
    <div className={classes.AddItems}>
      <input type="text" placeholder="Enter to-do" onChange={(evt) => updateInputValue(evt)} value={value}/>
      <button onClick={addToDo}>Add Item</button>
    </div>
  );  
}

export default addItems;