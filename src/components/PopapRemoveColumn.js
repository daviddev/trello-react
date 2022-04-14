import React from "react";
import "../styles/PopupRemoveColumn.css"

function PopupRemoveColumn ({ setValueRemoveColumn, column, onRemoveColumn }) {
    return (
        <div className="popupRemoveColumn">
            <div className="popupRemoveColumn-container">
                <div className="popupRemoveColumn-body">
                    
                    <p>Are you sure to delete this column?</p>
                    <div>
                        <button className="buttonYes"
                            onClick={() => {
                                onRemoveColumn(column)
                            }}
                        >YES</button>
                        <button className="buttonNo"
                            onClick={() => {
                                setValueRemoveColumn(false)
                            }}
                        >NO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupRemoveColumn 