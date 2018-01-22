import React, {Component} from 'react';

class TodoInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onValueChange(event.target.value);
  }

  handleSubmit(event) {
    console.log(this.props.value);
    this.props.onSubmitPress(this.props.value);
    event.preventDefault();
    this.props.clearInput();
  }

  render() {
    const value = this.props.value;
    return(
      <form className="todo addnew" onSubmit={this.handleSubmit} autoComplete="new-password">
        <div className="ui input">
          <input type="text" id="addTodo" autoComplete="off" placeholder="Add new todo" className="ui input"
            value={value} onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default TodoInputForm;
