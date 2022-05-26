import React from 'react';

const Task = () => {
  return (
    <li className='list-items'>
        <span>Task titles</span>
        <div>
            <button className='btn-delete task-btn'>
                <i className='fas fa-trash-alt'></i>

            </button>
            <button className='btn-edit task-btn'>
                <i className='fas fa-pen'></i>

            </button>
        </div>
    </li>
  );
}

export default Task;

