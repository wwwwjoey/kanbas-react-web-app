import React, { useState } from "react";
const REMOTE_SERVER = 'http://localhost:10000';

export default function WorkingWithArrays() {
    
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const updateDescription = async () => {
    await fetch(`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`, {
      method: "PUT",
    });
  };

  const updateCompleted = async () => {
    await fetch(`${API}/${todo.id}/completed/${todo.completed}`, {
      method: "PUT",
    });
  };

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />
      <h3>Filtering Array Items</h3>
      <a id="wd-retrieve-completed-todos" className="btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <input id="wd-todo-id" value={todo.id} className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <hr />
      <h3>Creating new Items in an Array</h3>
      <a id="wd-create-todo" className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <hr />
      <h3>Deleting from an Array</h3>
      <a id="wd-delete-todo" className="btn btn-primary float-end" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <input value={todo.id} className="form-control w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <hr />
      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
        Update Todo
      </a>
      <input value={todo.id} className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <input value={todo.title} className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <br /><br /><hr />
      <h4>Edit Todo Description</h4>
      <input
        className="form-control w-75"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <button className="btn btn-primary mt-2" onClick={updateDescription}>
        Update Description
      </button>
      <hr />
      <h4>Edit Todo Completed Status</h4>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
      />
      <button className="btn btn-primary mt-2" onClick={updateCompleted}>
        Update Completed Status
      </button>
    </div>
  );
}
