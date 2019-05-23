import { SHOW_ALL } from "../constants/visibleState";
import * as Types from "../constants/Types";

export default function visibleTodoListReducer(state = SHOW_ALL, action) {
    switch (action.type) {
        case Types.SET_VISIBLE_FILTER:
            state = action.value;
            return state;
        default:
            return state;
    }
}