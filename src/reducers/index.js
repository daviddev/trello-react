import { combineReducers } from 'redux'
import TasksReducer from "./Columns_reducer"

export default combineReducers ({
    tasks: TasksReducer
});
