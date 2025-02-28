import React, { useState } from "react";

function TodoForm ({addTodo}){
    const [title, setTitle]= useState("")
    const [description, setDescription]=useState("")

    return (
        <>
        <div className="container d-flex align-items-center justify-content-center mt-5 " >
            <div className="w-75 p-5 border rounded shadow"> 
                <h3 className="text-center fw-bold mb-3">ToDo List</h3>
                <div>
                    <div className="mb-3">
                        <label className="fw-bold mb-2">New Task</label>
                        <input type="text" className="form-control" 
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="fw-bold mb-2">Description</label>
                        <textarea className="form-control" rows="4"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)} ></textarea>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-25"
                         onClick={() => {
                            if (!title.trim() || !description.trim()) {
                                alert("Please fill in all fields!");
                                return;
                              }
                            addTodo({ title, description });
                            setDescription("");
                            setTitle("");

                         }}>Add Task</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default TodoForm