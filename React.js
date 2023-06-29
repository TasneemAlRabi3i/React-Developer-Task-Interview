import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [doneCount, setDoneCount] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        const updatedTask = {
          ...task,
          completed: !task.completed
        };
        if (updatedTask.completed) {
          setDoneCount(doneCount + 1);
        } else {
          setDoneCount(doneCount - 1);
        }
        return updatedTask;
      }
      return task;
    }));
  };

  const handleDeleteTask = (taskId) => {
    const deletedTask = tasks.find(task => task.id === taskId);
    if (deletedTask.completed) {
      setDoneCount(doneCount - 1);
    }
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <p>Done: {doneCount}</p>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
