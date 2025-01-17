import React, { useState } from "react";
import ToDoItems from "./components/ToDoItems";
import InputArea from "./components/InputArea";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(inputText) {
    setTasks((prevTask) => {
      return [...prevTask, inputText]
    })
  }

  function deleteTask(id) {
    setTasks(prevTask => {
      return prevTask.filter((task, index) => {
        return (index !== id);
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addTask}
      />
      <div>
        <ul>
          {tasks.map((toDoTasks, index) =>
            <ToDoItems
              key={index}
              id={index}
              text={toDoTasks}
              onChecked={deleteTask}
            />
          )}

        </ul>
      </div>
    </div>
  );
}

export default App;
