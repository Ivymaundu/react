import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function TodoList() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<{ id: number; text: string, done: boolean }[]>([])


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: value, done: false }]);
      setValue("");
    }
  };

  const handleCheckbox = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    }));
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));

  }
  console.log(todos)
  return (
    <div className='container-fluid'>
      <form className="form-layout" onSubmit={handleSubmit}>
        <label htmlFor="special-input" className='form-label'>Add activity</label><br></br>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required id="special-input" className="form-input" /><br />
        <button className="add-button">Add activity</button>
      </form>
      <h1 className="to-do-header">My to-do list </h1>
      <ul className="to-do-list" style={{ listStyle: 'none', padding: 0 , marginTop: '5px'}}>
        {todos.length == 0 && " You have no Todos"}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label >
              <input type="checkbox"
                checked={todo.done}
                onChange={() => handleCheckbox(todo.id)} />
             <span style={{ marginLeft: '5px' }}>{todo.text} </span>
            </label>
            <button className="delete-activity" onClick={() => handleDelete(todo.id)}> Delete </button>

          </li>
        ))}
      </ul>

    </div>
    );
    
}