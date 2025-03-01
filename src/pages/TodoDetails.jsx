import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TodoDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const todo = location.state; 
  return (
    <div className={`container d-flex align-items-center justify-content-center mt-5
        `}>
      {todo ? (
        <>
        <div className={`border shadow w-50 p-4 ${todo.completed ? "bg-primary-subtle" : "bg-secondary-subtle"}`}>
          <h2 className="text-center text-primary">{todo.title}</h2>
          <p className="lead">{todo.description}</p>
          <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>back
          </button>
          </div>
        </>
      ) : (
        <h3 className="text-danger">Not Found!</h3>
      )}
    </div>
  );
}

export default TodoDetails;