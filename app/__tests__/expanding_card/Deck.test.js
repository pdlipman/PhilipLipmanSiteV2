import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { Deck } from '../../expanding_card/Deck.jsx';

describe('Deck', () => {
    test('loads properly', () => {
        const component = TestUtils.renderIntoDocument( <Deck /> );

        expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
        expect(TestUtils.isCompositeComponentWithType(component, Deck)).toBeTruthy();

    });
});