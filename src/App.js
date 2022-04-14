import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {  connect } from "react-redux";
import { addTask, removeColumn, removeTask, addColumn, replaceTask, replaceColumn, changeColumnTitle } from "./actions/Columns";
import AddColumn from "./components/AddColumns";
import Columns from "./components/Columns";
import "./styles/App.css"


function App ( {columns, addTask, removeColumn, removeTask, addColumn, replaceTask, replaceColumn, changeColumnTitle}) {
    
    return (
      <DndProvider backend={HTML5Backend}>
        <div id="Columns">
        <AddColumn onAddColumn={ (columnTitle) => addColumn(columnTitle) }/>
        <Columns  columns={ columns } 
                  onAddTask={(title, description, id)=> addTask(title, description, id) }
                  onRemoveColumn={ (column) => removeColumn(column) }
                  onRemoveTask={ (task, column) => removeTask(task, column) }
                  onReplaceTask={ (draggedId, droppedId, column) => replaceTask(draggedId, droppedId, column) }
                  onReplaceColumn={ (draggedId, droppedId) => replaceColumn(draggedId, droppedId) }
                  onChangeTitleColumn={(newTitle, column) => changeColumnTitle(newTitle, column)}
        />
      </div>
      </DndProvider>
      
    )
  
}

const mapStateToProps = state => {
  return { columns: state.tasks.columns };
};



export default connect(
  mapStateToProps, 
  {
    addTask, 
    removeTask,
    removeColumn,
    addColumn,
    replaceTask,
    replaceColumn,
    changeColumnTitle
  }
)(App);
