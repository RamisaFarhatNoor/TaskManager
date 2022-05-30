import React,{useContext,useState} from 'react';
import TaskListContext  from '../context/TaskListContext';

const TaskForm = () => {
   const{addTask}= useContext(TaskListContext);
   const[title,setTitle]= useState("");
   const handleChange = e =>{
       setTitle(e.target.value);
       console.log(title);
   };
   const handleSubmit = e =>{
       e.preventDefault();
       addTask(title)
   };
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
          <input
          onChange={handleChange}
          value={addTask}
          type="text"
          className="text-input"
          placeholder="Add a task"/>
          <div className='buttons'>
              <button type='submit' className='btn add-task-btn'>Add Task</button>
              <button type='submit' className='btn clear-btn'>Clear Task</button>
          </div>
      </form>

    </div>
  );
}

export default TaskForm;

