import {
    EXPANDING_CARD_TEST,
    ADD_CARD,
    EXPAND_CARD,
} from '../actions/expandingCardActions.jsx';

const card = (state = {}, action) => {
    switch (action.type) {
        case ADD_CARD: {
            return {
                id: action.id,
                expanded: false,
            };
        }
        case EXPAND_CARD: {
            if (state.id != action.id) {
                return state;
            }

            return Object.assign({}, state, {
                expanded: !state.expanded,
            });
        }
        default: {
            return state;
        }
    }
};

const initialState = [{ id: 1, expanded: false }, { id: 2, expanded: false }];
export const deck = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD: {
            console.log(action);

            return [
                ...state,
                card(undefined, action)
            ];
        }
        case EXPAND_CARD: {
            const newState = state.map(c => {
                return card(c, action);
            });
            return newState;
        }
        default: {
            return state;
        }
    }
};