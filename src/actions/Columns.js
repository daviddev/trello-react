import {ADD_COLUMN, ADD_TASK, CHANGE_COLUMN_TITLE, REMOVE_COLUMN, REMOVE_TASK, REPLACE_COLUMN, REPLACE_TASK} from "./types";

export const addTask = (title, description, id ) => dispatch => {
    dispatch({
        type: ADD_TASK,
        title,
        description,
        id
    })
};

export const removeColumn = (column) => dispatch => {
    dispatch({
        type: REMOVE_COLUMN,
        column
    })
};

export const removeTask = (task, column) => dispatch => {
    dispatch({
        type: REMOVE_TASK,
        task,
        column
    })
}

export const addColumn = (columnTitle) => dispatch => {
    dispatch({
        type: ADD_COLUMN,
        columnTitle
    })
}

export const replaceTask = (draggedId, droppedId, column) => dispatch => {
    dispatch({
        type: REPLACE_TASK,
        draggedId,
        droppedId,
        column
    })
}

export const replaceColumn = (draggedId, droppedId) => dispatch => {
    dispatch({
        type: REPLACE_COLUMN,
        draggedId,
        droppedId
    })
}

export const changeColumnTitle = (newTitle, column) => dispatch => {
    dispatch({
        type : CHANGE_COLUMN_TITLE,
        newTitle,
        column
    })
}