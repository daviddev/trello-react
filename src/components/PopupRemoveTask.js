import React from "react";
import "../styles/PopupRemoveTask.css"

function PopupRemoveTask ({ onRemoveTask, task, column, setValueRemoveTask}) {
    return (
        <div className="popupRemoveTask">
            <div className="popupRemoveTask-container">
                <div className="popupRemoveTask-body">
                    <p>Are you sure to delete this task?</p>
                    <div>
                        <button className="buttonYes"
                                onClick={(e) => {
                                    e.preventDefault()
                                    onRemoveTask(task, column)
                                }}
                        >YES</button>
                        <button className="buttonNo"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setValueRemoveTask(false)
                                }}
                        >NO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupRemoveTask