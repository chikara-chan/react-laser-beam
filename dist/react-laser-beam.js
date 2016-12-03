(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactLaserBeam"] = factory(require("react"));
	else
		root["ReactLaserBeam"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _LaserBeam = __webpack_require__(1);

	var _LaserBeam2 = _interopRequireDefault(_LaserBeam);

	exports['default'] = _LaserBeam2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeofReactElement = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 60103;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(3);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _utilsWarning = __webpack_require__(4);

	var _utilsWarning2 = _interopRequireDefault(_utilsWarning);

	var LaserBeam = (function (_Component) {
	    _inherits(LaserBeam, _Component);

	    function LaserBeam(props, context) {
	        _classCallCheck(this, LaserBeam);

	        _Component.call(this, props, context);
	        if (props.show === true) {
	            _utilsWarning2['default']('To ensure ReactLaserBeam work correctly. The initial prop "show" must be "false".');
	        }
	        this.state = {
	            style: {
	                position: 'fixed',
	                top: '0',
	                left: '0',
	                right: '0',
	                margin: props.ccStyle === 'dash' ? '' : '0 auto',
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

	        if (ccStyle === 'spread') {
	            var rets = [];
	            var changedAddonStyle = undefined;

	            changedAddonStyle = _objectAssign2['default']({}, addonStyle, {
	                left: -parseInt(width) / 2 + 'px',
	                right: 0
	            });
	            rets.push({
	                $$typeof: _typeofReactElement,
	                type: 'div',
	                key: 'after',
	                ref: null,
	                props: {
	                    style: addonStyle
	                },
	                _owner: null
	            });
	            rets.push({
	                $$typeof: _typeofReactElement,
	                type: 'div',
	                key: 'before',
	                ref: null,
	                props: {
	                    style: changedAddonStyle
	                },
	                _owner: null
	            });

	            return rets;
	        } else {
	            return {
	                $$typeof: _typeofReactElement,
	                type: 'div',
	                key: null,
	                ref: null,
	                props: {
	                    style: addonStyle
	                },
	                _owner: null
	            };
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Output the message of warning in console
	 * @param  {String} message
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;

	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;