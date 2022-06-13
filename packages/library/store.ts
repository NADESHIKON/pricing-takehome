import { createStore } from 'redux';
import { RANK_KEY } from './constant';
import { Actions, PayloadAction, WildcardState } from './types';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "accessibility-state",
    storage: storage
}


// The whole reason why I decided to use an object (with one K/V) instead of a single number to represent user rank is because of the potential scalability
// we might have this Redux store more user-related fields in this library, therefore an object is more scalable than a single number
export const store = createStore(persistReducer(persistConfig, (state: WildcardState, action) => { // No need for `configureStore` (well IDE reports deprecation warning here and suggests me to import another package but in this scenario it's not even necessary)
    switch (action.type) {
        case Actions.SWITCH_RANK:
            return { ...state, [RANK_KEY]: (action as PayloadAction).payload }
        case Actions.DEMOTE_RANK:
            return { ...state, [RANK_KEY]: state[RANK_KEY] - 1 }
        case Actions.PROMOTE_RANK:
            return { ...state, [RANK_KEY]: state[RANK_KEY] + 1 }
    }

    return {
        ...state,
        [RANK_KEY]: 0 // Default rank SHOULD be zero
    }
}));

export const persistor = persistStore(store);