import React from 'react';

const Todo = props => {

    const handleClick = () => {
        props.complete(props.todo.id)
    }

    return(
        <div>
            <div onClick={handleClick}>
                <p>{props.todo.task}</p>
            </div>
        </div>
    )
}

export default Todo