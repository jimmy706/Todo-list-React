import * as Types from "../constants/Types";

export function actAddItem(item) {
    return {
        type: Types.ADD_ITEM,
        item
    }
}

export function actChangeItemContent(content, itemId) {
    return {
        type: Types.CHANGE_ITEM_CONTENT,
        content, itemId
    }
}

export function actDeleteItem(itemId) {
    return {
        type: Types.DELETE_ITEM,
        itemId
    }
}

export function actToggleCompleteJob(itemId) {
    return {
        type: Types.TOGGLE_COMPLETE,
        itemId
    }
}
