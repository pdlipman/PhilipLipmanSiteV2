import React from 'react';

import ExpandingCard from './ExpandingCard.jsx';
/**
 * Deck Class
 */
export default class Deck extends React.Component {

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
        this.state = {
        };
    }

    /**
     * render
     * @return {ReactElement} - generated markup
     */
    render() {
        return (
            <div
                className="row"
            >
                <ExpandingCard />
                <ExpandingCard />
            </div>
        );
    }
}

Deck.propTypes = {
};

Deck.defaultProps = {
};

Deck