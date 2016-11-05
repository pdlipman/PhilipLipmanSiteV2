import React from 'react';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jquery';

import { TestExpandingCard as ExpandingCard } from '../../expanding_card/ExpandingCard.jsx';

describe('ExpandingCard', () => {
    document.body.innerHTML = (
        '<div ' +
        'class="container" ' +
        'style="width: 100px; height: 100px;" ' +
        '>' +
        '</div>');

    test('loads properly', () => {
        const component = TestUtils.renderIntoDocument( <ExpandingCard /> );
        expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
        expect(TestUtils.isCompositeComponentWithType(component, ExpandingCard)).toBeTruthy();

        let initialCard = TestUtils.scryRenderedDOMComponentsWithClass(component, 'card-content');

        // testing that it fills the container element
        expect(component.state.expandedWidth).toBe(100);
        expect(component.state.expandedHeight).toBe(100);

    });
});