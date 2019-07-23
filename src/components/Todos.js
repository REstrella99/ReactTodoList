import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem todo={todo} />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.arrayOf.isRequired
}

export default Todos;
