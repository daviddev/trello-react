import React, { useState } from "react";
import "../styles/ColumnTitle.css"
import PopupRemoveColumn from "./PopapRemoveColumn";
import PopupAddColumn from "./PopupAddTask";

function ColumnTitle ( {column, onAddTask, onRemoveColumn, onChangeTitleColumn} ) {

    const [ valueAddColumn, setValueAddColumn ] = useState(false)
    const [ valueRemoveColumn, setValueRemoveColumn ] = useState(false)
    const [changeTitle, setChangeTitle] = useState(false)
    const [newTitle, setNewTitle] = useState(column.title)
    return (
        <div >
            {changeTitle ? 
                <form className="taskTitle"
                    onSubmit={(e) => {
                        e.preventDefault()
                        onChangeTitleColumn(newTitle, column)
                        setChangeTitle(false)
                    }}
                >
                    <input  type="text" 
                            className="inputChangeTitle"
                            value={newTitle}
                            onChange={(e) =>{
                                setNewTitle(e.target.value)
                            }}
                    />
                    <button className="buttonChange"><i class="fa fa-pencil"></i></button>
                </form> 
                    : 
                <div className="taskTitle">
                    <h3>{column.title}</h3>
                    <div></div>
                    {valueAddColumn ? <PopupAddColumn onAddTask={onAddTask} setValueAddColumn={setValueAddColumn} id={column.id}/> : null}
                    <button onClick={() => {
                                setChangeTitle(true)
                            }}   
                    ><i class="fa fa-pencil"></i></button>
                    <button className="buttonAdd" 
                            onClick={() => {
                                setValueAddColumn(true)
                            }}
                    >Add task</button>
                    {valueRemoveColumn ? <PopupRemoveColumn column={column} onRemoveColumn={onRemoveColumn} setValueRemoveColumn={setValueRemoveColumn}/> : null}
                    <a className="buttonRemove"
                            onClick={() => {
                                setValueRemoveColumn(true)
                            }}
                    ><i className="fa fa-trash"></i></a>
                </div>}
            
        </div>
    )
}

export default ColumnTitle