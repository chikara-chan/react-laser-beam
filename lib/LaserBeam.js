'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

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
                right: '0',
                margin: props.ccStyle == 'dash' ? '' : '0 auto',
                zIndex: props.zIndex,
                width: '0',
                height: props.width,
                background: props.background,
                transition: 'all 0ms',
                boxShadow: props.noShadow ? 'none' : props.background + ' 0px 0px 10px'
            },
            addonStyle: {
                content: '',
                display: 'none',
                position: 'absolute',
                right: -parseInt(props.width) / 2 + 'px',
                width: props.width,
                height: props.width,
                background: props.addon,
                boxShadow: props.addon + ' 0 0 10px ' + (2 / parseInt(props.width) + 1) + 'px',
                borderRadius: '50%'
            }
        };
    }

    LaserBeam.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show || this.state.style !== nextState.style;
    };

    LaserBeam.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _state = this.state;
        var style = _state.style;
        var addonStyle = _state.addonStyle;
        var show = this.props.show;

        var nextShow = nextProps.show;
        var changedStyle = undefined,
            changedAddonStyle = undefined;

        if (show === nextShow) {
            return;
        }
        if (nextShow) {
            changedStyle = _objectAssign2['default']({}, style, {
                width: '70%',
                transition: 'width 10s cubic-bezier(0, 1, 0.3, 1)'
            });
        } else {
            changedStyle = _objectAssign2['default']({}, style, {
                width: '100%',
                transition: 'width 400ms ease'
            });
        }
        changedAddonStyle = _objectAssign2['default']({}, addonStyle, {
            display: 'block'
        });
        this.state.style = changedStyle;
        this.state.addonStyle = changedAddonStyle;
    };

    LaserBeam.prototype.handleTransitionEnd = function handleTransitionEnd() {
        var _state2 = this.state;
        var style = _state2.style;
        var addonStyle = _state2.addonStyle;
        var show = this.props.show;

        var changedStyle = undefined,
            changedAddonStyle = undefined;

        if (!show) {
            changedStyle = _objectAssign2['default']({}, style, {
                width: '0',
                transition: 'width 0ms'
            });
            changedAddonStyle = _objectAssign2['default']({}, addonStyle, {
                display: 'none'
            });

            this.setState({
                style: changedStyle,
                addonStyle: changedAddonStyle
            });
        }
    };

    LaserBeam.prototype._renderAddon = function _renderAddon() {
        var addonStyle = this.state.addonStyle;
        var _props = this.props;
        var ccStyle = _props.ccStyle;
        var width = _props.width;

        if (ccStyle == 'spread') {
            var rets = [];
            var changedAddonStyle = undefined;

            changedAddonStyle = _objectAssign2['default']({}, addonStyle, {
                left: -parseInt(width) / 2 + 'px',
                right: 0
            });
            rets.push(_react2['default'].createElement('div', { key: 'after', style: addonStyle }));
            rets.push(_react2['default'].createElement('div', { key: 'before', style: changedAddonStyle }));

            return rets;
        } else {
            return _react2['default'].createElement('div', { style: addonStyle });
        }
    };

    LaserBeam.prototype.render = function render() {
        var style = this.state.style;
        var _props2 = this.props;
        var show = _props2.show;
        var width = _props2.width;
        var background = _props2.background;
        var zIndex = _props2.zIndex;
        var noShadow = _props2.noShadow;
        var ccStyle = _props2.ccStyle;
        var addon = _props2.addon;

        var props = _objectWithoutProperties(_props2, ['show', 'width', 'background', 'zIndex', 'noShadow', 'ccStyle', 'addon']);

        return _react2['default'].createElement(
            'div',
            _extends({}, props, { style: style, onTransitionEnd: this.handleTransitionEnd.bind(this) }),
            this._renderAddon()
        );
    };

    return LaserBeam;
})(_react.Component);

LaserBeam.propTypes = {
    show: _react.PropTypes.bool.isRequired,
    width: _react.PropTypes.string,
    background: _react.PropTypes.string,
    zIndex: _react.PropTypes.string,
    noShadow: _react.PropTypes.bool,
    ccStyle: _react.PropTypes.oneOf(['dash', 'spread']),
    addon: _react.PropTypes.string
};

LaserBeam.defaultProps = {
    show: false,
    width: '2px',
    background: '#77b6ff',
    zIndex: '1200',
    noShadow: false,
    ccStyle: 'dash',
    addon: 'transparent'
};

exports['default'] = LaserBeam;
module.exports = exports['default'];