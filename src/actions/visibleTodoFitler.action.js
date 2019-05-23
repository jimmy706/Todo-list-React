import * as Types from "../constants/Types";

export function setVisibleFilter(value) {
    return {
        type: Types.SET_VISIBLE_FILTER,
        value
    }
}