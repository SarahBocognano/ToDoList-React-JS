import { useState } from "react";


function AppTask (props) {
    const [mode, setMode] = useState("display")
    const [taskNewText, setTaskNewText] = useState(props.text)
    const callBackToUseToChangeItem = props.toChangeItem;

    function changeMode () {
        if (mode === "display") {
            setMode("edit")
        } else if (mode === "edit") {
            setMode("display")
        }
    }

    function userIsTappingIntoInput (e) {
        setTaskNewText(e.target.value)
    }

    function handleClick (e) {
        callBackToUseToChangeItem (taskNewText, props.id);
        setMode("display")
    }


    return (
        <div>
            {mode === "display" ? (
                <div onClick={changeMode}>
                    {props.text}
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