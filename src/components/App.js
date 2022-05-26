import React from 'react';
import TaskList from './TaskList'
import TaskListContextProvider from '../context/TaskListContext'
import "../App.css";


function App() {
    
    return (
        <TaskListContextProvider>
        <div>
            <TaskList />
        </div>
        </TaskListContextProvider>
    );
};

export default App;
