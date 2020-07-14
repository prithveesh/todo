import React, { Component, useEffect, useState, useCallback } from 'react';
import TaskItem from '../TaskItem/TaskItem';

const getData = async () => {
    const listOfApisResponse = await fetch("https://swapi.dev/api/");
    // listOfApisResponse
    // .then((response) => {
    //     console.log("response", response);
    //     const jsonPromise = response.json();
    //     return jsonPromise;
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
    console.log("promise", listOfApisResponse);
    const listOfApis = await listOfApisResponse.json();
    console.log(listOfApis);
    setTimeout(() => {
        console.log('timeout');
    });
    const filmsPromise = await fetch(listOfApis.films);
    const films = await filmsPromise.json();
    console.log(films);
};


function TaskList(props) {
    const [activated, setActivated] = useState(1);

    const initiateData = useCallback(async () => {
        await getData();
        console.log("Data Fetched");
    }, []); // <- either values which getting retrieved from props, or a state value, or a function created through useCallback/useMemo

    useEffect(() => {
        // this is equivalent to did mount
        // initiateData();
        console.log('did mount');
    }, [initiateData]);

    useEffect(() => {
        initiateData();
        console.log(activated);
    }, [initiateData, activated]);

    const activateTask = useCallback((id) => {
        setActivated(id);
    }, []);

    const handleClick = useCallback((event) => {
        console.log(event);
    }, []);

    const { title, theme } = props;
    return (
        <div>
            <div onClick={handleClick}>{title}</div>
            <div>
                <TaskItem id={1} taskClicked={activateTask} theme={activated === 1 ? theme : 'white'} />
                <TaskItem id={2} taskClicked={activateTask} theme={activated === 2 ? theme : 'white'} />
                <TaskItem id={3} taskClicked={activateTask} theme={activated === 3 ? theme : 'white'} />
                <TaskItem id={4} taskClicked={activateTask} theme={activated === 4 ? theme : 'white'} />
                <TaskItem id={5} taskClicked={activateTask} theme={activated === 5 ? theme : 'white'} />
            </div>
        </div>
    )
}

export default TaskList;