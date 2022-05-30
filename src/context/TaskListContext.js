import React, {createContext,useState} from "react";
import {v4 as uuid} from 'uuid';
export const TaskListContext= createContext()

const TaskListContextProvider = props =>{
    const[task,setTasks] = useState([
    { title: "Read the book", id: 1},
    { title: "Wash the Car", id: 2},
    { title: "Organize the closet", id: 3}
    ]);
    const[editItem,setEditItem]=useState(null)
    const addTask =(title)=>{
        setTasks([...task, {title, id: uuid()}]);

    };
    const removeTask = id =>{
        setTasks(task.filter(task => task.id !== id));
    };
    const clearList = () =>{
        setTasks([]);
    };
    const findItem = id =>{
        const item =task.find(task_ed => task_ed.id ===id);
        setEditItem(item);
    };
    const editTask = (title,id) =>{
        const newTask = task.map(task_ed =>(task_ed.id === id ? {title,id}:task));
        setTasks(newTask);
    }
    return(
    <TaskListContext.Provider value={{task , addTask, removeTask, clearList,findItem,editItem}}>
        {props.children}

    </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;