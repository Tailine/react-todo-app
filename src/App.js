import React, { Component } from 'react';
import ListItem from './components/ListItem/ListItem';
import AddItems from './components/AddItems/AddItems';
import './App.css';

class App extends Component {
// const style = {
    //   border: '2px solid black',
    //   height: 'auto',
    //   widht: '50%',
    //   margin: '0 auto',
    // }
  state = {
    value: '',
    todos: [],
    nextId: 0,
  }

  addToDo = () => {
    const newTodo = this.state.value;
    const todosArray = [...this.state.todos];
    todosArray.push({id: this.state.nextId, task: newTodo});
    this.setState({todos: todosArray})
    this.updateNextId();
  }

  updateInputValue = (evt) => {
    this.setState({value: evt.target.value});
  }

  updateNextId = () => {  // update next id
    this.setState((prevState) => {
      return {nextId: prevState.nextId + 1}
    })
  }

  render() {

    const {todos} = this.state;

    const todoList = todos.map((todo) => {
      return <ListItem key={todo.id} task={todo.task} />
    })

    return(
      <div className="App">
        <h1>React To-do List</h1>
        <div>
          <AddItems addToDo={this.addToDo} updateInputValue={this.updateInputValue} />
          {todoList}
        {/* <ToDoList />  */}
        </div>
      </div>
    )
  }
}

export default App;
