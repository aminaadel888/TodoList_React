import {React, useState , useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from '../Components/TodoForm'
import FilteredTodo from '../Components/FilteredTodo'

function Home() {
    const [todos, setTodos] = useState(()=>{
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
      });
// load data from local storage
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
      }, []);
// save data in local storage
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);

    const addTodo=(task)=> {
      setTodos([...todos, { ...task, completed: false ,id:Date.now()}])
    }
  
    const deleteTodo=(id)=>{
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
  
    }
  
    const changeComplete =(id) =>{
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  
    return (
      <>
        <TodoForm addTodo={addTodo}/>
        <FilteredTodo todos={todos} deleteTodo={deleteTodo} changeComplete={changeComplete}/>
      </>
    )
  }
  export default Home
  