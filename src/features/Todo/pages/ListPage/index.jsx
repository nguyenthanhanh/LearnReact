import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import useMagicColor from '../../../RandomColor';
import useClock from '../../../Clock';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';
import ToDoForm from '../../components/ToDoForm';

ListPage.propTypes = {

};

function ListPage(props) {

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
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [filterToDoList, setFilterToDoList] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const param = queryString.parse(location.search);
        setFilterToDoList(param.status || 'all');
    }, [location.search]);
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

    const handleClickShowAll = () => {
        // setFilterToDoList('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    };
    const handleClickShowCompleted = () => {
        // setFilterToDoList('completed')
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    };
    const handleClickShowNew = () => {
        // setFilterToDoList('new')
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    };
    const renderToDoList =
        // useMemo(() => {
        toDoList.filter(toDo => filterToDoList === 'all' || filterToDoList === toDo.status);
    // }, [toDoList, filterToDoList])
    const { color, count } = useMagicColor();
    const clock = useClock();
    const [reactCount, setReactCount] = useState(0);

    const handleToDoFormSubmit = (values) => {
        console.log('Form submit:', values);
    }
    return (
        <div>
            <h3 style={{ backgroundColor: color }}>Todo List</h3>
            <p>Số lần đổi màu: {count}</p>
            <p className='better-clock_time'>{clock}</p>
            <p>{reactCount}</p>
            <button onClick={() => setReactCount(x => x + 1)}> Gia Tăng</button>
            <h3>What to do of React Hook Form</h3>
            <ToDoForm onSubMit={handleToDoFormSubmit}></ToDoForm>
            <TodoList todoList={renderToDoList} onToDoClick={handleToDoClick} />
            <div>
                <button onClick={handleClickShowAll}>Show All</button>
                <button onClick={handleClickShowCompleted}>Show Completed</button>
                <button onClick={handleClickShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;