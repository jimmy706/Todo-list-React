import * as Types from "../constants/Types";

export function actChangeTheme(theme) {
    return {
        type: Types.CHANGE_THEME,
        theme
    }
}