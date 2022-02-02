import AppTask from './App-Task';
import {useState} from "react";

function AppList (props) {
    const list = props.listItems
    

    return (
        <div className="newTaskUl">
            <h2>To Do Tasks</h2>
            <ul className="myUlNewTask">
                {list.map((item) => <li key={item.text}><AppTask text={item.text}></AppTask></li>)}
            </ul>
        </div>
    )
}



export default AppList;