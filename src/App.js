import React, { Component } from 'react';
import List from './components/List/List';
import AddItems from './components/AddItems/AddItems';
import classes from './App.css';

class App extends Component {
  
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
    this.cleanInput();
    console.log(this.state.value)
  }

  deleteToDo = (index) => {    
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState(() => {
      return { todos: todos };
    })
  }

  updateInputValue = (evt) => {
    this.setState({value: evt.target.value});
  }

  updateNextId = () => {  // update next id
    this.setState((prevState) => {
      return {nextId: prevState.nextId + 1}
    })
  }

  cleanInput = () => {  // clean input 
    this.setState(() => {
      return {value: ''}
    })
  }

  render() {

    const {todos} = this.state;

    const todoList = <List todos={todos} deleteToDo={this.deleteToDo} />

    return(
      <div className={classes.App}>
        <h1 className={classes.title}>React To-do List</h1>
        <div>
          <AddItems addToDo={this.addToDo} updateInputValue={this.updateInputValue} value={this.state.value} />
          {todoList}
        </div>
      </div>
    )
  }
}

export default App;
