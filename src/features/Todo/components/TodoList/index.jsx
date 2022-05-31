import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array
};

TodoList.defaultProps = {
    todoList: []
}

function TodoList(props) {
    const { todoList } = props;
    console.log(props);
    return (
        <ul>
            {todoList.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;