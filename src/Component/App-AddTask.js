import {useState} from "react";

function AppAddTask (props) {
    const [task, setTask] = useState({text:""})
    
    const handleChange = e => {
        setTask({text: e.target.value})
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