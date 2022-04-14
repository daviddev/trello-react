import React from "react";
import ColumnTask from "./ColumnTask";
import ColumnTitle from "./ColumnTitle";
import "../styles/Columns.css"
import { useDrag, useDrop } from "react-dnd";

function Column ( { column, onAddTask, onRemoveColumn, onRemoveTask, onReplaceTask, onReplaceColumn, onChangeTitleColumn} ) {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "column",
        drop: (item) => replace(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));
    
      const replace = (id) => {
          onReplaceColumn(id, column.id)
      };

      const [{ isDragging }, drag] = useDrag(() => ({
        type: "column",
        item: { id: column.id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));

    return (
        <div ref={drop}>
            <div className="Column" ref={drag}>
                <ColumnTitle  column={column} 
                              onAddTask={ onAddTask } 
                              onRemoveColumn={onRemoveColumn} 
                              onChangeTitleColumn={onChangeTitleColumn}
                />
                {column.tasks.map( (task) => {
                    return (
                        <ColumnTask key={task.id} 
                                    task={task} 
                                    column={column} 
                                    onRemoveTask={onRemoveTask} 
                                    onReplaceTask={onReplaceTask}
                        />
                    )
                })}
            </div>
        </div>
        
    )
}

export default Column