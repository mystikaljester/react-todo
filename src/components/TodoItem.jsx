import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onTodoClick(event.target.id);
  }

  render() {
    return (
      <li id={ this.props.id } onClick={this.handleClick}>{ this.props.item }</li>
    );
  }
}

export default TodoItem;
