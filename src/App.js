import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Todo List</h1>
        </header>
          <TodoList />
      </div>
    );
  }
}

export default App;
