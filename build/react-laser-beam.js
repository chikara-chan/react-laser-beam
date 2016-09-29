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
/******/ 	__webpack_require__.p = "build/";

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

	var _typeofReactElement = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 60103;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

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

	        return {
	            $$typeof: _typeofReactElement,
	            type: 'div',
	            key: null,
	            ref: null,
	            props: {
	                style: style,
	                onTransitionEnd: this.handleTransitionEnd.bind(this)
	            },
	            _owner: null
	        };
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;