import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInputForm from './TodoInput';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.state = {
      listItems: ['Drew Barrymore', 'Scarlett Johansson', 'Emma Stone', 'Emma Watson'],
      value: ''
    }
  }

  componentWillMount() {
    const { dispatch } = this.props; // this is es6 magic
    dispatch(fetchTodos);
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
    const todos = { this.props };
    if (!todos) {
      return <div></div>
    }

    const rows = {
      todos.map((item, index) => {
        return <TodoItem
          item = { item }
          key = { index }
          id = { index }
          onTodoClick = { this.handleTodoClick } />;
      })
    }
    return (
      <div className="ui eight column centered grid">
        <div className="ui row">
          <TodoInputForm
            clearInput = { this.handleClearInput }
            onSubmitPress = { this.handleSubmit }
            onValueChange = { this.handleValueChange }
            value = { this.state.value } />
        </div>
        <div className="ui row">
          <div className="ui divided items">{ rows }</div>
            {/* {
              this.state.listItems.map((item, index) => {
                return <TodoItem
                  item = { item }
                  key = { index }
                  id = { index }
                  onTodoClick = { this.handleTodoClick } />;
              })
            } */}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

// export default TodoList;
export default connect(mapStateToProps)(TodoList);
