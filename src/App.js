import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">React Todo List</h1>
        </header>
        <div className="todo container">
          <div className="todo addnew">
            <input type="text" id='newtodo' placeholder="Add new todo"/>
          </div>
          <ul className="todo list">
            <li className="todo item">
              do stuff
            </li>
            <li className="todo item">
              do other stuff
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
