import React from 'react'
import {useSelector } from 'react-redux'
import "./tasklist.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { handleFinishedTodo, handleRemoveTodo } from '../Redux/actions';


function TaskList() {

  const data = useSelector(state => state.todos);

  return (
    <div className='tasklist'>

      {Array.isArray(data) && data.map((item, i) => {
        return (
          <li className='taskItem' key={i}>
            <input type='checkbox' className='finished_checkbox' checked={item.finished} onChange={() => handleFinishedTodo(item.id)} value={item.finished} />
            <p className='todo_data' style={{ textDecoration: item.finished ? "line-through" : "", color: item.finished ? "red" : "" ,textOverflow:"ellipsis",wordSpacing:"none"}}> {item.data}</p>
            <DeleteIcon className='delete_icon' onClick={() => { handleRemoveTodo(item.id) }} />
          </li>
        )
      })}

      
      {
        Array.isArray(data) && data.length === 0 && <h1 className='empty_todos'>Add todos to manage </h1>
      }

    </div>
  )
}

export default TaskList