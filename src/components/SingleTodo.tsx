import React from 'react'
import {todoList} from "../model/todos"

interface Props{
    todo: todoList
    todos:  todoList[]
    setTodos: React.Dispatch<React.SetStateAction<todoList[]>>
}

const SingleTodo:React.FC<Props> = ({todos, todo, setTodos}) => {
  return (
    <form action="" className='todo_single'>
        <span className='todos_single--text'>{todo.todos}</span>
        <div>
            <div></div>
        {/* <span className="icon" >
              <AiFillEdit />
        </span>
        <span className="icon" >
              <AiFillDelete />
        </span>
        <span className="icon" >
              <MdDone />
        </span> */}
        </div>
    </form>
  )
}

export default SingleTodo
