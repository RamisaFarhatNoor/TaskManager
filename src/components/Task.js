import React from 'react';

const Task = ({task}) => {
  return (
    <li className='list-items'>
        <span>{task.title}</span>
        
            <button className='btn-delete task-btn'>
                <i className='fas fa-trash-alt'></i>

            </button>
            <button className='btn-edit task-btn'>
                <i className='fas fa-pen'></i>
               
            </button>
    </li>
  );
}

export default Task;

