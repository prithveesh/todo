import React, { useCallback } from 'react';

function noop() { console.log('noop');}

function TaskItem(props) {

    const { text, id, theme = 'white', taskClicked = noop, styleProp = {} } = props;

    const handleClick = useCallback(() => {
        taskClicked(id);
    }, [taskClicked, id]);

    return (
        <div style={{ color: theme, ...styleProp }} onClick={handleClick}>
           {text}
        </div>
    )
}

export default TaskItem;