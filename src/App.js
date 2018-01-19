import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    let listItems = ['Drew Barrymore', 'Scarlett Johansson', 'Emma Stone'];
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Todo List</h1>
        </header>
        <div className="todo container">
          <TodoList listItems={ listItems } />
        </div>
      </div>
    );
  }
}

export default App;
