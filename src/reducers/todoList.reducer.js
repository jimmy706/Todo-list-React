import * as Types from "../constants/Types";

export default function todoListReducer(state = [], action) {
    switch (action.type) {
        case Types.ADD_ITEM:
            return [action.item, ...state];
        case Types.TOGGLE_COMPLETE:
            return state.map((todo) => {
                if (todo.itemId === action.itemId) {
                    return Object.assign({}, todo, {
                        isFinished: !todo.isFinished
                    })
                }
                return todo;
            })
        case Types.CHANGE_ITEM_CONTENT:
            return state.map((todo) => {
                if (todo.itemId === action.itemId) {
                    return Object.assign({}, todo, { content: action.content })
                }
                return todo;
            });
        case Types.DELETE_ITEM:
            return state.filter(todo => todo.itemId !== action.itemId);
        default:
            return state;
    }
}