
import './App.css';
import './Component/App-Header.css';
import './Component/App-AddTask.css';
import './Component/App-List.css';
import AppHeader from './Component/App-Header';
import AppAddTask from './Component/App-AddTask';
import { useState } from 'react'
import AppList from './Component/App-List';
import AppTask from './Component/App-Task';

const localStorageKey = "@maListe";

function App() {
  const [nameTask, setnameTask] = useState("");
  const [listTask, setlistTask] = useState (JSON.parse(localStorage.getItem(localStorageKey) ?? "[]"));
    
  function handleClick(newTask) {
    let newTaskList = [...listTask,newTask];
    setlistTask(newTaskList);
    localStorage.setItem(localStorageKey, JSON.stringify(newTaskList));
  }

  return (
    <div>
      <AppHeader />
      <AppAddTask onTask={handleClick}>

      </AppAddTask>
      <AppList listItems={listTask}/>
    </div>
  );
}

export default App;
