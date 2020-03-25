module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("normalize-wheel");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version {{version}}
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

//
// Cross module loader
// Supported: Node, AMD, Browser globals
//
;(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(window, function () {

    'use strict';

    var root = window;

    // default options
    var DEFAULTS = {
        // placement of the popper
        placement: 'bottom',

        gpuAcceleration: true,

        // shift popper from its origin by the given amount of pixels (can be negative)
        offset: 0,

        // the element which will act as boundary of the popper
        boundariesElement: 'viewport',

        // amount of pixel used to define a minimum distance between the boundaries and the popper
        boundariesPadding: 5,

        // popper will try to prevent overflow following this order,
        // by default, then, it could overflow on the left and on top of the boundariesElement
        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

        // the behavior used by flip to change the placement of the popper
        flipBehavior: 'flip',

        arrowElement: '[x-arrow]',

        arrowOffset: 0,

        // list of functions used to modify the offsets before they are applied to the popper
        modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

        modifiersIgnored: [],

        forceAbsolute: false
    };

    /**
     * Create a new Popper.js instance
     * @constructor Popper
     * @param {HTMLElement} reference - The reference element used to position the popper
     * @param {HTMLElement|Object} popper
     *      The HTML element used as popper, or a configuration used to generate the popper.
     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
     * @param {Object} options
     * @param {String} [options.placement=bottom]
     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
     *      left(-start, -end)`
     *
     * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
     *      reference element.
     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
     *
     * @param {Boolean} [options.gpuAcceleration=true]
     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
     *      browser to use the GPU to accelerate the rendering.
     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
     *
     * @param {Number} [options.offset=0]
     *      Amount of pixels the popper will be shifted (can be negative).
     *
     * @param {String|Element} [options.boundariesElement='viewport']
     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
     *      of the defined boundaries (except if `keepTogether` is enabled)
     *
     * @param {Number} [options.boundariesPadding=5]
     *      Additional padding for the boundaries
     *
     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
     *      this means that the last ones will never overflow
     *
     * @param {String|Array} [options.flipBehavior='flip']
     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
     *      its axis (`right - left`, `top - bottom`).
     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
     *
     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
     *      to this array to edit the offsets and placement.
     *      The function should reflect the @params and @returns of preventOverflow
     *
     * @param {Array} [options.modifiersIgnored=[]]
     *      Put here any built-in modifier name you want to exclude from the modifiers list
     *      The function should reflect the @params and @returns of preventOverflow
     *
     * @param {Boolean} [options.removeOnDestroy=false]
     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
     */
    function Popper(reference, popper, options) {
        this._reference = reference.jquery ? reference[0] : reference;
        this.state = {};

        // if the popper variable is a configuration object, parse it to generate an HTMLElement
        // generate a default popper if is not defined
        var isNotDefined = typeof popper === 'undefined' || popper === null;
        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
        if (isNotDefined || isConfig) {
            this._popper = this.parse(isConfig ? popper : {});
        }
        // otherwise, use the given HTMLElement as popper
        else {
                this._popper = popper.jquery ? popper[0] : popper;
            }

        // with {} we create a new object with the options inside it
        this._options = Object.assign({}, DEFAULTS, options);

        // refactoring modifiers' list
        this._options.modifiers = this._options.modifiers.map(function (modifier) {
            // remove ignored modifiers
            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

            // set the x-placement attribute before everything else because it could be used to add margins to the popper
            // margins needs to be calculated to get the correct popper offsets
            if (modifier === 'applyStyle') {
                this._popper.setAttribute('x-placement', this._options.placement);
            }

            // return predefined modifier identified by string or keep the custom one
            return this.modifiers[modifier] || modifier;
        }.bind(this));

        // make sure to apply the popper position before any computation
        this.state.position = this._getPosition(this._popper, this._reference);
        setStyle(this._popper, { position: this.state.position, top: 0 });

        // fire the first update to position the popper in the right place
        this.update();

        // setup event listeners, they will take care of update the position in specific situations
        this._setupEventListeners();
        return this;
    }

    //
    // Methods
    //
    /**
     * Destroy the popper
     * @method
     * @memberof Popper
     */
    Popper.prototype.destroy = function () {
        this._popper.removeAttribute('x-placement');
        this._popper.style.left = '';
        this._popper.style.position = '';
        this._popper.style.top = '';
        this._popper.style[getSupportedPropertyName('transform')] = '';
        this._removeEventListeners();

        // remove the popper if user explicity asked for the deletion on destroy
        if (this._options.removeOnDestroy) {
            this._popper.remove();
        }
        return this;
    };

    /**
     * Updates the position of the popper, computing the new offsets and applying the new style
     * @method
     * @memberof Popper
     */
    Popper.prototype.update = function () {
        var data = { instance: this, styles: {} };

        // store placement inside the data object, modifiers will be able to edit `placement` if needed
        // and refer to _originalPlacement to know the original value
        data.placement = this._options.placement;
        data._originalPlacement = this._options.placement;

        // compute the popper and reference offsets and put them inside data.offsets
        data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

        // get boundaries
        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

        data = this.runModifiers(data, this._options.modifiers);

        if (typeof this.state.updateCallback === 'function') {
            this.state.updateCallback(data);
        }
    };

    /**
     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
     * @method
     * @memberof Popper
     * @param {Function} callback
     */
    Popper.prototype.onCreate = function (callback) {
        // the createCallbacks return as first argument the popper instance
        callback(this);
        return this;
    };

    /**
     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
     * used to style popper and its arrow.
     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
     * @method
     * @memberof Popper
     * @param {Function} callback
     */
    Popper.prototype.onUpdate = function (callback) {
        this.state.updateCallback = callback;
        return this;
    };

    /**
     * Helper used to generate poppers from a configuration file
     * @method
     * @memberof Popper
     * @param config {Object} configuration
     * @returns {HTMLElement} popper
     */
    Popper.prototype.parse = function (config) {
        var defaultConfig = {
            tagName: 'div',
            classNames: ['popper'],
            attributes: [],
            parent: root.document.body,
            content: '',
            contentType: 'text',
            arrowTagName: 'div',
            arrowClassNames: ['popper__arrow'],
            arrowAttributes: ['x-arrow']
        };
        config = Object.assign({}, defaultConfig, config);

        var d = root.document;

        var popper = d.createElement(config.tagName);
        addClassNames(popper, config.classNames);
        addAttributes(popper, config.attributes);
        if (config.contentType === 'node') {
            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
        } else if (config.contentType === 'html') {
            popper.innerHTML = config.content;
        } else {
            popper.textContent = config.content;
        }

        if (config.arrowTagName) {
            var arrow = d.createElement(config.arrowTagName);
            addClassNames(arrow, config.arrowClassNames);
            addAttributes(arrow, config.arrowAttributes);
            popper.appendChild(arrow);
        }

        var parent = config.parent.jquery ? config.parent[0] : config.parent;

        // if the given parent is a string, use it to match an element
        // if more than one element is matched, the first one will be used as parent
        // if no elements are matched, the script will throw an error
        if (typeof parent === 'string') {
            parent = d.querySelectorAll(config.parent);
            if (parent.length > 1) {
                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
            }
            if (parent.length === 0) {
                throw 'ERROR: the given `parent` doesn\'t exists!';
            }
            parent = parent[0];
        }
        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
        // the first one will be used as parent
        if (parent.length > 1 && parent instanceof Element === false) {
            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
            parent = parent[0];
        }

        // append the generated popper to its parent
        parent.appendChild(popper);

        return popper;

        /**
         * Adds class names to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} classes
         */
        function addClassNames(element, classNames) {
            classNames.forEach(function (className) {
                element.classList.add(className);
            });
        }

        /**
         * Adds attributes to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} attributes
         * @example
         * addAttributes(element, [ 'data-info:foobar' ]);
         */
        function addAttributes(element, attributes) {
            attributes.forEach(function (attribute) {
                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
            });
        }
    };

    /**
     * Helper used to get the position which will be applied to the popper
     * @method
     * @memberof Popper
     * @param config {HTMLElement} popper element
     * @param reference {HTMLElement} reference element
     * @returns {String} position
     */
    Popper.prototype._getPosition = function (popper, reference) {
        var container = getOffsetParent(reference);

        if (this._options.forceAbsolute) {
            return 'absolute';
        }

        // Decide if the popper will be fixed
        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
        var isParentFixed = isFixed(reference, container);
        return isParentFixed ? 'fixed' : 'absolute';
    };

    /**
     * Get offsets to the popper
     * @method
     * @memberof Popper
     * @access private
     * @param {Element} popper - the popper element
     * @param {Element} reference - the reference element (the popper will be relative to this)
     * @returns {Object} An object containing the offsets which will be applied to the popper
     */
    Popper.prototype._getOffsets = function (popper, reference, placement) {
        placement = placement.split('-')[0];
        var popperOffsets = {};

        popperOffsets.position = this.state.position;
        var isParentFixed = popperOffsets.position === 'fixed';

        //
        // Get reference element position
        //
        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

        //
        // Get popper sizes
        //
        var popperRect = getOuterSizes(popper);

        //
        // Compute offsets of popper
        //

        // depending by the popper placement we have to compute its offsets slightly differently
        if (['right', 'left'].indexOf(placement) !== -1) {
            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
            if (placement === 'left') {
                popperOffsets.left = referenceOffsets.left - popperRect.width;
            } else {
                popperOffsets.left = referenceOffsets.right;
            }
        } else {
            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
            if (placement === 'top') {
                popperOffsets.top = referenceOffsets.top - popperRect.height;
            } else {
                popperOffsets.top = referenceOffsets.bottom;
            }
        }

        // Add width and height to our offsets object
        popperOffsets.width = popperRect.width;
        popperOffsets.height = popperRect.height;

        return {
            popper: popperOffsets,
            reference: referenceOffsets
        };
    };

    /**
     * Setup needed event listeners used to update the popper position
     * @method
     * @memberof Popper
     * @access private
     */
    Popper.prototype._setupEventListeners = function () {
        // NOTE: 1 DOM access here
        this.state.updateBound = this.update.bind(this);
        root.addEventListener('resize', this.state.updateBound);
        // if the boundariesElement is window we don't need to listen for the scroll event
        if (this._options.boundariesElement !== 'window') {
            var target = getScrollParent(this._reference);
            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
            if (target === root.document.body || target === root.document.documentElement) {
                target = root;
            }
            target.addEventListener('scroll', this.state.updateBound);
            this.state.scrollTarget = target;
        }
    };

    /**
     * Remove event listeners used to update the popper position
     * @method
     * @memberof Popper
     * @access private
     */
    Popper.prototype._removeEventListeners = function () {
        // NOTE: 1 DOM access here
        root.removeEventListener('resize', this.state.updateBound);
        if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
            this.state.scrollTarget.removeEventListener('scroll', this.state.updateBound);
            this.state.scrollTarget = null;
        }
        this.state.updateBound = null;
    };

    /**
     * Computed the boundaries limits and return them
     * @method
     * @memberof Popper
     * @access private
     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
     * @param {Number} padding - Boundaries padding
     * @param {Element} boundariesElement - Element used to define the boundaries
     * @returns {Object} Coordinates of the boundaries
     */
    Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
        // NOTE: 1 DOM access here
        var boundaries = {};
        var width, height;
        if (boundariesElement === 'window') {
            var body = root.document.body,
                html = root.document.documentElement;

            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

            boundaries = {
                top: 0,
                right: width,
                bottom: height,
                left: 0
            };
        } else if (boundariesElement === 'viewport') {
            var offsetParent = getOffsetParent(this._popper);
            var scrollParent = getScrollParent(this._popper);
            var offsetParentRect = getOffsetRect(offsetParent);

            // Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`
            var getScrollTopValue = function getScrollTopValue(element) {
                return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
            };
            var getScrollLeftValue = function getScrollLeftValue(element) {
                return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
            };

            // if the popper is fixed we don't have to substract scrolling from the boundaries
            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent);
            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent);

            boundaries = {
                top: 0 - (offsetParentRect.top - scrollTop),
                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
                left: 0 - (offsetParentRect.left - scrollLeft)
            };
        } else {
            if (getOffsetParent(this._popper) === boundariesElement) {
                boundaries = {
                    top: 0,
                    left: 0,
                    right: boundariesElement.clientWidth,
                    bottom: boundariesElement.clientHeight
                };
            } else {
                boundaries = getOffsetRect(boundariesElement);
            }
        }
        boundaries.left += padding;
        boundaries.right -= padding;
        boundaries.top = boundaries.top + padding;
        boundaries.bottom = boundaries.bottom - padding;
        return boundaries;
    };

    /**
     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
     * @method
     * @memberof Popper
     * @access public
     * @param {Object} data
     * @param {Array} modifiers
     * @param {Function} ends
     */
    Popper.prototype.runModifiers = function (data, modifiers, ends) {
        var modifiersToRun = modifiers.slice();
        if (ends !== undefined) {
            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
        }

        modifiersToRun.forEach(function (modifier) {
            if (isFunction(modifier)) {
                data = modifier.call(this, data);
            }
        }.bind(this));

        return data;
    };

    /**
     * Helper used to know if the given modifier depends from another one.
     * @method
     * @memberof Popper
     * @param {String} requesting - name of requesting modifier
     * @param {String} requested - name of requested modifier
     * @returns {Boolean}
     */
    Popper.prototype.isModifierRequired = function (requesting, requested) {
        var index = getArrayKeyIndex(this._options.modifiers, requesting);
        return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
            return modifier === requested;
        }).length;
    };

    //
    // Modifiers
    //

    /**
     * Modifiers list
     * @namespace Popper.modifiers
     * @memberof Popper
     * @type {Object}
     */
    Popper.prototype.modifiers = {};

    /**
     * Apply the computed styles to the popper element
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The same data object
     */
    Popper.prototype.modifiers.applyStyle = function (data) {
        // apply the final offsets to the popper
        // NOTE: 1 DOM access here
        var styles = {
            position: data.offsets.popper.position
        };

        // round top and left to avoid blurry text
        var left = Math.round(data.offsets.popper.left);
        var top = Math.round(data.offsets.popper.top);

        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
        // we automatically use the supported prefixed version if needed
        var prefixedProperty;
        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
            styles.top = 0;
            styles.left = 0;
        }
        // othwerise, we use the standard `left` and `top` properties
        else {
                styles.left = left;
                styles.top = top;
            }

        // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!
        Object.assign(styles, data.styles);

        setStyle(this._popper, styles);

        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
        // NOTE: 1 DOM access here
        this._popper.setAttribute('x-placement', data.placement);

        // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
            setStyle(data.arrowElement, data.offsets.arrow);
        }

        return data;
    };

    /**
     * Modifier used to shift the popper on the start or end of its reference element side
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.shift = function (data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftVariation = placement.split('-')[1];

        // if shift shiftVariation is specified, run the modifier
        if (shiftVariation) {
            var reference = data.offsets.reference;
            var popper = getPopperClientRect(data.offsets.popper);

            var shiftOffsets = {
                y: {
                    start: { top: reference.top },
                    end: { top: reference.top + reference.height - popper.height }
                },
                x: {
                    start: { left: reference.left },
                    end: { left: reference.left + reference.width - popper.width }
                }
            };

            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

            data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
        }

        return data;
    };

    /**
     * Modifier used to make sure the popper does not overflows from it's boundaries
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.preventOverflow = function (data) {
        var order = this._options.preventOverflowOrder;
        var popper = getPopperClientRect(data.offsets.popper);

        var check = {
            left: function left() {
                var left = popper.left;
                if (popper.left < data.boundaries.left) {
                    left = Math.max(popper.left, data.boundaries.left);
                }
                return { left: left };
            },
            right: function right() {
                var left = popper.left;
                if (popper.right > data.boundaries.right) {
                    left = Math.min(popper.left, data.boundaries.right - popper.width);
                }
                return { left: left };
            },
            top: function top() {
                var top = popper.top;
                if (popper.top < data.boundaries.top) {
                    top = Math.max(popper.top, data.boundaries.top);
                }
                return { top: top };
            },
            bottom: function bottom() {
                var top = popper.top;
                if (popper.bottom > data.boundaries.bottom) {
                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
                }
                return { top: top };
            }
        };

        order.forEach(function (direction) {
            data.offsets.popper = Object.assign(popper, check[direction]());
        });

        return data;
    };

    /**
     * Modifier used to make sure the popper is always near its reference
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.keepTogether = function (data) {
        var popper = getPopperClientRect(data.offsets.popper);
        var reference = data.offsets.reference;
        var f = Math.floor;

        if (popper.right < f(reference.left)) {
            data.offsets.popper.left = f(reference.left) - popper.width;
        }
        if (popper.left > f(reference.right)) {
            data.offsets.popper.left = f(reference.right);
        }
        if (popper.bottom < f(reference.top)) {
            data.offsets.popper.top = f(reference.top) - popper.height;
        }
        if (popper.top > f(reference.bottom)) {
            data.offsets.popper.top = f(reference.bottom);
        }

        return data;
    };

    /**
     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
     * Requires the `preventOverflow` modifier before it in order to work.
     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.flip = function (data) {
        // check if preventOverflow is in the list of modifiers before the flip modifier.
        // otherwise flip would not work as expected.
        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
            return data;
        }

        if (data.flipped && data.placement === data._originalPlacement) {
            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
            return data;
        }

        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';

        var flipOrder = [];
        if (this._options.flipBehavior === 'flip') {
            flipOrder = [placement, placementOpposite];
        } else {
            flipOrder = this._options.flipBehavior;
        }

        flipOrder.forEach(function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
                return;
            }

            placement = data.placement.split('-')[0];
            placementOpposite = getOppositePlacement(placement);

            var popperOffsets = getPopperClientRect(data.offsets.popper);

            // this boolean is used to distinguish right and bottom from top and left
            // they need different computations to get flipped
            var a = ['right', 'bottom'].indexOf(placement) !== -1;

            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
            if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
                // we'll use this boolean to detect any flip loop
                data.flipped = true;
                data.placement = flipOrder[index + 1];
                if (variation) {
                    data.placement += '-' + variation;
                }
                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

                data = this.runModifiers(data, this._options.modifiers, this._flip);
            }
        }.bind(this));
        return data;
    };

    /**
     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
     * The offsets will shift the popper on the side of its reference element.
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.offset = function (data) {
        var offset = this._options.offset;
        var popper = data.offsets.popper;

        if (data.placement.indexOf('left') !== -1) {
            popper.top -= offset;
        } else if (data.placement.indexOf('right') !== -1) {
            popper.top += offset;
        } else if (data.placement.indexOf('top') !== -1) {
            popper.left -= offset;
        } else if (data.placement.indexOf('bottom') !== -1) {
            popper.left += offset;
        }
        return data;
    };

    /**
     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.arrow = function (data) {
        var arrow = this._options.arrowElement;
        var arrowOffset = this._options.arrowOffset;

        // if the arrowElement is a string, suppose it's a CSS selector
        if (typeof arrow === 'string') {
            arrow = this._popper.querySelector(arrow);
        }

        // if arrow element is not found, don't run the modifier
        if (!arrow) {
            return data;
        }

        // the arrow element must be child of its popper
        if (!this._popper.contains(arrow)) {
            console.warn('WARNING: `arrowElement` must be child of its popper element!');
            return data;
        }

        // arrow depends on keepTogether in order to work
        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
            return data;
        }

        var arrowStyle = {};
        var placement = data.placement.split('-')[0];
        // var popper      = getPopperClientRect(data.offsets.popper);
        var popper = data.offsets.popper;
        var reference = data.offsets.reference;
        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

        var len = isVertical ? 'height' : 'width';
        var side = isVertical ? 'top' : 'left';
        var translate = isVertical ? 'translateY' : 'translateX';
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowSize = getOuterSizes(arrow)[len];

        //
        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
        //

        // top/left side
        if (reference[opSide] - arrowSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
        }
        // bottom/right side
        if (reference[side] + arrowSize > popper[opSide]) {
            data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
        }

        // compute center of the popper
        var center = reference[side] + (arrowOffset || reference[len] / 2 - arrowSize / 2);

        var sideValue = center - popper[side];

        // prevent arrow from being placed not contiguously to its popper
        sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
        arrowStyle[side] = sideValue;
        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

        data.offsets.arrow = arrowStyle;
        data.arrowElement = arrow;

        return data;
    };

    //
    // Helpers
    //

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Object} object containing width and height properties
     */
    function getOuterSizes(element) {
        // NOTE: 1 DOM access here
        var _display = element.style.display,
            _visibility = element.style.visibility;
        element.style.display = 'block';element.style.visibility = 'hidden';
        var calcWidthToForceRepaint = element.offsetWidth;

        // original method
        var styles = root.getComputedStyle(element);
        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

        // reset element styles
        element.style.display = _display;element.style.visibility = _visibility;
        return result;
    }

    /**
     * Get the opposite placement of the given one/
     * @function
     * @ignore
     * @argument {String} placement
     * @returns {String} flipped placement
     */
    function getOppositePlacement(placement) {
        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash[matched];
        });
    }

    /**
     * Given the popper offsets, generate an output similar to getBoundingClientRect
     * @function
     * @ignore
     * @argument {Object} popperOffsets
     * @returns {Object} ClientRect like output
     */
    function getPopperClientRect(popperOffsets) {
        var offsets = Object.assign({}, popperOffsets);
        offsets.right = offsets.left + offsets.width;
        offsets.bottom = offsets.top + offsets.height;
        return offsets;
    }

    /**
     * Given an array and the key to find, returns its index
     * @function
     * @ignore
     * @argument {Array} arr
     * @argument keyToFind
     * @returns index or null
     */
    function getArrayKeyIndex(arr, keyToFind) {
        var i = 0,
            key;
        for (key in arr) {
            if (arr[key] === keyToFind) {
                return i;
            }
            i++;
        }
        return null;
    }

    /**
     * Get CSS computed property of the given element
     * @function
     * @ignore
     * @argument {Eement} element
     * @argument {String} property
     */
    function getStyleComputedProperty(element, property) {
        // NOTE: 1 DOM access here
        var css = root.getComputedStyle(element, null);
        return css[property];
    }

    /**
     * Returns the offset parent of the given element
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getOffsetParent(element) {
        // NOTE: 1 DOM access here
        var offsetParent = element.offsetParent;
        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
    }

    /**
     * Returns the scrolling parent of the given element
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getScrollParent(element) {
        var parent = element.parentNode;

        if (!parent) {
            return element;
        }

        if (parent === root.document) {
            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
            // greater than 0 and return the proper element
            if (root.document.body.scrollTop || root.document.body.scrollLeft) {
                return root.document.body;
            } else {
                return root.document.documentElement;
            }
        }

        // Firefox want us to check `-x` and `-y` variations as well
        if (['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1) {
            // If the detected scrollParent is body, we perform an additional check on its parentNode
            // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
            // fixes issue #65
            return parent;
        }
        return getScrollParent(element.parentNode);
    }

    /**
     * Check if the given element is fixed or is inside a fixed parent
     * @function
     * @ignore
     * @argument {Element} element
     * @argument {Element} customContainer
     * @returns {Boolean} answer to "isFixed?"
     */
    function isFixed(element) {
        if (element === root.document.body) {
            return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
        }
        return element.parentNode ? isFixed(element.parentNode) : element;
    }

    /**
     * Set the style to the given popper
     * @function
     * @ignore
     * @argument {Element} element - Element to apply the style to
     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
     */
    function setStyle(element, styles) {
        function is_numeric(n) {
            return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
        }
        Object.keys(styles).forEach(function (prop) {
            var unit = '';
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
                unit = 'px';
            }
            element.style[prop] = styles[prop] + unit;
        });
    }

    /**
     * Check if the given variable is a function
     * @function
     * @ignore
     * @argument {*} functionToCheck - variable to check
     * @returns {Boolean} answer to: is a function?
     */
    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    /**
     * Get the position of the given element, relative to its offset parent
     * @function
     * @ignore
     * @param {Element} element
     * @return {Object} position - Coordinates of the element and its `scrollTop`
     */
    function getOffsetRect(element) {
        var elementRect = {
            width: element.offsetWidth,
            height: element.offsetHeight,
            left: element.offsetLeft,
            top: element.offsetTop
        };

        elementRect.right = elementRect.left + elementRect.width;
        elementRect.bottom = elementRect.top + elementRect.height;

        // position
        return elementRect;
    }

    /**
     * Get bounding client rect of given element
     * @function
     * @ignore
     * @param {HTMLElement} element
     * @return {Object} client rect
     */
    function getBoundingClientRect(element) {
        var rect = element.getBoundingClientRect();

        // whether the IE version is lower than 11
        var isIE = navigator.userAgent.indexOf("MSIE") != -1;

        // fix ie document bounding top always 0 bug
        var rectTop = isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;

        return {
            left: rect.left,
            top: rectTop,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.right - rect.left,
            height: rect.bottom - rectTop
        };
    }

    /**
     * Given an element and one of its parents, return the offset
     * @function
     * @ignore
     * @param {HTMLElement} element
     * @param {HTMLElement} parent
     * @return {Object} rect
     */
    function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
        var elementRect = getBoundingClientRect(element);
        var parentRect = getBoundingClientRect(parent);

        if (fixed) {
            var scrollParent = getScrollParent(parent);
            parentRect.top += scrollParent.scrollTop;
            parentRect.bottom += scrollParent.scrollTop;
            parentRect.left += scrollParent.scrollLeft;
            parentRect.right += scrollParent.scrollLeft;
        }

        var rect = {
            top: elementRect.top - parentRect.top,
            left: elementRect.left - parentRect.left,
            bottom: elementRect.top - parentRect.top + elementRect.height,
            right: elementRect.left - parentRect.left + elementRect.width,
            width: elementRect.width,
            height: elementRect.height
        };
        return rect;
    }

    /**
     * Get the prefixed supported property name
     * @function
     * @ignore
     * @argument {String} property (camelCase)
     * @returns {String} prefixed property (camelCase)
     */
    function getSupportedPropertyName(property) {
        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

        for (var i = 0; i < prefixes.length; i++) {
            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
            if (typeof root.document.body.style[toCheck] !== 'undefined') {
                return toCheck;
            }
        }
        return null;
    }

    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
     * objects to a target object. It will return the target object.
     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
     * @function
     * @ignore
     */
    if (!Object.assign) {
        Object.defineProperty(Object, 'assign', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function value(target) {
                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert first argument to object');
                }

                var to = Object(target);
                for (var i = 1; i < arguments.length; i++) {
                    var nextSource = arguments[i];
                    if (nextSource === undefined || nextSource === null) {
                        continue;
                    }
                    nextSource = Object(nextSource);

                    var keysArray = Object.keys(nextSource);
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
                return to;
            }
        });
    }

    return Popper;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Modified from https://github.com/taylorhakes/fecha
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Taylor Hakes
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 *     The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*eslint-disable*/
// 把 YYYY-MM-DD 改成了 yyyy-MM-dd
;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function () {
  'use strict';

  /**
   * Parse or format dates
   * @class fecha
   */

  var fecha = {};
  var token = /d{1,4}|M{1,4}|Q{1,2}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMQsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var oneDigits = '\\d';
  var twoDigits = '\\d\\d?';
  var threeDigits = '\\d{3}';
  var fourDigits = '\\d{4}';
  var word = '[^\\s]+';
  var literal = /\[([^]*?)\]/gm;
  var noop = function noop() {};

  function regexEscape(str) {
    return str.replace(/[|\\{()[^$+*?.-]/g, '\\$&');
  }

  function shorten(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
  }

  function monthUpdate(arrName) {
    return function (d, v, i18n) {
      var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
      if (~index) {
        d.month = index;
      }
    };
  }

  function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) {
      val = '0' + val;
    }
    return val;
  }

  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthNamesShort = shorten(monthNames, 3);
  var dayNamesShort = shorten(dayNames, 3);
  fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
  };

  var formatFlags = {
    D: function D(dateObj) {
      return dateObj.getDay();
    },
    DD: function DD(dateObj) {
      return pad(dateObj.getDay());
    },
    Do: function Do(dateObj, i18n) {
      return i18n.DoFn(dateObj.getDate());
    },
    d: function d(dateObj) {
      return dateObj.getDate();
    },
    dd: function dd(dateObj) {
      return pad(dateObj.getDate());
    },
    ddd: function ddd(dateObj, i18n) {
      return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function dddd(dateObj, i18n) {
      return i18n.dayNames[dateObj.getDay()];
    },
    M: function M(dateObj) {
      return dateObj.getMonth() + 1;
    },
    MM: function MM(dateObj) {
      return pad(dateObj.getMonth() + 1);
    },
    MMM: function MMM(dateObj, i18n) {
      return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function MMMM(dateObj, i18n) {
      return i18n.monthNames[dateObj.getMonth()];
    },
    Q: function Q(dateObj) {
      return Math.ceil((dateObj.getMonth() + 1) / 3);
    },
    QQ: function QQ(dateObj) {
      return 'Q' + Math.ceil((dateObj.getMonth() + 1) / 3);
    },
    yy: function yy(dateObj) {
      return pad(String(dateObj.getFullYear()), 4).substr(2);
    },
    yyyy: function yyyy(dateObj) {
      return pad(dateObj.getFullYear(), 4);
    },
    h: function h(dateObj) {
      return dateObj.getHours() % 12 || 12;
    },
    hh: function hh(dateObj) {
      return pad(dateObj.getHours() % 12 || 12);
    },
    H: function H(dateObj) {
      return dateObj.getHours();
    },
    HH: function HH(dateObj) {
      return pad(dateObj.getHours());
    },
    m: function m(dateObj) {
      return dateObj.getMinutes();
    },
    mm: function mm(dateObj) {
      return pad(dateObj.getMinutes());
    },
    s: function s(dateObj) {
      return dateObj.getSeconds();
    },
    ss: function ss(dateObj) {
      return pad(dateObj.getSeconds());
    },
    S: function S(dateObj) {
      return Math.round(dateObj.getMilliseconds() / 100);
    },
    SS: function SS(dateObj) {
      return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function SSS(dateObj) {
      return pad(dateObj.getMilliseconds(), 3);
    },
    a: function a(dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function A(dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
    },
    ZZ: function ZZ(dateObj) {
      var o = dateObj.getTimezoneOffset();
      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
    }
  };

  var parseFlags = {
    d: [twoDigits, function (d, v) {
      d.day = v;
    }],
    Do: [twoDigits + word, function (d, v) {
      d.day = parseInt(v, 10);
    }],
    M: [twoDigits, function (d, v) {
      d.month = v - 1;
    }],
    Q: [oneDigits, function (d, v) {
      d.month = (v.replace('Q', '') - 1) * 3;
    }],
    QQ: [word + oneDigits, function (d, v) {
      d.month = (v.replace('QQ', '') - 1) * 3;
    }],
    yy: [twoDigits, function (d, v) {
      var da = new Date(),
          cent = +('' + da.getFullYear()).substr(0, 2);
      d.year = '' + (v > 68 ? cent - 1 : cent) + v;
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
      d.second = v;
    }],
    yyyy: [fourDigits, function (d, v) {
      d.year = v;
    }],
    S: ['\\d', function (d, v) {
      d.millisecond = v * 100;
    }],
    SS: ['\\d{2}', function (d, v) {
      d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v;
    }],
    D: [twoDigits, noop],
    ddd: [word, noop],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    a: [word, function (d, v, i18n) {
      var val = v.toLowerCase();
      if (val === i18n.amPm[0]) {
        d.isPm = false;
      } else if (val === i18n.amPm[1]) {
        d.isPm = true;
      }
    }],
    ZZ: ['[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z', function (d, v) {
      var parts = (v + '').match(/([+-]|\d\d)/gi),
          minutes;

      if (parts) {
        minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
      }
    }]
  };
  parseFlags.dd = parseFlags.d;
  parseFlags.dddd = parseFlags.ddd;
  parseFlags.DD = parseFlags.D;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.MM = parseFlags.M;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a;

  // Some common format strings
  fecha.masks = {
    default: 'ddd MMM dd yyyy HH:mm:ss',
    shortDate: 'M/D/yy',
    mediumDate: 'MMM d, yyyy',
    longDate: 'MMMM d, yyyy',
    fullDate: 'dddd, MMMM d, yyyy',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
  };

  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   */
  fecha.format = function (dateObj, mask, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
      throw new Error('Invalid Date in fecha.format');
    }

    mask = fecha.masks[mask] || mask || fecha.masks['default'];

    var literals = [];

    // Make literals inactive by replacing them with ??
    mask = mask.replace(literal, function ($0, $1) {
      literals.push($1);
      return '@@@';
    });
    // Apply formatting rules
    mask = mask.replace(token, function ($0) {
      return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
    });
    // Inline literal values back into the formatted value
    return mask.replace(/@@@/g, function () {
      return literals.shift();
    });
  };

  /**
   * Parse a date string into an object, changes - into /
   * @method parse
   * @param {string} dateStr Date string
   * @param {string} format Date parse format
   * @returns {Date|boolean}
   */
  fecha.parse = function (dateStr, format, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof format !== 'string') {
      throw new Error('Invalid format in fecha.parse');
    }

    format = fecha.masks[format] || format;

    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
      return null;
    }

    var dateInfo = {};
    var parseInfo = [];
    var literals = [];
    format = format.replace(literal, function ($0, $1) {
      literals.push($1);
      return '@@@';
    });
    var newFormat = regexEscape(format).replace(token, function ($0) {
      if (parseFlags[$0]) {
        var info = parseFlags[$0];
        parseInfo.push(info[1]);
        return '(' + info[0] + ')';
      }

      return $0;
    });
    newFormat = newFormat.replace(/@@@/g, function () {
      return literals.shift();
    });
    var matches = dateStr.match(new RegExp(newFormat, 'i'));
    if (!matches) {
      return null;
    }

    for (var i = 1; i < matches.length; i++) {
      parseInfo[i - 1](dateInfo, matches[i], i18n);
    }

    var today = new Date();
    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
      dateInfo.hour = +dateInfo.hour + 12;
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
      dateInfo.hour = 0;
    }

    var date;
    if (dateInfo.timezoneOffset != null) {
      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
      date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
    } else {
      date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
    }
    return date;
  };

  return fecha;
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var filters_namespaceObject = {};
__webpack_require__.r(filters_namespaceObject);
__webpack_require__.d(filters_namespaceObject, "toThousand", function() { return toThousand; });
__webpack_require__.d(filters_namespaceObject, "toPercent", function() { return toPercent; });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag/src/tag.vue?vue&type=script&lang=js&

/* harmony default export */ var tagvue_type_script_lang_js_ = ({
  name: 'IwTag',
  props: {
    text: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    hit: {
      type: Boolean,
      default: false
    },
    disableTransitions: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    tagSize: function tagSize() {
      return this.size || (this.$IWAYS || {}).size;
    }
  },
  methods: {
    handleClose: function handleClose(event) {
      event.stopPropagation();
      this.$emit('close', event);
    },
    handleClick: function handleClick(event) {
      event.stopPropagation();
      this.$emit('click', event);
    }
  },
  render: function render(h) {
    var classes = ['iw-tag', this.type ? 'iw-tag--' + this.type : '', this.tagSize ? 'iw-tag--' + this.tagSize : '', { 'is-hit': this.hit }];
    var tagEl = h(
      'span',
      { 'class': classes, style: { backgroundColor: this.color }, on: {
          'click': this.handleClick
        }
      },
      [this.$slots.default, this.closable && h('i', { 'class': 'iw-tag__close iw-icon-close', on: {
          'click': this.handleClose
        }
      })]
    );

    return this.disableTransitions ? tagEl : h(
      'transition',
      {
        attrs: { name: 'iw-zoom-in-center' }
      },
      [tagEl]
    );
  }
});
// CONCATENATED MODULE: ./packages/tag/src/tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tagvue_type_script_lang_js_ = (tagvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/tag/src/tag.vue
var tag_render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  src_tagvue_type_script_lang_js_,
  tag_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/tag/src/tag.vue"
/* harmony default export */ var tag = (component.exports);
// CONCATENATED MODULE: ./packages/tag/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon/src/icon.vue?vue&type=template&id=cb3fe7f4&
var iconvue_type_template_id_cb3fe7f4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("i", { class: "iw-icon-" + _vm.name })
}
var iconvue_type_template_id_cb3fe7f4_staticRenderFns = []
iconvue_type_template_id_cb3fe7f4_render._withStripped = true


// CONCATENATED MODULE: ./packages/icon/src/icon.vue?vue&type=template&id=cb3fe7f4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon/src/icon.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var iconvue_type_script_lang_js_ = ({
  name: 'IwIcon',

  props: {
    name: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./packages/icon/src/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/icon/src/icon.vue





/* normalize component */

var icon_component = normalizeComponent(
  src_iconvue_type_script_lang_js_,
  iconvue_type_template_id_cb3fe7f4_render,
  iconvue_type_template_id_cb3fe7f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var icon_api; }
icon_component.options.__file = "packages/icon/src/icon.vue"
/* harmony default export */ var icon = (icon_component.exports);
// CONCATENATED MODULE: ./packages/icon/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=template&id=343dd774&
var inputvue_type_template_id_343dd774_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        _vm.type === "textarea" ? "iw-textarea" : "iw-input",
        _vm.inputSize ? "iw-input--" + _vm.inputSize : "",
        {
          "has-error": _vm.hasError,
          "is-disabled": _vm.inputDisabled,
          "iw-input-group": _vm.$slots.prepend || _vm.$slots.append,
          "iw-input-group--append": _vm.$slots.append,
          "iw-input-group--prepend": _vm.$slots.prepend,
          "iw-input--prefix": _vm.$slots.prefix || _vm.prefixIcon,
          "iw-input--suffix":
            _vm.$slots.suffix ||
            _vm.suffixIcon ||
            _vm.clearable ||
            _vm.showPassword
        }
      ],
      on: {
        mouseenter: function($event) {
          _vm.hovering = true
        },
        mouseleave: function($event) {
          _vm.hovering = false
        }
      }
    },
    [
      _vm.type !== "textarea"
        ? [
            _vm.$slots.prepend
              ? _c(
                  "div",
                  { staticClass: "iw-input-group__prepend" },
                  [_vm._t("prepend")],
                  2
                )
              : _vm._e(),
            _vm.type !== "textarea"
              ? _c(
                  "input",
                  _vm._b(
                    {
                      ref: "input",
                      staticClass: "iw-input__inner",
                      attrs: {
                        tabindex: _vm.tabindex,
                        type: _vm.showPassword
                          ? _vm.passwordVisible
                            ? "text"
                            : "password"
                          : _vm.type,
                        disabled: _vm.inputDisabled,
                        readonly: _vm.readonly,
                        autocomplete: _vm.autocomplete,
                        "aria-label": _vm.label
                      },
                      on: {
                        compositionstart: _vm.handleCompositionStart,
                        compositionend: _vm.handleCompositionEnd,
                        input: _vm.handleInput,
                        focus: _vm.handleFocus,
                        blur: _vm.handleBlur,
                        change: _vm.handleChange
                      }
                    },
                    "input",
                    _vm.$attrs,
                    false
                  )
                )
              : _vm._e(),
            _vm.$slots.prefix || _vm.prefixIcon
              ? _c(
                  "span",
                  { staticClass: "iw-input__prefix" },
                  [
                    _vm._t("prefix"),
                    _vm.prefixIcon
                      ? _c("i", {
                          staticClass: "iw-input__icon",
                          class: _vm.prefixIcon
                        })
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e(),
            _vm.$slots.suffix ||
            _vm.suffixIcon ||
            _vm.showClear ||
            _vm.showPassword ||
            (_vm.validateState && _vm.needStatusIcon)
              ? _c("span", { staticClass: "iw-input__suffix" }, [
                  _c(
                    "span",
                    { staticClass: "iw-input__suffix-inner" },
                    [
                      !_vm.showClear || !_vm.showPwdVisible
                        ? [
                            _vm._t("suffix"),
                            _vm.suffixIcon
                              ? _c("i", {
                                  staticClass: "iw-input__icon",
                                  class: _vm.suffixIcon
                                })
                              : _vm._e()
                          ]
                        : _vm._e(),
                      _vm.showClear
                        ? _c("i", {
                            staticClass:
                              "iw-input__icon iw-icon-circle-close iw-input__clear",
                            on: { click: _vm.clear }
                          })
                        : _vm._e(),
                      _vm.showPwdVisible
                        ? _c("i", {
                            staticClass:
                              "iw-input__icon iw-icon-view iw-input__clear",
                            on: { click: _vm.handlePasswordVisible }
                          })
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm.validateState
                    ? _c("i", {
                        staticClass: "iw-input__icon",
                        class: ["iw-input__validateIcon", _vm.validateIcon]
                      })
                    : _vm._e()
                ])
              : _vm._e(),
            _vm.$slots.append
              ? _c(
                  "div",
                  { staticClass: "iw-input-group__append" },
                  [_vm._t("append")],
                  2
                )
              : _vm._e()
          ]
        : _c(
            "textarea",
            _vm._b(
              {
                ref: "textarea",
                staticClass: "iw-textarea__inner",
                style: _vm.textareaStyle,
                attrs: {
                  tabindex: _vm.tabindex,
                  disabled: _vm.inputDisabled,
                  readonly: _vm.readonly,
                  autocomplete: _vm.autocomplete,
                  "aria-label": _vm.label
                },
                on: {
                  compositionstart: _vm.handleCompositionStart,
                  compositionend: _vm.handleCompositionEnd,
                  input: _vm.handleInput,
                  focus: _vm.handleFocus,
                  blur: _vm.handleBlur,
                  change: _vm.handleChange
                }
              },
              "textarea",
              _vm.$attrs,
              false
            )
          )
    ],
    2
  )
}
var inputvue_type_template_id_343dd774_staticRenderFns = []
inputvue_type_template_id_343dd774_render._withStripped = true


// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=template&id=343dd774&

// CONCATENATED MODULE: ./src/mixins/emitter.js
function _broadcast(componentName, eventName, params) {
  this.$children.forEach(function (child) {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
/* harmony default export */ var emitter = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/migrating.js
/**
 * Show migrating guide in browser console.
 *
 * Usage:
 * import Migrating from 'element-ui/src/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * add getMigratingConfig method for your component.
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */
/* harmony default export */ var migrating = ({
  mounted: function mounted() {
    if (true) return;
    if (!this.$vnode) return;

    var _getMigratingConfig = this.getMigratingConfig(),
        _getMigratingConfig$p = _getMigratingConfig.props,
        props = _getMigratingConfig$p === undefined ? {} : _getMigratingConfig$p,
        _getMigratingConfig$e = _getMigratingConfig.events,
        events = _getMigratingConfig$e === undefined ? {} : _getMigratingConfig$e;

    var _$vnode = this.$vnode,
        data = _$vnode.data,
        componentOptions = _$vnode.componentOptions;

    var definedProps = data.attrs || {};
    var definedEvents = componentOptions.listeners || {};

    for (var propName in definedProps) {
      if (definedProps.hasOwnProperty(propName) && props[propName]) {
        console.warn('[Migrating][' + this.$options.name + '][Attribute]: ' + props[propName]);
      }
    }

    for (var eventName in definedEvents) {
      if (definedEvents.hasOwnProperty(eventName) && events[eventName]) {
        console.warn('[Migrating][' + this.$options.name + '][Event]: ' + events[eventName]);
      }
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {},
        events: {}
      };
    }
  }
});
// CONCATENATED MODULE: ./packages/input/src/calcTextareaHeight.js
var hiddenTextarea = void 0;

var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

function calculateNodeStyling(targetElement) {
  var style = window.getComputedStyle(targetElement);

  var boxSizing = style.getPropertyValue('box-sizing');

  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

  var contextStyle = CONTEXT_STYLE.map(function (name) {
    return name + ':' + style.getPropertyValue(name);
  }).join(';');

  return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
}

function calcTextareaHeight(targetElement) {
  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  var _calculateNodeStyling = calculateNodeStyling(targetElement),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      contextStyle = _calculateNodeStyling.contextStyle;

  hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

  var height = hiddenTextarea.scrollHeight;
  var result = {};

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    var minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = minHeight + 'px';
  }
  if (maxRows !== null) {
    var maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = height + 'px';
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
}
// CONCATENATED MODULE: ./src/utils/merge.js
/* harmony default export */ var merge = (function (target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i] || {};
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'IwInput',

  componentName: 'IwInput',

  mixins: [emitter, migrating],

  inheritAttrs: false,

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    value: {
      type: [String, Number],
      default: function _default() {
        return;
      }
    },
    size: {
      type: String,
      default: function _default() {
        return 'default';
      }
    },
    resize: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    form: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      hasError: false,
      textareaCalcStyle: {},
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false
    };
  },


  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    validateState: function validateState() {
      return this.elFormItem ? this.elFormItem.validateState : '';
    },
    needStatusIcon: function needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false;
    },
    validateIcon: function validateIcon() {
      return {
        validating: 'iw-icon-loading',
        success: 'iw-icon-circle-check',
        error: 'iw-icon-circle-close'
      }[this.validateState];
    },
    textareaStyle: function textareaStyle() {
      return merge({}, this.textareaCalcStyle, { resize: this.resize });
    },
    inputSize: function inputSize() {
      return this.size || this._elFormItemSize || (this.$IWAYS || {}).size;
    },
    inputDisabled: function inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    nativeInputValue: function nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value);
    },
    showClear: function showClear() {
      return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering);
    },
    showPwdVisible: function showPwdVisible() {
      return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused);
    }
  },

  watch: {
    value: function value(val) {
      this.$nextTick(this.resizeTextarea);
      if (this.validateEvent) {
        // this.dispatch('ElFormItem', 'iw.form.change', [val])
      }
    },

    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    nativeInputValue: function nativeInputValue() {
      this.setNativeInputValue();
    },

    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    type: function type() {
      var _this = this;

      this.$nextTick(function () {
        _this.setNativeInputValue();
        _this.resizeTextarea();
        _this.updateIconOffset();
      });
    }
  },

  created: function created() {
    this.$on('inputSelect', this.select);
  },
  mounted: function mounted() {
    this.setNativeInputValue();
    this.resizeTextarea();
    this.updateIconOffset();
  },
  updated: function updated() {
    this.$nextTick(this.updateIconOffset);
  },


  methods: {
    focus: function focus() {
      this.getInput().focus();
    },
    blur: function blur() {
      this.getInput().blur();
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
          'on-icon-click': 'on-icon-click is removed.'
        },
        events: {
          'click': 'click is removed.'
        }
      };
    },
    handleBlur: function handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      if (this.validateEvent) {
        // this.dispatch('ElFormItem', 'iw.form.blur', [this.value])
      }
    },
    select: function select() {
      this.getInput().select();
    },
    resizeTextarea: function resizeTextarea() {
      if (this.$isServer) return;
      var autosize = this.autosize,
          type = this.type;

      if (type !== 'textarea') return;
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        };
        return;
      }
      var minRows = autosize.minRows;
      var maxRows = autosize.maxRows;

      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
    setNativeInputValue: function setNativeInputValue() {
      var input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    handleFocus: function handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleCompositionStart: function handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionEnd: function handleCompositionEnd(event) {
      this.isComposing = false;
      this.handleInput(event);
    },
    handleInput: function handleInput(event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return;

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return;

      this.$emit('input', event.target.value);

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue);
    },
    handleChange: function handleChange(event) {
      this.$emit('change', event.target.value);
    },
    calcIconOffset: function calcIconOffset(place) {
      var elList = [].slice.call(document.querySelectorAll('.iw-input__' + place) || []);
      if (!elList.length) return;
      var iw = null;
      for (var i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === this.$iw) {
          iw = elList[i];
          break;
        }
      }
      if (!iw) return;
      var pendantMap = {
        suffix: 'append',
        prefix: 'prepend'
      };

      var pendant = pendantMap[place];
      if (this.$slots[pendant]) {
        iw.style.transform = 'translateX(' + (place === 'suffix' ? '-' : '') + this.$iw.querySelector('.iw-input-group__' + pendant).offsetWidth + 'px)';
      } else {
        iw.removeAttribute('style');
      }
    },
    updateIconOffset: function updateIconOffset() {
      this.calcIconOffset('prefix');
      this.calcIconOffset('suffix');
    },
    clear: function clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    handlePasswordVisible: function handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    getInput: function getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    setError: function setError() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.hasError = error;
    }
  }
});
// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input/src/input.vue





/* normalize component */

var input_component = normalizeComponent(
  src_inputvue_type_script_lang_js_,
  inputvue_type_template_id_343dd774_render,
  inputvue_type_template_id_343dd774_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_api; }
input_component.options.__file = "packages/input/src/input.vue"
/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./packages/input/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/empty/src/empty.vue?vue&type=template&id=0ffb948c&
var emptyvue_type_template_id_0ffb948c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "iw-empty" }, [
    _c("div", { class: "iw-empty--" + _vm.size }, [
      parseInt(_vm.status) !== 0
        ? _c("div", { staticClass: "iw-empty__main" }, [
            _c(
              "span",
              [_vm._t("icon", [_c("i", { staticClass: "iw-icon-warning" })])],
              2
            ),
            _c(
              "p",
              [
                _vm._t("tips", [
                  _vm._v("\n          " + _vm._s(_vm.tips) + "\n        ")
                ])
              ],
              2
            )
          ])
        : _vm._e()
    ]),
    false ? undefined : _vm._e()
  ])
}
var emptyvue_type_template_id_0ffb948c_staticRenderFns = []
emptyvue_type_template_id_0ffb948c_render._withStripped = true


// CONCATENATED MODULE: ./packages/empty/src/empty.vue?vue&type=template&id=0ffb948c&

// CONCATENATED MODULE: ./src/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  iw: {
    colorpicker: {
      confirm: '确定',
      clear: '清空'
    },
    datepicker: {
      now: '此刻',
      today: '今天',
      cancel: '取消',
      clear: '清空',
      confirm: '确定',
      selectDate: '选择日期',
      selectTime: '选择时间',
      startDate: '开始日期',
      startTime: '开始时间',
      endDate: '结束日期',
      endTime: '结束时间',
      prevYear: '前一年',
      nextYear: '后一年',
      prevMonth: '上个月',
      nextMonth: '下个月',
      year: '年',
      month1: '1 月',
      month2: '2 月',
      month3: '3 月',
      month4: '4 月',
      month5: '5 月',
      month6: '6 月',
      month7: '7 月',
      month8: '8 月',
      month9: '9 月',
      month10: '10 月',
      month11: '11 月',
      month12: '12 月',
      // week: '周次',
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六'
      },
      months: {
        jan: '1月',
        feb: '2月',
        mar: '3月',
        apr: '4月',
        may: '5月',
        jun: '6月',
        jul: '7月',
        aug: '8月',
        sep: '9月',
        oct: '10月',
        nov: '11月',
        dec: '12月'
      },
      quarters: {
        Q1: 'Q1',
        Q2: 'Q2',
        Q3: 'Q3',
        Q4: 'Q4'
      }
    },
    common: {
      noMatch: '无匹配数据',
      loading: '加载中',
      placeholder: '请选择',
      search: '搜索',
      selected: '已选',
      checkColumnAll: '全选',
      reset: '重置',
      confirm: '确定',
      checkAll: '全选所有',
      noData: '暂无数据',
      atLeast: '最少选择{count}项',
      atMost: '最多选择{count}项'
    },
    empty: {
      wait: '等待请求',
      exception: '网络异常',
      unknow: '未知错误'
    },
    select: {
      loading: '加载中',
      noMatch: '无匹配数据',
      noData: '无数据',
      placeholder: '请选择',
      checkAll: '全选'
    },
    manfbrand: {
      quickppositioning: '快速定位'
    },
    submodel: {
      quickppositioning: '快速定位',
      local: '国产',
      import: '进口'
    },
    version: {
      submodel: '车型',
      version: '型号',
      msrp: 'MSRP',
      hot: '热度',
      dataSource: '数据源'
    },
    favorite: {
      subModel: '车型',
      manfBrand: '厂商品牌',
      segment: '细分市场',
      placeholder: '请输入',
      folder: '收藏夹',
      operation: '操作',
      select: '选择',
      del: '删除',
      copy: '复制',
      edit: '编辑',
      confirm: '确定',
      create: '新建',
      cancel: '取消',
      save: '保存',
      saveFirst: '请先保存',
      customFolder: '自定义文件夹',
      maxFolders: '最多不能超过{maxLength}个',
      maxFolderName: '名称不能超过{maxLength}个字',
      nameExist: '名称已重复',
      outOfRange: '超过范围'
    },
    pagination: {
      goto: '前往',
      pagesize: '条/页',
      total: '共 {total} 条',
      pageClassifier: '页'
    },
    messagebox: {
      title: '提示',
      confirm: '确定',
      cancel: '取消',
      error: '输入的数据不合法!'
    },
    upload: {
      deleteTip: '按 delete 键可删除',
      delete: '删除',
      preview: '查看图片',
      continue: '继续上传'
    },
    table: {
      emptyText: '暂无数据',
      confirmFilter: '筛选',
      resetFilter: '重置',
      clearFilter: '全部',
      sumText: '合计'
    },
    tree: {
      emptyText: '暂无数据'
    },
    transfer: {
      noMatch: '无匹配数据',
      noData: '无数据',
      titles: ['列表 1', '列表 2'],
      filterPlaceholder: '请输入搜索内容',
      noCheckedFormat: '共 {total} 项',
      hasCheckedFormat: '已选 {checked}/{total} 项'
    },
    image: {
      error: '加载失败'
    },
    pageHeader: {
      title: '返回'
    }
  }
});
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "deepmerge"
var external_deepmerge_ = __webpack_require__(3);
var external_deepmerge_default = /*#__PURE__*/__webpack_require__.n(external_deepmerge_);

// CONCATENATED MODULE: ./src/utils/util.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var util_hasOwnProperty = Object.prototype.hasOwnProperty;

function noop() {}

function hasOwn(obj, key) {
  return util_hasOwnProperty.call(obj, key);
}

function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

var getValueByPath = function getValueByPath(object, prop) {
  prop = prop || '';
  var paths = prop.split('.');
  var current = object;
  var result = null;
  for (var i = 0, j = paths.length; i < j; i++) {
    var path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

function getPropByPath(obj, path, strict) {
  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  var keyArr = path.split('.');
  var i = 0;
  for (var len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    var key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
}

var generateId = function generateId() {
  return Math.floor(Math.random() * 10000);
};

var valueEquals = function valueEquals(a, b) {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

var escapeRegexpString = function escapeRegexpString() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
};

// TODO: use native Array.find, Array.findIndex when IE support is dropped
var arrayFindIndex = function arrayFindIndex(arr, pred) {
  for (var i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

var arrayFind = function arrayFind(arr, pred) {
  var idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
var coerceTruthyValueToArray = function coerceTruthyValueToArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

var util_isIE = function isIE() {
  return !external_vue_default.a.prototype.$isServer && !isNaN(Number(document.documentMode));
};

var util_isEdge = function isEdge() {
  return !external_vue_default.a.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};

var util_chunk = function chunk(data, count) {
  var result = [];
  if (!(data instanceof Array)) return data;
  data.forEach(function (item, index) {
    var temp = Math.floor(index / count);
    if (!(result[temp] instanceof Array)) {
      result[temp] = [];
    }
    result[temp].push(item);
  });
  return result;
};

function strlen(str) {
  var strlen = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 128) {
      strlen += 2;
    } else {
      strlen++;
    }
  }
  return strlen;
}

var util_substr = function substr(str, len) {
  var strlength = 0;
  var s = '';
  var plen = 0;
  if (strlen(str) <= len) {
    return str;
  }
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 128) {
      strlength += 2;
      plen = 2;
    } else {
      strlength++;
      plen = 1;
    }
    s += str.charAt(i);
    if (strlength >= len - plen) {
      return s + '...';
    }
  }
  return s;
};

/**
 * 重构树数组
 * @param {Array} _array_tree 树的数组
 * @param {String} son 子节点键
 * @param {Number} level 层级默认值
 */
function getTree(_array_tree) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var parent = arguments[3];

  var _Object$assign = Object.assign({
    key: 'key',
    value: 'value',
    son: 'children',
    pKey: 'parent',
    appendPKey: false,
    selected: [],
    multiple: true,
    leaf: false,
    disabledSelect: [],
    keyword: ''
  }, options),
      key = _Object$assign.key,
      value = _Object$assign.value,
      son = _Object$assign.son,
      pKey = _Object$assign.pKey,
      selected = _Object$assign.selected,
      multiple = _Object$assign.multiple,
      leaf = _Object$assign.leaf,
      disabledSelect = _Object$assign.disabledSelect,
      keyword = _Object$assign.keyword,
      appendPKey = _Object$assign.appendPKey;

  var tree = [];

  var _loop = function _loop(i) {
    var _tree = {};
    var sub = null;
    for (var _key in _array_tree[i]) {
      if (_key === son) {
        sub = _array_tree[i][son];
      } else {
        _tree[_key] = _array_tree[i][_key];
      }
    }
    _tree['level'] = level;
    // 不输出禁选
    if (disabledSelect.length > 0) {
      if (disabledSelect && disabledSelect[0] && _typeof(disabledSelect[0]) === 'object') {
        if (disabledSelect.find(function (item) {
          return item && item[key] && item[key] === _tree[key] && item[value] === _tree[value];
        })) return 'continue';
      } else {
        if (disabledSelect.includes(_tree[key])) return 'continue';
      }
    }
    if (parent && parent['level'] >= 0) {
      _tree[pKey] = {
        key: parent[key],
        value: parent[value],
        level: parseInt(parent['level'])
      };
      if (parent.parent) {
        _tree['parent'].parent = parent.parent;
      }
      if (appendPKey) {
        _tree[key] = [parent[key], _tree[key]].join('-');
      }
    }
    if (!_tree['disabled']) {
      if (selected && selected[0] && _typeof(selected[0]) === 'object') {
        _tree['selected'] = !!selected.find(function (item) {
          return item && item[key] !== undefined && item[key] === _tree[key] && item[value] === _tree[value];
        });
      } else {
        _tree['selected'] = selected.includes(_tree[key]);
      }
    }
    if (sub) {
      var sub_array = getTree(sub, options, level + 1, _tree);
      if (sub_array && sub_array.length) {
        _tree[son] = sub_array;
        if (leaf) {
          var _count = sub_array.filter(function (item) {
            return item.selected;
          }).length;
          if (multiple) {
            _tree['selected'] = sub_array.length === _count;
            _tree['indeterminate'] = sub_array.length > _count && _count > 0;
          } else {
            _tree['selected'] = _count > 0;
          }
        }
      } else if (sub_array.length === 0 && leaf) {
        return 'continue';
      } else if (keyword && _tree[value].indexOf(keyword) === -1) {
        return 'continue';
      }
    } else {
      if (keyword && _tree[value].indexOf(keyword) === -1) {
        return 'continue';
      }
    }
    tree.push(_tree);
  };

  for (var i in _array_tree) {
    var _ret = _loop(i);

    if (_ret === 'continue') continue;
  }
  return tree;
}
/**
 * 树数组转成一维数组
 * @param {Array} _array_tree 树的数组
 * @param {String} son 子节点键
 * @param {Boolean} leaf 是否只取叶节点
 * @param {Number} level 层级默认值
 */
function arr2table(_array_tree) {
  var son = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  var leaf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var parent = arguments[4];

  var tree = [];
  for (var i in _array_tree) {
    var _tree2 = _array_tree[i];
    var _sub = _tree2[son];
    _tree2['level'] = level;
    if (leaf && (!_sub || !_sub.length)) {
      tree.push(_tree2);
    } else if (!leaf) {
      tree.push(_tree2);
    }
    if (_sub) {
      var sub_array = arr2table(_sub, son, leaf, level + 1, _tree2);
      tree = tree.concat(sub_array);
    }
  }
  return tree;
}
function findInArray(key, value, arr) {
  var sub = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'sub';
  var level = arguments[4];
  var output = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

  if (typeof key !== 'string' || value === undefined || (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) !== 'object') return {};
  for (var i in arr) {
    var item = arr[i];
    if (item[key] !== undefined && item[key] === value && item['level'] === level) {
      output.push(item);
    } else if (item.hasOwnProperty(sub) && _typeof(item[sub]) === 'object') {
      findInArray(key, value, item[sub], sub, level, output);
    }
  }
  return output.length > 0 ? output[0] : {};
}
function treeDeep(jsonData) {
  var num = 0;
  function recursion(data, k) {
    num = Math.max(num, k);
    for (var x in data) {
      var obj = data[x];
      if (obj.children) {
        recursion(obj.children, k + 1);
      }
    }
  }
  recursion(jsonData, 1);
  return num;
}
function recursiveLoop(data) {
  var loopKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'parent';
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';
  var output = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || data === null) {
    output.push(data);
  } else if (!(data instanceof Array)) {
    output.push(data[key] !== undefined ? data[key] : data);
    if (data.hasOwnProperty(loopKey)) {
      var _item = data[loopKey];
      recursiveLoop(_item, loopKey, key, output);
    }
  } else {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        recursiveLoop(item, loopKey, key, output);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  return output;
}
function deepClone(source) {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] = _typeof(source[item]) === 'object' ? deepClone(source[item]) : source[item];
  }
  return sourceCopy;
}
// CONCATENATED MODULE: ./src/locale/format.js
var format_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */
/* harmony default export */ var locale_format = (function (Vue) {
  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */

  function template(string) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length === 1 && format_typeof(args[0]) === 'object') {
      args = args[0];
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    return string.replace(RE_NARGS, function (match, prefix, i, index) {
      var result = void 0;

      if (string[index - 1] === '{' && string[index + match.length] === '}') {
        return i;
      } else {
        result = hasOwn(args, i) ? args[i] : null;
        if (result === null || result === undefined) {
          return '';
        }

        return result;
      }
    });
  }

  return template;
});
// CONCATENATED MODULE: ./src/locale/index.js





var src_locale_format = locale_format(external_vue_default.a);
var lang = zh_CN;
var merged = false;
var locale_i18nHandler = function i18nHandler() {
  var vuei18n = Object.getPrototypeOf(this || external_vue_default.a).$t;
  if (typeof vuei18n === 'function' && !!external_vue_default.a.locale) {
    if (!merged) {
      merged = true;
      external_vue_default.a.locale(external_vue_default.a.config.lang, external_deepmerge_default()(lang, external_vue_default.a.locale(external_vue_default.a.config.lang) || {}, { clone: true }));
    }
    return vuei18n.apply(this, arguments);
  }
};

var locale_t = function t(path, options) {
  var value = locale_i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  var array = path.split('.');
  var current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    value = current[property];
    if (i === j - 1) return src_locale_format(value, options);
    if (!value) return '';
    current = value;
  }
  return '';
};

var use = function use(l) {
  lang = l || lang;
};

var i18n = function i18n(fn) {
  locale_i18nHandler = fn || locale_i18nHandler;
};

/* harmony default export */ var locale = ({ use: use, t: locale_t, i18n: i18n });
// CONCATENATED MODULE: ./src/mixins/locale.js


/* harmony default export */ var mixins_locale = ({
  methods: {
    t: function t() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return locale_t.apply(this, args);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/empty/src/empty.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var emptyvue_type_script_lang_js_ = ({
  name: 'IwEmpty',
  mixins: [mixins_locale],
  props: {
    size: {
      type: String,
      default: 'default'
    },
    status: {
      type: [String, Number],
      default: undefined
    }
  },
  computed: {
    tips: function tips() {
      var tips = '';
      if (typeof this.status === 'string') {
        return this.status;
      }
      switch (parseInt(this.status)) {
        case 0:
          tips = this.t('iw.empty.wait');
          break;
        case 500:
          tips = this.t('iw.empty.exception');
          break;
        case 200:
          tips = this.t('iw.common.noData');
          break;
        default:
          tips = this.t('iw.empty.unknow');
          break;
      }
      return tips;
    }
  }
});
// CONCATENATED MODULE: ./packages/empty/src/empty.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_emptyvue_type_script_lang_js_ = (emptyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/empty/src/empty.vue





/* normalize component */

var empty_component = normalizeComponent(
  src_emptyvue_type_script_lang_js_,
  emptyvue_type_template_id_0ffb948c_render,
  emptyvue_type_template_id_0ffb948c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var empty_api; }
empty_component.options.__file = "packages/empty/src/empty.vue"
/* harmony default export */ var empty = (empty_component.exports);
// CONCATENATED MODULE: ./packages/empty/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=template&id=ca859fb4&
var buttonvue_type_template_id_ca859fb4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "iw-button",
      class: [
        _vm.type ? "iw-button--" + _vm.type : "",
        _vm.buttonSize ? "iw-button--" + _vm.buttonSize : "",
        {
          "is-disabled": _vm.buttonDisabled,
          "is-loading": _vm.loading,
          "is-plain": _vm.plain,
          "is-round": _vm.round,
          "is-circle": _vm.circle
        }
      ],
      attrs: {
        disabled: _vm.buttonDisabled || _vm.loading,
        autofocus: _vm.autofocus,
        type: _vm.nativeType
      },
      on: { click: _vm.handleClick }
    },
    [
      _vm.loading ? _c("i", { staticClass: "iw-icon-loading" }) : _vm._e(),
      _vm.icon && !_vm.loading ? _c("i", { class: _vm.icon }) : _vm._e(),
      _vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()
    ]
  )
}
var buttonvue_type_template_id_ca859fb4_staticRenderFns = []
buttonvue_type_template_id_ca859fb4_render._withStripped = true


// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=ca859fb4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'IwButton',

  inject: {
    iwForm: {
      default: ''
    },
    iwFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    _iwFormItemSize: function _iwFormItemSize() {
      return (this.iwFormItem || {}).iwFormItemSize;
    },
    buttonSize: function buttonSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    buttonDisabled: function buttonDisabled() {
      return this.disabled;
    }
  },

  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);
    }
  }
});
// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/button/src/button.vue





/* normalize component */

var button_component = normalizeComponent(
  src_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_ca859fb4_render,
  buttonvue_type_template_id_ca859fb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var button_api; }
button_component.options.__file = "packages/button/src/button.vue"
/* harmony default export */ var src_button = (button_component.exports);
// CONCATENATED MODULE: ./packages/button/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=template&id=0e4aade6&
var selectvue_type_template_id_0e4aade6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "iw-popover",
    {
      attrs: {
        trigger: _vm.trigger,
        placement: _vm.placement,
        "append-to-body": _vm.appendToBody,
        "popper-class":
          "iw-select iw-select--" +
          _vm.iwSize +
          (_vm.disabled ? " iw-select--disabled" : "") +
          (_vm.className ? " " + _vm.className : ""),
        disabled: _vm.disabled,
        width: null
      },
      model: {
        value: _vm.visible,
        callback: function($$v) {
          _vm.visible = $$v
        },
        expression: "visible"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "iw-select-reference",
          attrs: { slot: "reference" },
          slot: "reference"
        },
        [
          _c(
            "div",
            {
              class: [
                {
                  "is-focus": !_vm.disabled && _vm.visible,
                  "is-disabled": _vm.disabled,
                  "has-error": _vm.hasError
                },
                "iw-input",
                "iw-input--" + _vm.iwSize
              ],
              style: _vm.referenceWidth
                ? "width:" + _vm.referenceWidth + "px"
                : ""
            },
            [
              _c("div", { staticClass: "iw-input__inner" }, [
                _vm.triggerText
                  ? _c(
                      "span",
                      { staticClass: "iw-input__value" },
                      [_c("font", [_vm._v(_vm._s(_vm.triggerText))])],
                      1
                    )
                  : _vm.showSearch
                  ? _c("span", { staticClass: "iw-input__value" }, [
                      _vm.visible
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.keyword,
                                expression: "keyword"
                              }
                            ],
                            ref: "input",
                            style: "width:" + (_vm.referenceWidth - 36) + "px",
                            attrs: {
                              disabled: _vm.disabled,
                              unselectable: !_vm.visible ? "off" : "on",
                              placeholder: _vm.placeholderText
                            },
                            domProps: { value: _vm.keyword },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.keyword = $event.target.value
                                },
                                _vm.handleSearchChange
                              ],
                              focus: _vm.handleSearchFocus,
                              blur: _vm.handleSearchBlur
                            }
                          })
                        : _vm.valueText
                        ? _c("input", {
                            ref: "input",
                            style: "width:" + (_vm.referenceWidth - 36) + "px",
                            attrs: {
                              disabled: _vm.disabled,
                              unselectable: "on",
                              readonly: ""
                            },
                            domProps: { value: _vm.valueText }
                          })
                        : _c("input", {
                            staticClass: "iw-input__placeholder",
                            style: "width:" + (_vm.referenceWidth - 36) + "px",
                            attrs: {
                              disabled: _vm.disabled,
                              unselectable: "on",
                              readonly: ""
                            },
                            domProps: {
                              value:
                                _vm.placeholder ||
                                _vm.t("iw.select.placeholder")
                            }
                          })
                    ])
                  : _vm.valueText && !_vm.showSearch
                  ? _c("span", { staticClass: "iw-input__value" }, [
                      _c("input", {
                        ref: "input",
                        style: "width:" + (_vm.referenceWidth - 36) + "px",
                        attrs: {
                          disabled: _vm.disabled,
                          unselectable: "on",
                          readonly: ""
                        },
                        domProps: { value: _vm.valueText }
                      })
                    ])
                  : _c("span", { staticClass: "iw-input__value" }, [
                      _c("input", {
                        staticClass: "iw-input__placeholder",
                        style: "width:" + (_vm.referenceWidth - 36) + "px",
                        attrs: {
                          disabled: _vm.disabled,
                          unselectable: "on",
                          readonly: ""
                        },
                        domProps: {
                          value:
                            _vm.placeholder || _vm.t("iw.select.placeholder")
                        }
                      })
                    ]),
                _c(
                  "span",
                  { staticClass: "iw-input__suffix" },
                  [
                    _vm._t("default", [
                      _c("i", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.showClose,
                            expression: "!showClose"
                          }
                        ],
                        class: ["iw-input__icon", "iw-icon-" + _vm.iconClass]
                      }),
                      _vm.showClose
                        ? _c("i", {
                            staticClass: "iw-input__icon iw-icon-circle-close"
                          })
                        : _vm._e()
                    ])
                  ],
                  2
                )
              ])
            ]
          )
        ]
      ),
      !_vm.disabled
        ? _c(
            "div",
            {
              style: "min-width:" + (_vm.referenceWidth - 2) + "px",
              attrs: { id: "iw-select__popover--" + _vm.id }
            },
            [
              _c(
                "div",
                { staticClass: "iw-select__body" },
                [
                  _c(
                    "iw-scrollbar",
                    {
                      ref: "scrollbarRight__KEY",
                      attrs: { "wrap-class": "iw-select__wrap" }
                    },
                    [
                      _vm.showCheckAll &&
                      _vm.multiple &&
                      _vm.datas &&
                      _vm.datas.filter(function(item) {
                        return item.visible !== false
                      }).length
                        ? _c("ul", { staticClass: "iw-select__group" }, [
                            _c(
                              "li",
                              {
                                staticClass: "iw-select__group-item",
                                class: "iw-select__group-item--" + _vm.iwSize,
                                on: {
                                  click: function($event) {
                                    _vm.handleCheckAllChange()
                                  }
                                }
                              },
                              [
                                _c("span", {
                                  class: [
                                    "iw-checkbox",
                                    _vm.isCheckAllChecked()
                                      ? "iw-checkbox--checked"
                                      : "",
                                    _vm.isCheckAllIndeterminate()
                                      ? "iw-checkbox--indeterminate"
                                      : ""
                                  ]
                                }),
                                _c(
                                  "span",
                                  { class: [_vm.multiple ? "iw-text" : ""] },
                                  [_vm._v(_vm._s(_vm.t("iw.select.checkAll")))]
                                )
                              ]
                            )
                          ])
                        : _vm._e(),
                      _vm.datas &&
                      _vm.datas.filter(function(item) {
                        return item.visible !== false
                      }).length
                        ? _c(
                            "ul",
                            { staticClass: "iw-select__group" },
                            [
                              _vm._l(_vm.datas, function(item, key) {
                                return [
                                  item.visible !== false
                                    ? _c(
                                        "li",
                                        {
                                          key: key,
                                          staticClass: "iw-select__group-item",
                                          class: [
                                            { on: item.selected },
                                            "iw-select__group-item--" +
                                              _vm.iwSize
                                          ],
                                          attrs: {
                                            "scroll-key":
                                              item[_vm.optionProps.value] +
                                              "_" +
                                              "SELECT"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.handleItemChange(item)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              attrs: {
                                                title:
                                                  item[_vm.optionProps.label]
                                              }
                                            },
                                            [
                                              _c("span", {
                                                class: [
                                                  _vm.multiple
                                                    ? "iw-checkbox"
                                                    : "",
                                                  _vm.multiple && item.selected
                                                    ? "iw-checkbox--checked"
                                                    : ""
                                                ]
                                              }),
                                              _c(
                                                "em",
                                                {
                                                  class: [
                                                    _vm.multiple
                                                      ? "iw-text"
                                                      : ""
                                                  ],
                                                  attrs: { title: item.value }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(item.value)
                                                  ),
                                                  _c(
                                                    "abbr",
                                                    {
                                                      staticClass: "font-gray"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          item.date
                                                            ? "(" +
                                                                item.date +
                                                                ")"
                                                            : ""
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _c("i", {
                                                staticClass:
                                                  "iw-select__item-icon"
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              })
                            ],
                            2
                          )
                        : _c("ul", { staticClass: "iw-select__group" }, [
                            _c(
                              "li",
                              {
                                staticClass: "iw-select__group-item",
                                class: "iw-select__group-item--" + _vm.iwSize,
                                on: {
                                  click: function($event) {
                                    _vm.visible = false
                                  }
                                }
                              },
                              [
                                _c(
                                  "em",
                                  { staticClass: "iw-select__placeholder" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.placeholder ||
                                          _vm.t("iw.select.placeholder")
                                      )
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                    ]
                  )
                ],
                1
              ),
              _vm.multiple &&
              _vm.datas &&
              _vm.datas.filter(function(item) {
                return item.visible !== false
              }).length
                ? _c(
                    "div",
                    { staticClass: "iw-select__footer" },
                    [
                      _c(
                        "iw-button",
                        {
                          attrs: { size: _vm.iwSize },
                          on: {
                            click: function($event) {
                              _vm.reset()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(_vm.t("iw.common.reset")) +
                              "\n      "
                          )
                        ]
                      ),
                      _c(
                        "iw-button",
                        {
                          attrs: { size: _vm.iwSize, type: "primary" },
                          on: {
                            click: function($event) {
                              _vm.submit(false)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(_vm.t("iw.common.confirm")) +
                              "\n      "
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        : _vm._e()
    ]
  )
}
var selectvue_type_template_id_0e4aade6_staticRenderFns = []
selectvue_type_template_id_0e4aade6_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=template&id=0e4aade6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: 'IwSelect',
  mixins: [mixins_locale],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: [Array, String, Number],
      default: function _default() {
        return [];
      }
    },
    defaultValue: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    id: {
      type: Number,
      default: function _default() {
        return parseInt(Math.random() * 10000);
      }
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: false
    },
    showCheckAll: {
      // 当此项为 true 时，显示顶部全选功能
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showSearch: {
      // 显示搜索框
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [Number, String],
      default: 0
    },
    optionProps: {
      type: Object,
      default: function _default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        };
      }
    },
    triggerText: {
      type: [String, Boolean],
      default: function _default() {
        return false;
      }
    },
    width: {
      type: [String, Number],
      default: function _default() {
        return null;
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    /**
     * Popover的属性
     */
    trigger: {
      // 触发方式， 可选：hover/focus/click/contextmenu
      type: String,
      default: 'click'
    },
    placement: {
      // 气泡框位置， 可选：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      type: String,
      default: ''
    },
    appendToBody: {
      // 是否插入至body下, 默认true
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: medium || small || mini
    }
  },
  data: function data() {
    return {
      visible: false, // 弹出层状态
      hasError: false,
      referenceWidth: null,
      datas: [],
      selectValues: [], // 多选状态下的选中值
      selectTexts: [], // 多选状态下的选中值名称
      checkedOptions: [],
      keyword: this.valueText, // 查询值
      lastSearch: undefined,
      placeholderText: this.placeholder
    };
  },

  computed: {
    iwSize: function iwSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    showClose: function showClose() {
      var hasValue = this.multiple ? Array.isArray(this.value) && this.value.length > 0 : this.value !== undefined && this.value !== null && this.value !== '';
      return this.clearable && !this.disabled && hasValue;
    },
    iconClass: function iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up';
    },
    valueText: function valueText() {
      if (this.multiple && this.checkedOptions && this.checkedOptions.length > 0) {
        if (this.checkedOptions.length > 1) {
          return this.$t('iw.common.selected') + '(' + this.checkedOptions.length + ')';
        } else {
          return this.checkedOptions[0][this.optionProps.label];
        }
      } else if (!this.multiple && this.checkedOptions && this.checkedOptions.length) {
        return this.checkedOptions[this.checkedOptions.length - 1][this.optionProps.label];
      } else {
        return '';
      }
    }
  },
  watch: {
    value: function value() {
      this.initData();
      this.initValue();
      this.initStatus();
    },
    data: function data() {
      this.initData();
      this.initValue();
      this.referenceWidth = this.$el.offsetWidth;
    },
    visible: function visible() {
      this.initData();
      this.initValue();
      this.initStatus();
    }
  },
  mounted: function mounted() {
    this.initData();
    this.initValue();
    this.initStatus();
    this.referenceWidth = this.$el.offsetWidth;
  },

  methods: {
    initValue: function initValue() {
      var _this = this;

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

      if (typeof value === 'number' || typeof value === 'string') {
        this.selectValues = [value];
      } else if (value instanceof Array) {
        this.selectValues = this.multiple ? deepClone(value) : [value[0]];
      } else {
        this.selectValues = [];
      }
      var selectTexts = this.datas.filter(function (item) {
        var selected = _this.selectValues.includes(item[_this.optionProps.value]);
        _this.$set(item, 'selected', selected);
        return selected;
      });
      this.selectTexts = deepClone(selectTexts);
      this.checkedOptions = deepClone(selectTexts);
      this.placeholderText = this.valueText || this.placeholder;
    },
    initData: function initData() {
      var _this2 = this;

      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.showSearch && !input) {
        this.keyword = this.visible ? undefined : this.valueText;
      }
      this.datas = this.data.map(function (item) {
        var visible = true;
        if (_this2.showSearch && _this2.keyword !== '' && _this2.keyword !== undefined && item[_this2.optionProps.label].indexOf(_this2.keyword) === -1) {
          visible = false;
        }
        item.visible = visible;
        return item;
      });
    },
    initStatus: function initStatus() {
      var _this3 = this;

      if (this.selectValues.length) {
        var key = this.selectValues[0];
        this.$nextTick(function () {
          _this3.scrollTop(key);
        });
      }
      if (this.showSearch && this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    scrollTop: function scrollTop(key) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'SELECT';

      var obj = document.querySelector('#iw-select__popover--' + this.id + ' [scroll-key="' + key + '_' + target + '"]');
      if (obj) {
        var scrollTop = parseInt(obj['offsetTop']);
        document.querySelector('#iw-select__popover--' + this.id + ' .iw-select__wrap').scrollTop = scrollTop;
      }
    },

    /**
     * 查询关键字，过滤数据源
     */
    handleSearchChange: function handleSearchChange(event) {
      var _this4 = this;

      this.lastSearch = event.timeStamp;
      setTimeout(function () {
        if (_this4.lastSearch === event.timeStamp) {
          _this4.initData(true);
        }
      }, 400);
    },
    handleSearchFocus: function handleSearchFocus() {
      this.placeholderText = this.valueText || this.placeholder;
    },
    handleSearchBlur: function handleSearchBlur() {
      this.placeholderText = this.valueText || this.placeholder;
    },
    handleItemChange: function handleItemChange(item, selected) {
      var _this5 = this;

      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected;
        this.$set(item, 'selected', selected);
      } else {
        this.datas.map(function (element) {
          _this5.$set(element, 'selected', item[_this5.optionProps.value] === element[_this5.optionProps.value]);
        });
      }
      this.selectTexts = this.datas.filter(function (item) {
        return item.selected;
      });
      this.selectValues = this.selectTexts.map(function (item) {
        return item[_this5.optionProps.value];
      });
      if (this.showSearch && this.$refs.input) {
        this.$refs.input.focus();
      }
      this.multiple || this.submit();
    },
    handleCheckAllChange: function handleCheckAllChange() {
      var _this6 = this;

      var selected = this.isCheckAllChecked();
      this.datas.map(function (item) {
        _this6.$set(item, 'selected', !selected);
        return item;
      });
      this.selectTexts = this.datas.filter(function (item) {
        return !!item.selected;
      });
      this.selectValues = this.datas.filter(function (item) {
        return !!item.selected;
      }).map(function (item) {
        return item[_this6.optionProps.value];
      });
      if (this.showSearch && this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    isCheckAllChecked: function isCheckAllChecked() {
      return this.selectValues.length === this.data.length;
    },
    isCheckAllIndeterminate: function isCheckAllIndeterminate() {
      return this.selectValues.length > 0 && this.selectValues.length !== this.datas.length;
    },
    reset: function reset() {
      var submit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.initValue(this.defaultValue);
      if (submit === true) {
        this.checkedOptions = deepClone(this.selectTexts);
      }
    },
    submit: function submit() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var value = this.multiple ? this.selectValues : this.selectValues[0];
      this.checkedOptions = deepClone(this.selectTexts);
      this.$emit('input', value);
      this.$emit('change', value);
      this.keyword = this.valueText;
      this.placeholderText = this.valueText || this.placeholder;
      this.visible = visible;
    },
    substr: function substr(str, len) {
      return util_substr(str, len);
    },
    setError: function setError() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.hasError = error;
    }
  }
});
// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/select.vue





/* normalize component */

var select_component = normalizeComponent(
  src_selectvue_type_script_lang_js_,
  selectvue_type_template_id_0e4aade6_render,
  selectvue_type_template_id_0e4aade6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_api; }
select_component.options.__file = "packages/select/src/select.vue"
/* harmony default export */ var src_select = (select_component.exports);
// CONCATENATED MODULE: ./packages/select/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&
var loadingvue_type_template_id_eee0a7ac_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "iw-loading-fade" },
      on: { "after-leave": _vm.handleAfterLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "iw-loading-mask",
          class: [_vm.customClass, { "is-fullscreen": _vm.fullscreen }],
          style: { backgroundColor: _vm.background || "" }
        },
        [
          _c("div", { staticClass: "iw-loading-spinner" }, [
            !_vm.spinner
              ? _c("i", { staticClass: "iw-icon-loading" })
              : _c("i", { class: _vm.spinner }),
            _vm.text
              ? _c("p", { staticClass: "iw-loading-text" }, [
                  _vm._v(_vm._s(_vm.text))
                ])
              : _vm._e()
          ])
        ]
      )
    ]
  )
}
var loadingvue_type_template_id_eee0a7ac_staticRenderFns = []
loadingvue_type_template_id_eee0a7ac_render._withStripped = true


// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ''
    };
  },


  methods: {
    handleAfterLeave: function handleAfterLeave() {
      this.$emit('after-leave');
    },
    setText: function setText(text) {
      this.text = text;
    }
  }
});
// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/loading/src/loading.vue





/* normalize component */

var loading_component = normalizeComponent(
  src_loadingvue_type_script_lang_js_,
  loadingvue_type_template_id_eee0a7ac_render,
  loadingvue_type_template_id_eee0a7ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var loading_api; }
loading_component.options.__file = "packages/loading/src/loading.vue"
/* harmony default export */ var loading = (loading_component.exports);
// CONCATENATED MODULE: ./src/utils/dom.js
var dom_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* istanbul ignore next */



var isServer = external_vue_default.a.prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

/* istanbul ignore next */
var getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : dom_typeof(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
}
// CONCATENATED MODULE: ./src/utils/popup/popup-manager.js



var hasModal = false;
var hasInitZIndex = false;
var popup_manager_zIndex = 2000;

var popup_manager_getModal = function getModal() {
  if (external_vue_default.a.prototype.$isServer) return;
  var modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;

    modalDom.addEventListener('touchmove', function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    modalDom.addEventListener('click', function () {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
    });
  }

  return modalDom;
};

var instances = {};

var PopupManager = {
  modalFade: true,

  getInstance: function getInstance(id) {
    return instances[id];
  },

  register: function register(id, instance) {
    if (id && instance) {
      instances[id] = instance;
    }
  },

  deregister: function deregister(id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },

  nextZIndex: function nextZIndex() {
    return PopupManager.zIndex++;
  },

  modalStack: [],

  doOnModalClick: function doOnModalClick() {
    var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem) return;

    var instance = PopupManager.getInstance(topItem.id);
    if (instance && instance.closeOnClickModal) {
      instance.close();
    }
  },

  openModal: function openModal(id, zIndex, dom, modalClass, modalFade) {
    if (external_vue_default.a.prototype.$isServer) return;
    if (!id || zIndex === undefined) return;
    this.modalFade = modalFade;

    var modalStack = this.modalStack;

    for (var i = 0, j = modalStack.length; i < j; i++) {
      var item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }

    var modalDom = popup_manager_getModal();

    addClass(modalDom, 'v-modal');
    if (this.modalFade && !hasModal) {
      addClass(modalDom, 'v-modal-enter');
    }
    if (modalClass) {
      var classArr = modalClass.trim().split(/\s+/);
      classArr.forEach(function (item) {
        return addClass(modalDom, item);
      });
    }
    setTimeout(function () {
      removeClass(modalDom, 'v-modal-enter');
    }, 200);

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.tabIndex = 0;
    modalDom.style.display = '';

    this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
  },

  closeModal: function closeModal(id) {
    var modalStack = this.modalStack;
    var modalDom = popup_manager_getModal();

    if (modalStack.length > 0) {
      var topItem = modalStack[modalStack.length - 1];
      if (topItem.id === id) {
        if (topItem.modalClass) {
          var classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach(function (item) {
            return removeClass(modalDom, item);
          });
        }

        modalStack.pop();
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (var i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }

    if (modalStack.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, 'v-modal-leave');
      }
      setTimeout(function () {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = 'none';
          PopupManager.modalDom = undefined;
        }
        removeClass(modalDom, 'v-modal-leave');
      }, 200);
    }
  }
};

Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get: function get() {
    if (!hasInitZIndex) {
      popup_manager_zIndex = (external_vue_default.a.prototype.$IWAYS || {}).zIndex || popup_manager_zIndex;
      hasInitZIndex = true;
    }
    return popup_manager_zIndex;
  },
  set: function set(value) {
    popup_manager_zIndex = value;
  }
});

var popup_manager_getTopPopup = function getTopPopup() {
  if (external_vue_default.a.prototype.$isServer) return;
  if (PopupManager.modalStack.length > 0) {
    var topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup) return;
    var instance = PopupManager.getInstance(topPopup.id);

    return instance;
  }
};

if (!external_vue_default.a.prototype.$isServer) {
  // handle `esc` key when the popup is shown
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      var topPopup = popup_manager_getTopPopup();

      if (topPopup && topPopup.closeOnPressEscape) {
        topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
      }
    }
  });
}

/* harmony default export */ var popup_manager = (PopupManager);
// CONCATENATED MODULE: ./src/utils/scrollbar-width.js
// import Vue from 'vue'

var scrollBarWidth = void 0;

/* harmony default export */ var scrollbar_width = (function () {
  // if (Vue.prototype.$isServer) return 0
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  var outer = document.createElement('div');
  outer.className = 'iw-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;

  return scrollBarWidth;
});
// CONCATENATED MODULE: ./src/utils/popup/index.js






var idSeed = 1;

var popup_scrollBarWidth = void 0;

/* harmony default export */ var popup = ({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    openDelay: {},
    closeDelay: {},
    zIndex: {},
    modal: {
      type: Boolean,
      default: false
    },
    modalFade: {
      type: Boolean,
      default: true
    },
    modalClass: {},
    modalAppendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },

  beforeMount: function beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    popup_manager.register(this._popupId, this);
  },
  beforeDestroy: function beforeDestroy() {
    popup_manager.deregister(this._popupId);
    popup_manager.closeModal(this._popupId);

    this.restoreBodyStyle();
  },
  data: function data() {
    return {
      opened: false,
      bodyPaddingRight: null,
      computedBodyPaddingRight: 0,
      withoutHiddenClass: true,
      rendered: false
    };
  },


  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        if (this._opening) return;
        if (!this.rendered) {
          this.rendered = true;
          external_vue_default.a.nextTick(function () {
            _this.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },

  methods: {
    open: function open(options) {
      var _this2 = this;

      if (!this.rendered) {
        this.rendered = true;
      }

      var props = merge({}, this.$props || this, options);

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }
      clearTimeout(this._openTimer);

      var openDelay = Number(props.openDelay);
      if (openDelay > 0) {
        this._openTimer = setTimeout(function () {
          _this2._openTimer = null;
          _this2.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },
    doOpen: function doOpen(props) {
      if (this.$isServer) return;
      if (this.willOpen && !this.willOpen()) return;
      if (this.opened) return;

      this._opening = true;

      var dom = this.$el;

      var modal = props.modal;

      var zIndex = props.zIndex;
      if (zIndex) {
        popup_manager.zIndex = zIndex;
      }

      if (modal) {
        if (this._closing) {
          popup_manager.closeModal(this._popupId);
          this._closing = false;
        }
        popup_manager.openModal(this._popupId, popup_manager.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);
        if (props.lockScroll) {
          this.withoutHiddenClass = !hasClass(document.body, 'iw-popup-parent--hidden');
          if (this.withoutHiddenClass) {
            this.bodyPaddingRight = document.body.style.paddingRight;
            this.computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10);
          }
          popup_scrollBarWidth = scrollbar_width();
          var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
          var bodyOverflowY = getStyle(document.body, 'overflowY');
          if (popup_scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.computedBodyPaddingRight + popup_scrollBarWidth + 'px';
          }
          addClass(document.body, 'iw-popup-parent--hidden');
        }
      }

      if (getComputedStyle(dom).position === 'static') {
        dom.style.position = 'absolute';
      }

      dom.style.zIndex = popup_manager.nextZIndex();
      this.opened = true;

      this.onOpen && this.onOpen();

      this.doAfterOpen();
    },
    doAfterOpen: function doAfterOpen() {
      this._opening = false;
    },
    close: function close() {
      var _this3 = this;

      if (this.willClose && !this.willClose()) return;

      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }
      clearTimeout(this._closeTimer);

      var closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(function () {
          _this3._closeTimer = null;
          _this3.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },
    doClose: function doClose() {
      this._closing = true;

      this.onClose && this.onClose();

      if (this.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200);
      }

      this.opened = false;

      this.doAfterClose();
    },
    doAfterClose: function doAfterClose() {
      popup_manager.closeModal(this._popupId);
      this._closing = false;
    },
    restoreBodyStyle: function restoreBodyStyle() {
      if (this.modal && this.withoutHiddenClass) {
        document.body.style.paddingRight = this.bodyPaddingRight;
        removeClass(document.body, 'iw-popup-parent--hidden');
      }
      this.withoutHiddenClass = true;
    }
  }
});


// CONCATENATED MODULE: ./src/utils/after-leave.js
/**
 * Bind after-leave event for vue instance. Make sure after-leave is called in any browsers.
 *
 * @param {Vue} instance Vue instance.
 * @param {Function} callback callback of after-leave event
 * @param {Number} speed the speed of transition, default value is 300ms
 * @param {Boolean} once weather bind after-leave once. default value is false.
 */
/* harmony default export */ var after_leave = (function (instance, callback) {
  var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
  var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!instance || !callback) throw new Error('instance & callback is required');
  var called = false;
  var afterLeaveCallback = function afterLeaveCallback() {
    if (called) return;
    called = true;
    if (callback) {
      callback.apply(null, arguments);
    }
  };
  if (once) {
    instance.$once('after-leave', afterLeaveCallback);
  } else {
    instance.$on('after-leave', afterLeaveCallback);
  }
  setTimeout(function () {
    afterLeaveCallback();
  }, speed + 100);
});
// CONCATENATED MODULE: ./packages/loading/src/directive.js





var Mask = external_vue_default.a.extend(loading);

var loadingDirective = {};
loadingDirective.install = function (Vue) {
  if (Vue.prototype.$isServer) return;
  var toggleLoading = function toggleLoading(el, binding) {
    if (binding.value) {
      Vue.nextTick(function () {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = getStyle(document.body, 'position');
          el.originalOverflow = getStyle(document.body, 'overflow');
          el.maskStyle.zIndex = popup_manager.nextZIndex();

          addClass(el.mask, 'is-fullscreen');
          insertDom(document.body, el, binding);
        } else {
          removeClass(el.mask, 'is-fullscreen');

          if (binding.modifiers.body) {
            el.originalPosition = getStyle(document.body, 'position');

            ['top', 'left'].forEach(function (property) {
              var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
              el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - parseInt(getStyle(document.body, 'margin-' + property), 10) + 'px';
            });
            ['height', 'width'].forEach(function (property) {
              el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
            });

            insertDom(document.body, el, binding);
          } else {
            el.originalPosition = getStyle(el, 'position');
            insertDom(el, el, binding);
          }
        }
      });
    } else {
      after_leave(el.instance, function (_) {
        if (!el.instance.hiding) return;
        el.domVisible = false;
        var target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
        removeClass(target, 'iw-loading-parent--relative');
        removeClass(target, 'iw-loading-parent--hidden');
        el.instance.hiding = false;
      }, 300, true);
      el.instance.visible = false;
      el.instance.hiding = true;
    }
  };
  var insertDom = function insertDom(parent, el, binding) {
    if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
      Object.keys(el.maskStyle).forEach(function (property) {
        el.mask.style[property] = el.maskStyle[property];
      });

      if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
        addClass(parent, 'iw-loading-parent--relative');
      }
      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
        addClass(parent, 'iw-loading-parent--hidden');
      }
      el.domVisible = true;

      parent.appendChild(el.mask);
      Vue.nextTick(function () {
        if (el.instance.hiding) {
          el.instance.$emit('after-leave');
        } else {
          el.instance.visible = true;
        }
      });
      el.domInserted = true;
    } else if (el.domVisible && el.instance.hiding === true) {
      el.instance.visible = true;
      el.instance.hiding = false;
    }
  };

  Vue.directive('loading', {
    bind: function bind(el, binding, vnode) {
      var textExr = el.getAttribute('iw-loading-text');
      var spinnerExr = el.getAttribute('iw-loading-spinner');
      var backgroundExr = el.getAttribute('iw-loading-background');
      var customClassExr = el.getAttribute('iw-loading-custom-class');
      var vm = vnode.context;
      var mask = new Mask({
        el: document.createElement('div'),
        data: {
          text: vm && vm[textExr] || textExr,
          spinner: vm && vm[spinnerExr] || spinnerExr,
          background: vm && vm[backgroundExr] || backgroundExr,
          customClass: vm && vm[customClassExr] || customClassExr,
          fullscreen: !!binding.modifiers.fullscreen
        }
      });
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};

      binding.value && toggleLoading(el, binding);
    },

    update: function update(el, binding) {
      el.instance.setText(el.getAttribute('iw-loading-text'));
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },

    unbind: function unbind(el, binding) {
      if (el.domInserted) {
        el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
        toggleLoading(el, { value: false, modifiers: binding.modifiers });
      }
      el.instance && el.instance.$destroy();
    }
  });
};

/* harmony default export */ var directive = (loadingDirective);
// CONCATENATED MODULE: ./packages/loading/src/index.js







var LoadingConstructor = external_vue_default.a.extend(loading);

var src_defaults = {
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: ''
};

var fullscreenLoading = void 0;

LoadingConstructor.prototype.originalPosition = '';
LoadingConstructor.prototype.originalOverflow = '';

LoadingConstructor.prototype.close = function () {
  var _this = this;

  if (this.fullscreen) {
    fullscreenLoading = undefined;
  }
  after_leave(this, function (_) {
    var target = _this.fullscreen || _this.body ? document.body : _this.target;
    removeClass(target, 'iw-loading-parent--relative');
    removeClass(target, 'iw-loading-parent--hidden');
    if (_this.$el && _this.$el.parentNode) {
      _this.$el.parentNode.removeChild(_this.$el);
    }
    _this.$destroy();
  }, 300);
  this.visible = false;
};

var src_addStyle = function addStyle(options, parent, instance) {
  var maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition = getStyle(document.body, 'position');
    instance.originalOverflow = getStyle(document.body, 'overflow');
    maskStyle.zIndex = popup_manager.nextZIndex();
  } else if (options.body) {
    instance.originalPosition = getStyle(document.body, 'position');
    ['top', 'left'].forEach(function (property) {
      var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
      maskStyle[property] = options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
    });
    ['height', 'width'].forEach(function (property) {
      maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px';
    });
  } else {
    instance.originalPosition = getStyle(parent, 'position');
  }
  Object.keys(maskStyle).forEach(function (property) {
    instance.$el.style[property] = maskStyle[property];
  });
};

var src_Loading = function Loading() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (external_vue_default.a.prototype.$isServer) return;
  options = merge({}, src_defaults, options);
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target);
  }
  options.target = options.target || document.body;
  if (options.target !== document.body) {
    options.fullscreen = false;
  } else {
    options.body = true;
  }
  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading;
  }

  var parent = options.body ? document.body : options.target;
  var instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  });

  src_addStyle(options, parent, instance);
  if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
    addClass(parent, 'iw-loading-parent--relative');
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, 'iw-loading-parent--hidden');
  }
  parent.appendChild(instance.$el);
  external_vue_default.a.nextTick(function () {
    instance.visible = true;
  });
  if (options.fullscreen) {
    fullscreenLoading = instance;
  }
  return instance;
};

/* harmony default export */ var src = (src_Loading);
// CONCATENATED MODULE: ./packages/loading/index.js



/* harmony default export */ var packages_loading = ({
  directive: directive,
  service: src
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/popover/src/popover.vue?vue&type=template&id=7d45d87c&
var popovervue_type_template_id_7d45d87c_render = function() {
  var _obj
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "popover", staticClass: "iw-popover__wrap" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.disabled && _vm.visible,
            expression: "!disabled&&visible"
          }
        ],
        ref: "contentWrapper",
        staticClass: "iw-popover",
        class: ((_obj = {}),
        (_obj["iw-placement-" + _vm.currentPlacement.split("-")[0]] = true),
        (_obj[_vm.popperClass] = true),
        _obj),
        style: { width: _vm.width + "px", zIndex: _vm.zIndex },
        attrs: { id: _vm.tooltipId }
      },
      [
        _c(
          "div",
          { staticClass: "iw-popover__content", style: _vm.bodyStyle },
          [_vm._t("default", [_vm._v(_vm._s(_vm.content))])],
          2
        ),
        _vm.showArrow
          ? _c("div", { ref: "arrow", staticClass: "iw-popover__arrow" })
          : _vm._e()
      ]
    ),
    _c("div", { ref: "triggerWrapper" }, [_vm._t("reference")], 2)
  ])
}
var popovervue_type_template_id_7d45d87c_staticRenderFns = []
popovervue_type_template_id_7d45d87c_render._withStripped = true


// CONCATENATED MODULE: ./packages/popover/src/popover.vue?vue&type=template&id=7d45d87c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/popover/src/popover.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var positions = ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'];
var stop = function stop(e) {
  return e.stopPropagation();
};
/* harmony default export */ var popovervue_type_script_lang_js_ = ({
  name: 'IwPopover',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      validator: function validator(value) {
        return positions.indexOf(value) >= 0 || value === undefined || value === '';
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator: function validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0;
      }
    },
    content: {
      type: String,
      default: ''
    },
    reference: {
      type: Object,
      default: function _default() {
        return undefined;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: String,
      default: ''
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '0'
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    bodyStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    offset: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      visible: false,
      zIndex: 2000,
      referenceElm: undefined,
      popperElm: undefined,
      currentPlacement: ''
    };
  },

  computed: {
    tooltipId: function tooltipId() {
      return 'iw-popover-' + generateId();
    }
  },
  watch: {
    value: function value() {
      var _this = this;

      setTimeout(function () {
        _this.visible = _this.value;
      }, 100);
    },
    visible: function visible() {
      this.zIndex = popup_manager.nextZIndex();
    }
  },
  mounted: function mounted() {
    var reference = this.referenceElm = this.reference || this.$refs.triggerWrapper;
    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceElm = this.$slots.reference[0].elm;
    }
    if (reference) {
      addClass(reference, 'iw-popover__reference');
      reference.setAttribute('aria-describedby', this.tooltipId);
      reference.setAttribute('tabindex', 0);
    }

    this.currentPlacement = this.currentPlacement || this.placement;
    this.currentPlacement = this.convertPlacement(this.currentPlacement);
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick);
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open);
      this.$refs.popover.addEventListener('mouseleave', this.close);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', stop);
      document.body.removeChild(this.popperElm);
    }
  },
  destroyed: function destroyed() {
    if (this.trigger === 'click') {
      this.$refs.popover && this.$refs.popover.removeEventListener('click', this.onClick);
    } else {
      this.$refs.popover && this.$refs.popover.removeEventListener('mouseenter', this.open);
      this.$refs.popover && this.$refs.popover.removeEventListener('mouseleave', this.close);
    }
  },


  methods: {
    convertPlacement: function convertPlacement(placement) {
      placement = placement.replace('Left', '-start');
      placement = placement.replace('Top', '-start');
      placement = placement.replace('Right', '-end');
      placement = placement.replace('Bottom', '-end');
      return placement;
    },
    positionContent: function positionContent() {
      this.popperElm = this.popperElm || this.$refs.contentWrapper;
      if (this.appendToBody) document.body.appendChild(this.popperElm);

      var _referenceElm$getBoun = this.referenceElm.getBoundingClientRect(),
          width = _referenceElm$getBoun.width,
          height = _referenceElm$getBoun.height,
          left = _referenceElm$getBoun.left,
          top = _referenceElm$getBoun.top;

      var _popperElm$getBoundin = this.popperElm.getBoundingClientRect(),
          popperHeight = _popperElm$getBoundin.height,
          popperWidth = _popperElm$getBoundin.width;

      var windowScrollX = window.scrollX || window.pageXOffset;
      var windowScrollY = window.scrollY || window.pageYOffset;
      var windowHeight = window.innerHeight;
      var windowWidth = window.innerWidth;
      /* 获取初始placement */
      this.currentPlacement = this.convertPlacement(this.placement);
      /**
       * 判断出 top bottom left right 四个主要方向
       * 并且当出现遮挡的时候自动修正方向
      */
      var placementArr = ['bottom', 'top', 'right', 'left'];
      var placement = this.currentPlacement.split('-')[0];
      placement = placementArr.includes(placement) ? placement : '';
      if (placement) placementArr.unshift(placement);
      placementArr = [].concat(_toConsumableArray(new Set(placementArr)));

      var modifyArr = ['start', 'end'];
      var modify = this.currentPlacement.split('-')[1] || '';
      modify = modifyArr.includes(modify) ? modify : placement ? 'center' : '';
      if (modify) modifyArr.unshift(modify);
      modifyArr = [].concat(_toConsumableArray(new Set(modifyArr)));

      var _placement = placementArr.find(function (_placement) {
        switch (_placement) {
          case 'bottom':
            if (windowHeight > top + height + popperHeight) return true;
            break;
          case 'top':
            if (top > popperHeight) return true;
            break;
          case 'right':
            if (windowWidth > left + width + popperWidth) return true;
            break;
          case 'left':
            if (left > popperWidth) return true;
            break;
        }
      }) || 'bottom';
      var _currentPlacement = [_placement];

      /* placement为空时，默认左对齐 */
      if (!placement) modify = 'start';
      /* 存在初始对齐方式时，重置对齐方式 */

      var _modify = modifyArr.find(function (type) {
        switch (type) {
          case 'center':
            if (['top', 'bottom'].includes(_placement)) {
              if (left + (width + popperWidth) / 2 < windowWidth && left + (width - popperWidth) / 2 > 0) return true;
            }
            if (['left', 'right'].includes(_placement)) {
              if (top + (height + popperHeight) / 2 < windowHeight && top + (height - popperHeight) / 2 > 0) return true;
            }
            break;
          case 'start':
            if (['top', 'bottom'].includes(_placement)) {
              if (left + popperWidth < windowWidth) return true;
            }
            if (['left', 'right'].includes(_placement)) {
              if (top + popperHeight < windowHeight) return true;
            }
            break;
          case 'end':
            if (['top', 'bottom'].includes(_placement)) {
              if (left + width > popperWidth) return true;
            }
            if (['left', 'right'].includes(_placement)) {
              if (top + height > popperHeight) return true;
            }
            break;
        }
      }) || '';
      /* 对齐方式合理时，重置对齐方式，不合理时，不设置对齐方式 */
      if (_modify && _modify !== 'center') _currentPlacement.push(_modify);

      _currentPlacement = _currentPlacement.join('-');
      /* 重置currentPlacement */
      this.currentPlacement = _currentPlacement;

      /* 相对reference居中时popper左边的距离 */
      var leftReferenceCenter = left - (popperWidth - width) / 2;
      /* 相对窗口居中时popper左边的距离 */
      var windowCenter = (windowWidth - popperWidth) / 2;

      var positionValue = {
        'top': {
          top: top + windowScrollY,
          left: (leftReferenceCenter + popperWidth < windowWidth ? leftReferenceCenter : windowCenter) + windowScrollX
        },
        'top-start': {
          top: top + windowScrollY,
          left: left + windowScrollX
        },
        'top-end': {
          top: top + windowScrollY,
          left: left + width - popperWidth + windowScrollX
        },
        'bottom': {
          top: top + height + windowScrollY,
          left: (leftReferenceCenter + popperWidth < windowWidth ? leftReferenceCenter : windowCenter) + windowScrollX
        },
        'bottom-start': {
          top: top + height + windowScrollY,
          left: left + windowScrollX
        },
        'bottom-end': {
          top: top + height + windowScrollY,
          left: left + width - popperWidth + windowScrollX
        },
        'left': {
          top: top + (height - popperHeight) / 2 + windowScrollY + (this.offset.top || 0),
          left: left + windowScrollX
        },
        'left-start': {
          top: top + windowScrollY + (this.offset.top || 0),
          left: left + windowScrollX
        },
        'left-end': {
          top: top + height - popperHeight + windowScrollY + (this.offset.top || 0),
          left: left + windowScrollX
        },
        'right': {
          top: top + (height - popperHeight) / 2 + windowScrollY + (this.offset.top || 0),
          left: left + width + windowScrollX
        },
        'right-start': {
          top: top + windowScrollY + (this.offset.top || 0),
          left: left + width + windowScrollX
        },
        'right-end': {
          top: top + height - popperHeight + windowScrollY + (this.offset.top || 0),
          left: left + width + windowScrollX
        }
      };

      if (!this.appendToBody) {
        var _$el = this.$el,
            offsetLeft = _$el.offsetLeft,
            offsetTop = _$el.offsetTop,
            offsetHeight = _$el.offsetHeight,
            offsetWidth = _$el.offsetWidth;

        var _$el$getBoundingClien = this.$el.getBoundingClientRect(),
            _left = _$el$getBoundingClien.left;

        var _document$body$getBou = document.body.getBoundingClientRect(),
            parentWidth = _document$body$getBou.width;

        positionValue = {
          top: {
            top: offsetTop,
            left: _left + popperWidth > parentWidth ? offsetLeft - popperWidth + width : offsetLeft
          },
          'top-start': {
            top: offsetTop,
            left: offsetLeft
          },
          'top-end': {
            top: offsetTop,
            left: offsetLeft - popperWidth + width
          },
          'bottom': {
            top: offsetHeight + offsetTop,
            left: _left + popperWidth > parentWidth ? offsetLeft - popperWidth + width : offsetLeft
          },
          'bottom-start': {
            top: offsetHeight + offsetTop,
            left: offsetLeft
          },
          'bottom-end': {
            top: offsetHeight + offsetTop,
            left: offsetLeft - popperWidth + width
          },
          'left': {
            top: offsetTop + (offsetHeight - popperHeight) / 2,
            left: offsetLeft
          },
          'left-start': {
            top: offsetTop,
            left: offsetLeft
          },
          'left-end': {
            top: offsetTop + (offsetHeight - popperHeight),
            left: offsetLeft
          },
          'right': {
            top: offsetTop + (offsetHeight - popperHeight) / 2,
            left: offsetLeft + offsetWidth
          },
          'right-start': {
            top: offsetTop,
            left: offsetLeft + offsetWidth
          },
          'right-end': {
            top: offsetTop + (offsetHeight - popperHeight),
            left: offsetLeft + offsetWidth
          }
        };
      }
      this.popperElm.style.left = positionValue[_currentPlacement].left + 'px';
      this.popperElm.style.top = positionValue[_currentPlacement].top + 'px';
      var arrowWidthHeight = 12;
      if (this.showArrow) {
        if (['top', 'bottom'].includes(_currentPlacement)) {
          this.$refs.arrow.style.left = (popperWidth - arrowWidthHeight) / 2 + 'px';
        }
        if (['top-start', 'bottom-start'].includes(_currentPlacement)) {
          this.$refs.arrow.style.left = (width - arrowWidthHeight) / 2 + 'px';
        }
        if (['top-end', 'bottom-end'].includes(_currentPlacement)) {
          this.$refs.arrow.style.left = popperWidth - (width + arrowWidthHeight) / 2 + 'px';
        }
        if (['left', 'right'].includes(_currentPlacement)) {
          this.$refs.arrow.style.top = (popperHeight - arrowWidthHeight) / 2 - (this.offset.top || 0) + 'px';
        }
        if (['left-start', 'right-start'].includes(_currentPlacement)) {
          this.$refs.arrow.style.top = arrowWidthHeight / 2 - (this.offset.top || 0) + 'px';
        }
        if (['left-end', 'right-end'].includes(_currentPlacement)) {
          this.$refs.arrow.style.top = popperHeight - (height + arrowWidthHeight) / 2 - (this.offset.top || 0) + 'px';
        }
      } else {
        this.popperElm.style.marginLeft = 0;
        this.popperElm.style.marginTop = 0;
      }
    },
    onClickDocument: function onClickDocument(e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return;
      }
      if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
        return;
      }
      this.close();
    },
    listenToDocument: function listenToDocument() {
      document.addEventListener('click', this.onClickDocument);
    },
    open: function open() {
      var _this2 = this;

      this.visible = true;
      this.$emit('input', this.visible);
      this.$nextTick(function () {
        _this2.positionContent();
        _this2.listenToDocument();
      });
    },
    close: function close() {
      this.visible = false;
      this.$emit('input', this.visible);
      document.removeEventListener('click', this.onClickDocument);
    },
    onClick: function onClick(event) {
      if (this.$refs.triggerWrapper && this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/popover/src/popover.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_popovervue_type_script_lang_js_ = (popovervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/popover/src/popover.vue





/* normalize component */

var popover_component = normalizeComponent(
  src_popovervue_type_script_lang_js_,
  popovervue_type_template_id_7d45d87c_render,
  popovervue_type_template_id_7d45d87c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var popover_api; }
popover_component.options.__file = "packages/popover/src/popover.vue"
/* harmony default export */ var popover = (popover_component.exports);
// CONCATENATED MODULE: ./packages/popover/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/dialog.vue?vue&type=template&id=458af334&
var dialogvue_type_template_id_458af334_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "dialog-fade" },
      on: { "after-enter": _vm.afterEnter, "after-leave": _vm.afterLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "iw-dialog__wrapper",
          on: {
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              return _vm.handleWrapperClick($event)
            }
          }
        },
        [
          _c(
            "div",
            {
              key: _vm.key,
              ref: "dialog",
              class: [
                "iw-dialog",
                {
                  "is-fullscreen": _vm.fullscreen,
                  "iw-dialog--center": _vm.center
                },
                _vm.customClass
              ],
              style: _vm.style,
              attrs: {
                "aria-label": _vm.title || "dialog",
                role: "dialog",
                "aria-modal": "true"
              }
            },
            [
              _c(
                "div",
                { staticClass: "iw-dialog__header" },
                [
                  _vm._t("title", [
                    _vm.title
                      ? _c("span", { staticClass: "iw-dialog__title" }, [
                          _vm._v(_vm._s(_vm.title))
                        ])
                      : _vm._e()
                  ]),
                  _vm.showClose
                    ? _c(
                        "button",
                        {
                          staticClass: "iw-dialog__headerbtn",
                          attrs: { type: "button", "aria-label": "Close" },
                          on: { click: _vm.handleClose }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "iw-dialog__close iw-icon iw-icon-close"
                          })
                        ]
                      )
                    : _vm._e()
                ],
                2
              ),
              _vm.rendered
                ? _c(
                    "div",
                    { staticClass: "iw-dialog__body" },
                    [_vm._t("default")],
                    2
                  )
                : _vm._e(),
              _vm.$slots.footer
                ? _c(
                    "div",
                    { staticClass: "iw-dialog__footer" },
                    [_vm._t("footer")],
                    2
                  )
                : _vm._e()
            ]
          )
        ]
      )
    ]
  )
}
var dialogvue_type_template_id_458af334_staticRenderFns = []
dialogvue_type_template_id_458af334_render._withStripped = true


// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue?vue&type=template&id=458af334&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/dialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var dialogvue_type_script_lang_js_ = ({
  name: 'IwDialog',

  mixins: [popup, emitter, migrating],

  props: {
    title: {
      type: [String, Boolean],
      default: false
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: false
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: false
    },

    width: {
      type: String,
      default: function _default() {
        return '';
      }
    },

    fullscreen: {
      type: Boolean,
      default: false
    },

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: '15vh'
    },
    beforeClose: {
      type: Function,
      default: undefined
    },
    center: {
      type: Boolean,
      default: false
    },

    destroyOnClose: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      closed: false,
      key: 0
    };
  },


  computed: {
    style: function style() {
      var style = {};
      if (!this.fullscreen) {
        style.marginTop = this.top;
        if (this.width === '0px') {
          style.width = '400px';
        } else if (this.width) {
          style.width = this.width;
        }
      }
      return style;
    }
  },

  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.closed = false;
        this.$emit('open');
        this.$el.addEventListener('scroll', this.updatePopper);
        this.$nextTick(function () {
          _this.$refs.dialog.scrollTop = 0;
        });
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper);
        if (!this.closed) this.$emit('close');
        if (this.destroyOnClose) {
          this.$nextTick(function () {
            _this.key++;
          });
        }
      }
    }
  },

  mounted: function mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },
  destroyed: function destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },


  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'size': 'size is removed.'
        }
      };
    },
    handleWrapperClick: function handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose: function handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide: function hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        this.closed = true;
      }
    },
    updatePopper: function updatePopper() {
      this.broadcast('IwSelectDropdown', 'updatePopper');
      this.broadcast('IwDropdownMenu', 'updatePopper');
    },
    afterEnter: function afterEnter() {
      this.$emit('opened');
    },
    afterLeave: function afterLeave() {
      this.$emit('closed');
    }
  }
});
// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_dialogvue_type_script_lang_js_ = (dialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue





/* normalize component */

var dialog_component = normalizeComponent(
  src_dialogvue_type_script_lang_js_,
  dialogvue_type_template_id_458af334_render,
  dialogvue_type_template_id_458af334_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dialog_api; }
dialog_component.options.__file = "packages/dialog/src/dialog.vue"
/* harmony default export */ var dialog = (dialog_component.exports);
// CONCATENATED MODULE: ./packages/dialog/index.js

// EXTERNAL MODULE: external "resize-observer-polyfill"
var external_resize_observer_polyfill_ = __webpack_require__(4);
var external_resize_observer_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_resize_observer_polyfill_);

// CONCATENATED MODULE: ./src/utils/resize-event.js

var resize_event_isServer = typeof window === 'undefined';

/* istanbul ignore next */
var resizeHandler = function resizeHandler(entries) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;

      var listeners = entry.target.__resizeListeners__ || [];
      if (listeners.length) {
        listeners.forEach(function (fn) {
          fn();
        });
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/* istanbul ignore next */
var resize_event_addResizeListener = function addResizeListener(element, fn) {
  if (resize_event_isServer) return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new external_resize_observer_polyfill_default.a(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
};

/* istanbul ignore next */
var removeResizeListener = function removeResizeListener(element, fn) {
  if (!element || !element.__resizeListeners__) return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
};
// CONCATENATED MODULE: ./packages/scrollbar/util.js
var BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

function renderThumbStyle(_ref) {
  var move = _ref.move,
      size = _ref.size,
      bar = _ref.bar;

  var style = {};
  var translate = 'translate' + bar.axis + '(' + move + '%)';

  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
}
// CONCATENATED MODULE: ./packages/scrollbar/bar.js



/* istanbul ignore next */
/* harmony default export */ var scrollbar_bar = ({
  name: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number,
    keepShow: Boolean
  },

  computed: {
    bar: function bar() {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap: function wrap() {
      return this.$parent.wrap;
    }
  },

  render: function render(h) {
    var size = this.size,
        move = this.move,
        bar = this.bar;


    return h(
      'div',
      {
        'class': ['iw-scrollbar__bar', 'is-' + bar.key],
        style: this.keepShow ? 'opacity: 1' : '',
        on: {
          'mousedown': this.clickTrackHandler
        }
      },
      [h('div', {
        ref: 'thumb',
        'class': 'iw-scrollbar__thumb',
        on: {
          'mousedown': this.clickThumbHandler
        },

        style: renderThumbStyle({ size: size, move: move, bar: bar }) })]
    );
  },


  methods: {
    clickThumbHandler: function clickThumbHandler(e) {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHandler: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    startDrag: function startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;

      on(document, 'mousemove', this.mouseMoveDocumentHandler);
      on(document, 'mouseup', this.mouseUpDocumentHandler);
      document.onselectstart = function () {
        return false;
      };
    },
    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];

      if (!prevPage) return;

      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      off(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
  },

  destroyed: function destroyed() {
    off(document, 'mouseup', this.mouseUpDocumentHandler);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/index.js
// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js






/* istanbul ignore next */
/* harmony default export */ var scrollbar = ({
  name: 'IwScrollbar',

  components: { Bar: scrollbar_bar },

  props: {
    native: Boolean,
    keepShow: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

  data: function data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },


  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },

  render: function render(h) {
    var gutter = scrollbar_width();
    var style = this.wrapStyle;

    if (gutter) {
      var gutterWith = '-' + gutter + 'px';
      var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';

      if (Array.isArray(this.wrapStyle)) {
        style = toObject(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    var view = h(this.tag, {
      class: ['iw-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    var wrap = h(
      'div',
      {
        ref: 'wrap',
        style: style,
        on: {
          'scroll': this.handleScroll
        },

        'class': [this.wrapClass, 'iw-scrollbar__wrap', gutter ? '' : 'iw-scrollbar__wrap--hidden-default'] },
      [[view]]
    );
    var nodes = void 0;

    if (!this.native) {
      nodes = [wrap, h(scrollbar_bar, {
        attrs: {
          move: this.moveX,
          keepShow: this.keepShow,
          size: this.sizeWidth }
      }), h(scrollbar_bar, {
        attrs: {
          vertical: true,
          move: this.moveY,
          keepShow: this.keepShow,
          size: this.sizeHeight }
      })];
    } else {
      nodes = [h(
        'div',
        {
          ref: 'wrap',
          'class': [this.wrapClass, 'iw-scrollbar__wrap'],
          style: style },
        [[view]]
      )];
    }
    return h('div', { class: 'iw-scrollbar' }, nodes);
  },


  methods: {
    handleScroll: function handleScroll() {
      var wrap = this.wrap;

      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;

      this.$emit('scroll', { scrollTop: wrap.scrollTop, scrollLeft: wrap.scrollLeft });
    },
    update: function update() {
      var wrap = this.wrap;
      if (!wrap) return;

      var heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      var widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },

  mounted: function mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && resize_event_addResizeListener(this.$refs.resize, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.native) return;
    !this.noresize && removeResizeListener(this.$refs.resize, this.update);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/table.vue?vue&type=template&id=493fe34e&
var tablevue_type_template_id_493fe34e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "iw-table",
      class: [
        {
          "iw-table--fit": _vm.fit,
          "iw-table--striped": _vm.stripe,
          "iw-table--border": _vm.border || _vm.isGroup,
          "iw-table--hidden": _vm.isHidden,
          "iw-table--group": _vm.isGroup,
          "iw-table--fluid-height": _vm.maxHeight,
          "iw-table--scrollable-x": _vm.layout.scrollX,
          "iw-table--scrollable-y": _vm.layout.scrollY,
          "iw-table--enable-row-hover": !_vm.store.states.isComplex,
          "iw-table--enable-row-transition":
            (_vm.store.states.data || []).length !== 0 &&
            (_vm.store.states.data || []).length < 100
        },
        _vm.tableSize ? "iw-table--" + _vm.tableSize : ""
      ],
      on: {
        mouseleave: function($event) {
          _vm.handleMouseLeave($event)
        }
      }
    },
    [
      _c(
        "div",
        { ref: "hiddenColumns", staticClass: "hidden-columns" },
        [_vm._t("default")],
        2
      ),
      _vm.showHeader
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleHeaderFooterMousewheel,
                  expression: "handleHeaderFooterMousewheel"
                }
              ],
              ref: "headerWrapper",
              staticClass: "iw-table__header-wrapper"
            },
            [
              _c("table-header", {
                ref: "tableHeader",
                style: {
                  width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + "px" : ""
                },
                attrs: {
                  store: _vm.store,
                  border: _vm.border,
                  "default-sort": _vm.defaultSort
                }
              })
            ],
            1
          )
        : _vm._e(),
      _c(
        "div",
        {
          ref: "bodyWrapper",
          staticClass: "iw-table__body-wrapper",
          class: [
            _vm.layout.scrollX
              ? "is-scrolling-" + _vm.scrollPosition
              : "is-scrolling-none"
          ],
          style: [_vm.bodyHeight]
        },
        [
          _c("table-body", {
            style: {
              width: _vm.bodyWidth
            },
            attrs: {
              context: _vm.context,
              store: _vm.store,
              stripe: _vm.stripe,
              "row-class-name": _vm.rowClassName,
              "row-style": _vm.rowStyle,
              highlight: _vm.highlightCurrentRow
            }
          }),
          !_vm.data || _vm.data.length === 0
            ? _c(
                "div",
                {
                  ref: "emptyBlock",
                  staticClass: "iw-table__empty-block",
                  style: _vm.emptyBlockStyle
                },
                [
                  _c(
                    "span",
                    { staticClass: "iw-table__empty-text" },
                    [
                      _vm._t("empty", [
                        _vm._v(
                          _vm._s(_vm.emptyText || _vm.t("iw.table.emptyText"))
                        )
                      ])
                    ],
                    2
                  )
                ]
              )
            : _vm._e(),
          _vm.$slots.append
            ? _c(
                "div",
                {
                  ref: "appendWrapper",
                  staticClass: "iw-table__append-wrapper"
                },
                [_vm._t("append")],
                2
              )
            : _vm._e()
        ],
        1
      ),
      _vm.showSummary
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.data && _vm.data.length > 0,
                  expression: "data && data.length > 0"
                },
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleHeaderFooterMousewheel,
                  expression: "handleHeaderFooterMousewheel"
                }
              ],
              ref: "footerWrapper",
              staticClass: "iw-table__footer-wrapper"
            },
            [
              _c("table-footer", {
                style: {
                  width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + "px" : ""
                },
                attrs: {
                  store: _vm.store,
                  border: _vm.border,
                  "sum-text": _vm.sumText || _vm.t("iw.table.sumText"),
                  "summary-method": _vm.summaryMethod,
                  "default-sort": _vm.defaultSort
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm.fixedColumns.length > 0
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleFixedMousewheel,
                  expression: "handleFixedMousewheel"
                }
              ],
              ref: "fixedWrapper",
              staticClass: "iw-table__fixed",
              style: [
                {
                  width: _vm.layout.fixedWidth
                    ? _vm.layout.fixedWidth + "px"
                    : ""
                },
                _vm.fixedHeight
              ]
            },
            [
              _vm.showHeader
                ? _c(
                    "div",
                    {
                      ref: "fixedHeaderWrapper",
                      staticClass: "iw-table__fixed-header-wrapper"
                    },
                    [
                      _c("table-header", {
                        ref: "fixedTableHeader",
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "left",
                          border: _vm.border,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _c(
                "div",
                {
                  ref: "fixedBodyWrapper",
                  staticClass: "iw-table__fixed-body-wrapper",
                  style: [
                    {
                      top: _vm.layout.headerHeight + "px"
                    },
                    _vm.fixedBodyHeight
                  ]
                },
                [
                  _c("table-body", {
                    style: {
                      width: _vm.bodyWidth
                    },
                    attrs: {
                      fixed: "left",
                      store: _vm.store,
                      stripe: _vm.stripe,
                      highlight: _vm.highlightCurrentRow,
                      "row-class-name": _vm.rowClassName,
                      "row-style": _vm.rowStyle
                    }
                  }),
                  _vm.$slots.append
                    ? _c("div", {
                        staticClass: "iw-table__append-gutter",
                        style: { height: _vm.layout.appendHeight + "px" }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm.showSummary
                ? _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.data && _vm.data.length > 0,
                          expression: "data && data.length > 0"
                        }
                      ],
                      ref: "fixedFooterWrapper",
                      staticClass: "iw-table__fixed-footer-wrapper"
                    },
                    [
                      _c("table-footer", {
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "left",
                          border: _vm.border,
                          "sum-text": _vm.sumText || _vm.t("iw.table.sumText"),
                          "summary-method": _vm.summaryMethod,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm.rightFixedColumns.length > 0
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleFixedMousewheel,
                  expression: "handleFixedMousewheel"
                }
              ],
              ref: "rightFixedWrapper",
              staticClass: "iw-table__fixed-right",
              style: [
                {
                  width: _vm.layout.rightFixedWidth
                    ? _vm.layout.rightFixedWidth + "px"
                    : "",
                  right: _vm.layout.scrollY
                    ? (_vm.border
                        ? _vm.layout.gutterWidth
                        : _vm.layout.gutterWidth || 0) + "px"
                    : ""
                },
                _vm.fixedHeight
              ]
            },
            [
              _vm.showHeader
                ? _c(
                    "div",
                    {
                      ref: "rightFixedHeaderWrapper",
                      staticClass: "iw-table__fixed-header-wrapper"
                    },
                    [
                      _c("table-header", {
                        ref: "rightFixedTableHeader",
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "right",
                          border: _vm.border,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _c(
                "div",
                {
                  ref: "rightFixedBodyWrapper",
                  staticClass: "iw-table__fixed-body-wrapper",
                  style: [
                    {
                      top: _vm.layout.headerHeight + "px"
                    },
                    _vm.fixedBodyHeight
                  ]
                },
                [
                  _c("table-body", {
                    style: {
                      width: _vm.bodyWidth
                    },
                    attrs: {
                      fixed: "right",
                      store: _vm.store,
                      stripe: _vm.stripe,
                      "row-class-name": _vm.rowClassName,
                      "row-style": _vm.rowStyle,
                      highlight: _vm.highlightCurrentRow
                    }
                  }),
                  _vm.$slots.append
                    ? _c("div", {
                        staticClass: "iw-table__append-gutter",
                        style: { height: _vm.layout.appendHeight + "px" }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm.showSummary
                ? _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.data && _vm.data.length > 0,
                          expression: "data && data.length > 0"
                        }
                      ],
                      ref: "rightFixedFooterWrapper",
                      staticClass: "iw-table__fixed-footer-wrapper"
                    },
                    [
                      _c("table-footer", {
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "right",
                          border: _vm.border,
                          "sum-text": _vm.sumText || _vm.t("iw.table.sumText"),
                          "summary-method": _vm.summaryMethod,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm.rightFixedColumns.length > 0
        ? _c("div", {
            ref: "rightFixedPatch",
            staticClass: "iw-table__fixed-right-patch",
            style: {
              width: _vm.layout.scrollY ? _vm.layout.gutterWidth + "px" : "0",
              height: _vm.layout.headerHeight + "px"
            }
          })
        : _vm._e(),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.resizeProxyVisible,
            expression: "resizeProxyVisible"
          }
        ],
        ref: "resizeProxy",
        staticClass: "iw-table__column-resize-proxy"
      })
    ]
  )
}
var tablevue_type_template_id_493fe34e_staticRenderFns = []
tablevue_type_template_id_493fe34e_render._withStripped = true


// CONCATENATED MODULE: ./packages/table/src/table.vue?vue&type=template&id=493fe34e&

// EXTERNAL MODULE: external "throttle-debounce"
var external_throttle_debounce_ = __webpack_require__(2);

// EXTERNAL MODULE: external "normalize-wheel"
var external_normalize_wheel_ = __webpack_require__(5);
var external_normalize_wheel_default = /*#__PURE__*/__webpack_require__.n(external_normalize_wheel_);

// CONCATENATED MODULE: ./src/directives/mousewheel.js


var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var mousewheel_mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      var normalized = external_normalize_wheel_default()(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

/* harmony default export */ var directives_mousewheel = ({
  bind: function bind(el, binding) {
    mousewheel_mousewheel(el, binding.value);
  }
});
// CONCATENATED MODULE: ./packages/table/src/util.js
var util_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var getCell = function getCell(event) {
  var cell = event.target;

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode;
  }

  return null;
};

var isObject = function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : util_typeof(obj)) === 'object';
};

var util_orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  var getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return getValueByPath(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== '$key') {
      if (isObject(value) && '$value' in value) value = value.$value;
    }
    return [isObject(value) ? getValueByPath(value, sortKey) : value];
  };
  var compare = function compare(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (var i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort(function (a, b) {
    var order = compare(a, b);
    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index;
    }
    return order * reverse;
  }).map(function (item) {
    return item.value;
  });
};

var getColumnById = function getColumnById(table, columnId) {
  var column = null;
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

var getColumnByKey = function getColumnByKey(table, columnKey) {
  var column = null;
  for (var i = 0; i < table.columns.length; i++) {
    var item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};

var getColumnByCell = function getColumnByCell(table, cell) {
  var matches = (cell.className || '').match(/iw-table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};

var getRowIdentity = function getRowIdentity(row, rowKey) {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }
    var key = rowKey.split('.');
    var current = row;
    for (var i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};

var getKeysMap = function getKeysMap(array, rowKey) {
  var arrayMap = {};
  (array || []).forEach(function (row, index) {
    arrayMap[getRowIdentity(row, rowKey)] = { row: row, index: index };
  });
  return arrayMap;
};

function util_hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function mergeOptions(defaults, config) {
  var options = {};
  var key = void 0;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (util_hasOwn(config, key)) {
      var value = config[key];
      if (typeof value !== 'undefined') {
        options[key] = value;
      }
    }
  }
  return options;
}

function parseWidth(width) {
  if (width !== undefined) {
    width = parseInt(width, 10);
    if (isNaN(width)) {
      width = null;
    }
  }
  return width;
}

function parseMinWidth(minWidth) {
  if (typeof minWidth !== 'undefined') {
    minWidth = parseWidth(minWidth);
    if (isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
};

function parseHeight(height) {
  if (typeof height === 'number') {
    return height;
  }
  if (typeof height === 'string') {
    if (/^\d+(?:px)?$/.test(height)) {
      return parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}

// https://github.com/reduxjs/redux/blob/master/src/compose.js
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

function toggleRowStatus(statusArr, row, newVal) {
  var changed = false;
  var index = statusArr.indexOf(row);
  var included = index !== -1;

  var addRow = function addRow() {
    statusArr.push(row);
    changed = true;
  };
  var removeRow = function removeRow() {
    statusArr.splice(index, 1);
    changed = true;
  };

  if (typeof newVal === 'boolean') {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}

function walkTreeNode(root, cb) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var lazyKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'hasChildren';

  var isNil = function isNil(array) {
    return !(Array.isArray(array) && array.length);
  };

  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach(function (item) {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      var children = item[childrenKey];
      if (!isNil(children)) {
        _walker(item, children, level + 1);
      }
    });
  }

  root.forEach(function (item) {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    var children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}
// CONCATENATED MODULE: ./packages/table/src/store/expand.js


/* harmony default export */ var expand = ({
  data: function data() {
    return {
      states: {
        defaultExpandAll: false,
        expandRows: []
      }
    };
  },


  methods: {
    updateExpandRows: function updateExpandRows() {
      var _states = this.states,
          _states$data = _states.data,
          data = _states$data === undefined ? [] : _states$data,
          rowKey = _states.rowKey,
          defaultExpandAll = _states.defaultExpandAll,
          expandRows = _states.expandRows;

      if (defaultExpandAll) {
        this.states.expandRows = data.slice();
      } else if (rowKey) {
        // TODO：这里的代码可以优化
        var expandRowsMap = getKeysMap(expandRows, rowKey);
        this.states.expandRows = data.reduce(function (prev, row) {
          var rowId = getRowIdentity(row, rowKey);
          var rowInfo = expandRowsMap[rowId];
          if (rowInfo) {
            prev.push(row);
          }
          return prev;
        }, []);
      } else {
        this.states.expandRows = [];
      }
    },
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      var changed = toggleRowStatus(this.states.expandRows, row, expanded);
      if (changed) {
        this.table.$emit('expand-change', row, this.states.expandRows.slice());
        this.scheduleLayout();
      }
    },
    setExpandRowKeys: function setExpandRowKeys(rowKeys) {
      this.assertRowKey();
      // TODO：这里的代码可以优化
      var _states2 = this.states,
          data = _states2.data,
          rowKey = _states2.rowKey;

      var keysMap = getKeysMap(data, rowKey);
      this.states.expandRows = rowKeys.reduce(function (prev, cur) {
        var info = keysMap[cur];
        if (info) {
          prev.push(info.row);
        }
        return prev;
      }, []);
    },
    isRowExpanded: function isRowExpanded(row) {
      var _states3 = this.states,
          _states3$expandRows = _states3.expandRows,
          expandRows = _states3$expandRows === undefined ? [] : _states3$expandRows,
          rowKey = _states3.rowKey;

      if (rowKey) {
        var expandMap = getKeysMap(expandRows, rowKey);
        return !!expandMap[getRowIdentity(row, rowKey)];
      }
      return expandRows.indexOf(row) !== -1;
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/store/current.js



/* harmony default export */ var current = ({
  data: function data() {
    return {
      states: {
        // 不可响应的，设置 currentRowKey 时，data 不一定存在，也许无法算出正确的 currentRow
        // 把该值缓存一下，当用户点击修改 currentRow 时，把该值重置为 null
        _currentRowKey: null,
        currentRow: null
      }
    };
  },


  methods: {
    setCurrentRowKey: function setCurrentRowKey(key) {
      this.assertRowKey();
      this.states._currentRowKey = key;
      this.setCurrentRowByKey(key);
    },
    restoreCurrentRowKey: function restoreCurrentRowKey() {
      this.states._currentRowKey = null;
    },
    setCurrentRowByKey: function setCurrentRowByKey(key) {
      var states = this.states;
      var _states$data = states.data,
          data = _states$data === undefined ? [] : _states$data,
          rowKey = states.rowKey;

      var currentRow = null;
      if (rowKey) {
        currentRow = arrayFind(data, function (item) {
          return getRowIdentity(item, rowKey) === key;
        });
      }
      states.currentRow = currentRow;
    },
    updateCurrentRow: function updateCurrentRow(currentRow) {
      var states = this.states,
          table = this.table;

      var oldCurrentRow = states.currentRow;
      if (currentRow && currentRow !== oldCurrentRow) {
        states.currentRow = currentRow;
        table.$emit('current-change', currentRow, oldCurrentRow);
        return;
      }
      if (!currentRow && oldCurrentRow) {
        states.currentRow = null;
        table.$emit('current-change', null, oldCurrentRow);
      }
    },
    updateCurrentRowData: function updateCurrentRowData() {
      var states = this.states,
          table = this.table;
      var rowKey = states.rowKey,
          _currentRowKey = states._currentRowKey;
      // data 为 null 时，解构时的默认值会被忽略

      var data = states.data || [];
      var oldCurrentRow = states.currentRow;

      // 当 currentRow 不在 data 中时尝试更新数据
      if (data.indexOf(oldCurrentRow) === -1 && oldCurrentRow) {
        if (rowKey) {
          var currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
          this.setCurrentRowByKey(currentRowKey);
        } else {
          states.currentRow = null;
        }
        if (states.currentRow === null) {
          table.$emit('current-change', null, oldCurrentRow);
        }
      } else if (_currentRowKey) {
        // 把初始时下设置的 rowKey 转化成 rowData
        this.setCurrentRowByKey(_currentRowKey);
        this.restoreCurrentRowKey();
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/store/tree.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ var tree = ({
  data: function data() {
    return {
      states: {
        // defaultExpandAll 存在于 expand.js 中，这里不重复添加
        // 在展开行中，expandRowKeys 会被转化成 expandRows，expandRowKeys 这个属性只是记录了 TreeTable 行的展开
        // TODO: 拆分为独立的 TreeTable，统一用法
        expandRowKeys: [],
        treeData: {},
        indent: 16,
        lazy: false,
        lazyTreeNodeMap: {},
        lazyColumnIdentifier: 'hasChildren',
        childrenColumnName: 'children'
      }
    };
  },


  computed: {
    // 嵌入型的数据，watch 无法是检测到变化 https://github.com/ElemeFE/element/issues/14998
    // TODO: 使用 computed 解决该问题，是否会造成性能问题？
    // @return { id: { level, children } }
    normalizedData: function normalizedData() {
      if (!this.states.rowKey) return {};
      var data = this.states.data || [];
      return this.normalize(data);
    },

    // @return { id: { children } }
    // 针对懒加载的情形，不处理嵌套数据
    normalizedLazyNode: function normalizedLazyNode() {
      var _states = this.states,
          rowKey = _states.rowKey,
          lazyTreeNodeMap = _states.lazyTreeNodeMap,
          lazyColumnIdentifier = _states.lazyColumnIdentifier;

      var keys = Object.keys(lazyTreeNodeMap);
      var res = {};
      if (!keys.length) return res;
      keys.forEach(function (key) {
        if (lazyTreeNodeMap[key].length) {
          var item = { children: [] };
          lazyTreeNodeMap[key].forEach(function (row) {
            var currentRowKey = getRowIdentity(row, rowKey);
            item.children.push(currentRowKey);
            if (row[lazyColumnIdentifier] && !res[currentRowKey]) {
              res[currentRowKey] = { children: [] };
            }
          });
          res[key] = item;
        }
      });
      return res;
    }
  },

  watch: {
    normalizedData: 'updateTreeData',
    normalizedLazyNode: 'updateTreeData'
  },

  methods: {
    normalize: function normalize(data) {
      var _states2 = this.states,
          childrenColumnName = _states2.childrenColumnName,
          lazyColumnIdentifier = _states2.lazyColumnIdentifier,
          rowKey = _states2.rowKey,
          lazy = _states2.lazy;

      var res = {};
      walkTreeNode(data, function (parent, children, level) {
        var parentId = getRowIdentity(parent, rowKey);
        if (Array.isArray(children)) {
          res[parentId] = {
            children: children.map(function (row) {
              return getRowIdentity(row, rowKey);
            }),
            level: level
          };
        } else if (lazy) {
          // 当 children 不存在且 lazy 为 true，该节点即为懒加载的节点
          res[parentId] = {
            children: [],
            lazy: true,
            level: level
          };
        }
      }, childrenColumnName, lazyColumnIdentifier);
      return res;
    },
    updateTreeData: function updateTreeData() {
      var nested = this.normalizedData;
      var normalizedLazyNode = this.normalizedLazyNode;
      var keys = Object.keys(nested);
      var newTreeData = {};
      if (keys.length) {
        var _states3 = this.states,
            oldTreeData = _states3.treeData,
            defaultExpandAll = _states3.defaultExpandAll,
            expandRowKeys = _states3.expandRowKeys,
            lazy = _states3.lazy;

        var rootLazyRowKeys = [];
        var getExpanded = function getExpanded(oldValue, key) {
          var included = defaultExpandAll || expandRowKeys && expandRowKeys.indexOf(key) !== -1;
          return !!(oldValue && oldValue.expanded || included);
        };
        // 合并 expanded 与 display，确保数据刷新后，状态不变
        keys.forEach(function (key) {
          var oldValue = oldTreeData[key];
          var newValue = _extends({}, nested[key]);
          newValue.expanded = getExpanded(oldValue, key);
          if (newValue.lazy) {
            var _ref = oldValue || {},
                _ref$loaded = _ref.loaded,
                loaded = _ref$loaded === undefined ? false : _ref$loaded,
                _ref$loading = _ref.loading,
                loading = _ref$loading === undefined ? false : _ref$loading;

            newValue.loaded = !!loaded;
            newValue.loading = !!loading;
            rootLazyRowKeys.push(key);
          }
          newTreeData[key] = newValue;
        });
        // 根据懒加载数据更新 treeData
        var lazyKeys = Object.keys(normalizedLazyNode);
        if (lazy && lazyKeys.length && rootLazyRowKeys.length) {
          lazyKeys.forEach(function (key) {
            var oldValue = oldTreeData[key];
            var lazyNodeChildren = normalizedLazyNode[key].children;
            if (rootLazyRowKeys.indexOf(key) !== -1) {
              // 懒加载的 root 节点，更新一下原有的数据，原来的 children 一定是空数组
              if (newTreeData[key].children.length !== 0) {
                throw new Error('[ElTable]children must be an empty array.');
              }
              newTreeData[key].children = lazyNodeChildren;
            } else {
              var _ref2 = oldValue || {},
                  _ref2$loaded = _ref2.loaded,
                  loaded = _ref2$loaded === undefined ? false : _ref2$loaded,
                  _ref2$loading = _ref2.loading,
                  loading = _ref2$loading === undefined ? false : _ref2$loading;

              newTreeData[key] = {
                lazy: true,
                loaded: !!loaded,
                loading: !!loading,
                expanded: getExpanded(oldValue, key),
                children: lazyNodeChildren,
                level: ''
              };
            }
          });
        }
      }
      this.states.treeData = newTreeData;
      this.updateTableScrollY();
    },
    updateTreeExpandKeys: function updateTreeExpandKeys(value) {
      this.states.expandRowKeys = value;
      this.updateTreeData();
    },
    toggleTreeExpansion: function toggleTreeExpansion(row, expanded) {
      this.assertRowKey();

      var _states4 = this.states,
          rowKey = _states4.rowKey,
          treeData = _states4.treeData;

      var id = getRowIdentity(row, rowKey);
      var data = id && treeData[id];
      if (id && data && 'expanded' in data) {
        var oldExpanded = data.expanded;
        expanded = typeof expanded === 'undefined' ? !data.expanded : expanded;
        treeData[id].expanded = expanded;
        if (oldExpanded !== expanded) {
          this.table.$emit('expand-change', row, expanded);
        }
        this.updateTableScrollY();
      }
    },
    loadOrToggle: function loadOrToggle(row) {
      this.assertRowKey();
      var _states5 = this.states,
          lazy = _states5.lazy,
          treeData = _states5.treeData,
          rowKey = _states5.rowKey;

      var id = getRowIdentity(row, rowKey);
      var data = treeData[id];
      if (lazy && data && 'loaded' in data && !data.loaded) {
        this.loadData(row, id, data);
      } else {
        this.toggleTreeExpansion(row);
      }
    },
    loadData: function loadData(row, key, treeNode) {
      var _this = this;

      var load = this.table.load;
      var _states6 = this.states,
          lazyTreeNodeMap = _states6.lazyTreeNodeMap,
          treeData = _states6.treeData;

      if (load && !treeData[key].loaded) {
        treeData[key].loading = true;
        load(row, treeNode, function (data) {
          if (!Array.isArray(data)) {
            throw new Error('[ElTable] data must be an array');
          }
          treeData[key].loading = false;
          treeData[key].loaded = true;
          treeData[key].expanded = true;
          if (data.length) {
            _this.$set(lazyTreeNodeMap, key, data);
          }
          _this.table.$emit('expand-change', row, true);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/store/watcher.js







var watcher_sortData = function sortData(data, states) {
  var sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  return util_orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};

var doFlattenColumns = function doFlattenColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

/* harmony default export */ var watcher = (external_vue_default.a.extend({
  data: function data() {
    return {
      states: {
        // 3.0 版本后要求必须设置该属性
        rowKey: null,

        // 渲染的数据来源，是对 table 中的 data 过滤排序后的结果
        data: [],

        // 是否包含固定列
        isComplex: false,

        // 列
        _columns: [], // 不可响应的
        originColumns: [],
        columns: [],
        fixedColumns: [],
        rightFixedColumns: [],
        leafColumns: [],
        fixedLeafColumns: [],
        rightFixedLeafColumns: [],
        leafColumnsLength: 0,
        fixedLeafColumnsLength: 0,
        rightFixedLeafColumnsLength: 0,

        // 选择
        isAllSelected: false,
        selection: [],
        reserveSelection: false,
        selectOnIndeterminate: false,
        selectable: null,

        // 过滤
        filters: {}, // 不可响应的
        filteredData: null,

        // 排序
        sortingColumn: null,
        sortProp: null,
        sortOrder: null,

        hoverRow: null
      }
    };
  },


  mixins: [expand, current, tree],

  methods: {
    // 检查 rowKey 是否存在
    assertRowKey: function assertRowKey() {
      var rowKey = this.states.rowKey;
      if (!rowKey) throw new Error('[ElTable] prop row-key is required');
    },


    // 更新列
    updateColumns: function updateColumns() {
      var states = this.states;
      var _columns = states._columns || [];
      states.fixedColumns = _columns.filter(function (column) {
        return column.fixed === true || column.fixed === 'left';
      });
      states.rightFixedColumns = _columns.filter(function (column) {
        return column.fixed === 'right';
      });

      if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
        _columns[0].fixed = true;
        states.fixedColumns.unshift(_columns[0]);
      }

      var notFixedColumns = _columns.filter(function (column) {
        return !column.fixed;
      });
      states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);

      var leafColumns = doFlattenColumns(notFixedColumns);
      var fixedLeafColumns = doFlattenColumns(states.fixedColumns);
      var rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);

      states.leafColumnsLength = leafColumns.length;
      states.fixedLeafColumnsLength = fixedLeafColumns.length;
      states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;

      states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
      states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
    },


    // 更新 DOM
    scheduleLayout: function scheduleLayout(needUpdateColumns) {
      if (needUpdateColumns) {
        this.updateColumns();
      }
      this.table.debouncedUpdateLayout();
    },


    // 选择
    isSelected: function isSelected(row) {
      var _states$selection = this.states.selection,
          selection = _states$selection === undefined ? [] : _states$selection;

      return selection.indexOf(row) > -1;
    },
    clearSelection: function clearSelection() {
      var states = this.states;
      states.isAllSelected = false;
      var oldSelection = states.selection;
      if (oldSelection.length) {
        states.selection = [];
        this.table.$emit('selection-change', []);
      }
    },
    cleanSelection: function cleanSelection() {
      var states = this.states;
      var data = states.data,
          rowKey = states.rowKey,
          selection = states.selection;

      var deleted = void 0;
      if (rowKey) {
        deleted = [];
        var selectedMap = getKeysMap(selection, rowKey);
        var dataMap = getKeysMap(data, rowKey);
        for (var key in selectedMap) {
          if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
            deleted.push(selectedMap[key].row);
          }
        }
      } else {
        deleted = selection.filter(function (item) {
          return data.indexOf(item) === -1;
        });
      }
      if (deleted.length) {
        var newSelection = selection.filter(function (item) {
          return deleted.indexOf(item) === -1;
        });
        states.selection = newSelection;
        this.table.$emit('selection-change', newSelection.slice());
      }
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      var emitChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var changed = toggleRowStatus(this.states.selection, row, selected);
      if (changed) {
        var newSelection = (this.states.selection || []).slice();
        // 调用 API 修改选中值，不触发 select 事件
        if (emitChange) {
          this.table.$emit('select', newSelection, row);
        }
        this.table.$emit('selection-change', newSelection);
      }
    },
    _toggleAllSelection: function _toggleAllSelection() {
      var states = this.states;
      var _states$data = states.data,
          data = _states$data === undefined ? [] : _states$data,
          selection = states.selection;
      // when only some rows are selected (but not all), select or deselect all of them
      // depending on the value of selectOnIndeterminate

      var value = states.selectOnIndeterminate ? !states.isAllSelected : !(states.isAllSelected || selection.length);
      states.isAllSelected = value;

      var selectionChanged = false;
      data.forEach(function (row, index) {
        if (states.selectable) {
          if (states.selectable.call(null, row, index) && toggleRowStatus(selection, row, value)) {
            selectionChanged = true;
          }
        } else {
          if (toggleRowStatus(selection, row, value)) {
            selectionChanged = true;
          }
        }
      });

      if (selectionChanged) {
        this.table.$emit('selection-change', selection ? selection.slice() : []);
      }
      this.table.$emit('select-all', selection);
    },
    updateSelectionByRowKey: function updateSelectionByRowKey() {
      var states = this.states;
      var selection = states.selection,
          rowKey = states.rowKey,
          data = states.data;

      var selectedMap = getKeysMap(selection, rowKey);
      data.forEach(function (row) {
        var rowId = getRowIdentity(row, rowKey);
        var rowInfo = selectedMap[rowId];
        if (rowInfo) {
          selection[rowInfo.index] = row;
        }
      });
    },
    updateAllSelected: function updateAllSelected() {
      var states = this.states;
      var selection = states.selection,
          rowKey = states.rowKey,
          selectable = states.selectable;
      // data 为 null 时，解构时的默认值会被忽略

      var data = states.data || [];
      if (data.length === 0) {
        states.isAllSelected = false;
        return;
      }

      var selectedMap = void 0;
      if (rowKey) {
        selectedMap = getKeysMap(selection, rowKey);
      }
      var isSelected = function isSelected(row) {
        if (selectedMap) {
          return !!selectedMap[getRowIdentity(row, rowKey)];
        } else {
          return selection.indexOf(row) !== -1;
        }
      };
      var isAllSelected = true;
      var selectedCount = 0;
      for (var i = 0, j = data.length; i < j; i++) {
        var item = data[i];
        var isRowSelectable = selectable && selectable.call(null, item, i);
        if (!isSelected(item)) {
          if (!selectable || isRowSelectable) {
            isAllSelected = false;
            break;
          }
        } else {
          selectedCount++;
        }
      }

      if (selectedCount === 0) isAllSelected = false;
      states.isAllSelected = isAllSelected;
    },


    // 过滤与排序
    updateFilters: function updateFilters(columns, values) {
      if (!Array.isArray(columns)) {
        columns = [columns];
      }
      var states = this.states;
      var filters = {};
      columns.forEach(function (col) {
        states.filters[col.id] = values;
        filters[col.columnKey || col.id] = values;
      });

      return filters;
    },
    updateSort: function updateSort(column, prop, order) {
      if (this.states.sortingColumn && this.states.sortingColumn !== column) {
        this.states.sortingColumn.order = null;
      }
      this.states.sortingColumn = column;
      this.states.sortProp = prop;
      this.states.sortOrder = order;
    },
    execFilter: function execFilter() {
      var _this = this;

      var states = this.states;
      var _data = states._data,
          filters = states.filters;

      var data = _data;

      Object.keys(filters).forEach(function (columnId) {
        var values = states.filters[columnId];
        if (!values || values.length === 0) return;
        var column = getColumnById(_this.states, columnId);
        if (column && column.filterMethod) {
          data = data.filter(function (row) {
            return values.some(function (value) {
              return column.filterMethod.call(null, value, row, column);
            });
          });
        }
      });

      states.filteredData = data;
    },
    execSort: function execSort() {
      var states = this.states;
      states.data = watcher_sortData(states.filteredData, states);
    },


    // 根据 filters 与 sort 去过滤 data
    execQuery: function execQuery(ignore) {
      if (!(ignore && ignore.filter)) {
        this.execFilter();
      }
      this.execSort();
    },
    clearFilter: function clearFilter(columnKeys) {
      var states = this.states;
      var _table$$refs = this.table.$refs,
          tableHeader = _table$$refs.tableHeader,
          fixedTableHeader = _table$$refs.fixedTableHeader,
          rightFixedTableHeader = _table$$refs.rightFixedTableHeader;


      var panels = {};
      if (tableHeader) panels = merge(panels, tableHeader.filterPanels);
      if (fixedTableHeader) panels = merge(panels, fixedTableHeader.filterPanels);
      if (rightFixedTableHeader) panels = merge(panels, rightFixedTableHeader.filterPanels);

      var keys = Object.keys(panels);
      if (!keys.length) return;

      if (typeof columnKeys === 'string') {
        columnKeys = [columnKeys];
      }

      if (Array.isArray(columnKeys)) {
        var columns = columnKeys.map(function (key) {
          return getColumnByKey(states, key);
        });
        keys.forEach(function (key) {
          var column = columns.find(function (col) {
            return col.id === key;
          });
          if (column) {
            // TODO: 优化这里的代码
            panels[key].filteredValue = [];
          }
        });
        this.commit('filterChange', {
          column: columns,
          values: [],
          silent: true,
          multi: true
        });
      } else {
        keys.forEach(function (key) {
          // TODO: 优化这里的代码
          panels[key].filteredValue = [];
        });

        states.filters = {};
        this.commit('filterChange', {
          column: {},
          values: [],
          silent: true
        });
      }
    },
    clearSort: function clearSort() {
      var states = this.states;
      if (!states.sortingColumn) return;

      this.updateSort(null, null, null);
      this.commit('changeSortCondition', {
        silent: true
      });
    },


    // 适配层，expand-row-keys 在 Expand 与 TreeTable 中都有使用
    setExpandRowKeysAdapter: function setExpandRowKeysAdapter(val) {
      // 这里会触发额外的计算，但为了兼容性，暂时这么做
      this.setExpandRowKeys(val);
      this.updateTreeExpandKeys(val);
    },


    // 展开行与 TreeTable 都要使用
    toggleRowExpansionAdapter: function toggleRowExpansionAdapter(row, expanded) {
      var hasExpandColumn = this.states.columns.some(function (_ref) {
        var type = _ref.type;
        return type === 'expand';
      });
      if (hasExpandColumn) {
        this.toggleRowExpansion(row, expanded);
      } else {
        this.toggleTreeExpansion(row, expanded);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/table/src/store/index.js




watcher.prototype.mutations = {
  setData: function setData(states, data) {
    var dataInstanceChanged = states._data !== data;
    states._data = data;

    this.execQuery();
    // 数据变化，更新部分数据。
    // 没有使用 computed，而是手动更新部分数据 https://github.com/vuejs/vue/issues/6660#issuecomment-331417140
    this.updateCurrentRowData();
    this.updateExpandRows();
    if (states.reserveSelection) {
      this.assertRowKey();
      this.updateSelectionByRowKey();
    } else {
      if (dataInstanceChanged) {
        this.clearSelection();
      } else {
        this.cleanSelection();
      }
    }
    this.updateAllSelected();

    this.updateTableScrollY();
  },
  insertColumn: function insertColumn(states, column, index, parent) {
    var array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }

    if (typeof index !== 'undefined') {
      array.splice(index, 0, column);
    } else {
      array.push(column);
    }

    if (column.type === 'selection') {
      states.selectable = column.selectable;
      states.reserveSelection = column.reserveSelection;
    }

    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics insert column
      this.scheduleLayout();
    }
  },
  removeColumn: function removeColumn(states, column, parent) {
    var array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }
    if (array) {
      array.splice(array.indexOf(column), 1);
    }

    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics remove column
      this.scheduleLayout();
    }
  },
  sort: function sort(states, options) {
    var prop = options.prop,
        order = options.order,
        init = options.init;

    if (prop) {
      var column = arrayFind(states.columns, function (column) {
        return column.property === prop;
      });
      if (column) {
        column.order = order;
        this.updateSort(column, prop, order);
        this.commit('changeSortCondition', { init: init });
      }
    }
  },
  changeSortCondition: function changeSortCondition(states, options) {
    // 修复 pr https://github.com/ElemeFE/element/pull/15012 导致的 bug
    var column = states.sortingColumn,
        prop = states.sortProp,
        order = states.sortOrder;

    if (order === null) {
      states.sortingColumn = null;
      states.sortProp = null;
    }
    var ingore = { filter: true };
    this.execQuery(ingore);

    if (!options || !(options.silent || options.init)) {
      this.table.$emit('sort-change', {
        column: column,
        prop: prop,
        order: order
      });
    }

    this.updateTableScrollY();
  },
  filterChange: function filterChange(states, options) {
    var column = options.column,
        values = options.values,
        silent = options.silent;

    var newFilters = this.updateFilters(column, values);

    this.execQuery();

    if (!silent) {
      this.table.$emit('filter-change', newFilters);
    }

    this.updateTableScrollY();
  },
  toggleAllSelection: function toggleAllSelection() {
    this.toggleAllSelection();
  },
  rowSelectedChanged: function rowSelectedChanged(states, row) {
    this.toggleRowSelection(row);
    this.updateAllSelected();
  },
  setHoverRow: function setHoverRow(states, row) {
    states.hoverRow = row;
  },
  setCurrentRow: function setCurrentRow(states, row) {
    this.updateCurrentRow(row);
  }
};

watcher.prototype.commit = function (name) {
  var mutations = this.mutations;
  if (mutations[name]) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error('Action not found: ' + name);
  }
};

watcher.prototype.updateTableScrollY = function () {
  external_vue_default.a.nextTick(this.table.updateScrollY);
};

/* harmony default export */ var src_store = (watcher);
// EXTERNAL MODULE: external "throttle-debounce/debounce"
var debounce_ = __webpack_require__(1);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./packages/table/src/store/helper.js



function createStore(table) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!table) {
    throw new Error('Table is required.');
  }

  var store = new src_store();
  store.table = table;
  // fix https://github.com/ElemeFE/element/issues/14075
  // related pr https://github.com/ElemeFE/element/pull/14146
  store.toggleAllSelection = debounce_default()(10, store._toggleAllSelection);
  Object.keys(initialState).forEach(function (key) {
    store.states[key] = initialState[key];
  });
  return store;
}

function mapStates(mapper) {
  var res = {};
  Object.keys(mapper).forEach(function (key) {
    var value = mapper[key];
    var fn = void 0;
    if (typeof value === 'string') {
      fn = function fn() {
        return this.store.states[value];
      };
    } else if (typeof value === 'function') {
      fn = function fn() {
        return value.call(this, this.store.states);
      };
    } else {
      console.error('invalid value type');
    }
    if (fn) {
      res[key] = fn;
    }
  });
  return res;
};
// CONCATENATED MODULE: ./packages/table/src/table-layout.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var table_layout_TableLayout = function () {
  function TableLayout(options) {
    _classCallCheck(this, TableLayout);

    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = null;
    this.fit = true;
    this.showHeader = true;

    this.height = null;
    this.scrollX = false;
    this.scrollY = false;
    this.bodyWidth = null;
    this.fixedWidth = null;
    this.rightFixedWidth = null;
    this.tableHeight = null;
    this.headerHeight = 44; // Table Header Height
    this.appendHeight = 0; // Append Slot Height
    this.footerHeight = 44; // Table Footer Height
    this.viewportHeight = null; // Table Height - Scroll Bar Height
    this.bodyHeight = null; // Table Height - Table Header Height
    this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
    this.gutterWidth = scrollbar_width();

    for (var name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    if (!this.table) {
      throw new Error('table is required for Table Layout');
    }
    if (!this.store) {
      throw new Error('store is required for Table Layout');
    }
  }

  _createClass(TableLayout, [{
    key: 'updateScrollY',
    value: function updateScrollY() {
      var height = this.height;
      if (height === null) return false;
      var bodyWrapper = this.table.bodyWrapper;
      if (this.table.$el && bodyWrapper) {
        var body = bodyWrapper.querySelector('.iw-table__body');
        var prevScrollY = this.scrollY;
        var scrollY = body.offsetHeight > this.bodyHeight;
        this.scrollY = scrollY;
        return prevScrollY !== scrollY;
      }
      return false;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(value) {
      var _this = this;

      var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'height';

      if (external_vue_default.a.prototype.$isServer) return;
      var el = this.table.$el;
      value = parseHeight(value);
      this.height = value;

      if (!el && (value || value === 0)) return external_vue_default.a.nextTick(function () {
        return _this.setHeight(value, prop);
      });

      if (typeof value === 'number') {
        el.style[prop] = value + 'px';
        this.updateElsHeight();
      } else if (typeof value === 'string') {
        el.style[prop] = value;
        this.updateElsHeight();
      }
    }
  }, {
    key: 'setMaxHeight',
    value: function setMaxHeight(value) {
      this.setHeight(value, 'max-height');
    }
  }, {
    key: 'getFlattenColumns',
    value: function getFlattenColumns() {
      var flattenColumns = [];
      var columns = this.table.columns;
      columns.forEach(function (column) {
        if (column.isColumnGroup) {
          flattenColumns.push.apply(flattenColumns, column.columns);
        } else {
          flattenColumns.push(column);
        }
      });

      return flattenColumns;
    }
  }, {
    key: 'updateElsHeight',
    value: function updateElsHeight() {
      var _this2 = this;

      if (!this.table.$ready) return external_vue_default.a.nextTick(function () {
        return _this2.updateElsHeight();
      });
      var _table$$refs = this.table.$refs,
          headerWrapper = _table$$refs.headerWrapper,
          appendWrapper = _table$$refs.appendWrapper,
          footerWrapper = _table$$refs.footerWrapper;

      this.appendHeight = appendWrapper ? appendWrapper.offsetHeight : 0;

      if (this.showHeader && !headerWrapper) return;

      // fix issue (https://github.com/ElemeFE/element/pull/16956)
      var headerTrElm = headerWrapper ? headerWrapper.querySelector('.iw-table__header tr') : null;
      var noneHeader = this.headerDisplayNone(headerTrElm);

      var headerHeight = this.headerHeight = !this.showHeader ? 0 : headerWrapper.offsetHeight;
      if (this.showHeader && !noneHeader && headerWrapper.offsetWidth > 0 && (this.table.columns || []).length > 0 && headerHeight < 2) {
        return external_vue_default.a.nextTick(function () {
          return _this2.updateElsHeight();
        });
      }
      var tableHeight = this.tableHeight = this.table.$el.clientHeight;
      var footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
      if (this.height !== null) {
        this.bodyHeight = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
      }
      this.fixedBodyHeight = this.scrollX ? this.bodyHeight - this.gutterWidth : this.bodyHeight;

      var noData = !(this.store.states.data && this.store.states.data.length);
      this.viewportHeight = this.scrollX ? tableHeight - (noData ? 0 : this.gutterWidth) : tableHeight;

      this.updateScrollY();
      this.notifyObservers('scrollable');
    }
  }, {
    key: 'headerDisplayNone',
    value: function headerDisplayNone(elm) {
      if (!elm) return true;
      var headerChild = elm;
      while (headerChild.tagName !== 'DIV') {
        if (getComputedStyle(headerChild).display === 'none') {
          return true;
        }
        headerChild = headerChild.parentElement;
      }
      return false;
    }
  }, {
    key: 'updateColumnsWidth',
    value: function updateColumnsWidth() {
      if (external_vue_default.a.prototype.$isServer) return;
      var fit = this.fit;
      var bodyWidth = this.table.$el.clientWidth;
      var bodyMinWidth = 0;

      var flattenColumns = this.getFlattenColumns();
      var flexColumns = flattenColumns.filter(function (column) {
        return typeof column.width !== 'number';
      });

      flattenColumns.forEach(function (column) {
        // Clean those columns whose width changed from flex to unflex
        if (typeof column.width === 'number' && column.realWidth) column.realWidth = null;
      });

      if (flexColumns.length > 0 && fit) {
        flattenColumns.forEach(function (column) {
          bodyMinWidth += column.width || column.minWidth || 80;
        });

        var scrollYWidth = this.scrollY ? this.gutterWidth : 0;

        if (bodyMinWidth <= bodyWidth - scrollYWidth) {
          // DON'T HAVE SCROLL BAR
          this.scrollX = false;

          var totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;

          if (flexColumns.length === 1) {
            flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
          } else {
            var allColumnsWidth = flexColumns.reduce(function (prev, column) {
              return prev + (column.minWidth || 80);
            }, 0);
            var flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
            var noneFirstWidth = 0;

            flexColumns.forEach(function (column, index) {
              if (index === 0) return;
              var flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
              noneFirstWidth += flexWidth;
              column.realWidth = (column.minWidth || 80) + flexWidth;
            });

            flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
          }
        } else {
          // HAVE HORIZONTAL SCROLL BAR
          this.scrollX = true;
          flexColumns.forEach(function (column) {
            column.realWidth = column.minWidth;
          });
        }

        this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
        this.table.resizeState.width = this.bodyWidth;
      } else {
        flattenColumns.forEach(function (column) {
          if (!column.width && !column.minWidth) {
            column.realWidth = 80;
          } else {
            column.realWidth = column.width || column.minWidth;
          }

          bodyMinWidth += column.realWidth;
        });
        this.scrollX = bodyMinWidth > bodyWidth;

        this.bodyWidth = bodyMinWidth;
      }

      var fixedColumns = this.store.states.fixedColumns;

      if (fixedColumns.length > 0) {
        var fixedWidth = 0;
        fixedColumns.forEach(function (column) {
          fixedWidth += column.realWidth || column.width;
        });

        this.fixedWidth = fixedWidth;
      }

      var rightFixedColumns = this.store.states.rightFixedColumns;
      if (rightFixedColumns.length > 0) {
        var rightFixedWidth = 0;
        rightFixedColumns.forEach(function (column) {
          rightFixedWidth += column.realWidth || column.width;
        });

        this.rightFixedWidth = rightFixedWidth;
      }

      this.notifyObservers('columns');
    }
  }, {
    key: 'addObserver',
    value: function addObserver(observer) {
      this.observers.push(observer);
    }
  }, {
    key: 'removeObserver',
    value: function removeObserver(observer) {
      var index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  }, {
    key: 'notifyObservers',
    value: function notifyObservers(event) {
      var _this3 = this;

      var observers = this.observers;
      observers.forEach(function (observer) {
        switch (event) {
          case 'columns':
            observer.onColumnsChange(_this3);
            break;
          case 'scrollable':
            observer.onScrollableChange(_this3);
            break;
          default:
            throw new Error('Table Layout don\'t have event ' + event + '.');
        }
      });
    }
  }]);

  return TableLayout;
}();

/* harmony default export */ var table_layout = (table_layout_TableLayout);
// CONCATENATED MODULE: ./packages/table/src/layout-observer.js
/* harmony default export */ var layout_observer = ({
  created: function created() {
    this.tableLayout.addObserver(this);
  },
  destroyed: function destroyed() {
    this.tableLayout.removeObserver(this);
  },


  computed: {
    tableLayout: function tableLayout() {
      var layout = this.layout;
      if (!layout && this.table) {
        layout = this.table.layout;
      }
      if (!layout) {
        throw new Error('Can not find table layout.');
      }
      return layout;
    }
  },

  mounted: function mounted() {
    this.onColumnsChange(this.tableLayout);
    this.onScrollableChange(this.tableLayout);
  },
  updated: function updated() {
    if (this.__updated__) return;
    this.onColumnsChange(this.tableLayout);
    this.onScrollableChange(this.tableLayout);
    this.__updated__ = true;
  },


  methods: {
    onColumnsChange: function onColumnsChange(layout) {
      var cols = this.$el.querySelectorAll('colgroup > col');
      if (!cols.length) return;
      var flattenColumns = layout.getFlattenColumns();
      var columnsMap = {};
      flattenColumns.forEach(function (column) {
        columnsMap[column.id] = column;
      });
      for (var i = 0, j = cols.length; i < j; i++) {
        var col = cols[i];
        var name = col.getAttribute('name');
        var column = columnsMap[name];
        if (column) {
          col.setAttribute('width', column.realWidth || column.width);
        }
      }
    },
    onScrollableChange: function onScrollableChange(layout) {
      var cols = this.$el.querySelectorAll('colgroup > col[name=gutter]');
      for (var i = 0, j = cols.length; i < j; i++) {
        var col = cols[i];
        col.setAttribute('width', layout.scrollY ? layout.gutterWidth : '0');
      }
      var ths = this.$el.querySelectorAll('th.gutter');
      for (var _i = 0, _j = ths.length; _i < _j; _i++) {
        var th = ths[_i];
        th.style.width = layout.scrollY ? layout.gutterWidth + 'px' : '0';
        th.style.display = layout.scrollY ? '' : 'none';
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/table-body.js
var table_body_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var table_body_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




// import IwCheckbox from '@iways-ui/packages/checkbox';
// import IwTooltip from '@iways-ui/packages/tooltip';




/* harmony default export */ var table_body = ({
  name: 'IwTableBody',

  mixins: [layout_observer],

  components: {
    // IwCheckbox,
    // IwTooltip
  },

  props: {
    store: {
      required: true
    },
    stripe: Boolean,
    context: {},
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: String,
    highlight: Boolean
  },

  render: function render(h) {
    var _this = this;

    var data = this.data || [];
    return h(
      'table',
      {
        'class': 'iw-table__body',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this.columns.map(function (column) {
        return h('col', {
          attrs: { name: column.id },
          key: column.id });
      })]), h('tbody', [data.reduce(function (acc, row) {
        return acc.concat(_this.wrappedRowRender(row, acc.length));
      }, [])])]
    );
  },

  // <iw-tooltip effect={ this.table.tooltipEffect } placement="top" ref="tooltip" content={ this.tooltipContent }></iw-tooltip>
  computed: table_body_extends({
    table: function table() {
      return this.$parent;
    }
  }, mapStates({
    data: 'data',
    columns: 'columns',
    treeIndent: 'indent',
    leftFixedLeafCount: 'fixedLeafColumnsLength',
    rightFixedLeafCount: 'rightFixedLeafColumnsLength',
    columnsCount: function columnsCount(states) {
      return states.columns.length;
    },
    leftFixedCount: function leftFixedCount(states) {
      return states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount(states) {
      return states.rightFixedColumns.length;
    },
    hasExpandColumn: function hasExpandColumn(states) {
      return states.columns.some(function (_ref) {
        var type = _ref.type;
        return type === 'expand';
      });
    }
  }), {
    firstDefaultColumnIndex: function firstDefaultColumnIndex() {
      return arrayFindIndex(this.columns, function (_ref2) {
        var type = _ref2.type;
        return type === 'default';
      });
    }
  }),

  watch: {
    // don't trigger getter of currentRow in getCellClass. see https://jsfiddle.net/oe2b4hqt/
    // update DOM manually. see https://github.com/ElemeFE/element/pull/13954/files#diff-9b450c00d0a9dec0ffad5a3176972e40
    'store.states.hoverRow': function storeStatesHoverRow(newVal, oldVal) {
      var _this2 = this;

      if (!this.store.states.isComplex || this.$isServer) return;
      var raf = window.requestAnimationFrame;
      if (!raf) {
        raf = function raf(fn) {
          return setTimeout(fn, 16);
        };
      }
      raf(function () {
        var rows = _this2.$el.querySelectorAll('.iw-table__row');
        var oldRow = rows[oldVal];
        var newRow = rows[newVal];
        if (oldRow) {
          removeClass(oldRow, 'hover-row');
        }
        if (newRow) {
          addClass(newRow, 'hover-row');
        }
      });
    }
  },

  data: function data() {
    return {
      tooltipContent: ''
    };
  },
  created: function created() {
    this.activateTooltip = debounce_default()(50, function (tooltip) {
      return tooltip.handleShowPopper();
    });
  },


  methods: {
    getKeyOfRow: function getKeyOfRow(row, index) {
      var rowKey = this.table.rowKey;
      if (rowKey) {
        return getRowIdentity(row, rowKey);
      }
      return index;
    },
    isColumnHidden: function isColumnHidden(index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return index < this.leftFixedLeafCount || index >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getSpan: function getSpan(row, column, rowIndex, columnIndex) {
      var rowspan = 1;
      var colspan = 1;
      var fn = this.table.spanMethod;
      if (typeof fn === 'function') {
        var result = fn({
          row: row,
          column: column,
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
        if (Array.isArray(result)) {
          rowspan = result[0];
          colspan = result[1];
        } else if ((typeof result === 'undefined' ? 'undefined' : table_body_typeof(result)) === 'object') {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
      }
      return { rowspan: rowspan, colspan: colspan };
    },
    getRowStyle: function getRowStyle(row, rowIndex) {
      var rowStyle = this.table.rowStyle;
      if (typeof rowStyle === 'function') {
        return rowStyle.call(null, {
          row: row,
          rowIndex: rowIndex
        });
      }
      return rowStyle || null;
    },
    getRowClass: function getRowClass(row, rowIndex) {
      var classes = ['iw-table__row'];
      if (this.table.highlightCurrentRow && row === this.store.states.currentRow) {
        classes.push('current-row');
      }

      if (this.stripe && rowIndex % 2 === 1) {
        classes.push('iw-table__row--striped');
      }
      var rowClassName = this.table.rowClassName;
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.call(null, {
          row: row,
          rowIndex: rowIndex
        }));
      }

      if (this.store.states.expandRows.indexOf(row) > -1) {
        classes.push('expanded');
      }

      return classes;
    },
    getCellStyle: function getCellStyle(rowIndex, columnIndex, row, column) {
      var cellStyle = this.table.cellStyle;
      if (typeof cellStyle === 'function') {
        return cellStyle.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        });
      }
      return cellStyle;
    },
    getCellClass: function getCellClass(rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.align, column.className];

      if (this.isColumnHidden(columnIndex)) {
        classes.push('is-hidden');
      }

      var cellClassName = this.table.cellClassName;
      if (typeof cellClassName === 'string') {
        classes.push(cellClassName);
      } else if (typeof cellClassName === 'function') {
        classes.push(cellClassName.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }));
      }

      return classes.join(' ');
    },
    getColspanRealWidth: function getColspanRealWidth(columns, colspan, index) {
      if (colspan < 1) {
        return columns[index].realWidth;
      }
      var widthArr = columns.map(function (_ref3) {
        var realWidth = _ref3.realWidth;
        return realWidth;
      }).slice(index, index + colspan);
      return widthArr.reduce(function (acc, width) {
        return acc + width;
      }, -1);
    },
    handleCellMouseEnter: function handleCellMouseEnter(event, row) {
      var table = this.table;
      var cell = getCell(event);

      if (cell) {
        var column = getColumnByCell(table, cell);
        var hoverState = table.hoverState = { cell: cell, column: column, row: row };
        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      var cellChild = event.target.querySelector('.cell');
      if (!(hasClass(cellChild, 'iw-tooltip') && cellChild.childNodes.length)) {
        return;
      }
      // use range width instead of scrollWidth to determine whether the text is overflowing
      // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
      var range = document.createRange();
      range.setStart(cellChild, 0);
      range.setEnd(cellChild, cellChild.childNodes.length);
      var rangeWidth = range.getBoundingClientRect().width;
      var padding = (parseInt(getStyle(cellChild, 'paddingLeft'), 10) || 0) + (parseInt(getStyle(cellChild, 'paddingRight'), 10) || 0);
      if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
        var tooltip = this.$refs.tooltip;
        // TODO 会引起整个 Table 的重新渲染，需要优化
        this.tooltipContent = cell.innerText || cell.textContent;
        tooltip.referenceElm = cell;
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
        tooltip.doDestroy();
        tooltip.setExpectedState(true);
        this.activateTooltip(tooltip);
      }
    },
    handleCellMouseLeave: function handleCellMouseLeave(event) {
      var tooltip = this.$refs.tooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
      var cell = getCell(event);
      if (!cell) return;

      var oldHoverState = this.table.hoverState || {};
      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
    },


    handleMouseEnter: debounce_default()(30, function (index) {
      this.store.commit('setHoverRow', index);
    }),

    handleMouseLeave: debounce_default()(30, function () {
      this.store.commit('setHoverRow', null);
    }),

    handleContextMenu: function handleContextMenu(event, row) {
      this.handleEvent(event, row, 'contextmenu');
    },
    handleDoubleClick: function handleDoubleClick(event, row) {
      this.handleEvent(event, row, 'dblclick');
    },
    handleClick: function handleClick(event, row) {
      this.store.commit('setCurrentRow', row);
      this.handleEvent(event, row, 'click');
    },
    handleEvent: function handleEvent(event, row, name) {
      var table = this.table;
      var cell = getCell(event);
      var column = void 0;
      if (cell) {
        column = getColumnByCell(table, cell);
        if (column) {
          table.$emit('cell-' + name, row, column, cell, event);
        }
      }
      table.$emit('row-' + name, row, column, event);
    },
    rowRender: function rowRender(row, $index, treeRowData) {
      var _this3 = this;

      var h = this.$createElement;
      var treeIndent = this.treeIndent,
          columns = this.columns,
          firstDefaultColumnIndex = this.firstDefaultColumnIndex;

      var columnsHidden = columns.map(function (column, index) {
        return _this3.isColumnHidden(index);
      });
      var rowClasses = this.getRowClass(row, $index);
      var display = true;
      if (treeRowData) {
        rowClasses.push('iw-table__row--level-' + treeRowData.level);
        display = treeRowData.display;
      }
      // 指令 v-show 会覆盖 row-style 中 display
      // 使用 :style 代替 v-show https://github.com/ElemeFE/element/issues/16995
      var displayStyle = display ? null : {
        display: 'none'
      };
      return h(
        'tr',
        {
          style: [displayStyle, this.getRowStyle(row, $index)],
          'class': rowClasses,
          key: this.getKeyOfRow(row, $index),
          on: {
            'dblclick': function dblclick($event) {
              return _this3.handleDoubleClick($event, row);
            },
            'click': function click($event) {
              return _this3.handleClick($event, row);
            },
            'contextmenu': function contextmenu($event) {
              return _this3.handleContextMenu($event, row);
            },
            'mouseenter': function mouseenter(_) {
              return _this3.handleMouseEnter($index);
            },
            'mouseleave': this.handleMouseLeave
          }
        },
        [columns.map(function (column, cellIndex) {
          var _getSpan = _this3.getSpan(row, column, $index, cellIndex),
              rowspan = _getSpan.rowspan,
              colspan = _getSpan.colspan;

          if (!rowspan || !colspan) {
            return null;
          }
          var columnData = table_body_extends({}, column);
          columnData.realWidth = _this3.getColspanRealWidth(columns, colspan, cellIndex);
          var data = {
            store: _this3.store,
            _self: _this3.context || _this3.table.$vnode.context,
            column: columnData,
            row: row,
            $index: $index
          };
          if (cellIndex === firstDefaultColumnIndex && treeRowData) {
            data.treeNode = {
              indent: treeRowData.level * treeIndent,
              level: treeRowData.level
            };
            if (typeof treeRowData.expanded === 'boolean') {
              data.treeNode.expanded = treeRowData.expanded;
              // 表明是懒加载
              if ('loading' in treeRowData) {
                data.treeNode.loading = treeRowData.loading;
              }
              if ('noLazyChildren' in treeRowData) {
                data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
              }
            }
          }
          return h(
            'td',
            {
              style: _this3.getCellStyle($index, cellIndex, row, column),
              'class': _this3.getCellClass($index, cellIndex, row, column),
              attrs: { rowspan: rowspan,
                colspan: colspan
              },
              on: {
                'mouseenter': function mouseenter($event) {
                  return _this3.handleCellMouseEnter($event, row);
                },
                'mouseleave': _this3.handleCellMouseLeave
              }
            },
            [column.renderCell.call(_this3._renderProxy, _this3.$createElement, data, columnsHidden[cellIndex])]
          );
        })]
      );
    },
    wrappedRowRender: function wrappedRowRender(row, $index) {
      var _this4 = this;

      var h = this.$createElement;

      var store = this.store;
      var isRowExpanded = store.isRowExpanded,
          assertRowKey = store.assertRowKey;
      var _store$states = store.states,
          treeData = _store$states.treeData,
          lazyTreeNodeMap = _store$states.lazyTreeNodeMap,
          childrenColumnName = _store$states.childrenColumnName,
          rowKey = _store$states.rowKey;

      if (this.hasExpandColumn && isRowExpanded(row)) {
        var renderExpanded = this.table.renderExpanded;
        var tr = this.rowRender(row, $index);
        if (!renderExpanded) {
          console.error('[Element Error]renderExpanded is required.');
          return tr;
        }
        // 使用二维数组，避免修改 $index
        return [[tr, h(
          'tr',
          { key: 'expanded-row__' + tr.key },
          [h(
            'td',
            {
              attrs: { colspan: this.columnsCount },
              'class': 'iw-table__expanded-cell' },
            [renderExpanded(this.$createElement, { row: row, $index: $index, store: this.store })]
          )]
        )]];
      } else if (Object.keys(treeData).length) {
        assertRowKey();
        // TreeTable 时，rowKey 必须由用户设定，不使用 getKeyOfRow 计算
        // 在调用 rowRender 函数时，仍然会计算 rowKey，不太好的操作
        var key = getRowIdentity(row, rowKey);
        var cur = treeData[key];
        var treeRowData = null;
        if (cur) {
          treeRowData = {
            expanded: cur.expanded,
            level: cur.level,
            display: true
          };
          if (typeof cur.lazy === 'boolean') {
            if (typeof cur.loaded === 'boolean' && cur.loaded) {
              treeRowData.noLazyChildren = !(cur.children && cur.children.length);
            }
            treeRowData.loading = cur.loading;
          }
        }
        var tmp = [this.rowRender(row, $index, treeRowData)];
        // 渲染嵌套数据
        if (cur) {
          // currentRow 记录的是 index，所以还需主动增加 TreeTable 的 index
          var i = 0;
          var traverse = function traverse(children, parent) {
            if (!(children && children.length && parent)) return;
            children.forEach(function (node) {
              // 父节点的 display 状态影响子节点的显示状态
              var innerTreeRowData = {
                display: parent.display && parent.expanded,
                level: parent.level + 1
              };
              var childKey = getRowIdentity(node, rowKey);
              if (childKey === undefined || childKey === null) {
                throw new Error('for nested data item, row-key is required.');
              }
              cur = table_body_extends({}, treeData[childKey]);
              // 对于当前节点，分成有无子节点两种情况。
              // 如果包含子节点的，设置 expanded 属性。
              // 对于它子节点的 display 属性由它本身的 expanded 与 display 共同决定。
              if (cur) {
                innerTreeRowData.expanded = cur.expanded;
                // 懒加载的某些节点，level 未知
                cur.level = cur.level || innerTreeRowData.level;
                cur.display = !!(cur.expanded && innerTreeRowData.display);
                if (typeof cur.lazy === 'boolean') {
                  if (typeof cur.loaded === 'boolean' && cur.loaded) {
                    innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                  }
                  innerTreeRowData.loading = cur.loading;
                }
              }
              i++;
              tmp.push(_this4.rowRender(node, $index + i, innerTreeRowData));
              if (cur) {
                var _nodes = lazyTreeNodeMap[childKey] || node[childrenColumnName];
                traverse(_nodes, cur);
              }
            });
          };
          // 对于 root 节点，display 一定为 true
          cur.display = true;
          var nodes = lazyTreeNodeMap[key] || row[childrenColumnName];
          traverse(nodes, cur);
        }
        return tmp;
      } else {
        return this.rowRender(row, $index);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/filter-panel.vue?vue&type=template&id=7f2c919f&
var filter_panelvue_type_template_id_7f2c919f_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "iw-zoom-in-top" } }, [
    _vm.multiple
      ? _c(
          "div",
          {
            directives: [
              {
                name: "clickoutside",
                rawName: "v-clickoutside",
                value: _vm.handleOutsideClick,
                expression: "handleOutsideClick"
              },
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showPopper,
                expression: "showPopper"
              }
            ],
            staticClass: "iw-table-filter"
          },
          [
            _c("div", { staticClass: "iw-table-filter__content" }),
            _c("div", { staticClass: "iw-table-filter__bottom" }, [
              _c(
                "button",
                {
                  class: { "is-disabled": _vm.filteredValue.length === 0 },
                  attrs: { disabled: _vm.filteredValue.length === 0 },
                  on: { click: _vm.handleConfirm }
                },
                [_vm._v(_vm._s(_vm.t("iw.table.confirmFilter")))]
              ),
              _c("button", { on: { click: _vm.handleReset } }, [
                _vm._v(_vm._s(_vm.t("iw.table.resetFilter")))
              ])
            ])
          ]
        )
      : _c(
          "div",
          {
            directives: [
              {
                name: "clickoutside",
                rawName: "v-clickoutside",
                value: _vm.handleOutsideClick,
                expression: "handleOutsideClick"
              },
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showPopper,
                expression: "showPopper"
              }
            ],
            staticClass: "iw-table-filter"
          },
          [
            _c(
              "ul",
              { staticClass: "iw-table-filter__list" },
              [
                _c(
                  "li",
                  {
                    staticClass: "iw-table-filter__list-item",
                    class: {
                      "is-active":
                        _vm.filterValue === undefined ||
                        _vm.filterValue === null
                    },
                    on: {
                      click: function($event) {
                        _vm.handleSelect(null)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.t("iw.table.clearFilter")))]
                ),
                _vm._l(_vm.filters, function(filter) {
                  return _c(
                    "li",
                    {
                      key: filter.value,
                      staticClass: "iw-table-filter__list-item",
                      class: { "is-active": _vm.isActive(filter) },
                      attrs: { label: filter.value },
                      on: {
                        click: function($event) {
                          _vm.handleSelect(filter.value)
                        }
                      }
                    },
                    [_vm._v(_vm._s(filter.text))]
                  )
                })
              ],
              2
            )
          ]
        )
  ])
}
var filter_panelvue_type_template_id_7f2c919f_staticRenderFns = []
filter_panelvue_type_template_id_7f2c919f_render._withStripped = true


// CONCATENATED MODULE: ./packages/table/src/filter-panel.vue?vue&type=template&id=7f2c919f&

// CONCATENATED MODULE: ./src/utils/vue-popper.js


var PopperJS = external_vue_default.a.prototype.$isServer ? function () {} : __webpack_require__(7);
if (!PopperJS || typeof PopperJS !== 'function') {
  PopperJS = window.Popper;
}
var vue_popper_stop = function stop(e) {
  return e.stopPropagation();
};

/**
 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */
/* harmony default export */ var vue_popper = ({
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: {},
    popper: {},
    offset: {
      default: 0
    },
    value: Boolean,
    visibleArrow: Boolean,
    arrowOffset: {
      type: Number,
      default: 35
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default: function _default() {
        return {
          gpuAcceleration: false
        };
      }
    }
  },

  data: function data() {
    return {
      showPopper: false,
      currentPlacement: ''
    };
  },


  watch: {
    value: {
      immediate: true,
      handler: function handler(val) {
        this.showPopper = val;
        this.$emit('input', val);
      }
    },

    showPopper: function showPopper(val) {
      if (this.disabled) return;
      val ? this.updatePopper() : this.destroyPopper();
      this.$emit('input', val);
    }
  },

  methods: {
    createPopper: function createPopper() {
      var _this = this;

      this.currentPlacement = this.currentPlacement || this.placement;
      this.currentPlacement = this.convertPlacement(this.currentPlacement);
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
        return;
      }

      var options = this.popperOptions;
      var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
      var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }

      if (!popper || !reference) return;
      if (this.visibleArrow) this.appendArrow(popper);
      if (this.appendToBody) document.body.appendChild(this.popperElm);
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy();
      }

      options.placement = this.currentPlacement;
      options.offset = this.offset;
      options.arrowOffset = this.arrowOffset;
      this.popperJS = new PopperJS(reference, popper, options);
      this.popperJS.onCreate(function (_) {
        _this.$emit('created', _this);
        _this.resetTransformOrigin();
        _this.$nextTick(_this.updatePopper);
      });
      if (typeof options.onUpdate === 'function') {
        this.popperJS.onUpdate(options.onUpdate);
      }
      this.popperJS._popper.style.zIndex = popup_manager.nextZIndex();
      this.popperElm.addEventListener('click', vue_popper_stop);
    },
    updatePopper: function updatePopper() {
      var popperJS = this.popperJS;
      if (popperJS) {
        popperJS.update();
        if (popperJS._popper) {
          popperJS._popper.style.zIndex = popup_manager.nextZIndex();
        }
      } else {
        this.createPopper();
      }
    },
    doDestroy: function doDestroy(forceDestroy) {
      /* istanbul ignore if */
      if (!this.popperJS || this.showPopper && !forceDestroy) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },
    destroyPopper: function destroyPopper() {
      if (this.popperJS) {
        this.resetTransformOrigin();
      }
    },
    resetTransformOrigin: function resetTransformOrigin() {
      if (!this.transformOrigin) return;
      var placementMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      };
      var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
      var origin = placementMap[placement];
      this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string' ? this.transformOrigin : ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
    },
    appendArrow: function appendArrow(element) {
      var hash = void 0;
      if (this.appended) {
        return;
      }

      this.appended = true;

      for (var item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
          break;
        }
      }

      var arrow = document.createElement('div');

      if (hash) {
        arrow.setAttribute(hash, '');
      }
      arrow.setAttribute('x-arrow', '');
      arrow.className = 'popper__arrow';
      element.appendChild(arrow);
    },
    convertPlacement: function convertPlacement(placement) {
      var partters = ['Top', 'Bottom', 'Left', 'Right'];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = partters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pattern = _step.value;

          var reg = new RegExp(pattern + '$');
          if (reg.test(placement)) {
            return placement.replace(reg, ['Top', 'Left'].indexOf(pattern) !== -1 ? '-start' : '-end');
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return placement;
    }
  },

  beforeDestroy: function beforeDestroy() {
    this.doDestroy(true);
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', vue_popper_stop);
      document.body.removeChild(this.popperElm);
    }
  },


  // call destroy in keep-alive mode
  deactivated: function deactivated() {
    this.$options.beforeDestroy[0].call(this);
  }
});
// CONCATENATED MODULE: ./src/utils/clickoutside.js



var nodeList = [];
var ctx = '@@clickoutsideContext';

var startClick = void 0;
var seed = 0;

!external_vue_default.a.prototype.$isServer && on(document, 'mousedown', function (e) {
  return startClick = e;
});

!external_vue_default.a.prototype.$isServer && on(document, 'mouseup', function (e) {
  nodeList.forEach(function (node) {
    return node[ctx].documentHandler(e, startClick);
  });
});

function createDocumentHandler(el, binding, vnode) {
  return function () {
    var mouseup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mousedown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))) return;

    if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
/* harmony default export */ var clickoutside = ({
  bind: function bind(el, binding, vnode) {
    nodeList.push(el);
    var id = seed++;
    el[ctx] = {
      id: id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },
  update: function update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    var len = nodeList.length;

    for (var i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
});
// CONCATENATED MODULE: ./packages/table/src/dropdown.js

var dropdowns = [];

!external_vue_default.a.prototype.$isServer && document.addEventListener('click', function (event) {
  dropdowns.forEach(function (dropdown) {
    var target = event.target;
    if (!dropdown || !dropdown.$el) return;
    if (target === dropdown.$el || dropdown.$el.contains(target)) {
      return;
    }
    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
  });
});

/* harmony default export */ var dropdown = ({
  open: function open(instance) {
    if (instance) {
      dropdowns.push(instance);
    }
  },
  close: function close(instance) {
    var index = dropdowns.indexOf(instance);
    if (index !== -1) {
      dropdowns.splice(instance, 1);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/filter-panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






// import IwCheckbox from '@iways-ui/packages/checkbox';
// import IwCheckboxGroup from '@iways-ui/packages/checkbox-group';


/* harmony default export */ var filter_panelvue_type_script_lang_js_ = ({
  name: 'IwTableFilterPanel',

  mixins: [vue_popper, mixins_locale],

  directives: {
    Clickoutside: clickoutside
  },

  components: {
    // IwCheckbox,
    // IwCheckboxGroup,
    IwScrollbar: scrollbar
  },

  props: {
    placement: {
      type: String,
      default: 'bottom-end'
    }
  },

  methods: {
    isActive: function isActive(filter) {
      return filter.value === this.filterValue;
    },
    handleOutsideClick: function handleOutsideClick() {
      var _this = this;

      setTimeout(function () {
        _this.showPopper = false;
      }, 16);
    },
    handleConfirm: function handleConfirm() {
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleReset: function handleReset() {
      this.filteredValue = [];
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleSelect: function handleSelect(filterValue) {
      this.filterValue = filterValue;

      if (typeof filterValue !== 'undefined' && filterValue !== null) {
        this.confirmFilter(this.filteredValue);
      } else {
        this.confirmFilter([]);
      }

      this.handleOutsideClick();
    },
    confirmFilter: function confirmFilter(filteredValue) {
      this.table.store.commit('filterChange', {
        column: this.column,
        values: filteredValue
      });
      this.table.store.updateAllSelected();
    }
  },

  data: function data() {
    return {
      table: null,
      cell: null,
      column: null
    };
  },


  computed: {
    filters: function filters() {
      return this.column && this.column.filters;
    },


    filterValue: {
      get: function get() {
        return (this.column.filteredValue || [])[0];
      },
      set: function set(value) {
        if (this.filteredValue) {
          if (typeof value !== 'undefined' && value !== null) {
            this.filteredValue.splice(0, 1, value);
          } else {
            this.filteredValue.splice(0, 1);
          }
        }
      }
    },

    filteredValue: {
      get: function get() {
        if (this.column) {
          return this.column.filteredValue || [];
        }
        return [];
      },
      set: function set(value) {
        if (this.column) {
          this.column.filteredValue = value;
        }
      }
    },

    multiple: function multiple() {
      if (this.column) {
        return this.column.filterMultiple;
      }
      return true;
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    this.popperElm = this.$el;
    this.referenceElm = this.cell;
    this.table.bodyWrapper.addEventListener('scroll', function () {
      _this2.updatePopper();
    });

    this.$watch('showPopper', function (value) {
      if (_this2.column) _this2.column.filterOpened = value;
      if (value) {
        dropdown.open(_this2);
      } else {
        dropdown.close(_this2);
      }
    });
  },

  watch: {
    showPopper: function showPopper(val) {
      if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < popup_manager.zIndex) {
        this.popperJS._popper.style.zIndex = popup_manager.nextZIndex();
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/filter-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_filter_panelvue_type_script_lang_js_ = (filter_panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/table/src/filter-panel.vue





/* normalize component */

var filter_panel_component = normalizeComponent(
  src_filter_panelvue_type_script_lang_js_,
  filter_panelvue_type_template_id_7f2c919f_render,
  filter_panelvue_type_template_id_7f2c919f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var filter_panel_api; }
filter_panel_component.options.__file = "packages/table/src/filter-panel.vue"
/* harmony default export */ var filter_panel = (filter_panel_component.exports);
// CONCATENATED MODULE: ./packages/table/src/table-header.js
var table_header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



// import IwCheckbox from '@iways-ui/packages/checkbox';




var getAllColumns = function getAllColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

var convertToRows = function convertToRows(originColumns) {
  var maxLevel = 1;
  var traverse = function traverse(column, parent) {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      var colSpan = 0;
      column.children.forEach(function (subColumn) {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  originColumns.forEach(function (column) {
    column.level = 1;
    traverse(column);
  });

  var rows = [];
  for (var i = 0; i < maxLevel; i++) {
    rows.push([]);
  }

  var allColumns = getAllColumns(originColumns);

  allColumns.forEach(function (column) {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });

  return rows;
};

/* harmony default export */ var table_header = ({
  name: 'IwTableHeader',

  mixins: [layout_observer],

  render: function render(h) {
    var _this = this;

    var originColumns = this.store.states.originColumns;
    var columnRows = convertToRows(originColumns, this.columns);
    // 是否拥有多级表头
    var isGroup = columnRows.length > 1;
    if (isGroup) this.$parent.isGroup = true;
    return h(
      'table',
      {
        'class': 'iw-table__header',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this.columns.map(function (column) {
        return h('col', {
          attrs: { name: column.id },
          key: column.id });
      }), this.hasGutter ? h('col', {
        attrs: { name: 'gutter' }
      }) : '']), h(
        'thead',
        { 'class': [{ 'is-group': isGroup, 'has-gutter': this.hasGutter }] },
        [this._l(columnRows, function (columns, rowIndex) {
          return h(
            'tr',
            {
              style: _this.getHeaderRowStyle(rowIndex),
              'class': _this.getHeaderRowClass(rowIndex)
            },
            [columns.map(function (column, cellIndex) {
              return h(
                'th',
                {
                  attrs: {
                    colspan: column.colSpan,
                    rowspan: column.rowSpan
                  },
                  on: {
                    'mousemove': function mousemove($event) {
                      return _this.handleMouseMove($event, column);
                    },
                    'mouseout': _this.handleMouseOut,
                    'mousedown': function mousedown($event) {
                      return _this.handleMouseDown($event, column);
                    },
                    'click': function click($event) {
                      return _this.handleHeaderClick($event, column);
                    },
                    'contextmenu': function contextmenu($event) {
                      return _this.handleHeaderContextMenu($event, column);
                    }
                  },

                  style: _this.getHeaderCellStyle(rowIndex, cellIndex, columns, column),
                  'class': _this.getHeaderCellClass(rowIndex, cellIndex, columns, column),
                  key: column.id },
                [h(
                  'div',
                  { 'class': ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName] },
                  [column.renderHeader ? column.renderHeader.call(_this._renderProxy, h, { column: column, $index: cellIndex, store: _this.store, _self: _this.$parent.$vnode.context }) : column.label, column.sortable ? h(
                    'span',
                    {
                      'class': 'caret-wrapper',
                      on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column);
                        }
                      }
                    },
                    [h('i', { 'class': 'sort-caret ascending',
                      on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column, 'ascending');
                        }
                      }
                    }), h('i', { 'class': 'sort-caret descending',
                      on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column, 'descending');
                        }
                      }
                    })]
                  ) : '', column.filterable ? h(
                    'span',
                    {
                      'class': 'iw-table__column-filter-trigger',
                      on: {
                        'click': function click($event) {
                          return _this.handleFilterClick($event, column);
                        }
                      }
                    },
                    [h('i', { 'class': ['iw-icon-arrow-down', column.filterOpened ? 'iw-icon-arrow-up' : ''] })]
                  ) : '']
                )]
              );
            }), _this.hasGutter ? h('th', { 'class': 'gutter' }) : '']
          );
        })]
      )]
    );
  },


  props: {
    fixed: String,
    store: {
      required: true
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  components: {
    // IwCheckbox
  },

  computed: table_header_extends({
    table: function table() {
      return this.$parent;
    },
    hasGutter: function hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    }
  }, mapStates({
    columns: 'columns',
    isAllSelected: 'isAllSelected',
    leftFixedLeafCount: 'fixedLeafColumnsLength',
    rightFixedLeafCount: 'rightFixedLeafColumnsLength',
    columnsCount: function columnsCount(states) {
      return states.columns.length;
    },
    leftFixedCount: function leftFixedCount(states) {
      return states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount(states) {
      return states.rightFixedColumns.length;
    }
  })),

  created: function created() {
    this.filterPanels = {};
  },
  mounted: function mounted() {
    var _this2 = this;

    // nextTick 是有必要的 https://github.com/ElemeFE/element/pull/11311
    this.$nextTick(function () {
      var _defaultSort = _this2.defaultSort,
          prop = _defaultSort.prop,
          order = _defaultSort.order;

      var init = true;
      _this2.store.commit('sort', { prop: prop, order: order, init: init });
    });
  },
  beforeDestroy: function beforeDestroy() {
    var panels = this.filterPanels;
    for (var prop in panels) {
      if (panels.hasOwnProperty(prop) && panels[prop]) {
        panels[prop].$destroy(true);
      }
    }
  },


  methods: {
    isCellHidden: function isCellHidden(index, columns) {
      var start = 0;
      for (var i = 0; i < index; i++) {
        start += columns[i].colSpan;
      }
      var after = start + columns[index].colSpan - 1;
      if (this.fixed === true || this.fixed === 'left') {
        return after >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return start < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return after < this.leftFixedLeafCount || start >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getHeaderRowStyle: function getHeaderRowStyle(rowIndex) {
      var headerRowStyle = this.table.headerRowStyle;
      if (typeof headerRowStyle === 'function') {
        return headerRowStyle.call(null, { rowIndex: rowIndex });
      }
      return headerRowStyle;
    },
    getHeaderRowClass: function getHeaderRowClass(rowIndex) {
      var classes = [];

      var headerRowClassName = this.table.headerRowClassName;
      if (typeof headerRowClassName === 'string') {
        classes.push(headerRowClassName);
      } else if (typeof headerRowClassName === 'function') {
        classes.push(headerRowClassName.call(null, { rowIndex: rowIndex }));
      }

      return classes.join(' ');
    },
    getHeaderCellStyle: function getHeaderCellStyle(rowIndex, columnIndex, row, column) {
      var headerCellStyle = this.table.headerCellStyle;
      if (typeof headerCellStyle === 'function') {
        return headerCellStyle.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        });
      }
      return headerCellStyle;
    },
    getHeaderCellClass: function getHeaderCellClass(rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];

      if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
        classes.push('is-hidden');
      }

      if (!column.children) {
        classes.push('is-leaf');
      }

      if (column.sortable) {
        classes.push('is-sortable');
      }

      var headerCellClassName = this.table.headerCellClassName;
      if (typeof headerCellClassName === 'string') {
        classes.push(headerCellClassName);
      } else if (typeof headerCellClassName === 'function') {
        classes.push(headerCellClassName.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }));
      }

      return classes.join(' ');
    },
    toggleAllSelection: function toggleAllSelection(event) {
      event.stopPropagation();
      this.store.commit('toggleAllSelection');
    },
    handleFilterClick: function handleFilterClick(event, column) {
      event.stopPropagation();
      var target = event.target;
      var cell = target.tagName === 'TH' ? target : target.parentNode;
      if (hasClass(cell, 'noclick')) return;
      cell = cell.querySelector('.iw-table__column-filter-trigger') || cell;
      var table = this.$parent;

      var filterPanel = this.filterPanels[column.id];

      if (filterPanel && column.filterOpened) {
        filterPanel.showPopper = false;
        return;
      }

      if (!filterPanel) {
        filterPanel = new external_vue_default.a(filter_panel);
        this.filterPanels[column.id] = filterPanel;
        if (column.filterPlacement) {
          filterPanel.placement = column.filterPlacement;
        }
        filterPanel.table = table;
        filterPanel.cell = cell;
        filterPanel.column = column;
        !this.$isServer && filterPanel.$mount(document.createElement('div'));
      }

      setTimeout(function () {
        filterPanel.showPopper = true;
      }, 16);
    },
    handleHeaderClick: function handleHeaderClick(event, column) {
      if (!column.filters && column.sortable) {
        this.handleSortClick(event, column);
      } else if (column.filterable && !column.sortable) {
        this.handleFilterClick(event, column);
      }

      this.$parent.$emit('header-click', column, event);
    },
    handleHeaderContextMenu: function handleHeaderContextMenu(event, column) {
      this.$parent.$emit('header-contextmenu', column, event);
    },
    handleMouseDown: function handleMouseDown(event, column) {
      var _this3 = this;

      if (this.$isServer) return;
      if (column.children && column.children.length > 0) return;
      /* istanbul ignore if */
      if (this.draggingColumn && this.border) {
        this.dragging = true;

        this.$parent.resizeProxyVisible = true;

        var table = this.$parent;
        var tableEl = table.$el;
        var tableLeft = tableEl.getBoundingClientRect().left;
        var columnEl = this.$el.querySelector('th.' + column.id);
        var columnRect = columnEl.getBoundingClientRect();
        var minLeft = columnRect.left - tableLeft + 30;

        addClass(columnEl, 'noclick');

        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft: tableLeft
        };

        var resizeProxy = table.$refs.resizeProxy;
        resizeProxy.style.left = this.dragState.startLeft + 'px';

        document.onselectstart = function () {
          return false;
        };
        document.ondragstart = function () {
          return false;
        };

        var handleMouseMove = function handleMouseMove(event) {
          var deltaLeft = event.clientX - _this3.dragState.startMouseLeft;
          var proxyLeft = _this3.dragState.startLeft + deltaLeft;

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
        };

        var handleMouseUp = function handleMouseUp() {
          if (_this3.dragging) {
            var _dragState = _this3.dragState,
                startColumnLeft = _dragState.startColumnLeft,
                startLeft = _dragState.startLeft;

            var finalLeft = parseInt(resizeProxy.style.left, 10);
            var columnWidth = finalLeft - startColumnLeft;
            column.width = column.realWidth = columnWidth;
            table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event);

            _this3.store.scheduleLayout();

            document.body.style.cursor = '';
            _this3.dragging = false;
            _this3.draggingColumn = null;
            _this3.dragState = {};

            table.resizeProxyVisible = false;
          }

          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.onselectstart = null;
          document.ondragstart = null;

          setTimeout(function () {
            removeClass(columnEl, 'noclick');
          }, 0);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    },
    handleMouseMove: function handleMouseMove(event, column) {
      if (column.children && column.children.length > 0) return;
      var target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (!column || !column.resizable) return;

      if (!this.dragging && this.border) {
        var rect = target.getBoundingClientRect();

        var bodyStyle = document.body.style;
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize';
          if (hasClass(target, 'is-sortable')) {
            target.style.cursor = 'col-resize';
          }
          this.draggingColumn = column;
        } else if (!this.dragging) {
          bodyStyle.cursor = '';
          if (hasClass(target, 'is-sortable')) {
            target.style.cursor = 'pointer';
          }
          this.draggingColumn = null;
        }
      }
    },
    handleMouseOut: function handleMouseOut() {
      if (this.$isServer) return;
      document.body.style.cursor = '';
    },
    toggleOrder: function toggleOrder(_ref) {
      var order = _ref.order,
          sortOrders = _ref.sortOrders;

      if (order === '') return sortOrders[0];
      var index = sortOrders.indexOf(order || null);
      return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
    },
    handleSortClick: function handleSortClick(event, column, givenOrder) {
      event.stopPropagation();
      var order = column.order === givenOrder ? null : givenOrder || this.toggleOrder(column);

      var target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (target && target.tagName === 'TH') {
        if (hasClass(target, 'noclick')) {
          removeClass(target, 'noclick');
          return;
        }
      }

      if (!column.sortable) return;

      var states = this.store.states;
      var sortProp = states.sortProp;
      var sortOrder = void 0;
      var sortingColumn = states.sortingColumn;

      if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
        if (sortingColumn) {
          sortingColumn.order = null;
        }
        states.sortingColumn = column;
        sortProp = column.property;
      }

      if (!order) {
        sortOrder = column.order = null;
      } else {
        sortOrder = column.order = order;
      }

      states.sortProp = sortProp;
      states.sortOrder = sortOrder;

      this.store.commit('changeSortCondition');
    }
  },

  data: function data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    };
  }
});
// CONCATENATED MODULE: ./packages/table/src/table-footer.js
var table_footer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ var table_footer = ({
  name: 'IwTableFooter',

  mixins: [layout_observer],

  render: function render(h) {
    var _this = this;

    var sums = [];
    if (this.summaryMethod) {
      sums = this.summaryMethod({ columns: this.columns, data: this.store.states.data });
    } else {
      this.columns.forEach(function (column, index) {
        if (index === 0) {
          sums[index] = _this.sumText;
          return;
        }
        var values = _this.store.states.data.map(function (item) {
          return Number(item[column.property]);
        });
        var precisions = [];
        var notNumber = true;
        values.forEach(function (value) {
          if (!isNaN(value)) {
            notNumber = false;
            var decimal = ('' + value).split('.')[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        var precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce(function (prev, curr) {
            var value = Number(curr);
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = '';
        }
      });
    }

    return h(
      'table',
      {
        'class': 'iw-table__footer',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this.columns.map(function (column) {
        return h('col', {
          attrs: { name: column.id },
          key: column.id });
      }), this.hasGutter ? h('col', {
        attrs: { name: 'gutter' }
      }) : '']), h(
        'tbody',
        { 'class': [{ 'has-gutter': this.hasGutter }] },
        [h('tr', [this.columns.map(function (column, cellIndex) {
          return h(
            'td',
            {
              key: cellIndex,
              attrs: { colspan: column.colSpan,
                rowspan: column.rowSpan
              },
              'class': _this.getRowClasses(column, cellIndex) },
            [h(
              'div',
              { 'class': ['cell', column.labelClassName] },
              [sums[cellIndex]]
            )]
          );
        }), this.hasGutter ? h('th', { 'class': 'gutter' }) : ''])]
      )]
    );
  },


  props: {
    fixed: String,
    store: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  computed: table_footer_extends({
    table: function table() {
      return this.$parent;
    },
    hasGutter: function hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    }
  }, mapStates({
    columns: 'columns',
    isAllSelected: 'isAllSelected',
    leftFixedLeafCount: 'fixedLeafColumnsLength',
    rightFixedLeafCount: 'rightFixedLeafColumnsLength',
    columnsCount: function columnsCount(states) {
      return states.columns.length;
    },
    leftFixedCount: function leftFixedCount(states) {
      return states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount(states) {
      return states.rightFixedColumns.length;
    }
  })),

  methods: {
    isCellHidden: function isCellHidden(index, columns, column) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        var before = 0;
        for (var i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedLeafCount;
      } else if (!this.fixed && column.fixed) {
        // hide cell when footer instance is not fixed and column is fixed
        return true;
      } else {
        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
      }
    },
    getRowClasses: function getRowClasses(column, cellIndex) {
      var classes = [column.id, column.align, column.labelClassName];
      if (column.className) {
        classes.push(column.className);
      }
      if (this.isCellHidden(cellIndex, this.columns, column)) {
        classes.push('is-hidden');
      }
      if (!column.children) {
        classes.push('is-leaf');
      }
      return classes;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/table.vue?vue&type=script&lang=js&
var tablevue_type_script_lang_js_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import IwCheckbox from '@iways-ui/packages/checkbox';












var tableIdSeed = 1;

/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name: 'IwTable',

  mixins: [mixins_locale, migrating],

  directives: {
    Mousewheel: directives_mousewheel
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    size: String,

    width: [String, Number],

    height: [String, Number],

    maxHeight: [String, Number],

    fit: {
      type: Boolean,
      default: true
    },

    stripe: Boolean,

    border: Boolean,

    rowKey: [String, Function],

    context: {},

    showHeader: {
      type: Boolean,
      default: true
    },

    showSummary: Boolean,

    sumText: String,

    summaryMethod: Function,

    rowClassName: [String, Function],

    rowStyle: [Object, Function],

    cellClassName: [String, Function],

    cellStyle: [Object, Function],

    headerRowClassName: [String, Function],

    headerRowStyle: [Object, Function],

    headerCellClassName: [String, Function],

    headerCellStyle: [Object, Function],

    highlightCurrentRow: Boolean,

    currentRowKey: [String, Number],

    emptyText: String,

    expandRowKeys: Array,

    defaultExpandAll: Boolean,

    defaultSort: Object,

    tooltipEffect: String,

    spanMethod: Function,

    selectOnIndeterminate: {
      type: Boolean,
      default: true
    },

    indent: {
      type: Number,
      default: 16
    },

    treeProps: {
      type: Object,
      default: function _default() {
        return {
          hasChildren: 'hasChildren',
          children: 'children'
        };
      }
    },

    lazy: Boolean,

    load: Function
  },

  components: {
    TableHeader: table_header,
    TableFooter: table_footer,
    TableBody: table_body
    // IwCheckbox
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        events: {
          expand: 'expand is renamed to expand-change'
        }
      };
    },
    setCurrentRow: function setCurrentRow(row) {
      this.store.commit('setCurrentRow', row);
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      this.store.toggleRowSelection(row, selected, false);
      this.store.updateAllSelected();
    },
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      this.store.toggleRowExpansionAdapter(row, expanded);
    },
    clearSelection: function clearSelection() {
      this.store.clearSelection();
    },
    clearFilter: function clearFilter(columnKeys) {
      this.store.clearFilter(columnKeys);
    },
    clearSort: function clearSort() {
      this.store.clearSort();
    },
    handleMouseLeave: function handleMouseLeave() {
      this.store.commit('setHoverRow', null);
      if (this.hoverState) this.hoverState = null;
    },
    updateScrollY: function updateScrollY() {
      var changed = this.layout.updateScrollY();
      if (changed) {
        this.layout.notifyObservers('scrollable');
        this.layout.updateColumnsWidth();
      }
    },
    handleFixedMousewheel: function handleFixedMousewheel(event, data) {
      var bodyWrapper = this.bodyWrapper;
      if (Math.abs(data.spinY) > 0) {
        var currentScrollTop = bodyWrapper.scrollTop;
        if (data.pixelY < 0 && currentScrollTop !== 0) {
          event.preventDefault();
        }
        if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
          event.preventDefault();
        }
        bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
      } else {
        bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
      }
    },
    handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel(event, data) {
      var pixelX = data.pixelX,
          pixelY = data.pixelY;

      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        this.bodyWrapper.scrollLeft += data.pixelX / 5;
      }
    },


    // TODO 使用 CSS transform
    syncPostion: Object(external_throttle_debounce_["throttle"])(20, function () {
      var _bodyWrapper = this.bodyWrapper,
          scrollLeft = _bodyWrapper.scrollLeft,
          scrollTop = _bodyWrapper.scrollTop,
          offsetWidth = _bodyWrapper.offsetWidth,
          scrollWidth = _bodyWrapper.scrollWidth;
      var _$refs = this.$refs,
          headerWrapper = _$refs.headerWrapper,
          footerWrapper = _$refs.footerWrapper,
          fixedBodyWrapper = _$refs.fixedBodyWrapper,
          rightFixedBodyWrapper = _$refs.rightFixedBodyWrapper;

      if (headerWrapper) headerWrapper.scrollLeft = scrollLeft;
      if (footerWrapper) footerWrapper.scrollLeft = scrollLeft;
      if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = scrollTop;
      if (rightFixedBodyWrapper) rightFixedBodyWrapper.scrollTop = scrollTop;
      var maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
      if (scrollLeft >= maxScrollLeftPosition) {
        this.scrollPosition = 'right';
      } else if (scrollLeft === 0) {
        this.scrollPosition = 'left';
      } else {
        this.scrollPosition = 'middle';
      }
    }),

    bindEvents: function bindEvents() {
      this.bodyWrapper.addEventListener('scroll', this.syncPostion, { passive: true });
      if (this.fit) {
        resize_event_addResizeListener(this.$el, this.resizeListener);
      }
    },
    unbindEvents: function unbindEvents() {
      this.bodyWrapper.removeEventListener('scroll', this.syncPostion, { passive: true });
      if (this.fit) {
        removeResizeListener(this.$el, this.resizeListener);
      }
    },
    resizeListener: function resizeListener() {
      if (!this.$ready) return;
      var shouldUpdateLayout = false;
      var el = this.$el;
      var _resizeState = this.resizeState,
          oldWidth = _resizeState.width,
          oldHeight = _resizeState.height;


      var width = el.offsetWidth;
      if (oldWidth !== width) {
        shouldUpdateLayout = true;
      }

      var height = el.offsetHeight;
      if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
        shouldUpdateLayout = true;
      }

      if (shouldUpdateLayout) {
        this.resizeState.width = width;
        this.resizeState.height = height;
        this.doLayout();
      }
    },
    doLayout: function doLayout() {
      if (this.shouldUpdateHeight) {
        this.layout.updateElsHeight();
      }
      this.layout.updateColumnsWidth();
    },
    sort: function sort(prop, order) {
      this.store.commit('sort', { prop: prop, order: order });
    },
    toggleAllSelection: function toggleAllSelection() {
      this.store.commit('toggleAllSelection');
    }
  },

  computed: tablevue_type_script_lang_js_extends({
    tableSize: function tableSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    bodyWrapper: function bodyWrapper() {
      return this.$refs.bodyWrapper;
    },
    shouldUpdateHeight: function shouldUpdateHeight() {
      return this.height || this.maxHeight || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0;
    },
    bodyWidth: function bodyWidth() {
      var _layout = this.layout,
          bodyWidth = _layout.bodyWidth,
          scrollY = _layout.scrollY,
          gutterWidth = _layout.gutterWidth;

      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
    },
    bodyHeight: function bodyHeight() {
      var _layout2 = this.layout,
          _layout2$headerHeight = _layout2.headerHeight,
          headerHeight = _layout2$headerHeight === undefined ? 0 : _layout2$headerHeight,
          bodyHeight = _layout2.bodyHeight,
          _layout2$footerHeight = _layout2.footerHeight,
          footerHeight = _layout2$footerHeight === undefined ? 0 : _layout2$footerHeight;

      if (this.height) {
        return {
          height: bodyHeight ? bodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        var maxHeight = parseHeight(this.maxHeight);
        if (typeof maxHeight === 'number') {
          return {
            'max-height': maxHeight - footerHeight - (this.showHeader ? headerHeight : 0) + 'px'
          };
        }
      }
      return {};
    },
    fixedBodyHeight: function fixedBodyHeight() {
      if (this.height) {
        return {
          height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        var maxHeight = parseHeight(this.maxHeight);
        if (typeof maxHeight === 'number') {
          maxHeight = this.layout.scrollX ? maxHeight - this.layout.gutterWidth : maxHeight;
          if (this.showHeader) {
            maxHeight -= this.layout.headerHeight;
          }
          maxHeight -= this.layout.footerHeight;
          return {
            'max-height': maxHeight + 'px'
          };
        }
      }
      return {};
    },
    fixedHeight: function fixedHeight() {
      if (this.maxHeight) {
        if (this.showSummary) {
          return {
            bottom: 0
          };
        }
        return {
          bottom: this.layout.scrollX && this.data.length ? this.layout.gutterWidth + 'px' : ''
        };
      } else {
        if (this.showSummary) {
          return {
            height: this.layout.tableHeight ? this.layout.tableHeight + 'px' : ''
          };
        }
        return {
          height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
        };
      }
    },
    emptyBlockStyle: function emptyBlockStyle() {
      if (this.data && this.data.length) return null;
      var height = '100%';
      if (this.layout.appendHeight) {
        height = 'calc(100% - ' + this.layout.appendHeight + 'px)';
      }
      return {
        width: this.bodyWidth,
        height: height
      };
    }
  }, mapStates({
    selection: 'selection',
    columns: 'columns',
    tableData: 'data',
    fixedColumns: 'fixedColumns',
    rightFixedColumns: 'rightFixedColumns'
  })),

  watch: {
    height: {
      immediate: true,
      handler: function handler(value) {
        this.layout.setHeight(value);
      }
    },

    maxHeight: {
      immediate: true,
      handler: function handler(value) {
        this.layout.setMaxHeight(value);
      }
    },

    currentRowKey: {
      immediate: true,
      handler: function handler(value) {
        if (!this.rowKey) return;
        this.store.setCurrentRowKey(value);
      }
    },

    data: {
      immediate: true,
      handler: function handler(value) {
        this.store.commit('setData', value);
      }
    },

    expandRowKeys: {
      immediate: true,
      handler: function handler(newVal) {
        if (newVal) {
          this.store.setExpandRowKeysAdapter(newVal);
        }
      }
    }
  },

  created: function created() {
    var _this = this;

    this.tableId = 'iw-table_' + tableIdSeed++;
    this.debouncedUpdateLayout = Object(external_throttle_debounce_["debounce"])(50, function () {
      return _this.doLayout();
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    this.bindEvents();
    this.store.updateColumns();
    this.doLayout();

    this.resizeState = {
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    };

    // init filters
    this.store.states.columns.forEach(function (column) {
      if (column.filteredValue && column.filteredValue.length) {
        _this2.store.commit('filterChange', {
          column: column,
          values: column.filteredValue,
          silent: true
        });
      }
    });

    this.$ready = true;
  },
  destroyed: function destroyed() {
    this.unbindEvents();
  },
  data: function data() {
    var _treeProps = this.treeProps,
        _treeProps$hasChildre = _treeProps.hasChildren,
        hasChildren = _treeProps$hasChildre === undefined ? 'hasChildren' : _treeProps$hasChildre,
        _treeProps$children = _treeProps.children,
        children = _treeProps$children === undefined ? 'children' : _treeProps$children;

    this.store = createStore(this, {
      rowKey: this.rowKey,
      defaultExpandAll: this.defaultExpandAll,
      selectOnIndeterminate: this.selectOnIndeterminate,
      // TreeTable 的相关配置
      indent: this.indent,
      lazy: this.lazy,
      lazyColumnIdentifier: hasChildren,
      childrenColumnName: children
    });
    var layout = new table_layout({
      store: this.store,
      table: this,
      fit: this.fit,
      showHeader: this.showHeader
    });
    return {
      layout: layout,
      isHidden: false,
      renderExpanded: null,
      resizeProxyVisible: false,
      resizeState: {
        width: null,
        height: null
      },
      // 是否拥有多级表头
      isGroup: false,
      scrollPosition: 'left'
    };
  }
});
// CONCATENATED MODULE: ./packages/table/src/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/table/src/table.vue





/* normalize component */

var table_component = normalizeComponent(
  src_tablevue_type_script_lang_js_,
  tablevue_type_template_id_493fe34e_render,
  tablevue_type_template_id_493fe34e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_api; }
table_component.options.__file = "packages/table/src/table.vue"
/* harmony default export */ var src_table = (table_component.exports);
// CONCATENATED MODULE: ./packages/table/index.js

// CONCATENATED MODULE: ./packages/table/src/config.js


var cellStarts = {
  default: {
    order: ''
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
    className: 'iw-table-column--selection'
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  }
};

// 这些选项不应该被覆盖
var cellForced = {
  selection: {
    renderHeader: function renderHeader(h, _ref) {
      // return <iw-checkbox
      //   disabled={ store.states.data && store.states.data.length === 0 }
      //   indeterminate={ store.states.selection.length > 0 && !this.isAllSelected }
      //   nativeOn-click={ this.toggleAllSelection }
      //   value={ this.isAllSelected } />;

      var store = _ref.store;
    },
    renderCell: function renderCell(h, _ref2) {
      // return <iw-checkbox
      //   nativeOn-click={ (event) => event.stopPropagation() }
      //   value={ store.isSelected(row) }
      //   disabled={ column.selectable ? !column.selectable.call(null, row, $index) : false }
      //   on-input={ () => { store.commit('rowSelectedChanged', row); } } />;

      var row = _ref2.row,
          column = _ref2.column,
          store = _ref2.store,
          $index = _ref2.$index;
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: function renderHeader(h, _ref3) {
      var column = _ref3.column;

      return column.label || '#';
    },
    renderCell: function renderCell(h, _ref4) {
      var $index = _ref4.$index,
          column = _ref4.column;

      var i = $index + 1;
      var index = column.index;

      if (typeof index === 'number') {
        i = $index + index;
      } else if (typeof index === 'function') {
        i = index($index);
      }

      return h('div', [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader: function renderHeader(h, _ref5) {
      var column = _ref5.column;

      return column.label || '';
    },
    renderCell: function renderCell(h, _ref6) {
      var row = _ref6.row,
          store = _ref6.store;

      var classes = ['iw-table__expand-icon'];
      if (store.states.expandRows.indexOf(row) > -1) {
        classes.push('iw-table__expand-icon--expanded');
      }
      var callback = function callback(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h(
        'div',
        { 'class': classes,
          on: {
            'click': callback
          }
        },
        [h('i', { 'class': 'iw-icon iw-icon-arrow-right' })]
      );
    },
    sortable: false,
    resizable: false,
    className: 'iw-table__expand-column'
  }
};

function defaultRenderCell(h, _ref7) {
  var row = _ref7.row,
      column = _ref7.column,
      $index = _ref7.$index;

  var property = column.property;
  var value = property && getPropByPath(row, property).v;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return value;
}

function treeCellPrefix(h, _ref8) {
  var row = _ref8.row,
      treeNode = _ref8.treeNode,
      store = _ref8.store;

  if (!treeNode) return null;
  var ele = [];
  var callback = function callback(e) {
    e.stopPropagation();
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(h('span', { 'class': 'iw-table__indent', style: { 'padding-left': treeNode.indent + 'px' } }));
  }
  if (typeof treeNode.expanded === 'boolean' && !treeNode.noLazyChildren) {
    var expandClasses = ['iw-table__expand-icon', treeNode.expanded ? 'iw-table__expand-icon--expanded' : ''];
    var iconClasses = ['iw-icon-arrow-right'];
    if (treeNode.loading) {
      iconClasses = ['iw-icon-loading'];
    }
    ele.push(h(
      'div',
      { 'class': expandClasses,
        on: {
          'click': callback
        }
      },
      [h('i', { 'class': iconClasses })]
    ));
  } else {
    ele.push(h('span', { 'class': 'iw-table__placeholder' }));
  }
  return ele;
}
// CONCATENATED MODULE: ./packages/table/src/table-column.js
var table_column_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



// import IwCheckbox from '@iways-ui/packages/checkbox';

var columnIdSeed = 1;

/* harmony default export */ var table_column = ({
  name: 'IwTableColumn',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: {},
    minWidth: {},
    renderHeader: Function,
    sortable: {
      type: [Boolean, String],
      default: false
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: {
      type: Boolean,
      default: true
    },
    columnKey: String,
    align: String,
    headerAlign: String,
    showTooltipWhenOverflow: Boolean,
    showOverflowTooltip: Boolean,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
      type: Boolean,
      default: true
    },
    index: [Number, Function],
    sortOrders: {
      type: Array,
      default: function _default() {
        return ['ascending', 'descending', null];
      },
      validator: function validator(val) {
        return val.every(function (order) {
          return ['ascending', 'descending', null].indexOf(order) > -1;
        });
      }
    }
  },

  data: function data() {
    return {
      isSubColumn: false,
      columns: []
    };
  },


  computed: {
    owner: function owner() {
      var parent = this.$parent;
      while (parent && !parent.tableId) {
        parent = parent.$parent;
      }
      return parent;
    },
    columnOrTableParent: function columnOrTableParent() {
      var parent = this.$parent;
      while (parent && !parent.tableId && !parent.columnId) {
        parent = parent.$parent;
      }
      return parent;
    },
    realWidth: function realWidth() {
      return parseWidth(this.width);
    },
    realMinWidth: function realMinWidth() {
      return parseMinWidth(this.minWidth);
    },
    realAlign: function realAlign() {
      return this.align ? 'is-' + this.align : null;
    },
    realHeaderAlign: function realHeaderAlign() {
      return this.headerAlign ? 'is-' + this.headerAlign : this.realAlign;
    }
  },

  methods: {
    getPropsData: function getPropsData() {
      var _this = this;

      for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      return props.reduce(function (prev, cur) {
        if (Array.isArray(cur)) {
          cur.forEach(function (key) {
            prev[key] = _this[key];
          });
        }
        return prev;
      }, {});
    },
    getColumnElIndex: function getColumnElIndex(children, child) {
      return [].indexOf.call(children, child);
    },
    setColumnWidth: function setColumnWidth(column) {
      if (this.realWidth) {
        column.width = this.realWidth;
      }
      if (this.realMinWidth) {
        column.minWidth = this.realMinWidth;
      }
      if (!column.minWidth) {
        column.minWidth = 80;
      }
      column.realWidth = column.width === undefined ? column.minWidth : column.width;
      return column;
    },
    setColumnForcedProps: function setColumnForcedProps(column) {
      // 对于特定类型的 column，某些属性不允许设置
      var type = column.type;
      var source = cellForced[type] || {};
      Object.keys(source).forEach(function (prop) {
        var value = source[prop];
        if (value !== undefined) {
          column[prop] = prop === 'className' ? column[prop] + ' ' + value : value;
        }
      });
      return column;
    },
    setColumnRenders: function setColumnRenders(column) {
      var _this2 = this;

      var h = this.$createElement;

      // renderHeader 属性不推荐使用。
      if (this.renderHeader) {
        console.warn('[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.');
      } else if (column.type !== 'selection') {
        column.renderHeader = function (h, scope) {
          var renderHeader = _this2.$scopedSlots.header;
          return renderHeader ? renderHeader(scope) : column.label;
        };
      }

      var originRenderCell = column.renderCell;
      // TODO: 这里的实现调整
      if (column.type === 'expand') {
        // 对于展开行，renderCell 不允许配置的。在上一步中已经设置过，这里需要简单封装一下。
        column.renderCell = function (h, data) {
          return h(
            'div',
            { 'class': 'cell' },
            [originRenderCell(h, data)]
          );
        };
        this.owner.renderExpanded = function (h, data) {
          return _this2.$scopedSlots.default ? _this2.$scopedSlots.default(data) : _this2.$slots.default;
        };
      } else {
        originRenderCell = originRenderCell || defaultRenderCell;
        // 对 renderCell 进行包装
        column.renderCell = function (h, data) {
          var children = null;
          if (_this2.$scopedSlots.default) {
            children = _this2.$scopedSlots.default(data);
          } else {
            children = originRenderCell(h, data);
          }
          var prefix = treeCellPrefix(h, data);
          var props = {
            class: 'cell',
            style: {}
          };
          if (column.showOverflowTooltip) {
            props.class += ' iw-tooltip';
            props.style = { width: (data.column.realWidth || data.column.width) - 1 + 'px' };
          }
          return h(
            'div',
            props,
            [prefix, children]
          );
        };
      }
      return column;
    },
    registerNormalWatchers: function registerNormalWatchers() {
      var _this3 = this;

      var props = ['label', 'property', 'filters', 'filterMultiple', 'sortable', 'index', 'formatter', 'className', 'labelClassName', 'showOverflowTooltip'];
      // 一些属性具有别名
      var aliases = {
        prop: 'property',
        realAlign: 'align',
        realHeaderAlign: 'headerAlign',
        realWidth: 'width'
      };
      var allAliases = props.reduce(function (prev, cur) {
        prev[cur] = cur;
        return prev;
      }, aliases);

      Object.keys(allAliases).forEach(function (key) {
        var columnKey = aliases[key];

        _this3.$watch(key, function (newVal) {
          _this3.columnConfig[columnKey] = newVal;
        });
      });
    },
    registerComplexWatchers: function registerComplexWatchers() {
      var _this4 = this;

      var props = ['fixed'];
      var aliases = {
        realWidth: 'width',
        realMinWidth: 'minWidth'
      };
      var allAliases = props.reduce(function (prev, cur) {
        prev[cur] = cur;
        return prev;
      }, aliases);

      Object.keys(allAliases).forEach(function (key) {
        var columnKey = aliases[key];

        _this4.$watch(key, function (newVal) {
          _this4.columnConfig[columnKey] = newVal;
          var updateColumns = columnKey === 'fixed';
          _this4.owner.store.scheduleLayout(updateColumns);
        });
      });
    }
  },

  components: {
    // IwCheckbox
  },

  beforeCreate: function beforeCreate() {
    this.row = {};
    this.column = {};
    this.$index = 0;
    this.columnId = '';
  },
  created: function created() {
    var parent = this.columnOrTableParent;
    this.isSubColumn = this.owner !== parent;
    this.columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++;

    var type = this.type || 'default';
    var sortable = this.sortable === '' ? true : this.sortable;
    var defaults = table_column_extends({}, cellStarts[type], {
      id: this.columnId,
      type: type,
      property: this.prop || this.property,
      align: this.realAlign,
      headerAlign: this.realHeaderAlign,
      showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
      // filter 相关属性
      filterable: this.filters || this.filterMethod,
      filteredValue: [],
      filterPlacement: '',
      isColumnGroup: false,
      filterOpened: false,
      // sort 相关属性
      sortable: sortable,
      // index 列
      index: this.index
    });

    var basicProps = ['columnKey', 'label', 'className', 'labelClassName', 'type', 'renderHeader', 'formatter', 'fixed', 'resizable'];
    var sortProps = ['sortMethod', 'sortBy', 'sortOrders'];
    var selectProps = ['selectable', 'reserveSelection'];
    var filterProps = ['filterMethod', 'filters', 'filterMultiple', 'filterOpened', 'filteredValue', 'filterPlacement'];

    var column = this.getPropsData(basicProps, sortProps, selectProps, filterProps);
    column = mergeOptions(defaults, column);

    // 注意 compose 中函数执行的顺序是从右到左
    var chains = compose(this.setColumnRenders, this.setColumnWidth, this.setColumnForcedProps);
    column = chains(column);

    this.columnConfig = column;

    // 注册 watcher
    this.registerNormalWatchers();
    this.registerComplexWatchers();
  },
  mounted: function mounted() {
    var owner = this.owner;
    var parent = this.columnOrTableParent;
    var children = this.isSubColumn ? parent.$el.children : parent.$refs.hiddenColumns.children;
    var columnIndex = this.getColumnElIndex(children, this.$el);

    owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
  },
  destroyed: function destroyed() {
    if (!this.$parent) return;
    var parent = this.$parent;
    this.owner.store.commit('removeColumn', this.columnConfig, this.isSubColumn ? parent.columnConfig : null);
  },
  render: function render(h) {
    // slots 也要渲染，需要计算合并表头
    return h('div', this.$slots.default);
  }
});
// CONCATENATED MODULE: ./packages/table-column/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/aaa/src/aaa.vue?vue&type=template&id=7d619534&
var aaavue_type_template_id_7d619534_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("aaa")])
}
var aaavue_type_template_id_7d619534_staticRenderFns = []
aaavue_type_template_id_7d619534_render._withStripped = true


// CONCATENATED MODULE: ./packages/aaa/src/aaa.vue?vue&type=template&id=7d619534&

// CONCATENATED MODULE: ./packages/aaa/src/aaa.vue

var script = {}


/* normalize component */

var aaa_component = normalizeComponent(
  script,
  aaavue_type_template_id_7d619534_render,
  aaavue_type_template_id_7d619534_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var aaa_api; }
aaa_component.options.__file = "packages/aaa/src/aaa.vue"
/* harmony default export */ var aaa = (aaa_component.exports);
// CONCATENATED MODULE: ./packages/aaa/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/favorite/src/favorite.vue?vue&type=template&id=18ef8066&
var favoritevue_type_template_id_18ef8066_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { display: "inline-block" } },
    [
      _vm.popover === "IwDialog"
        ? _c(
            "div",
            {
              on: {
                click: function($event) {
                  _vm.visible = true
                }
              }
            },
            [
              _vm._t("reference", [
                _vm._v(
                  _vm._s(_vm.placeholder || _vm.t("iw.common.placeholder"))
                )
              ])
            ],
            2
          )
        : _vm._e(),
      _c(
        _vm.popover,
        {
          tag: "component",
          class:
            _vm.popover !== "IwPopover"
              ? "iw-favorite iw-favorite--" +
                _vm.iwSize +
                (_vm.disabled ? " iw-favorite--disabled" : "")
              : "",
          attrs: {
            visible: _vm.visible,
            trigger: _vm.trigger,
            placement: _vm.placement,
            "append-to-body":
              _vm.popover === "IwPopover" ? _vm.appendToBody : true,
            "popper-class":
              _vm.popover === "IwPopover"
                ? "iw-favorite iw-favorite--" +
                  _vm.iwSize +
                  (_vm.disabled ? " iw-favorite--disabled" : "")
                : "",
            disabled: _vm.disabled,
            width: _vm.popover === "IwPopover" ? null : "650px",
            title: _vm.popover === "IwPopover" ? null : false,
            "before-close": _vm.beforeClose
          },
          on: {
            "update:visible": function($event) {
              _vm.visible = $event
            }
          },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "iw-favorite-reference",
              attrs: { slot: "reference" },
              slot: "reference"
            },
            [
              _c(
                "div",
                {
                  class: [
                    {
                      "is-focus": !_vm.disabled && _vm.visible,
                      "is-disabled": _vm.disabled
                    },
                    "iw-input",
                    "iw-input--" + _vm.iwSize
                  ],
                  style: _vm.referenceWidth
                    ? "width:" + _vm.referenceWidth + "px"
                    : ""
                },
                [
                  _vm.popover === "IwPopover"
                    ? _c("div", { staticClass: "iw-input__inner" }, [
                        _vm.checkedOption[_vm.optionProps.value]
                          ? _c("span", { staticClass: "iw-input__value" }, [
                              _vm.showFolder
                                ? _c("input", {
                                    style:
                                      "width:" +
                                      (_vm.referenceWidth - 36) +
                                      "px",
                                    attrs: {
                                      disabled: _vm.disabled,
                                      unselectable: "on",
                                      readonly: ""
                                    },
                                    domProps: {
                                      value:
                                        _vm.checkedOption[_vm.optionProps.label]
                                    }
                                  })
                                : _c("input", {
                                    style:
                                      "width:" +
                                      (_vm.referenceWidth - 36) +
                                      "px",
                                    attrs: {
                                      disabled: _vm.disabled,
                                      unselectable: "on",
                                      readonly: ""
                                    },
                                    domProps: {
                                      value: _vm.checkedOption.children
                                        .map(function(item) {
                                          return item[_vm.optionProps.label]
                                        })
                                        .join(", ")
                                    }
                                  })
                            ])
                          : _c("span", { staticClass: "iw-input__value" }, [
                              _c("input", {
                                staticClass: "iw-input__placeholder",
                                style:
                                  "width:" + (_vm.referenceWidth - 36) + "px",
                                attrs: {
                                  disabled: _vm.disabled,
                                  unselectable: "on",
                                  readonly: ""
                                },
                                domProps: {
                                  value:
                                    _vm.placeholder ||
                                    _vm.t("iw.common.placeholder")
                                }
                              })
                            ]),
                        _c(
                          "span",
                          { staticClass: "iw-input__suffix" },
                          [
                            _vm._t("default", [
                              _c("i", {
                                class: [
                                  "iw-input__icon",
                                  "iw-icon-" + _vm.iconClass
                                ]
                              })
                            ])
                          ],
                          2
                        )
                      ])
                    : _vm._e()
                ]
              )
            ]
          ),
          !_vm.disabled
            ? _c(
                "div",
                {
                  style: { width: "650px", minWidth: "400px" },
                  attrs: { id: "iw-favorite__popover--" + _vm.id }
                },
                [
                  _vm.title
                    ? _c("div", { staticClass: "iw-favorite__title" }, [
                        _vm.title
                          ? _c("div", { staticClass: "iw-favorite__inner" }, [
                              _vm._v(_vm._s(_vm.title))
                            ])
                          : _vm._e(),
                        _vm.error
                          ? _c(
                              "div",
                              {
                                class: [
                                  "iw-favorite__error",
                                  "iw-favorite__error--" + _vm.size
                                ]
                              },
                              [_vm._v(_vm._s(_vm.error))]
                            )
                          : _vm._e(),
                        _c(
                          "div",
                          {
                            staticClass: "iw-favorite__close",
                            on: { click: _vm.close }
                          },
                          [_c("i", { staticClass: "iw-icon-close" })]
                        )
                      ])
                    : _vm._e(),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.loading,
                          expression: "loading"
                        }
                      ],
                      staticClass: "iw-favorite__body"
                    },
                    [
                      _vm.tableList.length
                        ? _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "iw-favorite__body-header iw-favorite__wrap"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "iw-favorite__group" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "iw-favorite__group_table"
                                      },
                                      [
                                        _c("div", [
                                          _c("dl", [
                                            _c("dt", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.t("iw.favorite.folder")
                                                )
                                              )
                                            ]),
                                            _c(
                                              "dt",
                                              {
                                                style: {
                                                  width:
                                                    (_vm.mode === "edit"
                                                      ? 385
                                                      : 490) + "px"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.subType ||
                                                      _vm.titles[_vm.type]
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm.mode === "edit"
                                              ? _c("dt", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.t(
                                                        "iw.favorite.operation"
                                                      )
                                                    )
                                                  )
                                                ])
                                              : _vm._e()
                                          ])
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _c("div", { staticClass: "iw-favorite__wrap" }, [
                              _c("div", { staticClass: "iw-favorite__group" }, [
                                _c(
                                  "div",
                                  { staticClass: "iw-favorite__group_table" },
                                  [
                                    _c(
                                      "div",
                                      _vm._l(_vm.tableList, function(
                                        row,
                                        index
                                      ) {
                                        return _c(
                                          "dl",
                                          { key: row[_vm.optionProps.value] },
                                          [
                                            _c("dt", [
                                              _c("div", [
                                                _vm.mode !== "edit"
                                                  ? _c("span", {
                                                      class: [
                                                        "iw-radio",
                                                        row.key ===
                                                        _vm.checkedValue
                                                          ? "iw-radio--checked"
                                                          : ""
                                                      ],
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.handleRadioClick(
                                                            row,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm.mode !== "edit"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass: "iw-text"
                                                      },
                                                      [
                                                        _c(
                                                          "label",
                                                          {
                                                            attrs: {
                                                              title:
                                                                row["value"]
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                _vm.handleRadioClick(
                                                                  row,
                                                                  index
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                row["value"]
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm.mode === "edit"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass: "iw-text"
                                                      },
                                                      [
                                                        _c("iw-input", {
                                                          staticStyle: {
                                                            width: "146px"
                                                          },
                                                          attrs: {
                                                            disabled:
                                                              _vm.mode !==
                                                              "edit",
                                                            size: _vm.iwSize,
                                                            placeholder: _vm.t(
                                                              "iw.favorite.placeholder"
                                                            )
                                                          },
                                                          model: {
                                                            value: row["value"],
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                row,
                                                                "value",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "row['value']"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e()
                                              ])
                                            ]),
                                            _c(
                                              "dt",
                                              {
                                                style: {
                                                  width:
                                                    (_vm.mode === "edit"
                                                      ? 385
                                                      : 490) + "px",
                                                  maxHeight: "48px"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    class: {
                                                      "children--model-edit":
                                                        _vm.mode === "edit"
                                                    }
                                                  },
                                                  [
                                                    row.children &&
                                                    row.children.length
                                                      ? _c("span", {
                                                          staticClass:
                                                            "iw-favorite__item iw-favorite__item--text",
                                                          domProps: {
                                                            innerHTML: _vm._s(
                                                              row.children
                                                                .map(function(
                                                                  item
                                                                ) {
                                                                  return (
                                                                    "<em title=" +
                                                                    item.value +
                                                                    " class=" +
                                                                    (item.remark ==
                                                                    "进口"
                                                                      ? "font-orange"
                                                                      : "font-blue") +
                                                                    ">" +
                                                                    item.value +
                                                                    "</em>"
                                                                  )
                                                                })
                                                                .join(" , ")
                                                            )
                                                          }
                                                        })
                                                      : _vm._e(),
                                                    _vm.mode === "edit"
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "iw-favorite__item iw-favorite__item--select"
                                                          },
                                                          [
                                                            _c(
                                                              _vm.componentName,
                                                              {
                                                                tag:
                                                                  "component",
                                                                attrs: {
                                                                  "disabled-select":
                                                                    _vm
                                                                      .dataForm[
                                                                      _vm.type +
                                                                        "Disabled"
                                                                    ][index],
                                                                  data:
                                                                    _vm
                                                                      .searchFormData[
                                                                      _vm.type
                                                                    ],
                                                                  "show-search": true,
                                                                  "show-selected":
                                                                    _vm.showSelected,
                                                                  "show-letter":
                                                                    _vm.showLetter,
                                                                  filters:
                                                                    _vm.filters,
                                                                  "selected-filter":
                                                                    _vm.selectedFilter,
                                                                  title:
                                                                    _vm.titles[
                                                                      _vm.type
                                                                    ],
                                                                  "append-to-body": false,
                                                                  "select-on-leaf":
                                                                    "",
                                                                  multiple: "",
                                                                  size: "mini",
                                                                  placement:
                                                                    "bottom-start"
                                                                },
                                                                on: {
                                                                  filterChange: function(
                                                                    value,
                                                                    text
                                                                  ) {
                                                                    return _vm.handleFilterChange(
                                                                      value,
                                                                      text,
                                                                      index
                                                                    )
                                                                  },
                                                                  change: function(
                                                                    value,
                                                                    text
                                                                  ) {
                                                                    return _vm.handleChange(
                                                                      value,
                                                                      text,
                                                                      index
                                                                    )
                                                                  }
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm
                                                                      .dataForm[
                                                                      _vm.type
                                                                    ][index],
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm
                                                                        .dataForm[
                                                                        _vm.type
                                                                      ],
                                                                      index,
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "dataForm[type][index]"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "iw-favorite__button--select",
                                                                    attrs: {
                                                                      slot:
                                                                        "reference"
                                                                    },
                                                                    slot:
                                                                      "reference"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.t(
                                                                          "iw.favorite.select"
                                                                        )
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      : _vm._e()
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm.mode === "edit"
                                              ? _c("dt", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "iw-favorite__button iw-favorite__button--del",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.del(index)
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.t(
                                                            "iw.favorite.del"
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "iw-favorite__button iw-favorite__button--copy",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.copy(index)
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.t(
                                                            "iw.favorite.copy"
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ])
                                              : _vm._e()
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                )
                              ])
                            ])
                          ])
                        : _c("iw-empty", {
                            style: { height: "150px" },
                            attrs: { status: _vm.status }
                          })
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "iw-favorite__footer" },
                    [
                      _vm._t("desc"),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.mode === "view",
                              expression: "mode==='view'"
                            }
                          ]
                        },
                        [
                          _vm.editable
                            ? _c(
                                "iw-button",
                                {
                                  attrs: { size: _vm.iwSize },
                                  on: {
                                    click: function($event) {
                                      _vm.edit()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(_vm.t("iw.favorite.edit")) +
                                      "\n          "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize, type: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.submit(false)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.t("iw.favorite.confirm")) +
                                  "\n          "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.mode === "edit",
                              expression: "mode==='edit'"
                            }
                          ]
                        },
                        [
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize },
                              on: {
                                click: function($event) {
                                  _vm.create()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.t("iw.favorite.create")) +
                                  "\n          "
                              )
                            ]
                          ),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize },
                              on: {
                                click: function($event) {
                                  _vm.cancel()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.t("iw.favorite.cancel")) +
                                  "\n          "
                              )
                            ]
                          ),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize, type: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.save()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.t("iw.favorite.save")) +
                                  "\n          "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  )
                ]
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var favoritevue_type_template_id_18ef8066_staticRenderFns = []
favoritevue_type_template_id_18ef8066_render._withStripped = true


// CONCATENATED MODULE: ./packages/favorite/src/favorite.vue?vue&type=template&id=18ef8066&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/favorite/src/favorite.vue?vue&type=script&lang=js&
function favoritevue_type_script_lang_js_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var favoritevue_type_script_lang_js_ = ({
  name: 'IwFavorite',
  mixins: [mixins_locale],
  props: {
    value: {
      type: [String, Number],
      default: function _default() {
        return;
      }
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    id: {
      type: Number,
      default: function _default() {
        return parseInt(Math.random() * 10000);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    showFolder: {
      // 默认显示文件夹名称，false表示显示具体收藏项目
      type: Boolean,
      default: true
    },
    trigger: {
      // 触发方式， 可选：hover/focus/click/contextmenu
      type: String,
      default: 'click'
    },
    placement: {
      // 气泡框位置， 可选：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      type: String,
      default: ''
    },
    appendToBody: {
      // 是否插入至body下, 默认true
      type: Boolean,
      default: true
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: large || default || small
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    title: {
      // 标题： 为空就不显示
      type: [Boolean, String],
      default: false
    },
    selectTitle: {
      // 选择器标题 20191111 远杰
      type: [Boolean, String],
      default: false
    },
    type: {
      type: String,
      default: function _default() {
        return 'subModel'; // ['manfBrand', 'subModel', 'segment']
      }
    },
    subType: {
      type: String,
      default: undefined // ['生产商品牌', '厂商', '品牌', '生产商集团']
    },
    typeData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    require: {
      // 当此项为 true 时，必须选择
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    optionProps: {
      type: Object,
      default: function _default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        };
      }
    },
    isModal: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    status: {
      type: [Number, String],
      default: 200
    },
    showSelected: {
      // 是否显示已选项
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      visible: false,
      popover: 'IwPopover',
      referenceWidth: null,
      error: '', // 错误信息
      checkedValue: undefined,
      checkedOption: {},
      mode: 'view', // ['view', 'edit']
      maxLength: 10,
      propsOptions: {
        title: this.title
      },
      tableList: [],
      titles: {
        subModel: this.selectTitle || this.t('iw.favorite.subModel'),
        manfBrand: this.selectTitle || this.t('iw.favorite.manfBrand'),
        segment: this.selectTitle || this.t('iw.favorite.segment')
      },
      // 编辑状态
      dataForm: {
        manfBrand: [],
        manfBrandText: [],
        manfBrandDisabled: [],
        subModel: [],
        subModelText: [],
        subModelDisabled: [],
        segment: [],
        segmentText: [],
        segmentDisabled: []
      },
      searchFormData: {
        manfBrand: [], // 产商品牌
        subModel: [], // 子车型
        segment: [] // 子车型
      },
      segmentSubModel: [],
      brandSubModel: [],
      showLetter: false,
      filters: [],
      selectedFilter: 1
    };
  },

  computed: {
    iwSize: function iwSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    iconClass: function iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up';
    },
    componentName: function componentName() {
      var type = ['segment', 'region'].includes(this.type) ? 'cascader' : this.type;
      return 'iw-' + type.toLowerCase();
    }
  },
  watch: {
    data: function data() {
      this.init();
    },
    typeData: function typeData() {
      this.init();
    },
    visible: function visible() {
      this.mode = 'view';
      this.init();
    },

    // 选择器标题发生变化 20191111 远杰
    selectTitle: function selectTitle() {
      switch (this.type) {
        case 'subModel':
          this.$set(this.titles, 'subModel', this.selectTitle || this.t('iw.favorite.subModel'));
          break;
        case 'manfBrand':
          this.$set(this.titles, 'manfBrand', this.selectTitle || this.t('iw.favorite.manfBrand'));
          break;
        case 'segment':
          this.$set(this.titles, 'segment', this.selectTitle || this.t('iw.favorite.segment'));
          break;
      }
    }
  },
  mounted: function mounted() {
    this.popover = this.isModal ? 'IwDialog' : 'IwPopover';
    this.referenceWidth = this.$el.offsetWidth || 100;
    this.init();
  },

  methods: {
    init: function init() {
      this.error = '';
      this.initValue();
      this.initData();
    },
    initValue: function initValue() {
      var _this = this;

      this.checkedValue = this.value;
      this.checkedOption = this.data.find(function (item) {
        return item.key === _this.checkedValue;
      }) || {};
    },
    initData: function initData() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;

      this.tableList = deepClone(data).map(function (row, index) {
        row.key = row.key;
        if (_this2.checkedValue) {
          row.selected = _this2.checkedValue === row.key;
        } else if (row.selected) _this2.checkedValue = row.key;
        _this2.checkedOption = _this2.data.find(function (item) {
          return item.key === _this2.checkedValue;
        }) || {};
        if (_this2.type === 'manfBrand') {
          _this2.$set(_this2.dataForm[_this2.type], index, [row.children.map(function (item) {
            return item.key;
          })]);
          _this2.$set(_this2.dataForm[_this2.type + 'Disabled'], index, [row.disabledChildren]);
          _this2.$set(_this2.dataForm[_this2.type + 'Text'], index, [row.children.map(function (item) {
            item.selected = true;
            return item;
          })]);
        } else {
          _this2.$set(_this2.dataForm[_this2.type], index, row.children.map(function (item) {
            return item.key;
          }));
          _this2.$set(_this2.dataForm[_this2.type + 'Disabled'], index, row.disabledChildren);
          _this2.$set(_this2.dataForm[_this2.type + 'Text'], index, row.children.map(function (item) {
            item.selected = true;
            return item;
          }));
        }
        return row;
      });
      // 编辑状态
      if (this.type === 'manfBrand') {
        this.$set(this.searchFormData, 'manfBrand', deepClone(this.typeData));
        this.showLetter = true;
        this.filters = [];
      }
      if (this.type === 'subModel') {
        var _data = deepClone(this.typeData);
        this.segmentSubModel = _data[0];
        this.brandSubModel = _data[1];
        this.$set(this.searchFormData, 'subModel', this.segmentSubModel);
        this.showLetter = false;
        this.selectedFilter = 1;
        this.filters = [{ key: 1, value: this.t('iw.favorite.segment') }, { key: 2, value: this.t('iw.favorite.manfBrand') }];
      }
      if (this.type === 'segment') {
        this.$set(this.searchFormData, 'segment', deepClone(this.typeData));
        this.showLetter = false;
        this.filters = [];
      }
    },
    handleRadioClick: function handleRadioClick(item, index) {
      this.checkedValue = item.key;
      this.$set(this.tableList[index], 'selected', true);
    },
    beforeClose: function beforeClose(done) {
      if (this.mode === 'view') {
        done();
      } else {
        this.error = this.t('iw.favorite.saveFirst');
      }
    },
    close: function close() {
      if (this.mode === 'view') {
        this.visible = false;
      } else {
        this.error = this.t('iw.favorite.saveFirst');
      }
    },
    edit: function edit() {
      this.mode = 'edit';
    },
    cancel: function cancel() {
      this.mode = 'view';
      this.error = '';
      this.init();
    },
    submit: function submit() {
      var _this3 = this;

      if (this.require && !this.checkedValue) {
        this.error = this.t('iw.common.placeholder');
        return;
      }
      this.checkedOption = this.tableList.find(function (item) {
        return item.key === _this3.checkedValue;
      });
      this.$emit('change', this.checkedValue, this.checkedOption);
      this.visible = false;
    },
    del: function del(index) {
      var _this4 = this;

      this.error = '';
      setTimeout(function () {
        _this4.tableList.splice(index, 1);
        if (_this4.type === 'manfBrand') {
          _this4.dataForm.manfBrand = _this4.tableList.map(function (row) {
            return row.children.map(function (item) {
              return item.key;
            });
          });
          _this4.dataForm.manfBrandText = _this4.tableList.map(function (row) {
            return row.children.map(function (item) {
              return item;
            });
          });
        }
        if (_this4.type === 'subModel') {
          _this4.dataForm.subModel = _this4.tableList.map(function (row) {
            return row.children.map(function (item) {
              return item.key;
            });
          });
          _this4.dataForm.subModelText = _this4.tableList.map(function (row) {
            return row.children.map(function (item) {
              return item;
            });
          });
        }
        _this4.initData(_this4.tableList);
      }, 0);
    },
    copy: function copy(index) {
      this.create(index, true);
    },
    create: function create() {
      var _this5 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isCopy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.tableList.length >= this.maxLength) {
        this.error = this.t('iw.favorite.maxFolders', { maxLength: this.maxLength });
        return false;
      }
      var indexData = deepClone(this.tableList[index]);
      indexData['key'] = parseInt(Math.random() * 1000000);
      indexData['value'] = this.t('iw.favorite.customFolder') + (this.tableList.length + 1);
      indexData['children'] = isCopy ? indexData['children'] : [];
      indexData['selected'] = 0;
      setTimeout(function () {
        _this5.tableList.push(indexData);
        _this5.initData(_this5.tableList);
      }, 0);
    },
    save: function save() {
      if (!this.tableList.length) {
        this.error = this.t('iw.favorite.placeholder');
        return;
      }
      if (this.tableList.filter(function (item) {
        return !!item.value;
      }).length !== this.tableList.length) {
        this.error = this.t('iw.favorite.placeholder');
        return;
      }
      if (this.tableList.length !== this.tableList.filter(function (item) {
        return item.value.length <= 50;
      }).length) {
        this.error = this.t('iw.favorite.maxFolderName', { maxLength: 50 });
        return;
      }
      if (this.tableList.length !== this.tableList.filter(function (item) {
        return item.children.length > 0;
      }).length) {
        this.error = this.t('iw.common.placeholder');
        return;
      }
      var names = this.tableList.map(function (item) {
        return item.value;
      });
      if ([].concat(favoritevue_type_script_lang_js_toConsumableArray(new Set(names))).length !== this.tableList.length) {
        this.error = this.t('iw.favorite.nameExist');
        return;
      }
      if (!this.tableList.every(function (item) {
        return item.children.length < 1000;
      })) {
        this.error = this.t('iw.favorite.outOfRange');
        return;
      }
      this.mode = 'view';
      this.error = '';
      this.$emit('save', this.tableList);
    },
    handleFilterChange: function handleFilterChange(value, text, index) {
      this.selectedFilter = value;
      if (value === 1) {
        this.searchFormData.subModel = this.segmentSubModel;
        this.$set(this.dataForm.subModel, index, this.dataForm.subModel[index]);
        this.showLetter = false;
      } else if (value === 2) {
        this.searchFormData.subModel = this.brandSubModel;
        this.$set(this.dataForm.subModel, index, this.dataForm.subModel[index]);
        this.showLetter = true;
      }
    },
    handleChange: function handleChange(value, text, index) {
      var _this6 = this;

      var tmpText = this.type === 'manfBrand' ? text[0] : text;
      this.$set(this.dataForm[this.type], index, value);
      this.$set(this.tableList[index], 'children', tmpText.map(function (item) {
        var child = {
          key: item.key,
          value: item.value
        };
        if (_this6.type === 'subModel') {
          child['remark'] = item.remark;
        }
        return child;
      }));
      this.initData(this.tableList);
    }
  }
});
// CONCATENATED MODULE: ./packages/favorite/src/favorite.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_favoritevue_type_script_lang_js_ = (favoritevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/favorite/src/favorite.vue





/* normalize component */

var favorite_component = normalizeComponent(
  src_favoritevue_type_script_lang_js_,
  favoritevue_type_template_id_18ef8066_render,
  favoritevue_type_template_id_18ef8066_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var favorite_api; }
favorite_component.options.__file = "packages/favorite/src/favorite.vue"
/* harmony default export */ var favorite = (favorite_component.exports);
// CONCATENATED MODULE: ./packages/favorite/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/submodel/src/submodel.vue?vue&type=template&id=882d14f4&
var submodelvue_type_template_id_882d14f4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { display: "inline-block" } },
    [
      _vm.popover === "IwDialog"
        ? _c(
            "div",
            {
              on: {
                click: function($event) {
                  _vm.visible = true
                }
              }
            },
            [
              _vm._t("reference", [
                _vm._v(
                  _vm._s(_vm.placeholder || _vm.t("iw.common.placeholder"))
                )
              ])
            ],
            2
          )
        : _vm._e(),
      _c(
        _vm.popover,
        {
          tag: "component",
          class:
            "iw-submodel iw-submodel--" +
            _vm.iwSize +
            (_vm.disabled ? " iw-submodel--disabled" : ""),
          attrs: {
            visible: _vm.visible,
            trigger: _vm.trigger,
            placement: _vm.placement,
            "append-to-body":
              _vm.popover === "IwPopover" ? _vm.appendToBody : true,
            "popper-class":
              "iw-submodel iw-submodel--" +
              _vm.iwSize +
              (_vm.disabled ? " iw-submodel--disabled" : ""),
            disabled: _vm.disabled,
            width: _vm.popover === "IwPopover" ? null : "830px",
            title: _vm.popover === "IwPopover" ? null : false
          },
          on: {
            "update:visible": function($event) {
              _vm.visible = $event
            }
          },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "iw-submodel-reference",
              attrs: { slot: "reference" },
              slot: "reference"
            },
            [
              _vm._t("reference", [
                _c(
                  "div",
                  {
                    class: [
                      {
                        "is-focus": !_vm.disabled && _vm.visible,
                        "is-disabled": _vm.disabled
                      },
                      "iw-input",
                      "iw-input--" + _vm.iwSize
                    ],
                    style: _vm.referenceWidth
                      ? "width:" + _vm.referenceWidth + "px"
                      : ""
                  },
                  [
                    _vm.popover === "IwPopover"
                      ? _c("div", { staticClass: "iw-input__inner" }, [
                          _vm.multiple &&
                          _vm.checkedOptions &&
                          _vm.checkedOptions.length > 0
                            ? _c("span", { staticClass: "iw-input__value" }, [
                                _vm.checkedOptions.length > 1
                                  ? _c("input", {
                                      style:
                                        "width:" +
                                        (_vm.referenceWidth - 36) +
                                        "px",
                                      attrs: {
                                        disabled: _vm.disabled,
                                        unselectable: "on",
                                        readonly: ""
                                      },
                                      domProps: {
                                        value:
                                          _vm.t("iw.common.selected") +
                                          "(" +
                                          _vm.checkedOptions.length +
                                          ")"
                                      }
                                    })
                                  : _c("input", {
                                      style:
                                        "width:" +
                                        (_vm.referenceWidth - 36) +
                                        "px",
                                      attrs: {
                                        disabled: _vm.disabled,
                                        unselectable: "on",
                                        readonly: ""
                                      },
                                      domProps: {
                                        value:
                                          _vm.checkedOptions[0][
                                            _vm.optionProps.label
                                          ]
                                      }
                                    })
                              ])
                            : !_vm.multiple &&
                              _vm.checkedOptions &&
                              _vm.checkedOptions.length
                            ? _c("span", { staticClass: "iw-input__value" }, [
                                _c("input", {
                                  style:
                                    "width:" + (_vm.referenceWidth - 36) + "px",
                                  attrs: {
                                    disabled: _vm.disabled,
                                    unselectable: "on",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.checkedOptions[
                                        _vm.checkedOptions.length - 1
                                      ][_vm.optionProps.label]
                                  }
                                })
                              ])
                            : _c("span", { staticClass: "iw-input__value" }, [
                                _c("input", {
                                  staticClass: "iw-input__placeholder",
                                  style:
                                    "width:" + (_vm.referenceWidth - 36) + "px",
                                  attrs: {
                                    disabled: _vm.disabled,
                                    unselectable: "on",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.placeholder ||
                                      _vm.t("iw.common.placeholder")
                                  }
                                })
                              ]),
                          _c(
                            "span",
                            { staticClass: "iw-input__suffix" },
                            [
                              _vm._t("default", [
                                _c("i", {
                                  class: [
                                    "iw-input__icon",
                                    "iw-icon-" + _vm.iconClass
                                  ]
                                })
                              ])
                            ],
                            2
                          )
                        ])
                      : _vm._e()
                  ]
                )
              ])
            ],
            2
          ),
          !_vm.disabled
            ? _c(
                "div",
                {
                  style: { minWidth: "400px", width: _vm.clientWidth },
                  attrs: { id: "iw-submodel__popover--" + _vm.id }
                },
                [
                  _vm.title || _vm.tabs.length
                    ? _c("div", { staticClass: "iw-submodel__title" }, [
                        _vm.title
                          ? _c("div", { staticClass: "iw-submodel__inner" }, [
                              _vm._v(_vm._s(_vm.title))
                            ])
                          : _vm._e(),
                        _vm.filters && _vm.filters.length
                          ? _c(
                              "div",
                              { staticClass: "iw-submodel__filter" },
                              _vm._l(_vm.filters, function(item) {
                                return _c(
                                  "span",
                                  {
                                    key: item.key,
                                    staticClass: "iw-submodel__filter-item",
                                    class: {
                                      on: item.key == _vm.selectedFilter
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.handleFilterChange(item.key)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(item.value))]
                                )
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm.showSearch && _vm.data.length
                          ? _c(
                              "div",
                              {
                                staticClass: "iw-submodel__search",
                                class: "iw-submodel__search--" + _vm.iwSize
                              },
                              [
                                _c("iw-input", {
                                  staticStyle: { width: "130px" },
                                  attrs: {
                                    size: _vm.iwSize,
                                    placeholder: _vm.t("iw.common.search"),
                                    "prefix-icon": "iw-icon-search"
                                  },
                                  on: { change: _vm.handleSearchChange },
                                  nativeOn: {
                                    keyup: function($event) {
                                      return _vm.handleSearchChange($event)
                                    }
                                  },
                                  model: {
                                    value: _vm.keyword,
                                    callback: function($$v) {
                                      _vm.keyword = $$v
                                    },
                                    expression: "keyword"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm.error
                          ? _c("div", { staticClass: "iw-submodel__error" }, [
                              _vm._v(_vm._s(_vm.error))
                            ])
                          : _vm._e(),
                        _c(
                          "div",
                          {
                            staticClass: "iw-submodel__close",
                            on: {
                              click: function($event) {
                                _vm.visible = false
                              }
                            }
                          },
                          [_c("i", { staticClass: "iw-icon-close" })]
                        )
                      ])
                    : _vm._e(),
                  _c("div", { staticClass: "iw-submodel__body" }, [
                    _c("div", { staticClass: "iw-submodel__track" }, [
                      _vm.datas && _vm.datas.length
                        ? _c(
                            "div",
                            {
                              class:
                                "iw-submodel__track--" +
                                (_vm.showLetter ? "plain" : "select")
                            },
                            [
                              _vm.showLetter === true
                                ? _c(
                                    "div",
                                    _vm._l(_vm.datas, function(group) {
                                      return _c(
                                        "em",
                                        {
                                          key: group[_vm.optionProps.value],
                                          class: {
                                            on:
                                              _vm.selectedKey ==
                                              group[_vm.optionProps.value]
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.handleTrackChange(
                                                group[_vm.optionProps.value]
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(group[_vm.optionProps.label])
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                : _vm.showLetter === false
                                ? _c(
                                    "div",
                                    [
                                      _c("iw-select", {
                                        staticStyle: { width: "100px" },
                                        attrs: {
                                          data: _vm.datas.map(function(item) {
                                            return {
                                              key: item.key,
                                              value: item.value
                                            }
                                          }),
                                          multiple: false,
                                          size: _vm.iwSize,
                                          "append-to-body": false,
                                          disabled:
                                            !_vm.datas || _vm.datas.length <= 0,
                                          placeholder: _vm.t(
                                            "iw.submodel.quickppositioning"
                                          )
                                        },
                                        on: { change: _vm.handleTrackChange },
                                        model: {
                                          value: _vm.selectedTrack,
                                          callback: function($$v) {
                                            _vm.selectedTrack = $$v
                                          },
                                          expression: "selectedTrack"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
                          )
                        : _vm._e(),
                      _c("div", { staticClass: "iw-submodel__track-desc" }, [
                        _c("span", [
                          _c("abbr", { staticClass: "font-blue" }, [
                            _vm._v(
                              "■ " + _vm._s(_vm.t("iw.submodel.local")) + " "
                            )
                          ]),
                          _c("abbr", { staticClass: "font-orange" }, [
                            _vm._v("■ " + _vm._s(_vm.t("iw.submodel.import")))
                          ])
                        ])
                      ]),
                      _c(
                        "div",
                        { staticClass: "iw-submodel__track-filter" },
                        [_vm._t("filters-select")],
                        2
                      )
                    ]),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "loading",
                            rawName: "v-loading",
                            value: _vm.loading,
                            expression: "loading"
                          }
                        ]
                      },
                      [
                        _vm.datas && _vm.datas.length
                          ? [
                              _c(
                                "iw-scrollbar",
                                {
                                  ref: "scrollbarRight__KEY",
                                  attrs: {
                                    "wrap-style":
                                      "height:" + (_vm.height + 16) + "px;",
                                    "wrap-class": "iw-submodel__wrap"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "iw-submodel__group" },
                                    _vm._l(_vm.datas, function(group) {
                                      return _c(
                                        "ul",
                                        { key: group[_vm.optionProps.value] },
                                        [
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "iw-submodel__group_label",
                                              attrs: {
                                                "scroll-key":
                                                  group[_vm.optionProps.value] +
                                                  "_" +
                                                  "KEY"
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "iw-submodel__group_item",
                                                  attrs: {
                                                    title:
                                                      group[
                                                        _vm.optionProps.label
                                                      ]
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.handleItemChange(
                                                        group
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm.showLetter === false
                                                    ? _c("span", {
                                                        class: [
                                                          _vm.multiple
                                                            ? "iw-checkbox"
                                                            : "",
                                                          (_vm.multiple &&
                                                            (!_vm.selectOnLeaf &&
                                                              group.selected)) ||
                                                          (_vm.selectOnLeaf &&
                                                            _vm.isItemChecked(
                                                              group
                                                            ))
                                                            ? "iw-checkbox--checked"
                                                            : "",
                                                          _vm.multiple &&
                                                          (_vm.selectOnLeaf &&
                                                            _vm.isItemIndeterminate(
                                                              group
                                                            ))
                                                            ? "iw-checkbox--indeterminate"
                                                            : ""
                                                        ]
                                                      })
                                                    : _vm._e(),
                                                  _c(
                                                    "span",
                                                    { staticClass: "iw-text" },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          group[
                                                            _vm.optionProps
                                                              .label
                                                          ]
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "iw-submodel__group_table"
                                            },
                                            [
                                              _c(
                                                "table",
                                                _vm._l(
                                                  group[
                                                    _vm.optionProps.children
                                                  ],
                                                  function(row) {
                                                    return _c(
                                                      "tr",
                                                      {
                                                        key:
                                                          row[
                                                            _vm.optionProps
                                                              .value
                                                          ]
                                                      },
                                                      [
                                                        _c("td", [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "iw-submodel__group_item",
                                                              attrs: {
                                                                title:
                                                                  row[
                                                                    _vm
                                                                      .optionProps
                                                                      .label
                                                                  ]
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.handleItemChange(
                                                                    row
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("span", {
                                                                class: [
                                                                  _vm.multiple
                                                                    ? "iw-checkbox"
                                                                    : "",
                                                                  (_vm.multiple &&
                                                                    (!_vm.selectOnLeaf &&
                                                                      row.selected)) ||
                                                                  (_vm.selectOnLeaf &&
                                                                    _vm.isItemChecked(
                                                                      row
                                                                    ))
                                                                    ? "iw-checkbox--checked"
                                                                    : "",
                                                                  _vm.multiple &&
                                                                  (_vm.selectOnLeaf &&
                                                                    _vm.isItemIndeterminate(
                                                                      row
                                                                    ))
                                                                    ? "iw-checkbox--indeterminate"
                                                                    : ""
                                                                ]
                                                              }),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "iw-text"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      row[
                                                                        _vm
                                                                          .optionProps
                                                                          .label
                                                                      ]
                                                                    )
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]),
                                                        _c("td", [
                                                          _c(
                                                            "table",
                                                            {},
                                                            _vm._l(
                                                              _vm.chunk(
                                                                row[
                                                                  _vm
                                                                    .optionProps
                                                                    .children
                                                                ],
                                                                _vm.leafsPerColumn
                                                              ),
                                                              function(
                                                                row2,
                                                                key2
                                                              ) {
                                                                return _c(
                                                                  "tr",
                                                                  { key: key2 },
                                                                  [
                                                                    _vm._l(
                                                                      row2,
                                                                      function(
                                                                        item
                                                                      ) {
                                                                        return _c(
                                                                          "td",
                                                                          {
                                                                            key:
                                                                              item[
                                                                                _vm
                                                                                  .optionProps
                                                                                  .value
                                                                              ],
                                                                            attrs: {
                                                                              "scroll-key":
                                                                                item[
                                                                                  _vm
                                                                                    .optionProps
                                                                                    .value
                                                                                ] +
                                                                                "_" +
                                                                                "SUBMODEL"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                class: [
                                                                                  "iw-submodel__group_item",
                                                                                  "iw-submodel__group_item--" +
                                                                                    _vm.leafsPerColumn
                                                                                ],
                                                                                attrs: {
                                                                                  title:
                                                                                    item[
                                                                                      _vm
                                                                                        .optionProps
                                                                                        .label
                                                                                    ]
                                                                                },
                                                                                on: {
                                                                                  click: function(
                                                                                    $event
                                                                                  ) {
                                                                                    _vm.handleItemChange(
                                                                                      item
                                                                                    )
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "span",
                                                                                  {
                                                                                    class: [
                                                                                      _vm.multiple
                                                                                        ? "iw-checkbox"
                                                                                        : "iw-radio",
                                                                                      _vm.multiple &&
                                                                                      item.selected
                                                                                        ? "iw-checkbox--checked"
                                                                                        : "",
                                                                                      !_vm.multiple &&
                                                                                      item.selected
                                                                                        ? "iw-radio--checked"
                                                                                        : ""
                                                                                    ]
                                                                                  }
                                                                                ),
                                                                                _c(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "iw-text",
                                                                                    class: {
                                                                                      "font-orange":
                                                                                        item.remark ==
                                                                                        "进口"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "\n                                    " +
                                                                                        _vm._s(
                                                                                          item[
                                                                                            _vm
                                                                                              .optionProps
                                                                                              .label
                                                                                          ]
                                                                                        ) +
                                                                                        "\n                                  "
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      }
                                                                    ),
                                                                    _vm._l(
                                                                      _vm.leafsPerColumn -
                                                                        row2.length,
                                                                      function(
                                                                        item
                                                                      ) {
                                                                        return _c(
                                                                          "td",
                                                                          {
                                                                            key: item
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                class: [
                                                                                  "iw-submodel__group_item",
                                                                                  "iw-submodel__group_item--" +
                                                                                    _vm.leafsPerColumn
                                                                                ]
                                                                              }
                                                                            )
                                                                          ]
                                                                        )
                                                                      }
                                                                    )
                                                                  ],
                                                                  2
                                                                )
                                                              }
                                                            ),
                                                            0
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            ]
                          : _c("iw-empty", {
                              staticStyle: { height: "160px" },
                              attrs: { status: _vm.status }
                            })
                      ],
                      2
                    )
                  ]),
                  _vm.data.length
                    ? _c(
                        "div",
                        { staticClass: "iw-submodel__footer" },
                        [
                          _vm.showSelected &&
                          _vm.selectTextsTag &&
                          _vm.selectTextsTag.length
                            ? _c(
                                "span",
                                { staticClass: "iw-submodel__footer-selected" },
                                [
                                  _c("label", [
                                    _vm._v(
                                      _vm._s(_vm.t("iw.common.selected")) + "："
                                    )
                                  ]),
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "iw-scrollbar",
                                        {
                                          attrs: {
                                            "wrap-class":
                                              "iw-submodel__footer-scroll iw-submodel__footer-scroll--" +
                                              _vm.size
                                          }
                                        },
                                        _vm._l(_vm.selectTextsTag, function(
                                          item
                                        ) {
                                          return _c(
                                            "iw-tag",
                                            {
                                              key: item[_vm.optionProps.value],
                                              attrs: {
                                                title:
                                                  item[_vm.optionProps.label],
                                                size: _vm.iwSize,
                                                type: "pink",
                                                closable: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.handleTagClose(item)
                                                },
                                                close: function($event) {
                                                  _vm.handleTagClose(item)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  item[_vm.optionProps.label]
                                                )
                                              )
                                            ]
                                          )
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm.showCheckAll && _vm.multiple && _vm.datas.length
                            ? _c(
                                "span",
                                {
                                  staticClass: "iw-submodel__footer-checkall",
                                  on: {
                                    click: function($event) {
                                      _vm.handleCheckAllChange(
                                        _vm.datas,
                                        !_vm.isCheckAllChecked(_vm.datas)
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("span", {
                                    class: [
                                      "iw-checkbox",
                                      _vm.data.length &&
                                      _vm.isCheckAllChecked(_vm.datas)
                                        ? "iw-checkbox--checked"
                                        : "",
                                      _vm.data.length &&
                                      _vm.isCheckAllIndeterminate(_vm.datas)
                                        ? "iw-checkbox--indeterminate"
                                        : ""
                                    ]
                                  }),
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.t("iw.common.checkAll")))
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize },
                              on: {
                                click: function($event) {
                                  _vm.reset()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.t("iw.common.reset")) +
                                  "\n        "
                              )
                            ]
                          ),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize, type: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.submit(false)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.t("iw.common.confirm")) +
                                  "\n        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var submodelvue_type_template_id_882d14f4_staticRenderFns = []
submodelvue_type_template_id_882d14f4_render._withStripped = true


// CONCATENATED MODULE: ./packages/submodel/src/submodel.vue?vue&type=template&id=882d14f4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/submodel/src/submodel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var submodelvue_type_script_lang_js_ = ({
  name: 'IwSubmodel',
  mixins: [mixins_locale],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultValue: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    texts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultTexts: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    id: {
      type: Number,
      default: function _default() {
        return parseInt(Math.random() * 10000);
      }
    },
    title: {
      // 标题： 为空就不显示
      type: [Boolean, String],
      default: false
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    leafsPerColumn: {
      type: Number,
      default: 6,
      validator: function validator(value) {
        return [4, 5, 6].includes(value);
      }
    },
    filters: {
      type: [Array, Boolean],
      default: function _default() {
        return false;
      }
    },
    selectedFilter: {
      type: [Number, String],
      default: function _default() {
        return undefined;
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showLetter: {
      // 是否需要快速字母选择器
      type: Boolean,
      default: true
    },
    showSearch: {
      // 显示搜索框
      type: Boolean,
      default: true
    },
    showSelected: {
      // 是否显示已选项
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [Number, String],
      default: 200
    },
    height: {
      type: [Number, String],
      default: 320
    },
    selectOnLeaf: {
      // 当此项为 false 时，每级节点均可选, true 时只有叶节点可选
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    showCheckAll: {
      // 当此项为 true 时，显示顶部全选功能
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    require: {
      // 当此项为 true 时，必须选择
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    min: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    max: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    optionProps: {
      type: Object,
      default: function _default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        };
      }
    },
    isModal: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabledSelect: {
      tips: '禁止选择',
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * Popover的属性
     */
    trigger: {
      // 触发方式， 可选：hover/focus/click/contextmenu
      type: String,
      default: 'click'
    },
    placement: {
      // 气泡框位置， 可选：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      type: String,
      default: ''
    },
    appendToBody: {
      // 是否插入至body下, 默认true
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: medium || small || mini
    }
  },
  data: function data() {
    return {
      visible: false,
      popover: 'IwPopover',
      referenceWidth: null,
      clientWidth: null,
      datas: [], // 数据源
      checkedOptions: [], // 已选项(选择框显示)
      selectTextsTag: [], // 已选项(已选栏显示)
      selectValues: [], // 已选项的ID
      selectTexts: [], // 已选项(内部存储，单选存所有节点项，复选根据selectOnLeaf存所有节点项或叶子节点项)
      keyword: undefined, // 查询值
      selectedKey: undefined, // 快速定位(showLetter=true)
      selectedTrack: undefined, // 快速定位(showLetter=false)
      lastSearch: undefined,
      error: '', // 错误信息
      firstLoad: true,
      scrollOptions: { // 滚动条配置
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          background: '#c1c1c1',
          opacity: 1,
          size: '10px'
        },
        rail: {
          size: '10px'
        }
      }
    };
  },

  computed: {
    iwSize: function iwSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    iconClass: function iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up';
    }
  },
  watch: {
    value: function value() {
      this.initValue();
      this.initData();
      this.initStatus();
    },
    data: function data() {
      if (this.firstLoad) {
        this.initData();
        this.firstLoad = false;
      } else {
        this.initData(this.data, false);
      }
    },
    visible: function visible() {
      this.keyword = '';
      if (this.visible) {
        this.initValue();
        this.initData();
        this.initStatus();
      } else {
        this.$emit('close');
      }
    }
  },
  mounted: function mounted() {
    this.popover = this.isModal ? 'IwDialog' : 'IwPopover';
    this.referenceWidth = this.$el.offsetWidth;
    this.initValue();
    this.initData();
    this.initStatus();
  },

  methods: {
    initValue: function initValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
      var texts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.texts;
      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value !== null && value !== undefined && (value instanceof String || value instanceof Number)) {
        value = [value];
      }
      if (value instanceof Array) {
        this.selectValues = deepClone(value);
      }
      if (texts !== null && texts !== undefined && (texts instanceof String || texts instanceof Number)) {
        texts = [texts];
      }
      if (texts instanceof Array) {
        this.selectTexts = deepClone(texts);
        this.selectTextsTag = deepClone(texts);
        if (!reset) this.checkedOptions = deepClone(texts);
      } else {
        this.selectTexts = [];
        this.selectTextsTag = [];
        if (!reset) this.checkedOptions = [];
      }
    },
    initData: function initData() {
      var _this = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;
      var submit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.datas = getTree(data, {
        son: this.optionProps.children,
        key: this.optionProps.value,
        selected: this.selectTexts && this.selectTexts.length ? this.selectTexts : this.selectValues,
        keyword: (this.keyword || '').trim(),
        multiple: this.multiple,
        leaf: true,
        disabledSelect: this.disabledSelect || []
      });

      if (!this.multiple) {
        var selectTexts = arr2table(this.datas, this.optionProps.children, false).filter(function (item) {
          return item.selected === true;
        });
        if (selectTexts.length) {
          this.selectTexts = selectTexts;
          this.selectValues = selectTexts.map(function (item) {
            return item.key;
          });
        }
        // 把selectTexts的最后一个设置为已选项
        this.selectTextsTag = this.selectTexts.length === 0 ? [] : this.selectTexts.slice(-1);
      } else {
        // 取出数据源已选项selectTexts，重新赋值已选栏的selectTextsTag，实现原型链绑定
        var _selectTexts = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf).filter(function (item) {
          return item.selected === true;
        });
        _selectTexts.forEach(function (item) {
          var key = _this.optionProps.value;
          var value = _this.optionProps.label;
          var index = _this.selectTextsTag.findIndex(function (row) {
            return row[key] === item[key] && row[value] === item[value];
          });
          if (index > -1) {
            _this.$set(_this.selectTextsTag, index, item);
          } else {
            _this.selectTextsTag.push(item);
          }
        });
      }
      // 未设置属性texts值时，设置已选项
      if (submit) {
        this.checkedOptions = deepClone(this.selectTextsTag);
      }
      this.clientWidth = 15 * 2 + 128 + this.leafsPerColumn * 112 + 1 + 'px';
    },
    initStatus: function initStatus() {
      var _this2 = this;

      if (this.selectValues.length) {
        var key = this.multiple ? this.selectValues[0] : this.selectValues[1];
        this.$nextTick(function () {
          _this2.scrollTop(key, 'SUBMODEL');
        });
      }
    },

    /**
     * 重置
     * 1.重置已选项，有默认值重置为默认值，无默认值重置为初始值
     * 2.重置内容区选中项
     */
    reset: function reset() {
      this.keyword = '';
      this.initValue(this.defaultValue, this.defaultTexts, true);
      this.initData(this.data, false);
    },

    /**
     * 提交，触发回调
     */
    submit: function submit() {
      var _this3 = this;

      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // 验证
      if (this.require && this.selectTextsTag.length <= 0) {
        this.error = this.t('iw.common.placeholder');
        return;
      }
      if (this.multiple) {
        if (this.min && this.selectTextsTag.length < this.min) {
          this.error = '最少选择' + this.min + '项';
          return;
        }
        if (this.max && this.selectTextsTag.length > this.max) {
          this.error = '最多选择' + this.max + '项';
          return;
        }
      }
      this.keyword = '';
      this.error = '';
      this.checkedOptions = deepClone(this.selectTextsTag);
      this.$emit('change', this.checkedOptions.map(function (item) {
        return item[_this3.optionProps.value];
      }), this.checkedOptions);
      this.visible = visible;
    },

    /**
     * Table中选项的换行
     */
    chunk: function chunk() {
      return util_chunk.apply(undefined, arguments);
    },

    /**
     * 快速定位
     */
    handleTrackChange: function handleTrackChange(value) {
      this.scrollTop(value);
    },
    scrollTop: function scrollTop(key) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'KEY';
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this.selectedKey = key;
      var obj = document.querySelector('#iw-submodel__popover--' + this.id + ' [scroll-key="' + key + '_' + target + '"]');
      if (obj) {
        var scrollTop = parseInt(obj['offsetTop']);
        document.querySelector('#iw-submodel__popover--' + this.id + ' .iw-submodel__wrap').scrollTop = scrollTop;
      }
    },

    /**
     * 回调函数，过滤数据源
     */
    handleFilterChange: function handleFilterChange(value, key) {
      this.firstLoad = false;
      this.$emit('filterChange', value, key);
    },

    /**
     * 查询关键字，过滤数据源
     */
    handleSearchChange: function handleSearchChange(event) {
      var _this4 = this;

      this.lastSearch = event.timeStamp;
      setTimeout(function () {
        if (_this4.lastSearch === event.timeStamp) {
          _this4.initData(_this4.data, false);
        }
      }, 400);
    },

    /**
     * 删除已选项
     * 1.设置已选项selected=false，由原型链绑定实现去除内容区已选
     * 2.过滤已选项
     */
    handleTagClose: function handleTagClose(item) {
      item.selected = false;
      this.selectTextsTag = this.selectTextsTag.filter(function (child) {
        return child.selected;
      });
      this.selectTexts = this.selectTextsTag.filter(function (child) {
        return child.selected;
      });
      this.selectValues = this.selectTextsTag.map(function (child) {
        return child.key;
      });
    },

    /**
     * 单/复选方法，设置selected
     * 1.先设置子节点，后设置父节点
     */
    handleItemChange: function handleItemChange(item, selected) {
      var _this5 = this;

      var go = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      // if (!this.multiple && item.level !== 2) return
      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected;
        this.$set(item, 'selected', selected);
        if (this.selectOnLeaf) {
          // 子节点选择
          item[this.optionProps.children] && item[this.optionProps.children].forEach(function (row) {
            _this5.handleItemChange(row, selected, false);
          });
          // 父级节点选择
          if (go) {
            this.handleParentChange(item);
            this.handleMultipleChange(item);
          }
        }
      } else {
        if (this.selectTexts && this.selectTexts[item.level]) {
          this.$set(this.selectTexts[item.level], 'selected', false);
        }
        this.$set(item, 'selected', true);
        if (go) {
          this.selectValues = [];
          this.selectTexts = [];
        }
        this.selectValues.unshift(item[this.optionProps.value]);
        this.selectTexts.unshift(item);
        if (item.parent) {
          this.handleItemChange(item.parent, true, false);
        }
        this.selectTextsTag = this.selectTexts.length === 0 ? [] : this.selectTexts.slice(-1);
      }
    },

    /**
     * 复选方法，递归设置父级selected
     */
    handleParentChange: function handleParentChange(item) {
      if (item.parent) {
        var parent = findInArray('key', item.parent[this.optionProps.value], this.datas, this.optionProps.children, item.parent.level);
        if (parent) {
          parent.selected = parent.children.length === parent.children.filter(function (item) {
            return item.selected === true;
          }).length;
        }
        if (parent && parent.parent) {
          this.handleParentChange(parent);
        }
      }
    },

    /**
     * 复选方法，设置已选项selectTextsTag，避免不在数据源的已选项被误删
     * 1.添加时把数据源selected=true的项赋值到selectTextsTag
     * 2.删除时把selectTextsTag中对应的selected=false的项删除
     */
    handleMultipleChange: function handleMultipleChange(item) {
      var _this6 = this;

      var tableDatas = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf);
      var selectTexts = tableDatas.filter(function (item) {
        return item.selected;
      });
      var unselectTexts = tableDatas.filter(function (item) {
        return item.selected === false;
      });
      if (this.keyword === '') {
        this.selectTextsTag = selectTexts;
      } else {
        if (item.selected) {
          selectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag.findIndex(function (child, key) {
              return child.key === item.key && child.value === item.value;
            });
            if (index === -1) _this6.selectTextsTag.push(item);else _this6.selectTextsTag[index] = item;
          });
        } else {
          unselectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag.findIndex(function (child, key) {
              return child.key === item.key && child.value === item.value;
            });
            if (index !== -1) _this6.selectTextsTag.splice(index, 1);
          });
        }
      }
      this.selectTexts = deepClone(this.selectTextsTag);
      this.selectValues = this.selectTexts.map(function (item) {
        return item[_this6.optionProps.value];
      });
    },
    handleCheckAllChange: function handleCheckAllChange(data) {
      var _this7 = this;

      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var go = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (data instanceof Array) {
        data.forEach(function (item) {
          _this7.handleCheckAllChange(item, selected, false);
        });
      } else if (data instanceof Object) {
        this.$set(data, 'selected', selected);
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          this.handleCheckAllChange(children, selected, false);
        }
      }
      if (go && data[0]) {
        this.handleMultipleChange(data[0]);
      }
    },
    isCheckAllChecked: function isCheckAllChecked(data) {
      if (data instanceof Array) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (!this.isCheckAllChecked(item)) return false;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else if (data instanceof Object) {
        if (!data.selected) return false;
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          if (!this.isCheckAllChecked(children)) return false;
        }
      }
      return true;
    },
    isCheckAllIndeterminate: function isCheckAllIndeterminate(datas) {
      var count = this.datas.filter(function (group) {
        return group.selected === true;
      }).length;
      return this.datas.length !== count && count > 0;
    },

    /**
     * 是否已选
     */
    isItemChecked: function isItemChecked(data) {
      var _selected = data[this.optionProps.children].filter(function (item) {
        return item.selected === true;
      });
      var _children = data[this.optionProps.children];
      data.selected = _selected.length === _children.length;
      return data.selected;
    },

    /**
     * 是否半选
     */
    isItemIndeterminate: function isItemIndeterminate(data) {
      var _selected = data[this.optionProps.children].filter(function (item) {
        return item.selected === true;
      });
      var _children = data[this.optionProps.children];
      return _selected.length > 0 && _children.length > _selected.length;
    },
    substr: function substr(str, len) {
      return util_substr(str, len);
    }
  }
});
// CONCATENATED MODULE: ./packages/submodel/src/submodel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_submodelvue_type_script_lang_js_ = (submodelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/submodel/src/submodel.vue





/* normalize component */

var submodel_component = normalizeComponent(
  src_submodelvue_type_script_lang_js_,
  submodelvue_type_template_id_882d14f4_render,
  submodelvue_type_template_id_882d14f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var submodel_api; }
submodel_component.options.__file = "packages/submodel/src/submodel.vue"
/* harmony default export */ var submodel = (submodel_component.exports);
// CONCATENATED MODULE: ./packages/submodel/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/version/src/version.vue?vue&type=template&id=73f3853c&
var versionvue_type_template_id_73f3853c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "iw-popover",
    {
      attrs: {
        trigger: _vm.trigger,
        placement: _vm.placement,
        "append-to-body": _vm.appendToBody,
        "popper-class":
          "iw-version iw-version--" +
          _vm.iwSize +
          (_vm.disabled ? " iw-version--disabled" : ""),
        width: null
      },
      model: {
        value: _vm.visible,
        callback: function($$v) {
          _vm.visible = $$v
        },
        expression: "visible"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "iw-version-reference",
          attrs: { slot: "reference" },
          slot: "reference"
        },
        [
          _vm._t("reference", [
            _c(
              "div",
              {
                class: [
                  {
                    "is-focus": !_vm.disabled && _vm.visible,
                    "is-disabled": _vm.disabled
                  },
                  "iw-input",
                  "iw-input--" + _vm.iwSize
                ],
                style: _vm.referenceWidth
                  ? "width:" + _vm.referenceWidth + "px"
                  : ""
              },
              [
                _c("div", { staticClass: "iw-input__inner" }, [
                  _vm.triggerText
                    ? _c(
                        "span",
                        { staticClass: "iw-input__value" },
                        [_c("font", [_vm._v(_vm._s(_vm.triggerText))])],
                        1
                      )
                    : _vm.multiple &&
                      _vm.checkedOptions &&
                      _vm.checkedOptions.length > 0
                    ? _c("span", { staticClass: "iw-input__value" }, [
                        _vm.checkedOptions.length > 1
                          ? _c("input", {
                              style:
                                "width:" + (_vm.referenceWidth - 36) + "px",
                              attrs: {
                                disabled: _vm.disabled,
                                unselectable: "on",
                                readonly: ""
                              },
                              domProps: {
                                value:
                                  _vm.t("iw.common.selected") +
                                  "(" +
                                  _vm.checkedOptions.length +
                                  ")"
                              }
                            })
                          : _c("input", {
                              style:
                                "width:" + (_vm.referenceWidth - 36) + "px",
                              attrs: {
                                disabled: _vm.disabled,
                                unselectable: "on",
                                readonly: ""
                              },
                              domProps: {
                                value:
                                  _vm.checkedOptions[0][_vm.optionProps.label]
                              }
                            })
                      ])
                    : !_vm.multiple &&
                      _vm.checkedOptions &&
                      _vm.checkedOptions.length
                    ? _c("span", { staticClass: "iw-input__value" }, [
                        _c("input", {
                          style: "width:" + (_vm.referenceWidth - 36) + "px",
                          attrs: {
                            disabled: _vm.disabled,
                            unselectable: "on",
                            readonly: ""
                          },
                          domProps: {
                            value:
                              _vm.checkedOptions[_vm.checkedOptions.length - 1][
                                _vm.optionProps.label
                              ]
                          }
                        })
                      ])
                    : _c("span", { staticClass: "iw-input__value" }, [
                        _c("input", {
                          staticClass: "iw-input__placeholder",
                          style: "width:" + (_vm.referenceWidth - 36) + "px",
                          attrs: {
                            disabled: _vm.disabled,
                            unselectable: "on",
                            readonly: ""
                          },
                          domProps: {
                            value:
                              _vm.placeholder || _vm.t("iw.common.placeholder")
                          }
                        })
                      ]),
                  _c(
                    "span",
                    { staticClass: "iw-input__suffix" },
                    [
                      _vm._t("default", [
                        _c("i", {
                          class: ["iw-input__icon", "iw-icon-" + _vm.iconClass]
                        })
                      ])
                    ],
                    2
                  )
                ])
              ]
            )
          ])
        ],
        2
      ),
      !_vm.disabled
        ? _c(
            "div",
            {
              style: {
                minWidth: _vm.showModel ? "400px" : "270px",
                width: _vm.showModel ? "660px" : "530px"
              },
              attrs: { id: "iw-version__popover--" + _vm.id }
            },
            [
              _vm.title
                ? _c("div", { staticClass: "iw-version__title" }, [
                    _c("div", { staticClass: "iw-version__inner" }, [
                      _vm._v(_vm._s(_vm.title))
                    ]),
                    _vm.showSearch && _vm.data.length
                      ? _c(
                          "div",
                          {
                            staticClass: "iw-version__search",
                            class: "iw-version__search--" + _vm.iwSize
                          },
                          [
                            _c("iw-input", {
                              staticStyle: { width: "130px" },
                              attrs: {
                                size: _vm.iwSize,
                                placeholder: _vm.t("iw.common.search"),
                                "prefix-icon": "iw-icon-search"
                              },
                              on: { change: _vm.handleSearchChange },
                              nativeOn: {
                                keyup: function($event) {
                                  return _vm.handleSearchChange($event)
                                }
                              },
                              model: {
                                value: _vm.keyword,
                                callback: function($$v) {
                                  _vm.keyword = $$v
                                },
                                expression: "keyword"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm.error
                      ? _c("div", { staticClass: "iw-version__error" }, [
                          _vm._v(_vm._s(_vm.error))
                        ])
                      : _vm._e(),
                    _c(
                      "div",
                      {
                        staticClass: "iw-version__close",
                        on: {
                          click: function($event) {
                            _vm.visible = false
                          }
                        }
                      },
                      [_c("i", { staticClass: "iw-icon-close" })]
                    )
                  ])
                : _vm._e(),
              _c("div", { staticClass: "iw-version__body" }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "loading",
                        rawName: "v-loading",
                        value: _vm.loading,
                        expression: "loading"
                      }
                    ]
                  },
                  [
                    _vm.datas && _vm.datas.length
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "iw-version__body-header iw-version__wrap"
                            },
                            [
                              _c("div", { staticClass: "iw-version__group" }, [
                                _c(
                                  "div",
                                  { staticClass: "iw-version__group_table" },
                                  [
                                    _c("table", [
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: _vm.showModel,
                                                expression: "showModel"
                                              }
                                            ]
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.t("iw.version.submodel")
                                              )
                                            )
                                          ]
                                        ),
                                        _c("td", [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "iw-version__group_table"
                                            },
                                            [
                                              _c("table", [
                                                _c("tr", [
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.t(
                                                          "iw.version.version"
                                                        )
                                                      )
                                                    )
                                                  ]),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.t("iw.version.msrp")
                                                      )
                                                    )
                                                  ]),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.t("iw.version.hot")
                                                      )
                                                    )
                                                  ]),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.t(
                                                          "iw.version.dataSource"
                                                        )
                                                      )
                                                    )
                                                  ])
                                                ])
                                              ])
                                            ]
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                                )
                              ])
                            ]
                          ),
                          _c(
                            "iw-scrollbar",
                            {
                              ref: "scrollbarRight__KEY",
                              attrs: {
                                "wrap-style":
                                  "height:" + (_vm.height + 16) + "px;",
                                "wrap-class": "iw-version__wrap"
                              }
                            },
                            [
                              _c("div", { staticClass: "iw-version__group" }, [
                                _c(
                                  "div",
                                  { staticClass: "iw-version__group_table" },
                                  [
                                    _c(
                                      "table",
                                      _vm._l(_vm.datas, function(row) {
                                        return _c(
                                          "tr",
                                          { key: row[_vm.optionProps.value] },
                                          [
                                            _c(
                                              "td",
                                              {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: _vm.showModel,
                                                    expression: "showModel"
                                                  }
                                                ]
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "iw-version__group_item",
                                                    attrs: {
                                                      title:
                                                        row[
                                                          _vm.optionProps.label
                                                        ]
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.handleItemChange(
                                                          row
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("span", {
                                                      class: [
                                                        _vm.multiple
                                                          ? "iw-checkbox"
                                                          : "",
                                                        (_vm.multiple &&
                                                          (!_vm.selectOnLeaf &&
                                                            row.selected)) ||
                                                        (_vm.selectOnLeaf &&
                                                          _vm.isItemChecked(
                                                            row
                                                          ))
                                                          ? "iw-checkbox--checked"
                                                          : "",
                                                        _vm.multiple &&
                                                        (_vm.selectOnLeaf &&
                                                          _vm.isItemIndeterminate(
                                                            row
                                                          ))
                                                          ? "iw-checkbox--indeterminate"
                                                          : ""
                                                      ]
                                                    }),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "iw-text"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            row[
                                                              _vm.optionProps
                                                                .label
                                                            ]
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _c("td", [
                                              _c(
                                                "table",
                                                {},
                                                _vm._l(
                                                  row[_vm.optionProps.children],
                                                  function(item, key2) {
                                                    return _c(
                                                      "tr",
                                                      { key: key2 },
                                                      [
                                                        _c("td", [
                                                          _c(
                                                            "div",
                                                            {
                                                              class: [
                                                                "iw-version__group_item"
                                                              ],
                                                              attrs: {
                                                                title:
                                                                  item[
                                                                    _vm
                                                                      .optionProps
                                                                      .label
                                                                  ]
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.handleItemChange(
                                                                    item
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("span", {
                                                                class: [
                                                                  _vm.multiple
                                                                    ? "iw-checkbox"
                                                                    : "iw-radio",
                                                                  _vm.multiple &&
                                                                  item.selected
                                                                    ? "iw-checkbox--checked"
                                                                    : "",
                                                                  !_vm.multiple &&
                                                                  item.selected
                                                                    ? "iw-radio--checked"
                                                                    : ""
                                                                ]
                                                              }),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "iw-text"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                " +
                                                                      _vm._s(
                                                                        item[
                                                                          _vm
                                                                            .optionProps
                                                                            .label
                                                                        ]
                                                                      ) +
                                                                      "\n                              "
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toThousand"
                                                              )(item.msrp)
                                                            )
                                                          )
                                                        ]),
                                                        _c("td", [
                                                          _c("span", {
                                                            class: [
                                                              "iw-star",
                                                              "iw-star-" +
                                                                (
                                                                  item.heat + ""
                                                                ).replace(
                                                                  ".",
                                                                  "_"
                                                                )
                                                            ]
                                                          })
                                                        ]),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.dataSource
                                                            )
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            ])
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      : _c("iw-empty", {
                          staticStyle: { height: "160px" },
                          attrs: { status: _vm.status }
                        })
                  ],
                  2
                )
              ]),
              _vm.data.length
                ? _c(
                    "div",
                    { staticClass: "iw-version__footer" },
                    [
                      _vm.showCheckAll && _vm.multiple && _vm.datas.length
                        ? _c(
                            "span",
                            {
                              staticClass: "iw-version__footer-checkall",
                              on: {
                                click: function($event) {
                                  _vm.handleCheckAllChange(
                                    _vm.datas,
                                    !_vm.isCheckAllChecked(_vm.datas)
                                  )
                                }
                              }
                            },
                            [
                              _c("span", {
                                class: [
                                  "iw-checkbox",
                                  _vm.data.length &&
                                  _vm.isCheckAllChecked(_vm.datas)
                                    ? "iw-checkbox--checked"
                                    : "",
                                  _vm.data.length &&
                                  _vm.isCheckAllIndeterminate(_vm.datas)
                                    ? "iw-checkbox--indeterminate"
                                    : ""
                                ]
                              }),
                              _c("span", [
                                _vm._v(_vm._s(_vm.t("iw.common.checkAll")))
                              ])
                            ]
                          )
                        : _vm._e(),
                      _c(
                        "iw-button",
                        {
                          attrs: { size: _vm.iwSize },
                          on: {
                            click: function($event) {
                              _vm.reset()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(_vm.t("iw.common.reset")) +
                              "\n      "
                          )
                        ]
                      ),
                      _c(
                        "iw-button",
                        {
                          attrs: { size: _vm.iwSize, type: "primary" },
                          on: {
                            click: function($event) {
                              _vm.submit(false)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(_vm.t("iw.common.confirm")) +
                              "\n      "
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        : _vm._e()
    ]
  )
}
var versionvue_type_template_id_73f3853c_staticRenderFns = []
versionvue_type_template_id_73f3853c_render._withStripped = true


// CONCATENATED MODULE: ./packages/version/src/version.vue?vue&type=template&id=73f3853c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/version/src/version.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var versionvue_type_script_lang_js_ = ({
  name: 'IwVersion',
  mixins: [mixins_locale],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: [Array, String, Number],
      default: function _default() {
        return [];
      }
    },
    defaultValue: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    id: {
      type: Number,
      default: function _default() {
        return parseInt(Math.random() * 10000);
      }
    },
    title: {
      // 标题： 为空就不显示
      type: [Boolean, String],
      default: false
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showLetter: {
      // 是否需要快速字母选择器
      type: Boolean,
      default: true
    },
    showSearch: {
      // 显示搜索框
      type: Boolean,
      default: true
    },
    showModel: {
      // 显示车型列
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 320
    },
    showCheckAll: {
      // 当此项为 true 时，显示顶部全选功能
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    require: {
      // 当此项为 true 时，必须选择
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    min: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    max: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    optionProps: {
      type: Object,
      default: function _default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        };
      }
    },
    triggerText: {
      type: [String, Boolean],
      default: function _default() {
        return false;
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabledSelect: {
      tips: '禁止选择',
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * Popover的属性
     */
    trigger: {
      // 触发方式， 可选：hover/focus/click/contextmenu
      type: String,
      default: 'click'
    },
    placement: {
      // 气泡框位置， 可选：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      type: String,
      default: ''
    },
    appendToBody: {
      // 是否插入至body下, 默认true
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: medium || small || mini
    }
  },
  data: function data() {
    return {
      visible: false,
      referenceWidth: null,
      datas: [], // 数据源
      selectOnLeaf: true,
      checkedOptions: [], // 已选项(选择框显示)
      selectTextsTag: [], // 已选项(已选栏显示)
      selectValues: [], // 已选项的ID
      selectTexts: [], // 已选项(内部存储，单选存所有节点项，复选根据selectOnLeaf存所有节点项或叶子节点项)
      keyword: undefined, // 查询值
      selectedKey: undefined, // 快速定位(showLetter=true)
      selectedTrack: undefined, // 快速定位(showLetter=false)
      lastSearch: undefined,
      error: '', // 错误信息
      firstLoad: true,
      scrollOptions: { // 滚动条配置
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          background: '#c1c1c1',
          opacity: 1,
          size: '10px'
        },
        rail: {
          size: '10px'
        }
      }
    };
  },

  computed: {
    iwSize: function iwSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    iconClass: function iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up';
    }
  },
  watch: {
    value: function value() {
      this.initValue();
      this.initData();
      this.initStatus();
    },
    data: function data() {
      if (this.firstLoad) {
        this.initData();
        this.firstLoad = false;
      } else {
        this.initData(this.data, false);
      }
    },
    visible: function visible() {
      this.keyword = '';
      if (this.visible) {
        this.initValue();
        this.initData();
        this.initStatus();
      } else {
        this.$emit('close');
      }
    }
  },
  mounted: function mounted() {
    this.referenceWidth = this.$el.offsetWidth;
    this.initValue();
    this.initData();
    this.initStatus();
  },

  methods: {
    initValue: function initValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
      var texts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.texts;
      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value !== null && value !== undefined && (value instanceof String || value instanceof Number)) {
        value = [value];
      }
      if (value instanceof Array) {
        this.selectValues = deepClone(value);
      }
      if (texts !== null && texts !== undefined && (texts instanceof String || texts instanceof Number)) {
        texts = [texts];
      }
      if (texts instanceof Array) {
        this.selectTexts = deepClone(texts);
        this.selectTextsTag = deepClone(texts);
        if (!reset) this.checkedOptions = deepClone(texts);
      } else {
        this.selectTexts = [];
        this.selectTextsTag = [];
        if (!reset) this.checkedOptions = [];
      }
    },
    initData: function initData() {
      var _this = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;
      var submit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.datas = getTree(data, {
        son: this.optionProps.children,
        key: this.optionProps.value,
        selected: this.selectTexts && this.selectTexts.length ? this.selectTexts : this.selectValues,
        keyword: (this.keyword || '').trim(),
        multiple: this.multiple,
        leaf: true,
        disabledSelect: this.disabledSelect || []
      });

      if (!this.multiple) {
        var selectTexts = arr2table(this.datas, this.optionProps.children, false).filter(function (item) {
          return item.selected === true;
        });
        if (selectTexts.length) {
          this.selectTexts = selectTexts;
          this.selectValues = selectTexts.map(function (item) {
            return item.key;
          });
        }
        // 把selectTexts的最后一个设置为已选项
        this.selectTextsTag = this.selectTexts.length === 0 ? [] : this.selectTexts.slice(-1);
      } else {
        // 取出数据源已选项selectTexts，重新赋值已选栏的selectTextsTag，实现原型链绑定
        var _selectTexts = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf).filter(function (item) {
          return item.selected === true;
        });
        _selectTexts.forEach(function (item) {
          var key = _this.optionProps.value;
          var index = _this.selectTextsTag.findIndex(function (row) {
            return row[key] === item[key] && row['value'] === item['value'];
          });
          if (index > -1) {
            _this.$set(_this.selectTextsTag, index, item);
          } else {
            _this.selectTextsTag.push(item);
          }
        });
      }
      // 未设置属性texts值时，设置已选项
      if (submit) {
        this.checkedOptions = deepClone(this.selectTextsTag);
      }
    },
    initStatus: function initStatus() {
      var _this2 = this;

      if (this.selectValues.length) {
        var key = this.multiple ? this.selectValues[0] : this.selectValues[1];
        this.$nextTick(function () {
          _this2.scrollTop(key, 'SUBMODEL');
        });
      }
    },

    /**
     * 重置
     * 1.重置已选项，有默认值重置为默认值，无默认值重置为初始值
     * 2.重置内容区选中项
     */
    reset: function reset() {
      this.keyword = '';
      this.initValue(this.defaultValue, this.defaultTexts, true);
      this.initData(this.data, false);
    },

    /**
     * 提交，触发回调
     */
    submit: function submit() {
      var _this3 = this;

      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // 验证
      if (this.require && this.selectTextsTag.length <= 0) {
        this.error = this.t('iw.common.placeholder');
        return;
      }
      if (this.multiple) {
        if (this.min && this.selectTextsTag.length < this.min) {
          this.error = '最少选择' + this.min + '项';
          return;
        }
        if (this.max && this.selectTextsTag.length > this.max) {
          this.error = '最多选择' + this.max + '项';
          return;
        }
      }
      this.keyword = '';
      this.error = '';
      this.checkedOptions = deepClone(this.selectTextsTag);
      this.$emit('change', this.checkedOptions.map(function (item) {
        return item[_this3.optionProps.value];
      }), this.checkedOptions);
      this.visible = visible;
    },

    /**
     * Table中选项的换行
     */
    chunk: function chunk() {
      return util_chunk.apply(undefined, arguments);
    },

    /**
     * 快速定位
     */
    handleTrackChange: function handleTrackChange(value) {
      this.scrollTop(value);
    },
    scrollTop: function scrollTop(key) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'SUBMODEL';
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this.selectedKey = key;
      var obj = document.querySelector('#iw-version__popover--' + this.id + ' [scroll-key="' + key + '_' + target + '"]');
      if (obj) {
        var scrollTop = parseInt(obj['offsetTop']);
        document.querySelector('#iw-version__popover--' + this.id + ' .iw-version__wrap').scrollTop = scrollTop;
      }
    },

    /**
     * 回调函数，过滤数据源
     */
    handleFilterChange: function handleFilterChange(value, key) {
      this.firstLoad = false;
      this.$emit('filterChange', value, key);
    },

    /**
     * 查询关键字，过滤数据源
     */
    handleSearchChange: function handleSearchChange(event) {
      var _this4 = this;

      this.lastSearch = event.timeStamp;
      setTimeout(function () {
        if (_this4.lastSearch === event.timeStamp) {
          _this4.initData(_this4.data, false);
        }
      }, 400);
    },

    /**
     * 删除已选项
     * 1.设置已选项selected=false，由原型链绑定实现去除内容区已选
     * 2.过滤已选项
     */
    handleTagClose: function handleTagClose(item) {
      item.selected = false;
      this.selectTextsTag = this.selectTextsTag.filter(function (child) {
        return child.selected;
      });
      this.selectTexts = this.selectTextsTag.filter(function (child) {
        return child.selected;
      });
      this.selectValues = this.selectTextsTag.map(function (child) {
        return child.key;
      });
    },

    /**
     * 单/复选方法，设置selected
     * 1.先设置子节点，后设置父节点
     */
    handleItemChange: function handleItemChange(item, selected) {
      var _this5 = this;

      var go = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      // if (!this.multiple && item.level !== 2) return
      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected;
        this.$set(item, 'selected', selected);
        if (this.selectOnLeaf) {
          // 子节点选择
          item[this.optionProps.children] && item[this.optionProps.children].forEach(function (row) {
            _this5.handleItemChange(row, selected, false);
          });
          // 父级节点选择
          if (go) {
            this.handleParentChange(item);
            this.handleMultipleChange(item);
          }
        }
      } else {
        if (this.selectTexts && this.selectTexts[item.level]) {
          this.$set(this.selectTexts[item.level], 'selected', false);
        }
        this.$set(item, 'selected', true);
        if (go) {
          this.selectValues = [];
          this.selectTexts = [];
        }
        this.$set(this.selectValues, item.level, item[this.optionProps.value]);
        this.$set(this.selectTexts, item.level, item);
        if (item.parent) {
          this.handleItemChange(item.parent, true, false);
        }
        this.selectTextsTag = this.selectTexts.length === 0 ? [] : this.selectTexts.slice(-1);
      }
    },

    /**
     * 复选方法，递归设置父级selected
     */
    handleParentChange: function handleParentChange(item) {
      if (item.parent) {
        var parent = findInArray('key', item.parent[this.optionProps.value], this.datas, this.optionProps.children, item.parent.level);
        if (parent) {
          parent.selected = parent.children.length === parent.children.filter(function (item) {
            return item.selected === true;
          }).length;
        }
        if (parent && parent.parent) {
          this.handleParentChange(parent);
        }
      }
    },

    /**
     * 复选方法，设置已选项selectTextsTag，避免不在数据源的已选项被误删
     * 1.添加时把数据源selected=true的项赋值到selectTextsTag
     * 2.删除时把selectTextsTag中对应的selected=false的项删除
     */
    handleMultipleChange: function handleMultipleChange(item) {
      var _this6 = this;

      var tableDatas = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf);
      var selectTexts = tableDatas.filter(function (item) {
        return item.selected;
      });
      var unselectTexts = tableDatas.filter(function (item) {
        return item.selected === false;
      });
      if (this.keyword === '') {
        this.selectTextsTag = selectTexts;
      } else {
        if (item.selected) {
          selectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag.findIndex(function (child, key) {
              return child.key === item.key && child.value === item.value;
            });
            if (index === -1) _this6.selectTextsTag.push(item);else _this6.selectTextsTag[index] = item;
          });
        } else {
          unselectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag.findIndex(function (child, key) {
              return child.key === item.key && child.value === item.value;
            });
            if (index !== -1) _this6.selectTextsTag.splice(index, 1);
          });
        }
      }
      this.selectTexts = deepClone(this.selectTextsTag);
      this.selectValues = this.selectTexts.map(function (item) {
        return item[_this6.optionProps.value];
      });
    },
    handleCheckAllChange: function handleCheckAllChange(data) {
      var _this7 = this;

      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var go = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (data instanceof Array) {
        data.forEach(function (item) {
          _this7.handleCheckAllChange(item, selected, false);
        });
      } else if (data instanceof Object) {
        this.$set(data, 'selected', selected);
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          this.handleCheckAllChange(children, selected, false);
        }
      }
      if (go && data[0]) {
        this.handleMultipleChange(data[0]);
      }
    },
    isCheckAllChecked: function isCheckAllChecked(data) {
      if (data instanceof Array) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (!this.isCheckAllChecked(item)) return false;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else if (data instanceof Object) {
        if (!data.selected) return false;
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          if (!this.isCheckAllChecked(children)) return false;
        }
      }
      return true;
    },
    isCheckAllIndeterminate: function isCheckAllIndeterminate(datas) {
      var count = this.datas.filter(function (group) {
        return group.selected === true;
      }).length;
      return this.datas.length !== count && count > 0;
    },

    /**
     * 是否已选
     */
    isItemChecked: function isItemChecked(data) {
      var _selected = data[this.optionProps.children].filter(function (item) {
        return item.selected === true;
      });
      var _children = data[this.optionProps.children];
      data.selected = _selected.length === _children.length;
      return data.selected;
    },

    /**
     * 是否半选
     */
    isItemIndeterminate: function isItemIndeterminate(data) {
      var _selected = data[this.optionProps.children].filter(function (item) {
        return item.selected === true;
      });
      var _children = data[this.optionProps.children];
      return _selected.length > 0 && _children.length > _selected.length;
    },
    substr: function substr(str, len) {
      return util_substr(str, len);
    }
  }
});
// CONCATENATED MODULE: ./packages/version/src/version.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_versionvue_type_script_lang_js_ = (versionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/version/src/version.vue





/* normalize component */

var version_component = normalizeComponent(
  src_versionvue_type_script_lang_js_,
  versionvue_type_template_id_73f3853c_render,
  versionvue_type_template_id_73f3853c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var version_api; }
version_component.options.__file = "packages/version/src/version.vue"
/* harmony default export */ var version = (version_component.exports);
// CONCATENATED MODULE: ./packages/version/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/manfbrand/src/manfbrand.vue?vue&type=template&id=5a699768&
var manfbrandvue_type_template_id_5a699768_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { display: "inline-block" } },
    [
      _vm.popover === "IwDialog"
        ? _c(
            "div",
            {
              on: {
                click: function($event) {
                  _vm.visible = true
                }
              }
            },
            [
              _vm._t("reference", [
                _vm._v(
                  _vm._s(_vm.placeholder || _vm.t("iw.common.placeholder"))
                )
              ])
            ],
            2
          )
        : _vm._e(),
      _c(
        _vm.popover,
        {
          tag: "component",
          class:
            "iw-manfbrand iw-manfbrand--" +
            _vm.iwSize +
            (_vm.disabled ? " iw-manfbrand--disabled" : ""),
          attrs: {
            visible: _vm.visible,
            trigger: _vm.trigger,
            placement: _vm.placement,
            "append-to-body":
              _vm.popover === "IwPopover" ? _vm.appendToBody : true,
            "popper-class":
              "iw-manfbrand iw-manfbrand--" +
              _vm.iwSize +
              (_vm.disabled ? " iw-manfbrand--disabled" : ""),
            disabled: _vm.disabled,
            width: _vm.popover === "IwPopover" ? null : "820px",
            title: _vm.popover === "IwPopover" ? null : false
          },
          on: {
            "update:visible": function($event) {
              _vm.visible = $event
            }
          },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "iw-manfbrand-reference",
              attrs: { slot: "reference" },
              slot: "reference"
            },
            [
              _vm._t("reference", [
                _c(
                  "div",
                  {
                    class: [
                      {
                        "is-focus": !_vm.disabled && _vm.visible,
                        "is-disabled": _vm.disabled
                      },
                      "iw-input",
                      "iw-input--" + _vm.iwSize
                    ],
                    style: _vm.referenceWidth
                      ? "width:" + _vm.referenceWidth + "px"
                      : ""
                  },
                  [
                    _vm.popover === "IwPopover"
                      ? _c("div", { staticClass: "iw-input__inner" }, [
                          _vm.multiple &&
                          _vm.checkedOptions[_vm.checkedTab] &&
                          _vm.checkedOptions[_vm.checkedTab].length > 0
                            ? _c("span", { staticClass: "iw-input__value" }, [
                                _vm.checkedOptions[_vm.checkedTab].length > 1
                                  ? _c("input", {
                                      style:
                                        "width:" +
                                        (_vm.referenceWidth - 36) +
                                        "px",
                                      attrs: {
                                        disabled: _vm.disabled,
                                        unselectable: "on",
                                        readonly: ""
                                      },
                                      domProps: {
                                        value:
                                          _vm.t("iw.common.selected") +
                                          "(" +
                                          _vm.checkedOptions[_vm.checkedTab]
                                            .length +
                                          ")"
                                      }
                                    })
                                  : _c("input", {
                                      style:
                                        "width:" +
                                        (_vm.referenceWidth - 36) +
                                        "px",
                                      attrs: {
                                        disabled: _vm.disabled,
                                        unselectable: "on",
                                        readonly: ""
                                      },
                                      domProps: {
                                        value:
                                          _vm.checkedOptions[_vm.checkedTab][0][
                                            _vm.optionProps.label
                                          ]
                                      }
                                    })
                              ])
                            : !_vm.multiple &&
                              _vm.checkedOptions[_vm.checkedTab] &&
                              _vm.checkedOptions[_vm.checkedTab].length
                            ? _c("span", { staticClass: "iw-input__value" }, [
                                _c("input", {
                                  style:
                                    "width:" + (_vm.referenceWidth - 36) + "px",
                                  attrs: {
                                    disabled: _vm.disabled,
                                    unselectable: "on",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.checkedOptions[_vm.checkedTab][
                                        _vm.checkedOptions.length - 1
                                      ][_vm.optionProps.label]
                                  }
                                })
                              ])
                            : _c("span", { staticClass: "iw-input__value" }, [
                                _c("input", {
                                  staticClass: "iw-input__placeholder",
                                  style:
                                    "width:" + (_vm.referenceWidth - 36) + "px",
                                  attrs: {
                                    disabled: _vm.disabled,
                                    unselectable: "on",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.placeholder ||
                                      _vm.t("iw.common.placeholder")
                                  }
                                })
                              ]),
                          _c(
                            "span",
                            { staticClass: "iw-input__suffix" },
                            [
                              _vm._t("default", [
                                _c("i", {
                                  class: [
                                    "iw-input__icon",
                                    "iw-icon-" + _vm.iconClass
                                  ]
                                })
                              ])
                            ],
                            2
                          )
                        ])
                      : _vm._e()
                  ]
                )
              ])
            ],
            2
          ),
          !_vm.disabled
            ? _c(
                "div",
                {
                  style: { minWidth: "400px", width: "820px" },
                  attrs: { id: "iw-manfbrand__popover--" + _vm.id }
                },
                [
                  _vm.title || _vm.tabOptions.length
                    ? _c("div", { staticClass: "iw-manfbrand__title" }, [
                        _vm.tabOptions && _vm.tabOptions[_vm.selectedTab]
                          ? _c("div", { staticClass: "iw-manfbrand__inner" }, [
                              _vm._v(
                                _vm._s(_vm.tabOptions[_vm.selectedTab].value)
                              )
                            ])
                          : _vm._e(),
                        _vm.tabOptions &&
                        _vm.tabOptions.length &&
                        _vm.tabOptions.length > 1
                          ? _c(
                              "div",
                              { staticClass: "iw-manfbrand__filter" },
                              _vm._l(_vm.tabOptions, function(item, key) {
                                return _c(
                                  "span",
                                  {
                                    key: item.key,
                                    staticClass: "iw-manfbrand__filter-item",
                                    class: { on: item.key == _vm.selectedTab },
                                    on: {
                                      click: function($event) {
                                        _vm.handleTabChange(
                                          item[_vm.optionProps.value],
                                          key
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(item.value))]
                                )
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm.showSearch && _vm.data.length
                          ? _c(
                              "div",
                              {
                                staticClass: "iw-manfbrand__search",
                                class: "iw-manfbrand__search--" + _vm.iwSize
                              },
                              [
                                _c("iw-input", {
                                  staticStyle: { width: "120px" },
                                  attrs: {
                                    size: _vm.iwSize,
                                    placeholder: _vm.t("iw.common.search"),
                                    "prefix-icon": "iw-icon-search"
                                  },
                                  nativeOn: {
                                    keyup: function($event) {
                                      return _vm.handleSearchChange($event)
                                    }
                                  },
                                  model: {
                                    value: _vm.keyword,
                                    callback: function($$v) {
                                      _vm.keyword = $$v
                                    },
                                    expression: "keyword"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm.error
                          ? _c("div", { staticClass: "iw-manfbrand__error" }, [
                              _vm._v(_vm._s(_vm.error))
                            ])
                          : _vm._e(),
                        _c(
                          "div",
                          {
                            staticClass: "iw-manfbrand__close",
                            on: {
                              click: function($event) {
                                _vm.visible = false
                              }
                            }
                          },
                          [_c("i", { staticClass: "iw-icon-close" })]
                        )
                      ])
                    : _vm._e(),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.loading,
                          expression: "loading"
                        }
                      ],
                      staticClass: "iw-manfbrand__body"
                    },
                    [
                      _vm.data && _vm.data.length
                        ? [
                            _c(
                              "div",
                              { staticClass: "iw-manfbrand__track" },
                              [
                                _c(
                                  "div",
                                  {
                                    class:
                                      "iw-manfbrand__track--" +
                                      (_vm.showLetter ? "plain" : "select")
                                  },
                                  [
                                    _vm.showLetter === true
                                      ? _c(
                                          "div",
                                          _vm._l(_vm.datas, function(group) {
                                            return _c(
                                              "em",
                                              {
                                                key:
                                                  group[_vm.optionProps.value],
                                                class: {
                                                  on:
                                                    _vm.selectedKey ==
                                                    group[_vm.optionProps.value]
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.handleTrackChange(
                                                      group[
                                                        _vm.optionProps.value
                                                      ]
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    group[_vm.optionProps.label]
                                                  )
                                                )
                                              ]
                                            )
                                          }),
                                          0
                                        )
                                      : _vm.showLetter === false
                                      ? _c(
                                          "div",
                                          [
                                            _c("iw-select", {
                                              staticStyle: { width: "110px" },
                                              attrs: {
                                                data: _vm.datas,
                                                multiple: false,
                                                size: _vm.iwSize,
                                                placeholder: _vm.t(
                                                  "iw.manfbrand.quickppositioning"
                                                ),
                                                placement: "bottom-start"
                                              },
                                              on: {
                                                change: _vm.handleTrackChange
                                              },
                                              model: {
                                                value: _vm.selectedTrack,
                                                callback: function($$v) {
                                                  _vm.selectedTrack = $$v
                                                },
                                                expression: "selectedTrack"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ]
                                ),
                                _c(
                                  "div",
                                  { staticClass: "iw-manfbrand__track-filter" },
                                  [_vm._t("filters-select")],
                                  2
                                ),
                                _vm._t("desc")
                              ],
                              2
                            ),
                            _c(
                              "iw-scrollbar",
                              {
                                ref: "scrollbarRight__KEY",
                                attrs: {
                                  "wrap-style":
                                    "height:" + (_vm.height + 16) + "px;",
                                  "wrap-class": "iw-manfbrand__wrap"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "iw-manfbrand__group" },
                                  _vm._l(_vm.datas, function(group) {
                                    return _c(
                                      "ul",
                                      { key: group[_vm.optionProps.value] },
                                      [
                                        _c(
                                          "li",
                                          {
                                            staticClass:
                                              "iw-manfbrand__group_label",
                                            attrs: {
                                              "scroll-key":
                                                group[_vm.optionProps.value] +
                                                "_" +
                                                "KEY"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "iw-manfbrand__group_item",
                                                attrs: {
                                                  title:
                                                    group[_vm.optionProps.label]
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.handleItemChange(group)
                                                  }
                                                }
                                              },
                                              [
                                                _vm.showLetter === false
                                                  ? _c("span", {
                                                      class: [
                                                        _vm.multiple
                                                          ? "iw-checkbox"
                                                          : "",
                                                        _vm.multiple &&
                                                        group.selected
                                                          ? "iw-checkbox--checked"
                                                          : ""
                                                      ]
                                                    })
                                                  : _vm._e(),
                                                _c(
                                                  "span",
                                                  { staticClass: "iw-text" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        group[
                                                          _vm.optionProps.label
                                                        ]
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _c(
                                          "li",
                                          {
                                            staticClass:
                                              "iw-manfbrand__group_table"
                                          },
                                          [
                                            _c(
                                              "table",
                                              _vm._l(
                                                _vm.chunk(
                                                  group[
                                                    _vm.optionProps.children
                                                  ],
                                                  _vm.leafsPerColumn
                                                ),
                                                function(row, key) {
                                                  return _c(
                                                    "tr",
                                                    { key: key },
                                                    [
                                                      _vm._l(row, function(
                                                        item
                                                      ) {
                                                        return _c(
                                                          "td",
                                                          {
                                                            key:
                                                              key +
                                                              "_" +
                                                              item[
                                                                _vm.optionProps
                                                                  .value
                                                              ]
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                class: [
                                                                  "iw-manfbrand__group_item",
                                                                  "iw-manfbrand__group_item--" +
                                                                    _vm.leafsPerColumn
                                                                ],
                                                                attrs: {
                                                                  title:
                                                                    item[
                                                                      _vm
                                                                        .optionProps
                                                                        .label
                                                                    ]
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.handleItemChange(
                                                                      item
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _c("span", {
                                                                  class: [
                                                                    _vm.multiple
                                                                      ? "iw-checkbox"
                                                                      : "iw-radio",
                                                                    _vm.multiple &&
                                                                    item.selected
                                                                      ? "iw-checkbox--checked"
                                                                      : "",
                                                                    !_vm.multiple &&
                                                                    item.selected
                                                                      ? "iw-radio--checked"
                                                                      : ""
                                                                  ]
                                                                }),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "iw-text",
                                                                    class: {
                                                                      "font-orange":
                                                                        item.remark ==
                                                                        "进口"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                            " +
                                                                        _vm._s(
                                                                          item[
                                                                            _vm
                                                                              .optionProps
                                                                              .label
                                                                          ]
                                                                        ) +
                                                                        "\n                          "
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }),
                                                      _vm._l(
                                                        _vm.leafsPerColumn -
                                                          row.length,
                                                        function(item) {
                                                          return _c(
                                                            "td",
                                                            {
                                                              key:
                                                                key +
                                                                "__" +
                                                                item
                                                            },
                                                            [
                                                              _c("div", {
                                                                class: [
                                                                  "iw-manfbrand__group_item",
                                                                  "iw-manfbrand__group_item--" +
                                                                    _vm.leafsPerColumn
                                                                ]
                                                              })
                                                            ]
                                                          )
                                                        }
                                                      )
                                                    ],
                                                    2
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          ]
                        : _c("iw-empty", {
                            staticStyle: { height: "160px" },
                            attrs: { status: _vm.status }
                          })
                    ],
                    2
                  ),
                  _vm.data.length
                    ? _c(
                        "div",
                        { staticClass: "iw-manfbrand__footer" },
                        [
                          (_vm.showSelected || _vm.multiple) &&
                          _vm.selectTextsTag[_vm.selectedTab] &&
                          _vm.selectTextsTag[_vm.selectedTab].length
                            ? _c(
                                "span",
                                {
                                  staticClass: "iw-manfbrand__footer-selected"
                                },
                                [
                                  _c("label", [
                                    _vm._v(
                                      _vm._s(_vm.t("iw.common.selected")) + "："
                                    )
                                  ]),
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "iw-scrollbar",
                                        {
                                          attrs: {
                                            "wrap-class":
                                              "iw-manfbrand__footer-scroll iw-manfbrand__footer-scroll--" +
                                              _vm.iwSize
                                          }
                                        },
                                        _vm._l(
                                          _vm.selectTextsTag[_vm.selectedTab],
                                          function(item) {
                                            return _c(
                                              "iw-tag",
                                              {
                                                key:
                                                  item[_vm.optionProps.value],
                                                attrs: {
                                                  title:
                                                    item[_vm.optionProps.label],
                                                  size: _vm.iwSize,
                                                  type: "pink",
                                                  closable: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.handleTagClose(item)
                                                  },
                                                  close: function($event) {
                                                    _vm.handleTagClose(item)
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    item[_vm.optionProps.label]
                                                  )
                                                )
                                              ]
                                            )
                                          }
                                        ),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm.showCheckAll && _vm.multiple && _vm.datas.length
                            ? _c(
                                "span",
                                {
                                  staticClass: "iw-manfbrand__footer-checkall",
                                  on: {
                                    click: function($event) {
                                      _vm.handleCheckAllChange(
                                        _vm.datas,
                                        _vm.isCheckAllChecked(_vm.datas)
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("span", {
                                    class: [
                                      "iw-checkbox",
                                      _vm.data.length &&
                                      _vm.isCheckAllChecked(_vm.datas)
                                        ? "iw-checkbox--checked"
                                        : "",
                                      _vm.data.length &&
                                      _vm.isCheckAllIndeterminate(_vm.datas)
                                        ? "iw-checkbox--indeterminate"
                                        : ""
                                    ]
                                  }),
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.t("iw.common.checkAll")))
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize },
                              on: {
                                click: function($event) {
                                  _vm.reset()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.t("iw.common.reset")) +
                                  "\n        "
                              )
                            ]
                          ),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize, type: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.submit(false)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.t("iw.common.confirm")) +
                                  "\n        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var manfbrandvue_type_template_id_5a699768_staticRenderFns = []
manfbrandvue_type_template_id_5a699768_render._withStripped = true


// CONCATENATED MODULE: ./packages/manfbrand/src/manfbrand.vue?vue&type=template&id=5a699768&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/manfbrand/src/manfbrand.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var manfbrandvue_type_script_lang_js_ = ({
  name: 'IwManfbrand',
  mixins: [mixins_locale],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultValue: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    texts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultTexts: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    title: {
      // 标题： 为空就不显示
      type: [Boolean, String],
      default: false
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    leafsPerColumn: {
      type: Number,
      default: 7,
      validator: function validator(value) {
        return [5, 6, 7].includes(value);
      }
    },
    tabs: {
      type: [Array, Boolean],
      default: function _default() {
        return false;
      }
    },
    selectedTab: {
      type: [Number, String],
      default: function _default() {
        return 0;
      }
    },
    valueTab: {
      type: [Number, String],
      default: function _default() {
        return 0;
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showLetter: {
      // 是否需要快速字母选择器
      type: Boolean,
      default: true
    },
    showSearch: {
      // 显示搜索框
      type: Boolean,
      default: true
    },
    showSelected: {
      // 是否显示已选项
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [Number, String],
      default: 200
    },
    height: {
      type: [Number, String],
      default: 320
    },
    selectOnLeaf: {
      // 当此项为 false 时，每级节点均可选, true 时只有叶节点可选
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    showCheckAll: {
      // 当此项为 true 时，显示顶部全选功能
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    require: {
      // 当此项为 true 时，必须选择
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    min: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    max: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    optionProps: {
      type: Object,
      default: function _default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        };
      }
    },
    isModal: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabledSelect: {
      tips: '禁止选择',
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * Popover的属性
     */
    trigger: {
      // 触发方式， 可选：hover/focus/click/contextmenu
      type: String,
      default: 'click'
    },
    placement: {
      // 气泡框位置， 可选：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      type: String,
      default: ''
    },
    appendToBody: {
      // 是否插入至body下, 默认true
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: medium || small || mini
    }
  },
  data: function data() {
    return {
      visible: false,
      popover: 'IwPopover',
      referenceWidth: null,
      datas: [], // 数据源
      tabOptions: [],
      checkedOptions: [], // 已选项(选择框显示)
      checkedTab: this.valueTab,
      selectTextsTag: [], // 已选项(已选栏显示)
      selectValues: [], // 已选项的ID
      selectTexts: [], // 已选项(内部存储，单选存所有节点项，复选根据selectOnLeaf存所有节点项或叶子节点项)
      keyword: undefined, // 查询值
      selectedKey: undefined, // 快速定位(showLetter=true)
      selectedTrack: undefined, // 快速定位(showLetter=false)
      lastSearch: undefined,
      error: '', // 错误信息
      firstLoad: true,
      scrollOptions: { // 滚动条配置
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          background: '#c1c1c1',
          opacity: 1,
          size: '10px'
        },
        rail: {
          size: '10px'
        }
      }
    };
  },

  computed: {
    id: function id() {
      return parseInt(Math.random() * 10000);
    },
    iwSize: function iwSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    iconClass: function iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up';
    }
  },
  watch: {
    value: function value() {
      this.initValue();
      this.initData();
    },
    data: function data() {
      if (this.firstLoad) {
        this.initData();
        this.firstLoad = false;
      } else {
        this.initData(this.data, false);
      }
    },
    visible: function visible() {
      this.keyword = '';
      if (this.visible) {
        this.initValue();
        this.initData();
      } else {
        this.$emit('close');
        // this.scrollToTop()
      }
    }
  },
  mounted: function mounted() {
    this.popover = this.isModal ? 'IwDialog' : 'IwPopover';
    this.referenceWidth = this.$el.offsetWidth;
    if (!this.tabs) {
      this.tabOptions = [{ key: 0, value: this.title }];
    } else {
      this.tabOptions = deepClone(this.tabs);
    }
    this.initValue();
    this.initData();
  },

  methods: {
    initValue: function initValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

      var _this = this;

      var texts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.texts;
      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value instanceof Array) {
        this.selectValues = deepClone(value);
      }
      this.tabOptions.forEach(function (item, key) {
        value[key] = value[key] || [];
        if (texts[key] instanceof Array) {
          _this.selectTexts[key] = deepClone(texts[key]);
          _this.selectTextsTag[key] = deepClone(texts[key]);
          if (!reset && _this.selectedTab === _this.valueTab) _this.checkedOptions[key] = deepClone(texts[key]);
        } else {
          _this.selectTexts[key] = [];
          _this.selectTextsTag[key] = [];
          if (!reset && _this.selectedTab === _this.valueTab) _this.checkedOptions[key] = [];
        }
      });
    },
    initData: function initData() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;
      var submit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var selectedOptions = this.selectValues[this.selectedTab] || [];
      var selected = selectedOptions.length ? this.multiple ? selectedOptions : [selectedOptions[selectedOptions.length - 1]] : [];
      this.datas = getTree(data, {
        son: this.optionProps.children,
        key: this.optionProps.value,
        selected: selected,
        keyword: (this.keyword || '').trim(),
        multiple: this.multiple,
        leaf: true,
        disabledSelect: this.disabledSelect || []
      });

      if (!this.multiple) {
        var selectTexts = arr2table(this.datas, this.optionProps.children, false).filter(function (item) {
          return item.selected === true;
        });
        if (selectTexts.length) {
          this.selectTexts[this.selectedTab] = selectTexts;
          this.selectValues[this.selectedTab] = selectTexts.map(function (item) {
            return item.key;
          });
        }
        // 把selectTexts的最后一个设置为已选项
        this.selectTextsTag[this.selectedTab] = this.selectTexts[this.selectedTab].length === 0 ? [] : this.selectTexts[this.selectedTab].slice(-1);
      } else {
        // 取出数据源已选项selectTexts，重新赋值已选栏的selectTextsTag，实现原型链绑定
        var _selectTexts = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf).filter(function (item) {
          return item.selected === true;
        });
        _selectTexts.forEach(function (item) {
          var key = _this2.optionProps.value;
          var index = _this2.selectTextsTag[_this2.selectedTab].findIndex(function (row) {
            return row[key] === item[key];
          });
          if (index > -1) {
            _this2.$set(_this2.selectTextsTag[_this2.selectedTab], index, item);
          } else {
            _this2.selectTextsTag[_this2.selectedTab].push(item);
          }
        });
      }
      // 未设置属性texts值时，设置已选项
      if (submit && this.selectedTab === this.valueTab) {
        this.checkedTab = this.selectedTab;
        this.checkedOptions = deepClone(this.selectTextsTag);
      }
    },

    /**
     * 重置
     * 1.重置已选项，有默认值重置为默认值，无默认值重置为初始值
     * 2.重置内容区选中项
     */
    reset: function reset() {
      this.keyword = '';
      this.initValue(this.defaultValue, this.defaultTexts, true);
      this.initData(this.data, false);
    },

    /**
     * 提交，触发回调
     */
    submit: function submit() {
      var _this3 = this;

      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // 验证
      if (this.require && this.selectTextsTag[this.selectedTab].length <= 0) {
        this.error = this.t('iw.common.placeholder');
        return;
      }
      if (this.multiple) {
        if (this.selectTextsTag[this.selectedTab] && this.min && this.selectTextsTag[this.selectedTab].length < this.min) {
          this.error = this.t('iw.common.atLeast', { count: this.min });
          return;
        }
        if (this.selectTextsTag[this.selectedTab] && this.max && this.selectTextsTag[this.selectedTab].length > this.max) {
          this.error = this.t('iw.common.atMost', { count: this.max });
          return;
        }
      }
      this.keyword = '';
      this.error = '';
      if (this.multiple) {
        this.checkedOptions = this.selectTextsTag.every(function (item) {
          return item.length === 0;
        }) ? [] : deepClone(this.selectTextsTag);
      } else {
        if (this.selectTextsTag.length === 0) {
          this.checkedOptions = [];
        } else {
          this.checkedOptions = deepClone(this.selectTextsTag);
        }
      }
      this.checkedTab = this.selectedTab;
      this.$emit('change', this.checkedOptions.map(function (group) {
        return group.map(function (item) {
          return item[_this3.optionProps.value];
        });
      }), this.checkedOptions);
      this.visible = visible;
    },

    /**
     * Table中选项的换行
     */
    chunk: function chunk() {
      return util_chunk.apply(undefined, arguments);
    },

    /**
     * 快速定位
     */
    handleTrackChange: function handleTrackChange(value) {
      this.selectLetter(value);
    },
    selectLetter: function selectLetter(key) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'KEY';
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this.selectedKey = key;
      var obj = document.querySelector('#iw-manfbrand__popover--' + this.id + ' [scroll-key="' + key + '_' + target + '"]');
      if (obj) {
        var scrollTop = parseInt(obj['offsetTop']);
        document.querySelector('#iw-manfbrand__popover--' + this.id + ' .iw-manfbrand__wrap').scrollTop = scrollTop;
      }
    },
    scrollToTop: function scrollToTop() {
      this.selectedKey = undefined;
      document.querySelector('#iw-manfbrand__popover--' + this.id + ' .iw-manfbrand__wrap').scrollTop = 0;
    },

    /**
     * 回调函数，过滤数据源
     */
    handleTabChange: function handleTabChange(value, key) {
      this.firstLoad = false;
      this.$emit('tabChange', value, key);
    },

    /**
     * 查询关键字，过滤数据源
     */
    handleSearchChange: function handleSearchChange(event) {
      var _this4 = this;

      this.lastSearch = event.timeStamp;
      setTimeout(function () {
        if (_this4.lastSearch === event.timeStamp) {
          _this4.initData(_this4.data, false);
        }
      }, 400);
    },

    /**
     * 删除已选项
     * 1.设置已选项selected=false，由原型链绑定实现去除内容区已选
     * 2.过滤已选项
     */
    handleTagClose: function handleTagClose(item) {
      item.selected = false;
      this.selectTextsTag[this.selectedTab] = this.selectTextsTag[this.selectedTab].filter(function (child) {
        return child.selected;
      });
      this.selectTexts[this.selectedTab] = this.selectTextsTag[this.selectedTab].filter(function (child) {
        return child.selected;
      });
      this.selectValues[this.selectedTab] = this.selectTextsTag[this.selectedTab].map(function (child) {
        return child.key;
      });
    },

    /**
     * 单/复选方法，设置selected
     * 1.先设置子节点，后设置父节点
     */
    handleItemChange: function handleItemChange(item, selected) {
      var _this5 = this;

      var up = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected;
        this.$set(item, 'selected', selected);
        if (this.selectOnLeaf) {
          // 子节点选择
          item[this.optionProps.children] && item[this.optionProps.children].forEach(function (row) {
            _this5.handleItemChange(row, selected, false);
          });
          // 父级节点选择
          if (up) {
            this.handleParentChange(item);
            this.handleMultipleChange(item);
          }
        }
      } else {
        if (this.selectTexts[this.selectedTab] && this.selectTexts[this.selectedTab][item.level]) {
          this.$set(this.selectTexts[this.selectedTab][item.level], 'selected', false);
        }
        this.$set(item, 'selected', true);
        this.$set(this.selectValues[this.selectedTab], item.level, item[this.optionProps.value]);
        this.$set(this.selectTexts[this.selectedTab], item.level, item);
        this.selectTextsTag[this.selectedTab] = this.selectTexts[this.selectedTab].length === 0 ? [] : this.selectTexts[this.selectedTab].slice(-1);
      }
    },

    /**
     * 复选方法，递归设置父级selected
     */
    handleParentChange: function handleParentChange(item) {
      if (item.parent) {
        var parent = findInArray('key', item.parent[this.optionProps.value], this.datas, this.optionProps.children, item.parent.level);
        if (parent) {
          parent.selected = parent.children.length === parent.children.filter(function (item) {
            return item.selected === true;
          }).length;
        }
        if (parent && parent.parent) {
          this.handleParentChange(parent);
        }
      }
    },

    /**
     * 复选方法，设置已选项selectTextsTag，避免不在数据源的已选项被误删
     * 1.添加时把数据源selected=true的项赋值到selectTextsTag
     * 2.删除时把selectTextsTag中对应的selected=false的项删除
     */
    handleMultipleChange: function handleMultipleChange(item) {
      var _this6 = this;

      var tableDatas = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf);
      var selectTexts = tableDatas.filter(function (item) {
        return item.selected;
      });
      var unselectTexts = tableDatas.filter(function (item) {
        return item.selected === false;
      });
      if (this.keyword === '') {
        this.selectTextsTag[this.selectedTab] = selectTexts;
      } else {
        if (item.selected) {
          selectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag[_this6.selectedTab].findIndex(function (child, key) {
              return child.key === item.key;
            });
            if (index === -1) _this6.selectTextsTag[_this6.selectedTab].push(item);else _this6.selectTextsTag[_this6.selectedTab][index] = item;
          });
        } else {
          unselectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag[_this6.selectedTab].findIndex(function (child, key) {
              return child.key === item.key;
            });
            if (index !== -1) _this6.selectTextsTag[_this6.selectedTab].splice(index, 1);
          });
        }
      }
      this.selectTexts = deepClone(this.selectTextsTag);
      this.selectValues[this.selectedTab] = this.selectTexts[this.selectedTab].map(function (item) {
        return item[_this6.optionProps.value];
      });
    },
    handleCheckAllChange: function handleCheckAllChange(datas) {
      var _this7 = this;

      var checked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      datas.forEach(function (group, key) {
        _this7.handleItemChange(group, !checked, true);
      });
    },
    isCheckAllChecked: function isCheckAllChecked(datas) {
      return this.datas.every(function (group) {
        return group.selected === true;
      });
    },
    isCheckAllIndeterminate: function isCheckAllIndeterminate(datas) {
      var count = this.datas.filter(function (group) {
        return group.selected === true;
      }).length;
      return this.datas.length !== count && count > 0;
    },
    substr: function substr(str, len) {
      return util_substr(str, len);
    }
  }
});
// CONCATENATED MODULE: ./packages/manfbrand/src/manfbrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_manfbrandvue_type_script_lang_js_ = (manfbrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/manfbrand/src/manfbrand.vue





/* normalize component */

var manfbrand_component = normalizeComponent(
  src_manfbrandvue_type_script_lang_js_,
  manfbrandvue_type_template_id_5a699768_render,
  manfbrandvue_type_template_id_5a699768_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var manfbrand_api; }
manfbrand_component.options.__file = "packages/manfbrand/src/manfbrand.vue"
/* harmony default export */ var manfbrand = (manfbrand_component.exports);
// CONCATENATED MODULE: ./packages/manfbrand/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader/src/cascader.vue?vue&type=template&id=032537a6&
var cascadervue_type_template_id_032537a6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { display: "inline-block" } },
    [
      _vm.popover === "IwDialog"
        ? _c(
            "div",
            {
              on: {
                click: function($event) {
                  _vm.visible = true
                }
              }
            },
            [
              _vm._t("reference", [
                _vm._v(
                  _vm._s(_vm.placeholder || _vm.t("iw.common.placeholder"))
                )
              ])
            ],
            2
          )
        : _vm._e(),
      _c(
        _vm.popover,
        {
          tag: "component",
          class:
            _vm.popover !== "IwPopover"
              ? "iw-cascader iw-cascader--" +
                _vm.iwSize +
                (_vm.disabled ? " iw-cascader--disabled" : "")
              : "",
          attrs: {
            visible: _vm.visible,
            trigger: _vm.trigger,
            placement: _vm.placement,
            "append-to-body":
              _vm.popover === "IwPopover" ? _vm.appendToBody : true,
            "popper-class":
              _vm.popover === "IwPopover"
                ? "iw-cascader iw-cascader--" +
                  _vm.iwSize +
                  (_vm.disabled ? " iw-cascader--disabled" : "")
                : "",
            disabled: _vm.disabled,
            width:
              _vm.popover === "IwPopover" ? null : _vm.deep * _vm.width + "px",
            title: _vm.popover === "IwPopover" ? null : false
          },
          on: {
            "update:visible": function($event) {
              _vm.visible = $event
            }
          },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "iw-cascader-reference",
              attrs: { slot: "reference" },
              slot: "reference"
            },
            [
              _vm._t("reference", [
                _c(
                  "div",
                  {
                    class: [
                      {
                        "is-focus": !_vm.disabled && _vm.visible,
                        "is-disabled": _vm.disabled
                      },
                      "iw-input",
                      "iw-input--" + _vm.iwSize
                    ],
                    style: _vm.referenceWidth
                      ? "width:" + _vm.referenceWidth + "px"
                      : ""
                  },
                  [
                    _vm.popover === "IwPopover"
                      ? _c("div", { staticClass: "iw-input__inner" }, [
                          _vm.multiple &&
                          _vm.checkedOptions &&
                          _vm.checkedOptions.length > 0
                            ? _c("span", { staticClass: "iw-input__value" }, [
                                _vm.checkedOptions.length > 1
                                  ? _c("input", {
                                      style:
                                        "width:" +
                                        (_vm.referenceWidth - 36) +
                                        "px",
                                      attrs: {
                                        disabled: _vm.disabled,
                                        unselectable: "on",
                                        readonly: ""
                                      },
                                      domProps: {
                                        value:
                                          _vm.t("iw.common.selected") +
                                          "(" +
                                          _vm.checkedOptions.length +
                                          ")"
                                      }
                                    })
                                  : _c("input", {
                                      style:
                                        "width:" +
                                        (_vm.referenceWidth - 36) +
                                        "px",
                                      attrs: {
                                        disabled: _vm.disabled,
                                        unselectable: "on",
                                        readonly: ""
                                      },
                                      domProps: {
                                        value:
                                          _vm.checkedOptions[0][
                                            _vm.optionProps.label
                                          ]
                                      }
                                    })
                              ])
                            : !_vm.multiple &&
                              _vm.checkedOptions &&
                              _vm.checkedOptions.length
                            ? _c("span", { staticClass: "iw-input__value" }, [
                                _c("input", {
                                  style:
                                    "width:" + (_vm.referenceWidth - 36) + "px",
                                  attrs: {
                                    disabled: _vm.disabled,
                                    unselectable: "on",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.checkedOptions[
                                        _vm.checkedOptions.length - 1
                                      ][_vm.optionProps.label]
                                  }
                                })
                              ])
                            : _c("span", { staticClass: "iw-input__value" }, [
                                _c("input", {
                                  staticClass: "iw-input__placeholder",
                                  style:
                                    "width:" + (_vm.referenceWidth - 36) + "px",
                                  attrs: {
                                    disabled: _vm.disabled,
                                    unselectable: "on",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.placeholder ||
                                      _vm.t("iw.common.placeholder")
                                  }
                                })
                              ]),
                          _c(
                            "span",
                            { staticClass: "iw-input__suffix" },
                            [
                              _vm._t("default", [
                                _c("i", {
                                  class: [
                                    "iw-input__icon",
                                    "iw-icon-" + _vm.iconClass
                                  ]
                                })
                              ])
                            ],
                            2
                          )
                        ])
                      : _vm._e()
                  ]
                )
              ])
            ],
            2
          ),
          !_vm.disabled
            ? _c(
                "div",
                {
                  style: {
                    width: _vm.deep * _vm.width + "px",
                    minWidth: (_vm.deep * 100 || 400) + "px"
                  },
                  attrs: { id: "iw-cascader__popover--" + _vm.id }
                },
                [
                  _vm.title
                    ? _c("div", { staticClass: "iw-cascader__title" }, [
                        _vm.title
                          ? _c("div", { staticClass: "iw-cascader__inner" }, [
                              _vm._v(_vm._s(_vm.title))
                            ])
                          : _vm._e(),
                        _vm.showSearch && _vm.data.length
                          ? _c(
                              "div",
                              {
                                staticClass: "iw-cascader__search",
                                class: "iw-cascader__search--" + _vm.iwSize
                              },
                              [
                                _c("iw-input", {
                                  staticStyle: { width: "120px" },
                                  attrs: {
                                    size: _vm.iwSize,
                                    placeholder: _vm.t("iw.common.search"),
                                    "prefix-icon": "iw-icon-search"
                                  },
                                  nativeOn: {
                                    keyup: function($event) {
                                      return _vm.handleSearchChange($event)
                                    }
                                  },
                                  model: {
                                    value: _vm.keyword,
                                    callback: function($$v) {
                                      _vm.keyword = $$v
                                    },
                                    expression: "keyword"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm.error
                          ? _c("div", { staticClass: "iw-cascader__error" }, [
                              _vm._v(_vm._s(_vm.error))
                            ])
                          : _vm._e(),
                        _c(
                          "div",
                          {
                            staticClass: "iw-cascader__close",
                            on: {
                              click: function($event) {
                                _vm.visible = false
                              }
                            }
                          },
                          [_c("i", { staticClass: "iw-icon-close" })]
                        )
                      ])
                    : _vm._e(),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.loading,
                          expression: "loading"
                        }
                      ],
                      staticClass: "iw-cascader__body"
                    },
                    [
                      _vm._t("filters-select"),
                      _vm.data && _vm.data.length
                        ? _c(
                            "div",
                            _vm._l(_vm.deep, function(group, index) {
                              return _c(
                                "div",
                                {
                                  key: index,
                                  staticClass: "iw-cascader__group",
                                  style: { width: _vm.width + "px" },
                                  attrs: { id: "iw-cascader__group--" + index }
                                },
                                [
                                  _vm.multiple &&
                                  _vm.listData[index] &&
                                  _vm.listData[index].length
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "iw-cascader__group-title",
                                          on: {
                                            click: function($event) {
                                              _vm.handleCheckColumnChange(
                                                _vm.listData[index] || [],
                                                _vm.isCheckColumnChecked(
                                                  _vm.listData[index] || []
                                                )
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("span", {
                                            class: [
                                              _vm.multiple
                                                ? "iw-checkbox"
                                                : "iw-radio",
                                              _vm.multiple &&
                                              (_vm.listData[index].length &&
                                                _vm.isCheckColumnChecked(
                                                  _vm.listData[index]
                                                ))
                                                ? "iw-checkbox--checked"
                                                : "",
                                              _vm.multiple &&
                                              (_vm.listData[index].length &&
                                                _vm.isCheckColumnIndeterminate(
                                                  _vm.listData[index]
                                                ))
                                                ? "iw-checkbox--indeterminate"
                                                : ""
                                            ]
                                          }),
                                          _c(
                                            "span",
                                            { staticClass: "iw-text" },
                                            [
                                              _c("em", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.columnName[index]
                                                  ) +
                                                    "(" +
                                                    _vm._s(
                                                      _vm.t(
                                                        "iw.common.checkColumnAll"
                                                      )
                                                    ) +
                                                    ")"
                                                )
                                              ])
                                            ]
                                          )
                                        ]
                                      )
                                    : _c(
                                        "div",
                                        {
                                          staticClass:
                                            "iw-cascader__group-title"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.columnName[index] || " ")
                                          )
                                        ]
                                      ),
                                  _c(
                                    "iw-scrollbar",
                                    {
                                      ref: "scrollbarRight__KEY",
                                      refInFor: true,
                                      attrs: {
                                        "wrap-style":
                                          "height:" + (_vm.height + 16) + "px;",
                                        "wrap-class": "iw-cascader__wrap"
                                      }
                                    },
                                    [
                                      _c("div", [
                                        _vm.listData[index] &&
                                        _vm.listData[index].length
                                          ? _c(
                                              "ul",
                                              _vm._l(
                                                _vm.listData[index],
                                                function(row) {
                                                  return _c(
                                                    "li",
                                                    {
                                                      key: row.key,
                                                      staticClass:
                                                        "iw-cascader__item",
                                                      class: {
                                                        on:
                                                          _vm.activeItemKey[
                                                            index
                                                          ] !== undefined &&
                                                          row.key ===
                                                            _vm.activeItemKey[
                                                              index
                                                            ] &&
                                                          row.children,
                                                        "has-checkbox":
                                                          row.children
                                                      },
                                                      attrs: {
                                                        "scroll-key":
                                                          row.key + "_" + index
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.handleSelectChange(
                                                            row
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      row.children &&
                                                      row.children.length
                                                        ? [
                                                            _c("span", {
                                                              class: [
                                                                _vm.multiple
                                                                  ? "iw-checkbox"
                                                                  : "",
                                                                _vm.multiple &&
                                                                (_vm.selectOnLeaf &&
                                                                  _vm.isItemIndeterminate(
                                                                    row
                                                                  ))
                                                                  ? "iw-checkbox--indeterminate"
                                                                  : "",
                                                                _vm.multiple &&
                                                                ((!_vm.selectOnLeaf &&
                                                                  row.selected) ||
                                                                  (_vm.selectOnLeaf &&
                                                                    _vm.isItemChecked(
                                                                      row
                                                                    )))
                                                                  ? "iw-checkbox--checked"
                                                                  : "",
                                                                !_vm.multiple &&
                                                                !_vm.selectOnLeaf
                                                                  ? "iw-radio"
                                                                  : "",
                                                                !_vm.multiple &&
                                                                !_vm.selectOnLeaf &&
                                                                row.selected
                                                                  ? "iw-radio--checked"
                                                                  : ""
                                                              ],
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.handleItemChange(
                                                                    row
                                                                  )
                                                                }
                                                              }
                                                            }),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "iw-text"
                                                              },
                                                              [
                                                                _c(
                                                                  "em",
                                                                  {
                                                                    style: {
                                                                      color: row.disabled
                                                                        ? "#c0c4cc"
                                                                        : ""
                                                                    },
                                                                    attrs: {
                                                                      title:
                                                                        row.value
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        row[
                                                                          _vm
                                                                            .optionProps
                                                                            .label
                                                                        ]
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _c("i", {
                                                                  staticClass:
                                                                    "iw-cascader__item-icon iw-icon-arrow-right"
                                                                })
                                                              ]
                                                            )
                                                          ]
                                                        : [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "iw-text",
                                                                attrs: {
                                                                  title:
                                                                    row[
                                                                      _vm
                                                                        .optionProps
                                                                        .label
                                                                    ]
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.handleItemChange(
                                                                      row
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _c("span", {
                                                                  class: [
                                                                    _vm.multiple
                                                                      ? "iw-checkbox"
                                                                      : "iw-radio",
                                                                    _vm.multiple &&
                                                                    row.selected
                                                                      ? "iw-checkbox--checked"
                                                                      : "",
                                                                    !_vm.multiple &&
                                                                    row.selected
                                                                      ? "iw-radio--checked"
                                                                      : ""
                                                                  ]
                                                                }),
                                                                _c(
                                                                  "em",
                                                                  {
                                                                    class: {
                                                                      "font-orange":
                                                                        row.remark ==
                                                                        "进口"
                                                                    },
                                                                    style: {
                                                                      color: row.disabled
                                                                        ? "#c0c4cc"
                                                                        : ""
                                                                    },
                                                                    attrs: {
                                                                      title:
                                                                        row.value
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                          " +
                                                                        _vm._s(
                                                                          row[
                                                                            _vm
                                                                              .optionProps
                                                                              .label
                                                                          ]
                                                                        )
                                                                    ),
                                                                    _c(
                                                                      "abbr",
                                                                      {
                                                                        staticClass:
                                                                          "font-gray"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            row.date
                                                                              ? "(" +
                                                                                  row.date +
                                                                                  ")"
                                                                              : ""
                                                                          )
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _c("i", {
                                                                  staticClass:
                                                                    "iw-cascader__item-icon"
                                                                })
                                                              ]
                                                            )
                                                          ]
                                                    ],
                                                    2
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          : _vm._e()
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            }),
                            0
                          )
                        : _c("iw-empty", {
                            staticStyle: { height: "160px" },
                            attrs: { status: _vm.status }
                          })
                    ],
                    2
                  ),
                  _vm.datas.length
                    ? _c(
                        "div",
                        { staticClass: "iw-cascader__footer" },
                        [
                          (_vm.showSelected || _vm.multiple) &&
                          _vm.selectTextsTag &&
                          _vm.selectTextsTag.length
                            ? _c(
                                "span",
                                { staticClass: "iw-cascader__footer-selected" },
                                [
                                  _c("label", [
                                    _vm._v(
                                      _vm._s(_vm.t("iw.common.selected")) + "："
                                    )
                                  ]),
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "iw-scrollbar",
                                        {
                                          attrs: {
                                            "wrap-class":
                                              "iw-cascader__footer-scroll iw-cascader__footer-scroll--" +
                                              _vm.iwSize
                                          }
                                        },
                                        _vm._l(_vm.selectTextsTag, function(
                                          item
                                        ) {
                                          return _c(
                                            "iw-tag",
                                            {
                                              key:
                                                item[_vm.optionProps.value] +
                                                "_" +
                                                item["level"],
                                              attrs: {
                                                title:
                                                  item[_vm.optionProps.label],
                                                size: _vm.iwSize,
                                                type: "pink",
                                                closable: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.handleTagClose(item)
                                                },
                                                close: function($event) {
                                                  _vm.handleTagClose(item)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  item[_vm.optionProps.label]
                                                )
                                              )
                                            ]
                                          )
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm.showCheckAll && _vm.multiple && _vm.datas.length
                            ? _c(
                                "span",
                                {
                                  staticClass: "iw-cascader__footer-checkall",
                                  on: {
                                    click: function($event) {
                                      _vm.handleCheckAllChange(
                                        _vm.datas,
                                        !_vm.isCheckAllChecked(_vm.datas)
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("span", {
                                    class: [
                                      "iw-checkbox",
                                      _vm.data.length &&
                                      _vm.isCheckAllChecked(_vm.datas)
                                        ? "iw-checkbox--checked"
                                        : "",
                                      _vm.data.length &&
                                      _vm.isCheckAllIndeterminate(_vm.datas)
                                        ? "iw-checkbox--indeterminate"
                                        : ""
                                    ]
                                  }),
                                  _c("span", { staticClass: "iw-text" }, [
                                    _vm._v(_vm._s(_vm.t("iw.common.checkAll")))
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize },
                              on: {
                                click: function($event) {
                                  _vm.reset()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.t("iw.common.reset")) +
                                  "\n        "
                              )
                            ]
                          ),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize, type: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.submit(false)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.t("iw.common.confirm")) +
                                  "\n        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var cascadervue_type_template_id_032537a6_staticRenderFns = []
cascadervue_type_template_id_032537a6_render._withStripped = true


// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue?vue&type=template&id=032537a6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader/src/cascader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var cascadervue_type_script_lang_js_ = ({
  name: 'IwCascader',
  mixins: [mixins_locale],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: [Array, String, Number],
      default: function _default() {
        return [];
      }
    },
    defaultValue: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    texts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultTexts: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    id: {
      type: Number,
      default: function _default() {
        return parseInt(Math.random() * 10000);
      }
    },
    title: {
      // 标题： 为空就不显示
      type: [Boolean, String],
      default: false
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    columnName: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showLetter: {
      // 是否需要快速字母选择器
      type: Boolean,
      default: true
    },
    showSearch: {
      // 显示搜索框
      type: Boolean,
      default: true
    },
    showSelected: {
      // 是否显示已选项
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [Number, String],
      default: 200
    },
    width: {
      // 单列宽度
      type: [Number, String],
      default: 180
    },
    height: {
      type: [Number, String],
      default: 320
    },
    selectOnLeaf: {
      // 当此项为 false 时，每级节点均可选, true 时只有叶节点可选
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    exclusion: {
      // 当此项为 true 时，同级节点互斥
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    showCheckAll: {
      // 当此项为 true 时，显示顶部全选功能
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    require: {
      // 当此项为 true 时，必须选择
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    min: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    max: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    optionProps: {
      type: Object,
      default: function _default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        };
      }
    },
    isModal: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabledSelect: {
      tips: '禁止选择',
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * Popover的属性
     */
    trigger: {
      // 触发方式， 可选：hover/focus/click/contextmenu
      type: String,
      default: 'click'
    },
    placement: {
      // 气泡框位置， 可选：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      type: String,
      default: ''
    },
    appendToBody: {
      // 是否插入至body下, 默认true
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: medium || small || mini
    },
    show: {
      // 展示控件
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      visible: false,
      popover: 'IwPopover',
      referenceWidth: null,
      datas: [], // 数据源
      listData: [], // 内容列表，[0 => [], 1, []]
      activeItemKey: [], // 激活的选项key
      checkedOptions: [], // 已选项(选择框显示)
      selectTextsTag: [], // 已选项(已选栏显示)
      selectValues: [], // 已选项的ID
      selectTexts: [], // 已选项(内部存储，单选存所有节点项，复选根据selectOnLeaf存所有节点项或叶子节点项)
      keyword: undefined, // 查询值
      selectedKey: undefined, // 快速定位(showLetter=true)
      selectedTrack: undefined, // 快速定位(showLetter=false)
      lastSearch: undefined,
      error: '', // 错误信息
      firstLoad: true,
      scrollOptions: { // 滚动条配置
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          background: '#c1c1c1',
          opacity: 1,
          size: '10px'
        },
        rail: {
          size: '10px'
        }
      }
    };
  },

  computed: {
    iwSize: function iwSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    iconClass: function iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up';
    },
    deep: function deep() {
      return this.data.length ? treeDeep(this.data) : 0;
    }
  },
  watch: {
    value: function value() {
      this.initValue();
      this.initData();
    },
    data: function data() {
      if (this.firstLoad) {
        this.initData();
        this.firstLoad = false;
      } else {
        this.initData(this.data, false);
      }
    },
    visible: function visible() {
      this.keyword = '';
      if (this.visible) {
        this.initValue();
        this.initData();
      } else {
        this.$emit('close');
      }
    },
    show: function show() {
      this.referenceWidth = this.$el.offsetWidth;
    }
  },
  mounted: function mounted() {
    this.popover = this.isModal ? 'IwDialog' : 'IwPopover';
    this.referenceWidth = this.$el.offsetWidth;
    this.initValue();
    this.initData();
  },

  methods: {
    initValue: function initValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
      var texts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.texts;
      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value !== null && value !== undefined && (value instanceof String || value instanceof Number)) {
        value = [value];
      }
      if (value instanceof Array) {
        this.selectValues = deepClone(value);
      }
      if (texts !== null && texts !== undefined && (texts instanceof String || texts instanceof Number)) {
        texts = [texts];
      }
      if (texts instanceof Array) {
        this.selectTexts = deepClone(texts);
        this.selectTextsTag = deepClone(texts);
        this.activeItemKey = [];
        if (!reset) this.checkedOptions = deepClone(texts);
      } else {
        this.selectTexts = [];
        this.selectTextsTag = [];
        this.activeItemKey = [];
        if (!reset) this.checkedOptions = [];
      }
    },
    initData: function initData() {
      var _this = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;
      var submit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!data || data.length === 0) return;
      this.datas = getTree(data, {
        son: this.optionProps.children,
        key: this.optionProps.value,
        selected: this.selectTexts && this.selectTexts.length ? this.selectTexts : this.selectValues,
        keyword: (this.keyword || '').trim(),
        multiple: this.multiple,
        leaf: this.selectOnLeaf,
        disabledSelect: this.disabledSelect
      });

      // 初始化activeItemKey
      var selectTexts = arr2table(this.datas, this.optionProps.children, false).filter(function (item) {
        return item.selected === true;
      });
      if (selectTexts && selectTexts.length) {
        this.activeItemKey = recursiveLoop(this.multiple ? selectTexts[0] : selectTexts.slice(-1), 'parent').reverse();
      }
      // 初始化列表数组
      var datas = this.datas;
      var length = this.deep;
      this.listData = [datas];

      var _loop = function _loop(index) {
        _this.activeItemKey[index] = _this.activeItemKey[index] || datas && datas[0] && datas[0][_this.optionProps.value];
        var activeItem = datas.find(function (item) {
          return item[_this.optionProps.value] === _this.activeItemKey[index] && item['level'] === index;
        });
        if (activeItem) {
          var nlevel = activeItem.level + 1;
          _this.listData[nlevel] = datas = activeItem[_this.optionProps.children] || [];
          _this.$nextTick(function () {
            _this.selectLetter(_this.activeItemKey[index], index);
          });
        }
      };

      for (var index = 0; index < length; index++) {
        _loop(index);
      }

      if (!this.multiple) {
        if (selectTexts.length) {
          this.selectTexts = selectTexts;
          this.selectValues = selectTexts.map(function (item) {
            return item.key;
          });
        }
        // 把selectTexts的最后一个设置为已选项
        this.selectTextsTag = this.selectTexts.length === 0 ? [] : this.selectTexts.slice(-1);
      } else {
        // 取出数据源已选项selectTexts，重新赋值已选栏的selectTextsTag，实现原型链绑定
        var _selectTexts = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf).filter(function (item) {
          return item.selected === true;
        });
        _selectTexts.forEach(function (item) {
          var key = _this.optionProps.value;
          var index = _this.selectTextsTag.findIndex(function (row) {
            return row[key] === item[key] && row['value'] === item['value'];
          });
          if (index > -1) {
            _this.$set(_this.selectTextsTag, index, item);
          } else {
            _this.selectTextsTag.push(item);
          }
        });
      }
      // 未设置属性texts值时，设置已选项
      if (submit) {
        this.checkedOptions = deepClone(this.selectTextsTag);
      }
    },

    /**
     * 重置
     * 1.重置已选项，有默认值重置为默认值，无默认值重置为初始值
     * 2.重置内容区选中项
     */
    reset: function reset() {
      this.keyword = '';
      this.initValue(this.defaultValue, this.defaultTexts, true);
      this.initData(this.data, false);
    },

    /**
     * 提交，触发回调
     */
    submit: function submit() {
      var _this2 = this;

      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // 验证
      if (this.require && this.selectTextsTag.length <= 0) {
        this.error = this.t('iw.common.placeholder');
        return;
      }
      if (this.multiple) {
        if (this.min && this.selectTextsTag.length < this.min) {
          this.error = this.t('iw.common.atLeast', { count: this.min });
          return;
        }
        if (this.max && this.selectTextsTag.length > this.max) {
          this.error = this.t('iw.common.atMost', { count: this.max });
          return;
        }
      }
      this.keyword = '';
      this.error = '';
      this.checkedOptions = deepClone(this.selectTextsTag);
      this.$emit('change', this.checkedOptions.map(function (item) {
        return item[_this2.optionProps.value];
      }), this.checkedOptions);
      this.visible = visible;
    },

    /**
     * 查询关键字，过滤数据源
     */
    handleSearchChange: function handleSearchChange(event) {
      var _this3 = this;

      this.lastSearch = event.timeStamp;
      setTimeout(function () {
        if (_this3.lastSearch === event.timeStamp) {
          _this3.activeItemKey = [];
          _this3.initData();
        }
      }, 500);
    },

    /**
     * 删除已选项
     * 1.设置已选项selected=false，由原型链绑定实现去除内容区已选
     * 2.过滤已选项
     */
    handleTagClose: function handleTagClose(item) {
      var _this4 = this;

      this.$set(item, 'selected', false);
      this.selectTextsTag = this.selectTextsTag.filter(function (child) {
        return child.selected === true;
      });
      this.selectTexts = this.selectTextsTag.map(function (child) {
        return child;
      });
      this.selectValues = this.selectTextsTag.map(function (child) {
        return child[_this4.optionProps.value];
      });
    },

    /**
     * 单/复选方法，设置selected
     * 1.先设置子节点，后设置父节点
     */
    handleItemChange: function handleItemChange(item, selected) {
      var _this5 = this;

      var up = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (item.disabled) return;
      this.error = '';
      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected;
        this.$set(item, 'selected', selected);
        if (this.selectOnLeaf) {
          item[this.optionProps.children] && item[this.optionProps.children].forEach(function (row) {
            _this5.handleItemChange(row, selected, false);
          });
          if (up) {
            this.handleParentChange(item);
          }
        } else if (this.exclusion) {
          this.handleExclusionChange(item, !item.selected);
        }
        if (up) {
          this.handleMultipleChange(item);
        }
      } else {
        this.selectTexts.forEach(function (row) {
          _this5.$set(row, 'selected', false);
        });
        if (up) {
          this.$set(item, 'selected', true);
          this.selectTexts = [item];
          this.selectValues = [item[this.optionProps.value]];
          this.selectTextsTag = [item];
        }
      }
    },

    /**
     * 复选方法，递归设置父级selected
     */
    handleParentChange: function handleParentChange(item) {
      if (item.parent) {
        var parent = findInArray('key', item.parent[this.optionProps.value], this.datas, this.optionProps.children, item.parent.level);
        if (parent) {
          parent.selected = parent.children.length === parent.children.filter(function (item) {
            return item.selected === true;
          }).length;
        }
        if (parent && parent.parent) {
          this.handleParentChange(parent);
        }
      }
    },
    handleMultipleChange: function handleMultipleChange(item) {
      var _this6 = this;

      var tableDatas = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf);
      var selectTexts = tableDatas.filter(function (item) {
        return item.selected;
      });
      var unselectTexts = tableDatas.filter(function (item) {
        return item.selected === false;
      });
      if (!this.exclusion) {
        if (item.selected) {
          selectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag.findIndex(function (child, key) {
              return child.key === item.key && child.value === item.value;
            });
            if (index === -1) _this6.selectTextsTag.push(item);else _this6.selectTextsTag[index] = item;
          });
        } else {
          unselectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag.findIndex(function (child, key) {
              return child.key === item.key && child.value === item.value;
            });
            if (index !== -1) _this6.selectTextsTag.splice(index, 1);
          });
        }
      } else {
        this.selectTextsTag = selectTexts;
      }
      this.selectTexts = deepClone(this.selectTextsTag);
      this.selectValues = this.selectTexts.map(function (item) {
        return item[_this6.optionProps.value];
      });
    },
    handleExclusionChange: function handleExclusionChange(item, selected) {
      var _this7 = this;

      var first = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      // 选中值
      if (!selected) {
        // 清除所有子节点
        item.children && item.children.forEach(function (row) {
          row.selected = false;
          _this7.handleExclusionChange(row, false, false);
        });
        if (first) {
          // 清除所有父节点
          this.handleParentExclusionChange(item, false);
        }
      }
    },
    handleParentExclusionChange: function handleParentExclusionChange(item, selected) {
      if (!selected) {
        if (item.parent) {
          var data = this.listData[item.parent.level];
          var parent = data.find(function (child) {
            return child.key === item.parent.key;
          });
          if (parent) {
            parent.selected = false;
          }
          if (parent && parent.parent) {
            this.handleParentExclusionChange(parent, false);
          }
        }
      }
    },

    /**
     * 单选事件
     * @param {Number} index 节点层级
     * @param {Object} item 节点对象
     */
    handleSelectChange: function handleSelectChange(item, clear) {
      var _this8 = this;

      var submit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!item) return;
      if (!item.children || !item.children.length) return;
      var index = Number(item.level);
      var nIndex = index + 1;
      this.$set(this.activeItemKey, index, item.key);

      if (item.children && item.children.length) {
        this.$set(this.listData, nIndex, item.children);
        this.listData = this.listData.map(function (item, key) {
          return key <= nIndex && key < _this8.deep ? item : [];
        });
        this.activeItemKey = this.activeItemKey.filter(function (item, key) {
          return key < nIndex && key < _this8.deep;
        });
      }
    },
    isItemChecked: function isItemChecked(data) {
      var _selected = data[this.optionProps.children].filter(function (item) {
        return item.selected === true;
      });
      var _children = data[this.optionProps.children];
      data.selected = _selected.length === _children.length;
      return data.selected;
    },
    isItemIndeterminate: function isItemIndeterminate(data) {
      var _selected = data[this.optionProps.children].filter(function (item) {
        return item.selected === true;
      });
      var _indeterminate = data[this.optionProps.children].filter(function (item) {
        return item.indeterminate === true;
      });
      var _children = data[this.optionProps.children];
      data.indeterminate = _selected.length > 0 && _children.length > _selected.length || _indeterminate.length > 0;
      return data.indeterminate;
    },
    handleCheckColumnChange: function handleCheckColumnChange(data) {
      var _this9 = this;

      var checked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      data.forEach(function (group, key) {
        _this9.handleItemChange(group, !checked, false);
      });
      if (data[0]) {
        this.handleMultipleChange(data[0]);
      }
    },
    isCheckColumnChecked: function isCheckColumnChecked(data) {
      return data.every(function (group) {
        return group.selected === true;
      });
    },
    isCheckColumnIndeterminate: function isCheckColumnIndeterminate(data) {
      var _selected = data.filter(function (group) {
        return group.selected === true;
      });
      var _indeterminate = data.filter(function (group) {
        return group.indeterminate === true;
      });
      return data.length !== _selected.length && _selected.length > 0 || _indeterminate.length > 0;
    },
    handleCheckAllChange: function handleCheckAllChange(data) {
      var _this10 = this;

      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var go = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (data instanceof Array) {
        data.forEach(function (item) {
          _this10.handleCheckAllChange(item, selected, false);
        });
      } else if (data instanceof Object) {
        this.$set(data, 'selected', selected);
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          this.handleCheckAllChange(children, selected, false);
        }
      }
      if (go && data[0]) {
        this.handleMultipleChange(data[0]);
      }
    },
    isCheckAllChecked: function isCheckAllChecked(data) {
      if (data instanceof Array) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (!this.isCheckAllChecked(item)) {
              return false;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else if (data instanceof Object) {
        if (!data.selected) return false;
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          if (!this.isCheckAllChecked(children)) {
            return false;
          }
        }
      }
      return true;
    },
    isCheckAllIndeterminate: function isCheckAllIndeterminate(data) {
      if (data instanceof Array) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (this.isCheckAllIndeterminate(item)) return true;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else if (data instanceof Object) {
        if (data.selected) return false;
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          if (this.isCheckAllIndeterminate(children)) return true;
        }
      }
      return false;
    },
    getCheckedKeys: function getCheckedKeys() {
      var _this11 = this;

      return this.checkedOptions.map(function (item) {
        return item[_this11.optionProps.value];
      });
    },
    selectLetter: function selectLetter(key) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'KEY';
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this.selectedKey = key;
      var obj = document.querySelector('#iw-cascader__popover--' + this.id + ' #iw-cascader__group--' + target + ' [scroll-key="' + key + '_' + target + '"]');
      if (obj) {
        var scrollTop = parseInt(obj['offsetTop']);
        document.querySelector('#iw-cascader__popover--' + this.id + ' #iw-cascader__group--' + target + ' .iw-cascader__wrap').scrollTop = scrollTop;
      }
    },
    substr: function substr(str, len) {
      return util_substr(str, len);
    }
  }
});
// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascadervue_type_script_lang_js_ = (cascadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue





/* normalize component */

var cascader_component = normalizeComponent(
  src_cascadervue_type_script_lang_js_,
  cascadervue_type_template_id_032537a6_render,
  cascadervue_type_template_id_032537a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var cascader_api; }
cascader_component.options.__file = "packages/cascader/src/cascader.vue"
/* harmony default export */ var cascader = (cascader_component.exports);
// CONCATENATED MODULE: ./packages/cascader/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-table/src/cascader-table.vue?vue&type=template&id=7cc4cb06&
var cascader_tablevue_type_template_id_7cc4cb06_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { display: "inline-block" } },
    [
      _vm.popover === "IwDialog"
        ? _c(
            "div",
            {
              on: {
                click: function($event) {
                  _vm.visible = true
                }
              }
            },
            [
              _vm._t("reference", [
                _vm._v(
                  _vm._s(_vm.placeholder || _vm.t("iw.common.placeholder"))
                )
              ])
            ],
            2
          )
        : _vm._e(),
      _c(
        _vm.popover,
        {
          tag: "component",
          class:
            _vm.popover !== "IwPopover"
              ? "iw-cascader-table iw-cascader-table--" +
                _vm.iwSize +
                (_vm.disabled ? " iw-cascader-table--disabled" : "")
              : "",
          attrs: {
            visible: _vm.visible,
            trigger: _vm.trigger,
            placement: _vm.placement,
            "append-to-body":
              _vm.popover === "IwPopover" ? _vm.appendToBody : true,
            "popper-class":
              _vm.popover === "IwPopover"
                ? "iw-cascader-table iw-cascader-table--" +
                  _vm.iwSize +
                  (_vm.disabled ? " iw-cascader-table--disabled" : "")
                : "",
            disabled: _vm.disabled,
            width: _vm.popover === "IwPopover" ? null : _vm.clientWidth,
            title: _vm.popover === "IwPopover" ? null : false
          },
          on: {
            "update:visible": function($event) {
              _vm.visible = $event
            }
          },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "iw-cascader-table-reference",
              attrs: { slot: "reference" },
              slot: "reference"
            },
            [
              _vm._t("reference", [
                _c(
                  "div",
                  {
                    class: [
                      {
                        "is-focus": !_vm.disabled && _vm.visible,
                        "is-disabled": _vm.disabled
                      },
                      "iw-input",
                      "iw-input--" + _vm.iwSize
                    ],
                    style: _vm.referenceWidth
                      ? "width:" + _vm.referenceWidth + "px"
                      : ""
                  },
                  [
                    _vm.popover === "IwPopover"
                      ? _c("div", { staticClass: "iw-input__inner" }, [
                          _vm.multiple &&
                          _vm.checkedOptions &&
                          _vm.checkedOptions.length > 0
                            ? _c("span", { staticClass: "iw-input__value" }, [
                                _vm.checkedOptions.length > 1
                                  ? _c("input", {
                                      style:
                                        "width:" +
                                        (_vm.referenceWidth - 36) +
                                        "px",
                                      attrs: {
                                        disabled: _vm.disabled,
                                        unselectable: "on",
                                        readonly: ""
                                      },
                                      domProps: {
                                        value:
                                          _vm.t("iw.common.selected") +
                                          "(" +
                                          _vm.checkedOptions.length +
                                          ")"
                                      }
                                    })
                                  : _c("input", {
                                      style:
                                        "width:" +
                                        (_vm.referenceWidth - 36) +
                                        "px",
                                      attrs: {
                                        disabled: _vm.disabled,
                                        unselectable: "on",
                                        readonly: ""
                                      },
                                      domProps: {
                                        value:
                                          _vm.checkedOptions[0][
                                            _vm.optionProps.label
                                          ]
                                      }
                                    })
                              ])
                            : !_vm.multiple &&
                              _vm.checkedOptions &&
                              _vm.checkedOptions.length
                            ? _c("span", { staticClass: "iw-input__value" }, [
                                _c("input", {
                                  style:
                                    "width:" + (_vm.referenceWidth - 36) + "px",
                                  attrs: {
                                    disabled: _vm.disabled,
                                    unselectable: "on",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.checkedOptions[
                                        _vm.checkedOptions.length - 1
                                      ][_vm.optionProps.label]
                                  }
                                })
                              ])
                            : _c("span", { staticClass: "iw-input__value" }, [
                                _c("input", {
                                  staticClass: "iw-input__placeholder",
                                  style:
                                    "width:" + (_vm.referenceWidth - 36) + "px",
                                  attrs: {
                                    disabled: _vm.disabled,
                                    unselectable: "on",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.placeholder ||
                                      _vm.t("iw.common.placeholder")
                                  }
                                })
                              ]),
                          _c(
                            "span",
                            { staticClass: "iw-input__suffix" },
                            [
                              _vm._t("default", [
                                _c("i", {
                                  class: [
                                    "iw-input__icon",
                                    "iw-icon-" + _vm.iconClass
                                  ]
                                })
                              ])
                            ],
                            2
                          )
                        ])
                      : _vm._e()
                  ]
                )
              ])
            ],
            2
          ),
          !_vm.disabled
            ? _c(
                "div",
                {
                  ref: "iw-cascader-table__popover",
                  style: { minWidth: "357px", width: _vm.clientWidth },
                  attrs: { id: "iw-cascader-table__popover--" + _vm.id }
                },
                [
                  _vm.title || _vm.tabs.length
                    ? _c("div", { staticClass: "iw-cascader-table__title" }, [
                        _vm.title
                          ? _c(
                              "div",
                              { staticClass: "iw-cascader-table__inner" },
                              [_vm._v(_vm._s(_vm.title))]
                            )
                          : _vm._e(),
                        _vm.showSearch && _vm.data.length
                          ? _c(
                              "div",
                              {
                                staticClass: "iw-cascader-table__search",
                                class:
                                  "iw-cascader-table__search--" + _vm.iwSize
                              },
                              [
                                _c("iw-input", {
                                  staticStyle: { width: "130px" },
                                  attrs: {
                                    size: _vm.iwSize,
                                    placeholder: _vm.t("iw.common.search"),
                                    "prefix-icon": "iw-icon-search"
                                  },
                                  on: { change: _vm.handleSearchChange },
                                  nativeOn: {
                                    keyup: function($event) {
                                      return _vm.handleSearchChange($event)
                                    }
                                  },
                                  model: {
                                    value: _vm.keyword,
                                    callback: function($$v) {
                                      _vm.keyword = $$v
                                    },
                                    expression: "keyword"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm.error
                          ? _c(
                              "div",
                              { staticClass: "iw-cascader-table__error" },
                              [_vm._v(_vm._s(_vm.error))]
                            )
                          : _vm._e(),
                        _c(
                          "div",
                          {
                            staticClass: "iw-cascader-table__close",
                            on: {
                              click: function($event) {
                                _vm.visible = false
                              }
                            }
                          },
                          [_c("i", { staticClass: "iw-icon-close" })]
                        )
                      ])
                    : _vm._e(),
                  _c("div", { staticClass: "iw-cascader-table__body" }, [
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "loading",
                            rawName: "v-loading",
                            value: _vm.loading,
                            expression: "loading"
                          }
                        ]
                      },
                      [
                        _vm.columnNameData && _vm.columnNameData.length
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "iw-cascader-table__body-header iw-cascader-table__wrap"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "iw-cascader-table__group" },
                                  [
                                    _c("IwCascaderTableItem", {
                                      attrs: {
                                        data: _vm.columnNameData,
                                        "select-on-leaf": _vm.selectOnLeaf,
                                        "leafs-per-column": _vm.leafsPerColumn,
                                        multiple: _vm.multiple,
                                        deep: _vm.deep,
                                        level: 0,
                                        "is-header": true
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm.datas && _vm.datas.length
                          ? [
                              _c(
                                "iw-scrollbar",
                                {
                                  ref: "scrollbarRight__KEY",
                                  attrs: {
                                    "wrap-style":
                                      "height:" + (_vm.height + 16) + "px;",
                                    "wrap-class": "iw-cascader-table__wrap"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "iw-cascader-table__group" },
                                    [
                                      _c("IwCascaderTableItem", {
                                        attrs: {
                                          data: _vm.datas,
                                          "select-on-leaf": _vm.selectOnLeaf,
                                          "leafs-per-column":
                                            _vm.leafsPerColumn,
                                          exclusion: _vm.exclusion,
                                          multiple: _vm.multiple,
                                          deep: _vm.deep,
                                          level: 0
                                        },
                                        on: { change: _vm.handleItemChange }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          : _c("iw-empty", {
                              staticStyle: { height: "160px" },
                              attrs: { status: _vm.status }
                            })
                      ],
                      2
                    )
                  ]),
                  _vm.data.length
                    ? _c(
                        "div",
                        { staticClass: "iw-cascader-table__footer" },
                        [
                          _vm.showSelected &&
                          _vm.selectTextsTag &&
                          _vm.selectTextsTag.length
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "iw-cascader-table__footer-selected"
                                },
                                [
                                  _c("label", [
                                    _vm._v(
                                      _vm._s(_vm.t("iw.common.selected")) + "："
                                    )
                                  ]),
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "iw-scrollbar",
                                        {
                                          attrs: {
                                            "wrap-class":
                                              "iw-cascader-table__footer-scroll iw-cascader-table__footer-scroll--" +
                                              _vm.iwSize
                                          }
                                        },
                                        _vm._l(_vm.selectTextsTag, function(
                                          item
                                        ) {
                                          return _c(
                                            "iw-tag",
                                            {
                                              key:
                                                item[_vm.optionProps.value] +
                                                "_" +
                                                item["level"],
                                              attrs: {
                                                title:
                                                  item[_vm.optionProps.label],
                                                size: _vm.iwSize,
                                                type: "pink",
                                                closable: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.handleTagClose(item)
                                                },
                                                close: function($event) {
                                                  _vm.handleTagClose(item)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  item[_vm.optionProps.label]
                                                )
                                              )
                                            ]
                                          )
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm.showCheckAll && _vm.multiple && _vm.datas.length
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "iw-cascader-table__footer-checkall",
                                  on: {
                                    click: function($event) {
                                      _vm.handleCheckAllChange(
                                        _vm.datas,
                                        !_vm.isCheckAllChecked(_vm.datas)
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("span", {
                                    class: [
                                      "iw-checkbox",
                                      _vm.data.length &&
                                      _vm.isCheckAllChecked(_vm.datas)
                                        ? "iw-checkbox--checked"
                                        : "",
                                      _vm.data.length &&
                                      _vm.isCheckAllIndeterminate(_vm.datas)
                                        ? "iw-checkbox--indeterminate"
                                        : ""
                                    ]
                                  }),
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.t("iw.common.checkAll")))
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize },
                              on: {
                                click: function($event) {
                                  _vm.reset()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.t("iw.common.reset")) +
                                  "\n        "
                              )
                            ]
                          ),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize, type: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.submit(false)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.t("iw.common.confirm")) +
                                  "\n        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var cascader_tablevue_type_template_id_7cc4cb06_staticRenderFns = []
cascader_tablevue_type_template_id_7cc4cb06_render._withStripped = true


// CONCATENATED MODULE: ./packages/cascader-table/src/cascader-table.vue?vue&type=template&id=7cc4cb06&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-table/src/cascader-table-item.vue?vue&type=template&id=463bebaa&
var cascader_table_itemvue_type_template_id_463bebaa_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "iw-cascader-table__group_table" }, [
    _vm.level < _vm.deep - 1
      ? _c(
          "table",
          _vm._l(_vm.data, function(row) {
            return _c("tr", { key: row[_vm.optionProps.value] }, [
              _c("td", [
                _c(
                  "div",
                  {
                    staticClass: "iw-cascader-table__group_item",
                    attrs: { title: row[_vm.optionProps.label] },
                    on: {
                      click: function($event) {
                        _vm.handleItemChange(row)
                      }
                    }
                  },
                  [
                    !_vm.isHeader
                      ? _c("span", {
                          class: [
                            _vm.multiple ? "iw-checkbox" : "",
                            _vm.multiple &&
                            (_vm.selectOnLeaf && _vm.isItemIndeterminate(row))
                              ? "iw-checkbox--indeterminate"
                              : "",
                            (_vm.multiple &&
                              (!_vm.selectOnLeaf && row.selected)) ||
                            (_vm.selectOnLeaf && _vm.isItemChecked(row))
                              ? "iw-checkbox--checked"
                              : "",
                            !_vm.multiple && !_vm.selectOnLeaf
                              ? "iw-radio"
                              : "",
                            !_vm.multiple && !_vm.selectOnLeaf && row.selected
                              ? "iw-radio--checked"
                              : ""
                          ]
                        })
                      : _vm._e(),
                    _c(
                      "span",
                      { class: ["iw-text", { "is-header": _vm.isHeader }] },
                      [_vm._v(_vm._s(row[_vm.optionProps.label]))]
                    )
                  ]
                )
              ]),
              _c(
                "td",
                [
                  row[_vm.optionProps.children]
                    ? _c("IwCascaderTableItem", {
                        attrs: {
                          data: row[_vm.optionProps.children],
                          "select-on-leaf": _vm.selectOnLeaf,
                          "leafs-per-column": _vm.leafsPerColumn,
                          multiple: _vm.multiple,
                          exclusion: _vm.exclusion,
                          parent: row,
                          deep: _vm.deep,
                          level: _vm.level + 1,
                          "is-header": _vm.isHeader
                        },
                        on: {
                          exclusionChange: _vm.handleParentExclusionChange,
                          change: _vm.handleChange
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          }),
          0
        )
      : _c(
          "table",
          { staticClass: "iw-cascader-table__group_table--plain" },
          _vm._l(_vm.chunk(_vm.data, _vm.leafsPerColumn), function(row2, key2) {
            return _c(
              "tr",
              { key: key2 },
              [
                _vm._l(row2, function(item) {
                  return _c(
                    "td",
                    {
                      key: item[_vm.optionProps.value],
                      attrs: {
                        "scroll-key": item[_vm.optionProps.value] + "_" + "KEY"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          class: [
                            "iw-cascader-table__group_item",
                            "iw-cascader-table__group_item--" +
                              _vm.leafsPerColumn
                          ],
                          attrs: { title: item[_vm.optionProps.label] },
                          on: {
                            click: function($event) {
                              _vm.handleItemChange(item)
                            }
                          }
                        },
                        [
                          !_vm.isHeader
                            ? _c("span", {
                                class: [
                                  _vm.multiple ? "iw-checkbox" : "iw-radio",
                                  _vm.multiple && item.selected
                                    ? "iw-checkbox--checked"
                                    : "",
                                  !_vm.multiple && item.selected
                                    ? "iw-radio--checked"
                                    : ""
                                ]
                              })
                            : _vm._e(),
                          _c("span", { staticClass: "iw-text" }, [
                            _vm._v(_vm._s(item[_vm.optionProps.label]))
                          ])
                        ]
                      )
                    ]
                  )
                }),
                _vm._l(_vm.leafsPerColumn - row2.length, function(item) {
                  return _c("td", { key: item }, [
                    _c("div", {
                      class: [
                        "iw-cascader-table__group_item",
                        "iw-cascader-table__group_item--" + _vm.leafsPerColumn
                      ]
                    })
                  ])
                })
              ],
              2
            )
          }),
          0
        )
  ])
}
var cascader_table_itemvue_type_template_id_463bebaa_staticRenderFns = []
cascader_table_itemvue_type_template_id_463bebaa_render._withStripped = true


// CONCATENATED MODULE: ./packages/cascader-table/src/cascader-table-item.vue?vue&type=template&id=463bebaa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-table/src/cascader-table-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var cascader_table_itemvue_type_script_lang_js_ = ({
  name: 'IwCascaderTableItem',
  components: {
    IwCascaderTableItem: cascader_table_item
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    parent: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: true
    },
    selectOnLeaf: {
      // 当此项为 false 时，每级节点均可选, true 时只有叶节点可选
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    exclusion: {
      // 当此项为 true 时，同级节点互斥
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    leafsPerColumn: {
      type: Number,
      default: 5,
      validator: function validator(value) {
        return [2, 3, 4, 5].includes(value);
      }
    },
    deep: {
      type: Number,
      default: 0
    },
    level: {
      type: Number,
      default: 0
    },
    isHeader: {
      type: Boolean,
      default: false
    },
    optionProps: {
      type: Object,
      default: function _default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        };
      }
    }
  },
  methods: {
    /**
     * Table中选项的换行
     */
    chunk: function chunk() {
      return util_chunk.apply(undefined, arguments);
    },

    /**
     * 是否已选
     */
    /**
     * 单/复选方法，设置selected
     * 1.先设置子节点，后设置父节点
     */
    handleItemChange: function handleItemChange(item, selected) {
      var _this = this;

      var go = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!this.multiple && this.selectOnLeaf && this.level < this.deep - 1) return;
      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected;
        this.$set(item, 'selected', selected);
        if (this.selectOnLeaf) {
          item[this.optionProps.children] && item[this.optionProps.children].forEach(function (row) {
            _this.handleItemChange(row, selected, false);
          });
          if (go) {
            this.handleParentChange(item);
          }
        } else if (this.exclusion) {
          this.handleExclusionChange(item, !item.selected);
        }
        if (go) {
          this.$emit('change', item);
        }
      } else {
        this.$emit('change', item);
      }
    },
    handleExclusionChange: function handleExclusionChange(item, selected) {
      var _this2 = this;

      var first = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      // 选中值
      if (!selected) {
        // 清除所有子节点
        item.children && item.children.forEach(function (row) {
          row.selected = false;
          _this2.handleExclusionChange(row, false, false);
        });
        if (first) {
          // 清除所有父节点
          this.handleParentExclusionChange(item, false);
        }
      }
    },
    handleParentExclusionChange: function handleParentExclusionChange(item, selected) {
      if (!selected) {
        if (item.parent) {
          var parent = this.parent;
          if (parent) {
            parent.selected = false;
          }
          if (parent && parent.parent) {
            this.$emit('exclusionChange', parent, false);
          }
        }
      }
    },
    handleChange: function handleChange(item) {
      this.$emit('change', item);
    },

    /**
     * 复选方法，递归设置父级selected
     */
    handleParentChange: function handleParentChange(item) {
      if (item.parent) {
        var parent = findInArray('key', item.parent[this.optionProps.value], this.data, this.optionProps.children, item.parent.level);
        if (parent && parent.children) {
          parent.selected = parent.children.length === parent.children.filter(function (item) {
            return item.selected === true;
          }).length;
        }
        if (parent && parent.parent) {
          this.handleParentChange(parent);
        }
      }
    },
    isItemChecked: function isItemChecked(data) {
      if (!data[this.optionProps.children]) return false;
      var _selected = data[this.optionProps.children].filter(function (item) {
        return item.selected === true;
      });
      var _children = data[this.optionProps.children];
      data.selected = _selected.length === _children.length;
      return data.selected;
    },

    /**
     * 是否半选
     */
    isItemIndeterminate: function isItemIndeterminate(data) {
      if (!data[this.optionProps.children]) return false;
      var _selected = data[this.optionProps.children].filter(function (item) {
        return item.selected === true;
      });
      var _indeterminate = data[this.optionProps.children].filter(function (item) {
        return item.indeterminate === true;
      });
      var _children = data[this.optionProps.children];
      data.indeterminate = _selected.length > 0 && _children.length > _selected.length || _indeterminate.length > 0;
      return data.indeterminate;
    }
  }
});
// CONCATENATED MODULE: ./packages/cascader-table/src/cascader-table-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascader_table_itemvue_type_script_lang_js_ = (cascader_table_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/cascader-table/src/cascader-table-item.vue





/* normalize component */

var cascader_table_item_component = normalizeComponent(
  src_cascader_table_itemvue_type_script_lang_js_,
  cascader_table_itemvue_type_template_id_463bebaa_render,
  cascader_table_itemvue_type_template_id_463bebaa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var cascader_table_item_api; }
cascader_table_item_component.options.__file = "packages/cascader-table/src/cascader-table-item.vue"
/* harmony default export */ var cascader_table_item = (cascader_table_item_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-table/src/cascader-table.vue?vue&type=script&lang=js&
var cascader_tablevue_type_script_lang_js_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var cascader_tablevue_type_script_lang_js_ = ({
  name: 'IwCascaderTable',
  components: {
    IwCascaderTableItem: cascader_table_item
  },
  mixins: [mixins_locale],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultValue: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    texts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultTexts: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    id: {
      type: Number,
      default: function _default() {
        return parseInt(Math.random() * 10000);
      }
    },
    title: {
      // 标题： 为空就不显示
      type: [Boolean, String],
      default: false
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    leafsPerColumn: {
      type: Number,
      default: 5,
      validator: function validator(value) {
        return [2, 3, 4, 5].includes(value);
      }
    },
    columnName: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showLetter: {
      // 是否需要快速字母选择器
      type: Boolean,
      default: true
    },
    showSearch: {
      // 显示搜索框
      type: Boolean,
      default: true
    },
    showSelected: {
      // 是否显示已选项
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 320
    },
    selectOnLeaf: {
      // 当此项为 false 时，每级节点均可选, true 时只有叶节点可选
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    exclusion: {
      // 当此项为 true 时，同级节点互斥
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    appendPKey: {
      // key追加父级key，避免重复key
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    showCheckAll: {
      // 当此项为 true 时，显示顶部全选功能
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    require: {
      // 当此项为 true 时，必须选择
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    min: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    max: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    optionProps: {
      type: Object,
      default: function _default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        };
      }
    },
    isModal: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabledSelect: {
      tips: '禁止选择',
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * Popover的属性
     */
    trigger: {
      // 触发方式， 可选：hover/focus/click/contextmenu
      type: String,
      default: 'click'
    },
    placement: {
      // 气泡框位置， 可选：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      type: String,
      default: ''
    },
    appendToBody: {
      // 是否插入至body下, 默认true
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: medium || small || mini
    }
  },
  data: function data() {
    return {
      visible: false,
      popover: 'IwPopover',
      referenceWidth: null,
      clientWidth: null,
      datas: [], // 数据源
      checkedOptions: [], // 已选项(选择框显示)
      selectTextsTag: [], // 已选项(已选栏显示)
      selectValues: [], // 已选项的ID
      selectTexts: [], // 已选项(内部存储，单选存所有节点项，复选根据selectOnLeaf存所有节点项或叶子节点项)
      keyword: undefined, // 查询值
      selectedKey: undefined, // 快速定位(showLetter=true)
      selectedTrack: undefined, // 快速定位(showLetter=false)
      lastSearch: undefined,
      error: '', // 错误信息
      firstLoad: true,
      scrollOptions: { // 滚动条配置
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          background: '#c1c1c1',
          opacity: 1,
          size: '10px'
        },
        rail: {
          size: '10px'
        }
      }
    };
  },

  computed: {
    iwSize: function iwSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    iconClass: function iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up';
    },
    deep: function deep() {
      return this.data.length ? treeDeep(this.data) : 0;
    },
    columnNameData: function columnNameData() {
      var data = [];
      for (var i = this.deep - 1; i >= 0; i--) {
        if (!this.columnName[i]) continue;
        var tmp = { key: 'title_' + i, value: this.columnName[i] };
        if (data.length) {
          data = [cascader_tablevue_type_script_lang_js_extends({}, tmp, { children: data })];
        } else {
          data = [tmp];
        }
      }
      return data;
    }
  },
  watch: {
    value: function value() {
      this.initValue();
      this.initData();
      this.initStatus();
    },
    data: function data() {
      if (this.firstLoad) {
        this.initData();
        this.firstLoad = false;
      } else {
        this.initData(this.data, false);
      }
    },
    visible: function visible() {
      this.keyword = '';
      if (this.visible) {
        this.initValue();
        this.initData();
        this.initStatus();
      } else {
        this.$emit('close');
      }
    }
  },
  mounted: function mounted() {
    this.popover = this.isModal ? 'IwDialog' : 'IwPopover';
    this.referenceWidth = this.$el.offsetWidth;
    this.initValue();
    this.initData();
    this.initStatus();
  },

  methods: {
    initValue: function initValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
      var texts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.texts;
      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value !== null && value !== undefined && (value instanceof String || value instanceof Number)) {
        value = [value];
      }
      if (value instanceof Array) {
        this.selectValues = deepClone(value);
      }
      if (texts !== null && texts !== undefined && (texts instanceof String || texts instanceof Number)) {
        texts = [texts];
      }
      if (texts instanceof Array) {
        this.selectTexts = deepClone(texts);
        this.selectTextsTag = deepClone(texts);
        if (!reset) this.checkedOptions = deepClone(texts);
      } else {
        this.selectTexts = [];
        this.selectTextsTag = [];
        if (!reset) this.checkedOptions = [];
      }
    },
    initData: function initData() {
      var _this = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;
      var submit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.datas = getTree(data, {
        son: this.optionProps.children,
        key: this.optionProps.value,
        selected: this.selectTexts && this.selectTexts.length ? this.selectTexts : this.selectValues,
        appendPKey: this.appendPKey,
        keyword: (this.keyword || '').trim(),
        multiple: this.multiple,
        leaf: this.selectOnLeaf,
        disabledSelect: this.disabledSelect || []
      });

      if (!this.multiple) {
        var selectTexts = arr2table(this.datas, this.optionProps.children, false).filter(function (item) {
          return item.selected === true;
        });
        if (selectTexts.length) {
          this.selectTexts = selectTexts;
          this.selectValues = selectTexts.map(function (item) {
            return item.key;
          });
        }
        // 把selectTexts的最后一个设置为已选项
        this.selectTextsTag = this.selectTexts.length === 0 ? [] : this.selectTexts.slice(-1);
      } else {
        // 取出数据源已选项selectTexts，重新赋值已选栏的selectTextsTag，实现原型链绑定
        var _selectTexts = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf).filter(function (item) {
          return item.selected === true;
        });
        _selectTexts.forEach(function (item) {
          var key = _this.optionProps.value;
          var index = _this.selectTextsTag.findIndex(function (row) {
            return row[key] === item[key] && row['value'] === item['value'];
          });
          if (index > -1) {
            _this.$set(_this.selectTextsTag, index, item);
          } else {
            _this.selectTextsTag.push(item);
          }
        });
      }
      // 未设置属性texts值时，设置已选项
      if (submit) {
        this.checkedOptions = deepClone(this.selectTextsTag);
      }
      this.clientWidth = (this.deep - 1) * 132 + this.leafsPerColumn * 112 + (this.deep - 1) + 'px';
    },
    initStatus: function initStatus() {
      var _this2 = this;

      if (this.selectValues.length) {
        var key = this.multiple ? this.selectValues[0] : this.selectValues[1];
        this.$nextTick(function () {
          _this2.scrollTop(key, 'KEY');
        });
      }
    },

    /**
     * 重置
     * 1.重置已选项，有默认值重置为默认值，无默认值重置为初始值
     * 2.重置内容区选中项
     */
    reset: function reset() {
      this.keyword = '';
      this.initValue(this.defaultValue, this.defaultTexts, true);
      this.initData(this.data, false);
    },

    /**
     * 提交，触发回调
     */
    submit: function submit() {
      var _this3 = this;

      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // 验证
      if (this.require && this.selectTextsTag.length <= 0) {
        this.error = this.t('iw.common.placeholder');
        return;
      }
      if (this.multiple) {
        if (this.min && this.selectTextsTag.length < this.min) {
          this.error = '最少选择' + this.min + '项';
          return;
        }
        if (this.max && this.selectTextsTag.length > this.max) {
          this.error = '最多选择' + this.max + '项';
          return;
        }
      }
      this.keyword = '';
      this.error = '';
      this.checkedOptions = deepClone(this.selectTextsTag);
      this.$emit('change', this.checkedOptions.map(function (item) {
        return item[_this3.optionProps.value];
      }), this.checkedOptions);
      this.visible = visible;
    },

    /**
     * 快速定位
     */
    handleTrackChange: function handleTrackChange(value) {
      this.scrollTop(value);
    },
    scrollTop: function scrollTop(key) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'KEY';
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this.selectedKey = key;
      var obj = document.querySelector('#iw-cascader-table__popover--' + this.id + ' [scroll-key="' + key + '_' + target + '"]');
      if (obj) {
        var scrollTop = parseInt(obj['offsetTop']);
        document.querySelector('#iw-cascader-table__popover--' + this.id + ' .iw-cascader-table__wrap').scrollTop = scrollTop;
      }
    },

    /**
     * 回调函数，过滤数据源
     */
    handleFilterChange: function handleFilterChange(value, key) {
      this.firstLoad = false;
      this.$emit('filterChange', value, key);
    },

    /**
     * 查询关键字，过滤数据源
     */
    handleSearchChange: function handleSearchChange(event) {
      var _this4 = this;

      this.lastSearch = event.timeStamp;
      setTimeout(function () {
        if (_this4.lastSearch === event.timeStamp) {
          _this4.initData(_this4.data, false);
        }
      }, 400);
    },

    /**
     * 删除已选项
     * 1.设置已选项selected=false，由原型链绑定实现去除内容区已选
     * 2.过滤已选项
     */
    handleTagClose: function handleTagClose(item) {
      item.selected = false;
      this.selectTextsTag = this.selectTextsTag.filter(function (child) {
        return child.selected;
      });
      this.selectTexts = this.selectTextsTag.filter(function (child) {
        return child.selected;
      });
      this.selectValues = this.selectTextsTag.map(function (child) {
        return child.key;
      });
    },
    handleItemChange: function handleItemChange(item) {
      var _this5 = this;

      if (this.multiple) {
        this.handleMultipleChange(item);
      } else {
        this.selectTexts.forEach(function (row) {
          _this5.$set(row, 'selected', false);
        });
        this.$set(item, 'selected', true);
        this.selectTexts = [item];
        this.selectValues = [item[this.optionProps.value]];
        this.selectTextsTag = [item];
      }
    },

    /**
     * 复选方法，设置已选项selectTextsTag，避免不在数据源的已选项被误删
     * 1.添加时把数据源selected=true的项赋值到selectTextsTag
     * 2.删除时把selectTextsTag中对应的selected=false的项删除
     */
    handleMultipleChange: function handleMultipleChange(item) {
      var _this6 = this;

      var tableDatas = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf);
      var selectTexts = tableDatas.filter(function (item) {
        return item.selected;
      });
      var unselectTexts = tableDatas.filter(function (item) {
        return item.selected === false;
      });
      if (this.keyword === '') {
        this.selectTextsTag = selectTexts;
      } else {
        if (item.selected) {
          selectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag.findIndex(function (child, key) {
              return child.key === item.key && child.value === item.value;
            });
            if (index === -1) _this6.selectTextsTag.push(item);else _this6.selectTextsTag[index] = item;
          });
        } else {
          unselectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag.findIndex(function (child, key) {
              return child.key === item.key && child.value === item.value;
            });
            if (index !== -1) _this6.selectTextsTag.splice(index, 1);
          });
        }
      }
      this.selectTexts = deepClone(this.selectTextsTag);
      this.selectValues = this.selectTexts.map(function (item) {
        return item[_this6.optionProps.value];
      });
    },
    handleCheckAllChange: function handleCheckAllChange(data) {
      var _this7 = this;

      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var go = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (data instanceof Array) {
        data.forEach(function (item) {
          _this7.handleCheckAllChange(item, selected, false);
        });
      } else if (data instanceof Object) {
        this.$set(data, 'selected', selected);
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          this.handleCheckAllChange(children, selected, false);
        }
      }
      if (go && data[0]) {
        this.handleMultipleChange(data[0]);
      }
    },
    isCheckAllChecked: function isCheckAllChecked(data) {
      if (data instanceof Array) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (!this.isCheckAllChecked(item)) return false;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else if (data instanceof Object) {
        if (!data.selected) return false;
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          if (!this.isCheckAllChecked(children)) return false;
        }
      }
      return true;
    },
    isCheckAllIndeterminate: function isCheckAllIndeterminate(data) {
      if (data instanceof Array) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (this.isCheckAllIndeterminate(item)) return true;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else if (data instanceof Object) {
        if (data.selected) return false;
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          if (this.isCheckAllIndeterminate(children)) return true;
        }
      }
      return false;
    },
    getCheckedKeys: function getCheckedKeys() {
      var _this8 = this;

      return this.checkedOptions.map(function (item) {
        return item[_this8.optionProps.value];
      });
    },
    substr: function substr(str, len) {
      return util_substr(str, len);
    }
  }
});
// CONCATENATED MODULE: ./packages/cascader-table/src/cascader-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascader_tablevue_type_script_lang_js_ = (cascader_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/cascader-table/src/cascader-table.vue





/* normalize component */

var cascader_table_component = normalizeComponent(
  src_cascader_tablevue_type_script_lang_js_,
  cascader_tablevue_type_template_id_7cc4cb06_render,
  cascader_tablevue_type_template_id_7cc4cb06_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var cascader_table_api; }
cascader_table_component.options.__file = "packages/cascader-table/src/cascader-table.vue"
/* harmony default export */ var cascader_table = (cascader_table_component.exports);
// CONCATENATED MODULE: ./packages/cascader-table/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/picker.vue?vue&type=template&id=79ae069f&
var pickervue_type_template_id_79ae069f_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.ranged
    ? _c(
        "iw-input",
        _vm._b(
          {
            directives: [
              {
                name: "clickoutside",
                rawName: "v-clickoutside",
                value: _vm.handleClose,
                expression: "handleClose"
              }
            ],
            ref: "reference",
            staticClass: "iw-date-editor",
            class: "iw-date-editor--" + _vm.type,
            attrs: {
              readonly:
                !_vm.editable ||
                _vm.readonly ||
                _vm.type === "dates" ||
                _vm.type === "week",
              disabled: _vm.pickerDisabled,
              size: _vm.pickerSize,
              name: _vm.name,
              placeholder: _vm.placeholder,
              value: _vm.displayValue,
              "validate-event": false
            },
            on: {
              focus: _vm.handleFocus,
              input: function(value) {
                return (_vm.userInput = value)
              },
              change: _vm.handleChange
            },
            nativeOn: {
              keydown: function($event) {
                return _vm.handleKeydown($event)
              },
              mouseenter: function($event) {
                return _vm.handleMouseEnter($event)
              },
              mouseleave: function($event) {
                _vm.showClose = false
              }
            }
          },
          "iw-input",
          _vm.firstInputId,
          false
        ),
        [
          _vm.haveTrigger
            ? _c("i", {
                staticClass: "iw-input__icon",
                class: [_vm.showClose ? "" + _vm.clearIcon : _vm.triggerClass],
                attrs: { slot: "suffix" },
                on: { click: _vm.handleClickIcon },
                slot: "suffix"
              })
            : _vm._e()
        ]
      )
    : _c(
        "div",
        {
          directives: [
            {
              name: "clickoutside",
              rawName: "v-clickoutside",
              value: _vm.handleClose,
              expression: "handleClose"
            }
          ],
          ref: "reference",
          staticClass: "iw-date-editor iw-range-editor iw-input__inner",
          class: [
            "iw-date-editor--" + _vm.type,
            _vm.pickerSize ? "iw-range-editor--" + _vm.pickerSize : "",
            _vm.pickerDisabled ? "is-disabled" : "",
            _vm.pickerVisible ? "is-active" : ""
          ],
          on: {
            click: _vm.handleRangeClick,
            mouseenter: _vm.handleMouseEnter,
            mouseleave: function($event) {
              _vm.showClose = false
            },
            keydown: _vm.handleKeydown
          }
        },
        [
          _c(
            "input",
            _vm._b(
              {
                staticClass: "iw-range-input",
                attrs: {
                  placeholder: _vm.startPlaceholder,
                  disabled: _vm.pickerDisabled,
                  readonly: !_vm.editable || _vm.readonly,
                  name: _vm.name && _vm.name[0],
                  autocomplete: "off"
                },
                domProps: { value: _vm.displayValue && _vm.displayValue[0] },
                on: {
                  input: _vm.handleStartInput,
                  change: _vm.handleStartChange,
                  focus: _vm.handleFocus
                }
              },
              "input",
              _vm.firstInputId,
              false
            )
          ),
          _vm._t("range-separator", [
            _c("span", { staticClass: "iw-range-separator" }, [
              _vm._v(_vm._s(_vm.rangeSeparator))
            ])
          ]),
          _c(
            "input",
            _vm._b(
              {
                staticClass: "iw-range-input",
                attrs: {
                  placeholder: _vm.endPlaceholder,
                  disabled: _vm.pickerDisabled,
                  readonly: !_vm.editable || _vm.readonly,
                  name: _vm.name && _vm.name[1],
                  autocomplete: "off"
                },
                domProps: { value: _vm.displayValue && _vm.displayValue[1] },
                on: {
                  input: _vm.handleEndInput,
                  change: _vm.handleEndChange,
                  focus: _vm.handleFocus
                }
              },
              "input",
              _vm.secondInputId,
              false
            )
          ),
          _vm.haveTrigger
            ? _c("i", {
                staticClass: "iw-input__icon iw-range__close-icon",
                class: [_vm.showClose ? "" + _vm.clearIcon : _vm.triggerClass],
                on: { click: _vm.handleClickIcon }
              })
            : _vm._e()
        ],
        2
      )
}
var pickervue_type_template_id_79ae069f_staticRenderFns = []
pickervue_type_template_id_79ae069f_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/picker.vue?vue&type=template&id=79ae069f&

// CONCATENATED MODULE: ./src/utils/date-util.js


var fecha = external_vue_default.a.prototype.$isServer ? function () {} : __webpack_require__(8);
if (!fecha || typeof fecha.format !== 'function') {
  try {
    fecha = window.fecha;
  } catch (e) {
    //
  }
}

var weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

var newArray = function newArray(start, end) {
  var result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

var date_util_getI18nSettings = function getI18nSettings() {
  return {
    dayNamesShort: weeks.map(function (week) {
      return locale_t('iw.datepicker.weeks.' + week);
    }),
    dayNames: weeks.map(function (week) {
      return locale_t('iw.datepicker.weeks.' + week);
    }),
    monthNamesShort: months.map(function (month) {
      return locale_t('iw.datepicker.months.' + month);
    }),
    monthNames: months.map(function (month, index) {
      return locale_t('iw.datepicker.month' + (index + 1));
    }),
    amPm: ['am', 'pm']
  };
};

var toDate = function toDate(date) {
  return isDate(date) ? new Date(date) : null;
};

var isDate = function isDate(date) {
  if (date === null || date === undefined) return false;
  if (isNaN(new Date(date).getTime())) return false;
  if (Array.isArray(date)) return false; // deal with `new Date([ new Date() ]) -> new Date()`
  return true;
};

var isDateObject = function isDateObject(val) {
  return val instanceof Date;
};

var formatDate = function formatDate(date, format) {
  date = toDate(date);
  if (!date) return '';
  return fecha.format(date, format || 'yyyy-MM-dd', date_util_getI18nSettings());
};

var parseDate = function parseDate(string, format) {
  return fecha.parse(string, format || 'yyyy-MM-dd', date_util_getI18nSettings());
};

var getDayCountOfMonth = function getDayCountOfMonth(year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
};

var getDayCountOfYear = function getDayCountOfYear(year) {
  var isLeapYear = year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
  return isLeapYear ? 366 : 365;
};

var getFirstDayOfMonth = function getFirstDayOfMonth(date) {
  var temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
};

// see: https://stackoverflow.com/questions/3674539/incrementing-a-date-in-javascript
// {prev, next} Date should work for Daylight Saving Time
// Adding 24 * 60 * 60 * 1000 does not work in the above scenario
var prevDate = function prevDate(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

var nextDate = function nextDate(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

var getStartDateOfMonth = function getStartDateOfMonth(year, month) {
  var result = new Date(year, month, 1);
  var day = result.getDay();

  if (day === 0) {
    return prevDate(result, 7);
  } else {
    return prevDate(result, day);
  }
};

var getWeekNumber = function getWeekNumber(src) {
  if (!isDate(src)) return null;
  var date = new Date(src.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
  // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

var getRangeHours = function getRangeHours(ranges) {
  var hours = [];
  var disabledHours = [];

  (ranges || []).forEach(function (range) {
    var value = range.map(function (date) {
      return date.getHours();
    });

    disabledHours = disabledHours.concat(newArray(value[0], value[1]));
  });

  if (disabledHours.length) {
    for (var i = 0; i < 24; i++) {
      hours[i] = disabledHours.indexOf(i) === -1;
    }
  } else {
    for (var _i = 0; _i < 24; _i++) {
      hours[_i] = false;
    }
  }

  return hours;
};

var getPrevMonthLastDays = function getPrevMonthLastDays(date, amount) {
  if (amount <= 0) return [];
  var temp = new Date(date.getTime());
  temp.setDate(0);
  var lastDay = temp.getDate();
  return date_util_range(amount).map(function (_, index) {
    return lastDay - (amount - index - 1);
  });
};

var getMonthDays = function getMonthDays(date) {
  var temp = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var days = temp.getDate();
  return date_util_range(days).map(function (_, index) {
    return index + 1;
  });
};

function setRangeData(arr, start, end, value) {
  for (var i = start; i < end; i++) {
    arr[i] = value;
  }
}

var getRangeMinutes = function getRangeMinutes(ranges, hour) {
  var minutes = new Array(60);

  if (ranges.length > 0) {
    ranges.forEach(function (range) {
      var start = range[0];
      var end = range[1];
      var startHour = start.getHours();
      var startMinute = start.getMinutes();
      var endHour = end.getHours();
      var endMinute = end.getMinutes();
      if (startHour === hour && endHour !== hour) {
        setRangeData(minutes, startMinute, 60, true);
      } else if (startHour === hour && endHour === hour) {
        setRangeData(minutes, startMinute, endMinute + 1, true);
      } else if (startHour !== hour && endHour === hour) {
        setRangeData(minutes, 0, endMinute + 1, true);
      } else if (startHour < hour && endHour > hour) {
        setRangeData(minutes, 0, 60, true);
      }
    });
  } else {
    setRangeData(minutes, 0, 60, true);
  }
  return minutes;
};

var date_util_range = function range(n) {
  // see https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
  return Array.apply(null, { length: n }).map(function (_, n) {
    return n;
  });
};

var modifyDate = function modifyDate(date, y, m, d) {
  return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

var modifyTime = function modifyTime(date, h, m, s) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds());
};

var modifyWithTimeString = function modifyWithTimeString(date, time) {
  if (date == null || !time) {
    return date;
  }
  time = parseDate(time, 'HH:mm:ss');
  return modifyTime(date, time.getHours(), time.getMinutes(), time.getSeconds());
};

var clearTime = function clearTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

var clearMilliseconds = function clearMilliseconds(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
};

var limitTimeRange = function limitTimeRange(date, ranges) {
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'HH:mm:ss';

  // TODO: refactory a more elegant solution
  if (ranges.length === 0) return date;
  var normalizeDate = function normalizeDate(date) {
    return fecha.parse(fecha.format(date, format), format);
  };
  var ndate = normalizeDate(date);
  var nranges = ranges.map(function (range) {
    return range.map(normalizeDate);
  });
  if (nranges.some(function (nrange) {
    return ndate >= nrange[0] && ndate <= nrange[1];
  })) return date;

  var minDate = nranges[0][0];
  var maxDate = nranges[0][0];

  nranges.forEach(function (nrange) {
    minDate = new Date(Math.min(nrange[0], minDate));
    maxDate = new Date(Math.max(nrange[1], minDate));
  });

  var ret = ndate < minDate ? minDate : maxDate;
  // preserve Year/Month/Date
  return modifyDate(ret, date.getFullYear(), date.getMonth(), date.getDate());
};

var timeWithinRange = function timeWithinRange(date, selectableRange, format) {
  var limitedDate = limitTimeRange(date, selectableRange, format);
  return limitedDate.getTime() === date.getTime();
};

var changeYearMonthAndClampDate = function changeYearMonthAndClampDate(date, year, month) {
  // clamp date to the number of days in `year`, `month`
  // eg: (2010-1-31, 2010, 2) => 2010-2-28
  var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

var date_util_prevMonth = function prevMonth(date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  return month === 0 ? changeYearMonthAndClampDate(date, year - 1, 11) : changeYearMonthAndClampDate(date, year, month - 1);
};

var date_util_nextMonth = function nextMonth(date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  return month === 11 ? changeYearMonthAndClampDate(date, year + 1, 0) : changeYearMonthAndClampDate(date, year, month + 1);
};

var date_util_prevYear = function prevYear(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var year = date.getFullYear();
  var month = date.getMonth();
  return changeYearMonthAndClampDate(date, year - amount, month);
};

var date_util_nextYear = function nextYear(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var year = date.getFullYear();
  var month = date.getMonth();
  return changeYearMonthAndClampDate(date, year + amount, month);
};

var extractDateFormat = function extractDateFormat(format) {
  return format.replace(/\W?m{1,2}|\W?ZZ/g, '').replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '').trim();
};

var extractTimeFormat = function extractTimeFormat(format) {
  return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, '').trim();
};

var validateRangeInOneMonth = function validateRangeInOneMonth(start, end) {
  return start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/picker.vue?vue&type=script&lang=js&
function pickervue_type_script_lang_js_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var NewPopper = {
  props: {
    appendToBody: vue_popper.props.appendToBody,
    offset: vue_popper.props.offset,
    boundariesPadding: vue_popper.props.boundariesPadding,
    arrowOffset: vue_popper.props.arrowOffset
  },
  methods: vue_popper.methods,
  data: function data() {
    return merge({ visibleArrow: true }, vue_popper.data);
  },

  beforeDestroy: vue_popper.beforeDestroy
};

var DEFAULT_FORMATS = {
  date: 'yyyy-MM-dd',
  month: 'yyyy-MM',
  quarter: 'yyyy-Q',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
  week: 'yyyywWW',
  timerange: 'HH:mm:ss',
  daterange: 'yyyy-MM-dd',
  monthrange: 'yyyy-MM',
  quarterrange: 'yyyy-Q',
  datetimerange: 'yyyy-MM-dd HH:mm:ss',
  year: 'yyyy'
};
var HAVE_TRIGGER_TYPES = ['date', 'datetime', 'time', 'time-select', 'week', 'month', 'quarter', 'year', 'daterange', 'monthrange', 'quarterrange', 'timerange', 'datetimerange', 'dates'];
var pickervue_type_script_lang_js_DATE_FORMATTER = function DATE_FORMATTER(value, format) {
  if (format === 'timestamp') return value.getTime();
  return formatDate(value, format);
};
var pickervue_type_script_lang_js_DATE_PARSER = function DATE_PARSER(text, format) {
  if (format === 'timestamp') return new Date(Number(text));
  return parseDate(text, format);
};
var RANGE_FORMATTER = function RANGE_FORMATTER(value, format) {
  if (Array.isArray(value) && value.length === 2) {
    var start = value[0];
    var end = value[1];

    if (start && end) {
      return [pickervue_type_script_lang_js_DATE_FORMATTER(start, format), pickervue_type_script_lang_js_DATE_FORMATTER(end, format)];
    }
  }
  return '';
};
var RANGE_PARSER = function RANGE_PARSER(array, format, separator) {
  if (!Array.isArray(array)) {
    array = array.split(separator);
  }
  if (array.length === 2) {
    var range1 = array[0];
    var range2 = array[1];

    return [pickervue_type_script_lang_js_DATE_PARSER(range1, format), pickervue_type_script_lang_js_DATE_PARSER(range2, format)];
  }
  return [];
};
var TYPE_VALUE_RESOLVER_MAP = {
  default: {
    formatter: function formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser: function parser(text) {
      if (text === undefined || text === '') return null;
      return text;
    }
  },
  week: {
    formatter: function formatter(value, format) {
      var week = getWeekNumber(value);
      var month = value.getMonth();
      var trueDate = new Date(value);
      if (week === 1 && month === 11) {
        trueDate.setHours(0, 0, 0, 0);
        trueDate.setDate(trueDate.getDate() + 3 - (trueDate.getDay() + 6) % 7);
      }
      var date = formatDate(trueDate, format);

      date = /WW/.test(date) ? date.replace(/WW/, week < 10 ? '0' + week : week) : date.replace(/W/, week);
      return date;
    },
    parser: function parser(text, format) {
      // parse as if a normal date
      return TYPE_VALUE_RESOLVER_MAP.date.parser(text, format);
    }
  },
  date: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  datetime: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  daterange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  monthrange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  quarterrange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  datetimerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  timerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  time: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  month: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  quarter: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  year: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  number: {
    formatter: function formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser: function parser(text) {
      var result = Number(text);

      if (!isNaN(text)) {
        return result;
      } else {
        return null;
      }
    }
  },
  dates: {
    formatter: function formatter(value, format) {
      return value.map(function (date) {
        return pickervue_type_script_lang_js_DATE_FORMATTER(date, format);
      });
    },
    parser: function parser(value, format) {
      return (typeof value === 'string' ? value.split(', ') : value).map(function (date) {
        return date instanceof Date ? date : pickervue_type_script_lang_js_DATE_PARSER(date, format);
      });
    }
  }
};
var PLACEMENT_MAP = {
  left: 'bottom-start',
  center: 'bottom',
  right: 'bottom-end'
};

var parseAsFormatAndType = function parseAsFormatAndType(value, customFormat, type) {
  var rangeSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-';

  if (!value) return null;
  var parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).parser;
  var format = customFormat || DEFAULT_FORMATS[type];
  return parser(value, format, rangeSeparator);
};

var formatAsFormatAndType = function formatAsFormatAndType(value, customFormat, type) {
  if (!value) return null;
  var formatter = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).formatter;
  var format = customFormat || DEFAULT_FORMATS[type];
  return formatter(value, format);
};

/*
 * Considers:
 *   1. Date object
 *   2. date string
 *   3. array of 1 or 2
 */
var pickervue_type_script_lang_js_valueEquals = function valueEquals(a, b) {
  // considers Date object and string
  var dateEquals = function dateEquals(a, b) {
    var aIsDate = a instanceof Date;
    var bIsDate = b instanceof Date;
    if (aIsDate && bIsDate) {
      return a.getTime() === b.getTime();
    }
    if (!aIsDate && !bIsDate) {
      return a === b;
    }
    return false;
  };

  var aIsArray = a instanceof Array;
  var bIsArray = b instanceof Array;
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every(function (item, index) {
      return dateEquals(item, b[index]);
    });
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b);
  }
  return false;
};

var isString = function isString(val) {
  return typeof val === 'string' || val instanceof String;
};

var pickervue_type_script_lang_js_validator = function validator(val) {
  // either: String, Array of String, null / undefined
  return val === null || val === undefined || isString(val) || Array.isArray(val) && val.length === 2 && val.every(isString);
};

/* harmony default export */ var pickervue_type_script_lang_js_ = ({

  components: { IwInput: input },

  directives: { Clickoutside: clickoutside },
  mixins: [emitter, NewPopper],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    size: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: ''
    },
    valueFormat: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    startPlaceholder: {
      type: String,
      default: ''
    },
    endPlaceholder: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    clearIcon: {
      type: String,
      default: 'iw-icon-circle-close'
    },
    name: {
      default: '',
      validator: pickervue_type_script_lang_js_validator
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    id: {
      default: '',
      validator: pickervue_type_script_lang_js_validator
    },
    popperClass: {
      type: String,
      default: ''
    },
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    value: {
      type: undefined,
      default: undefined
    },
    defaultValue: {
      type: undefined,
      default: null
    },
    defaultTime: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    rangeSeparator: {
      type: String,
      default: '-'
    },
    pickerOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    unlinkPanels: {
      type: Boolean,
      default: true
    },
    validateEvent: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      pickerVisible: false,
      showClose: false,
      userInput: null,
      valueOnOpen: null, // value when picker opens, used to determine whether to emit change
      unwatchPickerOptions: null
    };
  },


  computed: {
    ranged: function ranged() {
      return this.type.indexOf('range') > -1;
    },
    reference: function reference() {
      var reference = this.$refs.reference;
      return reference.$el || reference;
    },
    refInput: function refInput() {
      if (this.reference) {
        return [].slice.call(this.reference.querySelectorAll('input'));
      }
      return [];
    },
    valueIsEmpty: function valueIsEmpty() {
      var val = this.value;
      if (Array.isArray(val)) {
        for (var i = 0, len = val.length; i < len; i++) {
          if (val[i]) {
            return false;
          }
        }
      } else {
        if (val) {
          return false;
        }
      }
      return true;
    },
    triggerClass: function triggerClass() {
      return this.prefixIcon || (this.type.indexOf('time') !== -1 ? 'iw-icon-time' : 'iw-icon-date');
    },
    selectionMode: function selectionMode() {
      if (this.type === 'week') {
        return 'week';
      } else if (this.type === 'quarter') {
        return 'quarter';
      } else if (this.type === 'month') {
        return 'month';
      } else if (this.type === 'year') {
        return 'year';
      } else if (this.type === 'dates') {
        return 'dates';
      }

      return 'day';
    },
    haveTrigger: function haveTrigger() {
      if (typeof this.showTrigger !== 'undefined') {
        return this.showTrigger;
      }
      return HAVE_TRIGGER_TYPES.indexOf(this.type) !== -1;
    },
    displayValue: function displayValue() {
      var formattedValue = formatAsFormatAndType(this.parsedValue, this.format, this.type, this.rangeSeparator);
      if (Array.isArray(this.userInput)) {
        return [this.userInput[0] || formattedValue && formattedValue[0] || '', this.userInput[1] || formattedValue && formattedValue[1] || ''];
      } else if (this.userInput !== null) {
        return this.userInput;
      } else if (formattedValue) {
        return this.type === 'dates' ? formattedValue.join(', ') : formattedValue;
      } else {
        return '';
      }
    },
    parsedValue: function parsedValue() {
      if (!this.value) return this.value; // component value is not set
      if (this.type === 'time-select') return this.value; // time-select does not require parsing, this might change in next major version

      var valueIsDateObject = isDateObject(this.value) || Array.isArray(this.value) && this.value.every(isDateObject);
      if (valueIsDateObject) {
        return this.value;
      }

      if (this.valueFormat) {
        return parseAsFormatAndType(this.value, this.valueFormat, this.type, this.rangeSeparator) || this.value;
      }

      // NOTE: deal with common but incorrect usage, should remove in next major version
      // user might provide string / timestamp without value-format, coerce them into date (or array of date)
      return Array.isArray(this.value) ? this.value.map(function (val) {
        return new Date(val);
      }) : new Date(this.value);
    },
    _iwFormItemSize: function _iwFormItemSize() {
      return (this.iwFormItem || {}).iwFormItemSize;
    },
    pickerSize: function pickerSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    pickerDisabled: function pickerDisabled() {
      return this.disabled || (this.iwForm || {}).disabled;
    },
    firstInputId: function firstInputId() {
      var obj = {};
      var id = void 0;
      if (this.ranged) {
        id = this.id && this.id[0];
      } else {
        id = this.id;
      }
      if (id) obj.id = id;
      return obj;
    },
    secondInputId: function secondInputId() {
      var obj = {};
      var id = void 0;
      if (this.ranged) {
        id = this.id && this.id[1];
      }
      if (id) obj.id = id;
      return obj;
    }
  },

  watch: {
    pickerVisible: function pickerVisible(val) {
      if (this.readonly || this.pickerDisabled) return;
      if (val) {
        this.showPicker();
        this.valueOnOpen = Array.isArray(this.value) ? [].concat(pickervue_type_script_lang_js_toConsumableArray(this.value)) : this.value;
      } else {
        this.hidePicker();
        this.emitChange(this.value);
        this.userInput = null;
        if (this.validateEvent) {
          this.dispatch('IwFormItem', 'iw.form.blur');
        }
        this.$emit('blur', this);
        this.blur();
      }
    },

    parsedValue: {
      immediate: true,
      handler: function handler(val) {
        if (this.picker) {
          this.picker.value = val;
        }
      }
    },
    defaultValue: function defaultValue(val) {
      // NOTE: should eventually move to jsx style picker + panel ?
      if (this.picker) {
        this.picker.defaultValue = val;
      }
    },
    value: function value(val, oldVal) {
      if (!pickervue_type_script_lang_js_valueEquals(val, oldVal) && !this.pickerVisible && this.validateEvent) {
        this.dispatch('IwFormItem', 'iw.form.change', val);
      }
    }
  },

  created: function created() {
    // vue-popper
    this.popperOptions = {
      boundariesPadding: 0,
      gpuAcceleration: false
    };
    this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;

    this.$on('fieldReset', this.handleFieldReset);
  },


  methods: {
    focus: function focus() {
      if (!this.ranged) {
        this.$refs.reference.focus();
      } else {
        this.handleFocus();
      }
    },
    blur: function blur() {
      this.refInput.forEach(function (input) {
        return input.blur();
      });
    },


    // {parse, formatTo} Value deals maps component value with internal Date
    parseValue: function parseValue(value) {
      var isParsed = isDateObject(value) || Array.isArray(value) && value.every(isDateObject);
      if (this.valueFormat && !isParsed) {
        return parseAsFormatAndType(value, this.valueFormat, this.type, this.rangeSeparator) || value;
      } else {
        return value;
      }
    },
    formatToValue: function formatToValue(date) {
      var isFormattable = isDateObject(date) || Array.isArray(date) && date.every(isDateObject);
      if (this.valueFormat && isFormattable) {
        return formatAsFormatAndType(date, this.valueFormat, this.type, this.rangeSeparator);
      } else {
        return date;
      }
    },


    // {parse, formatTo} String deals with user input
    parseString: function parseString(value) {
      var type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return parseAsFormatAndType(value, this.format, type);
    },
    formatToString: function formatToString(value) {
      var type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return formatAsFormatAndType(value, this.format, type);
    },
    handleMouseEnter: function handleMouseEnter() {
      if (this.readonly || this.pickerDisabled) return;
      if (!this.valueIsEmpty && this.clearable) {
        this.showClose = true;
      }
    },
    handleChange: function handleChange() {
      if (this.userInput) {
        var value = this.parseString(this.displayValue);
        if (value) {
          this.picker.value = value;
          if (this.isValidValue(value)) {
            this.emitInput(value);
            this.userInput = null;
          }
        }
      }
      if (this.userInput === '') {
        this.emitInput(null);
        this.emitChange(null);
        this.userInput = null;
      }
    },
    handleStartInput: function handleStartInput(event) {
      if (this.userInput) {
        this.userInput = [event.target.value, this.userInput[1]];
      } else {
        this.userInput = [event.target.value, null];
      }
    },
    handleEndInput: function handleEndInput(event) {
      if (this.userInput) {
        this.userInput = [this.userInput[0], event.target.value];
      } else {
        this.userInput = [null, event.target.value];
      }
    },
    handleStartChange: function handleStartChange(event) {
      var value = this.parseString(this.userInput && this.userInput[0]);
      if (value) {
        this.userInput = [this.formatToString(value), this.displayValue[1]];
        var newValue = [value, this.picker.value && this.picker.value[1]];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },
    handleEndChange: function handleEndChange(event) {
      var value = this.parseString(this.userInput && this.userInput[1]);
      if (value) {
        this.userInput = [this.displayValue[0], this.formatToString(value)];
        var newValue = [this.picker.value && this.picker.value[0], value];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },
    handleClickIcon: function handleClickIcon(event) {
      if (this.readonly || this.pickerDisabled) return;
      if (this.showClose) {
        this.valueOnOpen = this.value;
        event.stopPropagation();
        this.emitInput(null);
        this.emitChange(null);
        this.showClose = false;
        if (this.picker && typeof this.picker.handleClear === 'function') {
          this.picker.handleClear();
        }
      } else {
        this.pickerVisible = !this.pickerVisible;
      }
    },
    handleClose: function handleClose() {
      if (!this.pickerVisible) return;
      this.pickerVisible = false;

      if (this.type === 'dates') {
        // restore to former value
        var oldValue = parseAsFormatAndType(this.valueOnOpen, this.valueFormat, this.type, this.rangeSeparator) || this.valueOnOpen;
        this.emitInput(oldValue);
      }
    },
    handleFieldReset: function handleFieldReset(initialValue) {
      this.userInput = initialValue === '' ? null : initialValue;
    },
    handleFocus: function handleFocus() {
      var type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },
    handleKeydown: function handleKeydown(event) {
      var _this = this;

      var keyCode = event.keyCode;

      // ESC
      if (keyCode === 27) {
        this.pickerVisible = false;
        event.stopPropagation();
        return;
      }

      // Tab
      if (keyCode === 9) {
        if (!this.ranged) {
          this.handleChange();
          this.pickerVisible = this.picker.visible = false;
          this.blur();
          event.stopPropagation();
        } else {
          // user may change focus between two input
          setTimeout(function () {
            if (_this.refInput.indexOf(document.activeElement) === -1) {
              _this.pickerVisible = false;
              _this.blur();
              event.stopPropagation();
            }
          }, 0);
        }
        return;
      }

      // Enter
      if (keyCode === 13) {
        if (this.userInput === '' || this.isValidValue(this.parseString(this.displayValue))) {
          this.handleChange();
          this.pickerVisible = this.picker.visible = false;
          this.blur();
        }
        event.stopPropagation();
        return;
      }

      // if user is typing, do not let picker handle key input
      if (this.userInput) {
        event.stopPropagation();
        return;
      }

      // delegate other keys to panel
      if (this.picker && this.picker.handleKeydown) {
        this.picker.handleKeydown(event);
      }
    },
    handleRangeClick: function handleRangeClick() {
      var type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },
    hidePicker: function hidePicker() {
      if (this.picker) {
        this.picker.resetView && this.picker.resetView();
        this.pickerVisible = this.picker.visible = false;
        this.destroyPopper();
      }
    },
    showPicker: function showPicker() {
      var _this2 = this;

      if (this.$isServer) return;
      if (!this.picker) {
        this.mountPicker();
      }
      this.pickerVisible = this.picker.visible = true;

      this.updatePopper();

      this.picker.value = this.parsedValue;
      this.picker.resetView && this.picker.resetView();

      this.$nextTick(function () {
        _this2.picker.adjustSpinners && _this2.picker.adjustSpinners();
      });
    },
    mountPicker: function mountPicker() {
      var _this3 = this;

      this.picker = new external_vue_default.a(this.panel).$mount();
      this.picker.defaultValue = this.defaultValue;
      this.picker.defaultTime = this.defaultTime;
      this.picker.popperClass = this.popperClass;
      this.popperElm = this.picker.$el;
      this.picker.width = this.reference.getBoundingClientRect().width;
      this.picker.showTime = this.type === 'datetime' || this.type === 'datetimerange';
      this.picker.selectionMode = this.selectionMode;
      this.picker.unlinkPanels = this.unlinkPanels;
      this.picker.size = this.pickerSize;
      this.picker.arrowControl = this.arrowControl || this.timeArrowControl || false;
      this.$watch('format', function (format) {
        _this3.picker.format = format;
      });

      var updateOptions = function updateOptions() {
        var options = _this3.pickerOptions;

        if (options && options.selectableRange) {
          var ranges = options.selectableRange;
          var parser = TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
          var format = DEFAULT_FORMATS.timerange;

          ranges = Array.isArray(ranges) ? ranges : [ranges];
          _this3.picker.selectableRange = ranges.map(function (range) {
            return parser(range, format, _this3.rangeSeparator);
          });
        }

        for (var option in options) {
          if (options.hasOwnProperty(option) &&
          // 忽略 time-picker 的该配置项
          option !== 'selectableRange') {
            _this3.picker[option] = options[option];
          }
        }

        // main format must prevail over undocumented pickerOptions.format
        if (_this3.format) {
          _this3.picker.format = _this3.format;
        }
      };
      updateOptions();
      this.unwatchPickerOptions = this.$watch('pickerOptions', function () {
        return updateOptions();
      }, { deep: true });
      this.$el.appendChild(this.picker.$el);
      this.picker.resetView && this.picker.resetView();

      this.picker.$on('dodestroy', this.doDestroy);
      this.picker.$on('pick', function () {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _this3.userInput = null;
        _this3.pickerVisible = _this3.picker.visible = visible;
        _this3.emitInput(date);
        _this3.picker.resetView && _this3.picker.resetView();
      });

      this.picker.$on('select-range', function (start, end, pos) {
        if (_this3.refInput.length === 0) return;
        if (!pos || pos === 'min') {
          _this3.refInput[0].setSelectionRange(start, end);
          _this3.refInput[0].focus();
        } else if (pos === 'max') {
          _this3.refInput[1].setSelectionRange(start, end);
          _this3.refInput[1].focus();
        }
      });
    },
    unmountPicker: function unmountPicker() {
      if (this.picker) {
        this.picker.$destroy();
        this.picker.$off();
        if (typeof this.unwatchPickerOptions === 'function') {
          this.unwatchPickerOptions();
        }
        this.picker.$el.parentNode.removeChild(this.picker.$el);
      }
    },
    emitChange: function emitChange(val) {
      // determine user real change only
      if (!pickervue_type_script_lang_js_valueEquals(val, this.valueOnOpen)) {
        this.$emit('change', val);
        this.valueOnOpen = val;
        if (this.validateEvent) {
          this.dispatch('IwFormItem', 'iw.form.change', val);
        }
      }
    },
    emitInput: function emitInput(val) {
      var formatted = this.formatToValue(val);
      if (!pickervue_type_script_lang_js_valueEquals(this.value, formatted)) {
        this.$emit('input', formatted);
      }
    },
    isValidValue: function isValidValue(value) {
      if (!this.picker) {
        this.mountPicker();
      }
      if (this.picker.isValidValue) {
        return value && this.picker.isValidValue(value);
      } else {
        return true;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pickervue_type_script_lang_js_ = (pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/picker.vue





/* normalize component */

var picker_component = normalizeComponent(
  src_pickervue_type_script_lang_js_,
  pickervue_type_template_id_79ae069f_render,
  pickervue_type_template_id_79ae069f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var picker_api; }
picker_component.options.__file = "packages/date-picker/src/picker.vue"
/* harmony default export */ var picker = (picker_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/date.vue?vue&type=template&id=2440d4ea&
var datevue_type_template_id_2440d4ea_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "iw-zoom-in-top" },
      on: { "after-enter": _vm.handleEnter, "after-leave": _vm.handleLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "iw-picker-panel iw-date-picker iw-popper",
          class: [
            {
              "has-sidebar": _vm.$slots.sidebar || _vm.shortcuts,
              "has-time": _vm.showTime
            },
            _vm.popperClass
          ]
        },
        [
          _c(
            "div",
            { staticClass: "iw-picker-panel__body-wrapper" },
            [
              _vm._t("sidebar"),
              _vm.shortcuts
                ? _c(
                    "div",
                    { staticClass: "iw-picker-panel__sidebar" },
                    _vm._l(_vm.shortcuts, function(shortcut, key) {
                      return _c(
                        "button",
                        {
                          key: key,
                          staticClass: "iw-picker-panel__shortcut",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.handleShortcutClick(shortcut)
                            }
                          }
                        },
                        [_vm._v(_vm._s(shortcut.text))]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _c("div", { staticClass: "iw-picker-panel__body" }, [
                _vm.showTime
                  ? _c("div", { staticClass: "iw-date-picker__time-header" }, [
                      _c(
                        "span",
                        { staticClass: "iw-date-picker__editor-wrap" },
                        [
                          _c("iw-input", {
                            attrs: {
                              placeholder: _vm.t("iw.datepicker.selectDate"),
                              value: _vm.visibleDate,
                              size: "small"
                            },
                            on: {
                              input: function(val) {
                                return (_vm.userInputDate = val)
                              },
                              change: _vm.handleVisibleDateChange
                            }
                          })
                        ],
                        1
                      ),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "clickoutside",
                              rawName: "v-clickoutside",
                              value: _vm.handleTimePickClose,
                              expression: "handleTimePickClose"
                            }
                          ],
                          staticClass: "iw-date-picker__editor-wrap"
                        },
                        [
                          _c("iw-input", {
                            ref: "input",
                            attrs: {
                              placeholder: _vm.t("iw.datepicker.selectTime"),
                              value: _vm.visibleTime,
                              size: "small"
                            },
                            on: {
                              focus: function($event) {
                                _vm.timePickerVisible = true
                              },
                              input: function(val) {
                                return (_vm.userInputTime = val)
                              },
                              change: _vm.handleVisibleTimeChange
                            }
                          }),
                          _c("time-picker", {
                            ref: "timepicker",
                            attrs: {
                              "time-arrow-control": _vm.arrowControl,
                              visible: _vm.timePickerVisible
                            },
                            on: {
                              pick: _vm.handleTimePick,
                              mounted: _vm.proxyTimePickerDataProperties
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.currentView !== "time",
                        expression: "currentView !== 'time'"
                      }
                    ],
                    staticClass: "iw-date-picker__header",
                    class: {
                      "iw-date-picker__header--bordered":
                        _vm.currentView === "year" ||
                        _vm.currentView === "month"
                    }
                  },
                  [
                    _c("button", {
                      staticClass:
                        "iw-picker-panel__icon-btn iw-date-picker__prev-btn iw-icon-d-arrow-left",
                      attrs: {
                        "aria-label": _vm.t("iw.datepicker.prevYear"),
                        type: "button"
                      },
                      on: { click: _vm.prevYear }
                    }),
                    _c("button", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "date",
                          expression: "currentView === 'date'"
                        }
                      ],
                      staticClass:
                        "iw-picker-panel__icon-btn iw-date-picker__prev-btn iw-icon-arrow-left",
                      attrs: {
                        "aria-label": _vm.t("iw.datepicker.prevMonth"),
                        type: "button"
                      },
                      on: { click: _vm.prevMonth }
                    }),
                    _c(
                      "span",
                      {
                        staticClass: "iw-date-picker__header-label",
                        attrs: { role: "button" },
                        on: { click: _vm.showYearPicker }
                      },
                      [_vm._v(_vm._s(_vm.yearLabel))]
                    ),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.currentView === "date",
                            expression: "currentView === 'date'"
                          }
                        ],
                        staticClass: "iw-date-picker__header-label",
                        class: { active: _vm.currentView === "month" },
                        attrs: { role: "button" },
                        on: { click: _vm.showMonthPicker }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.t("iw.datepicker.month" + (_vm.month + 1)))
                        )
                      ]
                    ),
                    _c("button", {
                      staticClass:
                        "iw-picker-panel__icon-btn iw-date-picker__next-btn iw-icon-d-arrow-right",
                      attrs: {
                        "aria-label": _vm.t("iw.datepicker.nextYear"),
                        type: "button"
                      },
                      on: { click: _vm.nextYear }
                    }),
                    _c("button", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "date",
                          expression: "currentView === 'date'"
                        }
                      ],
                      staticClass:
                        "iw-picker-panel__icon-btn iw-date-picker__next-btn iw-icon-arrow-right",
                      attrs: {
                        "aria-label": _vm.t("iw.datepicker.nextMonth"),
                        type: "button"
                      },
                      on: { click: _vm.nextMonth }
                    })
                  ]
                ),
                _c(
                  "div",
                  { staticClass: "iw-picker-panel__content" },
                  [
                    _c("date-table", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "date",
                          expression: "currentView === 'date'"
                        }
                      ],
                      attrs: {
                        "selection-mode": _vm.selectionMode,
                        "first-day-of-week": _vm.firstDayOfWeek,
                        value: _vm.value,
                        "default-value": _vm.defaultValue
                          ? new Date(_vm.defaultValue)
                          : null,
                        date: _vm.date,
                        "cell-class-name": _vm.cellClassName,
                        "disabled-date": _vm.disabledDate
                      },
                      on: { pick: _vm.handleDatePick }
                    }),
                    _c("year-table", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "year",
                          expression: "currentView === 'year'"
                        }
                      ],
                      attrs: {
                        value: _vm.value,
                        "default-value": _vm.defaultValue
                          ? new Date(_vm.defaultValue)
                          : null,
                        date: _vm.date,
                        "disabled-date": _vm.disabledDate
                      },
                      on: { pick: _vm.handleYearPick }
                    }),
                    _c("quarter-table", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "quarter",
                          expression: "currentView === 'quarter'"
                        }
                      ],
                      attrs: {
                        value: _vm.value,
                        "default-value": _vm.defaultValue
                          ? new Date(_vm.defaultValue)
                          : null,
                        date: _vm.date,
                        "disabled-date": _vm.disabledDate
                      },
                      on: { pick: _vm.handleMonthPick }
                    }),
                    _c("month-table", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "month",
                          expression: "currentView === 'month'"
                        }
                      ],
                      attrs: {
                        value: _vm.value,
                        "default-value": _vm.defaultValue
                          ? new Date(_vm.defaultValue)
                          : null,
                        date: _vm.date,
                        "disabled-date": _vm.disabledDate
                      },
                      on: { pick: _vm.handleMonthPick }
                    })
                  ],
                  1
                )
              ])
            ],
            2
          ),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.footerVisible && _vm.currentView === "date",
                  expression: "footerVisible && currentView === 'date'"
                }
              ],
              staticClass: "iw-picker-panel__footer"
            },
            [
              _c(
                "iw-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.selectionMode !== "dates",
                      expression: "selectionMode !== 'dates'"
                    }
                  ],
                  staticClass: "iw-picker-panel__link-btn",
                  attrs: { size: "mini", type: "text" },
                  on: { click: _vm.changeToNow }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("iw.datepicker.now")) +
                      "\n      "
                  )
                ]
              ),
              _c(
                "iw-button",
                {
                  staticClass: "iw-picker-panel__link-btn",
                  attrs: { plain: "", size: "mini" },
                  on: { click: _vm.confirm }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("iw.datepicker.confirm")) +
                      "\n      "
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var datevue_type_template_id_2440d4ea_staticRenderFns = []
datevue_type_template_id_2440d4ea_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/date.vue?vue&type=template&id=2440d4ea&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/time.vue?vue&type=template&id=3d939089&
var timevue_type_template_id_3d939089_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "iw-zoom-in-top" },
      on: {
        "after-leave": function($event) {
          _vm.$emit("dodestroy")
        }
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "iw-time-panel iw-popper",
          class: _vm.popperClass
        },
        [
          _c(
            "div",
            {
              staticClass: "iw-time-panel__content",
              class: { "has-seconds": _vm.showSeconds }
            },
            [
              _c("time-spinner", {
                ref: "spinner",
                attrs: {
                  "arrow-control": _vm.useArrow,
                  "show-seconds": _vm.showSeconds,
                  "am-pm-mode": _vm.amPmMode,
                  date: _vm.date
                },
                on: {
                  change: _vm.handleChange,
                  "select-range": _vm.setSelectionRange
                }
              })
            ],
            1
          ),
          _c("div", { staticClass: "iw-time-panel__footer" }, [
            _c(
              "button",
              {
                staticClass: "iw-time-panel__btn cancel",
                attrs: { type: "button" },
                on: { click: _vm.handleCancel }
              },
              [_vm._v(_vm._s(_vm.t("iw.datepicker.cancel")))]
            ),
            _c(
              "button",
              {
                staticClass: "iw-time-panel__btn",
                class: { confirm: !_vm.disabled },
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.handleConfirm()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.t("iw.datepicker.confirm")))]
            )
          ])
        ]
      )
    ]
  )
}
var timevue_type_template_id_3d939089_staticRenderFns = []
timevue_type_template_id_3d939089_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/time.vue?vue&type=template&id=3d939089&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/time-spinner.vue?vue&type=template&id=1facadeb&
var time_spinnervue_type_template_id_1facadeb_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "iw-time-spinner",
      class: { "has-seconds": _vm.showSeconds }
    },
    [
      !_vm.arrowControl
        ? [
            _c(
              "iw-scrollbar",
              {
                ref: "hours",
                staticClass: "iw-time-spinner__wrapper",
                attrs: {
                  "wrap-style": "max-height: inherit;",
                  "view-class": "iw-time-spinner__list",
                  noresize: "",
                  tag: "ul"
                },
                nativeOn: {
                  mouseenter: function($event) {
                    _vm.emitSelectRange("hours")
                  },
                  mousemove: function($event) {
                    _vm.adjustCurrentSpinner("hours")
                  }
                }
              },
              _vm._l(_vm.hoursList, function(disabled, hour) {
                return _c(
                  "li",
                  {
                    key: hour,
                    staticClass: "iw-time-spinner__item",
                    class: { active: hour === _vm.hours, disabled: disabled },
                    on: {
                      click: function($event) {
                        _vm.handleClick("hours", {
                          value: hour,
                          disabled: disabled
                        })
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        ("0" + (_vm.amPmMode ? hour % 12 || 12 : hour)).slice(
                          -2
                        )
                      ) + _vm._s(_vm.amPm(hour))
                    )
                  ]
                )
              }),
              0
            ),
            _c(
              "iw-scrollbar",
              {
                ref: "minutes",
                staticClass: "iw-time-spinner__wrapper",
                attrs: {
                  "wrap-style": "max-height: inherit;",
                  "view-class": "iw-time-spinner__list",
                  noresize: "",
                  tag: "ul"
                },
                nativeOn: {
                  mouseenter: function($event) {
                    _vm.emitSelectRange("minutes")
                  },
                  mousemove: function($event) {
                    _vm.adjustCurrentSpinner("minutes")
                  }
                }
              },
              _vm._l(_vm.minutesList, function(enabled, key) {
                return _c(
                  "li",
                  {
                    key: key,
                    staticClass: "iw-time-spinner__item",
                    class: { active: key === _vm.minutes, disabled: !enabled },
                    on: {
                      click: function($event) {
                        _vm.handleClick("minutes", {
                          value: key,
                          disabled: false
                        })
                      }
                    }
                  },
                  [_vm._v(_vm._s(("0" + key).slice(-2)))]
                )
              }),
              0
            ),
            _c(
              "iw-scrollbar",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showSeconds,
                    expression: "showSeconds"
                  }
                ],
                ref: "seconds",
                staticClass: "iw-time-spinner__wrapper",
                attrs: {
                  "wrap-style": "max-height: inherit;",
                  "view-class": "iw-time-spinner__list",
                  noresize: "",
                  tag: "ul"
                },
                nativeOn: {
                  mouseenter: function($event) {
                    _vm.emitSelectRange("seconds")
                  },
                  mousemove: function($event) {
                    _vm.adjustCurrentSpinner("seconds")
                  }
                }
              },
              _vm._l(60, function(second, key) {
                return _c(
                  "li",
                  {
                    key: key,
                    staticClass: "iw-time-spinner__item",
                    class: { active: key === _vm.seconds },
                    on: {
                      click: function($event) {
                        _vm.handleClick("seconds", {
                          value: key,
                          disabled: false
                        })
                      }
                    }
                  },
                  [_vm._v(_vm._s(("0" + key).slice(-2)))]
                )
              }),
              0
            )
          ]
        : _vm._e(),
      _vm.arrowControl
        ? [
            _c(
              "div",
              {
                staticClass: "iw-time-spinner__wrapper is-arrow",
                on: {
                  mouseenter: function($event) {
                    _vm.emitSelectRange("hours")
                  }
                }
              },
              [
                _c("i", {
                  directives: [
                    {
                      name: "repeat-click",
                      rawName: "v-repeat-click",
                      value: _vm.decrease,
                      expression: "decrease"
                    }
                  ],
                  staticClass: "iw-time-spinner__arrow iw-icon-arrow-up"
                }),
                _c("i", {
                  directives: [
                    {
                      name: "repeat-click",
                      rawName: "v-repeat-click",
                      value: _vm.increase,
                      expression: "increase"
                    }
                  ],
                  staticClass: "iw-time-spinner__arrow iw-icon-arrow-down"
                }),
                _c(
                  "ul",
                  { ref: "hours", staticClass: "iw-time-spinner__list" },
                  _vm._l(_vm.arrowHourList, function(hour, key) {
                    return _c(
                      "li",
                      {
                        key: key,
                        staticClass: "iw-time-spinner__item",
                        class: {
                          active: hour === _vm.hours,
                          disabled: _vm.hoursList[hour]
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(
                            hour === undefined
                              ? ""
                              : (
                                  "0" + (_vm.amPmMode ? hour % 12 || 12 : hour)
                                ).slice(-2) + _vm.amPm(hour)
                          )
                        )
                      ]
                    )
                  }),
                  0
                )
              ]
            ),
            _c(
              "div",
              {
                staticClass: "iw-time-spinner__wrapper is-arrow",
                on: {
                  mouseenter: function($event) {
                    _vm.emitSelectRange("minutes")
                  }
                }
              },
              [
                _c("i", {
                  directives: [
                    {
                      name: "repeat-click",
                      rawName: "v-repeat-click",
                      value: _vm.decrease,
                      expression: "decrease"
                    }
                  ],
                  staticClass: "iw-time-spinner__arrow iw-icon-arrow-up"
                }),
                _c("i", {
                  directives: [
                    {
                      name: "repeat-click",
                      rawName: "v-repeat-click",
                      value: _vm.increase,
                      expression: "increase"
                    }
                  ],
                  staticClass: "iw-time-spinner__arrow iw-icon-arrow-down"
                }),
                _c(
                  "ul",
                  { ref: "minutes", staticClass: "iw-time-spinner__list" },
                  _vm._l(_vm.arrowMinuteList, function(minute, key) {
                    return _c(
                      "li",
                      {
                        key: key,
                        staticClass: "iw-time-spinner__item",
                        class: { active: minute === _vm.minutes }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              minute === undefined
                                ? ""
                                : ("0" + minute).slice(-2)
                            ) +
                            "\n        "
                        )
                      ]
                    )
                  }),
                  0
                )
              ]
            ),
            _vm.showSeconds
              ? _c(
                  "div",
                  {
                    staticClass: "iw-time-spinner__wrapper is-arrow",
                    on: {
                      mouseenter: function($event) {
                        _vm.emitSelectRange("seconds")
                      }
                    }
                  },
                  [
                    _c("i", {
                      directives: [
                        {
                          name: "repeat-click",
                          rawName: "v-repeat-click",
                          value: _vm.decrease,
                          expression: "decrease"
                        }
                      ],
                      staticClass: "iw-time-spinner__arrow iw-icon-arrow-up"
                    }),
                    _c("i", {
                      directives: [
                        {
                          name: "repeat-click",
                          rawName: "v-repeat-click",
                          value: _vm.increase,
                          expression: "increase"
                        }
                      ],
                      staticClass: "iw-time-spinner__arrow iw-icon-arrow-down"
                    }),
                    _c(
                      "ul",
                      { ref: "seconds", staticClass: "iw-time-spinner__list" },
                      _vm._l(_vm.arrowSecondList, function(second, key) {
                        return _c(
                          "li",
                          {
                            key: key,
                            staticClass: "iw-time-spinner__item",
                            class: { active: second === _vm.seconds }
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(
                                  second === undefined
                                    ? ""
                                    : ("0" + second).slice(-2)
                                ) +
                                "\n        "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              : _vm._e()
          ]
        : _vm._e()
    ],
    2
  )
}
var time_spinnervue_type_template_id_1facadeb_staticRenderFns = []
time_spinnervue_type_template_id_1facadeb_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/basic/time-spinner.vue?vue&type=template&id=1facadeb&

// CONCATENATED MODULE: ./src/directives/repeat-click.js


/* harmony default export */ var repeat_click = ({
  bind: function bind(el, binding, vnode) {
    var interval = null;
    var startTime = void 0;
    var handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    var clear = function clear() {
      if (Date.now() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    on(el, 'mousedown', function (e) {
      if (e.button !== 0) return;
      startTime = Date.now();
      once(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/time-spinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var time_spinnervue_type_script_lang_js_ = ({
  components: { IwScrollbar: scrollbar },

  directives: {
    repeatClick: repeat_click
  },

  props: {
    date: {
      type: [Object, String, Date],
      default: function _default() {
        return '';
      }
    },
    defaultValue: {
      type: [Object, String],
      default: function _default() {
        return {};
      }
    }, // reserved for future use
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: {
      type: Boolean,
      default: false
    },
    amPmMode: {
      type: String,
      default: '' // 'a': am/pm; 'A': AM/PM
    }
  },

  data: function data() {
    return {
      selectableRange: [],
      currentScrollbar: null
    };
  },


  computed: {
    hours: function hours() {
      return this.date.getHours();
    },
    minutes: function minutes() {
      return this.date.getMinutes();
    },
    seconds: function seconds() {
      return this.date.getSeconds();
    },
    hoursList: function hoursList() {
      return getRangeHours(this.selectableRange);
    },
    minutesList: function minutesList() {
      return getRangeMinutes(this.selectableRange, this.hours);
    },
    arrowHourList: function arrowHourList() {
      var hours = this.hours;
      return [hours > 0 ? hours - 1 : undefined, hours, hours < 23 ? hours + 1 : undefined];
    },
    arrowMinuteList: function arrowMinuteList() {
      var minutes = this.minutes;
      return [minutes > 0 ? minutes - 1 : undefined, minutes, minutes < 59 ? minutes + 1 : undefined];
    },
    arrowSecondList: function arrowSecondList() {
      var seconds = this.seconds;
      return [seconds > 0 ? seconds - 1 : undefined, seconds, seconds < 59 ? seconds + 1 : undefined];
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      !_this.arrowControl && _this.bindScrollEvent();
    });
  },


  methods: {
    increase: function increase() {
      this.scrollDown(1);
    },
    decrease: function decrease() {
      this.scrollDown(-1);
    },
    modifyDateField: function modifyDateField(type, value) {
      switch (type) {
        case 'hours':
          this.$emit('change', modifyTime(this.date, value, this.minutes, this.seconds));break;
        case 'minutes':
          this.$emit('change', modifyTime(this.date, this.hours, value, this.seconds));break;
        case 'seconds':
          this.$emit('change', modifyTime(this.date, this.hours, this.minutes, value));break;
      }
    },
    handleClick: function handleClick(type, _ref) {
      var value = _ref.value,
          disabled = _ref.disabled;

      if (!disabled) {
        this.modifyDateField(type, value);
        this.emitSelectRange(type);
        this.adjustSpinner(type, value);
      }
    },
    emitSelectRange: function emitSelectRange(type) {
      if (type === 'hours') {
        this.$emit('select-range', 0, 2);
      } else if (type === 'minutes') {
        this.$emit('select-range', 3, 5);
      } else if (type === 'seconds') {
        this.$emit('select-range', 6, 8);
      }
      this.currentScrollbar = type;
    },
    bindScrollEvent: function bindScrollEvent() {
      var _this2 = this;

      var bindFuntion = function bindFuntion(type) {
        _this2.$refs[type].wrap.onscroll = function (e) {
          // TODO: scroll is emitted when set scrollTop programatically
          // should find better solutions in the future!
          _this2.handleScroll(type, e);
        };
      };
      bindFuntion('hours');
      bindFuntion('minutes');
      bindFuntion('seconds');
    },
    handleScroll: function handleScroll(type) {
      var value = Math.min(Math.round((this.$refs[type].wrap.scrollTop - (this.scrollBarHeight(type) * 0.5 - 10) / this.typeItemHeight(type) + 3) / this.typeItemHeight(type)), type === 'hours' ? 23 : 59);
      this.modifyDateField(type, value);
    },


    // NOTE: used by datetime / date-range panel
    //       renamed from adjustScrollTop
    //       should try to refactory it
    adjustSpinners: function adjustSpinners() {
      this.adjustSpinner('hours', this.hours);
      this.adjustSpinner('minutes', this.minutes);
      this.adjustSpinner('seconds', this.seconds);
    },
    adjustCurrentSpinner: function adjustCurrentSpinner(type) {
      this.adjustSpinner(type, this[type]);
    },
    adjustSpinner: function adjustSpinner(type, value) {
      if (this.arrowControl) return;
      var iw = this.$refs[type].wrap;
      if (iw) {
        iw.scrollTop = Math.max(0, value * this.typeItemHeight(type));
      }
    },
    scrollDown: function scrollDown(step) {
      if (!this.currentScrollbar) {
        this.emitSelectRange('hours');
      }

      var label = this.currentScrollbar;
      var hoursList = this.hoursList;
      var now = this[label];

      if (this.currentScrollbar === 'hours') {
        var total = Math.abs(step);
        step = step > 0 ? 1 : -1;
        var length = hoursList.length;
        while (length-- && total) {
          now = (now + step + hoursList.length) % hoursList.length;
          if (hoursList[now]) {
            continue;
          }
          total--;
        }
        if (hoursList[now]) return;
      } else {
        now = (now + step + 60) % 60;
      }

      this.modifyDateField(label, now);
      this.adjustSpinner(label, now);
    },
    amPm: function amPm(hour) {
      var shouldShowAmPm = this.amPmMode.toLowerCase() === 'a';
      if (!shouldShowAmPm) return '';
      var isCapital = this.amPmMode === 'A';
      var content = hour < 12 ? ' am' : ' pm';
      if (isCapital) content = content.toUpperCase();
      return content;
    },
    typeItemHeight: function typeItemHeight(type) {
      return this.$refs[type].$el.querySelector('li').offsetHeight;
    },
    scrollBarHeight: function scrollBarHeight(type) {
      return this.$refs[type].$el.offsetHeight;
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/basic/time-spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_time_spinnervue_type_script_lang_js_ = (time_spinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/basic/time-spinner.vue





/* normalize component */

var time_spinner_component = normalizeComponent(
  basic_time_spinnervue_type_script_lang_js_,
  time_spinnervue_type_template_id_1facadeb_render,
  time_spinnervue_type_template_id_1facadeb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var time_spinner_api; }
time_spinner_component.options.__file = "packages/date-picker/src/basic/time-spinner.vue"
/* harmony default export */ var time_spinner = (time_spinner_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/time.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var timevue_type_script_lang_js_ = ({

  components: {
    TimeSpinner: time_spinner
  },
  mixins: [mixins_locale],

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    timeArrowControl: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      popperClass: '',
      format: 'HH:mm:ss',
      value: '',
      defaultValue: null,
      date: new Date(),
      oldValue: new Date(),
      selectableRange: [],
      selectionRange: [0, 2],
      disabled: false,
      arrowControl: false,
      needInitAdjust: true
    };
  },


  computed: {
    showSeconds: function showSeconds() {
      return (this.format || '').indexOf('ss') !== -1;
    },
    useArrow: function useArrow() {
      return this.arrowControl || this.timeArrowControl || false;
    },
    amPmMode: function amPmMode() {
      if ((this.format || '').indexOf('A') !== -1) return 'A';
      if ((this.format || '').indexOf('a') !== -1) return 'a';
      return '';
    }
  },

  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.oldValue = this.value;
        this.$nextTick(function () {
          return _this.$refs.spinner.emitSelectRange('hours');
        });
      } else {
        this.needInitAdjust = true;
      }
    },
    value: function value(newVal) {
      var _this2 = this;

      var date = void 0;
      if (newVal instanceof Date) {
        date = limitTimeRange(newVal, this.selectableRange, this.format);
      } else if (!newVal) {
        date = this.defaultValue ? new Date(this.defaultValue) : new Date();
      }

      this.date = date;
      if (this.visible && this.needInitAdjust) {
        this.$nextTick(function (_) {
          return _this2.adjustSpinners();
        });
        this.needInitAdjust = false;
      }
    },
    selectableRange: function selectableRange(val) {
      this.$refs.spinner.selectableRange = val;
    },
    defaultValue: function defaultValue(val) {
      if (!isDate(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    }
  },

  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      return _this3.handleConfirm(true, true);
    });
    this.$emit('mounted');
  },


  methods: {
    handleCancel: function handleCancel() {
      this.$emit('pick', this.oldValue, false);
    },
    handleChange: function handleChange(date) {
      // this.visible avoids edge cases, when use scrolls during panel closing animation
      if (this.visible) {
        this.date = clearMilliseconds(date);
        // if date is out of range, do not emit
        if (this.isValidValue(this.date)) {
          this.$emit('pick', this.date, true);
        }
      }
    },
    setSelectionRange: function setSelectionRange(start, end) {
      this.$emit('select-range', start, end);
      this.selectionRange = [start, end];
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var first = arguments[1];

      if (first) return;
      var date = clearMilliseconds(limitTimeRange(this.date, this.selectableRange, this.format));
      this.$emit('pick', date, visible, first);
    },
    handleKeydown: function handleKeydown(event) {
      var keyCode = event.keyCode;
      var mapping = { 38: -1, 40: 1, 37: -1, 39: 1

        // Left or Right
      };if (keyCode === 37 || keyCode === 39) {
        var step = mapping[keyCode];
        this.changeSelectionRange(step);
        event.preventDefault();
        return;
      }

      // Up or Down
      if (keyCode === 38 || keyCode === 40) {
        var _step = mapping[keyCode];
        this.$refs.spinner.scrollDown(_step);
        event.preventDefault();
        return;
      }
    },
    isValidValue: function isValidValue(date) {
      return timeWithinRange(date, this.selectableRange, this.format);
    },
    adjustSpinners: function adjustSpinners() {
      return this.$refs.spinner.adjustSpinners();
    },
    changeSelectionRange: function changeSelectionRange(step) {
      var list = [0, 3].concat(this.showSeconds ? [6] : []);
      var mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
      var index = list.indexOf(this.selectionRange[0]);
      var next = (index + step + list.length) % list.length;
      this.$refs.spinner.emitSelectRange(mapping[next]);
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/time.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_timevue_type_script_lang_js_ = (timevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/time.vue





/* normalize component */

var time_component = normalizeComponent(
  panel_timevue_type_script_lang_js_,
  timevue_type_template_id_3d939089_render,
  timevue_type_template_id_3d939089_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var time_api; }
time_component.options.__file = "packages/date-picker/src/panel/time.vue"
/* harmony default export */ var panel_time = (time_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/year-table.vue?vue&type=template&id=c86ab5e0&
var year_tablevue_type_template_id_c86ab5e0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    { staticClass: "iw-year-table", on: { click: _vm.handleYearTableClick } },
    [
      _c("tbody", [
        _c("tr", [
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 0)
            },
            [_c("a", { staticClass: "cell" }, [_vm._v(_vm._s(_vm.startYear))])]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 1)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 1))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 2)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 2))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 3)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 3))
              ])
            ]
          )
        ]),
        _c("tr", [
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 4)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 4))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 5)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 5))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 6)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 6))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 7)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 7))
              ])
            ]
          )
        ]),
        _c("tr", [
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 8)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 8))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 9)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 9))
              ])
            ]
          ),
          _c("td"),
          _c("td")
        ])
      ])
    ]
  )
}
var year_tablevue_type_template_id_c86ab5e0_staticRenderFns = []
year_tablevue_type_template_id_c86ab5e0_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/basic/year-table.vue?vue&type=template&id=c86ab5e0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/year-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var year_tablevue_type_script_lang_js_datesInYear = function datesInYear(year) {
  var numOfDays = getDayCountOfYear(year);
  var firstDay = new Date(year, 0, 1);
  return date_util_range(numOfDays).map(function (n) {
    return nextDate(firstDay, n);
  });
};

/* harmony default export */ var year_tablevue_type_script_lang_js_ = ({
  props: {
    disabledDate: {
      type: undefined,
      default: null
    },
    value: {
      type: undefined,
      default: null
    },
    defaultValue: {
      type: undefined,
      default: null,
      validator: function validator(val) {
        // null or valid Date Object
        return val === null || val instanceof Date && isDate(val);
      }
    },
    date: {
      type: [Object, Date],
      default: function _default() {
        return {};
      }
    }
  },

  computed: {
    startYear: function startYear() {
      return Math.floor(this.date.getFullYear() / 10) * 10;
    }
  },

  methods: {
    getCellStyle: function getCellStyle(year) {
      var style = {};
      var today = new Date();

      style.disabled = typeof this.disabledDate === 'function' ? year_tablevue_type_script_lang_js_datesInYear(year).every(this.disabledDate) : false;
      style.current = arrayFindIndex(coerceTruthyValueToArray(this.value), function (date) {
        return date.getFullYear() === year;
      }) >= 0;
      style.today = today.getFullYear() === year;
      style.default = this.defaultValue && this.defaultValue.getFullYear() === year;

      return style;
    },
    handleYearTableClick: function handleYearTableClick(event) {
      var target = event.target;
      if (target.tagName === 'A') {
        if (hasClass(target.parentNode, 'disabled')) return;
        var year = target.textContent || target.innerText;
        this.$emit('pick', Number(year));
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/basic/year-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_year_tablevue_type_script_lang_js_ = (year_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/basic/year-table.vue





/* normalize component */

var year_table_component = normalizeComponent(
  basic_year_tablevue_type_script_lang_js_,
  year_tablevue_type_template_id_c86ab5e0_render,
  year_tablevue_type_template_id_c86ab5e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var year_table_api; }
year_table_component.options.__file = "packages/date-picker/src/basic/year-table.vue"
/* harmony default export */ var year_table = (year_table_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/month-table.vue?vue&type=template&id=654d4f42&
var month_tablevue_type_template_id_654d4f42_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    {
      staticClass: "iw-month-table",
      on: { click: _vm.handleMonthTableClick, mousemove: _vm.handleMouseMove }
    },
    [
      _c(
        "tbody",
        _vm._l(_vm.rows, function(row, key) {
          return _c(
            "tr",
            { key: key },
            _vm._l(row, function(cell, key) {
              return _c("td", { key: key, class: _vm.getCellStyle(cell) }, [
                _c("div", [
                  _c("a", { staticClass: "cell" }, [
                    _vm._v(
                      _vm._s(
                        _vm.t("iw.datepicker.months." + _vm.months[cell.text])
                      )
                    )
                  ])
                ])
              ])
            }),
            0
          )
        }),
        0
      )
    ]
  )
}
var month_tablevue_type_template_id_654d4f42_staticRenderFns = []
month_tablevue_type_template_id_654d4f42_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/basic/month-table.vue?vue&type=template&id=654d4f42&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/month-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var month_tablevue_type_script_lang_js_datesInMonth = function datesInMonth(year, month) {
  var numOfDays = getDayCountOfMonth(year, month);
  var firstDay = new Date(year, month, 1);
  return date_util_range(numOfDays).map(function (n) {
    return nextDate(firstDay, n);
  });
};

var clearDate = function clearDate(date) {
  return new Date(date.getFullYear(), date.getMonth());
};

var getMonthTimestamp = function getMonthTimestamp(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return clearDate(new Date(time)).getTime();
  } else if (time instanceof Date) {
    return clearDate(time).getTime();
  } else {
    return NaN;
  }
};
/* harmony default export */ var month_tablevue_type_script_lang_js_ = ({

  mixins: [mixins_locale],
  props: {
    disabledDate: {
      type: undefined,
      default: null
    },
    value: {
      type: undefined,
      default: null
    },
    selectionMode: {
      type: String,
      default: 'month'
    },
    selectionSide: {
      type: String,
      default: ''
    },
    minDate: {
      type: undefined,
      default: null
    },

    maxDate: {
      type: undefined,
      default: null
    },
    defaultValue: {
      type: Object,
      default: function _default() {
        return {};
      },
      validator: function validator(val) {
        // null or valid Date Object
        return val === null || isDate(val) || Array.isArray(val) && val.every(isDate);
      }
    },
    date: {
      type: [Object, Date],
      default: function _default() {
        return {};
      }
    },
    rangeState: {
      type: Object,
      default: function _default() {
        return {
          endDate: null,
          selecting: false
        };
      }
    }
  },

  data: function data() {
    return {
      months: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
      tableRows: [[], [], []],
      lastRow: null,
      lastColumn: null
    };
  },


  computed: {
    rows: function rows() {
      var _this = this;

      // TODO: refactory rows / getCellClasses
      var rows = this.tableRows;
      var disabledDate = this.disabledDate;
      var selectedDate = [];
      var now = getMonthTimestamp(new Date());

      for (var i = 0; i < 3; i++) {
        var row = rows[i];

        var _loop = function _loop(j) {
          var cell = row[j];
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
          }

          cell.type = 'normal';

          var index = i * 4 + j;
          var time = new Date(_this.date.getFullYear(), index).getTime();
          cell.inRange = time >= getMonthTimestamp(_this.minDate) && time <= getMonthTimestamp(_this.maxDate);
          cell.start = _this.minDate && time === getMonthTimestamp(_this.minDate);
          cell.end = _this.maxDate && time === getMonthTimestamp(_this.maxDate);
          var isToday = time === now;

          if (isToday) {
            cell.type = 'today';
          }
          cell.text = index;
          var year = _this.date.getFullYear();
          var month = cell.text;
          var cellDate = new Date(time);
          cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
          if (_this.selectionSide === 'left' && _this.maxDate && new Date(year, month, 1) > _this.maxDate) {
            cell.disabled = true;
          }
          if (_this.selectionSide === 'right' && _this.minDate && new Date(year, month, 1) < _this.minDate) {
            cell.disabled = true;
          }
          cell.selected = arrayFind(selectedDate, function (date) {
            return date.getTime() === cellDate.getTime();
          });

          _this.$set(row, j, cell);
        };

        for (var j = 0; j < 4; j++) {
          _loop(j);
        }
      }
      return rows;
    }
  },

  watch: {
    'rangeState.endDate': function rangeStateEndDate(newVal) {
      this.markRange(this.minDate, this.maxDate, newVal);
    },
    minDate: function minDate(newVal, oldVal) {
      if (getMonthTimestamp(newVal) !== getMonthTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    },
    maxDate: function maxDate(newVal, oldVal) {
      if (getMonthTimestamp(newVal) !== getMonthTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    }
  },

  methods: {
    cellMatchesDate: function cellMatchesDate(cell, date) {
      var value = new Date(date);
      return this.date.getFullYear() === value.getFullYear() && Number(cell.text) === value.getMonth();
    },
    getCellStyle: function getCellStyle(cell) {
      var _this2 = this;

      var style = {};
      var year = this.date.getFullYear();
      var today = new Date();
      var month = cell.text;
      var defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];
      style.disabled = typeof this.disabledDate === 'function' ? month_tablevue_type_script_lang_js_datesInMonth(year, month).every(this.disabledDate) : false;
      if (this.selectionSide === 'left' && this.maxDate && new Date(year, month, 1) > this.maxDate) {
        style.disabled = true;
      }
      if (this.selectionSide === 'right' && this.minDate && new Date(year, month, 1) < this.minDate) {
        style.disabled = true;
      }
      style.current = arrayFindIndex(coerceTruthyValueToArray(this.value), function (date) {
        return date.getFullYear() === year && date.getMonth() === month;
      }) >= 0;
      style.today = today.getFullYear() === year && today.getMonth() === month;
      style.default = defaultValue.some(function (date) {
        return _this2.cellMatchesDate(cell, date);
      });

      if (cell.inRange) {
        style['in-range'] = true;
      }
      if (cell.start) {
        style['start-date'] = this.selectionSide === 'left';
      }
      if (cell.end) {
        style['end-date'] = this.selectionSide === 'right';
      }
      return style;
    },
    getMonthOfCell: function getMonthOfCell(month) {
      var year = this.date.getFullYear();
      return new Date(year, month, 1);
    },
    markRange: function markRange(minDate, maxDate, endDate) {
      minDate = minDate ? getMonthTimestamp(minDate) : minDate;
      maxDate = maxDate ? getMonthTimestamp(maxDate) : maxDate;
      endDate = endDate ? getMonthTimestamp(endDate) : endDate;
      var rows = this.rows;
      for (var i = 0, k = rows.length; i < k; i++) {
        var row = rows[i];
        for (var j = 0, l = row.length; j < l; j++) {
          var _cell = row[j];
          var index = i * 4 + j;
          var time = new Date(this.date.getFullYear(), index).getTime();

          _cell.inRange = minDate && time >= minDate && time <= (maxDate || endDate) || maxDate && time <= maxDate && time >= (minDate || endDate);
          _cell.start = minDate ? time === minDate : this.selectionSide === this.rangeState.selectionSide && time === endDate;
          _cell.end = maxDate ? time === maxDate : this.selectionSide === this.rangeState.selectionSide && time === endDate;
        }
      }
    },
    handleMouseMove: function handleMouseMove(event) {
      if (!this.rangeState.selecting) return;

      var target = event.target;
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;

      var row = target.parentNode.rowIndex;
      var column = target.cellIndex;
      // can not select disabled date
      if (this.rows[row][column].disabled) return;

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== this.lastRow || column !== this.lastColumn) {
        this.lastRow = row;
        this.lastColumn = column;
        this.$emit('changerange', {
          minDate: this.minDate,
          maxDate: this.maxDate,
          rangeState: {
            selecting: true,
            selectionSide: this.selectionSide,
            endDate: this.getMonthOfCell(row * 4 + column)
          }
        });
      }
    },
    handleMonthTableClick: function handleMonthTableClick(event) {
      var target = event.target;
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;
      if (hasClass(target, 'disabled')) return;
      var column = target.cellIndex;
      var row = target.parentNode.rowIndex;
      var month = row * 4 + column;
      var newDate = this.getMonthOfCell(month);
      if (this.selectionMode === 'range') {
        var value = {
          minDate: this.selectionSide === 'left' ? newDate : this.minDate,
          maxDate: this.selectionSide === 'right' ? newDate : this.maxDate
        };
        this.rangeState.selecting = value.minDate === null || value.maxDate === null;
        this.$emit('pick', value);
      } else {
        this.$emit('pick', month);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/basic/month-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_month_tablevue_type_script_lang_js_ = (month_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/basic/month-table.vue





/* normalize component */

var month_table_component = normalizeComponent(
  basic_month_tablevue_type_script_lang_js_,
  month_tablevue_type_template_id_654d4f42_render,
  month_tablevue_type_template_id_654d4f42_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var month_table_api; }
month_table_component.options.__file = "packages/date-picker/src/basic/month-table.vue"
/* harmony default export */ var month_table = (month_table_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/quarter-table.vue?vue&type=template&id=2ddeafea&
var quarter_tablevue_type_template_id_2ddeafea_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    {
      staticClass: "iw-month-table",
      on: { click: _vm.handleMonthTableClick, mousemove: _vm.handleMouseMove }
    },
    [
      _c(
        "tbody",
        _vm._l(_vm.rows, function(row, key) {
          return _c(
            "tr",
            { key: key },
            _vm._l(row, function(cell, key) {
              return _c("td", { key: key, class: _vm.getCellStyle(cell) }, [
                _c("div", [
                  _c("a", { staticClass: "cell" }, [
                    _vm._v(
                      _vm._s(
                        _vm.t(
                          "iw.datepicker.quarters." + _vm.quarters[cell.text]
                        )
                      )
                    )
                  ])
                ])
              ])
            }),
            0
          )
        }),
        0
      )
    ]
  )
}
var quarter_tablevue_type_template_id_2ddeafea_staticRenderFns = []
quarter_tablevue_type_template_id_2ddeafea_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/basic/quarter-table.vue?vue&type=template&id=2ddeafea&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/quarter-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var quarter_tablevue_type_script_lang_js_datesInMonth = function datesInMonth(year, month) {
  var numOfDays = getDayCountOfMonth(year, month);
  var firstDay = new Date(year, month, 1);
  return date_util_range(numOfDays).map(function (n) {
    return nextDate(firstDay, n);
  });
};

var quarter_tablevue_type_script_lang_js_clearDate = function clearDate(date) {
  return new Date(date.getFullYear(), date.getMonth());
};

var quarter_tablevue_type_script_lang_js_getMonthTimestamp = function getMonthTimestamp(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return quarter_tablevue_type_script_lang_js_clearDate(new Date(time)).getTime();
  } else if (time instanceof Date) {
    return quarter_tablevue_type_script_lang_js_clearDate(time).getTime();
  } else {
    return NaN;
  }
};
/* harmony default export */ var quarter_tablevue_type_script_lang_js_ = ({

  mixins: [mixins_locale],
  props: {
    disabledDate: {
      type: undefined,
      default: null
    },
    value: {
      type: undefined,
      default: null
    },
    selectionMode: {
      type: String,
      default: 'month'
    },
    selectionSide: {
      type: String,
      default: ''
    },
    minDate: {
      type: undefined,
      default: null
    },

    maxDate: {
      type: undefined,
      default: null
    },
    defaultValue: {
      type: Object,
      default: function _default() {
        return {};
      },
      validator: function validator(val) {
        // null or valid Date Object
        return val === null || isDate(val) || Array.isArray(val) && val.every(isDate);
      }
    },
    date: {
      type: [Object, Date],
      default: function _default() {
        return {};
      }
    },
    rangeState: {
      type: Object,
      default: function _default() {
        return {
          endDate: null,
          selecting: false
        };
      }
    }
  },

  data: function data() {
    return {
      quarters: ['Q1', 'Q2', 'Q3', 'Q4'],
      tableRows: [[]],
      lastRow: null,
      lastColumn: null
    };
  },


  computed: {
    rows: function rows() {
      var _this = this;

      // TODO: refactory rows / getCellClasses
      var rows = this.tableRows;
      var disabledDate = this.disabledDate;
      var selectedDate = [];
      var now = quarter_tablevue_type_script_lang_js_getMonthTimestamp(new Date());

      for (var i = 0; i < 1; i++) {
        var row = rows[i];

        var _loop = function _loop(j) {
          var cell = row[j];
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
          }

          cell.type = 'normal';

          var index = i * 4 + j;
          var time = new Date(_this.date.getFullYear(), index * 3).getTime();
          cell.inRange = time >= quarter_tablevue_type_script_lang_js_getMonthTimestamp(_this.minDate) && time <= quarter_tablevue_type_script_lang_js_getMonthTimestamp(_this.maxDate);
          cell.start = _this.minDate && time === quarter_tablevue_type_script_lang_js_getMonthTimestamp(_this.minDate);
          cell.end = _this.maxDate && time === quarter_tablevue_type_script_lang_js_getMonthTimestamp(_this.maxDate);
          var isToday = time === now;

          if (isToday) {
            cell.type = 'today';
          }
          cell.text = index;
          var year = _this.date.getFullYear();
          var month = cell.text;
          var cellDate = new Date(time);
          cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
          if (_this.selectionSide === 'left' && _this.maxDate && new Date(year, month * 3, 1) > _this.maxDate) {
            cell.disabled = true;
          }
          if (_this.selectionSide === 'right' && _this.minDate && new Date(year, month * 3, 1) < _this.minDate) {
            cell.disabled = true;
          }
          cell.selected = arrayFind(selectedDate, function (date) {
            return date.getTime() === cellDate.getTime();
          });

          _this.$set(row, j, cell);
        };

        for (var j = 0; j < 4; j++) {
          _loop(j);
        }
      }
      return rows;
    }
  },

  watch: {
    'rangeState.endDate': function rangeStateEndDate(newVal) {
      this.markRange(this.minDate, this.maxDate, newVal);
    },
    minDate: function minDate(newVal, oldVal) {
      if (quarter_tablevue_type_script_lang_js_getMonthTimestamp(newVal) !== quarter_tablevue_type_script_lang_js_getMonthTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    },
    maxDate: function maxDate(newVal, oldVal) {
      if (quarter_tablevue_type_script_lang_js_getMonthTimestamp(newVal) !== quarter_tablevue_type_script_lang_js_getMonthTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    }
  },

  methods: {
    cellMatchesDate: function cellMatchesDate(cell, date) {
      var value = new Date(date);
      return this.date.getFullYear() === value.getFullYear() && Number(cell.text) === value.getMonth();
    },
    getCellStyle: function getCellStyle(cell) {
      var _this2 = this;

      var style = {};
      var year = this.date.getFullYear();
      var today = new Date();
      var month = cell.text;
      var defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];
      style.disabled = typeof this.disabledDate === 'function' ? quarter_tablevue_type_script_lang_js_datesInMonth(year, month * 3).every(this.disabledDate) : false;
      if (this.selectionSide === 'left' && this.maxDate && new Date(year, month * 3, 1) > this.maxDate) {
        style.disabled = true;
      }
      if (this.selectionSide === 'right' && this.minDate && new Date(year, month * 3, 1) < this.minDate) {
        style.disabled = true;
      }
      style.current = arrayFindIndex(coerceTruthyValueToArray(this.value), function (date) {
        return date.getFullYear() === year && Math.floor(date.getMonth() / 3) === month;
      }) >= 0;
      style.today = today.getFullYear() === year && today.getMonth() === month;
      style.default = defaultValue.some(function (date) {
        return _this2.cellMatchesDate(cell, date);
      });

      if (cell.inRange) {
        style['in-range'] = true;
      }
      if (cell.start) {
        style['start-date'] = this.selectionSide === 'left';
      }
      if (cell.end) {
        style['end-date'] = this.selectionSide === 'right';
      }
      return style;
    },
    getMonthOfCell: function getMonthOfCell(month) {
      var year = this.date.getFullYear();
      return new Date(year, month, 1);
    },
    markRange: function markRange(minDate, maxDate, endDate) {
      minDate = minDate ? quarter_tablevue_type_script_lang_js_getMonthTimestamp(minDate) : minDate;
      maxDate = maxDate ? quarter_tablevue_type_script_lang_js_getMonthTimestamp(maxDate) : maxDate;
      endDate = endDate ? quarter_tablevue_type_script_lang_js_getMonthTimestamp(endDate) : endDate;
      var rows = this.rows;
      for (var i = 0, k = rows.length; i < k; i++) {
        var row = rows[i];
        for (var j = 0, l = row.length; j < l; j++) {
          var _cell = row[j];
          var index = i * 4 + j;
          var time = new Date(this.date.getFullYear(), index * 3).getTime();

          _cell.inRange = minDate && time >= minDate && time <= (maxDate || endDate) || maxDate && time <= maxDate && time >= (minDate || endDate);
          _cell.start = minDate ? time === minDate : this.selectionSide === this.rangeState.selectionSide && time === endDate;
          _cell.end = maxDate ? time === maxDate : this.selectionSide === this.rangeState.selectionSide && time === endDate;
        }
      }
    },
    handleMouseMove: function handleMouseMove(event) {
      if (!this.rangeState.selecting) return;

      var target = event.target;
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;

      var row = target.parentNode.rowIndex;
      var column = target.cellIndex;
      // can not select disabled date
      if (this.rows[row][column].disabled) return;

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== this.lastRow || column !== this.lastColumn) {
        this.lastRow = row;
        this.lastColumn = column;
        this.$emit('changerange', {
          minDate: this.minDate,
          maxDate: this.maxDate,
          rangeState: {
            selecting: true,
            selectionSide: this.selectionSide,
            endDate: this.getMonthOfCell((row * 4 + column) * 3)
          }
        });
      }
    },
    handleMonthTableClick: function handleMonthTableClick(event) {
      var target = event.target;
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;
      if (hasClass(target, 'disabled')) return;
      var column = target.cellIndex;
      var month = column * 3;
      var newDate = this.getMonthOfCell(month);
      if (this.selectionMode === 'range') {
        var value = {
          minDate: this.selectionSide === 'left' ? newDate : this.minDate,
          maxDate: this.selectionSide === 'right' ? newDate : this.maxDate
        };
        this.rangeState.selecting = value.minDate === null || value.maxDate === null;
        this.$emit('pick', value);
      } else {
        this.$emit('pick', month);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/basic/quarter-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_quarter_tablevue_type_script_lang_js_ = (quarter_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/basic/quarter-table.vue





/* normalize component */

var quarter_table_component = normalizeComponent(
  basic_quarter_tablevue_type_script_lang_js_,
  quarter_tablevue_type_template_id_2ddeafea_render,
  quarter_tablevue_type_template_id_2ddeafea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var quarter_table_api; }
quarter_table_component.options.__file = "packages/date-picker/src/basic/quarter-table.vue"
/* harmony default export */ var quarter_table = (quarter_table_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/date-table.vue?vue&type=template&id=5d1f3341&
var date_tablevue_type_template_id_5d1f3341_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    {
      staticClass: "iw-date-table",
      class: { "is-week-mode": _vm.selectionMode === "week" },
      attrs: { cellspacing: "0", cellpadding: "0" },
      on: { click: _vm.handleClick, mousemove: _vm.handleMouseMove }
    },
    [
      _c(
        "tbody",
        [
          _c(
            "tr",
            [
              _vm.showWeekNumber
                ? _c("th", [_vm._v(_vm._s(_vm.t("iw.datepicker.week")))])
                : _vm._e(),
              _vm._l(_vm.WEEKS, function(week, key) {
                return _c("th", { key: key }, [
                  _vm._v(_vm._s(_vm.t("iw.datepicker.weeks." + week)))
                ])
              })
            ],
            2
          ),
          _vm._l(_vm.rows, function(row, key) {
            return _c(
              "tr",
              {
                key: key,
                staticClass: "iw-date-table__row",
                class: { current: _vm.isWeekActive(row[1]) }
              },
              _vm._l(row, function(cell, key) {
                return _c("td", { key: key, class: _vm.getCellClasses(cell) }, [
                  _c("div", [
                    _c("span", [
                      _vm._v(
                        "\n            " + _vm._s(cell.text) + "\n          "
                      )
                    ])
                  ])
                ])
              }),
              0
            )
          })
        ],
        2
      )
    ]
  )
}
var date_tablevue_type_template_id_5d1f3341_staticRenderFns = []
date_tablevue_type_template_id_5d1f3341_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/basic/date-table.vue?vue&type=template&id=5d1f3341&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/date-table.vue?vue&type=script&lang=js&
function date_tablevue_type_script_lang_js_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var _WEEKS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var date_tablevue_type_script_lang_js_getDateTimestamp = function getDateTimestamp(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return clearTime(new Date(time)).getTime();
  } else if (time instanceof Date) {
    return clearTime(time).getTime();
  } else {
    return NaN;
  }
};

// remove the first element that satisfies `pred` from arr
// return a new array if modification occurs
// return the original array otherwise
var date_tablevue_type_script_lang_js_removeFromArray = function removeFromArray(arr, pred) {
  var idx = typeof pred === 'function' ? arrayFindIndex(arr, pred) : arr.indexOf(pred);
  return idx >= 0 ? [].concat(date_tablevue_type_script_lang_js_toConsumableArray(arr.slice(0, idx)), date_tablevue_type_script_lang_js_toConsumableArray(arr.slice(idx + 1))) : arr;
};

/* harmony default export */ var date_tablevue_type_script_lang_js_ = ({
  mixins: [mixins_locale],

  props: {
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: function validator(val) {
        return val >= 1 && val <= 7;
      }
    },

    value: {
      type: undefined,
      default: undefined
    },

    defaultValue: {
      type: undefined,
      default: undefined,
      validator: function validator(val) {
        // either: null, valid Date object, Array of valid Date objects
        return val === null || isDate(val) || Array.isArray(val) && val.every(isDate);
      }
    },

    date: {
      type: undefined,
      default: null
    },

    selectionMode: {
      type: String,
      default: 'day'
    },

    selectionSide: {
      type: String,
      default: ''
    },

    showWeekNumber: {
      type: Boolean,
      default: false
    },

    disabledDate: {
      type: undefined,
      default: null
    },

    cellClassName: {
      type: [Object, String],
      default: function _default() {
        return {};
      }
    },

    minDate: {
      type: undefined,
      default: null
    },

    maxDate: {
      type: undefined,
      default: null
    },

    rangeState: {
      type: Object,
      default: function _default() {
        return {
          endDate: null,
          selecting: false
        };
      }
    }
  },

  data: function data() {
    return {
      tableRows: [[], [], [], [], [], []],
      lastRow: null,
      lastColumn: null
    };
  },


  computed: {
    offsetDay: function offsetDay() {
      var week = this.firstDayOfWeek;
      // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
      return week > 3 ? 7 - week : -week;
    },
    WEEKS: function WEEKS() {
      var week = this.firstDayOfWeek;
      return _WEEKS.concat(_WEEKS).slice(week, week + 7);
    },
    year: function year() {
      return this.date.getFullYear();
    },
    month: function month() {
      return this.date.getMonth();
    },
    startDate: function startDate() {
      return getStartDateOfMonth(this.year, this.month);
    },
    rows: function rows() {
      var _this = this;

      // TODO: refactory rows / getCellClasses
      var date = new Date(this.year, this.month, 1);
      var day = getFirstDayOfMonth(date); // day of first day
      var dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
      var dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth() === 0 ? 11 : date.getMonth() - 1);

      day = day === 0 ? 7 : day;

      var offset = this.offsetDay;
      var rows = this.tableRows;
      var count = 1;

      var startDate = this.startDate;
      var disabledDate = this.disabledDate;
      var cellClassName = this.cellClassName;
      var selectedDate = this.selectionMode === 'dates' ? coerceTruthyValueToArray(this.value) : [];
      var now = date_tablevue_type_script_lang_js_getDateTimestamp(new Date());

      for (var i = 0; i < 6; i++) {
        var row = rows[i];

        if (this.showWeekNumber) {
          if (!row[0]) {
            row[0] = { type: 'week', text: getWeekNumber(nextDate(startDate, i * 7 + 1)) };
          }
        }

        var _loop = function _loop(j) {
          var cell = row[_this.showWeekNumber ? j + 1 : j];
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
          }

          cell.type = 'normal';

          var index = i * 7 + j;
          var time = nextDate(startDate, index - offset).getTime();
          cell.inRange = time >= date_tablevue_type_script_lang_js_getDateTimestamp(_this.minDate) && time <= date_tablevue_type_script_lang_js_getDateTimestamp(_this.maxDate);
          cell.start = _this.minDate && time === date_tablevue_type_script_lang_js_getDateTimestamp(_this.minDate);
          cell.end = _this.maxDate && time === date_tablevue_type_script_lang_js_getDateTimestamp(_this.maxDate);
          var isToday = time === now;

          if (isToday) {
            cell.type = 'today';
          }

          if (i >= 0 && i <= 1) {
            var numberOfDaysFromPreviousMonth = day + offset < 0 ? 7 + day + offset : day + offset;

            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              cell.text = count++;
            } else {
              cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - j % 7) + 1 + i * 7;
              cell.type = 'prev-month';
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++;
            } else {
              cell.text = count++ - dateCountOfMonth;
              cell.type = 'next-month';
            }
          }

          var cellDate = new Date(time);
          cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
          if (_this.selectionSide === 'left' && _this.maxDate && cellDate > _this.maxDate) {
            cell.disabled = true;
          }
          if (_this.selectionSide === 'right' && _this.minDate && cellDate < _this.minDate) {
            cell.disabled = true;
          }
          cell.selected = arrayFind(selectedDate, function (date) {
            return date.getTime() === cellDate.getTime();
          });
          cell.customClass = typeof cellClassName === 'function' && cellClassName(cellDate);
          _this.$set(row, _this.showWeekNumber ? j + 1 : j, cell);
        };

        for (var j = 0; j < 7; j++) {
          _loop(j);
        }

        if (this.selectionMode === 'week') {
          var start = this.showWeekNumber ? 1 : 0;
          var end = this.showWeekNumber ? 7 : 6;
          var isWeekActive = this.isWeekActive(row[start + 1]);

          row[start].inRange = isWeekActive;
          row[start].start = isWeekActive;
          row[end].inRange = isWeekActive;
          row[end].end = isWeekActive;
        }
      }

      return rows;
    }
  },

  watch: {
    'rangeState.endDate': function rangeStateEndDate(newVal) {
      this.markRange(this.minDate, this.maxDate, newVal);
    },
    minDate: function minDate(newVal, oldVal) {
      if (date_tablevue_type_script_lang_js_getDateTimestamp(newVal) !== date_tablevue_type_script_lang_js_getDateTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    },
    maxDate: function maxDate(newVal, oldVal) {
      if (date_tablevue_type_script_lang_js_getDateTimestamp(newVal) !== date_tablevue_type_script_lang_js_getDateTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    }
  },

  methods: {
    cellMatchesDate: function cellMatchesDate(cell, date) {
      var value = new Date(date);
      return this.year === value.getFullYear() && this.month === value.getMonth() && Number(cell.text) === value.getDate();
    },
    getCellClasses: function getCellClasses(cell) {
      var _this2 = this;

      var selectionMode = this.selectionMode;
      var defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];

      var classes = [];
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('available');
        if (cell.type === 'today') {
          classes.push('today');
        }
      } else {
        classes.push(cell.type);
      }

      if (cell.type === 'normal' && defaultValue.some(function (date) {
        return _this2.cellMatchesDate(cell, date);
      })) {
        classes.push('default');
      }

      if (selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && this.cellMatchesDate(cell, this.value)) {
        classes.push('current');
      }

      if (cell.inRange && (cell.type === 'normal' || cell.type === 'today' || this.selectionMode === 'week')) {
        classes.push('in-range');
      }
      if (cell.start) {
        classes.push(['left', ''].includes(this.selectionSide) ? 'start-date' : '');
      }
      if (cell.end) {
        classes.push(['right', ''].includes(this.selectionSide) ? 'end-date' : '');
      }

      if (cell.disabled) {
        classes.push('disabled');
      }

      if (cell.selected) {
        classes.push('selected');
      }

      if (cell.customClass) {
        classes.push(cell.customClass);
      }

      return classes.join(' ');
    },
    getDateOfCell: function getDateOfCell(row, column) {
      var offsetFromStart = row * 7 + (column - (this.showWeekNumber ? 1 : 0)) - this.offsetDay;
      return nextDate(this.startDate, offsetFromStart);
    },
    isWeekActive: function isWeekActive(cell) {
      if (this.selectionMode !== 'week') return false;
      var newDate = new Date(this.year, this.month, 1);
      var year = newDate.getFullYear();
      var month = newDate.getMonth();

      if (cell.type === 'prev-month') {
        newDate.setMonth(month === 0 ? 11 : month - 1);
        newDate.setFullYear(month === 0 ? year - 1 : year);
      }

      if (cell.type === 'next-month') {
        newDate.setMonth(month === 11 ? 0 : month + 1);
        newDate.setFullYear(month === 11 ? year + 1 : year);
      }

      newDate.setDate(parseInt(cell.text, 10));

      if (isDate(this.value)) {
        var dayOffset = (this.value.getDay() - this.firstDayOfWeek + 7) % 7 - 1;
        var weekDate = prevDate(this.value, dayOffset);
        return weekDate.getTime() === newDate.getTime();
      }
      return false;
    },
    markRange: function markRange(minDate, maxDate, endDate) {
      minDate = minDate ? date_tablevue_type_script_lang_js_getDateTimestamp(minDate) : minDate;
      maxDate = maxDate ? date_tablevue_type_script_lang_js_getDateTimestamp(maxDate) : maxDate;
      endDate = endDate ? date_tablevue_type_script_lang_js_getDateTimestamp(endDate) : endDate;

      var startDate = this.startDate;
      var rows = this.rows;
      for (var i = 0, k = rows.length; i < k; i++) {
        var row = rows[i];
        for (var j = 0, l = row.length; j < l; j++) {
          if (this.showWeekNumber && j === 0) continue;

          var _cell = row[j];
          var index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
          var time = nextDate(startDate, index - this.offsetDay).getTime();

          _cell.inRange = minDate && time >= minDate && time <= (maxDate || endDate) || maxDate && time <= maxDate && time >= (minDate || endDate);
          _cell.start = minDate ? time === minDate : this.selectionSide === this.rangeState.selectionSide && time === endDate;
          _cell.end = maxDate ? time === maxDate : this.selectionSide === this.rangeState.selectionSide && time === endDate;
        }
      }
    },
    handleMouseMove: function handleMouseMove(event) {
      if (!this.rangeState.selecting) return;

      var target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;

      var row = target.parentNode.rowIndex - 1;
      var column = target.cellIndex;

      // can not select disabled date
      if (this.rows[row][column].disabled) return;

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== this.lastRow || column !== this.lastColumn) {
        this.lastRow = row;
        this.lastColumn = column;
        this.$emit('changerange', {
          minDate: this.minDate,
          maxDate: this.maxDate,
          rangeState: {
            selecting: true,
            selectionSide: this.selectionSide,
            endDate: this.getDateOfCell(row, column)
          }
        });
      }
    },
    handleClick: function handleClick(event) {
      var target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }

      if (target.tagName !== 'TD') return;

      var row = target.parentNode.rowIndex - 1;
      var column = this.selectionMode === 'week' ? 1 : target.cellIndex;
      var cell = this.rows[row][column];

      if (cell.disabled || cell.type === 'week') return;

      var newDate = this.getDateOfCell(row, column);

      if (this.selectionMode === 'range') {
        var value = {
          minDate: this.selectionSide === 'left' ? newDate : this.minDate,
          maxDate: this.selectionSide === 'right' ? newDate : this.maxDate
        };
        this.rangeState.selecting = value.minDate === null || value.maxDate === null;
        this.$emit('pick', value);
      } else if (this.selectionMode === 'day') {
        this.$emit('pick', newDate);
      } else if (this.selectionMode === 'week') {
        var weekNumber = getWeekNumber(newDate);
        var _value = newDate.getFullYear() + 'w' + weekNumber;
        this.$emit('pick', {
          year: newDate.getFullYear(),
          week: weekNumber,
          value: _value,
          date: newDate
        });
      } else if (this.selectionMode === 'dates') {
        var _value2 = this.value || [];
        var newValue = cell.selected ? date_tablevue_type_script_lang_js_removeFromArray(_value2, function (date) {
          return date.getTime() === newDate.getTime();
        }) : [].concat(date_tablevue_type_script_lang_js_toConsumableArray(_value2), [newDate]);
        this.$emit('pick', newValue);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/basic/date-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_date_tablevue_type_script_lang_js_ = (date_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/basic/date-table.vue





/* normalize component */

var date_table_component = normalizeComponent(
  basic_date_tablevue_type_script_lang_js_,
  date_tablevue_type_template_id_5d1f3341_render,
  date_tablevue_type_template_id_5d1f3341_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var date_table_api; }
date_table_component.options.__file = "packages/date-picker/src/basic/date-table.vue"
/* harmony default export */ var date_table = (date_table_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/date.vue?vue&type=script&lang=js&
function datevue_type_script_lang_js_toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var datevue_type_script_lang_js_ = ({

  directives: { Clickoutside: clickoutside },

  components: {
    TimePicker: panel_time, YearTable: year_table, MonthTable: month_table, QuarterTable: quarter_table, DateTable: date_table, IwInput: input, IwButton: src_button
  },
  mixins: [mixins_locale],

  data: function data() {
    return {
      popperClass: '',
      date: new Date(),
      value: '',
      defaultValue: null, // use getDefaultValue() for time computation
      defaultTime: null,
      showTime: false,
      selectionMode: 'day',
      shortcuts: '',
      visible: false,
      currentView: 'date',
      disabledDate: '',
      cellClassName: '',
      selectableRange: [],
      firstDayOfWeek: 7,
      showWeekNumber: false,
      timePickerVisible: false,
      format: '',
      arrowControl: false,
      userInputDate: null,
      userInputTime: null
    };
  },


  computed: {
    year: function year() {
      return this.date.getFullYear();
    },
    month: function month() {
      return this.date.getMonth();
    },
    week: function week() {
      return getWeekNumber(this.date);
    },
    monthDate: function monthDate() {
      return this.date.getDate();
    },
    footerVisible: function footerVisible() {
      return this.showTime || this.selectionMode === 'dates';
    },
    visibleTime: function visibleTime() {
      if (this.userInputTime !== null) {
        return this.userInputTime;
      } else {
        return formatDate(this.value || this.defaultValue, this.timeFormat);
      }
    },
    visibleDate: function visibleDate() {
      if (this.userInputDate !== null) {
        return this.userInputDate;
      } else {
        return formatDate(this.value || this.defaultValue, this.dateFormat);
      }
    },
    yearLabel: function yearLabel() {
      var yearTranslation = this.t('iw.datepicker.year');
      if (this.currentView === 'year') {
        var startYear = Math.floor(this.year / 10) * 10;
        if (yearTranslation) {
          return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation;
        }
        return startYear + ' - ' + (startYear + 9);
      }
      return this.year + ' ' + yearTranslation;
    },
    timeFormat: function timeFormat() {
      if (this.format) {
        return extractTimeFormat(this.format);
      } else {
        return 'HH:mm:ss';
      }
    },
    dateFormat: function dateFormat() {
      if (this.format) {
        return extractDateFormat(this.format);
      } else {
        return 'yyyy-MM-dd';
      }
    }
  },

  watch: {
    showTime: function showTime(val) {
      var _this = this;

      /* istanbul ignore if */
      if (!val) return;
      this.$nextTick(function (_) {
        var inputElm = _this.$refs.input.$el;
        if (inputElm) {
          _this.pickerWidth = inputElm.getBoundingClientRect().width + 10;
        }
      });
    },
    value: function value(val) {
      if (this.selectionMode === 'dates' && this.value) return;
      if (isDate(val)) {
        this.date = new Date(val);
      } else {
        this.date = this.getDefaultValue();
      }
    },
    defaultValue: function defaultValue(val) {
      if (!isDate(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    },
    timePickerVisible: function timePickerVisible(val) {
      var _this2 = this;

      if (val) this.$nextTick(function () {
        return _this2.$refs.timepicker.adjustSpinners();
      });
    },
    selectionMode: function selectionMode(newVal) {
      if (newVal === 'month') {
        /* istanbul ignore next */
        if (this.currentView !== 'year' || this.currentView !== 'month') {
          this.currentView = 'month';
        }
      } else if (newVal === 'dates') {
        this.currentView = 'date';
      }
    }
  },

  methods: {
    proxyTimePickerDataProperties: function proxyTimePickerDataProperties() {
      var _this3 = this;

      var format = function format(timeFormat) {
        _this3.$refs.timepicker.format = timeFormat;
      };
      var value = function value(_value) {
        _this3.$refs.timepicker.value = _value;
      };
      var date = function date(_date) {
        _this3.$refs.timepicker.date = _date;
      };
      var selectableRange = function selectableRange(_selectableRange) {
        _this3.$refs.timepicker.selectableRange = _selectableRange;
      };

      this.$watch('value', value);
      this.$watch('date', date);
      this.$watch('selectableRange', selectableRange);

      format(this.timeFormat);
      value(this.value);
      date(this.date);
      selectableRange(this.selectableRange);
    },
    handleClear: function handleClear() {
      this.date = this.getDefaultValue();
      this.$emit('pick', null);
    },
    emit: function emit(value) {
      var _this4 = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!value) {
        this.$emit.apply(this, ['pick', value].concat(datevue_type_script_lang_js_toConsumableArray(args)));
      } else if (Array.isArray(value)) {
        var dates = value.map(function (date) {
          return _this4.showTime ? clearMilliseconds(date) : clearTime(date);
        });
        this.$emit.apply(this, ['pick', dates].concat(datevue_type_script_lang_js_toConsumableArray(args)));
      } else {
        this.$emit.apply(this, ['pick', this.showTime ? clearMilliseconds(value) : clearTime(value)].concat(datevue_type_script_lang_js_toConsumableArray(args)));
      }
      this.userInputDate = null;
      this.userInputTime = null;
    },


    // resetDate() {
    //   this.date = new Date(this.date);
    // },

    showMonthPicker: function showMonthPicker() {
      this.currentView = 'month';
    },
    showYearPicker: function showYearPicker() {
      this.currentView = 'year';
    },


    // XXX: 没用到
    // handleLabelClick() {
    //   if (this.currentView === 'date') {
    //     this.showMonthPicker();
    //   } else if (this.currentView === 'month') {
    //     this.showYearPicker();
    //   }
    // },

    prevMonth: function prevMonth() {
      this.date = date_util_prevMonth(this.date);
    },
    nextMonth: function nextMonth() {
      this.date = date_util_nextMonth(this.date);
    },
    prevYear: function prevYear() {
      if (this.currentView === 'year') {
        this.date = date_util_prevYear(this.date, 10);
      } else {
        this.date = date_util_prevYear(this.date);
      }
    },
    nextYear: function nextYear() {
      if (this.currentView === 'year') {
        this.date = date_util_nextYear(this.date, 10);
      } else {
        this.date = date_util_nextYear(this.date);
      }
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },
    handleTimePick: function handleTimePick(value, visible, first) {
      if (isDate(value)) {
        var newDate = this.value ? modifyTime(this.value, value.getHours(), value.getMinutes(), value.getSeconds()) : modifyWithTimeString(this.getDefaultValue(), this.defaultTime);
        this.date = newDate;
        this.emit(this.date, true);
      } else {
        this.emit(value, true);
      }
      if (!first) {
        this.timePickerVisible = visible;
      }
    },
    handleTimePickClose: function handleTimePickClose() {
      this.timePickerVisible = false;
    },
    handleMonthPick: function handleMonthPick(month) {
      if (this.selectionMode === 'month' || this.selectionMode === 'quarter') {
        this.date = modifyDate(this.date, this.year, month, 1);
        this.emit(this.date);
      } else {
        this.date = changeYearMonthAndClampDate(this.date, this.year, month);
        // TODO: should emit intermediate value ??
        // this.emit(this.date);
        this.currentView = 'date';
      }
    },
    handleDatePick: function handleDatePick(value) {
      if (this.selectionMode === 'day') {
        var newDate = this.value ? modifyDate(this.value, value.getFullYear(), value.getMonth(), value.getDate()) : modifyWithTimeString(value, this.defaultTime);
        // change default time while out of selectableRange
        if (!this.checkDateWithinRange(newDate)) {
          newDate = modifyDate(this.selectableRange[0][0], value.getFullYear(), value.getMonth(), value.getDate());
        }
        this.date = newDate;
        this.emit(this.date, this.showTime);
      } else if (this.selectionMode === 'week') {
        this.emit(value.date);
      } else if (this.selectionMode === 'dates') {
        this.emit(value, true); // set false to keep panel open
      }
    },
    handleYearPick: function handleYearPick(year) {
      if (this.selectionMode === 'year') {
        this.date = modifyDate(this.date, year, 0, 1);
        this.emit(this.date);
      } else {
        this.date = changeYearMonthAndClampDate(this.date, year, this.month);
        // TODO: should emit intermediate value ??
        // this.emit(this.date, true);
        this.currentView = 'month';
      }
    },
    changeToNow: function changeToNow() {
      // NOTE: not a permanent solution
      //       consider disable "now" button in the future
      if ((!this.disabledDate || !this.disabledDate(new Date())) && this.checkDateWithinRange(new Date())) {
        this.date = new Date();
        this.emit(this.date);
      }
    },
    confirm: function confirm() {
      if (this.selectionMode === 'dates') {
        this.emit(this.value);
      } else {
        // value were emitted in handle{Date,Time}Pick, nothing to update here
        // deal with the scenario where: user opens the picker, then confirm without doing anything
        var value = this.value ? this.value : modifyWithTimeString(this.getDefaultValue(), this.defaultTime);
        this.date = new Date(value); // refresh date
        this.emit(value);
      }
    },
    resetView: function resetView() {
      if (this.selectionMode === 'month') {
        this.currentView = 'month';
      } else if (this.selectionMode === 'quarter') {
        this.currentView = 'quarter';
      } else if (this.selectionMode === 'year') {
        this.currentView = 'year';
      } else {
        this.currentView = 'date';
      }
    },
    handleEnter: function handleEnter() {
      document.body.addEventListener('keydown', this.handleKeydown);
    },
    handleLeave: function handleLeave() {
      this.$emit('dodestroy');
      document.body.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown: function handleKeydown(event) {
      var keyCode = event.keyCode;
      var list = [38, 40, 37, 39];
      if (this.visible && !this.timePickerVisible) {
        if (list.indexOf(keyCode) !== -1) {
          this.handleKeyControl(keyCode);
          event.stopPropagation();
          event.preventDefault();
        }
        if (keyCode === 13 && this.userInputDate === null && this.userInputTime === null) {
          // Enter
          this.emit(this.date, false);
        }
      }
    },
    handleKeyControl: function handleKeyControl(keyCode) {
      var mapping = {
        'year': {
          38: -4, 40: 4, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setFullYear(date.getFullYear() + step);
          }
        },
        'month': {
          38: -4, 40: 4, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setMonth(date.getMonth() + step);
          }
        },
        'week': {
          38: -1, 40: 1, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setDate(date.getDate() + step * 7);
          }
        },
        'day': {
          38: -7, 40: 7, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setDate(date.getDate() + step);
          }
        }
      };
      var mode = this.selectionMode;
      var year = 3.1536e10;
      var now = this.date.getTime();
      var newDate = new Date(this.date.getTime());
      while (Math.abs(now - newDate.getTime()) <= year) {
        var map = mapping[mode];
        map.offset(newDate, map[keyCode]);
        if (typeof this.disabledDate === 'function' && this.disabledDate(newDate)) {
          continue;
        }
        this.date = newDate;
        this.$emit('pick', newDate, true);
        break;
      }
    },
    handleVisibleTimeChange: function handleVisibleTimeChange(value) {
      var time = parseDate(value, this.timeFormat);
      if (time && this.checkDateWithinRange(time)) {
        this.date = modifyDate(time, this.year, this.month, this.monthDate);
        this.userInputTime = null;
        this.$refs.timepicker.value = this.date;
        this.timePickerVisible = false;
        this.emit(this.date, true);
      }
    },
    handleVisibleDateChange: function handleVisibleDateChange(value) {
      var date = parseDate(value, this.dateFormat);
      if (date) {
        if (typeof this.disabledDate === 'function' && this.disabledDate(date)) {
          return;
        }
        this.date = modifyTime(date, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        this.userInputDate = null;
        this.resetView();
        this.emit(this.date, true);
      }
    },
    isValidValue: function isValidValue(value) {
      return value && !isNaN(value) && (typeof this.disabledDate === 'function' ? !this.disabledDate(value) : true) && this.checkDateWithinRange(value);
    },
    getDefaultValue: function getDefaultValue() {
      // if default-value is set, return it
      // otherwise, return now (the moment this method gets called)
      return this.defaultValue ? new Date(this.defaultValue) : new Date();
    },
    checkDateWithinRange: function checkDateWithinRange(date) {
      return this.selectableRange.length > 0 ? timeWithinRange(date, this.selectableRange, this.format || 'HH:mm:ss') : true;
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/date.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_datevue_type_script_lang_js_ = (datevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/date.vue





/* normalize component */

var date_component = normalizeComponent(
  panel_datevue_type_script_lang_js_,
  datevue_type_template_id_2440d4ea_render,
  datevue_type_template_id_2440d4ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var date_api; }
date_component.options.__file = "packages/date-picker/src/panel/date.vue"
/* harmony default export */ var panel_date = (date_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/date-range.vue?vue&type=template&id=2652849a&
var date_rangevue_type_template_id_2652849a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "iw-zoom-in-top" },
      on: {
        "after-leave": function($event) {
          _vm.$emit("dodestroy")
        }
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "iw-picker-panel iw-date-range-picker iw-popper",
          class: [
            {
              "has-sidebar": _vm.$slots.sidebar || _vm.shortcuts,
              "has-time": _vm.showTime
            },
            _vm.popperClass
          ]
        },
        [
          _c(
            "div",
            { staticClass: "iw-picker-panel__body-wrapper" },
            [
              _vm._t("sidebar"),
              _vm.shortcuts
                ? _c(
                    "div",
                    { staticClass: "iw-picker-panel__sidebar" },
                    _vm._l(_vm.shortcuts, function(shortcut, key) {
                      return _c(
                        "button",
                        {
                          key: key,
                          staticClass: "iw-picker-panel__shortcut",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.handleShortcutClick(shortcut)
                            }
                          }
                        },
                        [_vm._v(_vm._s(shortcut.text))]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _c("div", { staticClass: "iw-picker-panel__body" }, [
                _vm.showTime
                  ? _c(
                      "div",
                      { staticClass: "iw-date-range-picker__time-header" },
                      [
                        _c(
                          "span",
                          { staticClass: "iw-date-range-picker__editors-wrap" },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "iw-date-range-picker__time-picker-wrap"
                              },
                              [
                                _c("iw-input", {
                                  ref: "minInput",
                                  staticClass: "iw-date-range-picker__editor",
                                  attrs: {
                                    disabled: _vm.rangeState.selecting,
                                    placeholder: _vm.t(
                                      "iw.datepicker.startDate"
                                    ),
                                    value: _vm.minVisibleDate,
                                    size: "small"
                                  },
                                  on: {
                                    input: function(val) {
                                      return _vm.handleDateInput(val, "min")
                                    },
                                    change: function(val) {
                                      return _vm.handleDateChange(val, "min")
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "clickoutside",
                                    rawName: "v-clickoutside",
                                    value: _vm.handleMinTimeClose,
                                    expression: "handleMinTimeClose"
                                  }
                                ],
                                staticClass:
                                  "iw-date-range-picker__time-picker-wrap"
                              },
                              [
                                _c("iw-input", {
                                  staticClass: "iw-date-range-picker__editor",
                                  attrs: {
                                    disabled: _vm.rangeState.selecting,
                                    placeholder: _vm.t(
                                      "iw.datepicker.startTime"
                                    ),
                                    value: _vm.minVisibleTime,
                                    size: "small"
                                  },
                                  on: {
                                    focus: function($event) {
                                      _vm.minTimePickerVisible = true
                                    },
                                    input: function(val) {
                                      return _vm.handleTimeInput(val, "min")
                                    },
                                    change: function(val) {
                                      return _vm.handleTimeChange(val, "min")
                                    }
                                  }
                                }),
                                _c("time-picker", {
                                  ref: "minTimePicker",
                                  attrs: {
                                    "time-arrow-control": _vm.arrowControl,
                                    visible: _vm.minTimePickerVisible
                                  },
                                  on: {
                                    pick: _vm.handleMinTimePick,
                                    mounted: function($event) {
                                      _vm.$refs.minTimePicker.format =
                                        _vm.timeFormat
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        _c("span", { staticClass: "iw-icon-arrow-right" }),
                        _c(
                          "span",
                          {
                            staticClass:
                              "iw-date-range-picker__editors-wrap is-right"
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "iw-date-range-picker__time-picker-wrap"
                              },
                              [
                                _c("iw-input", {
                                  staticClass: "iw-date-range-picker__editor",
                                  attrs: {
                                    disabled: _vm.rangeState.selecting,
                                    placeholder: _vm.t("iw.datepicker.endDate"),
                                    value: _vm.maxVisibleDate,
                                    readonly: !_vm.minDate,
                                    size: "small"
                                  },
                                  on: {
                                    input: function(val) {
                                      return _vm.handleDateInput(val, "max")
                                    },
                                    change: function(val) {
                                      return _vm.handleDateChange(val, "max")
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "clickoutside",
                                    rawName: "v-clickoutside",
                                    value: _vm.handleMaxTimeClose,
                                    expression: "handleMaxTimeClose"
                                  }
                                ],
                                staticClass:
                                  "iw-date-range-picker__time-picker-wrap"
                              },
                              [
                                _c("iw-input", {
                                  staticClass: "iw-date-range-picker__editor",
                                  attrs: {
                                    disabled: _vm.rangeState.selecting,
                                    placeholder: _vm.t("iw.datepicker.endTime"),
                                    value: _vm.maxVisibleTime,
                                    readonly: !_vm.minDate,
                                    size: "small"
                                  },
                                  on: {
                                    focus: function($event) {
                                      _vm.minDate &&
                                        (_vm.maxTimePickerVisible = true)
                                    },
                                    input: function(val) {
                                      return _vm.handleTimeInput(val, "max")
                                    },
                                    change: function(val) {
                                      return _vm.handleTimeChange(val, "max")
                                    }
                                  }
                                }),
                                _c("time-picker", {
                                  ref: "maxTimePicker",
                                  attrs: {
                                    "time-arrow-control": _vm.arrowControl,
                                    visible: _vm.maxTimePickerVisible
                                  },
                                  on: {
                                    pick: _vm.handleMaxTimePick,
                                    mounted: function($event) {
                                      _vm.$refs.maxTimePicker.format =
                                        _vm.timeFormat
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    )
                  : _vm._e(),
                _c(
                  "div",
                  {
                    staticClass:
                      "iw-picker-panel__content iw-date-range-picker__content is-left"
                  },
                  [
                    _c("div", { staticClass: "iw-date-range-picker__header" }, [
                      _c("button", {
                        staticClass:
                          "iw-picker-panel__icon-btn iw-icon-d-arrow-left",
                        attrs: { type: "button" },
                        on: { click: _vm.leftPrevYear }
                      }),
                      _c("button", {
                        staticClass:
                          "iw-picker-panel__icon-btn iw-icon-arrow-left",
                        attrs: { type: "button" },
                        on: { click: _vm.leftPrevMonth }
                      }),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "iw-picker-panel__icon-btn iw-icon-d-arrow-right",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              disabled: !_vm.enableYearArrow,
                              type: "button"
                            },
                            on: { click: _vm.leftNextYear }
                          })
                        : _vm._e(),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "iw-picker-panel__icon-btn iw-icon-arrow-right",
                            class: { "is-disabled": !_vm.enableMonthArrow },
                            attrs: {
                              disabled: !_vm.enableMonthArrow,
                              type: "button"
                            },
                            on: { click: _vm.leftNextMonth }
                          })
                        : _vm._e(),
                      _c("div", [_vm._v(_vm._s(_vm.leftLabel))])
                    ]),
                    _c(
                      "div",
                      { staticClass: "iw-date-range-picker-panel__content" },
                      [
                        _c("date-table", {
                          attrs: {
                            date: _vm.leftDate,
                            "default-value": _vm.defaultValue,
                            "min-date": _vm.minDate,
                            "max-date": _vm.maxDate,
                            "range-state": _vm.rangeState,
                            "disabled-date": _vm.disabledDate,
                            "cell-class-name": _vm.cellClassName,
                            "first-day-of-week": _vm.firstDayOfWeek,
                            "selection-mode": "range",
                            "selection-side": "left"
                          },
                          on: {
                            changerange: _vm.handleChangeRange,
                            pick: _vm.handleRangePick
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _c(
                  "div",
                  {
                    staticClass:
                      "iw-picker-panel__content iw-date-range-picker__content is-right"
                  },
                  [
                    _c("div", { staticClass: "iw-date-range-picker__header" }, [
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "iw-picker-panel__icon-btn iw-icon-d-arrow-left",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              disabled: !_vm.enableYearArrow,
                              type: "button"
                            },
                            on: { click: _vm.rightPrevYear }
                          })
                        : _vm._e(),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "iw-picker-panel__icon-btn iw-icon-arrow-left",
                            class: { "is-disabled": !_vm.enableMonthArrow },
                            attrs: {
                              disabled: !_vm.enableMonthArrow,
                              type: "button"
                            },
                            on: { click: _vm.rightPrevMonth }
                          })
                        : _vm._e(),
                      _c("button", {
                        staticClass:
                          "iw-picker-panel__icon-btn iw-icon-d-arrow-right",
                        attrs: { type: "button" },
                        on: { click: _vm.rightNextYear }
                      }),
                      _c("button", {
                        staticClass:
                          "iw-picker-panel__icon-btn iw-icon-arrow-right",
                        attrs: { type: "button" },
                        on: { click: _vm.rightNextMonth }
                      }),
                      _c("div", [_vm._v(_vm._s(_vm.rightLabel))])
                    ]),
                    _c(
                      "div",
                      { staticClass: "iw-date-range-picker-panel__content" },
                      [
                        _c("date-table", {
                          attrs: {
                            date: _vm.rightDate,
                            "default-value": _vm.defaultValue,
                            "min-date": _vm.minDate,
                            "max-date": _vm.maxDate,
                            "range-state": _vm.rangeState,
                            "disabled-date": _vm.disabledDate,
                            "cell-class-name": _vm.cellClassName,
                            "first-day-of-week": _vm.firstDayOfWeek,
                            "selection-mode": "range",
                            "selection-side": "right"
                          },
                          on: {
                            changerange: _vm.handleChangeRange,
                            pick: _vm.handleRangePick
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ])
            ],
            2
          ),
          _c(
            "div",
            { staticClass: "iw-picker-panel__footer" },
            [
              _c(
                "iw-button",
                {
                  staticClass: "iw-picker-panel__link-btn",
                  attrs: { size: _vm.size, type: "text" },
                  on: { click: _vm.handleClear }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("iw.datepicker.clear")) +
                      "\n      "
                  )
                ]
              ),
              _c(
                "iw-button",
                {
                  staticClass: "iw-picker-panel__link-btn",
                  attrs: {
                    disabled: _vm.btnDisabled,
                    size: _vm.size,
                    type: "primary"
                  },
                  on: {
                    click: function($event) {
                      _vm.handleConfirm(false)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("iw.datepicker.confirm")) +
                      "\n      "
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var date_rangevue_type_template_id_2652849a_staticRenderFns = []
date_rangevue_type_template_id_2652849a_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/date-range.vue?vue&type=template&id=2652849a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/date-range.vue?vue&type=script&lang=js&
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var date_rangevue_type_script_lang_js_calcDefaultValue = function calcDefaultValue(defaultValue) {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), nextDate(new Date(defaultValue), 1)];
  } else {
    return [new Date(), nextDate(new Date(), 1)];
  }
};

/* harmony default export */ var date_rangevue_type_script_lang_js_ = ({

  directives: { Clickoutside: clickoutside },

  components: { TimePicker: panel_time, DateTable: date_table, IwInput: input, IwButton: src_button },
  mixins: [mixins_locale],

  data: function data() {
    return {
      popperClass: '',
      value: [],
      defaultValue: null,
      defaultTime: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: new Date(),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      showTime: false,
      shortcuts: '',
      visible: '',
      disabledDate: '',
      cellClassName: '',
      firstDayOfWeek: 7,
      minTimePickerVisible: false,
      maxTimePickerVisible: false,
      format: '',
      size: '',
      arrowControl: false,
      unlinkPanels: false,
      dateUserInput: {
        min: null,
        max: null
      },
      timeUserInput: {
        min: null,
        max: null
      }
    };
  },


  computed: {
    btnDisabled: function btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
    },
    leftLabel: function leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.t('iw.datepicker.year') + ' ' + this.t('iw.datepicker.month' + (this.leftDate.getMonth() + 1));
    },
    rightLabel: function rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.t('iw.datepicker.year') + ' ' + this.t('iw.datepicker.month' + (this.rightDate.getMonth() + 1));
    },
    leftYear: function leftYear() {
      return this.leftDate.getFullYear();
    },
    leftMonth: function leftMonth() {
      return this.leftDate.getMonth();
    },
    leftMonthDate: function leftMonthDate() {
      return this.leftDate.getDate();
    },
    rightYear: function rightYear() {
      return this.rightDate.getFullYear();
    },
    rightMonth: function rightMonth() {
      return this.rightDate.getMonth();
    },
    rightMonthDate: function rightMonthDate() {
      return this.rightDate.getDate();
    },
    minVisibleDate: function minVisibleDate() {
      if (this.dateUserInput.min !== null) return this.dateUserInput.min;
      if (this.minDate) return formatDate(this.minDate, this.dateFormat);
      return '';
    },
    maxVisibleDate: function maxVisibleDate() {
      if (this.dateUserInput.max !== null) return this.dateUserInput.max;
      if (this.maxDate || this.minDate) return formatDate(this.maxDate || this.minDate, this.dateFormat);
      return '';
    },
    minVisibleTime: function minVisibleTime() {
      if (this.timeUserInput.min !== null) return this.timeUserInput.min;
      if (this.minDate) return formatDate(this.minDate, this.timeFormat);
      return '';
    },
    maxVisibleTime: function maxVisibleTime() {
      if (this.timeUserInput.max !== null) return this.timeUserInput.max;
      if (this.maxDate || this.minDate) return formatDate(this.maxDate || this.minDate, this.timeFormat);
      return '';
    },
    timeFormat: function timeFormat() {
      if (this.format) {
        return extractTimeFormat(this.format);
      } else {
        return 'HH:mm:ss';
      }
    },
    dateFormat: function dateFormat() {
      if (this.format) {
        return extractDateFormat(this.format);
      } else {
        return 'yyyy-MM-dd';
      }
    },
    enableMonthArrow: function enableMonthArrow() {
      var nextMonth = (this.leftMonth + 1) % 12;
      var yearOffset = this.leftMonth + 1 >= 12 ? 1 : 0;
      return this.unlinkPanels && new Date(this.leftYear + yearOffset, nextMonth) <= new Date(this.rightYear, this.rightMonth);
    },
    enableYearArrow: function enableYearArrow() {
      return this.unlinkPanels && this.rightYear * 12 + this.rightMonth - (this.leftYear * 12 + this.leftMonth) >= 12;
    }
  },

  watch: {
    minDate: function minDate(val) {
      var _this = this;

      this.dateUserInput.min = null;
      this.timeUserInput.min = null;
      this.$nextTick(function () {
        if (_this.$refs.maxTimePicker && _this.maxDate && _this.maxDate < _this.minDate) {
          var format = 'HH:mm:ss';
          _this.$refs.maxTimePicker.selectableRange = [[parseDate(formatDate(_this.minDate, format), format), parseDate('23:59:59', format)]];
        }
      });
      if (val && this.$refs.minTimePicker) {
        this.$refs.minTimePicker.date = val;
        this.$refs.minTimePicker.value = val;
      }
    },
    maxDate: function maxDate(val) {
      this.dateUserInput.max = null;
      this.timeUserInput.max = null;
      if (val && this.$refs.maxTimePicker) {
        this.$refs.maxTimePicker.date = val;
        this.$refs.maxTimePicker.value = val;
      }
    },
    minTimePickerVisible: function minTimePickerVisible(val) {
      var _this2 = this;

      if (val) {
        this.$nextTick(function () {
          _this2.$refs.minTimePicker.date = _this2.minDate;
          _this2.$refs.minTimePicker.value = _this2.minDate;
          _this2.$refs.minTimePicker.adjustSpinners();
        });
      }
    },
    maxTimePickerVisible: function maxTimePickerVisible(val) {
      var _this3 = this;

      if (val) {
        this.$nextTick(function () {
          _this3.$refs.maxTimePicker.date = _this3.maxDate;
          _this3.$refs.maxTimePicker.value = _this3.maxDate;
          _this3.$refs.maxTimePicker.adjustSpinners();
        });
      }
    },
    value: function value(newVal) {
      if (!newVal) {
        this.minDate = null;
        this.maxDate = null;
      } else if (Array.isArray(newVal)) {
        this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null;
        this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null;
        if (this.minDate) {
          this.leftDate = this.minDate;
          if (this.unlinkPanels && this.maxDate) {
            this.rightDate = this.maxDate;
          } else {
            this.rightDate = this.leftDate;
          }
        } else {
          this.leftDate = date_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
          this.rightDate = this.leftDate;
        }
      }
    },
    defaultValue: function defaultValue(val) {
      if (!Array.isArray(this.value)) {
        var _calcDefaultValue = date_rangevue_type_script_lang_js_calcDefaultValue(val),
            _calcDefaultValue2 = _slicedToArray(_calcDefaultValue, 2),
            left = _calcDefaultValue2[0],
            right = _calcDefaultValue2[1];

        this.leftDate = left;
        this.rightDate = val && val[1] && this.unlinkPanels ? right : this.leftDate;
      }
    }
  },

  methods: {
    handleClear: function handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = date_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
      this.rightDate = this.leftDate;
      this.$emit('pick', null);
    },
    handleChangeRange: function handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },
    handleDateInput: function handleDateInput(value, type) {
      this.dateUserInput[type] = value;
      if (value.length !== this.dateFormat.length) return;
      var parsedValue = parseDate(value, this.dateFormat);

      if (parsedValue) {
        if (typeof this.disabledDate === 'function' && this.disabledDate(new Date(parsedValue))) {
          return;
        }
        if (type === 'min') {
          this.minDate = modifyDate(this.minDate || new Date(), parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          this.leftDate = new Date(parsedValue);
          if (!this.unlinkPanels) {
            this.rightDate = this.leftDate;
          }
        } else {
          this.maxDate = modifyDate(this.maxDate || new Date(), parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          this.rightDate = new Date(parsedValue);
          if (!this.unlinkPanels) {
            this.leftDate = date_util_prevMonth(parsedValue);
          }
        }
      }
    },
    handleDateChange: function handleDateChange(value, type) {
      var parsedValue = parseDate(value, this.dateFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = modifyDate(this.minDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
        } else {
          this.maxDate = modifyDate(this.maxDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
        }
      }
    },
    handleTimeInput: function handleTimeInput(value, type) {
      var _this4 = this;

      this.timeUserInput[type] = value;
      if (value.length !== this.timeFormat.length) return;
      var parsedValue = parseDate(value, this.timeFormat);

      if (parsedValue) {
        if (type === 'min') {
          this.minDate = modifyTime(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          this.$nextTick(function (_) {
            return _this4.$refs.minTimePicker.adjustSpinners();
          });
        } else {
          this.maxDate = modifyTime(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          this.$nextTick(function (_) {
            return _this4.$refs.maxTimePicker.adjustSpinners();
          });
        }
      }
    },
    handleTimeChange: function handleTimeChange(value, type) {
      var parsedValue = parseDate(value, this.timeFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = modifyTime(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
          this.$refs.minTimePicker.value = this.minDate;
          this.minTimePickerVisible = false;
        } else {
          this.maxDate = modifyTime(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
          this.$refs.maxTimePicker.value = this.minDate;
          this.maxTimePickerVisible = false;
        }
      }
    },
    handleRangePick: function handleRangePick(val) {
      var _this5 = this;

      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var defaultTime = this.defaultTime || [];
      var minDate = modifyWithTimeString(val.minDate, defaultTime[0]);
      var maxDate = modifyWithTimeString(val.maxDate, defaultTime[1]);

      if (this.maxDate === maxDate && this.minDate === minDate) {
        return;
      }
      this.onPick && this.onPick(val);
      this.maxDate = maxDate;
      this.minDate = minDate;

      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(function () {
        _this5.maxDate = maxDate;
        _this5.minDate = minDate;
      }, 10);
      if (!close || this.showTime) return;
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },
    handleMinTimePick: function handleMinTimePick(value, visible, first) {
      this.minDate = this.minDate || new Date();
      if (value) {
        this.minDate = modifyTime(this.minDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.minTimePickerVisible = visible;
      }

      if (!this.maxDate || this.maxDate && this.maxDate.getTime() < this.minDate.getTime()) {
        this.maxDate = new Date(this.minDate);
      }
    },
    handleMinTimeClose: function handleMinTimeClose() {
      this.minTimePickerVisible = false;
    },
    handleMaxTimePick: function handleMaxTimePick(value, visible, first) {
      if (this.maxDate && value) {
        this.maxDate = modifyTime(this.maxDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.maxTimePickerVisible = visible;
      }

      if (this.maxDate && this.minDate && this.minDate.getTime() > this.maxDate.getTime()) {
        this.minDate = new Date(this.maxDate);
      }
    },
    handleMaxTimeClose: function handleMaxTimeClose() {
      this.maxTimePickerVisible = false;
    },


    // leftPrev*, rightNext* need to take care of `unlinkPanels`
    leftPrevYear: function leftPrevYear() {
      this.leftDate = date_util_prevYear(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = date_util_nextMonth(this.leftDate);
      }
    },
    leftPrevMonth: function leftPrevMonth() {
      this.leftDate = date_util_prevMonth(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = date_util_nextMonth(this.leftDate);
      }
    },
    rightNextYear: function rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = date_util_nextYear(this.leftDate);
        this.rightDate = date_util_nextMonth(this.leftDate);
      } else {
        this.rightDate = date_util_nextYear(this.rightDate);
      }
    },
    rightNextMonth: function rightNextMonth() {
      if (!this.unlinkPanels) {
        this.leftDate = date_util_nextMonth(this.leftDate);
        this.rightDate = date_util_nextMonth(this.leftDate);
      } else {
        this.rightDate = date_util_nextMonth(this.rightDate);
      }
    },


    // leftNext*, rightPrev* are called when `unlinkPanels` is true
    leftNextYear: function leftNextYear() {
      this.leftDate = date_util_nextYear(this.leftDate);
    },
    leftNextMonth: function leftNextMonth() {
      this.leftDate = date_util_nextMonth(this.leftDate);
    },
    rightPrevYear: function rightPrevYear() {
      this.rightDate = date_util_prevYear(this.rightDate);
    },
    rightPrevMonth: function rightPrevMonth() {
      this.rightDate = date_util_prevMonth(this.rightDate);
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$emit('pick', [this.minDate, this.maxDate], visible);
      }
    },
    isValidValue: function isValidValue(value) {
      return Array.isArray(value) && value && value[0] && value[1] && isDate(value[0]) && isDate(value[1]) && value[0].getTime() <= value[1].getTime() && (typeof this.disabledDate === 'function' ? !this.disabledDate(value[0]) && !this.disabledDate(value[1]) : true);
    },
    resetView: function resetView() {
      // NOTE: this is a hack to reset {min, max}Date on picker open.
      // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
      //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
      this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
      this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/date-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_date_rangevue_type_script_lang_js_ = (date_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/date-range.vue





/* normalize component */

var date_range_component = normalizeComponent(
  panel_date_rangevue_type_script_lang_js_,
  date_rangevue_type_template_id_2652849a_render,
  date_rangevue_type_template_id_2652849a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var date_range_api; }
date_range_component.options.__file = "packages/date-picker/src/panel/date-range.vue"
/* harmony default export */ var date_range = (date_range_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/month-range.vue?vue&type=template&id=f2645fb8&
var month_rangevue_type_template_id_f2645fb8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "iw-zoom-in-top" },
      on: {
        "after-leave": function($event) {
          _vm.$emit("dodestroy")
        }
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "iw-picker-panel iw-date-range-picker iw-popper",
          class: [
            {
              "has-sidebar": _vm.$slots.sidebar || _vm.shortcuts
            },
            _vm.popperClass
          ]
        },
        [
          _c(
            "div",
            { staticClass: "iw-picker-panel__body-wrapper" },
            [
              _vm._t("sidebar"),
              _vm.shortcuts
                ? _c(
                    "div",
                    { staticClass: "iw-picker-panel__sidebar" },
                    _vm._l(_vm.shortcuts, function(shortcut, key) {
                      return _c(
                        "button",
                        {
                          key: key,
                          staticClass: "iw-picker-panel__shortcut",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.handleShortcutClick(shortcut)
                            }
                          }
                        },
                        [_vm._v(_vm._s(shortcut.text))]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _c("div", { staticClass: "iw-picker-panel__body" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "iw-picker-panel__content iw-date-range-picker__content is-left"
                  },
                  [
                    _c("div", { staticClass: "iw-date-range-picker__header" }, [
                      _c("button", {
                        staticClass:
                          "iw-picker-panel__icon-btn iw-icon-d-arrow-left",
                        attrs: { type: "button" },
                        on: { click: _vm.leftPrevYear }
                      }),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "iw-picker-panel__icon-btn iw-icon-d-arrow-right",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              disabled: !_vm.enableYearArrow,
                              type: "button"
                            },
                            on: { click: _vm.leftNextYear }
                          })
                        : _vm._e(),
                      _c("div", [_vm._v(_vm._s(_vm.leftLabel))])
                    ]),
                    _c(
                      "div",
                      { staticClass: "iw-date-range-picker-panel__content" },
                      [
                        _c("month-table", {
                          attrs: {
                            date: _vm.leftDate,
                            "default-value": _vm.defaultValue,
                            "min-date": _vm.minDate,
                            "max-date": _vm.maxDate,
                            "range-state": _vm.rangeState,
                            "disabled-date": _vm.disabledDate,
                            "selection-mode": "range",
                            "selection-side": "left"
                          },
                          on: {
                            changerange: _vm.handleChangeRange,
                            pick: _vm.handleRangePick
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _c(
                  "div",
                  {
                    staticClass:
                      "iw-picker-panel__content iw-date-range-picker__content is-right"
                  },
                  [
                    _c("div", { staticClass: "iw-date-range-picker__header" }, [
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "iw-picker-panel__icon-btn iw-icon-d-arrow-left",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              disabled: !_vm.enableYearArrow,
                              type: "button"
                            },
                            on: { click: _vm.rightPrevYear }
                          })
                        : _vm._e(),
                      _c("button", {
                        staticClass:
                          "iw-picker-panel__icon-btn iw-icon-d-arrow-right",
                        attrs: { type: "button" },
                        on: { click: _vm.rightNextYear }
                      }),
                      _c("div", [_vm._v(_vm._s(_vm.rightLabel))])
                    ]),
                    _c(
                      "div",
                      { staticClass: "iw-date-range-picker-panel__content" },
                      [
                        _c("month-table", {
                          attrs: {
                            date: _vm.rightDate,
                            "default-value": _vm.defaultValue,
                            "min-date": _vm.minDate,
                            "max-date": _vm.maxDate,
                            "range-state": _vm.rangeState,
                            "disabled-date": _vm.disabledDate,
                            "selection-mode": "range",
                            "selection-side": "right"
                          },
                          on: {
                            changerange: _vm.handleChangeRange,
                            pick: _vm.handleRangePick
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ])
            ],
            2
          ),
          _c(
            "div",
            { staticClass: "iw-picker-panel__footer" },
            [
              _c(
                "iw-button",
                {
                  staticClass: "iw-picker-panel__link-btn",
                  attrs: { size: _vm.size, type: "text" },
                  on: { click: _vm.handleClear }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("iw.datepicker.clear")) +
                      "\n      "
                  )
                ]
              ),
              _c(
                "iw-button",
                {
                  staticClass: "iw-picker-panel__link-btn",
                  attrs: {
                    disabled: _vm.btnDisabled,
                    size: _vm.size,
                    type: "primary"
                  },
                  on: {
                    click: function($event) {
                      _vm.handleConfirm(false)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("iw.datepicker.confirm")) +
                      "\n      "
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var month_rangevue_type_template_id_f2645fb8_staticRenderFns = []
month_rangevue_type_template_id_f2645fb8_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/month-range.vue?vue&type=template&id=f2645fb8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/month-range.vue?vue&type=script&lang=js&
var month_rangevue_type_script_lang_js_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var month_rangevue_type_script_lang_js_calcDefaultValue = function calcDefaultValue(defaultValue) {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), date_util_nextMonth(new Date(defaultValue))];
  } else {
    return [new Date(), date_util_nextMonth(new Date())];
  }
};
/* harmony default export */ var month_rangevue_type_script_lang_js_ = ({

  directives: { Clickoutside: clickoutside },

  components: { MonthTable: month_table, IwInput: input, IwButton: src_button },
  mixins: [mixins_locale],

  data: function data() {
    return {
      popperClass: '',
      value: [],
      defaultValue: null,
      defaultTime: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: new Date(),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      shortcuts: '',
      visible: '',
      disabledDate: '',
      format: '',
      size: '',
      arrowControl: false,
      unlinkPanels: false
    };
  },


  computed: {
    btnDisabled: function btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
    },
    leftLabel: function leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.t('iw.datepicker.year');
    },
    rightLabel: function rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.t('iw.datepicker.year');
    },
    leftYear: function leftYear() {
      return this.leftDate.getFullYear();
    },
    rightYear: function rightYear() {
      return this.rightDate.getFullYear() === this.leftDate.getFullYear() ? this.leftDate.getFullYear() : this.rightDate.getFullYear();
    },
    enableYearArrow: function enableYearArrow() {
      return this.unlinkPanels && this.rightYear > this.leftYear;
    }
  },

  watch: {
    value: function value(newVal) {
      if (!newVal) {
        this.minDate = null;
        this.maxDate = null;
      } else if (Array.isArray(newVal)) {
        this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null;
        this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null;
        if (this.minDate) {
          this.leftDate = this.minDate;
          if (this.unlinkPanels && this.maxDate) {
            this.rightDate = this.maxDate;
          } else {
            this.rightDate = this.leftDate;
          }
        } else {
          this.leftDate = month_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
          this.rightDate = this.leftDate;
        }
      }
    },
    defaultValue: function defaultValue(val) {
      if (!Array.isArray(this.value)) {
        var _calcDefaultValue = month_rangevue_type_script_lang_js_calcDefaultValue(val),
            _calcDefaultValue2 = month_rangevue_type_script_lang_js_slicedToArray(_calcDefaultValue, 2),
            left = _calcDefaultValue2[0],
            right = _calcDefaultValue2[1];

        this.leftDate = left;
        this.rightDate = val && val[1] && left.getFullYear() !== right.getFullYear() && this.unlinkPanels ? right : this.leftDate;
      }
    }
  },

  methods: {
    handleClear: function handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = month_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
      this.rightDate = this.leftDate;
      this.$emit('pick', null);
    },
    handleChangeRange: function handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },
    handleRangePick: function handleRangePick(val) {
      var _this = this;

      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var defaultTime = this.defaultTime || [];
      var minDate = modifyWithTimeString(val.minDate, defaultTime[0]);
      var maxDate = modifyWithTimeString(val.maxDate, defaultTime[1]);
      if (this.maxDate === maxDate && this.minDate === minDate) {
        return;
      }
      this.onPick && this.onPick(val);
      this.maxDate = maxDate;
      this.minDate = minDate;

      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(function () {
        _this.maxDate = maxDate;
        _this.minDate = minDate;
      }, 10);
      if (!close) return;
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },


    // leftPrev*, rightNext* need to take care of `unlinkPanels`
    leftPrevYear: function leftPrevYear() {
      this.leftDate = date_util_prevYear(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = date_util_prevYear(this.rightDate);
      }
    },
    rightNextYear: function rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = date_util_nextYear(this.leftDate);
      }
      this.rightDate = date_util_nextYear(this.rightDate);
    },


    // leftNext*, rightPrev* are called when `unlinkPanels` is true
    leftNextYear: function leftNextYear() {
      this.leftDate = date_util_nextYear(this.leftDate);
    },
    rightPrevYear: function rightPrevYear() {
      this.rightDate = date_util_prevYear(this.rightDate);
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$emit('pick', [this.minDate, this.maxDate], visible);
      }
    },
    isValidValue: function isValidValue(value) {
      return Array.isArray(value) && value && value[0] && value[1] && isDate(value[0]) && isDate(value[1]) && value[0].getTime() <= value[1].getTime() && (typeof this.disabledDate === 'function' ? !this.disabledDate(value[0]) && !this.disabledDate(value[1]) : true);
    },
    resetView: function resetView() {
      // NOTE: this is a hack to reset {min, max}Date on picker open.
      // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
      //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
      this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
      this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/month-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_month_rangevue_type_script_lang_js_ = (month_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/month-range.vue





/* normalize component */

var month_range_component = normalizeComponent(
  panel_month_rangevue_type_script_lang_js_,
  month_rangevue_type_template_id_f2645fb8_render,
  month_rangevue_type_template_id_f2645fb8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var month_range_api; }
month_range_component.options.__file = "packages/date-picker/src/panel/month-range.vue"
/* harmony default export */ var month_range = (month_range_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/quarter-range.vue?vue&type=template&id=c20bfb60&
var quarter_rangevue_type_template_id_c20bfb60_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "iw-zoom-in-top" },
      on: {
        "after-leave": function($event) {
          _vm.$emit("dodestroy")
        }
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "iw-picker-panel iw-date-range-picker iw-popper",
          class: [
            {
              "has-sidebar": _vm.$slots.sidebar || _vm.shortcuts
            },
            _vm.popperClass
          ]
        },
        [
          _c(
            "div",
            { staticClass: "iw-picker-panel__body-wrapper" },
            [
              _vm._t("sidebar"),
              _vm.shortcuts
                ? _c(
                    "div",
                    { staticClass: "iw-picker-panel__sidebar" },
                    _vm._l(_vm.shortcuts, function(shortcut, key) {
                      return _c(
                        "button",
                        {
                          key: key,
                          staticClass: "iw-picker-panel__shortcut",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.handleShortcutClick(shortcut)
                            }
                          }
                        },
                        [_vm._v(_vm._s(shortcut.text))]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _c("div", { staticClass: "iw-picker-panel__body" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "iw-picker-panel__content iw-date-range-picker__content is-left"
                  },
                  [
                    _c("div", { staticClass: "iw-date-range-picker__header" }, [
                      _c("button", {
                        staticClass:
                          "iw-picker-panel__icon-btn iw-icon-d-arrow-left",
                        attrs: { type: "button" },
                        on: { click: _vm.leftPrevYear }
                      }),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "iw-picker-panel__icon-btn iw-icon-d-arrow-right",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              disabled: !_vm.enableYearArrow,
                              type: "button"
                            },
                            on: { click: _vm.leftNextYear }
                          })
                        : _vm._e(),
                      _c("div", [_vm._v(_vm._s(_vm.leftLabel))])
                    ]),
                    _c(
                      "div",
                      { staticClass: "iw-date-range-picker-panel__content" },
                      [
                        _c("quarter-table", {
                          attrs: {
                            date: _vm.leftDate,
                            "default-value": _vm.defaultValue,
                            "min-date": _vm.minDate,
                            "max-date": _vm.maxDate,
                            "range-state": _vm.rangeState,
                            "disabled-date": _vm.disabledDate,
                            "selection-mode": "range",
                            "selection-side": "left"
                          },
                          on: {
                            changerange: _vm.handleChangeRange,
                            pick: _vm.handleRangePick
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _c(
                  "div",
                  {
                    staticClass:
                      "iw-picker-panel__content iw-date-range-picker__content is-right"
                  },
                  [
                    _c("div", { staticClass: "iw-date-range-picker__header" }, [
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "iw-picker-panel__icon-btn iw-icon-d-arrow-left",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              disabled: !_vm.enableYearArrow,
                              type: "button"
                            },
                            on: { click: _vm.rightPrevYear }
                          })
                        : _vm._e(),
                      _c("button", {
                        staticClass:
                          "iw-picker-panel__icon-btn iw-icon-d-arrow-right",
                        attrs: { type: "button" },
                        on: { click: _vm.rightNextYear }
                      }),
                      _c("div", [_vm._v(_vm._s(_vm.rightLabel))])
                    ]),
                    _c(
                      "div",
                      { staticClass: "iw-date-range-picker-panel__content" },
                      [
                        _c("quarter-table", {
                          attrs: {
                            date: _vm.rightDate,
                            "default-value": _vm.defaultValue,
                            "min-date": _vm.minDate,
                            "max-date": _vm.maxDate,
                            "range-state": _vm.rangeState,
                            "disabled-date": _vm.disabledDate,
                            "selection-mode": "range",
                            "selection-side": "right"
                          },
                          on: {
                            changerange: _vm.handleChangeRange,
                            pick: _vm.handleRangePick
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ])
            ],
            2
          ),
          _c(
            "div",
            { staticClass: "iw-picker-panel__footer" },
            [
              _c(
                "iw-button",
                {
                  staticClass: "iw-picker-panel__link-btn",
                  attrs: { size: _vm.size, type: "text" },
                  on: { click: _vm.handleClear }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("iw.datepicker.clear")) +
                      "\n      "
                  )
                ]
              ),
              _c(
                "iw-button",
                {
                  staticClass: "iw-picker-panel__link-btn",
                  attrs: {
                    disabled: _vm.btnDisabled,
                    size: _vm.size,
                    type: "primary"
                  },
                  on: {
                    click: function($event) {
                      _vm.handleConfirm(false)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("iw.datepicker.confirm")) +
                      "\n      "
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var quarter_rangevue_type_template_id_c20bfb60_staticRenderFns = []
quarter_rangevue_type_template_id_c20bfb60_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/quarter-range.vue?vue&type=template&id=c20bfb60&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/quarter-range.vue?vue&type=script&lang=js&
var quarter_rangevue_type_script_lang_js_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var quarter_rangevue_type_script_lang_js_calcDefaultValue = function calcDefaultValue(defaultValue) {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), date_util_nextMonth(new Date(defaultValue))];
  } else {
    return [new Date(), date_util_nextMonth(new Date())];
  }
};
/* harmony default export */ var quarter_rangevue_type_script_lang_js_ = ({

  directives: { Clickoutside: clickoutside },

  components: { QuarterTable: quarter_table, IwInput: input, IwButton: src_button },
  mixins: [mixins_locale],

  data: function data() {
    return {
      popperClass: '',
      value: [],
      defaultValue: null,
      defaultTime: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: new Date(),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      shortcuts: '',
      visible: '',
      disabledDate: '',
      format: '',
      size: '',
      arrowControl: false,
      unlinkPanels: false
    };
  },


  computed: {
    btnDisabled: function btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
    },
    leftLabel: function leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.t('iw.datepicker.year');
    },
    rightLabel: function rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.t('iw.datepicker.year');
    },
    leftYear: function leftYear() {
      return this.leftDate.getFullYear();
    },
    rightYear: function rightYear() {
      return this.rightDate.getFullYear() === this.leftDate.getFullYear() ? this.leftDate.getFullYear() : this.rightDate.getFullYear();
    },
    enableYearArrow: function enableYearArrow() {
      return this.unlinkPanels && this.rightYear > this.leftYear;
    }
  },

  watch: {
    value: function value(newVal) {
      if (!newVal) {
        this.minDate = null;
        this.maxDate = null;
      } else if (Array.isArray(newVal)) {
        this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null;
        this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null;
        if (this.minDate) {
          this.leftDate = this.minDate;
          if (this.unlinkPanels && this.maxDate) {
            this.rightDate = this.maxDate;
          } else {
            this.rightDate = this.leftDate;
          }
        } else {
          this.leftDate = quarter_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
          this.rightDate = this.leftDate;
        }
      }
    },
    defaultValue: function defaultValue(val) {
      if (!Array.isArray(this.value)) {
        var _calcDefaultValue = quarter_rangevue_type_script_lang_js_calcDefaultValue(val),
            _calcDefaultValue2 = quarter_rangevue_type_script_lang_js_slicedToArray(_calcDefaultValue, 2),
            left = _calcDefaultValue2[0],
            right = _calcDefaultValue2[1];

        this.leftDate = left;
        this.rightDate = val && val[1] && left.getFullYear() !== right.getFullYear() && this.unlinkPanels ? right : this.leftDate;
      }
    }
  },

  methods: {
    handleClear: function handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = quarter_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
      this.rightDate = this.leftDate;
      this.$emit('pick', null);
    },
    handleChangeRange: function handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },
    handleRangePick: function handleRangePick(val) {
      var _this = this;

      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var defaultTime = this.defaultTime || [];
      var minDate = modifyWithTimeString(val.minDate, defaultTime[0]);
      var maxDate = modifyWithTimeString(val.maxDate, defaultTime[1]);
      if (this.maxDate === maxDate && this.minDate === minDate) {
        return;
      }
      this.onPick && this.onPick(val);
      this.maxDate = maxDate;
      this.minDate = minDate;

      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(function () {
        _this.maxDate = maxDate;
        _this.minDate = minDate;
      }, 10);
      if (!close) return;
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },


    // leftPrev*, rightNext* need to take care of `unlinkPanels`
    leftPrevYear: function leftPrevYear() {
      this.leftDate = date_util_prevYear(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = date_util_prevYear(this.rightDate);
      }
    },
    rightNextYear: function rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = date_util_nextYear(this.leftDate);
      }
      this.rightDate = date_util_nextYear(this.rightDate);
    },


    // leftNext*, rightPrev* are called when `unlinkPanels` is true
    leftNextYear: function leftNextYear() {
      this.leftDate = date_util_nextYear(this.leftDate);
    },
    rightPrevYear: function rightPrevYear() {
      this.rightDate = date_util_prevYear(this.rightDate);
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$emit('pick', [this.minDate, this.maxDate], visible);
      }
    },
    isValidValue: function isValidValue(value) {
      return Array.isArray(value) && value && value[0] && value[1] && isDate(value[0]) && isDate(value[1]) && value[0].getTime() <= value[1].getTime() && (typeof this.disabledDate === 'function' ? !this.disabledDate(value[0]) && !this.disabledDate(value[1]) : true);
    },
    resetView: function resetView() {
      // NOTE: this is a hack to reset {min, max}Date on picker open.
      // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
      //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
      this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
      this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/quarter-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_quarter_rangevue_type_script_lang_js_ = (quarter_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/quarter-range.vue





/* normalize component */

var quarter_range_component = normalizeComponent(
  panel_quarter_rangevue_type_script_lang_js_,
  quarter_rangevue_type_template_id_c20bfb60_render,
  quarter_rangevue_type_template_id_c20bfb60_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var quarter_range_api; }
quarter_range_component.options.__file = "packages/date-picker/src/panel/quarter-range.vue"
/* harmony default export */ var quarter_range = (quarter_range_component.exports);
// CONCATENATED MODULE: ./packages/date-picker/src/picker/date-picker.js






var date_picker_getPanel = function getPanel(type) {
  if (type === 'daterange' || type === 'datetimerange') {
    return date_range;
  } else if (type === 'monthrange') {
    return month_range;
  } else if (type === 'quarterrange') {
    return quarter_range;
  }
  return panel_date;
};

/* harmony default export */ var date_picker = ({
  mixins: [picker],

  name: 'IwDatePicker',

  props: {
    type: {
      type: String,
      default: 'date'
    },
    timeArrowControl: Boolean
  },

  watch: {
    type: function type(_type) {
      if (this.picker) {
        this.unmountPicker();
        this.panel = date_picker_getPanel(_type);
        this.mountPicker();
      } else {
        this.panel = date_picker_getPanel(_type);
      }
    }
  },

  created: function created() {
    this.panel = date_picker_getPanel(this.type);
  }
});
// CONCATENATED MODULE: ./packages/date-picker/index.js

/* harmony default export */ var packages_date_picker = (date_picker);
// CONCATENATED MODULE: ./src/utils/filters.js
function toThousand(num) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var preffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (num === undefined || num === null || num === 'null' || num === '-' || num === '') return '-';
  return preffix + Number(+num || 0).toFixed(decimal).replace(/^-?\d+/g, function (m) {
    return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',');
  });
}

function toPercent(num) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var preffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '%';

  if (num === undefined || num === null || num === 'null' || num === '-' || num === '') return '-';
  var str = Number(num * 100).toFixed(decimal);
  if (preffix) {
    var preffixChar = Number(str) === 0 ? '' : Number(str) >= 0 ? '+' : '-';
    str = preffixChar + str.replace(preffixChar, '');
  }
  return str + suffix;
}
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return src_install; });
/* concated harmony reexport Tag */__webpack_require__.d(__webpack_exports__, "Tag", function() { return tag; });
/* concated harmony reexport Icon */__webpack_require__.d(__webpack_exports__, "Icon", function() { return icon; });
/* concated harmony reexport Input */__webpack_require__.d(__webpack_exports__, "Input", function() { return input; });
/* concated harmony reexport Empty */__webpack_require__.d(__webpack_exports__, "Empty", function() { return empty; });
/* concated harmony reexport Button */__webpack_require__.d(__webpack_exports__, "Button", function() { return src_button; });
/* concated harmony reexport Select */__webpack_require__.d(__webpack_exports__, "Select", function() { return src_select; });
/* concated harmony reexport Loading */__webpack_require__.d(__webpack_exports__, "Loading", function() { return packages_loading; });
/* concated harmony reexport Popover */__webpack_require__.d(__webpack_exports__, "Popover", function() { return popover; });
/* concated harmony reexport Dialog */__webpack_require__.d(__webpack_exports__, "Dialog", function() { return dialog; });
/* concated harmony reexport Scrollbar */__webpack_require__.d(__webpack_exports__, "Scrollbar", function() { return scrollbar; });
/* concated harmony reexport Table */__webpack_require__.d(__webpack_exports__, "Table", function() { return src_table; });
/* concated harmony reexport TableColumn */__webpack_require__.d(__webpack_exports__, "TableColumn", function() { return table_column; });
/* concated harmony reexport Aaa */__webpack_require__.d(__webpack_exports__, "Aaa", function() { return aaa; });
/* concated harmony reexport Favorite */__webpack_require__.d(__webpack_exports__, "Favorite", function() { return favorite; });
/* concated harmony reexport Submodel */__webpack_require__.d(__webpack_exports__, "Submodel", function() { return submodel; });
/* concated harmony reexport Version */__webpack_require__.d(__webpack_exports__, "Version", function() { return version; });
/* concated harmony reexport Manfbrand */__webpack_require__.d(__webpack_exports__, "Manfbrand", function() { return manfbrand; });
/* concated harmony reexport Cascader */__webpack_require__.d(__webpack_exports__, "Cascader", function() { return cascader; });
/* concated harmony reexport CascaderTable */__webpack_require__.d(__webpack_exports__, "CascaderTable", function() { return cascader_table; });
/* concated harmony reexport DatePicker */__webpack_require__.d(__webpack_exports__, "DatePicker", function() { return packages_date_picker; });

























var components = [tag, icon, input, empty, src_button, src_select, popover, dialog, scrollbar, src_table, table_column, aaa, favorite, submodel, version, manfbrand, cascader, cascader_table, packages_date_picker];

var src_install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.map(function (component) {
    Vue.component(component.name, component);
  });
  Vue.use(packages_loading.directive);

  Vue.prototype.$IWAYS = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000

    // 注册全局过滤器
  };Object.keys(filters_namespaceObject).forEach(function (key) {
    Vue.filter(key, filters_namespaceObject[key]);
  });
};

// if (window && typeof window !== undefined && window.Vue) {
//   install(window.Vue)
// }



/* harmony default export */ var src_0 = __webpack_exports__["default"] = ({
  locale: locale.use,
  i18n: locale.i18n,
  install: src_install,
  Tag: tag,
  Icon: icon,
  Input: input,
  Empty: empty,
  Button: src_button,
  Select: src_select,
  Loading: packages_loading,
  Popover: popover,
  Dialog: dialog,
  Scrollbar: scrollbar,
  Table: src_table,
  TableColumn: table_column,
  Aaa: aaa,
  Favorite: favorite,
  Submodel: submodel,
  Version: version,
  Manfbrand: manfbrand,
  Cascader: cascader,
  CascaderTable: cascader_table,
  DatePicker: packages_date_picker
});

/***/ })
/******/ ])["default"];