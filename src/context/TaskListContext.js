import React, {createContext,useState} from "react";
export const TaskListContext= createContext()

const TaskListContextProvider = props =>{
    const[task,setTask] = useState([{ title: "Read the book", id: 1},
    { title: "Wash the Car", id: 2},
    { title: "Organize the closet", id: 3}]);
    return( <TaskListContext.Provider value={{task}}>
        {props.children}

    </TaskListContext.Provider>)
};

export default TaskListContextProvider;