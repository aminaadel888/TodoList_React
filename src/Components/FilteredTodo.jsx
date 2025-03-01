import React, { useState }  from "react";
import TodoItem from "./TodoItem";

function FilteredTodo({todos,deleteTodo,changeComplete}){
    const [filter, setFilter] = useState("all");

    const filteredTodos = () => {
        if (filter === "inProgress") return todos.filter((todo) => !todo.completed);
        if (filter === "completed") return todos.filter((todo) => todo.completed);
        return todos;
    };


    return(
        <>
            <div className="container text-center mt-4">
       
                <div className="btn-group mb-2 mt-4 w-50 shadow">
                    <button className={`btn ${filter === "all" ? "btn-primary" : "bg-white border"}`} 
                    onClick={() => setFilter("all")}>
                    All
                    </button>
                    <button className={`btn ${filter === "inProgress" ? "btn-primary" : "bg-white border"}`} 
                    onClick={() => setFilter("inProgress")}>
                    In Progress
                    </button>
                    <button className={`btn ${filter === "completed" ? "btn-primary" : "bg-white border"}`} 
                    onClick={() => setFilter("completed")}>
                    Completed
                    </button>
                </div>

                <TodoItem todos={filteredTodos()} deleteTodo={deleteTodo} changeComplete={changeComplete}/>
            </div>
        
        </>
    )
}
export default FilteredTodo;