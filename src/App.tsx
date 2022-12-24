import React, {useState} from "react"
import Header from "../src/components/Header"
import InputField from "./components/InputField"
import TaskTodo from "./components/TaskTodo"
import "./App.css"
import {todoList} from "../src/model/todos"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<todoList[]>([])

  const addTodo = (e: React.FormEvent) =>{
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id:Date.now(), todos: todo, isCompleted: false}])

      setTodo("")

    }

  }

  return (
  <div className="App">
      <Header />
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TaskTodo todos={todos} setTodos={setTodos} />
      
  </div>
  );
}

export default App;