import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';


TodoList.propTypes = {
    todoList: PropTypes.array,
    onToDoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onToDoClick: null,
}

function TodoList({ todoList, onToDoClick }) {
    console.log('vaor TodoList');
    const handelToDoClick = (item, index) => {
        console.log('vaor');
        if (!onToDoClick) return;
        onToDoClick(item, index);
    }
    return (
        <ul className='todo-list'>
            {todoList.map((item, index) => (
                <li
                    key={item.id} className={classNames({ completed: item.status === 'completed' })}
                    onClick={() => handelToDoClick(item, index)}
                >
                    {item.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;