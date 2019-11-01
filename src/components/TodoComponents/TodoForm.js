import React from 'react';

const TodoForm = props => {

    return(
        <div>
            <form>
                <input type='text' name='task' onChange={props.handleChange}/>
                <button onClick={props.handleSumbit}>Submit</button>
                <button onClick={props.handleComplete}>Clear Complete</button>
            </form>
        </div>
        )
}

export default TodoForm