import { store } from './store';
import { Actions, PayloadAction } from './types';
import { RANK_KEY } from './constant';

export function change(rank: number) {
    store.dispatch(<PayloadAction>{
        type: Actions.SWITCH_RANK,
        payload: rank
    })
}

export function promote() {
    store.dispatch({
        type: Actions.PROMOTE_RANK
    })
}

export function demote() {
    store.dispatch({
        type: Actions.DEMOTE_RANK
    })
}

export function has(rank: number) {
    return store.getState()[RANK_KEY] >= rank;
}