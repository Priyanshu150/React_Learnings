import React, { useState } from "react";
import ToDoItems from "./components/ToDoItems";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addTask() {
    setTasks((prevTask) => {
      return [inputText, ...prevTask]
    })
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* {tasks.map(toToTask => {
                    return <li> {toToTask} </li>
                })}  */}
          {/* or */}
          {tasks.map(toDoTasks =>
            <ToDoItems text={toDoTasks} />
          )}

        </ul>
      </div>
    </div>
  );
}

export default App;
