import React, {Component} from 'react';

class TodoInputForm extends Component {
  render() {
    return(
      <form className="todo addnew">
        <input type="text" id="addTodo" placeholder="Add new todo"/>
      </form>
    );
  }
}

export default TodoInputForm;
