import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInputForm from './TodoInput';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.state = {
      listItems: ['Drew Barrymore', 'Scarlett Johansson', 'Emma Stone'],
      value: ''
    }
  }

  handleValueChange(value) {
    this.setState({value});
  }

  render() {
    return (
      <div className="todo container">
        <TodoInputForm
          value={this.state.value}
          onValueChange={this.handleValueChange} />
        <ul>
          {
            this.state.listItems.map((item, index) => {
              return <TodoItem item={item} key={index} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
