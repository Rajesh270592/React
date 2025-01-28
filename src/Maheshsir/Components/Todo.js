import { useState } from "react";


export const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const [edit,setEdit]=useState(null)
    const[isEdit,setIsedit]=useState("")
  
    const handleAddTask = () => {
     
        setTasks([...tasks, newTask]);
        setNewTask('');
      }
    
  
    const handleRemoveTask = (index) => {
      const updatedTasks = tasks.filter((task, i) => i !== index);
      setTasks(updatedTasks);
    };
    const handleEdit=(index)=>{
      setEdit(index)
      setIsedit(tasks[index])
    }
  
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task} 
              <button onClick={() => handleRemoveTask(index)}>Remove</button>
              <button onClick={()=>{handleEdit()}}>Edit</button>
              {/* <button onClick={()=>(e) => {setEditValue(e.target.value);}}>Save</button> */}
            </li>
          ))}
        </ul>
      </div>
    );
  };