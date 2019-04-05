import React, { Component } from 'react';
import TodoList from './todolist';
import './App.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Math.floor(Math.random() * 100)
    }
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
  render() {
    return (
      <div>
        <h2>TODO</h2>
        <div className="box">
          <h2>List of your favourite pets.</h2>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo ">

              Your Pet:
          </label>
            <br />
            <input
              type="text"
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add pet #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoApp;
