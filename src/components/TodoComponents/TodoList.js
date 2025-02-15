// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'; 
import Todo from './Todo';

const TodoList = props => {

    return(
        <div className='todo-wrapper'>
            {(props.todos.length > 0) && props.todos.map(todo => {
                return(<Todo complete={props.completeTask} key={todo.id} todo={todo} />);
            })}
        </div>
    )
}

export default TodoList
