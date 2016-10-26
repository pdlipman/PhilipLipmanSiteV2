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
        console.log('clicked');
        this.props.addCard(1);
    }

    /**
     * render
     * @return {ReactElement} - generated markup
     */
    render() {
        const deck = this.props.deck.map((card) => {
            return (
                <ExpandingCard
                    key={card.id}
                    id={card.id}
                    expanded={card.expanded}
                />
            );
        });

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
    deck: React.PropTypes.array,
};

Deck.defaultProps = {
    deck: [],
};

const mapStateToProps = (state) => {
    return {
        deck: state.deck,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addCard,
}, dispatch);

export { Deck };
export default connect(mapStateToProps, mapDispatchToProps)(Deck);