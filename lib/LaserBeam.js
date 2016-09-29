'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LaserBeam = (function (_Component) {
    _inherits(LaserBeam, _Component);

    function LaserBeam(props, context) {
        _classCallCheck(this, LaserBeam);

        _Component.call(this, props, context);
        this.state = {
            style: {
                position: 'fixed',
                top: '0',
                left: '0',
                zIndex: '1031',
                width: '0',
                height: '50px',
                background: 'rgba(0,0,0,0.1)',
                transition: 'width 0ms'
            }
        };
    }

    // temp

    LaserBeam.prototype.componentDidMount = function componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    };

    // temp

    LaserBeam.prototype.componentWillUnmount = function componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    // temp

    LaserBeam.prototype.handleScroll = function handleScroll() {
        var style = this.state.style;
        var scrollTop = document.body.scrollTop;

        var changedStyle = undefined;

        if (scrollTop >= 50) {
            changedStyle = Object.assign({}, style, {
                height: '2px',
                background: '#77b6ff',
                boxShadow: '0 0 10px rgba(119,182,255,0.7)'
            });
        } else {
            changedStyle = Object.assign({}, style, {
                height: 50 - scrollTop + 'px',
                background: 'rgba(0,0,0,0.1)',
                boxShadow: 'none'
            });
        }
        this.setState({
            style: changedStyle
        });
    };

    LaserBeam.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show || this.state.style !== nextState.style;
    };

    LaserBeam.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this = this;

        var style = this.state.style;
        var show = this.props.show;

        var nextShow = nextProps.show;
        var changedStyle = undefined;

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
            setTimeout(function () {
                _this.setState({
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
    };

    LaserBeam.prototype.handleTransitionEnd = function handleTransitionEnd() {
        var style = this.state.style;
        var show = this.props.show;

        var changedStyle = undefined;

        if (!show) {
            changedStyle = Object.assign({}, style, {
                width: '0',
                transition: 'width 0ms'
            });

            this.setState({
                style: changedStyle
            });
        }
    };

    LaserBeam.prototype.render = function render() {
        var style = this.state.style;

        return _react2['default'].createElement('div', { style: style, onTransitionEnd: this.handleTransitionEnd.bind(this) });
    };

    return LaserBeam;
})(_react.Component);

LaserBeam.propTypes = {
    show: _react.PropTypes.bool
};

LaserBeam.defaultProps = {
    show: false
};

exports['default'] = LaserBeam;
module.exports = exports['default'];