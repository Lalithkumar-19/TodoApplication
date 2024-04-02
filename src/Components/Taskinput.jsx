import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import "./taskinput.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';

function Taskinput() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.todos);
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    dispatch({ type: "Add_todo", payload: { data: todo, finished: false, id: data.length } });
    setTodo("");
  }
  
  return (
    <div className='taskinput'>
      <TextField fullWidth label="Write a todo ...." sx={{ width: "400px", borderRight: "none" }} value={todo} onChange={(e) => setTodo(e.target.value)} />
      <Button variant="contained" sx={{ width: "200px", height: "56px", marginLeft: "1px", borderRadius: "10px" }} endIcon={<SendIcon />} disabled={todo ? false : true} onClick={handleAddTodo}>
        Add Todo
      </Button>
    </div>
  )
}

export default Taskinput