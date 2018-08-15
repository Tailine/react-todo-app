import React from 'react';

const listItem = ({ task, deleteToDo, id }) => {

  const style = {
    height: 'auto',
    backgroundColor: '#ccc',
    border: '2px solid black',
    margin: '2px auto',
    padding: '.5em',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
  }

  return (
    <div style={style} id={id}>
      <div>{task}</div> 
      <i className="fas fa-trash-alt" style={{cursor: 'pointer', color: '#ff4d4d'}} onClick={(evt) => deleteToDo(evt)}></i>
    </div>
  )
}

export default listItem;