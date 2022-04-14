import { ADD_COLUMN, ADD_TASK, REMOVE_COLUMN, REMOVE_TASK, REPLACE_TASK, REPLACE_COLUMN, CHANGE_COLUMN_TITLE } from "../actions/types"

const initialState =  {
    columns: [ 
        {
            title: "TO DO",
            id: Math.random(),
            tasks: []
        },
        {
            title: "In Progress",
            id: Math.random(),
            tasks: []
        },
        {
            title: "Ready",
            id: Math.random(),
            tasks: []
        },
        {
            title: "Ready To Publish",
            id: Math.random(),
            tasks: []
        },
        {
            title: "Published",
            id: Math.random(),
            tasks: []
        }
    ]
}



export default (state = initialState, action) => {

    switch(action.type) {
        case ADD_TASK:
            return { 
                ...state, 
                columns: state.columns.map(column => {
                    if (column.id === action.id) {
                        let last_id = column.tasks.length > 0 ? column.tasks[column.tasks.length - 1].id : 0;

                        let date = new Date()
                        let formatter = new Intl.DateTimeFormat("en", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })

                        return {...column, tasks: [...column.tasks, {
                            id: last_id + 1, 
                            title: action.title, 
                            description: action.description,
                            date: formatter.format(date)
                        }]}
                    }
                    return column
                }) 
            }

        case REMOVE_COLUMN:
            return {
                ...state,
                columns: state.columns.filter((column) => {
                    return column.id !== action.column.id
                })
            }

        case REMOVE_TASK: 
        
            return {
                ...state,
                columns: state.columns.map( (column) => {
                        if(column.id === action.column.id) {
                            return {
                                ...column,
                                tasks: column.tasks.filter((task) => {
                                    return task.id !== action.task.id
                                })
                            }
                        }else{
                            return column
                        }
                    }
                )
            }
               
            case ADD_COLUMN:
                return {
                    ...state,
                    columns: [
                        ...state.columns,
                        {
                            title: action.columnTitle,
                            id: Math.random(),
                            tasks: []
                        }
                    ]
                }
            case REPLACE_TASK: 
                return { 
                    ...state, 
                    columns: state.columns.map(column => {
                        if (column.id === action.column.id) {
                            let dragged = column.tasks.filter((task) => task.id === action.draggedId)[0];
                            let passed = false;
                            let _passed = false;
                            return {
                                ...column,
                                tasks: column.tasks.map((task, index, tasks) => {
                                    if (task.id === action.draggedId) {
                                        if (_passed !== true) {
                                            passed = true;
                                        } else {
                                            _passed = false;
                                            return tasks[index - 1];
                                        }
                                    }
                                    if (task.id === action.droppedId) {
                                        if (passed !== true) {
                                            _passed = true;
                                        }
                                        passed = false;
                                        return dragged;
                                    }
                                    if (index > 0 && _passed) {
                                        return tasks[index - 1];
                                    }
                                    if (index < tasks.length - 1 && passed) {
                                        return tasks[index + 1];
                                    }
                                    return task;
                                })
                            }
                        }
                        return column
                    }) 
                }
            case REPLACE_COLUMN:
                let dragged = state.columns.filter((column) => column.id === action.draggedId)[0];
                let passed = false;
                let _passed = false;
                return {
                    ...state,
                    columns: state.columns.map( (column, index, columns) => {
                        if (column.id === action.draggedId) {
                            if (_passed !== true) {
                                passed = true;
                            } else {
                                _passed = false;
                                return columns[index - 1];
                            }
                        }
                        if (column.id === action.droppedId) {
                            if (passed !== true) {
                                _passed = true;
                            }
                            passed = false;
                            return dragged;
                        }
                        if (index > 0 && _passed) {
                            return columns[index - 1];
                        }
                        if (index < columns.length - 1 && passed) {
                            return columns[index + 1];
                        }
                        return column;
                    })
                }   

            case CHANGE_COLUMN_TITLE:
                return {
                    ...state,
                    columns: state.columns.map((column) => {
                        if(column.id === action.column.id){
                            return {
                                ...column,
                                title: action.newTitle
                            }
                        }else{
                            return column
                        }
                    })
                }
        default:
            return state;
    }
}
