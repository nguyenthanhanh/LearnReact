import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const toDo = [
        {
            id: 1,
            title: 'Dog'
        },
        {
            id: 2,
            title: 'Cat'
        },
        {
            id: 3,
            title: 'Mouse'
        }
    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={toDo} />
        </div>
    );
}

export default TodoFeature;