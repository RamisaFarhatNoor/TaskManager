import React, {createContext,useState} from "react";
export const TaskListContext= createContext()

const TaskListContextProvider = props =>{
    const[tasks,setTask] = useState([{ task: "Read the book", id: 1},
    { task: "Wash the Car", id: 2},
    { task: "Organize the closet", id: 3}]);
    return( <TaskListContext.Provider value={{tasks}}>
        {props.children}

    </TaskListContext.Provider>)
};

export default TaskListContextProvider;