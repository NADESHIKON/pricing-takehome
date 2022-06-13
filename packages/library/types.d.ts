export enum Actions {
    SWITCH_RANK = "accessibility-user-rank-switch",
    PROMOTE_RANK = "accessibility-user-rank-promote",
    DEMOTE_RANK = "accessibility-user-rank-demote"
}

export type PayloadAction = { // We need to utilize ActionCreator feature provided by Redux, basically an action accepts an object literal so xdddd
    type: string,
    payload: number
}

export type WildcardState = { // A tiny "hack" to make typescript happy about my spread operator
    [key: string]: any
}
