/*!
 * Fluide v1.0.0-alpha.1
 * (c) 2019 nerdslabs
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.Fluide = {})));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var Props = /** @class */ (function () {
        function Props() {
            var _this = this;
            this.tickTimout = null;
            this.tickInstances = [];
            this.fps = 1000 / 24;
            this.tickTimout = setTimeout(function () { return _this.tick(); }, this.fps);
        }
        Props.prototype.addTickInstance = function (c) {
            this.tickInstances.push(c);
        };
        Props.prototype.tick = function () {
            var _this = this;
            this.tickInstances.forEach(function (instance) { return instance.onTick(); });
            this.tickTimout = setTimeout(function () { return _this.tick(); }, this.fps);
        };
        Object.defineProperty(Props, "get", {
            get: function () {
                if (typeof window._fluide === typeof undefined) {
                    window._fluide = new Props();
                }
                return window._fluide;
            },
            enumerable: true,
            configurable: true
        });
        return Props;
    }());

    var Module = /** @class */ (function () {
        function Module(el) {
            if (el instanceof HTMLElement) {
                this.el = el;
            }
            else {
                this.el = document.querySelector(el);
            }
            if (this.el === null) {
                throw new Error('Provided Element is null or cannot be found.');
            }
            if (this.onTick !== undefined) {
                Props.get.addTickInstance(this);
            }
        }
        return Module;
    }());

    var Modal = /** @class */ (function (_super) {
        __extends(Modal, _super);
        function Modal(el, options) {
            if (options === void 0) { options = {
                closeable: true,
            }; }
            var _this = _super.call(this, el) || this;
            _this.opened = false;
            _this.content = _this.el.querySelector('.modal-content');
            _this.options = options;
            _this.bindEvents();
            return _this;
        }
        Modal.prototype.open = function () {
            this.el.classList.add('visible');
            this.opened = true;
        };
        Modal.prototype.close = function () {
            this.el.classList.remove('visible');
            this.opened = false;
        };
        Modal.prototype.isOpened = function () {
            return this.opened;
        };
        Modal.prototype.setCloseable = function (state) {
            this.options.closeable = state;
            this.bindEvents();
        };
        Modal.prototype.isCloseable = function () {
            return this.options.closeable;
        };
        Modal.prototype.bindEvents = function () {
            var _this = this;
            this.el.onclick = (this.options.closeable ? function (event) {
                if (_this.content.contains(event.target) === false) {
                    _this.close();
                }
            } : null);
        };
        return Modal;
    }(Module));

    var Events = /** @class */ (function () {
        function Events(scrollbar) {
            var _this = this;
            this.scrollbar = scrollbar;
            this.scrollbar.bar.onmousedown = function (event) { return _this.mouseDown(event); };
            this.scrollbar.bar.ontouchstart = function (event) { return _this.touchStart(event); };
            this.scrollbar.el.onscroll = function (event) { return _this.userScrolled(event); };
            document.onmouseup = function (event) { return _this.mouseUp(event); };
            document.ontouchend = function (event) { return _this.touchEnd(event); };
        }
        Events.prototype.mouseDown = function (event) {
            var _this = this;
            event.preventDefault();
            this.currentY = event.pageY;
            document.onmousemove = function (e) { return _this.mouseMove(e); };
        };
        Events.prototype.mouseMove = function (event) {
            event.preventDefault();
            var moveDistance = (event.pageY - this.currentY);
            var scrollDistance = (moveDistance / this.scrollbar.maxPosition) * (this.scrollbar.scrollHeight - this.scrollbar.height);
            this.currentY = event.pageY;
            this.scrollbar.move(scrollDistance);
        };
        Events.prototype.mouseUp = function (event) {
            document.onmousemove = null;
        };
        Events.prototype.touchStart = function (event) {
            var _this = this;
            var touch = event.touches[0] || null;
            if (event.touches.length === 1 && touch !== null) {
                this.currentY = touch.pageY;
                this.scrollbar.bar.ontouchmove = function (e) { return _this.touchMove(e); };
            }
        };
        Events.prototype.touchMove = function (event) {
            event.preventDefault();
            var touch = event.touches[0] || null;
            if (event.touches.length === 1 && touch !== null) {
                var moveDistance = (touch.pageY - this.currentY);
                var scrollDistance = (moveDistance / this.scrollbar.maxPosition) * (this.scrollbar.scrollHeight - this.scrollbar.height);
                this.currentY = touch.pageY;
                this.scrollbar.move(scrollDistance);
            }
        };
        Events.prototype.touchEnd = function (event) {
            document.ontouchmove = null;
        };
        Events.prototype.userScrolled = function (event) {
            this.scrollbar.setBarPosition();
        };
        return Events;
    }());

    var Scrollbar = /** @class */ (function (_super) {
        __extends(Scrollbar, _super);
        function Scrollbar(el) {
            var _this = _super.call(this, el) || this;
            _this.maxPosition = 0;
            _this.position = 0;
            _this.scrollClass = null;
            _this.wrap();
            _this.createScroll();
            _this.calculateSizes();
            return _this;
        }
        Scrollbar.prototype.wrap = function () {
            this.el.classList.add('scrollbar');
            this.wrapper = document.createElement('div');
            this.wrapper.className = 'scrollbar-wrapper';
            this.el.parentNode.insertBefore(this.wrapper, this.el);
            this.wrapper.appendChild(this.el);
        };
        Scrollbar.prototype.calculateSizes = function () {
            this.height = this.el.clientHeight;
            this.scrollHeight = this.el.scrollHeight;
            this.el.style.width = null;
            this.width = this.el.clientWidth;
            var visibleProportion = this.height / this.scrollHeight;
            if (this.height * visibleProportion > 30) {
                this.visibleProportion = visibleProportion;
                this.barHeight = this.height * visibleProportion;
            }
            else {
                this.visibleProportion = 30 / this.height;
                this.barHeight = 30;
            }
            this.maxPosition = this.height - this.barHeight;
            this.scroll.style.height = this.height + 'px';
            this.bar.style.height = this.barHeight + 'px';
            this.setBarPosition();
        };
        Scrollbar.prototype.move = function (distance) {
            this.el.scrollTop = (distance + this.el.scrollTop);
        };
        Scrollbar.prototype.setBarPosition = function () {
            var _this = this;
            var position = (this.el.scrollTop / (this.scrollHeight - this.height)) * this.maxPosition;
            if (position <= 0) {
                this.position = 0;
            }
            else if (position < this.maxPosition) {
                this.position = position;
            }
            else {
                this.position = this.maxPosition;
            }
            this.bar.style.marginTop = this.position + 'px';
            this.scroll.classList.add('scroll-active');
            clearTimeout(this.scrollClass);
            this.scrollClass = setTimeout(function () {
                _this.scroll.classList.remove('scroll-active');
            }, 500);
        };
        Scrollbar.prototype.onTick = function () {
            if (this.el.scrollHeight !== this.scrollHeight) {
                this.calculateSizes.call(this);
            }
            if (this.height !== this.el.clientHeight || this.width !== this.el.clientWidth) {
                this.calculateSizes.call(this);
            }
        };
        Scrollbar.prototype.createScroll = function () {
            this.scroll = document.createElement('div');
            this.scroll.className = 'scrollbar-handler';
            this.bar = document.createElement('div');
            this.bar.className = 'bar';
            this.scroll.appendChild(this.bar);
            this.events = new Events(this);
            this.el.parentElement.insertBefore(this.scroll, this.el.nextSibling);
        };
        return Scrollbar;
    }(Module));

    var Position;
    (function (Position) {
        Position["TOP"] = "tooltip-top";
        Position["BOTTOM"] = "tooltip-bottom";
        Position["LEFT"] = "tooltip-left";
        Position["RIGHT"] = "tooltip-right";
        Position["CLASS"] = "";
    })(Position || (Position = {}));
    var Tooltip = /** @class */ (function (_super) {
        __extends(Tooltip, _super);
        function Tooltip(el, position) {
            if (position === void 0) { position = Position.CLASS; }
            var _this = _super.call(this, el) || this;
            _this.tooltip = null;
            if (position === Position.CLASS) {
                if (_this.el.className.indexOf('tooltip-top') > -1) {
                    _this.position = Position.TOP;
                }
                else if (_this.el.className.indexOf('tooltip-left') > -1) {
                    _this.position = Position.LEFT;
                }
                else if (_this.el.className.indexOf('tooltip-right') > -1) {
                    _this.position = Position.RIGHT;
                }
                else {
                    _this.position = Position.BOTTOM;
                }
            }
            else {
                _this.position = position;
            }
            _this.el.addEventListener('mouseenter', function (event) { return _this.mouseEnter(event); });
            _this.el.addEventListener('mouseleave', function (event) { return _this.mouseLeave(event); });
            _this.el.addEventListener('click', function (event) { return _this.mouseLeave(event); });
            _this.el.addEventListener('touchend', function (event) { return _this.mouseLeave(event); });
            return _this;
        }
        Tooltip.prototype.onTick = function () {
            if (this.tooltip !== null && this.tooltip.parentElement !== null) {
                if (document.body.contains(this.el.parentElement) === false) {
                    document.body.removeChild(this.tooltip);
                }
                else {
                    this.updatePosition.call(this);
                }
            }
        };
        Tooltip.prototype.show = function () {
            var text = this.el.getAttribute('alt');
            this.tooltip = document.createElement('div');
            this.tooltip.classList.add('tooltip', this.position);
            this.tooltip.innerHTML = text;
            document.body.appendChild(this.tooltip);
            var _a = this.calculatePosition(), left = _a.left, top = _a.top;
            this.tooltip.style.left = left + 'px';
            this.tooltip.style.top = top + 'px';
        };
        Tooltip.prototype.hide = function () {
            if (this.tooltip.parentElement) {
                document.body.removeChild(this.tooltip);
            }
        };
        Tooltip.prototype.mouseEnter = function (event) {
            this.show();
        };
        Tooltip.prototype.mouseLeave = function (event) {
            this.hide();
        };
        Tooltip.prototype.updatePosition = function () {
            var _a = this.calculatePosition(), left = _a.left, top = _a.top;
            this.tooltip.style.left = left + 'px';
            this.tooltip.style.top = top + 'px';
        };
        Tooltip.prototype.calculatePosition = function () {
            var left;
            var top;
            var position = this.el.getBoundingClientRect();
            if (this.position === Position.BOTTOM) {
                left = position.left + (this.el.offsetWidth / 2) - (this.tooltip.offsetWidth / 2);
                top = position.top + this.el.offsetHeight + 10;
            }
            else if (this.position === Position.TOP) {
                left = position.left + (this.el.offsetWidth / 2) - (this.tooltip.offsetWidth / 2);
                top = position.top - this.tooltip.offsetHeight - 10;
            }
            else if (this.position === Position.LEFT) {
                left = position.left - this.tooltip.offsetWidth - 10;
                top = position.top + (this.el.offsetHeight / 2) - (this.tooltip.offsetHeight / 2);
            }
            else if (this.position === Position.RIGHT) {
                left = position.left + this.el.offsetWidth + 10;
                top = position.top + (this.el.offsetHeight / 2) - (this.tooltip.offsetHeight / 2);
            }
            if (left < 0) {
                left = 0;
            }
            else if (left + this.tooltip.offsetWidth > document.documentElement.scrollWidth) {
                left = document.documentElement.scrollWidth - this.tooltip.offsetWidth;
            }
            left = Math.round(left);
            top = Math.round(top);
            return {
                left: left, top: top,
            };
        };
        Tooltip.Position = Position;
        return Tooltip;
    }(Module));

    var version = '1.0.0-alpha.1';
    var fluide = {
        Scrollbar: Scrollbar, Modal: Modal, Tooltip: Tooltip, version: version,
    };

    exports.Modal = Modal;
    exports.Scrollbar = Scrollbar;
    exports.Tooltip = Tooltip;
    exports.version = version;
    exports.default = fluide;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fluide.js.map
