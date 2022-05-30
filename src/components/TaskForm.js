import React,{useContext,useState,useEffect} from 'react';
import {TaskListContext}  from '../context/TaskListContext';

const TaskForm = () => {
   const{addTask, clearList,editItem,editTask}= useContext(TaskListContext);
   const[title,setTitle]= useState("");

   const handleChange = e =>{
       setTitle(e.target.value);
       console.log(title);
   };
   const handleSubmit = e =>{
       e.preventDefault();
       if(editItem==null){
        addTask(title);
        setTitle("");
       } else{
         editTask(title,editItem.id);
       }
       
   };
    useEffect(()=>{
     if (editItem!== null){
       setTitle(editItem.title);
       console.log(editItem);
     } else{
       setTitle("");
     }
   },[editItem]);
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
          <input
          onChange={handleChange}
          value={title}
          type="text"
          className="text-input"
          placeholder="Add a task"/>
          <div className='buttons'>
              <button type='submit' className='btn add-task-btn'>Add Task</button>
              <button onClick={clearList}  className='btn clear-btn'>Clear Task</button>
          </div>
      </form>

    </div>
  );
};

export default TaskForm;

