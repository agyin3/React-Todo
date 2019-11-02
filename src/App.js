import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

const data = [
  {
    id: 0,
    task: 'Homework',
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      taskName: ''
    };
  }

  handleChange = e => {
    this.setState({
        taskName: e.target.value
    })
  }

  handleSumbit = e => {
    e.preventDefault();
    console.log('render...')
    if(this.state.taskName !== ''){
        this.addTask(this.state.taskName)
        this.setState({
            taskName: ''
        })
    }
  };

  handleComplete = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(task => {
        return !task.completed
      })
    })
  }

  addTask = task => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Date.now(),
          task: task,
          completed: false
        }
      ]
    });
  }

  completeTask = taskId => {
    console.log('click')
    this.setState({
      todos: this.state.todos.map(task => {
        if(task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  searchTask = e => {
    this.setState({
      todos: this.state.todos.filter(task => {
        return task.task.toUpperCase().includes(e.target.value.toUpperCase())
      })
    })
  }


  render() {
    return (
      <div className='main-wrapper'>
        <h2>TO-DO List</h2>

        <input
          className='search' 
          type='text' 
          placeholder='Search...' 
          name='search' 
          onChange={this.searchTask}
         />

        <TodoForm
          addTask={this.addTask} 
          handleChange={this.handleChange} 
          handleSumbit={this.handleSumbit} 
          handleComplete={this.handleComplete} 
          value={this.state.taskName}
         />
        <TodoList completeTask={this.completeTask} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
