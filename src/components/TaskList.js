import React, {useContext} from 'react'
import  {TaskListContext}  from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const{task}=useContext(TaskListContext);
  return (
    <div>
      <ul className='list'>
          {task.map(task=>{ return <Task task={task} key={task.id}/>;
          })} </ul>
      
    </div>
  );
}

export default TaskList;
