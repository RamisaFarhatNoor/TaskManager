import React, {createContext,useState} from "react";
import {v4 as uuidv4} from 'uuid';
export const TaskListContext= createContext()

const TaskListContextProvider = props =>{
    const[task,setTask] = useState([
    { title: "Read the book", id: 1},
    { title: "Wash the Car", id: 2},
    { title: "Organize the closet", id: 3}
    ]);
    const addTask =(title)=>{
        setTask([...task, {title, id: uuidv4()}]);

    }
    return(
    <TaskListContext.Provider value={{task, addTask}}>
        {props.children}

    </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;