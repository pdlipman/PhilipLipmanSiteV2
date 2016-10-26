import React from 'react';

import jQuery from 'jquery';
/**
 * ExpandingCard Class
 */
export default class ExpandingCard extends React.Component {

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
            dx: props.dx,
            dy: props.dy,
            expandedWidth: props.expandedWidth,
            expandedHeight: props.expandedHeight,
            expand: props.expand,
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
        if (!this.state.expand) {
            const getScreenTop = jQuery(window).scrollTop();
            this.setState(
                {
                    expand: true,
                    screenTop: getScreenTop,
                });
            jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    }

    handleContract() {
        if (this.state.expand) {
            const getScreenTop = this.state.screenTop;
            jQuery('html, body').animate({ scrollTop: getScreenTop }, 'slow');

            this.setState({
                expand: false,
            });
        }
    }

    handleClick() {
        if (this.state.expand) {
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

        const divClassName = 'col s12 m4 expanding-card';

        if (this.state.expand) {
            divStyle = {
                left: this.state.dx,
                top: this.state.dy,
                width: this.state.expandedWidth,
                height: this.state.expandedHeight,
                marginBottom: '0px',
            };
        }

        return (
            <div
                className={divClassName}
            >
                <div
                    className="initial-card"
                    ref={(c) => { this.component = c; }}
                >
                    <div // eslint-disable-line jsx-a11y/no-static-element-interactions, max-len
                        className="initial-card-interior"
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
    dx: React.PropTypes.number,
    dy: React.PropTypes.number,
    expandedWidth: React.PropTypes.number,
    expandedHeight: React.PropTypes.number,
    expand: React.PropTypes.bool,
    screenTop: React.PropTypes.number,
};

ExpandingCard.defaultProps = {
    dx: 0,
    dy: 0,
    expandedWidth: 0,
    expandedHeight: 0,
    expand: false,
    screenTop: 0,
};

module.exports = ExpandingCard;
