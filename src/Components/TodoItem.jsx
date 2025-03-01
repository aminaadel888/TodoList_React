import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

function TodoItem ({todos, deleteTodo,changeComplete}){
    const navigate = useNavigate();
    return(
        <>
        <div className="container flex-column d-flex align-items-center justify-content-center mt-5">
            {todos.map((todo,id)=>
             (
                <div key={id} className={`w-75 border rounded p-4 d-flex justify-content-between align-items-center mb-3
                 ${todo.completed ? "bg-primary-subtle" : "bg-secondary-subtle"}`}>
                    {/* <label className="fw-bold fs-5">{todo.title}</label> */}
                    {/* <Link to={`/todo-details/${id}`} className="fw-bold fs-5 text-decoration-none">{todo.title}</Link> */}
                    <h4
                    style={{ cursor: "pointer" }}   
                    onClick={() =>
                    navigate(`/todo-details/${todo.id}`, {
                    state: todo,
                    }) } >
                    {todo.title}</h4>
                    <div>
                        <input type="checkbox" className="form-check-input me-3" style={{ cursor: "pointer" , width: "20px", height: "20px"}} 
                        checked={todo.completed} 
                        onChange={() => changeComplete(todo.id)}/>
                        <FaEdit className="text-primary fs-3 mx-2" style={{ cursor: "pointer",fontSize: "24px" }} />
                        <FaTrash className="text-danger" style={{ cursor: "pointer" ,fontSize: "24px"}} onClick={()=>deleteTodo(todo.id)} />
        
                    </div>
                </div>
            ))}
            

        </div>
        </>
    );
}

export default TodoItem