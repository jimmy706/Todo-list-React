import * as Types from "../constants/Types";

export default function visibleThemeReducer(state = "light", action) {
    switch (action.type) {
        case Types.CHANGE_THEME:
            state = action.theme;
            return state;
        default:
            return state;
    }
}