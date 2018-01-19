import React, {Component} from 'react';

class TodoInputForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("event.target.value=" + event.target.value);
    this.props.onValueChange(event.target.value);
  }

  handleSubmit(event) {
    alert(this.props.value);
    this.setState('');
    event.preventDefault();
  }

  render() {
    const value = this.props.value;
    return(
      <form className="todo addnew" onSubmit={this.handleSubmit}>
        <input type="text" id="addTodo" placeholder="Add new todo" value={value} onChange={this.handleChange} />
      </form>
    );
  }
}

export default TodoInputForm;
