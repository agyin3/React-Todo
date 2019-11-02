import React from 'react';

const TodoForm = props => {

    return(
        <div>
            <form>
                <input
                    className='input' 
                    type='text' 
                    name='task' 
                    value={props.value} 
                    placeholder='Enter Task Here'
                    onChange={props.handleChange}
                />
                <button className='buttons' onClick={props.handleSumbit}>Submit</button>
                <button className='buttons' onClick={props.handleComplete}>Clear Complete</button>
            </form>
        </div>
        )
}

export default TodoForm