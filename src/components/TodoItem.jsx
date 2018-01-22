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
      <div className="item" id={ this.props.id } onClick={this.handleClick}>
        <i className="large remove icon"></i>
        <div className="description">
          { this.props.item }
        </div>
      </div>
    );
  }
}

export default TodoItem;
