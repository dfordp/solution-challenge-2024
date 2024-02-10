import React, { useState } from 'react';

export const Todoform = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [plantName, setPlantName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(task, plantName);
    setTask("");
    setPlantName("");
  }

  return (
    <form className='Todoform' onSubmit={handleSubmit}>
      <input
        type="text"
        required
        autoComplete="off"
        placeholder="Your Task"
        className="input-todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        id="todoInput"
      />
      <input
        type="text"
        required
        autoComplete="off"
        placeholder="Plant Name"
        className="input-todo"
        value={plantName}
        onChange={(e) => setPlantName(e.target.value)}
        id="plantInput"
      />
      <button type='submit' className='input-todo-button'>Add Task</button>
    </form>
  )
}
