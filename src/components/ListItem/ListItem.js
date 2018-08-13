import React from 'react';

const listItem = ({ task }) => {

  const style = {
    height: 'auto',
    backgroundColor: '#ccc',
    border: '2px solid black',
    margin: '2px auto',
    padding: '.5em',
    width: '50%'
  }

  return (
    <div style={style}>
      {task}
    </div>
  )
}

export default listItem;