import { useState } from "react";


function AppTask (props) {
    const [mode, setMode] = useState("affichage")
    const [taskNewText, setTaskNewText] = useState(props.text)

    function changeMode () {
        if (mode === "affichage") {
            setMode("edit")
        } else if (mode === "edit") {
            setMode("affichage")
        }
    }

    function userIsTappingIntoInput (e) {
        setTaskNewText(e.target.value)
    }

    function handleClick (e) {
        setMode("affichage")
    }

    
    return (
        <div>
            {mode === "affichage" ? (
                <div onClick={changeMode}>
                    {taskNewText}
                </div>
            ): ( 
                <div>
                    <input type="text" value={taskNewText} onChange={userIsTappingIntoInput} />
                    <button onClick={handleClick}>Edit</button>
                    
                </div>
            )}
            
        </div>
    )


    
    
}



export default AppTask;