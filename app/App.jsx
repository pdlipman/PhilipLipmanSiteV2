import React from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Deck from './expanding_card/Deck.jsx';

import { combinedReducers } from './reducers/combinedReducers.jsx';

const reducers = combineReducers(combinedReducers);
const store = createStore(reducers,
    applyMiddleware(
        thunkMiddleware
    )
);
/**
 * App Class
 */
export default class App extends React.Component {

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
            title: props.title,
        };
    }

    /**
     * render
     * @return {ReactElement} - generated markup
     */
    render() {
        return (
            <div
                className="container"
            >
                <Provider store={store}>
                    <Deck />
                </Provider>
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string,
};

App.defaultProps = {
    title: 'Express React App',
};

module.exports = App;
