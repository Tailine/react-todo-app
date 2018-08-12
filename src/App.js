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
    todos: [
      {id: 0, task: 'Limpar casa'},
      {id: 1, task: 'Estudar'},
      {id: 2, task: 'Fazer mercado'},
    ],
  }

  addToDo = () => {
    console.log(this.state.value)
  }

  updateInputValue = (evt) => {
    this.setState({value: evt.target.value});
  }

  render() {

    return(
      <div className="App">
        <h1>React To-do List</h1>
        <div>
          <AddItems addToDo={this.addToDo} updateInputValue={this.updateInputValue} />
          <ListItem />
          <ListItem />
          <ListItem />
        {/* <ToDoList />  */}
        </div>
      </div>
    )
  }
}

export default App;
