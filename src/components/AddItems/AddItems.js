import React from 'react';
import classes from './AddItems.css';

const addItems = ({ validateInput, updateInputValue, value }) => {

  return (
    <div className={classes.AddItems}>
      <input type="text" placeholder="Enter to-do" onChange={(evt) => updateInputValue(evt)} value={value}/>
      <button onClick={validateInput}>Add Item</button>
    </div>
  );  
}

export default addItems;