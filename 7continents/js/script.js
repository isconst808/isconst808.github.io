"use strict";

var _this2 = void 0;

function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }

document.addEventListener("DOMContentLoaded", function () {
  // Library

  /**
  * Swiper 6.3.5
  * Most modern mobile touch slider and framework with hardware accelerated transitions
  * https://swiperjs.com
  *
  * Copyright 2014-2020 Vladimir Kharlampidi
  *
  * Released under the MIT License
  *
  * Released on: October 30, 2020
  */
  !function (e, t) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
  }(_this2, function () {
    "use strict";

    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }

    function t() {
      return (t = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];

          for (var s in i) {
            Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function i(e) {
      return null !== e && "object" == _typeof2(e) && "constructor" in e && e.constructor === Object;
    }

    function s(e, t) {
      void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (a) {
        void 0 === e[a] ? e[a] = t[a] : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a]);
      });
    }

    var a = {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ""
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS: function createElementNS() {
        return {};
      },
      importNode: function importNode() {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };

    function r() {
      var e = "undefined" != typeof document ? document : {};
      return s(e, a), e;
    }

    var n = {
      document: a,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState: function replaceState() {},
        pushState: function pushState() {},
        go: function go() {},
        back: function back() {}
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return "";
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {},
      matchMedia: function matchMedia() {
        return {};
      },
      requestAnimationFrame: function requestAnimationFrame(e) {
        return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
      },
      cancelAnimationFrame: function cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      }
    };

    function l() {
      var e = "undefined" != typeof window ? window : {};
      return s(e, n), e;
    }

    function o(e) {
      return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function d(e, t) {
      return (d = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function h() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function p(e, t, i) {
      return (p = h() ? Reflect.construct : function (e, t, i) {
        var s = [null];
        s.push.apply(s, t);
        var a = new (Function.bind.apply(e, s))();
        return i && d(a, i.prototype), a;
      }).apply(null, arguments);
    }

    function u(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (u = function u(e) {
        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
        var i;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, s);
        }

        function s() {
          return p(e, arguments, o(this).constructor);
        }

        return s.prototype = Object.create(e.prototype, {
          constructor: {
            value: s,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), d(s, e);
      })(e);
    }

    var c = function (e) {
      var t, i;

      function s(t) {
        var i, s, a;
        return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(i), a = s.__proto__, Object.defineProperty(s, "__proto__", {
          get: function get() {
            return a;
          },
          set: function set(e) {
            a.__proto__ = e;
          }
        }), i;
      }

      return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s;
    }(u(Array));

    function f(e) {
      void 0 === e && (e = []);
      var t = [];
      return e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, f(e)) : t.push(e);
      }), t;
    }

    function v(e, t) {
      return Array.prototype.filter.call(e, t);
    }

    function m(e, t) {
      var i = l(),
          s = r(),
          a = [];
      if (!t && e instanceof c) return e;
      if (!e) return new c(a);

      if ("string" == typeof e) {
        var n = e.trim();

        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          var o = "div";
          0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
          var d = s.createElement(o);
          d.innerHTML = n;

          for (var h = 0; h < d.childNodes.length; h += 1) {
            a.push(d.childNodes[h]);
          }
        } else a = function (e, t) {
          if ("string" != typeof e) return [e];

          for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) {
            i.push(s[a]);
          }

          return i;
        }(e.trim(), t || s);
      } else if (e.nodeType || e === i || e === s) a.push(e);else if (Array.isArray(e)) {
        if (e instanceof c) return e;
        a = e;
      }

      return new c(function (e) {
        for (var t = [], i = 0; i < e.length; i += 1) {
          -1 === t.indexOf(e[i]) && t.push(e[i]);
        }

        return t;
      }(a));
    }

    m.fn = c.prototype;
    var g,
        w,
        y,
        b = {
      addClass: function addClass() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
          t[i] = arguments[i];
        }

        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).add.apply(t, s);
        }), this;
      },
      removeClass: function removeClass() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
          t[i] = arguments[i];
        }

        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).remove.apply(t, s);
        }), this;
      },
      hasClass: function hasClass() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
          t[i] = arguments[i];
        }

        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        return v(this, function (e) {
          return s.filter(function (t) {
            return e.classList.contains(t);
          }).length > 0;
        }).length > 0;
      },
      toggleClass: function toggleClass() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
          t[i] = arguments[i];
        }

        var s = f(t.map(function (e) {
          return e.split(" ");
        }));
        this.forEach(function (e) {
          s.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function attr(e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

        for (var i = 0; i < this.length; i += 1) {
          if (2 === arguments.length) this[i].setAttribute(e, t);else for (var s in e) {
            this[i][s] = e[s], this[i].setAttribute(s, e[s]);
          }
        }

        return this;
      },
      removeAttr: function removeAttr(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].removeAttribute(e);
        }

        return this;
      },
      transform: function transform(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].style.transform = e;
        }

        return this;
      },
      transition: function transition(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].style.transition = "string" != typeof e ? e + "ms" : e;
        }

        return this;
      },
      on: function on() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
          t[i] = arguments[i];
        }

        var s = t[0],
            a = t[1],
            r = t[2],
            n = t[3];

        function l(e) {
          var t = e.target;

          if (t) {
            var i = e.target.dom7EventData || [];
            if (i.indexOf(e) < 0 && i.unshift(e), m(t).is(a)) r.apply(t, i);else for (var s = m(t).parents(), n = 0; n < s.length; n += 1) {
              m(s[n]).is(a) && r.apply(s[n], i);
            }
          }
        }

        function o(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }

        "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

        for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
          var u = this[p];
          if (a) for (d = 0; d < h.length; d += 1) {
            var c = h[d];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
              listener: r,
              proxyListener: l
            }), u.addEventListener(c, l, n);
          } else for (d = 0; d < h.length; d += 1) {
            var f = h[d];
            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
              listener: r,
              proxyListener: o
            }), u.addEventListener(f, o, n);
          }
        }

        return this;
      },
      off: function off() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
          t[i] = arguments[i];
        }

        var s = t[0],
            a = t[1],
            r = t[2],
            n = t[3];
        "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

        for (var l = s.split(" "), o = 0; o < l.length; o += 1) {
          for (var d = l[o], h = 0; h < this.length; h += 1) {
            var p = this[h],
                u = void 0;
            if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length) for (var c = u.length - 1; c >= 0; c -= 1) {
              var f = u[c];
              r && f.listener === r || r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r ? (p.removeEventListener(d, f.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, f.proxyListener, n), u.splice(c, 1));
            }
          }
        }

        return this;
      },
      trigger: function trigger() {
        for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) {
          i[s] = arguments[s];
        }

        for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) {
          for (var o = a[n], d = 0; d < this.length; d += 1) {
            var h = this[d];

            if (e.CustomEvent) {
              var p = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0
              });
              h.dom7EventData = i.filter(function (e, t) {
                return t > 0;
              }), h.dispatchEvent(p), h.dom7EventData = [], delete h.dom7EventData;
            }
          }
        }

        return this;
      },
      transitionEnd: function transitionEnd(e) {
        var t = this;
        return e && t.on("transitionend", function i(s) {
          s.target === this && (e.call(this, s), t.off("transitionend", i));
        }), this;
      },
      outerWidth: function outerWidth(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
          }

          return this[0].offsetWidth;
        }

        return null;
      },
      outerHeight: function outerHeight(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
          }

          return this[0].offsetHeight;
        }

        return null;
      },
      styles: function styles() {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function offset() {
        if (this.length > 0) {
          var e = l(),
              t = r(),
              i = this[0],
              s = i.getBoundingClientRect(),
              a = t.body,
              n = i.clientTop || a.clientTop || 0,
              o = i.clientLeft || a.clientLeft || 0,
              d = i === e ? e.scrollY : i.scrollTop,
              h = i === e ? e.scrollX : i.scrollLeft;
          return {
            top: s.top + d - n,
            left: s.left + h - o
          };
        }

        return null;
      },
      css: function css(e, t) {
        var i,
            s = l();

        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1) {
              for (var a in e) {
                this[i].style[a] = e[a];
              }
            }

            return this;
          }

          if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }

        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) {
            this[i].style[e] = t;
          }

          return this;
        }

        return this;
      },
      each: function each(e) {
        return e ? (this.forEach(function (t, i) {
          e.apply(t, [t, i]);
        }), this) : this;
      },
      html: function html(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;

        for (var t = 0; t < this.length; t += 1) {
          this[t].innerHTML = e;
        }

        return this;
      },
      text: function text(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

        for (var t = 0; t < this.length; t += 1) {
          this[t].textContent = e;
        }

        return this;
      },
      is: function is(e) {
        var t,
            i,
            s = l(),
            a = r(),
            n = this[0];
        if (!n || void 0 === e) return !1;

        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);

          for (t = m(e), i = 0; i < t.length; i += 1) {
            if (t[i] === n) return !0;
          }

          return !1;
        }

        if (e === a) return n === a;
        if (e === s) return n === s;

        if (e.nodeType || e instanceof c) {
          for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) {
            if (t[i] === n) return !0;
          }

          return !1;
        }

        return !1;
      },
      index: function index() {
        var e,
            t = this[0];

        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) {
            1 === t.nodeType && (e += 1);
          }

          return e;
        }
      },
      eq: function eq(e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);

        if (e < 0) {
          var i = t + e;
          return m(i < 0 ? [] : [this[i]]);
        }

        return m([this[e]]);
      },
      append: function append() {
        for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
          e = i < 0 || arguments.length <= i ? void 0 : arguments[i];

          for (var s = 0; s < this.length; s += 1) {
            if ("string" == typeof e) {
              var a = t.createElement("div");

              for (a.innerHTML = e; a.firstChild;) {
                this[s].appendChild(a.firstChild);
              }
            } else if (e instanceof c) for (var n = 0; n < e.length; n += 1) {
              this[s].appendChild(e[n]);
            } else this[s].appendChild(e);
          }
        }

        return this;
      },
      prepend: function prepend(e) {
        var t,
            i,
            s = r();

        for (t = 0; t < this.length; t += 1) {
          if ("string" == typeof e) {
            var a = s.createElement("div");

            for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) {
              this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
            }
          } else if (e instanceof c) for (i = 0; i < e.length; i += 1) {
            this[t].insertBefore(e[i], this[t].childNodes[0]);
          } else this[t].insertBefore(e, this[t].childNodes[0]);
        }

        return this;
      },
      next: function next(e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
      },
      nextAll: function nextAll(e) {
        var t = [],
            i = this[0];
        if (!i) return m([]);

        for (; i.nextElementSibling;) {
          var s = i.nextElementSibling;
          e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
        }

        return m(t);
      },
      prev: function prev(e) {
        if (this.length > 0) {
          var t = this[0];
          return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
        }

        return m([]);
      },
      prevAll: function prevAll(e) {
        var t = [],
            i = this[0];
        if (!i) return m([]);

        for (; i.previousElementSibling;) {
          var s = i.previousElementSibling;
          e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
        }

        return m(t);
      },
      parent: function parent(e) {
        for (var t = [], i = 0; i < this.length; i += 1) {
          null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
        }

        return m(t);
      },
      parents: function parents(e) {
        for (var t = [], i = 0; i < this.length; i += 1) {
          for (var s = this[i].parentNode; s;) {
            e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
          }
        }

        return m(t);
      },
      closest: function closest(e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function find(e) {
        for (var t = [], i = 0; i < this.length; i += 1) {
          for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) {
            t.push(s[a]);
          }
        }

        return m(t);
      },
      children: function children(e) {
        for (var t = [], i = 0; i < this.length; i += 1) {
          for (var s = this[i].children, a = 0; a < s.length; a += 1) {
            e && !m(s[a]).is(e) || t.push(s[a]);
          }
        }

        return m(t);
      },
      filter: function filter(e) {
        return m(v(this, e));
      },
      remove: function remove() {
        for (var e = 0; e < this.length; e += 1) {
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        }

        return this;
      }
    };

    function E(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }

    function x() {
      return Date.now();
    }

    function T(e, t) {
      void 0 === t && (t = "x");
      var i,
          s,
          a,
          r = l(),
          n = r.getComputedStyle(e, null);
      return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
    }

    function C(e) {
      return "object" == _typeof2(e) && null !== e && e.constructor && e.constructor === Object;
    }

    function S() {
      for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
        var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (null != i) for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
          var n = s[a],
              l = Object.getOwnPropertyDescriptor(i, n);
          void 0 !== l && l.enumerable && (C(e[n]) && C(i[n]) ? S(e[n], i[n]) : !C(e[n]) && C(i[n]) ? (e[n] = {}, S(e[n], i[n])) : e[n] = i[n]);
        }
      }

      return e;
    }

    function M(e, t) {
      Object.keys(t).forEach(function (i) {
        C(t[i]) && Object.keys(t[i]).forEach(function (s) {
          "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
        }), e[i] = t[i];
      });
    }

    function z() {
      return g || (g = function () {
        var e = l(),
            t = r();
        return {
          touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
          pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
          observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
          passiveListener: function () {
            var t = !1;

            try {
              var i = Object.defineProperty({}, "passive", {
                get: function get() {
                  t = !0;
                }
              });
              e.addEventListener("testPassiveListener", null, i);
            } catch (e) {}

            return t;
          }(),
          gestures: "ongesturestart" in e
        };
      }()), g;
    }

    function P(e) {
      return void 0 === e && (e = {}), w || (w = function (e) {
        var t = (void 0 === e ? {} : e).userAgent,
            i = z(),
            s = l(),
            a = s.navigator.platform,
            r = t || s.navigator.userAgent,
            n = {
          ios: !1,
          android: !1
        },
            o = s.screen.width,
            d = s.screen.height,
            h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
            p = r.match(/(iPad).*OS\s([\d_]+)/),
            u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            f = "Win32" === a,
            v = "MacIntel" === a;
        return !p && v && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), v = !1), h && !f && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n;
      }(e)), w;
    }

    function k() {
      return y || (y = function () {
        var e,
            t = l();
        return {
          isEdge: !!t.navigator.userAgent.match(/Edge/g),
          isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        };
      }()), y;
    }

    Object.keys(b).forEach(function (e) {
      m.fn[e] = b[e];
    });
    var $ = {
      name: "resize",
      create: function create() {
        var e = this;
        S(e, {
          resize: {
            resizeHandler: function resizeHandler() {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function orientationChangeHandler() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function init(e) {
          var t = l();
          t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
        },
        destroy: function destroy(e) {
          var t = l();
          t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
        }
      }
    },
        L = {
      attach: function attach(e, t) {
        void 0 === t && (t = {});
        var i = l(),
            s = this,
            a = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
          if (1 !== e.length) {
            var t = function t() {
              s.emit("observerUpdate", e[0]);
            };

            i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
          } else s.emit("observerUpdate", e[0]);
        });
        a.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), s.observer.observers.push(a);
      },
      init: function init() {
        if (this.support.observer && this.params.observer) {
          if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
            this.observer.attach(e[t]);
          }
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren
          }), this.observer.attach(this.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function destroy() {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    },
        I = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function create() {
        M(this, {
          observer: t(t({}, L), {}, {
            observers: []
          })
        });
      },
      on: {
        init: function init(e) {
          e.observer.init();
        },
        destroy: function destroy(e) {
          e.observer.destroy();
        }
      }
    };

    function O(e) {
      var t = r(),
          i = l(),
          s = this.touchEventsData,
          a = this.params,
          n = this.touches;

      if (!this.animating || !a.preventInteractionOnTransition) {
        var o = e;
        o.originalEvent && (o = o.originalEvent);
        var d = m(o.target);
        if ("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) if (s.isTouchEvent = "touchstart" === o.type, s.isTouchEvent || !("which" in o) || 3 !== o.which) if (!(!s.isTouchEvent && "button" in o && o.button > 0)) if (!s.isTouched || !s.isMoved) if (!!a.noSwipingClass && "" !== a.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (d = m(e.path[0])), a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
          n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
          var h = n.currentX,
              p = n.currentY,
              u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
              c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;

          if (!u || !(h <= c || h >= i.screen.width - c)) {
            if (S(s, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0
            }), n.startX = h, n.startY = p, s.touchStartTime = x(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
              var f = !0;
              d.is(s.formElements) && (f = !1), t.activeElement && m(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
              var v = f && this.allowTouchMove && a.touchStartPreventDefault;
              (a.touchStartForcePreventDefault || v) && o.preventDefault();
            }

            this.emit("touchStart", o);
          }
        }
      }
    }

    function A(e) {
      var t = r(),
          i = this.touchEventsData,
          s = this.params,
          a = this.touches,
          n = this.rtlTranslate,
          l = e;

      if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
        if (!i.isTouchEvent || "touchmove" === l.type) {
          var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
              d = "touchmove" === l.type ? o.pageX : l.pageX,
              h = "touchmove" === l.type ? o.pageY : l.pageY;
          if (l.preventedByNestedSwiper) return a.startX = d, void (a.startY = h);
          if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (S(a, {
            startX: d,
            startY: h,
            currentX: d,
            currentY: h
          }), i.touchStartTime = x()));
          if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
            if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
          } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
          if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

          if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
            a.currentX = d, a.currentY = h;
            var p = a.currentX - a.startX,
                u = a.currentY - a.startY;

            if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
              var c;
              if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (c = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
              if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                this.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                var f = this.isHorizontal() ? p : u;
                a.diff = f, f *= s.touchRatio, n && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                var v = !0,
                    g = s.resistanceRatio;

                if (s.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (v = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), v && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                  if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
                }

                s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                  position: a[this.isHorizontal() ? "startX" : "startY"],
                  time: i.touchStartTime
                }), i.velocities.push({
                  position: a[this.isHorizontal() ? "currentX" : "currentY"],
                  time: x()
                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
              }
            }
          }
        }
      } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
    }

    function D(e) {
      var t = this,
          i = t.touchEventsData,
          s = t.params,
          a = t.touches,
          r = t.rtlTranslate,
          n = t.$wrapperEl,
          l = t.slidesGrid,
          o = t.snapGrid,
          d = e;
      if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
      s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
      var h,
          p = x(),
          u = p - i.touchStartTime;
      if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = x(), E(function () {
        t.destroyed || (t.allowClick = !0);
      }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
      if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
        if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (h > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

        if (s.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var c = i.velocities.pop(),
                f = i.velocities.pop(),
                v = c.position - f.position,
                m = c.time - f.time;
            t.velocity = v / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - c.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;

          t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
          var g = 1e3 * s.freeModeMomentumRatio,
              w = t.velocity * g,
              y = t.translate + w;
          r && (y = -y);
          var b,
              T,
              C = !1,
              S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
          if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), b = t.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), b = t.minTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
            for (var M, z = 0; z < o.length; z += 1) {
              if (o[z] > -y) {
                M = z;
                break;
              }
            }

            y = -(y = Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
          }

          if (T && t.once("transitionEnd", function () {
            t.loopFix();
          }), 0 !== t.velocity) {
            if (g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
              var P = Math.abs((r ? -y : y) - t.translate),
                  k = t.slidesSizesGrid[t.activeIndex];
              g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
            }
          } else if (s.freeModeSticky) return void t.slideToClosest();

          s.freeModeMomentumBounce && C ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
              t.setTranslate(b), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              });
            }, 0));
          })) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
        } else if (s.freeModeSticky) return void t.slideToClosest();

        (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
          var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== l[I + O] ? h >= l[I] && h < l[I + O] && ($ = I, L = l[I + O] - l[I]) : h >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
        }

        var A = (h - l[$]) / L,
            D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;

        if (u > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
        }
      }
    }

    function G() {
      var e = this.params,
          t = this.el;

      if (!t || 0 !== t.offsetWidth) {
        e.breakpoints && this.setBreakpoint();
        var i = this.allowSlideNext,
            s = this.allowSlidePrev,
            a = this.snapGrid;
        this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
      }
    }

    function N(e) {
      this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
    }

    function B() {
      var e = this.wrapperEl,
          t = this.rtlTranslate;
      this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
      var i = this.maxTranslate() - this.minTranslate();
      (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
    }

    var H = !1;

    function X() {}

    var Y = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      nested: !1,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    },
        V = {
      modular: {
        useParams: function useParams(e) {
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (i) {
            var s = t.modules[i];
            s.params && S(e, s.params);
          });
        },
        useModules: function useModules(e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (i) {
            var s = t.modules[i],
                a = e[i] || {};
            s.on && t.on && Object.keys(s.on).forEach(function (e) {
              t.on(e, s.on[e]);
            }), s.create && s.create.bind(t)(a);
          });
        }
      },
      eventsEmitter: {
        on: function on(e, t, i) {
          var s = this;
          if ("function" != typeof t) return s;
          var a = i ? "unshift" : "push";
          return e.split(" ").forEach(function (e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
          }), s;
        },
        once: function once(e, t, i) {
          var s = this;
          if ("function" != typeof t) return s;

          function a() {
            s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;

            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) {
              r[n] = arguments[n];
            }

            t.apply(s, r);
          }

          return a.__emitterProxy = t, s.on(e, a, i);
        },
        onAny: function onAny(e, t) {
          if ("function" != typeof e) return this;
          var i = t ? "unshift" : "push";
          return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
        },
        offAny: function offAny(e) {
          if (!this.eventsAnyListeners) return this;
          var t = this.eventsAnyListeners.indexOf(e);
          return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
        },
        off: function off(e, t) {
          var i = this;
          return i.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (s, a) {
              (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1);
            });
          }), i) : i;
        },
        emit: function emit() {
          var e,
              t,
              i,
              s = this;
          if (!s.eventsListeners) return s;

          for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) {
            r[n] = arguments[n];
          }

          "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i);
          var l = Array.isArray(e) ? e : e.split(" ");
          return l.forEach(function (e) {
            if (s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(function (s) {
              s.apply(i, [e].concat(t));
            }), s.eventsListeners && s.eventsListeners[e]) {
              var a = [];
              s.eventsListeners[e].forEach(function (e) {
                a.push(e);
              }), a.forEach(function (e) {
                e.apply(i, t);
              });
            }
          }), s;
        }
      },
      update: {
        updateSize: function updateSize() {
          var e,
              t,
              i = this.$el;
          e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(this, {
            width: e,
            height: t,
            size: this.isHorizontal() ? e : t
          }));
        },
        updateSlides: function updateSlides() {
          var e = l(),
              t = this.params,
              i = this.$wrapperEl,
              s = this.size,
              a = this.rtlTranslate,
              r = this.wrongRTL,
              n = this.virtual && t.virtual.enabled,
              o = n ? this.virtual.slides.length : this.slides.length,
              d = i.children("." + this.params.slideClass),
              h = n ? this.virtual.slides.length : d.length,
              p = [],
              u = [],
              c = [];

          function f(e, i) {
            return !t.cssMode || i !== d.length - 1;
          }

          var v = t.slidesOffsetBefore;
          "function" == typeof v && (v = t.slidesOffsetBefore.call(this));
          var m = t.slidesOffsetAfter;
          "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
          var g = this.snapGrid.length,
              w = this.snapGrid.length,
              y = t.spaceBetween,
              b = -v,
              E = 0,
              x = 0;

          if (void 0 !== s) {
            var T, C;
            "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s), this.virtualSize = -y, a ? d.css({
              marginLeft: "",
              marginTop: ""
            }) : d.css({
              marginRight: "",
              marginBottom: ""
            }), t.slidesPerColumn > 1 && (T = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));

            for (var M, z = t.slidesPerColumn, P = T / z, k = Math.floor(h / t.slidesPerColumn), $ = 0; $ < h; $ += 1) {
              C = 0;
              var L = d.eq($);

              if (t.slidesPerColumn > 1) {
                var I = void 0,
                    O = void 0,
                    A = void 0;

                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                  var D = Math.floor($ / (t.slidesPerGroup * t.slidesPerColumn)),
                      G = $ - t.slidesPerColumn * t.slidesPerGroup * D,
                      N = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * z * t.slidesPerGroup) / z), t.slidesPerGroup);
                  I = (O = G - (A = Math.floor(G / N)) * N + D * t.slidesPerGroup) + A * T / z, L.css({
                    "-webkit-box-ordinal-group": I,
                    "-moz-box-ordinal-group": I,
                    "-ms-flex-order": I,
                    "-webkit-order": I,
                    order: I
                  });
                } else "column" === t.slidesPerColumnFill ? (A = $ - (O = Math.floor($ / z)) * z, (O > k || O === k && A === z - 1) && (A += 1) >= z && (A = 0, O += 1)) : O = $ - (A = Math.floor($ / P)) * P;

                L.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px");
              }

              if ("none" !== L.css("display")) {
                if ("auto" === t.slidesPerView) {
                  var B = e.getComputedStyle(L[0], null),
                      H = L[0].style.transform,
                      X = L[0].style.webkitTransform;
                  if (H && (L[0].style.transform = "none"), X && (L[0].style.webkitTransform = "none"), t.roundLengths) C = this.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);else if (this.isHorizontal()) {
                    var Y = parseFloat(B.getPropertyValue("width") || 0),
                        V = parseFloat(B.getPropertyValue("padding-left") || 0),
                        F = parseFloat(B.getPropertyValue("padding-right") || 0),
                        R = parseFloat(B.getPropertyValue("margin-left") || 0),
                        W = parseFloat(B.getPropertyValue("margin-right") || 0),
                        q = B.getPropertyValue("box-sizing");
                    if (q && "border-box" === q) C = Y + R + W;else {
                      var j = L[0],
                          _ = j.clientWidth;
                      C = Y + V + F + R + W + (j.offsetWidth - _);
                    }
                  } else {
                    var U = parseFloat(B.getPropertyValue("height") || 0),
                        K = parseFloat(B.getPropertyValue("padding-top") || 0),
                        Z = parseFloat(B.getPropertyValue("padding-bottom") || 0),
                        J = parseFloat(B.getPropertyValue("margin-top") || 0),
                        Q = parseFloat(B.getPropertyValue("margin-bottom") || 0),
                        ee = B.getPropertyValue("box-sizing");
                    if (ee && "border-box" === ee) C = U + J + Q;else {
                      var te = L[0],
                          ie = te.clientHeight;
                      C = U + K + Z + J + Q + (te.offsetHeight - ie);
                    }
                  }
                  H && (L[0].style.transform = H), X && (L[0].style.webkitTransform = X), t.roundLengths && (C = Math.floor(C));
                } else C = (s - (t.slidesPerView - 1) * y) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), d[$] && (this.isHorizontal() ? d[$].style.width = C + "px" : d[$].style.height = C + "px");

                d[$] && (d[$].swiperSlideSize = C), c.push(C), t.centeredSlides ? (b = b + C / 2 + E / 2 + y, 0 === E && 0 !== $ && (b = b - s / 2 - y), 0 === $ && (b = b - s / 2 - y), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), x % t.slidesPerGroup == 0 && p.push(b), u.push(b)) : (t.roundLengths && (b = Math.floor(b)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && p.push(b), u.push(b), b = b + C + y), this.virtualSize += C + y, E = C, x += 1;
              }
            }

            if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
              width: this.virtualSize + t.spaceBetween + "px"
            }), t.setWrapperSize && (this.isHorizontal() ? i.css({
              width: this.virtualSize + t.spaceBetween + "px"
            }) : i.css({
              height: this.virtualSize + t.spaceBetween + "px"
            })), t.slidesPerColumn > 1 && (this.virtualSize = (C + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
              width: this.virtualSize + t.spaceBetween + "px"
            }) : i.css({
              height: this.virtualSize + t.spaceBetween + "px"
            }), t.centeredSlides)) {
              M = [];

              for (var se = 0; se < p.length; se += 1) {
                var ae = p[se];
                t.roundLengths && (ae = Math.floor(ae)), p[se] < this.virtualSize + p[0] && M.push(ae);
              }

              p = M;
            }

            if (!t.centeredSlides) {
              M = [];

              for (var re = 0; re < p.length; re += 1) {
                var ne = p[re];
                t.roundLengths && (ne = Math.floor(ne)), p[re] <= this.virtualSize - s && M.push(ne);
              }

              p = M, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
            }

            if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? a ? d.filter(f).css({
              marginLeft: y + "px"
            }) : d.filter(f).css({
              marginRight: y + "px"
            }) : d.filter(f).css({
              marginBottom: y + "px"
            })), t.centeredSlides && t.centeredSlidesBounds) {
              var le = 0;
              c.forEach(function (e) {
                le += e + (t.spaceBetween ? t.spaceBetween : 0);
              });
              var oe = (le -= t.spaceBetween) - s;
              p = p.map(function (e) {
                return e < 0 ? -v : e > oe ? oe + m : e;
              });
            }

            if (t.centerInsufficientSlides) {
              var de = 0;

              if (c.forEach(function (e) {
                de += e + (t.spaceBetween ? t.spaceBetween : 0);
              }), (de -= t.spaceBetween) < s) {
                var he = (s - de) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - he;
                }), u.forEach(function (e, t) {
                  u[t] = e + he;
                });
              }
            }

            S(this, {
              slides: d,
              snapGrid: p,
              slidesGrid: u,
              slidesSizesGrid: c
            }), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== w && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
          }
        },
        updateAutoHeight: function updateAutoHeight(e) {
          var t,
              i = [],
              s = 0;
          if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
            if (this.params.centeredSlides) this.visibleSlides.each(function (e) {
              i.push(e);
            });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
              var a = this.activeIndex + t;
              if (a > this.slides.length) break;
              i.push(this.slides.eq(a)[0]);
            }
          } else i.push(this.slides.eq(this.activeIndex)[0]);

          for (t = 0; t < i.length; t += 1) {
            if (void 0 !== i[t]) {
              var r = i[t].offsetHeight;
              s = r > s ? r : s;
            }
          }

          s && this.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function updateSlidesOffset() {
          for (var e = this.slides, t = 0; t < e.length; t += 1) {
            e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
          }
        },
        updateSlidesProgress: function updateSlidesProgress(e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this.params,
              i = this.slides,
              s = this.rtlTranslate;

          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
            var a = -e;
            s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];

            for (var r = 0; r < i.length; r += 1) {
              var n = i[r],
                  l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);

              if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                var o = -(a - n.swiperSlideOffset),
                    d = o + this.slidesSizesGrid[r];
                (o >= 0 && o < this.size - 1 || d > 1 && d <= this.size || o <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
              }

              n.progress = s ? -l : l;
            }

            this.visibleSlides = m(this.visibleSlides);
          }
        },
        updateProgress: function updateProgress(e) {
          if (void 0 === e) {
            var t = this.rtlTranslate ? -1 : 1;
            e = this && this.translate && this.translate * t || 0;
          }

          var i = this.params,
              s = this.maxTranslate() - this.minTranslate(),
              a = this.progress,
              r = this.isBeginning,
              n = this.isEnd,
              l = r,
              o = n;
          0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), S(this, {
            progress: a,
            isBeginning: r,
            isEnd: n
          }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !r || o && !n) && this.emit("fromEdge"), this.emit("progress", a);
        },
        updateSlidesClasses: function updateSlidesClasses() {
          var e,
              t = this.slides,
              i = this.params,
              s = this.$wrapperEl,
              a = this.activeIndex,
              r = this.realIndex,
              n = this.virtual && i.virtual.enabled;
          t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
          var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
          i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
          var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
          i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses();
        },
        updateActiveIndex: function updateActiveIndex(e) {
          var t,
              i = this.rtlTranslate ? this.translate : -this.translate,
              s = this.slidesGrid,
              a = this.snapGrid,
              r = this.params,
              n = this.activeIndex,
              l = this.realIndex,
              o = this.snapIndex,
              d = e;

          if (void 0 === d) {
            for (var h = 0; h < s.length; h += 1) {
              void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
            }

            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }

          if (a.indexOf(i) >= 0) t = a.indexOf(i);else {
            var p = Math.min(r.slidesPerGroupSkip, d);
            t = p + Math.floor((d - p) / r.slidesPerGroup);
          }

          if (t >= a.length && (t = a.length - 1), d !== n) {
            var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
            S(this, {
              snapIndex: t,
              realIndex: u,
              previousIndex: n,
              activeIndex: d
            }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
          } else t !== o && (this.snapIndex = t, this.emit("snapIndexChange"));
        },
        updateClickedSlide: function updateClickedSlide(e) {
          var t = this.params,
              i = m(e.target).closest("." + t.slideClass)[0],
              s = !1;
          if (i) for (var a = 0; a < this.slides.length; a += 1) {
            this.slides[a] === i && (s = !0);
          }
          if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
          this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = m(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
        }
      },
      translate: {
        getTranslate: function getTranslate(e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this.params,
              i = this.rtlTranslate,
              s = this.translate,
              a = this.$wrapperEl;
          if (t.virtualTranslate) return i ? -s : s;
          if (t.cssMode) return s;
          var r = T(a[0], e);
          return i && (r = -r), r || 0;
        },
        setTranslate: function setTranslate(e, t) {
          var i = this.rtlTranslate,
              s = this.params,
              a = this.$wrapperEl,
              r = this.wrapperEl,
              n = this.progress,
              l = 0,
              o = 0;
          this.isHorizontal() ? l = i ? -e : e : o = e, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : o;
          var d = this.maxTranslate() - this.minTranslate();
          (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function minTranslate() {
          return -this.snapGrid[0];
        },
        maxTranslate: function maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function translateTo(e, t, i, s, a) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
          var r = this,
              n = r.params,
              l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o,
              d = r.minTranslate(),
              h = r.maxTranslate();

          if (o = s && e > d ? d : s && e < h ? h : e, r.updateProgress(o), n.cssMode) {
            var p,
                u = r.isHorizontal();
            if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((p = {})[u ? "left" : "top"] = -o, p.behavior = "smooth", p));else l[u ? "scrollLeft" : "scrollTop"] = -o;
            return !0;
          }

          return 0 === t ? (r.setTransition(0), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"));
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
        }
      },
      transition: {
        setTransition: function setTransition(e, t) {
          this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function transitionStart(e, t) {
          void 0 === e && (e = !0);
          var i = this.activeIndex,
              s = this.params,
              a = this.previousIndex;

          if (!s.cssMode) {
            s.autoHeight && this.updateAutoHeight();
            var r = t;

            if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
              if ("reset" === r) return void this.emit("slideResetTransitionStart");
              this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function transitionEnd(e, t) {
          void 0 === e && (e = !0);
          var i = this.activeIndex,
              s = this.previousIndex,
              a = this.params;

          if (this.animating = !1, !a.cssMode) {
            this.setTransition(0);
            var r = t;

            if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
              if ("reset" === r) return void this.emit("slideResetTransitionEnd");
              this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
            }
          }
        }
      },
      slide: {
        slideTo: function slideTo(e, t, i, s) {
          if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + _typeof2(e) + "] given.");

          if ("string" == typeof e) {
            var a = parseInt(e, 10);
            if (!isFinite(a)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
            e = a;
          }

          var r = this,
              n = e;
          n < 0 && (n = 0);
          var l = r.params,
              o = r.snapGrid,
              d = r.slidesGrid,
              h = r.previousIndex,
              p = r.activeIndex,
              u = r.rtlTranslate,
              c = r.wrapperEl;
          if (r.animating && l.preventInteractionOnTransition) return !1;
          var f = Math.min(r.params.slidesPerGroupSkip, n),
              v = f + Math.floor((n - f) / r.params.slidesPerGroup);
          v >= o.length && (v = o.length - 1), (p || l.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
          var m,
              g = -o[v];
          if (r.updateProgress(g), l.normalizeSlideIndex) for (var w = 0; w < d.length; w += 1) {
            -Math.floor(100 * g) >= Math.floor(100 * d[w]) && (n = w);
          }

          if (r.initialized && n !== p) {
            if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1;
          }

          if (m = n > p ? "next" : n < p ? "prev" : "reset", u && -g === r.translate || !u && g === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;

          if (l.cssMode) {
            var y,
                b = r.isHorizontal(),
                E = -g;
            if (u && (E = c.scrollWidth - c.offsetWidth - E), 0 === t) c[b ? "scrollLeft" : "scrollTop"] = E;else if (c.scrollTo) c.scrollTo(((y = {})[b ? "left" : "top"] = E, y.behavior = "smooth", y));else c[b ? "scrollLeft" : "scrollTop"] = E;
            return !0;
          }

          return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m));
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
        },
        slideToLoop: function slideToLoop(e, t, i, s) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var a = e;
          return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
        },
        slideNext: function slideNext(e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var s = this.params,
              a = this.animating,
              r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

          if (s.loop) {
            if (a && s.loopPreventsSlide) return !1;
            this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
          }

          return this.slideTo(this.activeIndex + r, e, t, i);
        },
        slidePrev: function slidePrev(e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var s = this.params,
              a = this.animating,
              r = this.snapGrid,
              n = this.slidesGrid,
              l = this.rtlTranslate;

          if (s.loop) {
            if (a && s.loopPreventsSlide) return !1;
            this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
          }

          function o(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }

          var d,
              h = o(l ? this.translate : -this.translate),
              p = r.map(function (e) {
            return o(e);
          }),
              u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
          return void 0 === u && s.cssMode && r.forEach(function (e) {
            !u && h >= e && (u = e);
          }), void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
        },
        slideReset: function slideReset(e, t, i) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function slideToClosest(e, t, i, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
          var a = this.activeIndex,
              r = Math.min(this.params.slidesPerGroupSkip, a),
              n = r + Math.floor((a - r) / this.params.slidesPerGroup),
              l = this.rtlTranslate ? this.translate : -this.translate;

          if (l >= this.snapGrid[n]) {
            var o = this.snapGrid[n];
            l - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup);
          } else {
            var d = this.snapGrid[n - 1];
            l - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
          }

          return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i);
        },
        slideToClickedSlide: function slideToClickedSlide() {
          var e,
              t = this,
              i = t.params,
              s = t.$wrapperEl,
              a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
              r = t.clickedIndex;

          if (i.loop) {
            if (t.animating) return;
            e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
              t.slideTo(r);
            })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
              t.slideTo(r);
            })) : t.slideTo(r);
          } else t.slideTo(r);
        }
      },
      loop: {
        loopCreate: function loopCreate() {
          var e = this,
              t = r(),
              i = e.params,
              s = e.$wrapperEl;
          s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
          var a = s.children("." + i.slideClass);

          if (i.loopFillGroupWithBlank) {
            var n = i.slidesPerGroup - a.length % i.slidesPerGroup;

            if (n !== i.slidesPerGroup) {
              for (var l = 0; l < n; l += 1) {
                var o = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                s.append(o);
              }

              a = s.children("." + i.slideClass);
            }
          }

          "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
          var d = [],
              h = [];
          a.each(function (t, i) {
            var s = m(t);
            i < e.loopedSlides && h.push(t), i < a.length && i >= a.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i);
          });

          for (var p = 0; p < h.length; p += 1) {
            s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
          }

          for (var u = d.length - 1; u >= 0; u -= 1) {
            s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
          }
        },
        loopFix: function loopFix() {
          this.emit("beforeLoopFix");
          var e,
              t = this.activeIndex,
              i = this.slides,
              s = this.loopedSlides,
              a = this.allowSlidePrev,
              r = this.allowSlideNext,
              n = this.snapGrid,
              l = this.rtlTranslate;
          this.allowSlidePrev = !0, this.allowSlideNext = !0;
          var o = -n[t] - this.getTranslate();
          if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);else if (t >= i.length - s) {
            e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);
          }
          this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
        },
        loopDestroy: function loopDestroy() {
          var e = this.$wrapperEl,
              t = this.params,
              i = this.slides;
          e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
        }
      },
      grabCursor: {
        setGrabCursor: function setGrabCursor(e) {
          if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
            var t = this.el;
            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
          }
        },
        unsetGrabCursor: function unsetGrabCursor() {
          this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
        }
      },
      manipulation: {
        appendSlide: function appendSlide(e) {
          var t = this.$wrapperEl,
              i = this.params;
          if (i.loop && this.loopDestroy(), "object" == _typeof2(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
            e[s] && t.append(e[s]);
          } else t.append(e);
          i.loop && this.loopCreate(), i.observer && this.support.observer || this.update();
        },
        prependSlide: function prependSlide(e) {
          var t = this.params,
              i = this.$wrapperEl,
              s = this.activeIndex;
          t.loop && this.loopDestroy();
          var a = s + 1;

          if ("object" == _typeof2(e) && "length" in e) {
            for (var r = 0; r < e.length; r += 1) {
              e[r] && i.prepend(e[r]);
            }

            a = s + e.length;
          } else i.prepend(e);

          t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1);
        },
        addSlide: function addSlide(e, t) {
          var i = this.$wrapperEl,
              s = this.params,
              a = this.activeIndex;
          s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
          var r = this.slides.length;
          if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
            for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
              var d = this.slides.eq(o);
              d.remove(), l.unshift(d);
            }

            if ("object" == _typeof2(t) && "length" in t) {
              for (var h = 0; h < t.length; h += 1) {
                t[h] && i.append(t[h]);
              }

              n = a > e ? a + t.length : a;
            } else i.append(t);

            for (var p = 0; p < l.length; p += 1) {
              i.append(l[p]);
            }

            s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
          }
        },
        removeSlide: function removeSlide(e) {
          var t = this.params,
              i = this.$wrapperEl,
              s = this.activeIndex;
          t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
          var a,
              r = s;

          if ("object" == _typeof2(e) && "length" in e) {
            for (var n = 0; n < e.length; n += 1) {
              a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
            }

            r = Math.max(r, 0);
          } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);

          t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
        },
        removeAllSlides: function removeAllSlides() {
          for (var e = [], t = 0; t < this.slides.length; t += 1) {
            e.push(t);
          }

          this.removeSlide(e);
        }
      },
      events: {
        attachEvents: function attachEvents() {
          var e = r(),
              t = this.params,
              i = this.touchEvents,
              s = this.el,
              a = this.wrapperEl,
              n = this.device,
              l = this.support;
          this.onTouchStart = O.bind(this), this.onTouchMove = A.bind(this), this.onTouchEnd = D.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = N.bind(this);
          var o = !!t.nested;
          if (!l.touch && l.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, o), e.addEventListener(i.end, this.onTouchEnd, !1);else {
            if (l.touch) {
              var d = !("touchstart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
                passive: !1,
                capture: o
              } : o), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), H || (e.addEventListener("touchstart", X), H = !0);
            }

            (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, o), e.addEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
        },
        detachEvents: function detachEvents() {
          var e = r(),
              t = this.params,
              i = this.touchEvents,
              s = this.el,
              a = this.wrapperEl,
              n = this.device,
              l = this.support,
              o = !!t.nested;
          if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
            if (l.touch) {
              var d = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
            }

            (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this.activeIndex,
              t = this.initialized,
              i = this.loopedSlides,
              s = void 0 === i ? 0 : i,
              a = this.params,
              r = this.$el,
              n = a.breakpoints;

          if (n && (!n || 0 !== Object.keys(n).length)) {
            var l = this.getBreakpoint(n);

            if (l && this.currentBreakpoint !== l) {
              var o = l in n ? n[l] : void 0;
              o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                var t = o[e];
                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
              });
              var d = o || this.originalParams,
                  h = a.slidesPerColumn > 1,
                  p = d.slidesPerColumn > 1;
              h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
              var u = d.direction && d.direction !== a.direction,
                  c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
              u && t && this.changeDirection(), S(this.params, d), S(this, {
                allowTouchMove: this.params.allowTouchMove,
                allowSlideNext: this.params.allowSlideNext,
                allowSlidePrev: this.params.allowSlidePrev
              }), this.currentBreakpoint = l, this.emit("_beforeBreakpoint", d), c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
            }
          }
        },
        getBreakpoint: function getBreakpoint(e) {
          var t = l();

          if (e) {
            var i = !1,
                s = Object.keys(e).map(function (e) {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                var i = parseFloat(e.substr(1));
                return {
                  value: t.innerHeight * i,
                  point: e
                };
              }

              return {
                value: e,
                point: e
              };
            });
            s.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });

            for (var a = 0; a < s.length; a += 1) {
              var r = s[a],
                  n = r.point;
              r.value <= t.innerWidth && (i = n);
            }

            return i || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this.params,
              t = this.isLocked,
              i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update());
        }
      },
      classes: {
        addClasses: function addClasses() {
          var e = this.classNames,
              t = this.params,
              i = this.rtl,
              s = this.$el,
              a = this.device,
              r = [];
          r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && (r.push("multirow"), "column" === t.slidesPerColumnFill && r.push("multirow-column")), a.android && r.push("android"), a.ios && r.push("ios"), t.cssMode && r.push("css-mode"), r.forEach(function (i) {
            e.push(t.containerModifierClass + i);
          }), s.addClass(e.join(" ")), this.emitContainerClasses();
        },
        removeClasses: function removeClasses() {
          var e = this.$el,
              t = this.classNames;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        }
      },
      images: {
        loadImage: function loadImage(e, t, i, s, a, r) {
          var n,
              o = l();

          function d() {
            r && r();
          }

          m(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d();
        },
        preloadImages: function preloadImages() {
          var e = this;

          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }

          e.imagesToLoad = e.$el.find("img");

          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
        F = {},
        R = function () {
      function t() {
        for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) {
          a[r] = arguments[r];
        }

        1 === a.length && a[0].constructor && a[0].constructor === Object ? i = a[0] : (e = a[0], i = a[1]), i || (i = {}), i = S({}, i), e && !i.el && (i.el = e);
        var n = this;
        n.support = z(), n.device = P({
          userAgent: i.userAgent
        }), n.browser = k(), n.eventsListeners = {}, n.eventsAnyListeners = [], void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function (e) {
          var t = n.modules[e];

          if (t.params) {
            var s = Object.keys(t.params)[0],
                a = t.params[s];
            if ("object" != _typeof2(a) || null === a) return;
            if (!(s in i) || !("enabled" in a)) return;
            !0 === i[s] && (i[s] = {
              enabled: !0
            }), "object" != _typeof2(i[s]) || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
              enabled: !1
            });
          }
        });
        var l = S({}, Y);
        n.useParams(l), n.params = S({}, l, F, i), n.originalParams = S({}, n.params), n.passedParams = S({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(function (e) {
          n.on(e, n.params.on[e]);
        }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = m;
        var o = m(n.params.el);

        if (e = o[0]) {
          if (o.length > 1) {
            var d = [];
            return o.each(function (e) {
              var s = S({}, i, {
                el: e
              });
              d.push(new t(s));
            }), d;
          }

          var h, p, u;
          return e.swiper = n, e && e.shadowRoot && e.shadowRoot.querySelector ? (h = m(e.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
            return o.children(e);
          } : h = o.children("." + n.params.wrapperClass), S(n, {
            $el: o,
            el: e,
            $wrapperEl: h,
            wrapperEl: h[0],
            classNames: [],
            slides: m(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function isHorizontal() {
              return "horizontal" === n.params.direction;
            },
            isVertical: function isVertical() {
              return "vertical" === n.params.direction;
            },
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
            rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
            wrongRTL: "-webkit-box" === h.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
              start: p[0],
              move: p[1],
              end: p[2],
              cancel: p[3]
            }, n.touchEventsDesktop = {
              start: u[0],
              move: u[1],
              end: u[2]
            }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video, label",
              lastClickTime: x(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), n.useModules(), n.emit("_swiper"), n.params.init && n.init(), n;
        }
      }

      var i,
          s,
          a,
          r = t.prototype;
      return r.emitContainerClasses = function () {
        var e = this;

        if (e.params._emitClasses && e.el) {
          var t = e.el.className.split(" ").filter(function (t) {
            return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
          });
          e.emit("_containerClasses", t.join(" "));
        }
      }, r.getSlideClasses = function (e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }, r.emitSlidesClasses = function () {
        var e = this;
        e.params._emitClasses && e.el && e.slides.each(function (t) {
          var i = e.getSlideClasses(t);
          e.emit("_slideClass", t, i);
        });
      }, r.slidesPerViewDynamic = function () {
        var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            s = this.size,
            a = this.activeIndex,
            r = 1;

        if (e.centeredSlides) {
          for (var n, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1) {
            t[o] && !n && (r += 1, (l += t[o].swiperSlideSize) > s && (n = !0));
          }

          for (var d = a - 1; d >= 0; d -= 1) {
            t[d] && !n && (r += 1, (l += t[d].swiperSlideSize) > s && (n = !0));
          }
        } else for (var h = a + 1; h < t.length; h += 1) {
          i[h] - i[a] < s && (r += 1);
        }

        return r;
      }, r.update = function () {
        var e = this;

        if (e && !e.destroyed) {
          var t = e.snapGrid,
              i = e.params;
          i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }

        function s() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
      }, r.changeDirection = function (e, t) {
        void 0 === t && (t = !0);
        var i = this.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), this.emit("changeDirection"), t && this.update()), this;
      }, r.init = function () {
        this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit"));
      }, r.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var i,
            s = this,
            a = s.params,
            r = s.$el,
            n = s.$wrapperEl,
            l = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach(function (e) {
          try {
            i[e] = null;
          } catch (e) {}

          try {
            delete i[e];
          } catch (e) {}
        })), s.destroyed = !0), null;
      }, t.extendDefaults = function (e) {
        S(F, e);
      }, t.installModule = function (e) {
        t.prototype.modules || (t.prototype.modules = {});
        var i = e.name || Object.keys(t.prototype.modules).length + "_" + x();
        t.prototype.modules[i] = e;
      }, t.use = function (e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return t.installModule(e);
        }), t) : (t.installModule(e), t);
      }, i = t, a = [{
        key: "extendedDefaults",
        get: function get() {
          return F;
        }
      }, {
        key: "defaults",
        get: function get() {
          return Y;
        }
      }], (s = null) && e(i.prototype, s), a && e(i, a), t;
    }();

    Object.keys(V).forEach(function (e) {
      Object.keys(V[e]).forEach(function (t) {
        R.prototype[t] = V[e][t];
      });
    }), R.use([$, I]);
    var W = {
      update: function update(e) {
        var t = this,
            i = t.params,
            s = i.slidesPerView,
            a = i.slidesPerGroup,
            r = i.centeredSlides,
            n = t.params.virtual,
            l = n.addSlidesBefore,
            o = n.addSlidesAfter,
            d = t.virtual,
            h = d.from,
            p = d.to,
            u = d.slides,
            c = d.slidesGrid,
            f = d.renderSlide,
            v = d.offset;
        t.updateActiveIndex();
        var m,
            g,
            w,
            y = t.activeIndex || 0;
        m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o, w = a + l);
        var b = Math.max((y || 0) - w, 0),
            E = Math.min((y || 0) + g, u.length - 1),
            x = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

        function T() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
        }

        if (S(t.virtual, {
          from: b,
          to: E,
          offset: x,
          slidesGrid: t.slidesGrid
        }), h === b && p === E && !e) return t.slidesGrid !== c && x !== v && t.slides.css(m, x + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: x,
          from: b,
          to: E,
          slides: function () {
            for (var e = [], t = b; t <= E; t += 1) {
              e.push(u[t]);
            }

            return e;
          }()
        }), void (t.params.virtual.renderExternalUpdate && T());
        var C = [],
            M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = h; z <= p; z += 1) {
          (z < b || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
        }

        for (var P = 0; P < u.length; P += 1) {
          P >= b && P <= E && (void 0 === p || e ? M.push(P) : (P > p && M.push(P), P < h && C.push(P)));
        }

        M.forEach(function (e) {
          t.$wrapperEl.append(f(u[e], e));
        }), C.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(f(u[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
      },
      renderSlide: function renderSlide(e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var s = i.renderSlide ? m(i.renderSlide.call(this, e, t)) : m('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s;
      },
      appendSlide: function appendSlide(e) {
        if ("object" == _typeof2(e) && "length" in e) for (var t = 0; t < e.length; t += 1) {
          e[t] && this.virtual.slides.push(e[t]);
        } else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = this.activeIndex,
            i = t + 1,
            s = 1;

        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a += 1) {
            e[a] && this.virtual.slides.unshift(e[a]);
          }

          i = t + e.length, s = e.length;
        } else this.virtual.slides.unshift(e);

        if (this.params.virtual.cache) {
          var r = this.virtual.cache,
              n = {};
          Object.keys(r).forEach(function (e) {
            var t = r[e],
                i = t.attr("data-swiper-slide-index");
            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
          }), this.virtual.cache = n;
        }

        this.virtual.update(!0), this.slideTo(i, 0);
      },
      removeSlide: function removeSlide(e) {
        if (null != e) {
          var t = this.activeIndex;
          if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
            this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
          } else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
          this.virtual.update(!0), this.slideTo(t, 0);
        }
      },
      removeAllSlides: function removeAllSlides() {
        this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
      }
    },
        q = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        M(this, {
          virtual: t(t({}, W), {}, {
            slides: this.params.virtual.slides,
            cache: {}
          })
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = {
              watchSlidesProgress: !0
            };
            S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function setTranslate(e) {
          e.params.virtual.enabled && e.virtual.update();
        }
      }
    },
        j = {
      handle: function handle(e) {
        var t = l(),
            i = r(),
            s = this.rtlTranslate,
            a = e;
        a.originalEvent && (a = a.originalEvent);
        var n = a.keyCode || a.charCode,
            o = this.params.keyboard.pageUpDown,
            d = o && 33 === n,
            h = o && 34 === n,
            p = 37 === n,
            u = 39 === n,
            c = 38 === n,
            f = 40 === n;
        if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && f || h)) return !1;
        if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d)) return !1;

        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
          if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || f)) {
            var v = !1;
            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
            var m = t.innerWidth,
                g = t.innerHeight,
                w = this.$el.offset();
            s && (w.left -= this.$el[0].scrollLeft);

            for (var y = [[w.left, w.top], [w.left + this.width, w.top], [w.left, w.top + this.height], [w.left + this.width, w.top + this.height]], b = 0; b < y.length; b += 1) {
              var E = y[b];
              E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (v = !0);
            }

            if (!v) return;
          }

          this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((h || u) && !s || (d || p) && s) && this.slideNext(), ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || f) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (h || f) && this.slideNext(), (d || c) && this.slidePrev()), this.emit("keyPress", n);
        }
      },
      enable: function enable() {
        var e = r();
        this.keyboard.enabled || (m(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
      },
      disable: function disable() {
        var e = r();
        this.keyboard.enabled && (m(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
      }
    },
        _ = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0,
          pageUpDown: !0
        }
      },
      create: function create() {
        M(this, {
          keyboard: t({
            enabled: !1
          }, j)
        });
      },
      on: {
        init: function init(e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function destroy(e) {
          e.keyboard.enabled && e.keyboard.disable();
        }
      }
    };
    var U = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function event() {
        return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
          var e = r(),
              t = ("onwheel" in e);

          if (!t) {
            var i = e.createElement("div");
            i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
          }

          return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
        }() ? "wheel" : "mousewheel";
      },
      normalize: function normalize(e) {
        var t = 0,
            i = 0,
            s = 0,
            a = 0;
        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
          spinX: t,
          spinY: i,
          pixelX: s,
          pixelY: a
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function handleMouseLeave() {
        this.mouseEntered = !1;
      },
      handle: function handle(e) {
        var t = e,
            i = this,
            s = i.params.mousewheel;
        i.params.cssMode && t.preventDefault();
        var a = i.$el;
        if ("container" !== i.params.mousewheel.eventsTarget && (a = m(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
            n = i.rtlTranslate ? -1 : 1,
            l = U.normalize(t);
        if (s.forceToAxis) {
          if (i.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            r = -l.pixelX * n;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            r = -l.pixelY;
          }
        } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
        if (0 === r) return !0;

        if (s.invert && (r = -r), i.params.freeMode) {
          var o = {
            time: x(),
            delta: Math.abs(r),
            direction: Math.sign(r)
          },
              d = i.mousewheel.lastEventBeforeSnap,
              h = d && o.time < d.time + 500 && o.delta <= d.delta && o.direction === d.direction;

          if (!h) {
            i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
            var p = i.getTranslate() + r * s.sensitivity,
                u = i.isBeginning,
                c = i.isEnd;

            if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!u && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
              clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
              var f = i.mousewheel.recentWheelEvents;
              f.length >= 15 && f.shift();
              var v = f.length ? f[f.length - 1] : void 0,
                  g = f[0];
              if (f.push(o), v && (o.delta > v.delta || o.direction !== v.direction)) f.splice(0);else if (f.length >= 15 && o.time - g.time < 500 && g.delta - o.delta >= 1 && o.delta <= 6) {
                var w = r > 0 ? .8 : .2;
                i.mousewheel.lastEventBeforeSnap = o, f.splice(0), i.mousewheel.timeout = E(function () {
                  i.slideToClosest(i.params.speed, !0, void 0, w);
                }, 0);
              }
              i.mousewheel.timeout || (i.mousewheel.timeout = E(function () {
                i.mousewheel.lastEventBeforeSnap = o, f.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
              }, 500));
            }

            if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0;
          }
        } else {
          var y = {
            time: x(),
            delta: Math.abs(r),
            direction: Math.sign(r),
            raw: e
          },
              b = i.mousewheel.recentWheelEvents;
          b.length >= 2 && b.shift();
          var T = b.length ? b[b.length - 1] : void 0;
          if (b.push(y), T ? (y.direction !== T.direction || y.delta > T.delta || y.time > T.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0;
        }

        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
      },
      animateSlider: function animateSlider(e) {
        var t = l();
        return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1));
      },
      releaseScroll: function releaseScroll(e) {
        var t = this.params.mousewheel;

        if (e.direction < 0) {
          if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
        } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;

        return !1;
      },
      enable: function enable() {
        var e = U.event();
        if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (this.mousewheel.enabled) return !1;
        var t = this.$el;
        return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
      },
      disable: function disable() {
        var e = U.event();
        if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (!this.mousewheel.enabled) return !1;
        var t = this.$el;
        return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
      }
    },
        K = {
      update: function update() {
        var e = this.params.navigation;

        if (!this.params.loop) {
          var t = this.navigation,
              i = t.$nextEl,
              s = t.$prevEl;
          s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
        }
      },
      onPrevClick: function onPrevClick(e) {
        e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
      },
      init: function init() {
        var e,
            t,
            i = this.params.navigation;
        (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), S(this.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }));
      },
      destroy: function destroy() {
        var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
        t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
      }
    },
        Z = {
      update: function update() {
        var e = this.rtl,
            t = this.params.pagination;

        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var i,
              s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
              a = this.pagination.$el,
              r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

          if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
            var n,
                l,
                o,
                d = this.pagination.bullets;
            if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, o = ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each(function (e) {
              var s = m(e),
                  a = s.index();
              a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= l && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
            });else {
              var h = d.eq(i),
                  p = h.index();

              if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
                for (var u = d.eq(n), c = d.eq(l), f = n; f <= l; f += 1) {
                  d.eq(f).addClass(t.bulletActiveClass + "-main");
                }

                if (this.params.loop) {
                  if (p >= d.length - t.dynamicMainBullets) {
                    for (var v = t.dynamicMainBullets; v >= 0; v -= 1) {
                      d.eq(d.length - v).addClass(t.bulletActiveClass + "-main");
                    }

                    d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                  } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              }
            }

            if (t.dynamicBullets) {
              var g = Math.min(d.length, t.dynamicMainBullets + 4),
                  w = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - o * this.pagination.bulletSize,
                  y = e ? "right" : "left";
              d.css(this.isHorizontal() ? y : "top", w + "px");
            }
          }

          if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
            var b;
            b = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
            var E = (i + 1) / r,
                x = 1,
                T = 1;
            "horizontal" === b ? x = E : T = E, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed);
          }

          "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
        }
      },
      render: function render() {
        var e = this.params.pagination;

        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
              i = this.pagination.$el,
              s = "";

          if ("bullets" === e.type) {
            for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) {
              e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
            }

            i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
          }

          "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
        }
      },
      init: function init() {
        var e = this,
            t = e.params.pagination;

        if (t.el) {
          var i = m(t.el);
          0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
            t.preventDefault();
            var i = m(this).index() * e.params.slidesPerGroup;
            e.params.loop && (i += e.loopedSlides), e.slideTo(i);
          }), S(e.pagination, {
            $el: i,
            el: i[0]
          }));
        }
      },
      destroy: function destroy() {
        var e = this.params.pagination;

        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
        }
      }
    },
        J = {
      setTranslate: function setTranslate() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
              t = this.rtlTranslate,
              i = this.progress,
              s = e.dragSize,
              a = e.trackSize,
              r = e.$dragEl,
              n = e.$el,
              l = this.params.scrollbar,
              o = s,
              d = (a - s) * i;
          t ? (d = -d) > 0 ? (o = s - d, d = 0) : -d + s > a && (o = a + d) : d < 0 ? (o = s + d, d = 0) : d + s > a && (o = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = o + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = o + "px"), l.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
            n[0].style.opacity = 0, n.transition(400);
          }, 1e3));
        }
      },
      setTransition: function setTransition(e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function updateSize() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
              t = e.$dragEl,
              i = e.$el;
          t[0].style.width = "", t[0].style.height = "";
          var s,
              a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              r = this.size / this.virtualSize,
              n = r * (a / this.size);
          s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), S(e, {
            trackSize: a,
            divider: r,
            moveDivider: n,
            dragSize: s
          }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function getPointerPosition(e) {
        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function setDragPosition(e) {
        var t,
            i = this.scrollbar,
            s = this.rtlTranslate,
            a = i.$el,
            r = i.dragSize,
            n = i.trackSize,
            l = i.dragStartPos;
        t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var t = this.params.scrollbar,
            i = this.scrollbar,
            s = this.$wrapperEl,
            a = i.$el,
            r = i.$dragEl;
        this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
      },
      onDragMove: function onDragMove(e) {
        var t = this.scrollbar,
            i = this.$wrapperEl,
            s = t.$el,
            a = t.$dragEl;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function onDragEnd(e) {
        var t = this.params.scrollbar,
            i = this.scrollbar,
            s = this.$wrapperEl,
            a = i.$el;
        this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = E(function () {
          a.css("opacity", 0), a.transition(400);
        }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
      },
      enableDraggable: function enableDraggable() {
        if (this.params.scrollbar.el) {
          var e = r(),
              t = this.scrollbar,
              i = this.touchEventsTouch,
              s = this.touchEventsDesktop,
              a = this.params,
              n = this.support,
              l = t.$el[0],
              o = !(!n.passiveListener || !a.passiveListeners) && {
            passive: !1,
            capture: !1
          },
              d = !(!n.passiveListener || !a.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          n.touch ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o), l.addEventListener(i.move, this.scrollbar.onDragMove, o), l.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o), e.addEventListener(s.move, this.scrollbar.onDragMove, o), e.addEventListener(s.end, this.scrollbar.onDragEnd, d));
        }
      },
      disableDraggable: function disableDraggable() {
        if (this.params.scrollbar.el) {
          var e = r(),
              t = this.scrollbar,
              i = this.touchEventsTouch,
              s = this.touchEventsDesktop,
              a = this.params,
              n = this.support,
              l = t.$el[0],
              o = !(!n.passiveListener || !a.passiveListeners) && {
            passive: !1,
            capture: !1
          },
              d = !(!n.passiveListener || !a.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          n.touch ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o), l.removeEventListener(i.move, this.scrollbar.onDragMove, o), l.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o), e.removeEventListener(s.move, this.scrollbar.onDragMove, o), e.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
        }
      },
      init: function init() {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
              t = this.$el,
              i = this.params.scrollbar,
              s = m(i.el);
          this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
          var a = s.find("." + this.params.scrollbar.dragClass);
          0 === a.length && (a = m('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), S(e, {
            $el: s,
            el: s[0],
            $dragEl: a,
            dragEl: a[0]
          }), i.draggable && e.enableDraggable();
        }
      },
      destroy: function destroy() {
        this.scrollbar.disableDraggable();
      }
    },
        Q = {
      setTransform: function setTransform(e, t) {
        var i = this.rtl,
            s = m(e),
            a = i ? -1 : 1,
            r = s.attr("data-swiper-parallax") || "0",
            n = s.attr("data-swiper-parallax-x"),
            l = s.attr("data-swiper-parallax-y"),
            o = s.attr("data-swiper-parallax-scale"),
            d = s.attr("data-swiper-parallax-opacity");

        if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
          var h = d - (d - 1) * (1 - Math.abs(t));
          s[0].style.opacity = h;
        }

        if (null == o) s.transform("translate3d(" + n + ", " + l + ", 0px)");else {
          var p = o - (o - 1) * (1 - Math.abs(t));
          s.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")");
        }
      },
      setTranslate: function setTranslate() {
        var e = this,
            t = e.$el,
            i = e.slides,
            s = e.progress,
            a = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, s);
        }), i.each(function (t, i) {
          var r = t.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
            e.parallax.setTransform(t, r);
          });
        });
      },
      setTransition: function setTransition(e) {
        void 0 === e && (e = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          var i = m(t),
              s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (s = 0), i.transition(s);
        });
      }
    },
        ee = {
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
            i = e.targetTouches[0].pageY,
            s = e.targetTouches[1].pageX,
            a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
      },
      onGestureStart: function onGestureStart(e) {
        var t = this.support,
            i = this.params.zoom,
            s = this.zoom,
            a = s.gesture;

        if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureTouched = !0, a.scaleStart = ee.getDistanceBetweenTouches(e);
        }

        a.$slideEl && a.$slideEl.length || (a.$slideEl = m(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
      },
      onGestureChange: function onGestureChange(e) {
        var t = this.support,
            i = this.params.zoom,
            s = this.zoom,
            a = s.gesture;

        if (!t.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureMoved = !0, a.scaleMove = ee.getDistanceBetweenTouches(e);
        }

        a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
      },
      onGestureEnd: function onGestureEnd(e) {
        var t = this.device,
            i = this.support,
            s = this.params.zoom,
            a = this.zoom,
            r = a.gesture;

        if (!i.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
          a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
        }

        r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0));
      },
      onTouchStart: function onTouchStart(e) {
        var t = this.device,
            i = this.zoom,
            s = i.gesture,
            a = i.image;
        s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function onTouchMove(e) {
        var t = this.zoom,
            i = t.gesture,
            s = t.image,
            a = t.velocity;

        if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
          var r = s.width * t.scale,
              n = s.height * t.scale;

          if (!(r < i.slideWidth && n < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
              if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
              if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
            }

            e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
          }
        }
      },
      onTouchEnd: function onTouchEnd() {
        var e = this.zoom,
            t = e.gesture,
            i = e.image,
            s = e.velocity;

        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
          i.isTouched = !1, i.isMoved = !1;
          var a = 300,
              r = 300,
              n = s.x * a,
              l = i.currentX + n,
              o = s.y * r,
              d = i.currentY + o;
          0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          i.currentX = l, i.currentY = d;
          var p = i.width * e.scale,
              u = i.height * e.scale;
          i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        var e = this.zoom,
            t = e.gesture;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
      },
      toggle: function toggle(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t["in"](e);
      },
      "in": function _in(e) {
        var t,
            i,
            s,
            a,
            r,
            n,
            l,
            o,
            d,
            h,
            p,
            u,
            c,
            f,
            v,
            m,
            g = this.zoom,
            w = this.params.zoom,
            y = g.gesture,
            b = g.image;
        (y.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? y.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : y.$slideEl = this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === b.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = b.touchesStart.x, i = b.touchesStart.y), g.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, g.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (v = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, s = y.$slideEl.offset().left + v / 2 - t, a = y.$slideEl.offset().top + m / 2 - i, l = y.$imageEl[0].offsetWidth, o = y.$imageEl[0].offsetHeight, d = l * g.scale, h = o * g.scale, c = -(p = Math.min(v / 2 - d / 2, 0)), f = -(u = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > c && (r = c), (n = a * g.scale) < u && (n = u), n > f && (n = f)) : (r = 0, n = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"));
      },
      out: function out() {
        var e = this.zoom,
            t = this.params.zoom,
            i = e.gesture;
        i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
      },
      toggleGestures: function toggleGestures(e) {
        var t = this.zoom,
            i = t.slideSelector,
            s = t.passiveListener;
        this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s);
      },
      enableGestures: function enableGestures() {
        this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
      },
      disableGestures: function disableGestures() {
        this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
      },
      enable: function enable() {
        var e = this.support,
            t = this.zoom;

        if (!t.enabled) {
          t.enabled = !0;
          var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
            passive: !0,
            capture: !1
          },
              s = !e.passiveListener || {
            passive: !1,
            capture: !0
          },
              a = "." + this.params.slideClass;
          this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s);
        }
      },
      disable: function disable() {
        var e = this.zoom;

        if (e.enabled) {
          var t = this.support;
          this.zoom.enabled = !1;
          var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
            passive: !0,
            capture: !1
          },
              s = !t.passiveListener || {
            passive: !1,
            capture: !0
          },
              a = "." + this.params.slideClass;
          t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s);
        }
      }
    },
        te = {
      loadInSlide: function loadInSlide(e, t) {
        void 0 === t && (t = !0);
        var i = this,
            s = i.params.lazy;

        if (void 0 !== e && 0 !== i.slides.length) {
          var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
              r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
          !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each(function (e) {
            var r = m(e);
            r.addClass(s.loadingClass);
            var n = r.attr("data-background"),
                l = r.attr("data-src"),
                o = r.attr("data-srcset"),
                d = r.attr("data-sizes"),
                h = r.parent("picture");
            i.loadImage(r[0], l || n, o, d, !1, function () {
              if (null != i && i && (!i || i.params) && !i.destroyed) {
                if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
                  var t = m(e);
                  t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                  var e = a.attr("data-swiper-slide-index");

                  if (a.hasClass(i.params.slideDuplicateClass)) {
                    var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                    i.lazy.loadInSlide(p.index(), !1);
                  } else {
                    var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    i.lazy.loadInSlide(u.index(), !1);
                  }
                }

                i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight();
              }
            }), i.emit("lazyImageLoad", a[0], r[0]);
          });
        }
      },
      load: function load() {
        var e = this,
            t = e.$wrapperEl,
            i = e.params,
            s = e.slides,
            a = e.activeIndex,
            r = e.virtual && i.virtual.enabled,
            n = i.lazy,
            l = i.slidesPerView;

        function o(e) {
          if (r) {
            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (s[e]) return !0;

          return !1;
        }

        function d(e) {
          return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
        }

        if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t) {
          var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
          e.lazy.loadInSlide(i);
        });else if (l > 1) for (var h = a; h < a + l; h += 1) {
          o(h) && e.lazy.loadInSlide(h);
        } else e.lazy.loadInSlide(a);
        if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
          for (var p = n.loadPrevNextAmount, u = l, c = Math.min(a + u + Math.max(p, u), s.length), f = Math.max(a - Math.max(u, p), 0), v = a + l; v < c; v += 1) {
            o(v) && e.lazy.loadInSlide(v);
          }

          for (var g = f; g < a; g += 1) {
            o(g) && e.lazy.loadInSlide(g);
          }
        } else {
          var w = t.children("." + i.slideNextClass);
          w.length > 0 && e.lazy.loadInSlide(d(w));
          var y = t.children("." + i.slidePrevClass);
          y.length > 0 && e.lazy.loadInSlide(d(y));
        }
      }
    },
        ie = {
      LinearSpline: function LinearSpline(e, t) {
        var i,
            s,
            a,
            r,
            n,
            l = function l(e, t) {
          for (s = -1, i = e.length; i - s > 1;) {
            e[a = i + s >> 1] <= t ? s = a : i = a;
          }

          return i;
        };

        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
        }, this;
      },
      getInterpolateFunction: function getInterpolateFunction(e) {
        this.controller.spline || (this.controller.spline = this.params.loop ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid) : new ie.LinearSpline(this.snapGrid, e.snapGrid));
      },
      setTranslate: function setTranslate(e, t) {
        var i,
            s,
            a = this,
            r = a.controller.control,
            n = a.constructor;

        function l(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
          r[o] !== t && r[o] instanceof n && l(r[o]);
        } else r instanceof n && t !== r && l(r);
      },
      setTransition: function setTransition(e, t) {
        var i,
            s = this,
            a = s.constructor,
            r = s.controller.control;

        function n(t) {
          t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
            t.updateAutoHeight();
          }), t.$wrapperEl.transitionEnd(function () {
            r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
          }));
        }

        if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) {
          r[i] !== t && r[i] instanceof a && n(r[i]);
        } else r instanceof a && t !== r && n(r);
      }
    },
        se = {
      getRandomNumber: function getRandomNumber(e) {
        void 0 === e && (e = 16);
        return "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      },
      makeElFocusable: function makeElFocusable(e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function makeElNotFocusable(e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function addElRole(e, t) {
        return e.attr("role", t), e;
      },
      addElRoleDescription: function addElRoleDescription(e, t) {
        return e.attr("aria-role-description", t), e;
      },
      addElControls: function addElControls(e, t) {
        return e.attr("aria-controls", t), e;
      },
      addElLabel: function addElLabel(e, t) {
        return e.attr("aria-label", t), e;
      },
      addElId: function addElId(e, t) {
        return e.attr("id", t), e;
      },
      addElLive: function addElLive(e, t) {
        return e.attr("aria-live", t), e;
      },
      disableEl: function disableEl(e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function enableEl(e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function onEnterKey(e) {
        var t = this.params.a11y;

        if (13 === e.keyCode) {
          var i = m(e.target);
          this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
        }
      },
      notify: function notify(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function updateNavigation() {
        if (!this.params.loop && this.navigation) {
          var e = this.navigation,
              t = e.$nextEl,
              i = e.$prevEl;
          i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
        }
      },
      updatePagination: function updatePagination() {
        var e = this,
            t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i) {
          var s = m(i);
          e.a11y.makeElFocusable(s), e.params.pagination.renderBullet || (e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)));
        });
      },
      init: function init() {
        var e = this,
            t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var i = e.$el;
        t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
        var s,
            a,
            r,
            n = e.$wrapperEl,
            l = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
        e.a11y.addElId(n, l), s = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite", e.a11y.addElLive(n, s), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), "group"), e.slides.each(function (t) {
          var i = m(t);
          e.a11y.addElLabel(i, i.index() + 1 + " / " + e.slides.length);
        }), e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(a, t.nextSlideMessage), e.a11y.addElControls(a, l)), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(r, t.prevSlideMessage), e.a11y.addElControls(r, l)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
      },
      destroy: function destroy() {
        var e, t;
        this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
      }
    },
        ae = {
      init: function init() {
        var e = l();

        if (this.params.history) {
          if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
          var t = this.history;
          t.initialized = !0, t.paths = ae.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState));
        }
      },
      destroy: function destroy() {
        var e = l();
        this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function setHistoryPopState() {
        this.history.paths = ae.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
      },
      getPathValues: function getPathValues(e) {
        var t = l(),
            i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
          return "" !== e;
        }),
            s = i.length;
        return {
          key: i[s - 2],
          value: i[s - 1]
        };
      },
      setHistory: function setHistory(e, t) {
        var i = l();

        if (this.history.initialized && this.params.history.enabled) {
          var s;
          s = this.params.url ? new URL(this.params.url) : i.location;
          var a = this.slides.eq(t),
              r = ae.slugify(a.attr("data-history"));
          s.pathname.includes(e) || (r = e + "/" + r);
          var n = i.history.state;
          n && n.value === r || (this.params.history.replaceState ? i.history.replaceState({
            value: r
          }, null, r) : i.history.pushState({
            value: r
          }, null, r));
        }
      },
      slugify: function slugify(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      scrollToSlide: function scrollToSlide(e, t, i) {
        if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
          var r = this.slides.eq(s);

          if (ae.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
            var n = r.index();
            this.slideTo(n, e, i);
          }
        } else this.slideTo(0, e, i);
      }
    },
        re = {
      onHashCange: function onHashCange() {
        var e = r();
        this.emit("hashChange");
        var t = e.location.hash.replace("#", "");

        if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
          var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
          if (void 0 === i) return;
          this.slideTo(i);
        }
      },
      setHash: function setHash() {
        var e = l(),
            t = r();
        if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet");else {
          var i = this.slides.eq(this.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
          t.location.hash = s || "", this.emit("hashSet");
        }
      },
      init: function init() {
        var e = r(),
            t = l();

        if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace("#", "");
          if (i) for (var s = 0, a = this.slides.length; s < a; s += 1) {
            var n = this.slides.eq(s);

            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
              var o = n.index();
              this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
            }
          }
          this.params.hashNavigation.watchState && m(t).on("hashchange", this.hashNavigation.onHashCange);
        }
      },
      destroy: function destroy() {
        var e = l();
        this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
      }
    },
        ne = {
      run: function run() {
        var e = this,
            t = e.slides.eq(e.activeIndex),
            i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
          var t;
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
        }, i);
      },
      start: function start() {
        return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
      },
      stop: function stop() {
        return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
      },
      pause: function pause(e) {
        this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
      },
      onVisibilityChange: function onVisibilityChange() {
        var e = r();
        "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1);
      },
      onTransitionEnd: function onTransitionEnd(e) {
        this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd), this.autoplay.paused = !1, this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
      }
    },
        le = {
      setTranslate: function setTranslate() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
              s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || (a = s, s = 0);
          var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: r
          }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
            i = t.slides,
            s = t.$wrapperEl;

        if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
          var a = !1;
          i.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              a = !0, t.animating = !1;

              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
                s.trigger(e[i]);
              }
            }
          });
        }
      }
    },
        oe = {
      setTranslate: function setTranslate() {
        var e,
            t = this.$el,
            i = this.$wrapperEl,
            s = this.slides,
            a = this.width,
            r = this.height,
            n = this.rtlTranslate,
            l = this.size,
            o = this.browser,
            d = this.params.cubeEffect,
            h = this.isHorizontal(),
            p = this.virtual && this.params.virtual.enabled,
            u = 0;
        d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: a + "px"
        })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), t.append(e)));

        for (var c = 0; c < s.length; c += 1) {
          var f = s.eq(c),
              v = c;
          p && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
          var g = 90 * v,
              w = Math.floor(g / 360);
          n && (g = -g, w = Math.floor(-g / 360));
          var y = Math.max(Math.min(f[0].progress, 1), -1),
              b = 0,
              E = 0,
              x = 0;
          v % 4 == 0 ? (b = 4 * -w * l, x = 0) : (v - 1) % 4 == 0 ? (b = 0, x = 4 * -w * l) : (v - 2) % 4 == 0 ? (b = l + 4 * w * l, x = l) : (v - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * w), n && (b = -b), h || (E = b, b = 0);
          var T = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + b + "px, " + E + "px, " + x + "px)";

          if (y <= 1 && y > -1 && (u = 90 * v + 90 * y, n && (u = 90 * -v - 90 * y)), f.transform(T), d.slideShadows) {
            var C = h ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                S = h ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
            0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), f.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), f.append(S)), C.length && (C[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0));
          }
        }

        if (i.css({
          "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
          "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
          "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
          "transform-origin": "50% 50% -" + l / 2 + "px"
        }), d.shadow) if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
          var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
              P = d.shadowScale,
              k = d.shadowScale / z,
              $ = d.shadowOffset;
          e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / k + "px) rotateX(-90deg)");
        }
        var L = o.isSafari || o.isWebView ? -l / 2 : 0;
        i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)");
      },
      setTransition: function setTransition(e) {
        var t = this.$el;
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
      }
    },
        de = {
      setTranslate: function setTranslate() {
        for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
          var s = e.eq(i),
              a = s[0].progress;
          this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
          var r = -180 * a,
              n = 0,
              l = -s[0].swiperSlideOffset,
              o = 0;

          if (this.isHorizontal() ? t && (r = -r) : (o = l, l = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
            var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
            0 === d.length && (d = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0));
          }

          s.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
            i = t.slides,
            s = t.activeIndex,
            a = t.$wrapperEl;

        if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var r = !1;
          i.eq(s).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              r = !0, t.animating = !1;

              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
                a.trigger(e[i]);
              }
            }
          });
        }
      }
    },
        he = {
      setTranslate: function setTranslate() {
        for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, l = r ? e / 2 - n : t / 2 - n, o = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
          var u = i.eq(h),
              c = s[h],
              f = (l - u[0].swiperSlideOffset - c / 2) / c * a.modifier,
              v = r ? o * f : 0,
              g = r ? 0 : o * f,
              w = -d * Math.abs(f),
              y = a.stretch;
          "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(a.stretch) / 100 * c);
          var b = r ? 0 : y * f,
              E = r ? y * f : 0,
              x = 1 - (1 - a.scale) * Math.abs(f);
          Math.abs(E) < .001 && (E = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
          var T = "translate3d(" + E + "px," + b + "px," + w + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg) scale(" + x + ")";

          if (u.transform(T), u[0].style.zIndex = 1 - Math.abs(Math.round(f)), a.slideShadows) {
            var C = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
                S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
            0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(S)), C.length && (C[0].style.opacity = f > 0 ? f : 0), S.length && (S[0].style.opacity = -f > 0 ? -f : 0);
          }
        }
      },
      setTransition: function setTransition(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      }
    },
        pe = {
      init: function init() {
        var e = this.params.thumbs;
        if (this.thumbs.initialized) return !1;
        this.thumbs.initialized = !0;
        var t = this.constructor;
        return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, S(this.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), S(this.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : C(e.swiper) && (this.thumbs.swiper = new t(S({}, e.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0;
      },
      onThumbClick: function onThumbClick() {
        var e = this.thumbs.swiper;

        if (e) {
          var t = e.clickedIndex,
              i = e.clickedSlide;

          if (!(i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
            var s;

            if (s = e.params.loop ? parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
              var a = this.activeIndex;
              this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
              var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                  n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
              s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r;
            }

            this.slideTo(s);
          }
        }
      },
      update: function update(e) {
        var t = this.thumbs.swiper;

        if (t) {
          var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
              s = this.params.thumbs.autoScrollOffset,
              a = s && !t.params.loop;

          if (this.realIndex !== t.realIndex || a) {
            var r,
                n,
                l = t.activeIndex;

            if (t.params.loop) {
              t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, l = t.activeIndex);
              var o = t.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                  d = t.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
              r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? l : d - l < l - o ? d : o, n = this.activeIndex > this.previousIndex ? "next" : "prev";
            } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";

            a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0));
          }

          var h = 1,
              p = this.params.thumbs.slideThumbActiveClass;
          if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var u = 0; u < h; u += 1) {
            t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);
          } else for (var c = 0; c < h; c += 1) {
            t.slides.eq(this.realIndex + c).addClass(p);
          }
        }
      }
    },
        ue = [q, _, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null
        }
      },
      create: function create() {
        M(this, {
          mousewheel: {
            enabled: !1,
            lastScrollTime: x(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            enable: U.enable,
            disable: U.disable,
            handle: U.handle,
            handleMouseEnter: U.handleMouseEnter,
            handleMouseLeave: U.handleMouseLeave,
            animateSlider: U.animateSlider,
            releaseScroll: U.releaseScroll
          }
        });
      },
      on: {
        init: function init(e) {
          !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
        },
        destroy: function destroy(e) {
          e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function create() {
        M(this, {
          navigation: t({}, K)
        });
      },
      on: {
        init: function init(e) {
          e.navigation.init(), e.navigation.update();
        },
        toEdge: function toEdge(e) {
          e.navigation.update();
        },
        fromEdge: function fromEdge(e) {
          e.navigation.update();
        },
        destroy: function destroy(e) {
          e.navigation.destroy();
        },
        click: function click(e, t) {
          var i,
              s = e.navigation,
              a = s.$nextEl,
              r = s.$prevEl;
          !e.params.navigation.hideOnClick || m(t.target).is(r) || m(t.target).is(a) || (a ? i = a.hasClass(e.params.navigation.hiddenClass) : r && (i = r.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass));
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(e) {
            return e;
          },
          formatFractionTotal: function formatFractionTotal(e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function create() {
        M(this, {
          pagination: t({
            dynamicBulletIndex: 0
          }, Z)
        });
      },
      on: {
        init: function init(e) {
          e.pagination.init(), e.pagination.render(), e.pagination.update();
        },
        activeIndexChange: function activeIndexChange(e) {
          (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
        },
        snapIndexChange: function snapIndexChange(e) {
          e.params.loop || e.pagination.update();
        },
        slidesLengthChange: function slidesLengthChange(e) {
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function snapGridLengthChange(e) {
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function destroy(e) {
          e.pagination.destroy();
        },
        click: function click(e, t) {
          e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function create() {
        M(this, {
          scrollbar: t({
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }, J)
        });
      },
      on: {
        init: function init(e) {
          e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
        },
        update: function update(e) {
          e.scrollbar.updateSize();
        },
        resize: function resize(e) {
          e.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate(e) {
          e.scrollbar.updateSize();
        },
        setTranslate: function setTranslate(e) {
          e.scrollbar.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          e.scrollbar.setTransition(t);
        },
        destroy: function destroy(e) {
          e.scrollbar.destroy();
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function create() {
        M(this, {
          parallax: t({}, Q)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        init: function init(e) {
          e.params.parallax.enabled && e.parallax.setTranslate();
        },
        setTranslate: function setTranslate(e) {
          e.params.parallax.enabled && e.parallax.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          e.params.parallax.enabled && e.parallax.setTransition(t);
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function create() {
        var e = this;
        M(e, {
          zoom: t({
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          }, ee)
        });
        var i = 1;
        Object.defineProperty(e.zoom, "scale", {
          get: function get() {
            return i;
          },
          set: function set(t) {
            if (i !== t) {
              var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                  a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
              e.emit("zoomChange", t, s, a);
            }

            i = t;
          }
        });
      },
      on: {
        init: function init(e) {
          e.params.zoom.enabled && e.zoom.enable();
        },
        destroy: function destroy(e) {
          e.zoom.disable();
        },
        touchStart: function touchStart(e, t) {
          e.zoom.enabled && e.zoom.onTouchStart(t);
        },
        touchEnd: function touchEnd(e, t) {
          e.zoom.enabled && e.zoom.onTouchEnd(t);
        },
        doubleTap: function doubleTap(e, t) {
          e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
        },
        transitionEnd: function transitionEnd(e) {
          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
        },
        slideChange: function slideChange(e) {
          e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function create() {
        M(this, {
          lazy: t({
            initialImageLoaded: !1
          }, te)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
        },
        init: function init(e) {
          e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
        },
        scroll: function scroll(e) {
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        resize: function resize(e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        scrollbarDragMove: function scrollbarDragMove(e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        transitionStart: function transitionStart(e) {
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
        },
        transitionEnd: function transitionEnd(e) {
          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
        },
        slideChange: function slideChange(e) {
          e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function create() {
        M(this, {
          controller: t({
            control: this.params.controller.control
          }, ie)
        });
      },
      on: {
        update: function update(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        resize: function resize(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        observerUpdate: function observerUpdate(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        setTranslate: function setTranslate(e, t, i) {
          e.controller.control && e.controller.setTranslate(t, i);
        },
        setTransition: function setTransition(e, t, i) {
          e.controller.control && e.controller.setTransition(t, i);
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null
        }
      },
      create: function create() {
        M(this, {
          a11y: t(t({}, se), {}, {
            liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          })
        });
      },
      on: {
        afterInit: function afterInit(e) {
          e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
        },
        toEdge: function toEdge(e) {
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        fromEdge: function fromEdge(e) {
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate(e) {
          e.params.a11y.enabled && e.a11y.updatePagination();
        },
        destroy: function destroy(e) {
          e.params.a11y.enabled && e.a11y.destroy();
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create: function create() {
        M(this, {
          history: t({}, ae)
        });
      },
      on: {
        init: function init(e) {
          e.params.history.enabled && e.history.init();
        },
        destroy: function destroy(e) {
          e.params.history.enabled && e.history.destroy();
        },
        transitionEnd: function transitionEnd(e) {
          e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
        },
        slideChange: function slideChange(e) {
          e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function create() {
        M(this, {
          hashNavigation: t({
            initialized: !1
          }, re)
        });
      },
      on: {
        init: function init(e) {
          e.params.hashNavigation.enabled && e.hashNavigation.init();
        },
        destroy: function destroy(e) {
          e.params.hashNavigation.enabled && e.hashNavigation.destroy();
        },
        transitionEnd: function transitionEnd(e) {
          e.hashNavigation.initialized && e.hashNavigation.setHash();
        },
        slideChange: function slideChange(e) {
          e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create: function create() {
        M(this, {
          autoplay: t(t({}, ne), {}, {
            running: !1,
            paused: !1
          })
        });
      },
      on: {
        init: function init(e) {
          e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
        },
        beforeTransitionStart: function beforeTransitionStart(e, t, i) {
          e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
        },
        sliderFirstMove: function sliderFirstMove(e) {
          e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
        },
        touchEnd: function touchEnd(e) {
          e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
        },
        destroy: function destroy(e) {
          e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function create() {
        M(this, {
          fadeEffect: t({}, le)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "fade" === e.params.effect && e.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "fade" === e.params.effect && e.fadeEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function create() {
        M(this, {
          cubeEffect: t({}, oe)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "cube" === e.params.effect && e.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "cube" === e.params.effect && e.cubeEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function create() {
        M(this, {
          flipEffect: t({}, de)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "flip" === e.params.effect && e.flipEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "flip" === e.params.effect && e.flipEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function create() {
        M(this, {
          coverflowEffect: t({}, he)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        setTranslate: function setTranslate(e) {
          "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function create() {
        M(this, {
          thumbs: t({
            swiper: null,
            initialized: !1
          }, pe)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          var t = e.params.thumbs;
          t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
        },
        slideChange: function slideChange(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        update: function update(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        resize: function resize(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        observerUpdate: function observerUpdate(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        setTransition: function setTransition(e, t) {
          var i = e.thumbs.swiper;
          i && i.setTransition(t);
        },
        beforeDestroy: function beforeDestroy(e) {
          var t = e.thumbs.swiper;
          t && e.thumbs.swiperCreated && t && t.destroy();
        }
      }
    }];
    return R.use(ue), R;
  });
  /*!
  * dist/inputmask.min
  * https://github.com/RobinHerbots/Inputmask
  * Copyright (c) 2010 - 2019 Robin Herbots
  * Licensed under the MIT license
  * Version: 5.0.2-beta.1
  */

  !function webpackUniversalModuleDefinition(root, factory) {
    if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module))) module.exports = factory();else if ("function" == typeof define && define.amd) define([], factory);else {
      var a = factory();

      for (var i in a) {
        ("object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? exports : root)[i] = a[i];
      }
    }
  }(window, function () {
    return modules = [function (module) {
      module.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}');
    }, function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      var $ = __webpack_require__(2),
          window = __webpack_require__(3),
          document = window.document,
          generateMaskSet = __webpack_require__(4).generateMaskSet,
          analyseMask = __webpack_require__(4).analyseMask,
          maskScope = __webpack_require__(7);

      function Inputmask(alias, options, internal) {
        if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
        this.el = void 0, this.events = {}, this.maskset = void 0, this.refreshValue = !1, !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, alias && (options.alias = alias)), this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && void 0 !== options.definitions, this.userOptions = options || {}, resolveAlias(this.opts.alias, options, this.opts), this.isRTL = this.opts.numericInput);
      }

      function resolveAlias(aliasStr, options, opts) {
        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
        return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts), $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), !1);
      }

      function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
        function importOption(option, optionData) {
          optionData = void 0 !== optionData ? optionData : npt.getAttribute(dataAttribute + "-" + option), null !== optionData && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), userOptions[option] = optionData);
        }

        if (!0 === opts.importDataAttributes) {
          var attrOptions = npt.getAttribute(dataAttribute),
              option,
              dataoptions,
              optionData,
              p;
          if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) for (p in optionData = void 0, dataoptions) {
            if ("alias" === p.toLowerCase()) {
              optionData = dataoptions[p];
              break;
            }
          }

          for (option in importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts), opts) {
            if (dataoptions) for (p in optionData = void 0, dataoptions) {
              if (p.toLowerCase() === option.toLowerCase()) {
                optionData = dataoptions[p];
                break;
              }
            }
            importOption(option, optionData);
          }
        }

        return $.extend(!0, opts, userOptions), "rtl" !== npt.dir && !opts.rightAlign || (npt.style.textAlign = "right"), "rtl" !== npt.dir && !opts.numericInput || (npt.dir = "ltr", npt.removeAttribute("dir"), opts.isRTL = !0), Object.keys(userOptions).length;
      }

      Inputmask.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
          _maxTestPos: 500,
          placeholder: "_",
          optionalmarker: ["[", "]"],
          quantifiermarker: ["{", "}"],
          groupmarker: ["(", ")"],
          alternatormarker: "|",
          escapeChar: "\\",
          mask: null,
          regex: null,
          oncomplete: $.noop,
          onincomplete: $.noop,
          oncleared: $.noop,
          repeat: 0,
          greedy: !1,
          autoUnmask: !1,
          removeMaskOnSubmit: !1,
          clearMaskOnLostFocus: !0,
          insertMode: !0,
          insertModeVisual: !0,
          clearIncomplete: !1,
          alias: null,
          onKeyDown: $.noop,
          onBeforeMask: null,
          onBeforePaste: function onBeforePaste(pastedValue, opts) {
            return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
          },
          onBeforeWrite: null,
          onUnMask: null,
          showMaskOnFocus: !0,
          showMaskOnHover: !0,
          onKeyValidation: $.noop,
          skipOptionalPartCharacter: " ",
          numericInput: !1,
          rightAlign: !1,
          undoOnEscape: !0,
          radixPoint: "",
          _radixDance: !1,
          groupSeparator: "",
          keepStatic: null,
          positionCaretOnTab: !0,
          tabThrough: !1,
          supportsInputType: ["text", "tel", "url", "password", "search"],
          ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
          isComplete: null,
          preValidation: null,
          postValidation: null,
          staticDefinitionSymbol: void 0,
          jitMasking: !1,
          nullable: !0,
          inputEventOnly: !1,
          noValuePatching: !1,
          positionCaretOnClick: "lvp",
          casing: null,
          inputmode: "text",
          importDataAttributes: !0,
          shiftPositions: !0
        },
        definitions: {
          9: {
            validator: "[0-9\uFF11-\uFF19]",
            definitionSymbol: "*"
          },
          a: {
            validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
            definitionSymbol: "*"
          },
          "*": {
            validator: "[0-9\uFF11-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]"
          }
        },
        aliases: {},
        masksCache: {},
        mask: function mask(elems) {
          var that = this;
          return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
            var scopedOpts = $.extend(!0, {}, that.opts);

            if (importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute)) {
              var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
              void 0 !== maskset && (void 0 !== el.inputmask && (el.inputmask.opts.autoUnmask = !0, el.inputmask.remove()), el.inputmask = new Inputmask(void 0, void 0, !0), el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {
                action: "mask"
              }));
            }
          }), elems && elems[0] && elems[0].inputmask || this;
        },
        option: function option(options, noremask) {
          return "string" == typeof options ? this.opts[options] : "object" === _typeof(options) ? ($.extend(this.userOptions, options), this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
        },
        unmaskedvalue: function unmaskedvalue(value) {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "unmaskedvalue",
            value: value
          });
        },
        remove: function remove() {
          return maskScope.call(this, {
            action: "remove"
          });
        },
        getemptymask: function getemptymask() {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "getemptymask"
          });
        },
        hasMaskedValue: function hasMaskedValue() {
          return !this.opts.autoUnmask;
        },
        isComplete: function isComplete() {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "isComplete"
          });
        },
        getmetadata: function getmetadata() {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "getmetadata"
          });
        },
        isValid: function isValid(value) {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "isValid",
            value: value
          });
        },
        format: function format(value, metadata) {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "format",
            value: value,
            metadata: metadata
          });
        },
        setValue: function setValue(value) {
          this.el && $(this.el).trigger("setvalue", [value]);
        },
        analyseMask: analyseMask
      }, Inputmask.extendDefaults = function (options) {
        $.extend(!0, Inputmask.prototype.defaults, options);
      }, Inputmask.extendDefinitions = function (definition) {
        $.extend(!0, Inputmask.prototype.definitions, definition);
      }, Inputmask.extendAliases = function (alias) {
        $.extend(!0, Inputmask.prototype.aliases, alias);
      }, Inputmask.format = function (value, options, metadata) {
        return Inputmask(options).format(value, metadata);
      }, Inputmask.unmask = function (value, options) {
        return Inputmask(options).unmaskedvalue(value);
      }, Inputmask.isValid = function (value, options) {
        return Inputmask(options).isValid(value);
      }, Inputmask.remove = function (elems) {
        "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
          el.inputmask && el.inputmask.remove();
        });
      }, Inputmask.setValue = function (elems, value) {
        "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
          el.inputmask ? el.inputmask.setValue(value) : $(el).trigger("setvalue", [value]);
        });
      };
      var escapeRegexRegex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
      Inputmask.escapeRegex = function (str) {
        return str.replace(escapeRegexRegex, "\\$1");
      }, Inputmask.dependencyLib = $, window.Inputmask = Inputmask, module.exports = Inputmask;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      var window = __webpack_require__(3),
          document = window.document;

      function indexOf(list, elem) {
        for (var i = 0, len = list.length; i < len; i++) {
          if (list[i] === elem) return i;
        }

        return -1;
      }

      function isWindow(obj) {
        return null != obj && obj === obj.window;
      }

      function isArraylike(obj) {
        var length = "length" in obj && obj.length,
            ltype = _typeof(obj);

        return "function" !== ltype && !isWindow(obj) && (!(1 !== obj.nodeType || !length) || "array" === ltype || 0 === length || "number" == typeof length && 0 < length && length - 1 in obj);
      }

      function isValidElement(elem) {
        return elem instanceof Element;
      }

      function DependencyLib(elem) {
        return elem instanceof DependencyLib ? elem : this instanceof DependencyLib ? void (null != elem && elem !== window && (this[0] = elem.nodeName ? elem : void 0 !== elem[0] && elem[0].nodeName ? elem[0] : document.querySelector(elem), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib(elem);
      }

      DependencyLib.prototype = {
        on: function on(events, handler) {
          function addEvent(ev, namespace) {
            elem.addEventListener ? elem.addEventListener(ev, handler, !1) : elem.attachEvent && elem.attachEvent("on" + ev, handler), eventRegistry[ev] = eventRegistry[ev] || {}, eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [], eventRegistry[ev][namespace].push(handler);
          }

          if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) {
            var nsEvent = _events[endx].split("."),
                ev = nsEvent[0],
                namespace = nsEvent[1] || "global";

            addEvent(ev, namespace);
          }
          return this;
        },
        off: function off(events, handler) {
          var eventRegistry, elem;

          function removeEvent(ev, namespace, handler) {
            if (ev in eventRegistry == !0) if (elem.removeEventListener ? elem.removeEventListener(ev, handler, !1) : elem.detachEvent && elem.detachEvent("on" + ev, handler), "global" === namespace) for (var nmsp in eventRegistry[ev]) {
              eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1);
            } else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
          }

          function resolveNamespace(ev, namespace) {
            var evts = [],
                hndx,
                hndL;
            if (0 < ev.length) {
              if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) {
                evts.push({
                  ev: ev,
                  namespace: namespace && 0 < namespace.length ? namespace : "global",
                  handler: eventRegistry[ev][namespace][hndx]
                });
              } else evts.push({
                ev: ev,
                namespace: namespace && 0 < namespace.length ? namespace : "global",
                handler: handler
              });
            } else if (0 < namespace.length) for (var evNdx in eventRegistry) {
              for (var nmsp in eventRegistry[evNdx]) {
                if (nmsp === namespace) if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) {
                  evts.push({
                    ev: evNdx,
                    namespace: nmsp,
                    handler: eventRegistry[evNdx][nmsp][hndx]
                  });
                } else evts.push({
                  ev: evNdx,
                  namespace: nmsp,
                  handler: handler
                });
              }
            }
            return evts;
          }

          if (isValidElement(this[0])) {
            eventRegistry = this[0].eventRegistry, elem = this[0];

            for (var _events = events.split(" "), endx = 0; endx < _events.length; endx++) {
              for (var nsEvent = _events[endx].split("."), offEvents = resolveNamespace(nsEvent[0], nsEvent[1]), i = 0, offEventsL = offEvents.length; i < offEventsL; i++) {
                removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
              }
            }
          }

          return this;
        },
        trigger: function trigger(events, argument_1) {
          if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = "string" == typeof events ? events.split(" ") : [events.type], endx = 0; endx < _events.length; endx++) {
            var nsEvent = _events[endx].split("."),
                ev = nsEvent[0],
                namespace = nsEvent[1] || "global";

            if (void 0 !== document && "global" === namespace) {
              var evnt,
                  i,
                  params = {
                bubbles: !0,
                cancelable: !0,
                detail: argument_1
              };

              if (document.createEvent) {
                try {
                  evnt = new CustomEvent(ev, params);
                } catch (e) {
                  evnt = document.createEvent("CustomEvent"), evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                }

                events.type && DependencyLib.extend(evnt, events), elem.dispatchEvent(evnt);
              } else evnt = document.createEventObject(), evnt.eventType = ev, evnt.detail = argument_1, events.type && DependencyLib.extend(evnt, events), elem.fireEvent("on" + evnt.eventType, evnt);
            } else if (void 0 !== eventRegistry[ev]) if (events = events.type ? events : DependencyLib.Event(events), events.detail = arguments.slice(1), "global" === namespace) for (var nmsp in eventRegistry[ev]) {
              for (i = 0; i < eventRegistry[ev][nmsp].length; i++) {
                eventRegistry[ev][nmsp][i].apply(elem, arguments);
              }
            } else for (i = 0; i < eventRegistry[ev][namespace].length; i++) {
              eventRegistry[ev][namespace][i].apply(elem, arguments);
            }
          }
          return this;
        }
      }, DependencyLib.isFunction = function (obj) {
        return "function" == typeof obj;
      }, DependencyLib.noop = function () {}, DependencyLib.isArray = Array.isArray, DependencyLib.inArray = function (elem, arr, i) {
        return null == arr ? -1 : indexOf(arr, elem, i);
      }, DependencyLib.valHooks = void 0, DependencyLib.isPlainObject = function (obj) {
        return "object" === _typeof(obj) && !obj.nodeType && !isWindow(obj) && !(obj.constructor && !Object.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"));
      }, DependencyLib.extend = function () {
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = !1;

        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, i++), "object" === _typeof(target) || DependencyLib.isFunction(target) || (target = {}), i === length && (target = this, i--); i < length; i++) {
          if (null != (options = arguments[i])) for (name in options) {
            src = target[name], copy = options[name], target !== copy && (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy))) ? (clone = copyIsArray ? (copyIsArray = !1, src && DependencyLib.isArray(src) ? src : []) : src && DependencyLib.isPlainObject(src) ? src : {}, target[name] = DependencyLib.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
          }
        }

        return target;
      }, DependencyLib.each = function (obj, callback) {
        var value,
            i = 0;
        if (isArraylike(obj)) for (var length = obj.length; i < length && (value = callback.call(obj[i], i, obj[i]), !1 !== value); i++) {
          ;
        } else for (i in obj) {
          if (value = callback.call(obj[i], i, obj[i]), !1 === value) break;
        }
        return obj;
      }, DependencyLib.data = function (owner, key, value) {
        if (void 0 === value) return owner.__data ? owner.__data[key] : null;
        owner.__data = owner.__data || {}, owner.__data[key] = value;
      }, "function" == typeof window.CustomEvent ? DependencyLib.Event = window.CustomEvent : (DependencyLib.Event = function (event, params) {
        params = params || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var evt = document.createEvent("CustomEvent");
        return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), evt;
      }, DependencyLib.Event.prototype = window.Event.prototype), module.exports = DependencyLib;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_RESULT__;

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      __WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;
      }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(2);

      function generateMaskSet(opts, nocache) {
        var ms;

        function generateMask(mask, metadata, opts) {
          var regexMask = !1,
              masksetDefinition,
              maskdefKey;

          if (null !== mask && "" !== mask || (regexMask = null !== opts.regex, mask = regexMask ? (mask = opts.regex, mask.replace(/^(\^)(.*)(\$)$/, "$2")) : (regexMask = !0, ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 0 < opts.repeat || "*" === opts.repeat || "+" === opts.repeat) {
            var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
            mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
          }

          return maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask, !1 !== opts.keepStatic && (maskdefKey = "ks_" + maskdefKey), void 0 === Inputmask.prototype.masksCache[maskdefKey] || !0 === nocache ? (masksetDefinition = {
            mask: mask,
            maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
            validPositions: {},
            _buffer: void 0,
            buffer: void 0,
            tests: {},
            excludes: {},
            metadata: metadata,
            maskLength: void 0,
            jitOffset: {}
          }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), masksetDefinition;
        }

        if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
          if (1 < opts.mask.length) {
            null === opts.keepStatic && (opts.keepStatic = !0);
            var altMask = opts.groupmarker[0];
            return $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
              1 < altMask.length && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), void 0 === msk.mask || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
            }), altMask += opts.groupmarker[1], generateMask(altMask, opts.mask, opts);
          }

          opts.mask = opts.mask.pop();
        }

        return null === opts.keepStatic && (opts.keepStatic = !1), ms = opts.mask && void 0 !== opts.mask.mask && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts), ms;
      }

      function analyseMask(mask, regexMask, opts) {
        var tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
            regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            escaped = !1,
            currentToken = new MaskToken(),
            match,
            m,
            openenings = [],
            maskTokens = [],
            openingToken,
            currentOpeningToken,
            alternator,
            lastMatch,
            closeRegexGroup = !1;

        function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
          this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, this.quantifier = {
            min: 1,
            max: 1
          };
        }

        function insertTestDefinition(mtoken, element, position) {
          position = void 0 !== position ? position : mtoken.matches.length;
          var prevMatch = mtoken.matches[position - 1];
          if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
            fn: new RegExp(element, opts.casing ? "i" : ""),
            "static": !1,
            optionality: !1,
            newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element,
            casing: null,
            def: element,
            placeholder: void 0,
            nativeDef: element
          }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function (ndx, lmnt) {
            prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
              fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
              "static": !0,
              optionality: !1,
              newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== lmnt && !0 !== prevMatch["static"],
              casing: null,
              def: opts.staticDefinitionSymbol || lmnt,
              placeholder: void 0 !== opts.staticDefinitionSymbol ? lmnt : void 0,
              nativeDef: (escaped ? "'" : "") + lmnt
            });
          })), escaped = !1;else {
            var maskdef = (opts.definitions ? opts.definitions[element] : void 0) || Inputmask.prototype.definitions[element];
            maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
              fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
                this.test = maskdef.validator;
              }() : new RegExp("."),
              "static": maskdef["static"] || !1,
              optionality: !1,
              newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
              casing: maskdef.casing,
              def: maskdef.definitionSymbol || element,
              placeholder: maskdef.placeholder,
              nativeDef: element,
              generated: maskdef.generated
            }) : (mtoken.matches.splice(position++, 0, {
              fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
              "static": !0,
              optionality: !1,
              newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element && !0 !== prevMatch["static"],
              casing: null,
              def: opts.staticDefinitionSymbol || element,
              placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
              nativeDef: (escaped ? "'" : "") + element
            }), escaped = !1);
          }
        }

        function verifyGroupMarker(maskToken) {
          maskToken && maskToken.matches && $.each(maskToken.matches, function (ndx, token) {
            var nextToken = maskToken.matches[ndx + 1];
            (void 0 === nextToken || void 0 === nextToken.matches || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), verifyGroupMarker(token);
          });
        }

        function defaultCase() {
          if (0 < openenings.length) {
            if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), currentOpeningToken.isAlternator) {
              alternator = openenings.pop();

              for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
              }

              0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
            }
          } else insertTestDefinition(currentToken, m);
        }

        function reverseTokens(maskToken) {
          function reverseStatic(st) {
            return st === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), st;
          }

          for (var match in maskToken.matches = maskToken.matches.reverse(), maskToken.matches) {
            if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
              var intMatch = parseInt(match);

              if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                var qt = maskToken.matches[match];
                maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
              }

              void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
            }
          }

          return maskToken;
        }

        function groupify(matches) {
          var groupToken = new MaskToken(!0);
          return groupToken.openGroup = !1, groupToken.matches = matches, groupToken;
        }

        function closeGroup() {
          if (openingToken = openenings.pop(), openingToken.openGroup = !1, void 0 !== openingToken) {
            if (0 < openenings.length) {
              if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), currentOpeningToken.isAlternator) {
                alternator = openenings.pop();

                for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                  alternator.matches[mndx].isGroup = !1, alternator.matches[mndx].alternatorGroup = !1;
                }

                0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
              }
            } else currentToken.matches.push(openingToken);
          } else defaultCase();
        }

        function groupQuantifier(matches) {
          var lastMatch = matches.pop();
          return lastMatch.isQuantifier && (lastMatch = groupify([matches.pop(), lastMatch])), lastMatch;
        }

        for (regexMask && (opts.optionalmarker[0] = void 0, opts.optionalmarker[1] = void 0); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask);) {
          if (m = match[0], regexMask) switch (m.charAt(0)) {
            case "?":
              m = "{0,1}";
              break;

            case "+":
            case "*":
              m = "{" + m + "}";
              break;

            case "|":
              if (0 === openenings.length) {
                var altRegexGroup = groupify(currentToken.matches);
                altRegexGroup.openGroup = !0, openenings.push(altRegexGroup), currentToken.matches = [], closeRegexGroup = !0;
              }

              break;
          }
          if (escaped) defaultCase();else switch (m.charAt(0)) {
            case "(?=":
              break;

            case "(?!":
              break;

            case "(?<=":
              break;

            case "(?<!":
              break;

            case opts.escapeChar:
              escaped = !0, regexMask && defaultCase();
              break;

            case opts.optionalmarker[1]:
            case opts.groupmarker[1]:
              closeGroup();
              break;

            case opts.optionalmarker[0]:
              openenings.push(new MaskToken(!1, !0));
              break;

            case opts.groupmarker[0]:
              openenings.push(new MaskToken(!0));
              break;

            case opts.quantifiermarker[0]:
              var quantifier = new MaskToken(!1, !1, !0);
              m = m.replace(/[{}]/g, "");
              var mqj = m.split("|"),
                  mq = mqj[0].split(","),
                  mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                  mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
              "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                min: mq0,
                max: mq1,
                jit: mqj[1]
              };
              var matches = 0 < openenings.length ? openenings[openenings.length - 1].matches : currentToken.matches;

              if (match = matches.pop(), match.isAlternator) {
                matches.push(match), matches = match.matches;
                var groupToken = new MaskToken(!0),
                    tmpMatch = matches.pop();
                matches.push(groupToken), matches = groupToken.matches, match = tmpMatch;
              }

              match.isGroup || (match = groupify([match])), matches.push(match), matches.push(quantifier);
              break;

            case opts.alternatormarker:
              if (0 < openenings.length) {
                currentOpeningToken = openenings[openenings.length - 1];
                var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                lastMatch = currentOpeningToken.openGroup && (void 0 === subToken.matches || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches);
              } else lastMatch = groupQuantifier(currentToken.matches);

              if (lastMatch.isAlternator) openenings.push(lastMatch);else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), openenings.push(alternator), lastMatch.openGroup) {
                lastMatch.openGroup = !1;
                var alternatorGroup = new MaskToken(!0);
                alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
              }
              break;

            default:
              defaultCase();
          }
        }

        for (closeRegexGroup && closeGroup(); 0 < openenings.length;) {
          openingToken = openenings.pop(), currentToken.matches.push(openingToken);
        }

        return 0 < currentToken.matches.length && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
      }

      module.exports = {
        generateMaskSet: generateMaskSet,
        analyseMask: analyseMask
      };
    }, function (module, exports, __webpack_require__) {
      "use strict";

      __webpack_require__(6), __webpack_require__(8), __webpack_require__(9), __webpack_require__(10), module.exports = __webpack_require__(1);
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var Inputmask = __webpack_require__(1);

      Inputmask.extendDefinitions({
        A: {
          validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
          casing: "upper"
        },
        "&": {
          validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
          casing: "upper"
        },
        "#": {
          validator: "[0-9A-Fa-f]",
          casing: "upper"
        }
      });
      var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");

      function ipValidator(chrs, maskset, pos, strict, opts) {
        return chrs = -1 < pos - 1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, -1 < pos - 2 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : "00" + chrs, ipValidatorRegex.test(chrs);
      }

      Inputmask.extendAliases({
        cssunit: {
          regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
        },
        url: {
          regex: "(https?|ftp)//.*",
          autoUnmask: !1
        },
        ip: {
          mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
          definitions: {
            i: {
              validator: ipValidator
            },
            j: {
              validator: ipValidator
            },
            k: {
              validator: ipValidator
            },
            l: {
              validator: ipValidator
            }
          },
          onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
            return maskedValue;
          },
          inputmode: "numeric"
        },
        email: {
          mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
          greedy: !1,
          casing: "lower",
          onBeforePaste: function onBeforePaste(pastedValue, opts) {
            return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");
          },
          definitions: {
            "*": {
              validator: "[0-9\uFF11-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5!#$%&'*+/=?^_`{|}~-]"
            },
            "-": {
              validator: "[0-9A-Za-z-]"
            }
          },
          onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
            return maskedValue;
          },
          inputmode: "email"
        },
        mac: {
          mask: "##:##:##:##:##:##"
        },
        vin: {
          mask: "V{13}9{4}",
          definitions: {
            V: {
              validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
              casing: "upper"
            }
          },
          clearIncomplete: !0,
          autoUnmask: !0
        },
        ssn: {
          mask: "999-99-9999",
          postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""));
          }
        }
      }), module.exports = Inputmask;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      var $ = __webpack_require__(2),
          window = __webpack_require__(3),
          document = window.document,
          ua = window.navigator && window.navigator.userAgent || "",
          ie = 0 < ua.indexOf("MSIE ") || 0 < ua.indexOf("Trident/"),
          mobile = ("ontouchstart" in window),
          iemobile = /iemobile/i.test(ua),
          iphone = /iphone/i.test(ua) && !iemobile,
          keyCode = __webpack_require__(0);

      module.exports = function maskScope(actionObj, maskset, opts) {
        maskset = maskset || this.maskset, opts = opts || this.opts;
        var inputmask = this,
            el = this.el,
            isRTL = this.isRTL || (this.isRTL = opts.numericInput),
            undoValue,
            $el,
            skipKeyPressEvent = !1,
            skipInputEvent = !1,
            validationEvent = !1,
            ignorable = !1,
            maxLength,
            mouseEnter = !1,
            originalPlaceholder = void 0;

        function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
          var greedy = opts.greedy;
          clearOptionalTail && (opts.greedy = !1), minimalPos = minimalPos || 0;
          var maskTemplate = [],
              ndxIntlzr,
              pos = 0,
              test,
              testPos,
              jitRenderStatic;

          do {
            if (!0 === baseOnInput && maskset.validPositions[pos]) testPos = clearOptionalTail && !0 === maskset.validPositions[pos].match.optionality && void 0 === maskset.validPositions[pos + 1] && (!0 === maskset.validPositions[pos].generatedInput || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && 0 < pos) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos], test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test));else {
              testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice();
              var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
              jitRenderStatic = jitRenderStatic && test["static"] && test.def !== opts.groupSeparator && null === test.fn || maskset.validPositions[pos - 1] && test["static"] && test.def !== opts.groupSeparator && null === test.fn, jitRenderStatic || !1 === jitMasking || void 0 === jitMasking || "number" == typeof jitMasking && isFinite(jitMasking) && pos < jitMasking ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test)) : jitRenderStatic = !1;
            }
            pos++;
          } while ((void 0 === maxLength || pos < maxLength) && (!0 !== test["static"] || "" !== test.def) || pos < minimalPos);

          return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && void 0 !== maskset.maskLength || (maskset.maskLength = pos - 1), opts.greedy = greedy, maskTemplate;
        }

        function resetMaskSet(soft) {
          maskset.buffer = void 0, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
        }

        function getLastValidPosition(closestTo, strict, validPositions) {
          var before = -1,
              after = -1,
              valids = validPositions || maskset.validPositions;

          for (var posNdx in void 0 === closestTo && (closestTo = -1), valids) {
            var psNdx = parseInt(posNdx);
            valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), closestTo <= psNdx && (after = psNdx));
          }

          return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after;
        }

        function getDecisionTaker(tst) {
          var decisionTaker = tst.locator[tst.alternation];
          return "string" == typeof decisionTaker && 0 < decisionTaker.length && (decisionTaker = decisionTaker.split(",")[0]), void 0 !== decisionTaker ? decisionTaker.toString() : "";
        }

        function getLocator(tst, align) {
          var locator = (null != tst.alternation ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
          if ("" !== locator) for (; locator.length < align;) {
            locator += "0";
          }
          return locator;
        }

        function determineTestTemplate(pos, tests) {
          pos = 0 < pos ? pos - 1 : 0;

          for (var altTest = getTest(pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch, ndx = 0; ndx < tests.length; ndx++) {
            var tst = tests[ndx];
            tstLocator = getLocator(tst, targetLocator.length);
            var distance = Math.abs(tstLocator - targetLocator);
            (void 0 === closest || "" !== tstLocator && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance, bestMatch = tst);
          }

          return bestMatch;
        }

        function getTestTemplate(pos, ndxIntlzr, tstPs) {
          return maskset.validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
        }

        function getTest(pos, tests) {
          return maskset.validPositions[pos] ? maskset.validPositions[pos] : (tests || getTests(pos))[0];
        }

        function positionCanMatchDefinition(pos, testDefinition, opts) {
          for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) {
            if (tests[tndx].match && (!(tests[tndx].match.nativeDef !== testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] || opts.shiftPositions && testDefinition.match["static"]) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef)) {
              valid = !0;
              break;
            }

            if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
              valid = void 0;
              break;
            }
          }

          return !1 === valid && void 0 !== maskset.jitOffset[pos] && (valid = positionCanMatchDefinition(pos + maskset.jitOffset[pos], testDefinition, opts)), valid;
        }

        function getTests(pos, ndxIntlzr, tstPs) {
          var maskTokens = maskset.maskToken,
              testPos = ndxIntlzr ? tstPs : 0,
              ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
              matches = [],
              insertStop = !1,
              latestMatch,
              cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

          function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
            function handleMatch(match, loopNdx, quantifierRecurse) {
              function isFirstMatch(latestMatch, tokenGroup) {
                var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                return firstMatch || $.each(tokenGroup.matches, function (ndx, match) {
                  if (!0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : Object.prototype.hasOwnProperty.call(match, "matches") && (firstMatch = isFirstMatch(latestMatch, match)), firstMatch) return !1;
                }), firstMatch;
              }

              function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                var bestMatch, indexPos;

                if ((maskset.tests[pos] || maskset.validPositions[pos]) && $.each(maskset.tests[pos] || [maskset.validPositions[pos]], function (ndx, lmnt) {
                  if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
                  var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation,
                      ndxPos = void 0 !== lmnt.locator[alternation] ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                  (void 0 === indexPos || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, indexPos = ndxPos);
                }), bestMatch) {
                  var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation],
                      locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                  return locator.slice((void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1);
                }

                return void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0;
              }

              function isSubsetOf(source, target) {
                function expand(pattern) {
                  for (var expanded = [], start = -1, end, i = 0, l = pattern.length; i < l; i++) {
                    if ("-" === pattern.charAt(i)) for (end = pattern.charCodeAt(i + 1); ++start < end;) {
                      expanded.push(String.fromCharCode(start));
                    } else start = pattern.charCodeAt(i), expanded.push(pattern.charAt(i));
                  }

                  return expanded.join("");
                }

                return source.match.def === target.match.nativeDef || !(!(opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) || !0 === source.match["static"] || !0 === target.match["static"]) && -1 !== expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, "")));
              }

              function staticCanMatchDefinition(source, target) {
                return !0 === source.match["static"] && !0 !== target.match["static"] && target.match.fn.test(source.match.def, maskset, pos, !1, opts, !1);
              }

              function setMergeLocators(targetMatch, altMatch) {
                var alternationNdx = targetMatch.alternation,
                    shouldMerge = void 0 === altMatch || alternationNdx === altMatch.alternation && -1 === targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);
                if (!shouldMerge && alternationNdx > altMatch.alternation) for (var i = altMatch.alternation; i < alternationNdx; i++) {
                  if (targetMatch.locator[i] !== altMatch.locator[i]) {
                    alternationNdx = i, shouldMerge = !0;
                    break;
                  }
                }

                if (shouldMerge) {
                  targetMatch.mloc = targetMatch.mloc || {};
                  var locNdx = targetMatch.locator[alternationNdx];

                  if (void 0 !== locNdx) {
                    if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), void 0 === targetMatch.mloc[locNdx] && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), void 0 !== altMatch) {
                      for (var ndx in altMatch.mloc) {
                        "string" == typeof ndx && (ndx = ndx.split(",")[0]), void 0 === targetMatch.mloc[ndx] && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                      }

                      targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",");
                    }

                    return !0;
                  }

                  targetMatch.alternation = void 0;
                }

                return !1;
              }

              if (testPos > opts._maxTestPos && void 0 !== quantifierRecurse) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
              if (testPos === pos && void 0 === match.matches) return matches.push({
                match: match,
                locator: loopNdx.reverse(),
                cd: cacheDependency,
                mloc: {}
              }), !0;

              if (void 0 !== match.matches) {
                if (match.isGroup && quantifierRecurse !== match) {
                  if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse), match) return !0;
                } else if (match.isOptional) {
                  var optionalToken = match,
                      mtchsNdx = matches.length;

                  if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), match) {
                    if ($.each(matches, function (ndx, mtch) {
                      mtchsNdx <= ndx && (mtch.match.optionality = !0);
                    }), latestMatch = matches[matches.length - 1].match, void 0 !== quantifierRecurse || !isFirstMatch(latestMatch, optionalToken)) return !0;
                    insertStop = !0, testPos = pos;
                  }
                } else if (match.isAlternator) {
                  var alternateToken = match,
                      malternateMatches = [],
                      maltMatches,
                      currentMatches = matches.slice(),
                      loopNdxCnt = loopNdx.length,
                      altIndex = 0 < ndxInitializer.length ? ndxInitializer.shift() : -1;

                  if (-1 === altIndex || "string" == typeof altIndex) {
                    var currentPos = testPos,
                        ndxInitializerClone = ndxInitializer.slice(),
                        altIndexArr = [],
                        amndx;
                    if ("string" == typeof altIndex) altIndexArr = altIndex.split(",");else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                      altIndexArr.push(amndx.toString());
                    }

                    if (void 0 !== maskset.excludes[pos]) {
                      for (var altIndexArrClone = altIndexArr.slice(), i = 0, el = maskset.excludes[pos].length; i < el; i++) {
                        var excludeSet = maskset.excludes[pos][i].toString().split(":");
                        loopNdx.length == excludeSet[1] && altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                      }

                      0 === altIndexArr.length && (delete maskset.excludes[pos], altIndexArr = altIndexArrClone);
                    }

                    (!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));

                    for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                      amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0), maltMatches = matches.slice(), testPos = currentPos, matches = [];

                      for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                        var altMatch = maltMatches[ndx1],
                            dropMatch = !1;
                        altMatch.match.jit = altMatch.match.jit || unMatchedAlternation, altMatch.alternation = altMatch.alternation || loopNdxCnt, setMergeLocators(altMatch);

                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                          var altMatch2 = malternateMatches[ndx2];

                          if ("string" != typeof altIndex || void 0 !== altMatch.alternation && -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                            if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                              dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                              break;
                            }

                            if (isSubsetOf(altMatch, altMatch2)) {
                              setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                              break;
                            }

                            if (isSubsetOf(altMatch2, altMatch)) {
                              setMergeLocators(altMatch2, altMatch);
                              break;
                            }

                            if (staticCanMatchDefinition(altMatch, altMatch2)) {
                              setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                              break;
                            }
                          }
                        }

                        dropMatch || malternateMatches.push(altMatch);
                      }
                    }

                    matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = 0 < matches.length, match = 0 < malternateMatches.length, ndxInitializer = ndxInitializerClone.slice();
                  } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);

                  if (match) return !0;
                } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                  var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];

                  if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup), match) {
                    if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx >= qt.quantifier.min, latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit, latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                      insertStop = !0, testPos = pos;
                      break;
                    }

                    return latestMatch.jit && (maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch)), !0;
                  }
                } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), match) return !0;
              } else testPos++;
            }

            for (var tndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
              if (!0 !== maskToken.matches[tndx].isQuantifier) {
                var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                if (match && testPos === pos) return match;
                if (pos < testPos) break;
              }
            }
          }

          function mergeLocators(pos, tests) {
            var locator = [];
            return $.isArray(tests) || (tests = [tests]), 0 < tests.length && (void 0 === tests[0].alternation || !0 === opts.keepStatic ? (locator = determineTestTemplate(pos, tests.slice()).locator.slice(), 0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, function (ndx, tst) {
              if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice();else for (var i = 0; i < locator.length; i++) {
                tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
              }
            })), locator;
          }

          if (-1 < pos && (void 0 === maxLength || pos < maxLength)) {
            if (void 0 === ndxIntlzr) {
              for (var previousPos = pos - 1, test; void 0 === (test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) && -1 < previousPos;) {
                previousPos--;
              }

              void 0 !== test && -1 < previousPos && (ndxInitializer = mergeLocators(previousPos, test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);
            }

            if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) return maskset.tests[pos];

            for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
              var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
              if (match && testPos === pos || pos < testPos) break;
            }
          }

          return 0 !== matches.length && !insertStop || matches.push({
            match: {
              fn: null,
              "static": !0,
              optionality: !1,
              casing: null,
              def: "",
              placeholder: ""
            },
            locator: [],
            mloc: {},
            cd: cacheDependency
          }), void 0 !== ndxIntlzr && maskset.tests[pos] ? $.extend(!0, [], matches) : (maskset.tests[pos] = $.extend(!0, [], matches), maskset.tests[pos]);
        }

        function getBufferTemplate() {
          return void 0 === maskset._buffer && (maskset._buffer = getMaskTemplate(!1, 1), void 0 === maskset.buffer && (maskset.buffer = maskset._buffer.slice())), maskset._buffer;
        }

        function getBuffer(noCache) {
          return void 0 !== maskset.buffer && !0 !== noCache || (maskset.buffer = getMaskTemplate(!0, getLastValidPosition(), !0), void 0 === maskset._buffer && (maskset._buffer = maskset.buffer.slice())), maskset.buffer;
        }

        function refreshFromBuffer(start, end, buffer) {
          var i,
              p,
              skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
              bffr = isRTL ? buffer.slice().reverse() : buffer;
          if (opts.skipOptionalPartCharacter = "", !0 === start) resetMaskSet(), maskset.tests = {}, start = 0, end = buffer.length, p = determineNewCaretPosition({
            begin: 0,
            end: 0
          }, !1).begin;else {
            for (i = start; i < end; i++) {
              delete maskset.validPositions[i];
            }

            p = start;
          }
          var keypress = new $.Event("keypress");

          for (i = start; i < end; i++) {
            keypress.which = bffr[i].toString().charCodeAt(0), ignorable = !1;
            var valResult = EventHandlers.keypressEvent.call(el, keypress, !0, !1, !1, p);
            !1 !== valResult && (p = valResult.forwardPosition);
          }

          opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
        }

        function casing(elem, test, pos) {
          switch (opts.casing || test.casing) {
            case "upper":
              elem = elem.toUpperCase();
              break;

            case "lower":
              elem = elem.toLowerCase();
              break;

            case "title":
              var posBefore = maskset.validPositions[pos - 1];
              elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
              break;

            default:
              if ($.isFunction(opts.casing)) {
                var args = Array.prototype.slice.call(arguments);
                args.push(maskset.validPositions), elem = opts.casing.apply(this, args);
              }

          }

          return elem;
        }

        function checkAlternationMatch(altArr1, altArr2, na) {
          for (var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = void 0 !== na ? na.split(",") : [], naNdx, i = 0; i < naArr.length; i++) {
            -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
          }

          for (var alndx = 0; alndx < altArr1.length; alndx++) {
            if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
              isMatch = !0;
              break;
            }
          }

          return isMatch;
        }

        function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
          var validPsClone = $.extend(!0, {}, maskset.validPositions),
              tstClone = $.extend(!0, {}, maskset.tests),
              lastAlt,
              alternation,
              isValidRslt = !1,
              returnRslt = !1,
              altPos,
              prevAltPos,
              i,
              validPos,
              decisionPos,
              lAltPos = void 0 !== rAltPos ? rAltPos : getLastValidPosition(),
              nextPos,
              input,
              begin,
              end;
          if (selection && (begin = selection.begin, end = selection.end, selection.begin > selection.end && (begin = selection.end, end = selection.begin)), -1 === lAltPos && void 0 === rAltPos) lastAlt = 0, prevAltPos = getTest(lastAlt), alternation = prevAltPos.alternation;else for (; 0 <= lAltPos; lAltPos--) {
            if (altPos = maskset.validPositions[lAltPos], altPos && void 0 !== altPos.alternation) {
              if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
              lastAlt = lAltPos, alternation = maskset.validPositions[lastAlt].alternation, prevAltPos = altPos;
            }
          }

          if (void 0 !== alternation) {
            decisionPos = parseInt(lastAlt), maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [], !0 !== maskPos && maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos) + ":" + prevAltPos.alternation);
            var validInputs = [],
                resultPos = -1;

            for (i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++) {
              -1 === resultPos && maskPos <= i && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1), validPos = maskset.validPositions[i], validPos && !0 !== validPos.generatedInput && (void 0 === selection || i < begin || end <= i) && validInputs.push(validPos.input), delete maskset.validPositions[i];
            }

            for (-1 === resultPos && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1); void 0 !== maskset.excludes[decisionPos] && maskset.excludes[decisionPos].length < 10;) {
              for (maskset.tests = {}, resetMaskSet(!0), isValidRslt = !0, i = 0; i < validInputs.length && (nextPos = isValidRslt.caret || getLastValidPosition(void 0, !0) + 1, input = validInputs[i], isValidRslt = isValid(nextPos, input, !1, fromIsValid, !0)); i++) {
                i === resultPos && (returnRslt = isValidRslt), 1 == maskPos && isValidRslt && (returnRslt = {
                  caretPos: i
                });
              }

              if (isValidRslt) break;

              if (resetMaskSet(), prevAltPos = getTest(decisionPos), maskset.validPositions = $.extend(!0, {}, validPsClone), maskset.tests = $.extend(!0, {}, tstClone), !maskset.excludes[decisionPos]) {
                returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                break;
              }

              var decisionTaker = getDecisionTaker(prevAltPos);

              if (-1 !== maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation)) {
                returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                break;
              }

              for (maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation), i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++) {
                delete maskset.validPositions[i];
              }
            }
          }

          return returnRslt && !1 === opts.keepStatic || delete maskset.excludes[decisionPos], returnRslt;
        }

        function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly) {
          function isSelection(posObj) {
            return isRTL ? 1 < posObj.begin - posObj.end || posObj.begin - posObj.end == 1 : 1 < posObj.end - posObj.begin || posObj.end - posObj.begin == 1;
          }

          strict = !0 === strict;
          var maskPos = pos;

          function processCommandObject(commandObj) {
            if (void 0 !== commandObj) {
              if (void 0 !== commandObj.remove && ($.isArray(commandObj.remove) || (commandObj.remove = [commandObj.remove]), $.each(commandObj.remove.sort(function (a, b) {
                return b.pos - a.pos;
              }), function (ndx, lmnt) {
                revalidateMask({
                  begin: lmnt,
                  end: lmnt + 1
                });
              }), commandObj.remove = void 0), void 0 !== commandObj.insert && ($.isArray(commandObj.insert) || (commandObj.insert = [commandObj.insert]), $.each(commandObj.insert.sort(function (a, b) {
                return a.pos - b.pos;
              }), function (ndx, lmnt) {
                "" !== lmnt.c && isValid(lmnt.pos, lmnt.c, void 0 === lmnt.strict || lmnt.strict, void 0 !== lmnt.fromIsValid ? lmnt.fromIsValid : fromIsValid);
              }), commandObj.insert = void 0), commandObj.refreshFromBuffer && commandObj.buffer) {
                var refresh = commandObj.refreshFromBuffer;
                refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, commandObj.buffer), commandObj.refreshFromBuffer = void 0;
              }

              void 0 !== commandObj.rewritePosition && (maskPos = commandObj.rewritePosition, commandObj = !0);
            }

            return commandObj;
          }

          function _isValid(position, c, strict) {
            var rslt = !1;
            return $.each(getTests(position), function (ndx, tst) {
              var test = tst.match;

              if (getBuffer(!0), rslt = null != test.fn ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                c: getPlaceholder(position, test, !0) || test.def,
                pos: position
              }, !1 !== rslt) {
                var elem = void 0 !== rslt.c ? rslt.c : c,
                    validatedPos = position;
                return elem = elem === opts.skipOptionalPartCharacter && !0 === test["static"] ? getPlaceholder(position, test, !0) || test.def : elem, rslt = processCommandObject(rslt), !0 !== rslt && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos), !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c ? !1 : (!1 === revalidateMask(pos, $.extend({}, tst, {
                  input: casing(elem, test, validatedPos)
                }), fromIsValid, validatedPos) && (rslt = !1), !1);
              }
            }), rslt;
          }

          void 0 !== pos.begin && (maskPos = isRTL ? pos.end : pos.begin);
          var result = !0,
              positionsClone = $.extend(!0, {}, maskset.validPositions);
          if (!1 === opts.keepStatic && void 0 !== maskset.excludes[maskPos] && !0 !== fromAlternate && !0 !== fromIsValid) for (var i = maskPos; i < (isRTL ? pos.begin : pos.end); i++) {
            void 0 !== maskset.excludes[i] && (maskset.excludes[i] = void 0, delete maskset.tests[i]);
          }

          if ($.isFunction(opts.preValidation) && !0 !== fromIsValid && !0 !== validateOnly && (result = opts.preValidation.call(el, getBuffer(), maskPos, c, isSelection(pos), opts, maskset, pos, strict || fromAlternate), result = processCommandObject(result)), !0 === result) {
            if (void 0 === maxLength || maskPos < maxLength) {
              if (result = _isValid(maskPos, c, strict), (!strict || !0 === fromIsValid) && !1 === result && !0 !== validateOnly) {
                var currentPosValid = maskset.validPositions[maskPos];

                if (!currentPosValid || !0 !== currentPosValid.match["static"] || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                  if (opts.insertMode || void 0 === maskset.validPositions[seekNext(maskPos)] || pos.end > maskPos) {
                    var skip = !1;
                    if (maskset.jitOffset[maskPos] && void 0 === maskset.validPositions[seekNext(maskPos)] && (result = isValid(maskPos + maskset.jitOffset[maskPos], c, !0), !1 !== result && (!0 !== fromAlternate && (result.caret = maskPos), skip = !0)), pos.end > maskPos && (maskset.validPositions[maskPos] = void 0), !skip && !isMask(maskPos, opts.keepStatic)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                      if (result = _isValid(nPos, c, strict), !1 !== result) {
                        result = trackbackPositions(maskPos, void 0 !== result.pos ? result.pos : nPos) || result, maskPos = nPos;
                        break;
                      }
                    }
                  }
                } else result = {
                  caret: seekNext(maskPos)
                };
              }
            } else result = !1;

            !1 !== result || !opts.keepStatic || !isComplete(getBuffer()) && 0 !== maskPos || strict || !0 === fromAlternate ? isSelection(pos) && maskset.tests[maskPos] && 1 < maskset.tests[maskPos].length && opts.keepStatic && !strict && !0 !== fromAlternate && (result = alternate(!0)) : result = alternate(maskPos, c, strict, fromIsValid, void 0, pos), !0 === result && (result = {
              pos: maskPos
            });
          }

          if ($.isFunction(opts.postValidation) && !0 !== fromIsValid && !0 !== validateOnly) {
            var postResult = opts.postValidation.call(el, getBuffer(!0), void 0 !== pos.begin ? isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict);
            void 0 !== postResult && (result = !0 === postResult ? result : postResult);
          }

          result && void 0 === result.pos && (result.pos = maskPos), !1 === result || !0 === validateOnly ? (resetMaskSet(!0), maskset.validPositions = $.extend(!0, {}, positionsClone)) : trackbackPositions(void 0, maskPos, !0);
          var endResult = processCommandObject(result);
          return endResult;
        }

        function trackbackPositions(originalPos, newPos, fillOnly) {
          if (void 0 === originalPos) for (originalPos = newPos - 1; 0 < originalPos && !maskset.validPositions[originalPos]; originalPos--) {
            ;
          }

          for (var ps = originalPos; ps < newPos; ps++) {
            if (void 0 === maskset.validPositions[ps] && !isMask(ps, !0)) {
              var vp = 0 == ps ? getTest(ps) : maskset.validPositions[ps - 1];

              if (vp) {
                var tests = getTests(ps).slice();
                "" === tests[tests.length - 1].match.def && tests.pop();
                var bestMatch = determineTestTemplate(ps, tests),
                    np;

                if (bestMatch && (!0 !== bestMatch.match.jit || "master" === bestMatch.match.newBlockMarker && (np = maskset.validPositions[ps + 1]) && !0 === np.match.optionalQuantifier) && (bestMatch = $.extend({}, bestMatch, {
                  input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                }), bestMatch.generatedInput = !0, revalidateMask(ps, bestMatch, !0), !0 !== fillOnly)) {
                  var cvpInput = maskset.validPositions[newPos].input;
                  return maskset.validPositions[newPos] = void 0, isValid(newPos, cvpInput, !0, !0);
                }
              }
            }
          }
        }

        function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
          function IsEnclosedStatic(pos, valids, selection) {
            var posMatch = valids[pos];
            if (void 0 === posMatch || !0 !== posMatch.match["static"] || !0 === posMatch.match.optionality || void 0 !== valids[0] && void 0 !== valids[0].alternation) return !1;
            var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && !0 === valids[pos - 1].match["static"] && valids[pos - 1] : valids[pos - 1],
                nextMatch = selection.end > pos + 1 ? valids[pos + 1] && !0 === valids[pos + 1].match["static"] && valids[pos + 1] : valids[pos + 1];
            return prevMatch && nextMatch;
          }

          var offset = 0,
              begin = void 0 !== pos.begin ? pos.begin : pos,
              end = void 0 !== pos.end ? pos.end : pos;

          if (pos.begin > pos.end && (begin = pos.end, end = pos.begin), validatedPos = void 0 !== validatedPos ? validatedPos : begin, begin !== end || opts.insertMode && void 0 !== maskset.validPositions[validatedPos] && void 0 === fromIsValid || void 0 === validTest) {
            var positionsClone = $.extend(!0, {}, maskset.validPositions),
                lvp = getLastValidPosition(void 0, !0),
                i;

            for (maskset.p = begin, i = lvp; begin <= i; i--) {
              delete maskset.validPositions[i], void 0 === validTest && delete maskset.tests[i + 1];
            }

            var valid = !0,
                j = validatedPos,
                posMatch = j,
                t,
                canMatch;

            for (i = j, validTest && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest), posMatch++, j++, begin < end && i++); i <= lvp; i++) {
              if (void 0 !== (t = positionsClone[i]) && !0 !== t.generatedInput && (end <= i || begin <= i && IsEnclosedStatic(i, positionsClone, {
                begin: begin,
                end: end
              }))) {
                for (; "" !== getTest(posMatch).match.def;) {
                  if (!1 !== (canMatch = positionCanMatchDefinition(posMatch, t, opts)) || "+" === t.match.def) {
                    "+" === t.match.def && getBuffer(!0);
                    var result = isValid(posMatch, t.input, "+" !== t.match.def, "+" !== t.match.def);
                    if (valid = !1 !== result, j = (result.pos || posMatch) + 1, !valid && canMatch) break;
                  } else valid = !1;

                  if (valid) {
                    void 0 === validTest && t.match["static"] && i === pos.begin && offset++;
                    break;
                  }

                  if (!valid && posMatch > maskset.maskLength) break;
                  posMatch++;
                }

                "" == getTest(posMatch).match.def && (valid = !1), posMatch = j;
              }

              if (!valid) break;
            }

            if (!valid) return maskset.validPositions = $.extend(!0, {}, positionsClone), resetMaskSet(!0), !1;
          } else validTest && getTest(validatedPos).match.cd === validTest.match.cd && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest));

          return resetMaskSet(!0), offset;
        }

        function isMask(pos, strict, fuzzy) {
          var test = getTestTemplate(pos).match;
          if ("" === test.def && (test = getTest(pos).match), !0 !== test["static"]) return test.fn;
          if (!0 === fuzzy && void 0 !== maskset.validPositions[pos] && !0 !== maskset.validPositions[pos].generatedInput) return !0;

          if (!0 !== strict && -1 < pos) {
            if (fuzzy) {
              var tests = getTests(pos);
              return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
            }

            var testTemplate = determineTestTemplate(pos, getTests(pos)),
                testPlaceHolder = getPlaceholder(pos, testTemplate.match);
            return testTemplate.match.def !== testPlaceHolder;
          }

          return !1;
        }

        function seekNext(pos, newBlock, fuzzy) {
          void 0 === fuzzy && (fuzzy = !0);

          for (var position = pos + 1; "" !== getTest(position).match.def && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position, void 0, !0)) || !0 !== newBlock && !isMask(position, void 0, fuzzy));) {
            position++;
          }

          return position;
        }

        function seekPrevious(pos, newBlock) {
          var position = pos,
              tests;
          if (position <= 0) return 0;

          for (; 0 < --position && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position, void 0, !0) && (tests = getTests(position), tests.length < 2 || 2 === tests.length && "" === tests[1].match.def));) {
            ;
          }

          return position;
        }

        function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
          if (event && $.isFunction(opts.onBeforeWrite)) {
            var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);

            if (result) {
              if (result.refreshFromBuffer) {
                var refresh = result.refreshFromBuffer;
                refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), buffer = getBuffer(!0);
              }

              void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos);
            }
          }

          if (void 0 !== input && (input.inputmask._valueSet(buffer.join("")), void 0 === caretPos || void 0 !== event && "blur" === event.type || caret(input, caretPos, void 0, void 0, void 0 !== event && "keydown" === event.type && (event.keyCode === keyCode.DELETE || event.keyCode === keyCode.BACKSPACE)), !0 === triggerEvents)) {
            var $input = $(input),
                nptVal = input.inputmask._valueGet();

            skipInputEvent = !0, $input.trigger("input"), setTimeout(function () {
              nptVal === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(buffer) && $input.trigger("complete");
            }, 0);
          }
        }

        function getPlaceholder(pos, test, returnPL) {
          if (test = test || getTest(pos).match, void 0 !== test.placeholder || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
          if (!0 !== test["static"]) return opts.placeholder.charAt(pos % opts.placeholder.length);

          if (-1 < pos && void 0 === maskset.validPositions[pos]) {
            var tests = getTests(pos),
                staticAlternations = [],
                prevTest;
            if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) {
              if ("" !== tests[i].match.def && !0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (!0 === tests[i].match["static"] || void 0 === prevTest || !1 !== tests[i].match.fn.test(prevTest.match.def, maskset, pos, !0, opts)) && (staticAlternations.push(tests[i]), !0 === tests[i].match["static"] && (prevTest = tests[i]), 1 < staticAlternations.length && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
            }
          }

          return test.def;
        }

        function HandleNativePlaceholder(npt, value) {
          if (ie) {
            if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || "" === npt.placeholder)) {
              var buffer = getBuffer().slice(),
                  nptValue = npt.inputmask._valueGet();

              if (nptValue !== value) {
                var lvp = getLastValidPosition();
                -1 === lvp && nptValue === getBufferTemplate().join("") ? buffer = [] : -1 !== lvp && clearOptionalTail(buffer), writeBuffer(npt, buffer);
              }
            }
          } else npt.placeholder !== value && (npt.placeholder = value, "" === npt.placeholder && npt.removeAttribute("placeholder"));
        }

        function determineNewCaretPosition(selectedCaret, tabbed) {
          function doRadixFocus(clickPos) {
            if ("" !== opts.radixPoint && 0 !== opts.digits) {
              var vps = maskset.validPositions;

              if (void 0 === vps[clickPos] || vps[clickPos].input === getPlaceholder(clickPos)) {
                if (clickPos < seekNext(-1)) return !0;
                var radixPos = $.inArray(opts.radixPoint, getBuffer());

                if (-1 !== radixPos) {
                  for (var vp in vps) {
                    if (vps[vp] && radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                  }

                  return !0;
                }
              }
            }

            return !1;
          }

          if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), selectedCaret.begin === selectedCaret.end) {
            switch (opts.positionCaretOnClick) {
              case "none":
                break;

              case "select":
                selectedCaret = {
                  begin: 0,
                  end: getBuffer().length
                };
                break;

              case "ignore":
                selectedCaret.end = selectedCaret.begin = seekNext(getLastValidPosition());
                break;

              case "radixFocus":
                if (doRadixFocus(selectedCaret.begin)) {
                  var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                  selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext(radixPos) : radixPos;
                  break;
                }

              default:
                var clickPosition = selectedCaret.begin,
                    lvclickPosition = getLastValidPosition(clickPosition, !0),
                    lastPosition = seekNext(-1 !== lvclickPosition || isMask(0) ? lvclickPosition : 0);
                if (clickPosition < lastPosition) selectedCaret.end = selectedCaret.begin = isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition);else {
                  var lvp = maskset.validPositions[lvclickPosition],
                      tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : void 0, lvp),
                      placeholder = getPlaceholder(lastPosition, tt.match);

                  if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                    var newPos = seekNext(lastPosition);
                    (newPos <= clickPosition || clickPosition === lastPosition) && (lastPosition = newPos);
                  }

                  selectedCaret.end = selectedCaret.begin = lastPosition;
                }
            }

            return selectedCaret;
          }
        }

        var EventRuler = {
          on: function on(input, eventName, eventHandler) {
            var ev = function ev(e) {
              e.originalEvent && (e = e.originalEvent || e, arguments[0] = e);
              var that = this,
                  args;

              if (void 0 === that.inputmask && "FORM" !== this.nodeName) {
                var imOpts = $.data(that, "_inputmask_opts");
                imOpts ? new Inputmask(imOpts).mask(that) : EventRuler.off(that);
              } else {
                if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === keyCode.TAB))) {
                  switch (e.type) {
                    case "input":
                      if (!0 === skipInputEvent || e.inputType && "insertCompositionText" === e.inputType) return skipInputEvent = !1, e.preventDefault();
                      break;

                    case "keydown":
                      skipKeyPressEvent = !1, skipInputEvent = !1;
                      break;

                    case "keypress":
                      if (!0 === skipKeyPressEvent) return e.preventDefault();
                      skipKeyPressEvent = !0;
                      break;

                    case "click":
                    case "focus":
                      return validationEvent ? (validationEvent = !1, input.blur(), HandleNativePlaceholder(input, (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join("")), setTimeout(function () {
                        input.focus();
                      }, 3e3)) : (args = arguments, setTimeout(function () {
                        eventHandler.apply(that, args);
                      }, 0)), !1;
                  }

                  var returnVal = eventHandler.apply(that, arguments);
                  return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                }

                e.preventDefault();
              }
            };

            input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
          },
          off: function off(input, event) {
            var events;
            input.inputmask && input.inputmask.events && (event ? (events = [], events[event] = input.inputmask.events[event]) : events = input.inputmask.events, $.each(events, function (eventName, evArr) {
              for (; 0 < evArr.length;) {
                var ev = evArr.pop();
                -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
              }

              delete input.inputmask.events[eventName];
            }));
          }
        },
            EventHandlers = {
          keydownEvent: function keydownEvent(e) {
            var input = this,
                $input = $(input),
                k = e.keyCode,
                pos = caret(input),
                kdResult = opts.onKeyDown.call(this, e, getBuffer(), pos, opts);
            if (void 0 !== kdResult) return kdResult;
            if (k === keyCode.BACKSPACE || k === keyCode.DELETE || iphone && k === keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === keyCode.X && !("oncut" in input)) e.preventDefault(), handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), maskset.p, e, input.inputmask._valueGet() !== getBuffer().join(""));else if (k === keyCode.END || k === keyCode.PAGE_DOWN) {
              e.preventDefault();
              var caretPos = seekNext(getLastValidPosition());
              caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
            } else k === keyCode.HOME && !e.shiftKey || k === keyCode.PAGE_UP ? (e.preventDefault(), caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split("")), $input.trigger("click")) : !0 === opts.tabThrough && k === keyCode.TAB ? (!0 === e.shiftKey ? (!0 === getTest(pos.begin).match["static"] && (pos.begin = seekNext(pos.begin)), pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), pos.end = seekNext(pos.begin, !0), pos.end < maskset.maskLength && pos.end--), pos.begin < maskset.maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || opts.insertModeVisual && !1 === opts.insertMode && (k === keyCode.RIGHT ? setTimeout(function () {
              var caretPos = caret(input);
              caret(input, caretPos.begin);
            }, 0) : k === keyCode.LEFT && setTimeout(function () {
              var caretPos_begin = translatePosition(input.inputmask.caretPos.begin),
                  caretPos_end = translatePosition(input.inputmask.caretPos.end);
              caret(input, isRTL ? caretPos_begin + (caretPos_begin === maskset.maskLength ? 0 : 1) : caretPos_begin - (0 === caretPos_begin ? 0 : 1));
            }, 0));
            ignorable = -1 !== $.inArray(k, opts.ignorables);
          },
          keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
            var input = this,
                $input = $(input),
                k = e.which || e.charCode || e.keyCode;
            if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), setTimeout(function () {
              $input.trigger("change");
            }, 0)), skipInputEvent = !0, !0;

            if (k) {
              44 !== k && 46 !== k || 3 !== e.location || "" === opts.radixPoint || (k = opts.radixPoint.charCodeAt(0));
              var pos = checkval ? {
                begin: ndx,
                end: ndx
              } : caret(input),
                  forwardPosition,
                  c = String.fromCharCode(k);
              maskset.writeOutBuffer = !0;
              var valResult = isValid(pos, c, strict);

              if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = void 0 !== valResult.caret ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos), maskset.p = forwardPosition), forwardPosition = opts.numericInput && void 0 === valResult.caret ? seekPrevious(forwardPosition) : forwardPosition, !1 !== writeOut && (setTimeout(function () {
                opts.onKeyValidation.call(input, k, valResult);
              }, 0), maskset.writeOutBuffer && !1 !== valResult)) {
                var buffer = getBuffer();
                writeBuffer(input, buffer, forwardPosition, e, !0 !== checkval);
              }

              if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), valResult;
            }
          },
          pasteEvent: function pasteEvent(e) {
            var input = this,
                inputValue = this.inputmask._valueGet(!0),
                caretPos = caret(this),
                tempValue;

            isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
            var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
            if (valueBeforeCaret == (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), valueAfterCaret == (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;else {
              if (!e.clipboardData || !e.clipboardData.getData) return !0;
              inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret;
            }
            var pasteValue = inputValue;

            if ($.isFunction(opts.onBeforePaste)) {
              if (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts), !1 === pasteValue) return e.preventDefault();
              pasteValue = pasteValue || inputValue;
            }

            return checkVal(this, !1, !1, pasteValue.toString().split("")), writeBuffer(this, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), e.preventDefault();
          },
          inputFallBackEvent: function inputFallBackEvent(e) {
            function ieMobileHandler(input, inputValue, caretPos) {
              if (iemobile) {
                var inputChar = inputValue.replace(getBuffer().join(""), "");

                if (1 === inputChar.length) {
                  var iv = inputValue.split("");
                  iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("");
                }
              }

              return inputValue;
            }

            function analyseChanges(inputValue, buffer, caretPos) {
              for (var frontPart = inputValue.substr(0, caretPos.begin).split(""), backPart = inputValue.substr(caretPos.begin).split(""), frontBufferPart = buffer.substr(0, caretPos.begin).split(""), backBufferPart = buffer.substr(caretPos.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, bl, i, action = "", data = [], marker = "~", placeholder; frontPart.length < fpl;) {
                frontPart.push("~");
              }

              for (; frontBufferPart.length < fpl;) {
                frontBufferPart.push("~");
              }

              for (; backPart.length < bpl;) {
                backPart.unshift("~");
              }

              for (; backBufferPart.length < bpl;) {
                backBufferPart.unshift("~");
              }

              var newBuffer = frontPart.concat(backPart),
                  oldBuffer = frontBufferPart.concat(backBufferPart);

              for (i = 0, bl = newBuffer.length; i < bl; i++) {
                switch (placeholder = getPlaceholder(translatePosition(i)), action) {
                  case "insertText":
                    oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1 && data.push(newBuffer[i]), i = bl;
                    break;

                  case "insertReplacementText":
                    "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                    break;

                  case "deleteContentBackward":
                    "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                    break;

                  default:
                    newBuffer[i] !== oldBuffer[i] && ("~" !== newBuffer[i + 1] && newBuffer[i + 1] !== placeholder && void 0 !== newBuffer[i + 1] || (oldBuffer[i] !== placeholder || "~" !== oldBuffer[i + 1]) && "~" !== oldBuffer[i] ? "~" === oldBuffer[i + 1] && oldBuffer[i] === newBuffer[i + 1] ? (action = "insertText", data.push(newBuffer[i]), caretPos.begin--, caretPos.end--) : newBuffer[i] !== placeholder && "~" !== newBuffer[i] && ("~" === newBuffer[i + 1] || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]) ? (action = "insertReplacementText", data.push(newBuffer[i]), caretPos.begin--) : "~" === newBuffer[i] ? (action = "deleteContentBackward", !isMask(translatePosition(i), !0) && oldBuffer[i] !== opts.radixPoint || caretPos.end++) : i = bl : (action = "insertText", data.push(newBuffer[i]), caretPos.begin--, caretPos.end--));
                    break;
                }
              }

              return {
                action: action,
                data: data,
                caret: caretPos
              };
            }

            var input = this,
                inputValue = input.inputmask._valueGet(!0),
                buffer = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(""),
                caretPos = caret(input, void 0, void 0, !0);

            if (buffer !== inputValue) {
              inputValue = ieMobileHandler(input, inputValue, caretPos);
              var changes = analyseChanges(inputValue, buffer, caretPos);

              switch ((input.inputmask.shadowRoot || document).activeElement !== input && input.focus(), writeBuffer(input, getBuffer()), caret(input, caretPos.begin, caretPos.end, !0), changes.action) {
                case "insertText":
                case "insertReplacementText":
                  $.each(changes.data, function (ndx, entry) {
                    var keypress = new $.Event("keypress");
                    keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                  }), setTimeout(function () {
                    $el.trigger("keyup");
                  }, 0);
                  break;

                case "deleteContentBackward":
                  var keydown = new $.Event("keydown");
                  keydown.keyCode = keyCode.BACKSPACE, EventHandlers.keydownEvent.call(input, keydown);
                  break;

                default:
                  applyInputValue(input, inputValue);
                  break;
              }

              e.preventDefault();
            }
          },
          compositionendEvent: function compositionendEvent(e) {
            $el.trigger("input");
          },
          setValueEvent: function setValueEvent(e, argument_1, argument_2) {
            var input = this,
                value = e && e.detail ? e.detail[0] : argument_1;
            void 0 === value && (value = this.inputmask._valueGet(!0)), applyInputValue(this, value), (e.detail && void 0 !== e.detail[1] || void 0 !== argument_2) && caret(this, e.detail ? e.detail[1] : argument_2);
          },
          focusEvent: function focusEvent(e) {
            var input = this,
                nptValue = this.inputmask._valueGet();

            opts.showMaskOnFocus && nptValue !== getBuffer().join("") && writeBuffer(this, getBuffer(), seekNext(getLastValidPosition())), !0 !== opts.positionCaretOnTab || !1 !== mouseEnter || isComplete(getBuffer()) && -1 !== getLastValidPosition() || EventHandlers.clickEvent.apply(this, [e, !0]), undoValue = getBuffer().join("");
          },
          invalidEvent: function invalidEvent(e) {
            validationEvent = !0;
          },
          mouseleaveEvent: function mouseleaveEvent() {
            var input = this;
            mouseEnter = !1, opts.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document).activeElement !== this && HandleNativePlaceholder(this, originalPlaceholder);
          },
          clickEvent: function clickEvent(e, tabbed) {
            var input = this;

            if ((this.inputmask.shadowRoot || document).activeElement === this) {
              var newCaretPosition = determineNewCaretPosition(caret(this), tabbed);
              void 0 !== newCaretPosition && caret(this, newCaretPosition);
            }
          },
          cutEvent: function cutEvent(e) {
            var input = this,
                pos = caret(this),
                clipboardData = window.clipboardData || e.clipboardData,
                clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
            clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), document.execCommand && document.execCommand("copy"), handleRemove(this, keyCode.DELETE, pos), writeBuffer(this, getBuffer(), maskset.p, e, undoValue !== getBuffer().join(""));
          },
          blurEvent: function blurEvent(e) {
            var $input = $(this),
                input = this;

            if (this.inputmask) {
              HandleNativePlaceholder(this, originalPlaceholder);

              var nptValue = this.inputmask._valueGet(),
                  buffer = getBuffer().slice();

              "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), !1 === isComplete(buffer) && (setTimeout(function () {
                $input.trigger("incomplete");
              }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), writeBuffer(this, buffer, void 0, e)), undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), $input.trigger("change"));
            }
          },
          mouseenterEvent: function mouseenterEvent() {
            var input = this;
            mouseEnter = !0, (this.inputmask.shadowRoot || document).activeElement !== this && (null == originalPlaceholder && this.placeholder !== originalPlaceholder && (originalPlaceholder = this.placeholder), opts.showMaskOnHover && HandleNativePlaceholder(this, (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join("")));
          },
          submitEvent: function submitEvent() {
            undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), opts.clearIncomplete && !1 === isComplete(getBuffer()) && el.inputmask._valueSet(""), opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), setTimeout(function () {
              writeBuffer(el, getBuffer());
            }, 0));
          },
          resetEvent: function resetEvent() {
            el.inputmask.refreshValue = !0, setTimeout(function () {
              applyInputValue(el, el.inputmask._valueGet(!0));
            }, 0);
          }
        },
            valueBuffer;

        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
          var inputmask = this || input.inputmask,
              inputValue = nptvl.slice(),
              charCodes = "",
              initialNdx = -1,
              result = void 0;

          function isTemplateMatch(ndx, charCodes) {
            for (var targetTemplate = getMaskTemplate(!0, 0).slice(ndx, seekNext(ndx)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes); 0 < charCodeNdx && " " === targetTemplate[charCodeNdx - 1];) {
              charCodeNdx--;
            }

            var match = 0 === charCodeNdx && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx).match["static"] && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === getTest(ndx).match.nativeDef && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx + 1).match["static"] && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
            return !match && 0 < charCodeNdx && (inputmask.caretPos = {
              begin: seekNext(charCodeNdx)
            }), match;
          }

          resetMaskSet(), maskset.tests = {}, initialNdx = opts.radixPoint ? determineNewCaretPosition({
            begin: 0,
            end: 0
          }).begin : 0, maskset.p = initialNdx, inputmask.caretPos = {
            begin: initialNdx
          };
          var staticMatches = [],
              prevCaretPos = inputmask.caretPos;

          if ($.each(inputValue, function (ndx, charCode) {
            if (void 0 !== charCode) if (void 0 === maskset.validPositions[ndx] && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, void 0, void 0, !0)) maskset.p++;else {
              var keypress = new $.Event("_checkval");
              keypress.which = charCode.toString().charCodeAt(0), charCodes += charCode;
              var lvp = getLastValidPosition(void 0, !0);
              isTemplateMatch(initialNdx, charCodes) ? result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, lvp + 1) : (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, inputmask.caretPos.begin), result && (initialNdx = inputmask.caretPos.begin + 1, charCodes = "")), result ? (void 0 !== result.pos && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match["static"] && void 0 === maskset.validPositions[result.pos].alternation && (staticMatches.push(result.pos), isRTL || (result.forwardPosition = result.pos + 1)), writeBuffer(void 0, getBuffer(), result.forwardPosition, keypress, !1), inputmask.caretPos = {
                begin: result.forwardPosition,
                end: result.forwardPosition
              }, prevCaretPos = inputmask.caretPos) : inputmask.caretPos = prevCaretPos;
            }
          }), 0 < staticMatches.length) {
            var sndx,
                validPos,
                nextValid = seekNext(-1, void 0, !1);
            if (!isComplete(getBuffer()) && staticMatches.length <= nextValid || isComplete(getBuffer()) && 0 < staticMatches.length && staticMatches.length !== nextValid && 0 === staticMatches[0]) for (var nextSndx = nextValid; void 0 !== (sndx = staticMatches.shift());) {
              var keypress = new $.Event("_checkval");
              if (validPos = maskset.validPositions[sndx], validPos.generatedInput = !0, keypress.which = validPos.input.charCodeAt(0), result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, nextSndx), result && void 0 !== result.pos && result.pos !== sndx && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match["static"]) staticMatches.push(result.pos);else if (!result) break;
              nextSndx++;
            } else for (; sndx = staticMatches.pop();) {
              validPos = maskset.validPositions[sndx], validPos && (validPos.generatedInput = !0);
            }
          }

          if (writeOut) for (var vndx in writeBuffer(input, getBuffer(), result ? result.forwardPosition : void 0, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type), maskset.validPositions) {
            !0 !== maskset.validPositions[vndx].match.generated && delete maskset.validPositions[vndx].generatedInput;
          }
        }

        function unmaskedvalue(input) {
          if (input) {
            if (void 0 === input.inputmask) return input.value;
            input.inputmask && input.inputmask.refreshValue && applyInputValue(input, input.inputmask._valueGet(!0));
          }

          var umValue = [],
              vps = maskset.validPositions;

          for (var pndx in vps) {
            vps[pndx] && vps[pndx].match && 1 != vps[pndx].match["static"] && umValue.push(vps[pndx].input);
          }

          var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");

          if ($.isFunction(opts.onUnMask)) {
            var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
            unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
          }

          return unmaskedValue;
        }

        function translatePosition(pos) {
          return !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = el.inputmask._valueGet().length - pos), pos;
        }

        function caret(input, begin, end, notranslate, isDelete) {
          var range;
          if (void 0 === begin) return "selectionStart" in input && "selectionEnd" in input ? (begin = input.selectionStart, end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), end = begin + range.text.length), {
            begin: notranslate ? begin : translatePosition(begin),
            end: notranslate ? end : translatePosition(end)
          };

          if ($.isArray(begin) && (end = isRTL ? begin[0] : begin[1], begin = isRTL ? begin[1] : begin[0]), void 0 !== begin.begin && (end = isRTL ? begin.begin : begin.end, begin = isRTL ? begin.end : begin.begin), "number" == typeof begin) {
            begin = notranslate ? begin : translatePosition(begin), end = notranslate ? end : translatePosition(end), end = "number" == typeof end ? end : begin;
            var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
            if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, input.inputmask.caretPos = {
              begin: begin,
              end: end
            }, opts.insertModeVisual && !1 === opts.insertMode && begin === end && (isDelete || end++), input === (input.inputmask.shadowRoot || document).activeElement) if ("setSelectionRange" in input) input.setSelectionRange(begin, end);else if (window.getSelection) {
              if (range = document.createRange(), void 0 === input.firstChild || null === input.firstChild) {
                var textNode = document.createTextNode("");
                input.appendChild(textNode);
              }

              range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), range.collapse(!0);
              var sel = window.getSelection();
              sel.removeAllRanges(), sel.addRange(range);
            } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select());
          }
        }

        function determineLastRequiredPosition(returnDefinition) {
          var buffer = getMaskTemplate(!0, getLastValidPosition(), !0, !0),
              bl = buffer.length,
              pos,
              lvp = getLastValidPosition(),
              positions = {},
              lvTest = maskset.validPositions[lvp],
              ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0,
              testPos;

          for (pos = lvp + 1; pos < buffer.length; pos++) {
            testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
          }

          var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;

          for (pos = bl - 1; lvp < pos && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && 1 != testPos.match["static"] || !0 === testPos.match["static"] && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) {
            bl--;
          }

          return returnDefinition ? {
            l: bl,
            def: positions[bl] ? positions[bl].match : void 0
          } : bl;
        }

        function clearOptionalTail(buffer) {
          buffer.length = 0;

          for (var template = getMaskTemplate(!0, 0, !0, void 0, !0), lmnt; void 0 !== (lmnt = template.shift());) {
            buffer.push(lmnt);
          }

          return buffer;
        }

        function isComplete(buffer) {
          if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);

          if ("*" !== opts.repeat) {
            var complete = !1,
                lrp = determineLastRequiredPosition(!0),
                aml = seekPrevious(lrp.l);

            if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
              complete = !0;

              for (var i = 0; i <= aml; i++) {
                var test = getTestTemplate(i).match;

                if (!0 !== test["static"] && void 0 === maskset.validPositions[i] && !0 !== test.optionality && !0 !== test.optionalQuantifier || !0 === test["static"] && buffer[i] !== getPlaceholder(i, test)) {
                  complete = !1;
                  break;
                }
              }
            }

            return complete;
          }
        }

        function handleRemove(input, k, pos, strict, fromIsValid) {
          if ((opts.numericInput || isRTL) && (k === keyCode.BACKSPACE ? k = keyCode.DELETE : k === keyCode.DELETE && (k = keyCode.BACKSPACE), isRTL)) {
            var pend = pos.end;
            pos.end = pos.begin, pos.begin = pend;
          }

          var offset;

          if (k === keyCode.BACKSPACE ? pos.end - pos.begin < 1 && (pos.begin = seekPrevious(pos.begin)) : k === keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0, !0) ? pos.end + 1 : seekNext(pos.end) + 1), !1 !== (offset = revalidateMask(pos))) {
            if (!0 !== strict && !1 !== opts.keepStatic || null !== opts.regex && -1 !== getTest(pos.begin).match.def.indexOf("|")) {
              var result = alternate(!0);

              if (result) {
                var newPos = void 0 !== result.caret ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, !0);
                (k !== keyCode.DELETE || pos.begin > newPos) && pos.begin;
              }
            }

            !0 !== strict && (maskset.p = k === keyCode.DELETE ? pos.begin + offset : pos.begin);
          }
        }

        function applyInputValue(input, value) {
          input.inputmask.refreshValue = !1, $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), value = value.toString().split(""), checkVal(input, !0, !1, value), undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && -1 === getLastValidPosition() && input.inputmask._valueSet("");
        }

        function mask(elem) {
          function isElementTypeSupported(input, opts) {
            function patchValueProperty(npt) {
              var valueGet, valueSet;

              function patchValhook(type) {
                if ($.valHooks && (void 0 === $.valHooks[type] || !0 !== $.valHooks[type].inputmaskpatch)) {
                  var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                    return elem.value;
                  },
                      valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                    return elem.value = value, elem;
                  };
                  $.valHooks[type] = {
                    get: function get(elem) {
                      if (elem.inputmask) {
                        if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                        var result = valhookGet(elem);
                        return -1 !== getLastValidPosition(void 0, void 0, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                      }

                      return valhookGet(elem);
                    },
                    set: function set(elem, value) {
                      var result = valhookSet(elem, value);
                      return elem.inputmask && applyInputValue(elem, value), result;
                    },
                    inputmaskpatch: !0
                  };
                }
              }

              function getter() {
                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? (this.inputmask.shadowRoot || document.activeElement) === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
              }

              function setter(value) {
                valueSet.call(this, value), this.inputmask && applyInputValue(this, value);
              }

              function installNativeValueSetFallback(npt) {
                EventRuler.on(npt, "mouseenter", function () {
                  var input = this,
                      value = this.inputmask._valueGet(!0);

                  value !== (isRTL ? getBuffer().reverse() : getBuffer()).join("") && applyInputValue(this, value);
                });
              }

              if (!npt.inputmask.__valueGet) {
                if (!0 !== opts.noValuePatching) {
                  if (Object.getOwnPropertyDescriptor) {
                    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function (object) {
                      return object.__proto__;
                    } : function (object) {
                      return object.constructor.prototype;
                    });
                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                    valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                      get: getter,
                      set: setter,
                      configurable: !0
                    })) : "input" !== npt.tagName.toLowerCase() && (valueGet = function valueGet() {
                      return this.textContent;
                    }, valueSet = function valueSet(value) {
                      this.textContent = value;
                    }, Object.defineProperty(npt, "value", {
                      get: getter,
                      set: setter,
                      configurable: !0
                    }));
                  } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), npt.__defineSetter__("value", setter));

                  npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                }

                npt.inputmask._valueGet = function (overruleRTL) {
                  return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                }, npt.inputmask._valueSet = function (value, overruleRTL) {
                  valueSet.call(this.el, null == value ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                }, void 0 === valueGet && (valueGet = function valueGet() {
                  return this.value;
                }, valueSet = function valueSet(value) {
                  this.value = value;
                }, patchValhook(npt.type), installNativeValueSetFallback(npt));
              }
            }

            "textarea" !== input.tagName.toLowerCase() && opts.ignorables.push(keyCode.ENTER);
            var elementType = input.getAttribute("type"),
                isSupported = "input" === input.tagName.toLowerCase() && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "textarea" === input.tagName.toLowerCase();
            if (!isSupported) if ("input" === input.tagName.toLowerCase()) {
              var el = document.createElement("input");
              el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
            } else isSupported = "partial";
            return !1 !== isSupported ? patchValueProperty(input) : input.inputmask = void 0, isSupported;
          }

          EventRuler.off(elem);
          var isSupported = isElementTypeSupported(elem, opts);

          if (!1 !== isSupported) {
            el = elem, $el = $(el), originalPlaceholder = el.placeholder, maxLength = void 0 !== el ? el.maxLength : void 0, -1 === maxLength && (maxLength = void 0), "inputMode" in el && null === el.getAttribute("inputmode") && (el.inputMode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), !0 === isSupported && (opts.showMaskOnFocus = opts.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(el.autocomplete), iphone && (opts.insertModeVisual = !1), EventRuler.on(el, "submit", EventHandlers.submitEvent), EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), EventRuler.on(el, "invalid", EventHandlers.invalidEvent), EventRuler.on(el, "click", EventHandlers.clickEvent), EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), mobile || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), EventRuler.on(el, "compositionend", EventHandlers.compositionendEvent)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), undoValue = getBufferTemplate().join("");
            var activeElement = (el.inputmask.shadowRoot || document).activeElement;

            if ("" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || activeElement === el) {
              applyInputValue(el, el.inputmask._valueGet(!0), opts);
              var buffer = getBuffer().slice();
              !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), opts.clearMaskOnLostFocus && activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && activeElement === el || "" !== el.inputmask._valueGet(!0)) && writeBuffer(el, buffer), activeElement === el && caret(el, seekNext(getLastValidPosition()));
            }
          }
        }

        if (void 0 !== actionObj) switch (actionObj.action) {
          case "isComplete":
            return el = actionObj.el, isComplete(getBuffer());

          case "unmaskedvalue":
            return void 0 !== el && void 0 === actionObj.value || (valueBuffer = actionObj.value, valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer).split(""), checkVal.call(this, void 0, !1, !1, valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, void 0, getBuffer(), 0, opts)), unmaskedvalue(el);

          case "mask":
            mask(el);
            break;

          case "format":
            return valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), checkVal.call(this, void 0, !0, !1, valueBuffer), actionObj.metadata ? {
              value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
              metadata: maskScope.call(this, {
                action: "getmetadata"
              }, maskset, opts)
            } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

          case "isValid":
            actionObj.value ? (valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), checkVal.call(this, void 0, !0, !1, valueBuffer)) : actionObj.value = isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

            for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; rl < lmib && !isMask(lmib); lmib--) {
              ;
            }

            return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === (isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""));

          case "getemptymask":
            return getBufferTemplate().join("");

          case "remove":
            if (el && el.inputmask) {
              $.data(el, "_inputmask_opts", null), $el = $(el);
              var cv = opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(opts.autoUnmask),
                  valueProperty;
              cv !== getBufferTemplate().join("") ? el.inputmask._valueSet(cv, opts.autoUnmask) : el.inputmask._valueSet(""), EventRuler.off(el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value"), valueProperty && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                get: el.inputmask.__valueGet,
                set: el.inputmask.__valueSet,
                configurable: !0
              })) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = void 0;
            }

            return el;

          case "getmetadata":
            if ($.isArray(maskset.metadata)) {
              var maskTarget = getMaskTemplate(!0, 0, !1).join("");
              return $.each(maskset.metadata, function (ndx, mtdt) {
                if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
              }), maskTarget;
            }

            return maskset.metadata;
        }
      };
    }, function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      var Inputmask = __webpack_require__(1),
          $ = Inputmask.dependencyLib,
          keyCode = __webpack_require__(0),
          formatCode = {
        d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
        dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
          return pad(Date.prototype.getDate.call(this), 2);
        }],
        ddd: [""],
        dddd: [""],
        m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
          return Date.prototype.getMonth.call(this) + 1;
        }],
        mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
          return pad(Date.prototype.getMonth.call(this) + 1, 2);
        }],
        mmm: [""],
        mmmm: [""],
        yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
          return pad(Date.prototype.getFullYear.call(this), 2);
        }],
        yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
          return pad(Date.prototype.getFullYear.call(this), 4);
        }],
        h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
        hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
          return pad(Date.prototype.getHours.call(this), 2);
        }],
        hx: [function (x) {
          return "[0-9]{".concat(x, "}");
        }, Date.prototype.setHours, "hours", function (x) {
          return Date.prototype.getHours;
        }],
        H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
        HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
          return pad(Date.prototype.getHours.call(this), 2);
        }],
        Hx: [function (x) {
          return "[0-9]{".concat(x, "}");
        }, Date.prototype.setHours, "hours", function (x) {
          return function () {
            return pad(Date.prototype.getHours.call(this), x);
          };
        }],
        M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
        MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
          return pad(Date.prototype.getMinutes.call(this), 2);
        }],
        s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
        ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
          return pad(Date.prototype.getSeconds.call(this), 2);
        }],
        l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
          return pad(Date.prototype.getMilliseconds.call(this), 3);
        }],
        L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
          return pad(Date.prototype.getMilliseconds.call(this), 2);
        }],
        t: ["[ap]"],
        tt: ["[ap]m"],
        T: ["[AP]"],
        TT: ["[AP]M"],
        Z: [""],
        o: [""],
        S: [""]
      },
          formatAlias = {
        isoDate: "yyyy-mm-dd",
        isoTime: "HH:MM:ss",
        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
      };

      function formatcode(match) {
        var dynMatches = new RegExp("\\d+$").exec(match[0]);

        if (dynMatches && void 0 !== dynMatches[0]) {
          var fcode = formatCode[match[0][0] + "x"].slice("");
          return fcode[0] = fcode[0](dynMatches[0]), fcode[3] = fcode[3](dynMatches[0]), fcode;
        }

        if (formatCode[match[0]]) return formatCode[match[0]];
      }

      function getTokenizer(opts) {
        if (!opts.tokenizer) {
          var tokens = [],
              dyntokens = [];

          for (var ndx in formatCode) {
            if (/\.*x$/.test(ndx)) {
              var dynToken = ndx[0] + "\\d+";
              -1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken);
            } else -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
          }

          opts.tokenizer = "(" + (0 < dyntokens.length ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + ")+?|.", opts.tokenizer = new RegExp(opts.tokenizer, "g");
        }

        return opts.tokenizer;
      }

      function isValidDate(dateParts, currentResult) {
        return (!isFinite(dateParts.rawday) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) && currentResult;
      }

      function isDateInRange(dateParts, opts) {
        var result = !0;

        if (opts.min) {
          if (dateParts.rawyear) {
            var rawYear = dateParts.rawyear.replace(/[^0-9]/g, ""),
                minYear = opts.min.year.substr(0, rawYear.length);
            result = minYear <= rawYear;
          }

          dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime());
        }

        return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()), result;
      }

      function parse(format, dateObjValue, opts, raw) {
        var mask = "",
            match,
            fcode;

        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format);) {
          if (void 0 === dateObjValue) {
            if (fcode = formatcode(match)) mask += "(" + fcode[0] + ")";else switch (match[0]) {
              case "[":
                mask += "(";
                break;

              case "]":
                mask += ")?";
                break;

              default:
                mask += Inputmask.escapeRegex(match[0]);
            }
          } else if (fcode = formatcode(match)) {
            if (!0 !== raw && fcode[3]) {
              var getFn = fcode[3];
              mask += getFn.call(dateObjValue.date);
            } else fcode[2] ? mask += dateObjValue["raw" + fcode[2]] : mask += match[0];
          } else mask += match[0];
        }

        return mask;
      }

      function pad(val, len) {
        for (val = String(val), len = len || 2; val.length < len;) {
          val = "0" + val;
        }

        return val;
      }

      function analyseMask(maskString, format, opts) {
        var dateObj = {
          date: new Date(1, 0, 1)
        },
            targetProp,
            mask = maskString,
            match,
            dateOperation;

        function extendProperty(value) {
          var correctedValue = value.replace(/[^0-9]/g, "0");
          return correctedValue;
        }

        function setValue(dateObj, value, opts) {
          dateObj[targetProp] = extendProperty(value), dateObj["raw" + targetProp] = value, void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
        }

        if ("string" == typeof mask) {
          for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format);) {
            var value = mask.slice(0, match[0].length);
            formatCode.hasOwnProperty(match[0]) && (targetProp = formatCode[match[0]][2], dateOperation = formatCode[match[0]][1], setValue(dateObj, value, opts)), mask = mask.slice(value.length);
          }

          return dateObj;
        }

        if (mask && "object" === _typeof(mask) && mask.hasOwnProperty("date")) return mask;
      }

      function importDate(dateObj, opts) {
        var match,
            date = "";

        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat);) {
          "d" === match[0].charAt(0) ? date += pad(dateObj.getDate(), match[0].length) : "m" === match[0].charAt(0) ? date += pad(dateObj.getMonth() + 1, match[0].length) : "yyyy" === match[0] ? date += dateObj.getFullYear().toString() : "y" === match[0].charAt(0) && (date += pad(dateObj.getYear(), match[0].length));
        }

        return date;
      }

      function getTokenMatch(pos, opts) {
        var calcPos = 0,
            targetMatch,
            match;

        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat);) {
          if (calcPos += match[0].length, pos <= calcPos) {
            targetMatch = match, match = getTokenizer(opts).exec(opts.inputFormat);
            break;
          }
        }

        return {
          nextMatch: match,
          targetMatch: targetMatch
        };
      }

      Inputmask.extendAliases({
        datetime: {
          mask: function mask(opts) {
            return opts.numericInput = !1, formatCode.S = opts.i18n.ordinalSuffix.join("|"), opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, ""), opts.regex = parse(opts.inputFormat, void 0, opts), opts.min = analyseMask(opts.min, opts.inputFormat, opts), opts.max = analyseMask(opts.max, opts.inputFormat, opts), null;
          },
          placeholder: "",
          inputFormat: "isoDateTime",
          displayFormat: void 0,
          outputFormat: void 0,
          min: null,
          max: null,
          skipOptionalPartCharacter: "",
          i18n: {
            dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            ordinalSuffix: ["st", "nd", "rd", "th"]
          },
          preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
            if (strict) return !0;

            if (isNaN(c) && buffer[pos] !== c) {
              var tokenMatch = getTokenMatch(pos, opts);

              if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && 1 < tokenMatch.targetMatch[0].length) {
                var validator = formatCode[tokenMatch.targetMatch[0]][0];
                if (new RegExp(validator).test("0" + buffer[pos - 1])) return buffer[pos] = buffer[pos - 1], buffer[pos - 1] = "0", {
                  fuzzy: !0,
                  buffer: buffer,
                  refreshFromBuffer: {
                    start: pos - 1,
                    end: pos + 1
                  },
                  pos: pos + 1
                };
              }
            }

            return !0;
          },
          postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
            if (strict) return !0;
            var tokenMatch;

            if (!1 === currentResult) {
              if (tokenMatch = getTokenMatch(pos + 1, opts), tokenMatch.targetMatch && tokenMatch.targetMatch.index === pos && 1 < tokenMatch.targetMatch[0].length && void 0 !== formatCode[tokenMatch.targetMatch[0]]) {
                var validator = formatCode[tokenMatch.targetMatch[0]][0];
                if (new RegExp(validator).test("0" + c)) return {
                  insert: [{
                    pos: pos,
                    c: "0"
                  }, {
                    pos: pos + 1,
                    c: c
                  }],
                  pos: pos + 1
                };
              }

              return currentResult;
            }

            if (currentResult.fuzzy && (buffer = currentResult.buffer, pos = currentResult.pos), tokenMatch = getTokenMatch(pos, opts), tokenMatch.targetMatch && tokenMatch.targetMatch[0] && void 0 !== formatCode[tokenMatch.targetMatch[0]]) {
              var validator = formatCode[tokenMatch.targetMatch[0]][0],
                  part = buffer.slice(tokenMatch.targetMatch.index, tokenMatch.targetMatch.index + tokenMatch.targetMatch[0].length);
              !1 === new RegExp(validator).test(part.join("")) && 2 === tokenMatch.targetMatch[0].length && maskset.validPositions[tokenMatch.targetMatch.index] && maskset.validPositions[tokenMatch.targetMatch.index + 1] && (maskset.validPositions[tokenMatch.targetMatch.index + 1].input = "0");
            }

            var result = currentResult,
                dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
            return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = isValidDate(dateParts, result), result = result && isDateInRange(dateParts, opts)), pos && result && currentResult.pos !== pos ? {
              buffer: parse(opts.inputFormat, dateParts, opts).split(""),
              refreshFromBuffer: {
                start: pos,
                end: currentResult.pos
              }
            } : result;
          },
          onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
            var input = this;
            e.ctrlKey && e.keyCode === keyCode.RIGHT && (this.inputmask._valueSet(importDate(new Date(), opts)), $(this).trigger("setvalue"));
          },
          onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
            return unmaskedValue ? parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, !0) : unmaskedValue;
          },
          casing: function casing(elem, test, pos, validPositions) {
            return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem;
          },
          onBeforeMask: function onBeforeMask(initialValue, opts) {
            return "[object Date]" === Object.prototype.toString.call(initialValue) && (initialValue = importDate(initialValue, opts)), initialValue;
          },
          insertMode: !1,
          shiftPositions: !1,
          keepStatic: !1,
          inputmode: "numeric"
        }
      }), module.exports = Inputmask;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var Inputmask = __webpack_require__(1),
          $ = Inputmask.dependencyLib,
          keyCode = __webpack_require__(0);

      function autoEscape(txt, opts) {
        for (var escapedTxt = "", i = 0; i < txt.length; i++) {
          Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
        }

        return escapedTxt;
      }

      function alignDigits(buffer, digits, opts, force) {
        if (0 < digits && (!opts.digitsOptional || force)) {
          var radixPosition = $.inArray(opts.radixPoint, buffer);
          -1 === radixPosition && (buffer.push(opts.radixPoint), radixPosition = buffer.length - 1);

          for (var i = 1; i <= digits; i++) {
            isFinite(buffer[radixPosition + i]) || (buffer[radixPosition + i] = "0");
          }
        }

        return buffer;
      }

      function findValidator(symbol, maskset) {
        var posNdx = 0;

        if ("+" === symbol) {
          for (posNdx in maskset.validPositions) {
            ;
          }

          posNdx = parseInt(posNdx);
        }

        for (var tstNdx in maskset.tests) {
          if (tstNdx = parseInt(tstNdx), posNdx <= tstNdx) for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++) {
            if ((void 0 === maskset.validPositions[tstNdx] || "-" === symbol) && maskset.tests[tstNdx][ndx].match.def === symbol) return tstNdx + (void 0 !== maskset.validPositions[tstNdx] && "-" !== symbol ? 1 : 0);
          }
        }

        return posNdx;
      }

      function findValid(symbol, maskset) {
        var ret = -1;
        return $.each(maskset.validPositions, function (ndx, tst) {
          if (tst && tst.match.def === symbol) return ret = parseInt(ndx), !1;
        }), ret;
      }

      function parseMinMaxOptions(opts) {
        void 0 === opts.parseMinMaxOptions && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), opts.parseMinMaxOptions = "done");
      }

      function genMask(opts) {
        opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0), 1 < opts.placeholder.length && (opts.placeholder = opts.placeholder.charAt(0)), "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && (opts.positionCaretOnClick = "lvp");
        var decimalDef = "0",
            radixPointDef = opts.radixPoint;
        !0 === opts.numericInput && void 0 === opts.__financeInput ? (decimalDef = "1", opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts._radixDance = !1, radixPointDef = "," === opts.radixPoint ? "?" : "!", "" !== opts.radixPoint && void 0 === opts.definitions[radixPointDef] && (opts.definitions[radixPointDef] = {}, opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]", opts.definitions[radixPointDef].placeholder = opts.radixPoint, opts.definitions[radixPointDef]["static"] = !0, opts.definitions[radixPointDef].generated = !0)) : (opts.__financeInput = !1, opts.numericInput = !0);
        var mask = "[+]",
            altMask;

        if (mask += autoEscape(opts.prefix, opts), "" !== opts.groupSeparator ? (void 0 === opts.definitions[opts.groupSeparator] && (opts.definitions[opts.groupSeparator] = {}, opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]", opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator, opts.definitions[opts.groupSeparator]["static"] = !0, opts.definitions[opts.groupSeparator].generated = !0), mask += opts._mask(opts)) : mask += "9{+}", void 0 !== opts.digits && 0 !== opts.digits) {
          var dq = opts.digits.toString().split(",");
          isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += radixPointDef + decimalDef + "{" + opts.digits + "}" : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && (opts.digitsOptional ? (altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}", opts.keepStatic = !0) : mask += radixPointDef + decimalDef + "{" + opts.digits + "}");
        }

        return mask += autoEscape(opts.suffix, opts), mask += "[-]", altMask && (mask = [altMask + autoEscape(opts.suffix, opts) + "[-]", mask]), opts.greedy = !1, parseMinMaxOptions(opts), mask;
      }

      function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
        return opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back && pos <= radixPos && (0 < radixPos || c == opts.radixPoint) && (void 0 === maskset.validPositions[pos - 1] || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back) && (pos -= 1), pos;
      }

      function decimalValidator(chrs, maskset, pos, strict, opts) {
        var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1,
            result = -1 !== radixPos && new RegExp("[0-9\uFF11-\uFF19]").test(chrs);
        return opts._radixDance && result && null == maskset.validPositions[radixPos] ? {
          insert: {
            pos: radixPos === pos ? radixPos + 1 : radixPos,
            c: opts.radixPoint
          },
          pos: pos
        } : result;
      }

      function checkForLeadingZeroes(buffer, opts) {
        var numberMatches = new RegExp("(^" + ("" !== opts.negationSymbol.front ? Inputmask.escapeRegex(opts.negationSymbol.front) + "?" : "") + Inputmask.escapeRegex(opts.prefix) + ")(.*)(" + Inputmask.escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? Inputmask.escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")),
            number = numberMatches ? numberMatches[2] : "",
            leadingzeroes = !1;
        return number && (number = number.split(opts.radixPoint.charAt(0))[0], leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number)), !(!leadingzeroes || !(1 < leadingzeroes[0].length || 0 < leadingzeroes[0].length && leadingzeroes[0].length < number.length)) && leadingzeroes;
      }

      Inputmask.extendAliases({
        numeric: {
          mask: genMask,
          _mask: function _mask(opts) {
            return "(" + opts.groupSeparator + "999){+|1}";
          },
          digits: "*",
          digitsOptional: !0,
          enforceDigitsOnBlur: !1,
          radixPoint: ".",
          positionCaretOnClick: "radixFocus",
          _radixDance: !0,
          groupSeparator: "",
          allowMinus: !0,
          negationSymbol: {
            front: "-",
            back: ""
          },
          prefix: "",
          suffix: "",
          min: null,
          max: null,
          step: 1,
          unmaskAsNumber: !1,
          roundingFN: Math.round,
          inputmode: "numeric",
          shortcuts: {
            k: "000",
            m: "000000"
          },
          placeholder: "0",
          greedy: !1,
          rightAlign: !0,
          insertMode: !0,
          autoUnmask: !1,
          skipOptionalPartCharacter: "",
          definitions: {
            0: {
              validator: decimalValidator
            },
            1: {
              validator: decimalValidator,
              definitionSymbol: "9"
            },
            "+": {
              validator: function validator(chrs, maskset, pos, strict, opts) {
                return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
              }
            },
            "-": {
              validator: function validator(chrs, maskset, pos, strict, opts) {
                return opts.allowMinus && chrs === opts.negationSymbol.back;
              }
            }
          },
          preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
            if (!1 !== opts.__financeInput && c === opts.radixPoint) return !1;
            var pattern;

            if (pattern = opts.shortcuts && opts.shortcuts[c]) {
              if (1 < pattern.length) for (var inserts = [], i = 0; i < pattern.length; i++) {
                inserts.push({
                  pos: pos + i,
                  c: pattern[i],
                  strict: !1
                });
              }
              return {
                insert: inserts
              };
            }

            var radixPos = $.inArray(opts.radixPoint, buffer),
                initPos = pos;

            if (pos = hanndleRadixDance(pos, c, radixPos, maskset, opts), "-" === c || c === opts.negationSymbol.front) {
              if (!0 !== opts.allowMinus) return !1;
              var isNegative = !1,
                  front = findValid("+", maskset),
                  back = findValid("-", maskset);
              return -1 !== front && (isNegative = [front, back]), !1 !== isNegative ? {
                remove: isNegative,
                caret: initPos
              } : {
                insert: [{
                  pos: findValidator("+", maskset),
                  c: opts.negationSymbol.front,
                  fromIsValid: !0
                }, {
                  pos: findValidator("-", maskset),
                  c: opts.negationSymbol.back,
                  fromIsValid: void 0
                }],
                caret: initPos + opts.negationSymbol.back.length
              };
            }

            if (strict) return !0;
            if (-1 !== radixPos && !0 === opts._radixDance && !1 === isSelection && c === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && radixPos !== pos) return {
              caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
            };
            if (!1 === opts.__financeInput) if (isSelection) {
              if (opts.digitsOptional) return {
                rewritePosition: caretPos.end
              };

              if (!opts.digitsOptional) {
                if (caretPos.begin > radixPos && caretPos.end <= radixPos) return c === opts.radixPoint ? {
                  insert: {
                    pos: radixPos + 1,
                    c: "0",
                    fromIsValid: !0
                  },
                  rewritePosition: radixPos
                } : {
                  rewritePosition: radixPos + 1
                };
                if (caretPos.begin < radixPos) return {
                  rewritePosition: caretPos.begin - 1
                };
              }
            } else if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && 0 < opts.digits && "" === this.inputmask.__valueGet.call(this)) return {
              rewritePosition: radixPos
            };
            return {
              rewritePosition: pos
            };
          },
          postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
            if (!1 === currentResult) return currentResult;
            if (strict) return !0;

            if (null !== opts.min || null !== opts.max) {
              var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                unmaskAsNumber: !0
              }));
              if (null !== opts.min && unmasked < opts.min && (unmasked.toString().length >= opts.min.toString().length || unmasked < 0)) return !1;
              if (null !== opts.max && unmasked > opts.max) return !1;
            }

            return currentResult;
          },
          onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
            if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
            var processValue = maskedValue.replace(opts.prefix, "");
            return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), Number(processValue)) : processValue;
          },
          isComplete: function isComplete(buffer, opts) {
            var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
            return maskedValue = maskedValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), maskedValue = maskedValue.replace(opts.prefix, ""), maskedValue = maskedValue.replace(opts.suffix, ""), maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === opts.radixPoint && (maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), isFinite(maskedValue);
          },
          onBeforeMask: function onBeforeMask(initialValue, opts) {
            var radixPoint = opts.radixPoint || ",";
            isFinite(opts.digits) && (opts.digits = parseInt(opts.digits)), "number" != typeof initialValue && "number" !== opts.inputType || "" === radixPoint || (initialValue = initialValue.toString().replace(".", radixPoint));
            var valueParts = initialValue.split(radixPoint),
                integerPart = valueParts[0].replace(/[^\-0-9]/g, ""),
                decimalPart = 1 < valueParts.length ? valueParts[1].replace(/[^0-9]/g, "") : "",
                forceDigits = 1 < valueParts.length;
            initialValue = integerPart + ("" !== decimalPart ? radixPoint + decimalPart : decimalPart);
            var digits = 0;

            if ("" !== radixPoint && (digits = opts.digitsOptional ? opts.digits < decimalPart.length ? opts.digits : decimalPart.length : opts.digits, "" !== decimalPart || !opts.digitsOptional)) {
              var digitsFactor = Math.pow(10, digits || 1);
              initialValue = initialValue.replace(Inputmask.escapeRegex(radixPoint), "."), isFinite(initialValue) && (initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits)), initialValue = initialValue.toString().replace(".", radixPoint);
            }

            if (0 === opts.digits && -1 !== initialValue.indexOf(radixPoint) && (initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint))), null !== opts.min || null !== opts.max) {
              var numberValue = initialValue.toString().replace(radixPoint, ".");
              null !== opts.min && numberValue < opts.min ? initialValue = opts.min.toString().replace(".", radixPoint) : null !== opts.max && numberValue > opts.max && (initialValue = opts.max.toString().replace(".", radixPoint));
            }

            return alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("");
          },
          onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
            function stripBuffer(buffer, stripRadix) {
              if (!1 !== opts.__financeInput || stripRadix) {
                var position = $.inArray(opts.radixPoint, buffer);
                -1 !== position && buffer.splice(position, 1);
              }

              if ("" !== opts.groupSeparator) for (; -1 !== (position = buffer.indexOf(opts.groupSeparator));) {
                buffer.splice(position, 1);
              }
              return buffer;
            }

            var result,
                leadingzeroes = checkForLeadingZeroes(buffer, opts);

            if (leadingzeroes) {
              var buf = buffer.slice().reverse(),
                  caretNdx = buf.join("").indexOf(leadingzeroes[0]);
              buf.splice(caretNdx, leadingzeroes[0].length);
              var newCaretPos = buf.length - caretNdx;
              stripBuffer(buf), result = {
                refreshFromBuffer: !0,
                buffer: buf.reverse(),
                caret: caretPos < newCaretPos ? caretPos : newCaretPos
              };
            }

            if (e) switch (e.type) {
              case "blur":
              case "checkval":
                if (null !== opts.min) {
                  var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                    unmaskAsNumber: !0
                  }));
                  if (null !== opts.min && unmasked < opts.min) return {
                    refreshFromBuffer: !0,
                    buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                  };
                }

                if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                  var nmbrMtchs = new RegExp("(^" + ("" != opts.negationSymbol.front ? Inputmask.escapeRegex(opts.negationSymbol.front) + "?" : "") + Inputmask.escapeRegex(opts.prefix) + ")(.*)(" + Inputmask.escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? Inputmask.escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), !0).reverse().join("")),
                      number = nmbrMtchs ? nmbrMtchs[2] : "";
                  0 == number && (result = {
                    refreshFromBuffer: !0,
                    buffer: [0]
                  });
                } else "" !== opts.radixPoint && buffer[0] === opts.radixPoint && (result && result.buffer ? result.buffer.shift() : (buffer.shift(), result = {
                  refreshFromBuffer: !0,
                  buffer: stripBuffer(buffer)
                }));

                if (opts.enforceDigitsOnBlur) {
                  result = result || {};
                  var bffr = result && result.buffer || buffer.slice().reverse();
                  result.refreshFromBuffer = !0, result.buffer = alignDigits(bffr, opts.digits, opts, !0).reverse();
                }

            }
            return result;
          },
          onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
            var $input = $(this),
                bffr;
            if (e.ctrlKey) switch (e.keyCode) {
              case keyCode.UP:
                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue"), !1;

              case keyCode.DOWN:
                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue"), !1;
            }

            if (!e.shiftKey && (e.keyCode === keyCode.DELETE || e.keyCode === keyCode.BACKSPACE || e.keyCode === keyCode.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) {
              if (buffer[e.keyCode === keyCode.DELETE ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) return bffr = buffer.slice().reverse(), "" !== opts.negationSymbol.front && bffr.shift(), "" !== opts.negationSymbol.back && bffr.pop(), $input.trigger("setvalue", [bffr.join(""), caretPos.begin]), !1;

              if (!0 === opts._radixDance) {
                var radixPos = $.inArray(opts.radixPoint, buffer);

                if (opts.digitsOptional) {
                  if (0 === radixPos) return bffr = buffer.slice().reverse(), bffr.pop(), $input.trigger("setvalue", [bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin]), !1;
                } else if (-1 !== radixPos && (caretPos.begin < radixPos || caretPos.end < radixPos || e.keyCode === keyCode.DELETE && caretPos.begin === radixPos)) return caretPos.begin !== caretPos.end || e.keyCode !== keyCode.BACKSPACE && e.keyCode !== keyCode.BACKSPACE_SAFARI || caretPos.begin++, bffr = buffer.slice().reverse(), bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1), bffr = alignDigits(bffr, opts.digits, opts).join(""), $input.trigger("setvalue", [bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin]), !1;
              }
            }
          }
        },
        currency: {
          prefix: "",
          groupSeparator: ",",
          alias: "numeric",
          digits: 2,
          digitsOptional: !1
        },
        decimal: {
          alias: "numeric"
        },
        integer: {
          alias: "numeric",
          digits: 0
        },
        percentage: {
          alias: "numeric",
          min: 0,
          max: 100,
          suffix: " %",
          digits: 0,
          allowMinus: !1
        },
        indianns: {
          alias: "numeric",
          _mask: function _mask(opts) {
            return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}";
          },
          groupSeparator: ",",
          radixPoint: ".",
          placeholder: "0",
          digits: 2,
          digitsOptional: !1
        }
      }), module.exports = Inputmask;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var _inputmask = _interopRequireDefault(__webpack_require__(1));

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
      }

      function _possibleConstructorReturn(self, call) {
        return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call;
      }

      function _assertThisInitialized(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
      }

      function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
          }
        }), superClass && _setPrototypeOf(subClass, superClass);
      }

      function _wrapNativeSuper(Class) {
        var _cache = "function" == typeof Map ? new Map() : void 0;

        return _wrapNativeSuper = function _wrapNativeSuper(Class) {
          if (null === Class || !_isNativeFunction(Class)) return Class;
          if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");

          if ("undefined" != typeof _cache) {
            if (_cache.has(Class)) return _cache.get(Class);

            _cache.set(Class, Wrapper);
          }

          function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
          }

          return Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), _setPrototypeOf(Wrapper, Class);
        }, _wrapNativeSuper(Class);
      }

      function isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }

      function _construct(Parent, args, Class) {
        return _construct = isNativeReflectConstruct() ? Reflect.construct : function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a),
              instance = new Constructor();
          return Class && _setPrototypeOf(instance, Class.prototype), instance;
        }, _construct.apply(null, arguments);
      }

      function _isNativeFunction(fn) {
        return -1 !== Function.toString.call(fn).indexOf("[native code]");
      }

      function _setPrototypeOf(o, p) {
        return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          return o.__proto__ = p, o;
        }, _setPrototypeOf(o, p);
      }

      function _getPrototypeOf(o) {
        return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        }, _getPrototypeOf(o);
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      if (document.head.createShadowRoot || document.head.attachShadow) {
        var InputmaskElement = function (_HTMLElement) {
          function InputmaskElement() {
            var _this;

            _classCallCheck(this, InputmaskElement), _this = _possibleConstructorReturn(this, _getPrototypeOf(InputmaskElement).call(this));

            var attributeNames = _this.getAttributeNames(),
                shadow = _this.attachShadow({
              mode: "closed"
            }),
                input = document.createElement("input");

            for (var attr in input.type = "text", shadow.appendChild(input), attributeNames) {
              Object.prototype.hasOwnProperty.call(attributeNames, attr) && input.setAttribute("data-inputmask-" + attributeNames[attr], _this.getAttribute(attributeNames[attr]));
            }

            return new _inputmask["default"]().mask(input), input.inputmask.shadowRoot = shadow, _this;
          }

          return _inherits(InputmaskElement, _HTMLElement), InputmaskElement;
        }(_wrapNativeSuper(HTMLElement));

        customElements.define("input-mask", InputmaskElement);
      }
    }], installedModules = {}, __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
        enumerable: !0,
        get: getter
      });
    }, __webpack_require__.r = function (exports) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(exports, "__esModule", {
        value: !0
      });
    }, __webpack_require__.t = function (value, mode) {
      if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
      if (4 & mode && "object" == _typeof2(value) && value && value.__esModule) return value;
      var ns = Object.create(null);
      if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
        enumerable: !0,
        value: value
      }), 2 & mode && "string" != typeof value) for (var key in value) {
        __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
      }
      return ns;
    }, __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function getDefault() {
        return module["default"];
      } : function getModuleExports() {
        return module;
      };
      return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 5);

    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: !1,
        exports: {}
      };
      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
    }

    var modules, installedModules;
  });
  ; // Base
  // Скрывать Placeholder при фокусе

  var allInput = document.querySelectorAll("input");
  var allTextarea = document.querySelectorAll("textarea");
  allInput.forEach(function (element) {
    hiddenPlaceholder(element);
  });
  allTextarea.forEach(function (element) {
    hiddenPlaceholder(element);
  });

  function hiddenPlaceholder(el) {
    var placeholder = "";
    el.addEventListener("focus", function (e) {
      placeholder = e.target.placeholder;
      e.target.placeholder = "";
    });
    el.addEventListener("blur", function (e) {
      e.target.placeholder = placeholder;
    });
  } // Скрывать Placeholder при фокусе
  // Маска телефона


  var inputs = document.querySelectorAll('input[type="tel"]');
  var im = new Inputmask("+7 (999) 999-99-99", {
    showMaskOnHover: false
  });
  im.mask(inputs); // Маска телефона

  ; // Section

  var swiper = new Swiper('.special-offer-slider', {
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev'
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 10
      },
      576: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 30
      },
      992: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  ;
  var feedbackBreakpoints = {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 0
    },
    577: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 40
    },
    769: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 40
    },
    993: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 80
    }
  };
  var feedbackRewardSlider = new Swiper('.feedback-reward-swiper-container', {
    navigation: {
      nextEl: '.feedback-reward-button-next',
      prevEl: '.feedback-reward-button-prev'
    },
    loop: true,
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 80,
    breakpoints: feedbackBreakpoints
  });
  var feedbackGratitudeSlider = new Swiper('.feedback-gratitude-swiper-container', {
    navigation: {
      nextEl: '.feedback-gratitude-button-next',
      prevEl: '.feedback-gratitude-button-prev'
    },
    loop: true,
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 80,
    breakpoints: feedbackBreakpoints
  });
  ;
  var personnelGallery = new Swiper('.personnel-gallery', {
    loop: true,
    slidesPerGroup: 3,
    slidesPerView: 6,
    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1
      },
      577: {
        slidesPerGroup: 2,
        slidesPerView: 2
      },
      769: {
        slidesPerGroup: 3,
        slidesPerView: 3
      },
      993: {
        slidesPerGroup: 4,
        slidesPerView: 4
      },
      1201: {
        slidesPerGroup: 6,
        slidesPerView: 6
      }
    }
  });
  ;
  var tabsBtn = document.querySelectorAll(".catalog-tabs__nav-btn");
  var tabsItems = document.querySelectorAll(".catalog-tabs-item");
  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      var currentBtn = item;
      var tabId = currentBtn.getAttribute("data-tab");
      var currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
        for (var index = 0; index < tabsBtn.length; index++) {
          tabsBtn[index].classList.remove('active');
          tabsItems[index].classList.remove('active');
        }

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  }

  document.querySelector('.catalog-tabs__nav-btn').click();
  ;
});