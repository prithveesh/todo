import React from 'react';

function noop() { console.log('noop');}

function TaskItem(props) {

    const { id, theme = 'white', taskClicked = noop, styleProp = {} } = props;

    const handleClick = () => {
        taskClicked(id);
    }

    return (
        <div style={{ color: theme, ...styleProp }} onClick={handleClick}>
            Task Item Component {id}
        </div>
    )
}

export default TaskItem;