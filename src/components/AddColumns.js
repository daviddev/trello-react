import React, { useState } from "react";
import "../styles/AddColumn.css"

function AddColumn ( {onAddColumn} ) {
    const [columnTitle, setColumnTitle] = useState("")

    return (
        <>
            <h2>ADD COLUMN</h2>
            <div className="AddColumnDiv">
                
                <form className="AddColumnForm"
                    onSubmit={(e) => {
                        e.preventDefault() 
                        if(columnTitle.length > 0){
                            onAddColumn(columnTitle)
                            setColumnTitle("")
                        }
                    }}
                >
                    <input type="text" placeholder="COLUMN TITLE"
                        value={columnTitle} 
                        onChange={(e) => {
                            e.preventDefault() 
                            setColumnTitle(e.target.value)
                        }}
                    />
                    <button>Add column</button>
                </form>
            </div>
        </>
        
        
    )
}

export default AddColumn