import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, setTodos] = useState([{
    title:"Playing Football",
    description:"go to play",
  }
  ])
  const addTodo=(task)=> {
    setTodos([...todos,task])
  }

  return (
    <>
      <TodoForm addTodo={addTodo}/>
      <TodoItem todos={todos} />
    </>
  )
}
export default App
