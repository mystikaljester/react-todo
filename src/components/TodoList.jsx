import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInputForm from './TodoInput';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.state = {
      listItems: ['Drew Barrymore', 'Scarlett Johansson', 'Emma Stone'],
      value: ''
    }
  }

  handleValueChange(value) {
    this.setState({value});
  }

  handleSubmit(value) {
    var newArray = this.state.listItems.slice(); //slice makes the new array immutable
    newArray.push(value);
    this.setState({listItems: newArray});
  }

  handleClearInput() {
    this.setState({value: ''});
  }

  handleTodoClick(index){
    var newArray = this.state.listItems.slice();
    newArray.splice(index, 1);
    this.setState({listItems: newArray});
  }

  render() {
    return (
      <div className="todo container">
        <TodoInputForm
          clearInput = { this.handleClearInput }
          onSubmitPress = { this.handleSubmit }
          onValueChange = { this.handleValueChange }
          value = { this.state.value } />
        <ul>
          {
            this.state.listItems.map((item, index) => {
              return <TodoItem
                item = { item }
                key = { index }
                id = { index }
                onTodoClick = { this.handleTodoClick } />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
