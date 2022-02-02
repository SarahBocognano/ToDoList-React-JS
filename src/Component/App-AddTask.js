import {useState} from "react";

function AppAddTask (props) {
    const [task, setTask] = useState({text:"", id: Date.now()})
    
    const handleChange = e => {
        setTask({text: e.target.value, id: Date.now()})
    }
    const handleAdd = e => {
        if (task.text  !== "") {
            props.onTask(task)
            setTask({text:""})
        }
    }

    return (
        <div className="main">
            <div className="firstInput">
            <input type="text" className="input1" placeholder="Create a new task" value={task.text} onChange={handleChange} />
            </div>
            <div className="firstButtonAdd">
                <button className="Btn" onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default AppAddTask