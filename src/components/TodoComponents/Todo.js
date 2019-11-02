import React from 'react';

const Todo = props => {

    const handleClick = () => {
        props.complete(props.todo.id)
    }

    return(
        <div>
            <div className='todo' onClick={handleClick}>
                <p className={'task ' + (props.todo.completed ? 'completed' : '')}>{props.todo.task}</p>
            </div>
        </div>
    )
}

export default Todo