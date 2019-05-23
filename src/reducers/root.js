import { combineReducers } from "redux";
import todoList from "./todoList.reducer";
import visibleTodoListFilter from "./visibleTodoFilter.reducer";
import visibleTheme from "./visibleTheme.reducer";
const rootReducer = combineReducers({ todoList, visibleTodoListFilter, visibleTheme });
export default rootReducer;