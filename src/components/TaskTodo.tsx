import React from 'react'
import {todoList} from "../model/todos"
import SingleTodo from './SingleTodo'

interface Props{
    todos:  todoList[]
    setTodos: React.Dispatch<React.SetStateAction<todoList[]>>
}
const TaskTodo = ({todos, setTodos} : Props) => {
  return (
    <div className='todo'> 
      {
      todos.map((todo) => 
        <SingleTodo  todos={todos} todo={todo} key={todo.id} setTodos={setTodos} />
      )
      }
    </div>
  )
}

export default TaskTodo
