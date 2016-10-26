import React from 'react';

import jQuery from 'jquery';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    expandCard,
} from './actions/expandingCardActions.jsx';
/**
 * ExpandingCard Class
 */
class ExpandingCard extends React.Component {

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
            id: props.id,
            dx: props.dx,
            dy: props.dy,
            expandedWidth: props.expandedWidth,
            expandedHeight: props.expandedHeight,
            expanded: props.expanded,
            screenTop: props.screenTop,
        };

        this.setPosition = this.setPosition.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setPosition();
        window.addEventListener('resize', this.setPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setPosition);
    }

    setPosition() {
        const component = this.component;

        // this is the element that the expanding card should fill
        const content = jQuery('.container'); // eslint-disable-line

        if (content.length) {
            const top = content.offset().top -
                jQuery(window).scrollTop() - // eslint-disable-line
                component.getBoundingClientRect().top;

            const left = content.offset().left - component.getBoundingClientRect().left;

            this.setState({
                dx: left,
                dy: top,
                expandedWidth: content.outerWidth(),
                expandedHeight: content.outerHeight(),
            });
        }
    }

    handleExpand() {
        if (!this.props.expanded) {
            const getScreenTop = jQuery(window).scrollTop();
            this.setState(
                {
                    screenTop: getScreenTop,
                });
            jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    }

    handleContract() {
        if (this.props.expanded) {
            const getScreenTop = this.state.screenTop;
            jQuery('html, body').animate({ scrollTop: getScreenTop }, 'slow');
        }
    }

    handleClick() {
        this.props.expandCard(this.props.id);
        if (this.props.expanded) {
            this.handleContract();
        } else {
            this.handleExpand();
        }
    }

    /**
     * render
     * @return {ReactElement} - generated markup
     */
    render() {
        let divStyle = {};

        const divClassName = 'col s12 m4';

        if (this.props.expanded) {
            divStyle = {
                left: this.state.dx,
                top: this.state.dy,
                width: this.state.expandedWidth,
                height: this.state.expandedHeight,
            };
        }

        return (
            <div
                className={divClassName}
            >
                <div
                    className="grid-element"
                    ref={(c) => { this.component = c; }}
                >
                    <div // eslint-disable-line jsx-a11y/no-static-element-interactions, max-len
                        className="card-content"
                        style={divStyle}
                        onClick={this.handleClick}
                    >
                        <p
                            className="flow-text"
                        >
                            Expanding Card
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

ExpandingCard.propTypes = {
    id: React.PropTypes.number,
    dx: React.PropTypes.number,
    dy: React.PropTypes.number,
    expandedWidth: React.PropTypes.number,
    expandedHeight: React.PropTypes.number,
    expanded: React.PropTypes.bool,
    screenTop: React.PropTypes.number,
    expandCard: React.PropTypes.func,
};

ExpandingCard.defaultProps = {
    dx: 0,
    dy: 0,
    expandedWidth: 0,
    expandedHeight: 0,
    expanded: false,
    screenTop: 0,
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    expandCard,
}, dispatch);

export { ExpandingCard };
export default connect(mapStateToProps, mapDispatchToProps)(ExpandingCard);
