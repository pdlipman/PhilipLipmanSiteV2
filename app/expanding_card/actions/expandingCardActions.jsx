export const EXPANDING_CARD_TEST = 'EXPANDING_CARD_TEST';
export const EXPAND_CARD = 'EXPAND_CARD';
export const ADD_CARD = 'ADD_CARD';

export function expandingCardTest(card) {
    return {
        type: EXPANDING_CARD_TEST,
        card,
    };
}

export function addCard(id) {
    return {
        type: ADD_CARD,
        id,
        expanded: false,
    };
}

export function expandCard(id) {
    return {
        type: EXPAND_CARD,
        id,
    };
}