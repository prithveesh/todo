import React, { Component, useEffect, useState, useCallback, useContext } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { Context } from '../../store';

function TaskList(props) {
    const { state, dispatch } = useContext(Context);
    const { list } = state;

    const { title, theme } = props;
    const [activated, setActivated] = useState(0);

    const activateTask = useCallback((id) => {
        // setActivated(id);
        console.log(id);
        dispatch({ type: 'REMOVE_TASK', payload: id});
    }, [dispatch]);

    return (
        <div>
            <div>{title}</div>
            <div>
                { list.map((item, index) => <TaskItem text={item} id={index} taskClicked={activateTask} theme={activated === index ? theme : 'white'} />)}
            </div>
        </div>
    )
}

export default TaskList;