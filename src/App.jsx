import React from 'react'
import "./App.css";
import Taskinput from './Components/Taskinput';
import TaskList from './Components/TaskList';
function App() {
  return (
    <div className='main_App'>
      <h1 className='title'> To-Do Application</h1>
      <Taskinput/>
      <TaskList/>
    </div>
  )
}

export default App