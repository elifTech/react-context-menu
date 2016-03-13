/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import React from 'react'

	var ContextMenu = function (_React$Component) {
	    _inherits(ContextMenu, _React$Component);

	    function ContextMenu(props) {
	        _classCallCheck(this, ContextMenu);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContextMenu).call(this, props));

	        _this.state = {
	            options: props.options,
	            isVisible: false
	        };
	        _this.showMenu = _this.showMenu.bind(_this);
	        _this.hideMenu = _this.hideMenu.bind(_this);
	        _this.handleLeftClick = _this.handleLeftClick.bind(_this);
	        _this.handleRightClick = _this.handleRightClick.bind(_this);
	        _this.handleMouseOver = _this.handleMouseOver.bind(_this);
	        _this.handleMouseOut = _this.handleMouseOut.bind(_this);
	        return _this;
	    }

	    _createClass(ContextMenu, [{
	        key: 'showMenu',
	        value: function showMenu(e) {
	            e.preventDefault();
	            var scope = this;
	            setTimeout(function () {
	                scope.setState({ isVisible: true });
	            }, scope.props.delay);
	        }
	    }, {
	        key: 'hideMenu',
	        value: function hideMenu(e) {
	            e.preventDefault();
	            this.setState({ isVisible: false });
	        }
	    }, {
	        key: 'handleLeftClick',
	        value: function handleLeftClick(e) {
	            e.preventDefault();

	            if (this.props.trigger && this.props.trigger === 'left') {
	                this.showMenu(e);
	            } else this.state.options.callback(e);
	        }
	    }, {
	        key: 'handleRightClick',
	        value: function handleRightClick(e) {
	            e.preventDefault();

	            if (this.props.trigger && this.props.trigger === 'right') {
	                this.showMenu(e);
	            }
	        }
	    }, {
	        key: 'handleMouseOver',
	        value: function handleMouseOver(e) {
	            e.preventDefault();

	            if (this.props.trigger && this.props.trigger === 'hover') {
	                this.showMenu(e);
	            }
	        }
	    }, {
	        key: 'handleMouseOut',
	        value: function handleMouseOut(e) {
	            e.preventDefault();

	            if (this.props.trigger && this.props.trigger === 'hover') {
	                this.hideMenu(e);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var style = {
	                "borderColor": this.props.borderColor,
	                "backgroundColor": this.props.backColor,
	                "color": this.props.color,
	                "zIndex": this.props.zIndex
	            };

	            var menu = this.state.isVisible ? React.createElement(MenuItems, {
	                style: style,
	                items: this.state.options.items,
	                hideMenu: this.hideMenu,
	                autoHide: this.props.autoHide
	            }) : null;
	            return React.createElement(
	                'span',
	                {
	                    className: this.state.options.className,
	                    onClick: this.state.options.callback,
	                    onContextMenu: this.showMenu,
	                    onMouseOver: this.handleMouseOver,
	                    onMouseOut: this.handleMouseOut
	                },
	                'Right click me',
	                menu
	            );
	        }
	    }]);

	    return ContextMenu;
	}(React.Component);

	ContextMenu.propTypes = {
	    selector: React.PropTypes.string,
	    trigger: React.PropTypes.string,
	    className: React.PropTypes.string,

	    color: React.PropTypes.string,
	    backColor: React.PropTypes.string,
	    borderColor: React.PropTypes.string,

	    delay: React.PropTypes.number,
	    zIndex: React.PropTypes.number,
	    position: React.PropTypes.object,

	    autoHide: React.PropTypes.bool,

	    events: React.PropTypes.object,
	    items: React.PropTypes.arrayOf(React.PropTypes.object),

	    callback: React.PropTypes.func
	};

	ContextMenu.defaultProps = {
	    selector: 'span.context-menu',
	    trigger: 'right', //right, left, hover, none
	    className: 'contextmenu-custom',

	    color: "#2f2f2f",
	    backColor: '#fff',
	    borderColor: '#bebebe',

	    delay: 200,
	    zIndex: 1,
	    position: undefined, //offset in pixels from top-left of trigger element.(x, y)

	    autoHide: true,

	    events: {}, //show, hide
	    items: [],

	    callback: function callback(e) {
	        e.preventDefault();
	        alert("Clicked on " + e.target.textContent);
	    }
	};

	var MenuItems = function (_React$Component2) {
	    _inherits(MenuItems, _React$Component2);

	    function MenuItems(props) {
	        _classCallCheck(this, MenuItems);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItems).call(this, props));

	        _this2.state = {
	            items: props.items
	        };
	        _this2.handleMouseOver = _this2.handleMouseOver.bind(_this2);
	        _this2.handleMouseOut = _this2.handleMouseOut.bind(_this2);
	        _this2.handleClick = _this2.handleClick.bind(_this2);
	        return _this2;
	    }

	    _createClass(MenuItems, [{
	        key: 'handleMouseOver',
	        value: function handleMouseOver(e) {
	            e.preventDefault();
	            document.body.removeEventListener('click', this.props.hideMenu);
	        }
	    }, {
	        key: 'handleMouseOut',
	        value: function handleMouseOut(e) {
	            e.preventDefault();
	            document.body.addEventListener('click', this.props.hideMenu);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(e) {
	            e.preventDefault();

	            if (this.props.autoHide) {
	                this.props.hideMenu(e);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var items = this.state.items.map(function (item, index) {
	                var icon = item.icon;
	                var classes = icon ? ["context-menu-item context-menu-icon context-menu-icon-" + icon] : ["context-menu-item context-menu-separator context-menu-not-selectable"];
	                return React.createElement(
	                    'li',
	                    { className: classes, onClick: _this3.handleClick, onMouseOver: _this3.handleMouseOver, onMouseOut: _this3.handleMouseOut, key: index },
	                    React.createElement(
	                        'span',
	                        null,
	                        item.name
	                    )
	                );
	            });

	            return React.createElement(
	                'ul',
	                { className: 'context-menu-list context-menu-root', style: this.props.style },
	                items
	            );
	        }
	    }]);

	    return MenuItems;
	}(React.Component);

	//export default ContextMenu

	//Test example

	var data = {
	    selector: 'context-menu',
	    className: 'well',
	    callback: function callback(e) {
	        e.preventDefault();
	        console.log(e.target.textContent);
	        alert("Clicked on " + e.target.textContent);
	    },
	    items: [{ name: "Edit", icon: "edit" }, { name: "Cut", icon: "cut" }, { name: "Copy", icon: "copy" }, { name: "Paste", icon: "paste" }, { name: "Delete", icon: "delete" }, { name: "", icon: "" }, { name: "Quit", icon: "quit" }]
	};

	React.render(React.createElement(ContextMenu, { options: data }), document.getElementById(data.selector));

/***/ }
/******/ ]);