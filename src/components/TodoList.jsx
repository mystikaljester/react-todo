import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInputForm from './TodoInput';

class TodoList extends Component {
  render() {
    return (
      <div className="todo container">
        <TodoInputForm />
        <ul>
          {
            this.props.listItems.map((item, index) => {
              return <TodoItem item={item} index={index} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
