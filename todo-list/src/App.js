import React, { useState } from 'react';

function App() {
  // Define state variables
  const [tasks, setTasks] = useState([]); // List of tasks
  const [inputValue, setInputValue] = useState(''); // Input value for adding new tasks
  const [doneCount, setDoneCount] = useState(0); // Count of completed tasks

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding a new task
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  // Handle toggling a task's completion status
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

  // Handle deleting a task
  const handleDeleteTask = (taskId) => {
    const deletedTask = tasks.find((task) => task.id === taskId);
    if (deletedTask.completed) {
      setDoneCount(doneCount - 1);
    }
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='App'>
      {/* Heading */}
      <h1 style={{ borderBottom: '1px solid #ccc', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>THINGS TO DO:</h1>

      {/* Display the list of tasks */}
      {tasks.map((task) => (
        <li key={task.id} style={{ display: 'flex', alignItems: 'center', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '25px', paddingRight: '25px' }}>
          <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(task.id)} />
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              flex: 1, marginRight: '10px'
            }}>{task.text}
          </span>
          <button style={{ borderColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'end' }}
            onClick={() => handleDeleteTask(task.id)}>x</button>
        </li>
      ))}

      {/* Display the count of completed tasks */}
      <p style={{ fontWeight: 'bold', borderTop: '1px solid #ccc', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>DONE: {doneCount}</p>

      {/* Add new task form */}
      <div className='addTask'>
        <input id='inputTask' type="text" placeholder='   Enter new task' value={inputValue} onChange={handleInputChange} />
        <button id='addButton' onClick={handleAddTask}>ADD TASK</button>
      </div>
    </div>
  );
}

export default App;
