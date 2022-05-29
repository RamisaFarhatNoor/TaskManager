import React from 'react';

const TaskForm = () => {
  return (
    <div>
      <form action='' className='form'>
          <input type="text "
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

