import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

function TodoItem ({todos}){
    return(
        <>
        <div className="container flex-column d-flex align-items-center justify-content-center mt-5">
            {todos.map((todos,index)=> (
                <div key={index} className="w-75 border rounded p-4 bg-secondary-subtle d-flex justify-content-between align-items-center mb-3">
                <lable className="fw-bold fs-5">{todos.title}</lable>
                <div>
                    <input type="checkbox" className="form-check-input me-3" style={{ cursor: "pointer" , width: "20px", height: "20px"}} />
                    <FaEdit className="text-primary fs-3 mx-2" style={{ cursor: "pointer",fontSize: "24px" }} />
                    <FaTrash className="text-danger" style={{ cursor: "pointer" ,fontSize: "24px"}} />
    
                </div>
                </div>
            ))}
            

        </div>
        </>
    );
}

export default TodoItem