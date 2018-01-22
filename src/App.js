import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  render() {

    return (
      <div className="App container">
        <div className="ui eight column centered grid">
          <header className="App-header ui row">
            <h1 className="App-title">React Todo List</h1>
          </header>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
