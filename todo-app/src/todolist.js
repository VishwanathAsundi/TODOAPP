import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default TodoList;