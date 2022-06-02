import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import useMagicColor from '../RandomColor';
import useClock from '../Clock';

TodoFeature.propTypes = {

};

function TodoFeature(props) {

    const toDo = [
        {
            id: 1,
            title: 'Dog',
            status: 'completed'
        },
        {
            id: 2,
            title: 'Cat',
            status: 'new'
        },
        {
            id: 3,
            title: 'Mouse',
            status: 'new'
        },
        {
            id: 4,
            title: 'Duck',
            status: 'new'
        }
    ];
    const [filterToDoList, setFilterToDoList] = useState('all');
    const [toDoList, setToDoList] = useState(toDo);
    const handleToDoClick = (toDo, index) => {
        // clone current array to the new one
        const newToDoList = [...toDoList];

        //toggle state
        newToDoList[index] = {
            ...newToDoList[index],
            status: newToDoList[index].status === 'new' ? 'completed' : 'new'
        };
        console.log(toDo, index);
        setToDoList(newToDoList);
    };

    const handleClickShowAll = () => { setFilterToDoList('all') };
    const handleClickShowCompleted = () => { setFilterToDoList('completed') };
    const handleClickShowNew = () => { setFilterToDoList('new') };
    const renderToDoList = toDoList.filter(toDo => filterToDoList === 'all' || filterToDoList === toDo.status);
    const { color, count } = useMagicColor();
    const clock = useClock();
    const [reactCount, setReactCount] = useState(0);
    return (
        <div>
            <h3 style={{ backgroundColor: color }}>Todo List</h3>
            <p>Số lần đổi màu: {count}</p>
            <p className='better-clock_time'>{clock}</p>
            <p>{reactCount}</p>
            <button onClick={() => setReactCount(x => x + 1)}> Gia Tăng</button>
            <TodoList todoList={renderToDoList} onToDoClick={handleToDoClick} />
            <button onClick={handleClickShowAll}>Show All</button>
            <button onClick={handleClickShowCompleted}>Show Completed</button>
            <button onClick={handleClickShowNew}>Show New</button>
        </div>
    );
}

export default TodoFeature;