import React, { Component, PropTypes } from 'react';

class LaserBeam extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            style: {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                margin: props.ccStyle == 'dash' ? '' : '0 auto',
                zIndex: props.zIndex,
                width: '0',
                height: props.width,
                background: props.background,
                transition: 'all 0ms',
                boxShadow: props.noShadow ? 'none' : props.background + ' 0px 0px 10px'
            }
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show ||
            this.state.style !== nextState.style;
    }


    componentWillReceiveProps(nextProps) {
        const { style } = this.state;
        const { show } = this.props;
        const nextShow = nextProps.show;
        let changedStyle;

        if (show === nextShow) {
            return;
        }
        if (!show && nextShow) {
            changedStyle = Object.assign({}, style, {
                width: '0',
                transition: 'width 0ms'
            });
            this.setState({
                style: changedStyle
            });
            changedStyle = Object.assign({}, style, {
                width: '70%',
                transition: 'width 10s cubic-bezier(0, 1, 0.3, 1)'
            });
            setTimeout(() => {
                this.setState({
                    style: changedStyle
                });
            }, 1);
            return;
        }
        if (nextShow) {
            changedStyle = Object.assign({}, style, {
                width: '70%',
                transition: 'width 10s cubic-bezier(0, 1, 0.3, 1)'
            });
        } else {
            changedStyle = Object.assign({}, style, {
                width: '100%',
                transition: 'width 400ms ease'
            });
        }
        this.setState({
            style: changedStyle
        });
    }

    handleTransitionEnd() {
        const { style } = this.state;
        const { show } = this.props;
        let changedStyle;

        if (!show) {
            changedStyle = Object.assign({}, style, {
                width: '0',
                transition: 'width 0ms'
            });

            this.setState({
                style: changedStyle
            });
        }
    }

    render() {
        const { style } = this.state;

        return (
            <div style={style} onTransitionEnd={this.handleTransitionEnd.bind(this)}></div>
        );
    }
}

LaserBeam.propTypes = {
    show: PropTypes.bool.isRequired,
    width: PropTypes.string,
    background: PropTypes.string,
    zIndex: PropTypes.string,
    noShadow: PropTypes.bool,
    ccStyle: PropTypes.oneOf(['dash', 'spread'])
};

LaserBeam.defaultProps = {
    show: false,
    width: '2px',
    background: '#77b6ff',
    zIndex: '1200',
    noShadow: false, 
    ccStyle: 'dash'

};

export default LaserBeam;