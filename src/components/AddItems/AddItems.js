import React from 'react';

const addItems = ({ addToDo, updateInputValue }) => {

  const style = {
    padding: '1em',
    display: 'flex',
    justifyContent: 'center',
  }

  return (
    <div style={style}>
      <input type="text" placeholder="Enter to-do" onChange={(evt) => updateInputValue(evt)} />
      <button onClick={addToDo}>Add To-Do</button>
    </div>
  );  
}

export default addItems;