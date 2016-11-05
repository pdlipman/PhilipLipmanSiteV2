import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    addCard,
} from './actions/expandingCardActions.jsx';

import ExpandingCard from './ExpandingCard.jsx';
/**
 * Deck Class
 */
class Deck extends React.Component {
    /**
     * constructor
     * @param {object} props - properties
     */
    constructor(props) {
        super(props);

        /**
         * @type {object}
         * @property {string} title - element title
         */
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('clicked'); // eslint-disable-line no-console
        this.props.addCard(1);
    }

    /**
     * render
     * @return {ReactElement} - generated markup
     */
    render() {
        const deck = this.props.deck.map(card =>
            <ExpandingCard
                key={card.id}
                id={card.id}
                expanded={card.expanded}
            />
        );

        return (
            <div
                className="row"
            >
                {deck}
            </div>
        );
    }
}

Deck.propTypes = {
    deck: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
            expanded: React.PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
        })
    ),
    addCard: React.PropTypes.func,
};

Deck.defaultProps = {
    deck: [],
};

const mapStateToProps = state => (
    {
        deck: state.deck,
    });

const mapDispatchToProps = dispatch => bindActionCreators({
    addCard,
}, dispatch);

export { Deck as TestDeck };
export default connect(mapStateToProps, mapDispatchToProps)(Deck);
