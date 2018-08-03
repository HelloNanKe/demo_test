/*!
 * jQuery JavaScript Library v1.6.4
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Sep 12 18:54:48 2011 -0400
 */
(function (bb, O) {
    var au = bb.document, bu = bb.navigator, bl = bb.location;
    var c = (function () {
        var bG = function (b2, b3) {
                return new bG.fn.init(b2, b3, bE);
            }, bW = bb.jQuery, bI = bb.$, bE, b0 = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, bO = /\S/, bK = /^\s+/,
            bF = /\s+$/, bJ = /\d/, bB = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, bP = /^[\],:{}\s]*$/,
            bY = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            bR = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, bL = /(?:^|:|,)(?:\s*\[)+/g,
            bz = /(webkit)[ \/]([\w.]+)/, bT = /(opera)(?:.*version)?[ \/]([\w.]+)/, bS = /(msie) ([\w.]+)/,
            bU = /(mozilla)(?:.*? rv:([\w.]+))?/, bC = /-([a-z]|[0-9])/ig, b1 = /^-ms-/, bV = function (b2, b3) {
                return (b3 + "").toUpperCase();
            }, bZ = bu.userAgent, bX, bD, bv, bN = Object.prototype.toString, bH = Object.prototype.hasOwnProperty,
            bA = Array.prototype.push, bM = Array.prototype.slice, bQ = String.prototype.trim,
            bw = Array.prototype.indexOf, by = {};
        bG.fn = bG.prototype = {
            constructor: bG, init: function (b2, b6, b5) {
                var b4, b7, b3, b8;
                if (!b2) {
                    return this;
                }
                if (b2.nodeType) {
                    this.context = this[0] = b2;
                    this.length = 1;
                    return this;
                }
                if (b2 === "body" && !b6 && au.body) {
                    this.context = au;
                    this[0] = au.body;
                    this.selector = b2;
                    this.length = 1;
                    return this;
                }
                if (typeof b2 === "string") {
                    if (b2.charAt(0) === "<" && b2.charAt(b2.length - 1) === ">" && b2.length >= 3) {
                        b4 = [null, b2, null];
                    } else {
                        b4 = b0.exec(b2);
                    }
                    if (b4 && (b4[1] || !b6)) {
                        if (b4[1]) {
                            b6 = b6 instanceof bG ? b6[0] : b6;
                            b8 = (b6 ? b6.ownerDocument || b6 : au);
                            b3 = bB.exec(b2);
                            if (b3) {
                                if (bG.isPlainObject(b6)) {
                                    b2 = [au.createElement(b3[1])];
                                    bG.fn.attr.call(b2, b6, true);
                                } else {
                                    b2 = [b8.createElement(b3[1])];
                                }
                            } else {
                                b3 = bG.buildFragment([b4[1]], [b8]);
                                b2 = (b3.cacheable ? bG.clone(b3.fragment) : b3.fragment).childNodes;
                            }
                            return bG.merge(this, b2);
                        } else {
                            b7 = au.getElementById(b4[2]);
                            if (b7 && b7.parentNode) {
                                if (b7.id !== b4[2]) {
                                    return b5.find(b2);
                                }
                                this.length = 1;
                                this[0] = b7;
                            }
                            this.context = au;
                            this.selector = b2;
                            return this;
                        }
                    } else {
                        if (!b6 || b6.jquery) {
                            return (b6 || b5).find(b2);
                        } else {
                            return this.constructor(b6).find(b2);
                        }
                    }
                } else {
                    if (bG.isFunction(b2)) {
                        return b5.ready(b2);
                    }
                }
                if (b2.selector !== O) {
                    this.selector = b2.selector;
                    this.context = b2.context;
                }
                return bG.makeArray(b2, this);
            }, selector: "", jquery: "1.6.4", length: 0, size: function () {
                return this.length;
            }, toArray: function () {
                return bM.call(this, 0);
            }, get: function (b2) {
                return b2 == null ? this.toArray() : (b2 < 0 ? this[this.length + b2] : this[b2]);
            }, pushStack: function (b3, b5, b2) {
                var b4 = this.constructor();
                if (bG.isArray(b3)) {
                    bA.apply(b4, b3);
                } else {
                    bG.merge(b4, b3);
                }
                b4.prevObject = this;
                b4.context = this.context;
                if (b5 === "find") {
                    b4.selector = this.selector + (this.selector ? " " : "") + b2;
                } else {
                    if (b5) {
                        b4.selector = this.selector + "." + b5 + "(" + b2 + ")";
                    }
                }
                return b4;
            }, each: function (b3, b2) {
                return bG.each(this, b3, b2);
            }, ready: function (b2) {
                bG.bindReady();
                bD.done(b2);
                return this;
            }, eq: function (b2) {
                return b2 === -1 ? this.slice(b2) : this.slice(b2, +b2 + 1);
            }, first: function () {
                return this.eq(0);
            }, last: function () {
                return this.eq(-1);
            }, slice: function () {
                return this.pushStack(bM.apply(this, arguments), "slice", bM.call(arguments).join(","));
            }, map: function (b2) {
                return this.pushStack(bG.map(this, function (b4, b3) {
                    return b2.call(b4, b3, b4);
                }));
            }, end: function () {
                return this.prevObject || this.constructor(null);
            }, push: bA, sort: [].sort, splice: [].splice
        };
        bG.fn.init.prototype = bG.fn;
        bG.extend = bG.fn.extend = function () {
            var cb, b4, b2, b3, b8, b9, b7 = arguments[0] || {}, b6 = 1, b5 = arguments.length, ca = false;
            if (typeof b7 === "boolean") {
                ca = b7;
                b7 = arguments[1] || {};
                b6 = 2;
            }
            if (typeof b7 !== "object" && !bG.isFunction(b7)) {
                b7 = {};
            }
            if (b5 === b6) {
                b7 = this;
                --b6;
            }
            for (; b6 < b5; b6++) {
                if ((cb = arguments[b6]) != null) {
                    for (b4 in cb) {
                        b2 = b7[b4];
                        b3 = cb[b4];
                        if (b7 === b3) {
                            continue;
                        }
                        if (ca && b3 && (bG.isPlainObject(b3) || (b8 = bG.isArray(b3)))) {
                            if (b8) {
                                b8 = false;
                                b9 = b2 && bG.isArray(b2) ? b2 : [];
                            } else {
                                b9 = b2 && bG.isPlainObject(b2) ? b2 : {};
                            }
                            b7[b4] = bG.extend(ca, b9, b3);
                        } else {
                            if (b3 !== O) {
                                b7[b4] = b3;
                            }
                        }
                    }
                }
            }
            return b7;
        };
        bG.extend({
            noConflict: function (b2) {
                if (bb.$ === bG) {
                    bb.$ = bI;
                }
                if (b2 && bb.jQuery === bG) {
                    bb.jQuery = bW;
                }
                return bG;
            }, isReady: false, readyWait: 1, holdReady: function (b2) {
                if (b2) {
                    bG.readyWait++;
                } else {
                    bG.ready(true);
                }
            }, ready: function (b2) {
                if ((b2 === true && !--bG.readyWait) || (b2 !== true && !bG.isReady)) {
                    if (!au.body) {
                        return setTimeout(bG.ready, 1);
                    }
                    bG.isReady = true;
                    if (b2 !== true && --bG.readyWait > 0) {
                        return;
                    }
                    bD.resolveWith(au, [bG]);
                    if (bG.fn.trigger) {
                        bG(au).trigger("ready").unbind("ready");
                    }
                }
            }, bindReady: function () {
                if (bD) {
                    return;
                }
                bD = bG._Deferred();
                if (au.readyState === "complete") {
                    return setTimeout(bG.ready, 1);
                }
                if (au.addEventListener) {
                    au.addEventListener("DOMContentLoaded", bv, false);
                    bb.addEventListener("load", bG.ready, false);
                } else {
                    if (au.attachEvent) {
                        au.attachEvent("onreadystatechange", bv);
                        bb.attachEvent("onload", bG.ready);
                        var b2 = false;
                        try {
                            b2 = bb.frameElement == null;
                        } catch (b3) {
                        }
                        if (au.documentElement.doScroll && b2) {
                            bx();
                        }
                    }
                }
            }, isFunction: function (b2) {
                return bG.type(b2) === "function";
            }, isArray: Array.isArray || function (b2) {
                return bG.type(b2) === "array";
            }, isWindow: function (b2) {
                return b2 && typeof b2 === "object" && "setInterval" in b2;
            }, isNaN: function (b2) {
                return b2 == null || !bJ.test(b2) || isNaN(b2);
            }, type: function (b2) {
                return b2 == null ? String(b2) : by[bN.call(b2)] || "object";
            }, isPlainObject: function (b4) {
                if (!b4 || bG.type(b4) !== "object" || b4.nodeType || bG.isWindow(b4)) {
                    return false;
                }
                try {
                    if (b4.constructor && !bH.call(b4, "constructor") && !bH.call(b4.constructor.prototype, "isPrototypeOf")) {
                        return false;
                    }
                } catch (b3) {
                    return false;
                }
                var b2;
                for (b2 in b4) {
                }
                return b2 === O || bH.call(b4, b2);
            }, isEmptyObject: function (b3) {
                for (var b2 in b3) {
                    return false;
                }
                return true;
            }, error: function (b2) {
                throw b2;
            }, parseJSON: function (b2) {
                if (typeof b2 !== "string" || !b2) {
                    return null;
                }
                b2 = bG.trim(b2);
                if (bb.JSON && bb.JSON.parse) {
                    return bb.JSON.parse(b2);
                }
                if (bP.test(b2.replace(bY, "@").replace(bR, "]").replace(bL, ""))) {
                    return (new Function("return " + b2))();
                }
                bG.error("Invalid JSON: " + b2);
            }, parseXML: function (b4) {
                var b2, b3;
                try {
                    if (bb.DOMParser) {
                        b3 = new DOMParser();
                        b2 = b3.parseFromString(b4, "text/xml");
                    } else {
                        b2 = new ActiveXObject("Microsoft.XMLDOM");
                        b2.async = "false";
                        b2.loadXML(b4);
                    }
                } catch (b5) {
                    b2 = O;
                }
                if (!b2 || !b2.documentElement || b2.getElementsByTagName("parsererror").length) {
                    bG.error("Invalid XML: " + b4);
                }
                return b2;
            }, noop: function () {
            }, globalEval: function (b2) {
                if (b2 && bO.test(b2)) {
                    (bb.execScript || function (b3) {
                        bb["eval"].call(bb, b3);
                    })(b2);
                }
            }, camelCase: function (b2) {
                return b2.replace(b1, "ms-").replace(bC, bV);
            }, nodeName: function (b3, b2) {
                return b3.nodeName && b3.nodeName.toUpperCase() === b2.toUpperCase();
            }, each: function (b5, b8, b4) {
                var b3, b6 = 0, b7 = b5.length, b2 = b7 === O || bG.isFunction(b5);
                if (b4) {
                    if (b2) {
                        for (b3 in b5) {
                            if (b8.apply(b5[b3], b4) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; b6 < b7;) {
                            if (b8.apply(b5[b6++], b4) === false) {
                                break;
                            }
                        }
                    }
                } else {
                    if (b2) {
                        for (b3 in b5) {
                            if (b8.call(b5[b3], b3, b5[b3]) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; b6 < b7;) {
                            if (b8.call(b5[b6], b6, b5[b6++]) === false) {
                                break;
                            }
                        }
                    }
                }
                return b5;
            }, trim: bQ ? function (b2) {
                return b2 == null ? "" : bQ.call(b2);
            } : function (b2) {
                return b2 == null ? "" : b2.toString().replace(bK, "").replace(bF, "");
            }, makeArray: function (b5, b3) {
                var b2 = b3 || [];
                if (b5 != null) {
                    var b4 = bG.type(b5);
                    if (b5.length == null || b4 === "string" || b4 === "function" || b4 === "regexp" || bG.isWindow(b5)) {
                        bA.call(b2, b5);
                    } else {
                        bG.merge(b2, b5);
                    }
                }
                return b2;
            }, inArray: function (b4, b5) {
                if (!b5) {
                    return -1;
                }
                if (bw) {
                    return bw.call(b5, b4);
                }
                for (var b2 = 0, b3 = b5.length; b2 < b3; b2++) {
                    if (b5[b2] === b4) {
                        return b2;
                    }
                }
                return -1;
            }, merge: function (b6, b4) {
                var b5 = b6.length, b3 = 0;
                if (typeof b4.length === "number") {
                    for (var b2 = b4.length; b3 < b2; b3++) {
                        b6[b5++] = b4[b3];
                    }
                } else {
                    while (b4[b3] !== O) {
                        b6[b5++] = b4[b3++];
                    }
                }
                b6.length = b5;
                return b6;
            }, grep: function (b3, b8, b2) {
                var b4 = [], b7;
                b2 = !!b2;
                for (var b5 = 0, b6 = b3.length; b5 < b6; b5++) {
                    b7 = !!b8(b3[b5], b5);
                    if (b2 !== b7) {
                        b4.push(b3[b5]);
                    }
                }
                return b4;
            }, map: function (b2, b9, ca) {
                var b7, b8, b6 = [], b4 = 0, b3 = b2.length,
                    b5 = b2 instanceof bG || b3 !== O && typeof b3 === "number" && ((b3 > 0 && b2[0] && b2[b3 - 1]) || b3 === 0 || bG.isArray(b2));
                if (b5) {
                    for (; b4 < b3; b4++) {
                        b7 = b9(b2[b4], b4, ca);
                        if (b7 != null) {
                            b6[b6.length] = b7;
                        }
                    }
                } else {
                    for (b8 in b2) {
                        b7 = b9(b2[b8], b8, ca);
                        if (b7 != null) {
                            b6[b6.length] = b7;
                        }
                    }
                }
                return b6.concat.apply([], b6);
            }, guid: 1, proxy: function (b6, b5) {
                if (typeof b5 === "string") {
                    var b4 = b6[b5];
                    b5 = b6;
                    b6 = b4;
                }
                if (!bG.isFunction(b6)) {
                    return O;
                }
                var b2 = bM.call(arguments, 2), b3 = function () {
                    return b6.apply(b5, b2.concat(bM.call(arguments)));
                };
                b3.guid = b6.guid = b6.guid || b3.guid || bG.guid++;
                return b3;
            }, access: function (b2, ca, b8, b4, b7, b9) {
                var b3 = b2.length;
                if (typeof ca === "object") {
                    for (var b5 in ca) {
                        bG.access(b2, b5, ca[b5], b4, b7, b8);
                    }
                    return b2;
                }
                if (b8 !== O) {
                    b4 = !b9 && b4 && bG.isFunction(b8);
                    for (var b6 = 0; b6 < b3; b6++) {
                        b7(b2[b6], ca, b4 ? b8.call(b2[b6], b6, b7(b2[b6], ca)) : b8, b9);
                    }
                    return b2;
                }
                return b3 ? b7(b2[0], ca) : O;
            }, now: function () {
                return (new Date()).getTime();
            }, uaMatch: function (b3) {
                b3 = b3.toLowerCase();
                var b2 = bz.exec(b3) || bT.exec(b3) || bS.exec(b3) || b3.indexOf("compatible") < 0 && bU.exec(b3) || [];
                return {browser: b2[1] || "", version: b2[2] || "0"};
            }, sub: function () {
                function b2(b5, b6) {
                    return new b2.fn.init(b5, b6);
                }

                bG.extend(true, b2, this);
                b2.superclass = this;
                b2.fn = b2.prototype = this();
                b2.fn.constructor = b2;
                b2.sub = this.sub;
                b2.fn.init = function b4(b5, b6) {
                    if (b6 && b6 instanceof bG && !(b6 instanceof b2)) {
                        b6 = b2(b6);
                    }
                    return bG.fn.init.call(this, b5, b6, b3);
                };
                b2.fn.init.prototype = b2.fn;
                var b3 = b2(au);
                return b2;
            }, browser: {}
        });
        bG.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (b3, b2) {
            by["[object " + b2 + "]"] = b2.toLowerCase();
        });
        bX = bG.uaMatch(bZ);
        if (bX.browser) {
            bG.browser[bX.browser] = true;
            bG.browser.version = bX.version;
        }
        if (bG.browser.webkit) {
            bG.browser.safari = true;
        }
        if (bO.test("\xA0")) {
            bK = /^[\s\xA0]+/;
            bF = /[\s\xA0]+$/;
        }
        bE = bG(au);
        if (au.addEventListener) {
            bv = function () {
                au.removeEventListener("DOMContentLoaded", bv, false);
                bG.ready();
            };
        } else {
            if (au.attachEvent) {
                bv = function () {
                    if (au.readyState === "complete") {
                        au.detachEvent("onreadystatechange", bv);
                        bG.ready();
                    }
                };
            }
        }

        function bx() {
            if (bG.isReady) {
                return;
            }
            try {
                au.documentElement.doScroll("left");
            } catch (b2) {
                setTimeout(bx, 1);
                return;
            }
            bG.ready();
        }

        return bG;
    })();
    var b = "done fail isResolved isRejected promise then always pipe".split(" "), aI = [].slice;
    c.extend({
        _Deferred: function () {
            var by = [], bz, bw, bx, bv = {
                done: function () {
                    if (!bx) {
                        var bB = arguments, bC, bF, bE, bD, bA;
                        if (bz) {
                            bA = bz;
                            bz = 0;
                        }
                        for (bC = 0, bF = bB.length; bC < bF; bC++) {
                            bE = bB[bC];
                            bD = c.type(bE);
                            if (bD === "array") {
                                bv.done.apply(bv, bE);
                            } else {
                                if (bD === "function") {
                                    by.push(bE);
                                }
                            }
                        }
                        if (bA) {
                            bv.resolveWith(bA[0], bA[1]);
                        }
                    }
                    return this;
                }, resolveWith: function (bB, bA) {
                    if (!bx && !bz && !bw) {
                        bA = bA || [];
                        bw = 1;
                        try {
                            while (by[0]) {
                                by.shift().apply(bB, bA);
                            }
                        } catch (bC) {
                        } finally {
                            bz = [bB, bA];
                            bw = 0;
                        }
                    }
                    return this;
                }, resolve: function () {
                    bv.resolveWith(this, arguments);
                    return this;
                }, isResolved: function () {
                    return !!(bw || bz);
                }, cancel: function () {
                    bx = 1;
                    by = [];
                    return this;
                }
            };
            return bv;
        }, Deferred: function (bw) {
            var bv = c._Deferred(), by = c._Deferred(), bx;
            c.extend(bv, {
                then: function (bA, bz) {
                    bv.done(bA).fail(bz);
                    return this;
                },
                always: function () {
                    return bv.done.apply(bv, arguments).fail.apply(this, arguments);
                },
                fail: by.done,
                rejectWith: by.resolveWith,
                reject: by.resolve,
                isRejected: by.isResolved,
                pipe: function (bA, bz) {
                    return c.Deferred(function (bB) {
                        c.each({done: [bA, "resolve"], fail: [bz, "reject"]}, function (bD, bG) {
                            var bC = bG[0], bF = bG[1], bE;
                            if (c.isFunction(bC)) {
                                bv[bD](function () {
                                    bE = bC.apply(this, arguments);
                                    if (bE && c.isFunction(bE.promise)) {
                                        bE.promise().then(bB.resolve, bB.reject);
                                    } else {
                                        bB[bF + "With"](this === bv ? bB : this, [bE]);
                                    }
                                });
                            } else {
                                bv[bD](bB[bF]);
                            }
                        });
                    }).promise();
                },
                promise: function (bA) {
                    if (bA == null) {
                        if (bx) {
                            return bx;
                        }
                        bx = bA = {};
                    }
                    var bz = b.length;
                    while (bz--) {
                        bA[b[bz]] = bv[b[bz]];
                    }
                    return bA;
                }
            });
            bv.done(by.cancel).fail(bv.cancel);
            delete bv.cancel;
            if (bw) {
                bw.call(bv, bv);
            }
            return bv;
        }, when: function (bB) {
            var bw = arguments, bx = 0, bA = bw.length, bz = bA,
                bv = bA <= 1 && bB && c.isFunction(bB.promise) ? bB : c.Deferred();

            function by(bC) {
                return function (bD) {
                    bw[bC] = arguments.length > 1 ? aI.call(arguments, 0) : bD;
                    if (!(--bz)) {
                        bv.resolveWith(bv, aI.call(bw, 0));
                    }
                };
            }

            if (bA > 1) {
                for (; bx < bA; bx++) {
                    if (bw[bx] && c.isFunction(bw[bx].promise)) {
                        bw[bx].promise().then(by(bx), bv.reject);
                    } else {
                        --bz;
                    }
                }
                if (!bz) {
                    bv.resolveWith(bv, bw);
                }
            } else {
                if (bv !== bB) {
                    bv.resolveWith(bv, bA ? [bB] : []);
                }
            }
            return bv.promise();
        }
    });
    c.support = (function () {
        var bF = au.createElement("div"), bM = au.documentElement, by, bN, bG, bw, bE, bz, bC, bv, bD, bH, bB, bL, bJ,
            bx, bA, bI, bO;
        bF.setAttribute("className", "t");
        bF.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        by = bF.getElementsByTagName("*");
        bN = bF.getElementsByTagName("a")[0];
        if (!by || !by.length || !bN) {
            return {};
        }
        bG = au.createElement("select");
        bw = bG.appendChild(au.createElement("option"));
        bE = bF.getElementsByTagName("input")[0];
        bC = {
            leadingWhitespace: (bF.firstChild.nodeType === 3),
            tbody: !bF.getElementsByTagName("tbody").length,
            htmlSerialize: !!bF.getElementsByTagName("link").length,
            style: /top/.test(bN.getAttribute("style")),
            hrefNormalized: (bN.getAttribute("href") === "/a"),
            opacity: /^0.55$/.test(bN.style.opacity),
            cssFloat: !!bN.style.cssFloat,
            checkOn: (bE.value === "on"),
            optSelected: bw.selected,
            getSetAttribute: bF.className !== "t",
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true
        };
        bE.checked = true;
        bC.noCloneChecked = bE.cloneNode(true).checked;
        bG.disabled = true;
        bC.optDisabled = !bw.disabled;
        try {
            delete bF.test;
        } catch (bK) {
            bC.deleteExpando = false;
        }
        if (!bF.addEventListener && bF.attachEvent && bF.fireEvent) {
            bF.attachEvent("onclick", function () {
                bC.noCloneEvent = false;
            });
            bF.cloneNode(true).fireEvent("onclick");
        }
        bE = au.createElement("input");
        bE.value = "t";
        bE.setAttribute("type", "radio");
        bC.radioValue = bE.value === "t";
        bE.setAttribute("checked", "checked");
        bF.appendChild(bE);
        bv = au.createDocumentFragment();
        bv.appendChild(bF.firstChild);
        bC.checkClone = bv.cloneNode(true).cloneNode(true).lastChild.checked;
        bF.innerHTML = "";
        bF.style.width = bF.style.paddingLeft = "1px";
        bD = au.getElementsByTagName("body")[0];
        bB = au.createElement(bD ? "div" : "body");
        bL = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"};
        if (bD) {
            c.extend(bL, {position: "absolute", left: "-1000px", top: "-1000px"});
        }
        for (bI in bL) {
            bB.style[bI] = bL[bI];
        }
        bB.appendChild(bF);
        bH = bD || bM;
        bH.insertBefore(bB, bH.firstChild);
        bC.appendChecked = bE.checked;
        bC.boxModel = bF.offsetWidth === 2;
        if ("zoom" in bF.style) {
            bF.style.display = "inline";
            bF.style.zoom = 1;
            bC.inlineBlockNeedsLayout = (bF.offsetWidth === 2);
            bF.style.display = "";
            bF.innerHTML = "<div style='width:4px;'></div>";
            bC.shrinkWrapBlocks = (bF.offsetWidth !== 2);
        }
        bF.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        bJ = bF.getElementsByTagName("td");
        bO = (bJ[0].offsetHeight === 0);
        bJ[0].style.display = "";
        bJ[1].style.display = "none";
        bC.reliableHiddenOffsets = bO && (bJ[0].offsetHeight === 0);
        bF.innerHTML = "";
        if (au.defaultView && au.defaultView.getComputedStyle) {
            bz = au.createElement("div");
            bz.style.width = "0";
            bz.style.marginRight = "0";
            bF.appendChild(bz);
            bC.reliableMarginRight = (parseInt((au.defaultView.getComputedStyle(bz, null) || {marginRight: 0}).marginRight, 10) || 0) === 0;
        }
        bB.innerHTML = "";
        bH.removeChild(bB);
        if (bF.attachEvent) {
            for (bI in {submit: 1, change: 1, focusin: 1}) {
                bA = "on" + bI;
                bO = (bA in bF);
                if (!bO) {
                    bF.setAttribute(bA, "return;");
                    bO = (typeof bF[bA] === "function");
                }
                bC[bI + "Bubbles"] = bO;
            }
        }
        bB = bv = bG = bw = bD = bz = bF = bE = null;
        return bC;
    })();
    c.boxModel = c.support.boxModel;
    var aP = /^(?:\{.*\}|\[.*\])$/, az = /([A-Z])/g;
    c.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: true, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: true},
        hasData: function (bv) {
            bv = bv.nodeType ? c.cache[bv[c.expando]] : bv[c.expando];
            return !!bv && !W(bv);
        },
        data: function (by, bw, bA, bz) {
            if (!c.acceptData(by)) {
                return;
            }
            var bB, bD, bE = c.expando, bC = typeof bw === "string", bF = by.nodeType, bv = bF ? c.cache : by,
                bx = bF ? by[c.expando] : by[c.expando] && c.expando;
            if ((!bx || (bz && bx && (bv[bx] && !bv[bx][bE]))) && bC && bA === O) {
                return;
            }
            if (!bx) {
                if (bF) {
                    by[c.expando] = bx = ++c.uuid;
                } else {
                    bx = c.expando;
                }
            }
            if (!bv[bx]) {
                bv[bx] = {};
                if (!bF) {
                    bv[bx].toJSON = c.noop;
                }
            }
            if (typeof bw === "object" || typeof bw === "function") {
                if (bz) {
                    bv[bx][bE] = c.extend(bv[bx][bE], bw);
                } else {
                    bv[bx] = c.extend(bv[bx], bw);
                }
            }
            bB = bv[bx];
            if (bz) {
                if (!bB[bE]) {
                    bB[bE] = {};
                }
                bB = bB[bE];
            }
            if (bA !== O) {
                bB[c.camelCase(bw)] = bA;
            }
            if (bw === "events" && !bB[bw]) {
                return bB[bE] && bB[bE].events;
            }
            if (bC) {
                bD = bB[bw];
                if (bD == null) {
                    bD = bB[c.camelCase(bw)];
                }
            } else {
                bD = bB;
            }
            return bD;
        },
        removeData: function (bz, bx, bA) {
            if (!c.acceptData(bz)) {
                return;
            }
            var bB, bC = c.expando, bD = bz.nodeType, bw = bD ? c.cache : bz, by = bD ? bz[c.expando] : c.expando;
            if (!bw[by]) {
                return;
            }
            if (bx) {
                bB = bA ? bw[by][bC] : bw[by];
                if (bB) {
                    if (!bB[bx]) {
                        bx = c.camelCase(bx);
                    }
                    delete bB[bx];
                    if (!W(bB)) {
                        return;
                    }
                }
            }
            if (bA) {
                delete bw[by][bC];
                if (!W(bw[by])) {
                    return;
                }
            }
            var bv = bw[by][bC];
            if (c.support.deleteExpando || !bw.setInterval) {
                delete bw[by];
            } else {
                bw[by] = null;
            }
            if (bv) {
                bw[by] = {};
                if (!bD) {
                    bw[by].toJSON = c.noop;
                }
                bw[by][bC] = bv;
            } else {
                if (bD) {
                    if (c.support.deleteExpando) {
                        delete bz[c.expando];
                    } else {
                        if (bz.removeAttribute) {
                            bz.removeAttribute(c.expando);
                        } else {
                            bz[c.expando] = null;
                        }
                    }
                }
            }
        },
        _data: function (bw, bv, bx) {
            return c.data(bw, bv, bx, true);
        },
        acceptData: function (bw) {
            if (bw.nodeName) {
                var bv = c.noData[bw.nodeName.toLowerCase()];
                if (bv) {
                    return !(bv === true || bw.getAttribute("classid") !== bv);
                }
            }
            return true;
        }
    });
    c.fn.extend({
        data: function (bz, bB) {
            var bA = null;
            if (typeof bz === "undefined") {
                if (this.length) {
                    bA = c.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var bv = this[0].attributes, bx;
                        for (var by = 0, bw = bv.length; by < bw; by++) {
                            bx = bv[by].name;
                            if (bx.indexOf("data-") === 0) {
                                bx = c.camelCase(bx.substring(5));
                                a5(this[0], bx, bA[bx]);
                            }
                        }
                    }
                }
                return bA;
            } else {
                if (typeof bz === "object") {
                    return this.each(function () {
                        c.data(this, bz);
                    });
                }
            }
            var bC = bz.split(".");
            bC[1] = bC[1] ? "." + bC[1] : "";
            if (bB === O) {
                bA = this.triggerHandler("getData" + bC[1] + "!", [bC[0]]);
                if (bA === O && this.length) {
                    bA = c.data(this[0], bz);
                    bA = a5(this[0], bz, bA);
                }
                return bA === O && bC[1] ? this.data(bC[0]) : bA;
            } else {
                return this.each(function () {
                    var bE = c(this), bD = [bC[0], bB];
                    bE.triggerHandler("setData" + bC[1] + "!", bD);
                    c.data(this, bz, bB);
                    bE.triggerHandler("changeData" + bC[1] + "!", bD);
                });
            }
        }, removeData: function (bv) {
            return this.each(function () {
                c.removeData(this, bv);
            });
        }
    });

    function a5(bx, bw, by) {
        if (by === O && bx.nodeType === 1) {
            var bv = "data-" + bw.replace(az, "-$1").toLowerCase();
            by = bx.getAttribute(bv);
            if (typeof by === "string") {
                try {
                    by = by === "true" ? true : by === "false" ? false : by === "null" ? null : !c.isNaN(by) ? parseFloat(by) : aP.test(by) ? c.parseJSON(by) : by;
                } catch (bz) {
                }
                c.data(bx, bw, by);
            } else {
                by = O;
            }
        }
        return by;
    }

    function W(bw) {
        for (var bv in bw) {
            if (bv !== "toJSON") {
                return false;
            }
        }
        return true;
    }

    function bh(bz, by, bB) {
        var bx = by + "defer", bw = by + "queue", bv = by + "mark", bA = c.data(bz, bx, O, true);
        if (bA && (bB === "queue" || !c.data(bz, bw, O, true)) && (bB === "mark" || !c.data(bz, bv, O, true))) {
            setTimeout(function () {
                if (!c.data(bz, bw, O, true) && !c.data(bz, bv, O, true)) {
                    c.removeData(bz, bx, true);
                    bA.resolve();
                }
            }, 0);
        }
    }

    c.extend({
        _mark: function (bw, bv) {
            if (bw) {
                bv = (bv || "fx") + "mark";
                c.data(bw, bv, (c.data(bw, bv, O, true) || 0) + 1, true);
            }
        }, _unmark: function (bz, by, bw) {
            if (bz !== true) {
                bw = by;
                by = bz;
                bz = false;
            }
            if (by) {
                bw = bw || "fx";
                var bv = bw + "mark", bx = bz ? 0 : ((c.data(by, bv, O, true) || 1) - 1);
                if (bx) {
                    c.data(by, bv, bx, true);
                } else {
                    c.removeData(by, bv, true);
                    bh(by, bw, "mark");
                }
            }
        }, queue: function (bw, bv, by) {
            if (bw) {
                bv = (bv || "fx") + "queue";
                var bx = c.data(bw, bv, O, true);
                if (by) {
                    if (!bx || c.isArray(by)) {
                        bx = c.data(bw, bv, c.makeArray(by), true);
                    } else {
                        bx.push(by);
                    }
                }
                return bx || [];
            }
        }, dequeue: function (by, bx) {
            bx = bx || "fx";
            var bv = c.queue(by, bx), bw = bv.shift(), bz;
            if (bw === "inprogress") {
                bw = bv.shift();
            }
            if (bw) {
                if (bx === "fx") {
                    bv.unshift("inprogress");
                }
                bw.call(by, function () {
                    c.dequeue(by, bx);
                });
            }
            if (!bv.length) {
                c.removeData(by, bx + "queue", true);
                bh(by, bx, "queue");
            }
        }
    });
    c.fn.extend({
        queue: function (bv, bw) {
            if (typeof bv !== "string") {
                bw = bv;
                bv = "fx";
            }
            if (bw === O) {
                return c.queue(this[0], bv);
            }
            return this.each(function () {
                var bx = c.queue(this, bv, bw);
                if (bv === "fx" && bx[0] !== "inprogress") {
                    c.dequeue(this, bv);
                }
            });
        }, dequeue: function (bv) {
            return this.each(function () {
                c.dequeue(this, bv);
            });
        }, delay: function (bw, bv) {
            bw = c.fx ? c.fx.speeds[bw] || bw : bw;
            bv = bv || "fx";
            return this.queue(bv, function () {
                var bx = this;
                setTimeout(function () {
                    c.dequeue(bx, bv);
                }, bw);
            });
        }, clearQueue: function (bv) {
            return this.queue(bv || "fx", []);
        }, promise: function (bE, bx) {
            if (typeof bE !== "string") {
                bx = bE;
                bE = O;
            }
            bE = bE || "fx";
            var bv = c.Deferred(), bw = this, bz = bw.length, bC = 1, bA = bE + "defer", bB = bE + "queue",
                bD = bE + "mark", by;

            function bF() {
                if (!(--bC)) {
                    bv.resolveWith(bw, [bw]);
                }
            }

            while (bz--) {
                if ((by = c.data(bw[bz], bA, O, true) || (c.data(bw[bz], bB, O, true) || c.data(bw[bz], bD, O, true)) && c.data(bw[bz], bA, c._Deferred(), true))) {
                    bC++;
                    by.done(bF);
                }
            }
            bF();
            return bv.promise();
        }
    });
    var aN = /[\n\t\r]/g, af = /\s+/, aR = /\r/g, h = /^(?:button|input)$/i,
        H = /^(?:button|input|object|select|textarea)$/i, o = /^a(?:rea)?$/i,
        an = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        be, aY;
    c.fn.extend({
        attr: function (bv, bw) {
            return c.access(this, bv, bw, true, c.attr);
        }, removeAttr: function (bv) {
            return this.each(function () {
                c.removeAttr(this, bv);
            });
        }, prop: function (bv, bw) {
            return c.access(this, bv, bw, true, c.prop);
        }, removeProp: function (bv) {
            bv = c.propFix[bv] || bv;
            return this.each(function () {
                try {
                    this[bv] = O;
                    delete this[bv];
                } catch (bw) {
                }
            });
        }, addClass: function (bz) {
            var bB, bx, bw, by, bA, bC, bv;
            if (c.isFunction(bz)) {
                return this.each(function (bD) {
                    c(this).addClass(bz.call(this, bD, this.className));
                });
            }
            if (bz && typeof bz === "string") {
                bB = bz.split(af);
                for (bx = 0, bw = this.length; bx < bw; bx++) {
                    by = this[bx];
                    if (by.nodeType === 1) {
                        if (!by.className && bB.length === 1) {
                            by.className = bz;
                        } else {
                            bA = " " + by.className + " ";
                            for (bC = 0, bv = bB.length; bC < bv; bC++) {
                                if (!~bA.indexOf(" " + bB[bC] + " ")) {
                                    bA += bB[bC] + " ";
                                }
                            }
                            by.className = c.trim(bA);
                        }
                    }
                }
            }
            return this;
        }, removeClass: function (bA) {
            var bB, bx, bw, bz, by, bC, bv;
            if (c.isFunction(bA)) {
                return this.each(function (bD) {
                    c(this).removeClass(bA.call(this, bD, this.className));
                });
            }
            if ((bA && typeof bA === "string") || bA === O) {
                bB = (bA || "").split(af);
                for (bx = 0, bw = this.length; bx < bw; bx++) {
                    bz = this[bx];
                    if (bz.nodeType === 1 && bz.className) {
                        if (bA) {
                            by = (" " + bz.className + " ").replace(aN, " ");
                            for (bC = 0, bv = bB.length; bC < bv; bC++) {
                                by = by.replace(" " + bB[bC] + " ", " ");
                            }
                            bz.className = c.trim(by);
                        } else {
                            bz.className = "";
                        }
                    }
                }
            }
            return this;
        }, toggleClass: function (by, bw) {
            var bx = typeof by, bv = typeof bw === "boolean";
            if (c.isFunction(by)) {
                return this.each(function (bz) {
                    c(this).toggleClass(by.call(this, bz, this.className, bw), bw);
                });
            }
            return this.each(function () {
                if (bx === "string") {
                    var bB, bA = 0, bz = c(this), bC = bw, bD = by.split(af);
                    while ((bB = bD[bA++])) {
                        bC = bv ? bC : !bz.hasClass(bB);
                        bz[bC ? "addClass" : "removeClass"](bB);
                    }
                } else {
                    if (bx === "undefined" || bx === "boolean") {
                        if (this.className) {
                            c._data(this, "__className__", this.className);
                        }
                        this.className = this.className || by === false ? "" : c._data(this, "__className__") || "";
                    }
                }
            });
        }, hasClass: function (bv) {
            var by = " " + bv + " ";
            for (var bx = 0, bw = this.length; bx < bw; bx++) {
                if (this[bx].nodeType === 1 && (" " + this[bx].className + " ").replace(aN, " ").indexOf(by) > -1) {
                    return true;
                }
            }
            return false;
        }, val: function (by) {
            var bv, bw, bx = this[0];
            if (!arguments.length) {
                if (bx) {
                    bv = c.valHooks[bx.nodeName.toLowerCase()] || c.valHooks[bx.type];
                    if (bv && "get" in bv && (bw = bv.get(bx, "value")) !== O) {
                        return bw;
                    }
                    bw = bx.value;
                    return typeof bw === "string" ? bw.replace(aR, "") : bw == null ? "" : bw;
                }
                return O;
            }
            var bz = c.isFunction(by);
            return this.each(function (bB) {
                var bA = c(this), bC;
                if (this.nodeType !== 1) {
                    return;
                }
                if (bz) {
                    bC = by.call(this, bB, bA.val());
                } else {
                    bC = by;
                }
                if (bC == null) {
                    bC = "";
                } else {
                    if (typeof bC === "number") {
                        bC += "";
                    } else {
                        if (c.isArray(bC)) {
                            bC = c.map(bC, function (bD) {
                                return bD == null ? "" : bD + "";
                            });
                        }
                    }
                }
                bv = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type];
                if (!bv || !("set" in bv) || bv.set(this, bC, "value") === O) {
                    this.value = bC;
                }
            });
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function (bv) {
                    var bw = bv.attributes.value;
                    return !bw || bw.specified ? bv.value : bv.text;
                }
            }, select: {
                get: function (bv) {
                    var bB, bz = bv.selectedIndex, bC = [], bD = bv.options, by = bv.type === "select-one";
                    if (bz < 0) {
                        return null;
                    }
                    for (var bw = by ? bz : 0, bA = by ? bz + 1 : bD.length; bw < bA; bw++) {
                        var bx = bD[bw];
                        if (bx.selected && (c.support.optDisabled ? !bx.disabled : bx.getAttribute("disabled") === null) && (!bx.parentNode.disabled || !c.nodeName(bx.parentNode, "optgroup"))) {
                            bB = c(bx).val();
                            if (by) {
                                return bB;
                            }
                            bC.push(bB);
                        }
                    }
                    if (by && !bC.length && bD.length) {
                        return c(bD[bz]).val();
                    }
                    return bC;
                }, set: function (bw, bx) {
                    var bv = c.makeArray(bx);
                    c(bw).find("option").each(function () {
                        this.selected = c.inArray(c(this).val(), bv) >= 0;
                    });
                    if (!bv.length) {
                        bw.selectedIndex = -1;
                    }
                    return bv;
                }
            }
        },
        attrFn: {val: true, css: true, html: true, text: true, data: true, width: true, height: true, offset: true},
        attrFix: {tabindex: "tabIndex"},
        attr: function (bB, by, bC, bA) {
            var bw = bB.nodeType;
            if (!bB || bw === 3 || bw === 8 || bw === 2) {
                return O;
            }
            if (bA && by in c.attrFn) {
                return c(bB)[by](bC);
            }
            if (!("getAttribute" in bB)) {
                return c.prop(bB, by, bC);
            }
            var bx, bv, bz = bw !== 1 || !c.isXMLDoc(bB);
            if (bz) {
                by = c.attrFix[by] || by;
                bv = c.attrHooks[by];
                if (!bv) {
                    if (an.test(by)) {
                        bv = aY;
                    } else {
                        if (be) {
                            bv = be;
                        }
                    }
                }
            }
            if (bC !== O) {
                if (bC === null) {
                    c.removeAttr(bB, by);
                    return O;
                } else {
                    if (bv && "set" in bv && bz && (bx = bv.set(bB, bC, by)) !== O) {
                        return bx;
                    } else {
                        bB.setAttribute(by, "" + bC);
                        return bC;
                    }
                }
            } else {
                if (bv && "get" in bv && bz && (bx = bv.get(bB, by)) !== null) {
                    return bx;
                } else {
                    bx = bB.getAttribute(by);
                    return bx === null ? O : bx;
                }
            }
        },
        removeAttr: function (bw, bv) {
            var bx;
            if (bw.nodeType === 1) {
                bv = c.attrFix[bv] || bv;
                c.attr(bw, bv, "");
                bw.removeAttribute(bv);
                if (an.test(bv) && (bx = c.propFix[bv] || bv) in bw) {
                    bw[bx] = false;
                }
            }
        },
        attrHooks: {
            type: {
                set: function (bv, bw) {
                    if (h.test(bv.nodeName) && bv.parentNode) {
                        c.error("type property can't be changed");
                    } else {
                        if (!c.support.radioValue && bw === "radio" && c.nodeName(bv, "input")) {
                            var bx = bv.value;
                            bv.setAttribute("type", bw);
                            if (bx) {
                                bv.value = bx;
                            }
                            return bw;
                        }
                    }
                }
            }, value: {
                get: function (bw, bv) {
                    if (be && c.nodeName(bw, "button")) {
                        return be.get(bw, bv);
                    }
                    return bv in bw ? bw.value : null;
                }, set: function (bw, bx, bv) {
                    if (be && c.nodeName(bw, "button")) {
                        return be.set(bw, bx, bv);
                    }
                    bw.value = bx;
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (bA, by, bB) {
            var bw = bA.nodeType;
            if (!bA || bw === 3 || bw === 8 || bw === 2) {
                return O;
            }
            var bx, bv, bz = bw !== 1 || !c.isXMLDoc(bA);
            if (bz) {
                by = c.propFix[by] || by;
                bv = c.propHooks[by];
            }
            if (bB !== O) {
                if (bv && "set" in bv && (bx = bv.set(bA, bB, by)) !== O) {
                    return bx;
                } else {
                    return (bA[by] = bB);
                }
            } else {
                if (bv && "get" in bv && (bx = bv.get(bA, by)) !== null) {
                    return bx;
                } else {
                    return bA[by];
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function (bw) {
                    var bv = bw.getAttributeNode("tabindex");
                    return bv && bv.specified ? parseInt(bv.value, 10) : H.test(bw.nodeName) || o.test(bw.nodeName) && bw.href ? 0 : O;
                }
            }
        }
    });
    c.attrHooks.tabIndex = c.propHooks.tabIndex;
    aY = {
        get: function (bw, bv) {
            var bx;
            return c.prop(bw, bv) === true || (bx = bw.getAttributeNode(bv)) && bx.nodeValue !== false ? bv.toLowerCase() : O;
        }, set: function (bw, by, bv) {
            var bx;
            if (by === false) {
                c.removeAttr(bw, bv);
            } else {
                bx = c.propFix[bv] || bv;
                if (bx in bw) {
                    bw[bx] = true;
                }
                bw.setAttribute(bv, bv.toLowerCase());
            }
            return bv;
        }
    };
    if (!c.support.getSetAttribute) {
        be = c.valHooks.button = {
            get: function (bx, bw) {
                var bv;
                bv = bx.getAttributeNode(bw);
                return bv && bv.nodeValue !== "" ? bv.nodeValue : O;
            }, set: function (bx, by, bw) {
                var bv = bx.getAttributeNode(bw);
                if (!bv) {
                    bv = au.createAttribute(bw);
                    bx.setAttributeNode(bv);
                }
                return (bv.nodeValue = by + "");
            }
        };
        c.each(["width", "height"], function (bw, bv) {
            c.attrHooks[bv] = c.extend(c.attrHooks[bv], {
                set: function (bx, by) {
                    if (by === "") {
                        bx.setAttribute(bv, "auto");
                        return by;
                    }
                }
            });
        });
    }
    if (!c.support.hrefNormalized) {
        c.each(["href", "src", "width", "height"], function (bw, bv) {
            c.attrHooks[bv] = c.extend(c.attrHooks[bv], {
                get: function (by) {
                    var bx = by.getAttribute(bv, 2);
                    return bx === null ? O : bx;
                }
            });
        });
    }
    if (!c.support.style) {
        c.attrHooks.style = {
            get: function (bv) {
                return bv.style.cssText.toLowerCase() || O;
            }, set: function (bv, bw) {
                return (bv.style.cssText = "" + bw);
            }
        };
    }
    if (!c.support.optSelected) {
        c.propHooks.selected = c.extend(c.propHooks.selected, {
            get: function (bw) {
                var bv = bw.parentNode;
                if (bv) {
                    bv.selectedIndex;
                    if (bv.parentNode) {
                        bv.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        });
    }
    if (!c.support.checkOn) {
        c.each(["radio", "checkbox"], function () {
            c.valHooks[this] = {
                get: function (bv) {
                    return bv.getAttribute("value") === null ? "on" : bv.value;
                }
            };
        });
    }
    c.each(["radio", "checkbox"], function () {
        c.valHooks[this] = c.extend(c.valHooks[this], {
            set: function (bv, bw) {
                if (c.isArray(bw)) {
                    return (bv.checked = c.inArray(c(bv).val(), bw) >= 0);
                }
            }
        });
    });
    var a0 = /\.(.*)$/, bd = /^(?:textarea|input|select)$/i, R = /\./g, bi = / /g, aF = /[^\w\s.|`]/g,
        K = function (bv) {
            return bv.replace(aF, "\\$&");
        };
    c.event = {
        add: function (by, bC, bH, bA) {
            if (by.nodeType === 3 || by.nodeType === 8) {
                return;
            }
            if (bH === false) {
                bH = bk;
            } else {
                if (!bH) {
                    return;
                }
            }
            var bw, bG;
            if (bH.handler) {
                bw = bH;
                bH = bw.handler;
            }
            if (!bH.guid) {
                bH.guid = c.guid++;
            }
            var bD = c._data(by);
            if (!bD) {
                return;
            }
            var bI = bD.events, bB = bD.handle;
            if (!bI) {
                bD.events = bI = {};
            }
            if (!bB) {
                bD.handle = bB = function (bJ) {
                    return typeof c !== "undefined" && (!bJ || c.event.triggered !== bJ.type) ? c.event.handle.apply(bB.elem, arguments) : O;
                };
            }
            bB.elem = by;
            bC = bC.split(" ");
            var bF, bz = 0, bv;
            while ((bF = bC[bz++])) {
                bG = bw ? c.extend({}, bw) : {handler: bH, data: bA};
                if (bF.indexOf(".") > -1) {
                    bv = bF.split(".");
                    bF = bv.shift();
                    bG.namespace = bv.slice(0).sort().join(".");
                } else {
                    bv = [];
                    bG.namespace = "";
                }
                bG.type = bF;
                if (!bG.guid) {
                    bG.guid = bH.guid;
                }
                var bx = bI[bF], bE = c.event.special[bF] || {};
                if (!bx) {
                    bx = bI[bF] = [];
                    if (!bE.setup || bE.setup.call(by, bA, bv, bB) === false) {
                        if (by.addEventListener) {
                            by.addEventListener(bF, bB, false);
                        } else {
                            if (by.attachEvent) {
                                by.attachEvent("on" + bF, bB);
                            }
                        }
                    }
                }
                if (bE.add) {
                    bE.add.call(by, bG);
                    if (!bG.handler.guid) {
                        bG.handler.guid = bH.guid;
                    }
                }
                bx.push(bG);
                c.event.global[bF] = true;
            }
            by = null;
        },
        global: {},
        remove: function (bK, bF, bx, bB) {
            if (bK.nodeType === 3 || bK.nodeType === 8) {
                return;
            }
            if (bx === false) {
                bx = bk;
            }
            var bN, bA, bC, bH, bI = 0, by, bD, bG, bz, bE, bv, bM, bJ = c.hasData(bK) && c._data(bK),
                bw = bJ && bJ.events;
            if (!bJ || !bw) {
                return;
            }
            if (bF && bF.type) {
                bx = bF.handler;
                bF = bF.type;
            }
            if (!bF || typeof bF === "string" && bF.charAt(0) === ".") {
                bF = bF || "";
                for (bA in bw) {
                    c.event.remove(bK, bA + bF);
                }
                return;
            }
            bF = bF.split(" ");
            while ((bA = bF[bI++])) {
                bM = bA;
                bv = null;
                by = bA.indexOf(".") < 0;
                bD = [];
                if (!by) {
                    bD = bA.split(".");
                    bA = bD.shift();
                    bG = new RegExp("(^|\\.)" + c.map(bD.slice(0).sort(), K).join("\\.(?:.*\\.)?") + "(\\.|$)");
                }
                bE = bw[bA];
                if (!bE) {
                    continue;
                }
                if (!bx) {
                    for (bH = 0; bH < bE.length; bH++) {
                        bv = bE[bH];
                        if (by || bG.test(bv.namespace)) {
                            c.event.remove(bK, bM, bv.handler, bH);
                            bE.splice(bH--, 1);
                        }
                    }
                    continue;
                }
                bz = c.event.special[bA] || {};
                for (bH = bB || 0; bH < bE.length; bH++) {
                    bv = bE[bH];
                    if (bx.guid === bv.guid) {
                        if (by || bG.test(bv.namespace)) {
                            if (bB == null) {
                                bE.splice(bH--, 1);
                            }
                            if (bz.remove) {
                                bz.remove.call(bK, bv);
                            }
                        }
                        if (bB != null) {
                            break;
                        }
                    }
                }
                if (bE.length === 0 || bB != null && bE.length === 1) {
                    if (!bz.teardown || bz.teardown.call(bK, bD) === false) {
                        c.removeEvent(bK, bA, bJ.handle);
                    }
                    bN = null;
                    delete bw[bA];
                }
            }
            if (c.isEmptyObject(bw)) {
                var bL = bJ.handle;
                if (bL) {
                    bL.elem = null;
                }
                delete bJ.events;
                delete bJ.handle;
                if (c.isEmptyObject(bJ)) {
                    c.removeData(bK, O, true);
                }
            }
        },
        customEvent: {getData: true, setData: true, changeData: true},
        trigger: function (bv, bC, bA, bH) {
            var bF = bv.type || bv, bx = [], bw;
            if (bF.indexOf("!") >= 0) {
                bF = bF.slice(0, -1);
                bw = true;
            }
            if (bF.indexOf(".") >= 0) {
                bx = bF.split(".");
                bF = bx.shift();
                bx.sort();
            }
            if ((!bA || c.event.customEvent[bF]) && !c.event.global[bF]) {
                return;
            }
            bv = typeof bv === "object" ? bv[c.expando] ? bv : new c.Event(bF, bv) : new c.Event(bF);
            bv.type = bF;
            bv.exclusive = bw;
            bv.namespace = bx.join(".");
            bv.namespace_re = new RegExp("(^|\\.)" + bx.join("\\.(?:.*\\.)?") + "(\\.|$)");
            if (bH || !bA) {
                bv.preventDefault();
                bv.stopPropagation();
            }
            if (!bA) {
                c.each(c.cache, function () {
                    var bJ = c.expando, bI = this[bJ];
                    if (bI && bI.events && bI.events[bF]) {
                        c.event.trigger(bv, bC, bI.handle.elem);
                    }
                });
                return;
            }
            if (bA.nodeType === 3 || bA.nodeType === 8) {
                return;
            }
            bv.result = O;
            bv.target = bA;
            bC = bC != null ? c.makeArray(bC) : [];
            bC.unshift(bv);
            var bG = bA, by = bF.indexOf(":") < 0 ? "on" + bF : "";
            do {
                var bD = c._data(bG, "handle");
                bv.currentTarget = bG;
                if (bD) {
                    bD.apply(bG, bC);
                }
                if (by && c.acceptData(bG) && bG[by] && bG[by].apply(bG, bC) === false) {
                    bv.result = false;
                    bv.preventDefault();
                }
                bG = bG.parentNode || bG.ownerDocument || bG === bv.target.ownerDocument && bb;
            } while (bG && !bv.isPropagationStopped());
            if (!bv.isDefaultPrevented()) {
                var bz, bE = c.event.special[bF] || {};
                if ((!bE._default || bE._default.call(bA.ownerDocument, bv) === false) && !(bF === "click" && c.nodeName(bA, "a")) && c.acceptData(bA)) {
                    try {
                        if (by && bA[bF]) {
                            bz = bA[by];
                            if (bz) {
                                bA[by] = null;
                            }
                            c.event.triggered = bF;
                            bA[bF]();
                        }
                    } catch (bB) {
                    }
                    if (bz) {
                        bA[by] = bz;
                    }
                    c.event.triggered = O;
                }
            }
            return bv.result;
        },
        handle: function (bC) {
            bC = c.event.fix(bC || bb.event);
            var bw = ((c._data(this, "events") || {})[bC.type] || []).slice(0), bB = !bC.exclusive && !bC.namespace,
                bz = Array.prototype.slice.call(arguments, 0);
            bz[0] = bC;
            bC.currentTarget = this;
            for (var by = 0, bv = bw.length; by < bv; by++) {
                var bA = bw[by];
                if (bB || bC.namespace_re.test(bA.namespace)) {
                    bC.handler = bA.handler;
                    bC.data = bA.data;
                    bC.handleObj = bA;
                    var bx = bA.handler.apply(this, bz);
                    if (bx !== O) {
                        bC.result = bx;
                        if (bx === false) {
                            bC.preventDefault();
                            bC.stopPropagation();
                        }
                    }
                    if (bC.isImmediatePropagationStopped()) {
                        break;
                    }
                }
            }
            return bC.result;
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (bz) {
            if (bz[c.expando]) {
                return bz;
            }
            var bw = bz;
            bz = c.Event(bw);
            for (var bx = this.props.length, bB; bx;) {
                bB = this.props[--bx];
                bz[bB] = bw[bB];
            }
            if (!bz.target) {
                bz.target = bz.srcElement || au;
            }
            if (bz.target.nodeType === 3) {
                bz.target = bz.target.parentNode;
            }
            if (!bz.relatedTarget && bz.fromElement) {
                bz.relatedTarget = bz.fromElement === bz.target ? bz.toElement : bz.fromElement;
            }
            if (bz.pageX == null && bz.clientX != null) {
                var by = bz.target.ownerDocument || au, bA = by.documentElement, bv = by.body;
                bz.pageX = bz.clientX + (bA && bA.scrollLeft || bv && bv.scrollLeft || 0) - (bA && bA.clientLeft || bv && bv.clientLeft || 0);
                bz.pageY = bz.clientY + (bA && bA.scrollTop || bv && bv.scrollTop || 0) - (bA && bA.clientTop || bv && bv.clientTop || 0);
            }
            if (bz.which == null && (bz.charCode != null || bz.keyCode != null)) {
                bz.which = bz.charCode != null ? bz.charCode : bz.keyCode;
            }
            if (!bz.metaKey && bz.ctrlKey) {
                bz.metaKey = bz.ctrlKey;
            }
            if (!bz.which && bz.button !== O) {
                bz.which = (bz.button & 1 ? 1 : (bz.button & 2 ? 3 : (bz.button & 4 ? 2 : 0)));
            }
            return bz;
        },
        guid: 100000000,
        proxy: c.proxy,
        special: {
            ready: {setup: c.bindReady, teardown: c.noop}, live: {
                add: function (bv) {
                    c.event.add(this, s(bv.origType, bv.selector), c.extend({}, bv, {
                        handler: ak,
                        guid: bv.handler.guid
                    }));
                }, remove: function (bv) {
                    c.event.remove(this, s(bv.origType, bv.selector), bv);
                }
            }, beforeunload: {
                setup: function (bx, bw, bv) {
                    if (c.isWindow(this)) {
                        this.onbeforeunload = bv;
                    }
                }, teardown: function (bw, bv) {
                    if (this.onbeforeunload === bv) {
                        this.onbeforeunload = null;
                    }
                }
            }
        }
    };
    c.removeEvent = au.removeEventListener ? function (bw, bv, bx) {
        if (bw.removeEventListener) {
            bw.removeEventListener(bv, bx, false);
        }
    } : function (bw, bv, bx) {
        if (bw.detachEvent) {
            bw.detachEvent("on" + bv, bx);
        }
    };
    c.Event = function (bw, bv) {
        if (!this.preventDefault) {
            return new c.Event(bw, bv);
        }
        if (bw && bw.type) {
            this.originalEvent = bw;
            this.type = bw.type;
            this.isDefaultPrevented = (bw.defaultPrevented || bw.returnValue === false || bw.getPreventDefault && bw.getPreventDefault()) ? l : bk;
        } else {
            this.type = bw;
        }
        if (bv) {
            c.extend(this, bv);
        }
        this.timeStamp = c.now();
        this[c.expando] = true;
    };

    function bk() {
        return false;
    }

    function l() {
        return true;
    }

    c.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = l;
            var bv = this.originalEvent;
            if (!bv) {
                return;
            }
            if (bv.preventDefault) {
                bv.preventDefault();
            } else {
                bv.returnValue = false;
            }
        }, stopPropagation: function () {
            this.isPropagationStopped = l;
            var bv = this.originalEvent;
            if (!bv) {
                return;
            }
            if (bv.stopPropagation) {
                bv.stopPropagation();
            }
            bv.cancelBubble = true;
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = l;
            this.stopPropagation();
        }, isDefaultPrevented: bk, isPropagationStopped: bk, isImmediatePropagationStopped: bk
    };
    var ae = function (bx) {
        var by = bx.relatedTarget, bv = false, bw = bx.type;
        bx.type = bx.data;
        if (by !== this) {
            if (by) {
                bv = c.contains(this, by);
            }
            if (!bv) {
                c.event.handle.apply(this, arguments);
                bx.type = bw;
            }
        }
    }, aV = function (bv) {
        bv.type = bv.data;
        c.event.handle.apply(this, arguments);
    };
    c.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (bw, bv) {
        c.event.special[bw] = {
            setup: function (bx) {
                c.event.add(this, bv, bx && bx.selector ? aV : ae, bw);
            }, teardown: function (bx) {
                c.event.remove(this, bv, bx && bx.selector ? aV : ae);
            }
        };
    });
    if (!c.support.submitBubbles) {
        c.event.special.submit = {
            setup: function (bw, bv) {
                if (!c.nodeName(this, "form")) {
                    c.event.add(this, "click.specialSubmit", function (bz) {
                        var by = bz.target, bx = c.nodeName(by, "input") || c.nodeName(by, "button") ? by.type : "";
                        if ((bx === "submit" || bx === "image") && c(by).closest("form").length) {
                            aX("submit", this, arguments);
                        }
                    });
                    c.event.add(this, "keypress.specialSubmit", function (bz) {
                        var by = bz.target, bx = c.nodeName(by, "input") || c.nodeName(by, "button") ? by.type : "";
                        if ((bx === "text" || bx === "password") && c(by).closest("form").length && bz.keyCode === 13) {
                            aX("submit", this, arguments);
                        }
                    });
                } else {
                    return false;
                }
            }, teardown: function (bv) {
                c.event.remove(this, ".specialSubmit");
            }
        };
    }
    if (!c.support.changeBubbles) {
        var bn, n = function (bw) {
            var bv = c.nodeName(bw, "input") ? bw.type : "", bx = bw.value;
            if (bv === "radio" || bv === "checkbox") {
                bx = bw.checked;
            } else {
                if (bv === "select-multiple") {
                    bx = bw.selectedIndex > -1 ? c.map(bw.options, function (by) {
                        return by.selected;
                    }).join("-") : "";
                } else {
                    if (c.nodeName(bw, "select")) {
                        bx = bw.selectedIndex;
                    }
                }
            }
            return bx;
        }, ac = function ac(bx) {
            var bv = bx.target, bw, by;
            if (!bd.test(bv.nodeName) || bv.readOnly) {
                return;
            }
            bw = c._data(bv, "_change_data");
            by = n(bv);
            if (bx.type !== "focusout" || bv.type !== "radio") {
                c._data(bv, "_change_data", by);
            }
            if (bw === O || by === bw) {
                return;
            }
            if (bw != null || by) {
                bx.type = "change";
                bx.liveFired = O;
                c.event.trigger(bx, arguments[1], bv);
            }
        };
        c.event.special.change = {
            filters: {
                focusout: ac, beforedeactivate: ac, click: function (bx) {
                    var bw = bx.target, bv = c.nodeName(bw, "input") ? bw.type : "";
                    if (bv === "radio" || bv === "checkbox" || c.nodeName(bw, "select")) {
                        ac.call(this, bx);
                    }
                }, keydown: function (bx) {
                    var bw = bx.target, bv = c.nodeName(bw, "input") ? bw.type : "";
                    if ((bx.keyCode === 13 && !c.nodeName(bw, "textarea")) || (bx.keyCode === 32 && (bv === "checkbox" || bv === "radio")) || bv === "select-multiple") {
                        ac.call(this, bx);
                    }
                }, beforeactivate: function (bw) {
                    var bv = bw.target;
                    c._data(bv, "_change_data", n(bv));
                }
            }, setup: function (bx, bw) {
                if (this.type === "file") {
                    return false;
                }
                for (var bv in bn) {
                    c.event.add(this, bv + ".specialChange", bn[bv]);
                }
                return bd.test(this.nodeName);
            }, teardown: function (bv) {
                c.event.remove(this, ".specialChange");
                return bd.test(this.nodeName);
            }
        };
        bn = c.event.special.change.filters;
        bn.focus = bn.beforeactivate;
    }

    function aX(bw, by, bv) {
        var bx = c.extend({}, bv[0]);
        bx.type = bw;
        bx.originalEvent = {};
        bx.liveFired = O;
        c.event.handle.call(by, bx);
        if (bx.isDefaultPrevented()) {
            bv[0].preventDefault();
        }
    }

    if (!c.support.focusinBubbles) {
        c.each({focus: "focusin", blur: "focusout"}, function (by, bv) {
            var bw = 0;
            c.event.special[bv] = {
                setup: function () {
                    if (bw++ === 0) {
                        au.addEventListener(by, bx, true);
                    }
                }, teardown: function () {
                    if (--bw === 0) {
                        au.removeEventListener(by, bx, true);
                    }
                }
            };

            function bx(bz) {
                var bA = c.event.fix(bz);
                bA.type = bv;
                bA.originalEvent = {};
                c.event.trigger(bA, null, bA.target);
                if (bA.isDefaultPrevented()) {
                    bz.preventDefault();
                }
            }
        });
    }
    c.each(["bind", "one"], function (bw, bv) {
        c.fn[bv] = function (bC, bD, bB) {
            var bA;
            if (typeof bC === "object") {
                for (var bz in bC) {
                    this[bv](bz, bD, bC[bz], bB);
                }
                return this;
            }
            if (arguments.length === 2 || bD === false) {
                bB = bD;
                bD = O;
            }
            if (bv === "one") {
                bA = function (bE) {
                    c(this).unbind(bE, bA);
                    return bB.apply(this, arguments);
                };
                bA.guid = bB.guid || c.guid++;
            } else {
                bA = bB;
            }
            if (bC === "unload" && bv !== "one") {
                this.one(bC, bD, bB);
            } else {
                for (var by = 0, bx = this.length; by < bx; by++) {
                    c.event.add(this[by], bC, bA, bD);
                }
            }
            return this;
        };
    });
    c.fn.extend({
        unbind: function (bz, by) {
            if (typeof bz === "object" && !bz.preventDefault) {
                for (var bx in bz) {
                    this.unbind(bx, bz[bx]);
                }
            } else {
                for (var bw = 0, bv = this.length; bw < bv; bw++) {
                    c.event.remove(this[bw], bz, by);
                }
            }
            return this;
        }, delegate: function (bv, bw, by, bx) {
            return this.live(bw, by, bx, bv);
        }, undelegate: function (bv, bw, bx) {
            if (arguments.length === 0) {
                return this.unbind("live");
            } else {
                return this.die(bw, null, bx, bv);
            }
        }, trigger: function (bv, bw) {
            return this.each(function () {
                c.event.trigger(bv, bw, this);
            });
        }, triggerHandler: function (bv, bw) {
            if (this[0]) {
                return c.event.trigger(bv, bw, this[0], true);
            }
        }, toggle: function (by) {
            var bw = arguments, bv = by.guid || c.guid++, bx = 0, bz = function (bA) {
                var bB = (c.data(this, "lastToggle" + by.guid) || 0) % bx;
                c.data(this, "lastToggle" + by.guid, bB + 1);
                bA.preventDefault();
                return bw[bB].apply(this, arguments) || false;
            };
            bz.guid = bv;
            while (bx < bw.length) {
                bw[bx++].guid = bv;
            }
            return this.click(bz);
        }, hover: function (bv, bw) {
            return this.mouseenter(bv).mouseleave(bw || bv);
        }
    });
    var aT = {focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout"};
    c.each(["live", "die"], function (bw, bv) {
        c.fn[bv] = function (bG, bD, bI, bz) {
            var bH, bE = 0, bF, by, bK, bB = bz || this.selector, bx = bz ? this : c(this.context);
            if (typeof bG === "object" && !bG.preventDefault) {
                for (var bJ in bG) {
                    bx[bv](bJ, bD, bG[bJ], bB);
                }
                return this;
            }
            if (bv === "die" && !bG && bz && bz.charAt(0) === ".") {
                bx.unbind(bz);
                return this;
            }
            if (bD === false || c.isFunction(bD)) {
                bI = bD || bk;
                bD = O;
            }
            bG = (bG || "").split(" ");
            while ((bH = bG[bE++]) != null) {
                bF = a0.exec(bH);
                by = "";
                if (bF) {
                    by = bF[0];
                    bH = bH.replace(a0, "");
                }
                if (bH === "hover") {
                    bG.push("mouseenter" + by, "mouseleave" + by);
                    continue;
                }
                bK = bH;
                if (aT[bH]) {
                    bG.push(aT[bH] + by);
                    bH = bH + by;
                } else {
                    bH = (aT[bH] || bH) + by;
                }
                if (bv === "live") {
                    for (var bC = 0, bA = bx.length; bC < bA; bC++) {
                        c.event.add(bx[bC], "live." + s(bH, bB), {
                            data: bD,
                            selector: bB,
                            handler: bI,
                            origType: bH,
                            origHandler: bI,
                            preType: bK
                        });
                    }
                } else {
                    bx.unbind("live." + s(bH, bB), bI);
                }
            }
            return this;
        };
    });

    function ak(bG) {
        var bD, by, bM, bA, bv, bI, bF, bH, bE, bL, bC, bB, bK, bJ = [], bz = [], bw = c._data(this, "events");
        if (bG.liveFired === this || !bw || !bw.live || bG.target.disabled || bG.button && bG.type === "click") {
            return;
        }
        if (bG.namespace) {
            bB = new RegExp("(^|\\.)" + bG.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)");
        }
        bG.liveFired = this;
        var bx = bw.live.slice(0);
        for (bF = 0; bF < bx.length; bF++) {
            bv = bx[bF];
            if (bv.origType.replace(a0, "") === bG.type) {
                bz.push(bv.selector);
            } else {
                bx.splice(bF--, 1);
            }
        }
        bA = c(bG.target).closest(bz, bG.currentTarget);
        for (bH = 0, bE = bA.length; bH < bE; bH++) {
            bC = bA[bH];
            for (bF = 0; bF < bx.length; bF++) {
                bv = bx[bF];
                if (bC.selector === bv.selector && (!bB || bB.test(bv.namespace)) && !bC.elem.disabled) {
                    bI = bC.elem;
                    bM = null;
                    if (bv.preType === "mouseenter" || bv.preType === "mouseleave") {
                        bG.type = bv.preType;
                        bM = c(bG.relatedTarget).closest(bv.selector)[0];
                        if (bM && c.contains(bI, bM)) {
                            bM = bI;
                        }
                    }
                    if (!bM || bM !== bI) {
                        bJ.push({elem: bI, handleObj: bv, level: bC.level});
                    }
                }
            }
        }
        for (bH = 0, bE = bJ.length; bH < bE; bH++) {
            bA = bJ[bH];
            if (by && bA.level > by) {
                break;
            }
            bG.currentTarget = bA.elem;
            bG.data = bA.handleObj.data;
            bG.handleObj = bA.handleObj;
            bK = bA.handleObj.origHandler.apply(bA.elem, arguments);
            if (bK === false || bG.isPropagationStopped()) {
                by = bA.level;
                if (bK === false) {
                    bD = false;
                }
                if (bG.isImmediatePropagationStopped()) {
                    break;
                }
            }
        }
        return bD;
    }

    function s(bw, bv) {
        return (bw && bw !== "*" ? bw + "." : "") + bv.replace(R, "`").replace(bi, "&");
    }

    c.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "), function (bw, bv) {
        c.fn[bv] = function (by, bx) {
            if (bx == null) {
                bx = by;
                by = null;
            }
            return arguments.length > 0 ? this.bind(bv, by, bx) : this.trigger(bv);
        };
        if (c.attrFn) {
            c.attrFn[bv] = true;
        }
    });
    /*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
    (function () {
        var bF = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            bG = 0, bJ = Object.prototype.toString, bA = false, bz = true, bH = /\\/g, bN = /\W/;
        [0, 0].sort(function () {
            bz = false;
            return 0;
        });
        var bx = function (bT, bO, bW, bX) {
            bW = bW || [];
            bO = bO || au;
            var bZ = bO;
            if (bO.nodeType !== 1 && bO.nodeType !== 9) {
                return [];
            }
            if (!bT || typeof bT !== "string") {
                return bW;
            }
            var bQ, b1, b4, bP, b0, b3, b2, bV, bS = true, bR = bx.isXML(bO), bU = [], bY = bT;
            do {
                bF.exec("");
                bQ = bF.exec(bY);
                if (bQ) {
                    bY = bQ[3];
                    bU.push(bQ[1]);
                    if (bQ[2]) {
                        bP = bQ[3];
                        break;
                    }
                }
            } while (bQ);
            if (bU.length > 1 && bB.exec(bT)) {
                if (bU.length === 2 && bC.relative[bU[0]]) {
                    b1 = bK(bU[0] + bU[1], bO);
                } else {
                    b1 = bC.relative[bU[0]] ? [bO] : bx(bU.shift(), bO);
                    while (bU.length) {
                        bT = bU.shift();
                        if (bC.relative[bT]) {
                            bT += bU.shift();
                        }
                        b1 = bK(bT, b1);
                    }
                }
            } else {
                if (!bX && bU.length > 1 && bO.nodeType === 9 && !bR && bC.match.ID.test(bU[0]) && !bC.match.ID.test(bU[bU.length - 1])) {
                    b0 = bx.find(bU.shift(), bO, bR);
                    bO = b0.expr ? bx.filter(b0.expr, b0.set)[0] : b0.set[0];
                }
                if (bO) {
                    b0 = bX ? {
                        expr: bU.pop(),
                        set: bD(bX)
                    } : bx.find(bU.pop(), bU.length === 1 && (bU[0] === "~" || bU[0] === "+") && bO.parentNode ? bO.parentNode : bO, bR);
                    b1 = b0.expr ? bx.filter(b0.expr, b0.set) : b0.set;
                    if (bU.length > 0) {
                        b4 = bD(b1);
                    } else {
                        bS = false;
                    }
                    while (bU.length) {
                        b3 = bU.pop();
                        b2 = b3;
                        if (!bC.relative[b3]) {
                            b3 = "";
                        } else {
                            b2 = bU.pop();
                        }
                        if (b2 == null) {
                            b2 = bO;
                        }
                        bC.relative[b3](b4, b2, bR);
                    }
                } else {
                    b4 = bU = [];
                }
            }
            if (!b4) {
                b4 = b1;
            }
            if (!b4) {
                bx.error(b3 || bT);
            }
            if (bJ.call(b4) === "[object Array]") {
                if (!bS) {
                    bW.push.apply(bW, b4);
                } else {
                    if (bO && bO.nodeType === 1) {
                        for (bV = 0; b4[bV] != null; bV++) {
                            if (b4[bV] && (b4[bV] === true || b4[bV].nodeType === 1 && bx.contains(bO, b4[bV]))) {
                                bW.push(b1[bV]);
                            }
                        }
                    } else {
                        for (bV = 0; b4[bV] != null; bV++) {
                            if (b4[bV] && b4[bV].nodeType === 1) {
                                bW.push(b1[bV]);
                            }
                        }
                    }
                }
            } else {
                bD(b4, bW);
            }
            if (bP) {
                bx(bP, bZ, bW, bX);
                bx.uniqueSort(bW);
            }
            return bW;
        };
        bx.uniqueSort = function (bP) {
            if (bI) {
                bA = bz;
                bP.sort(bI);
                if (bA) {
                    for (var bO = 1; bO < bP.length; bO++) {
                        if (bP[bO] === bP[bO - 1]) {
                            bP.splice(bO--, 1);
                        }
                    }
                }
            }
            return bP;
        };
        bx.matches = function (bO, bP) {
            return bx(bO, null, null, bP);
        };
        bx.matchesSelector = function (bO, bP) {
            return bx(bP, null, null, [bO]).length > 0;
        };
        bx.find = function (bV, bO, bW) {
            var bU;
            if (!bV) {
                return [];
            }
            for (var bR = 0, bQ = bC.order.length; bR < bQ; bR++) {
                var bS, bT = bC.order[bR];
                if ((bS = bC.leftMatch[bT].exec(bV))) {
                    var bP = bS[1];
                    bS.splice(1, 1);
                    if (bP.substr(bP.length - 1) !== "\\") {
                        bS[1] = (bS[1] || "").replace(bH, "");
                        bU = bC.find[bT](bS, bO, bW);
                        if (bU != null) {
                            bV = bV.replace(bC.match[bT], "");
                            break;
                        }
                    }
                }
            }
            if (!bU) {
                bU = typeof bO.getElementsByTagName !== "undefined" ? bO.getElementsByTagName("*") : [];
            }
            return {set: bU, expr: bV};
        };
        bx.filter = function (bZ, bY, b2, bS) {
            var bU, bO, bQ = bZ, b4 = [], bW = bY, bV = bY && bY[0] && bx.isXML(bY[0]);
            while (bZ && bY.length) {
                for (var bX in bC.filter) {
                    if ((bU = bC.leftMatch[bX].exec(bZ)) != null && bU[2]) {
                        var b3, b1, bP = bC.filter[bX], bR = bU[1];
                        bO = false;
                        bU.splice(1, 1);
                        if (bR.substr(bR.length - 1) === "\\") {
                            continue;
                        }
                        if (bW === b4) {
                            b4 = [];
                        }
                        if (bC.preFilter[bX]) {
                            bU = bC.preFilter[bX](bU, bW, b2, b4, bS, bV);
                            if (!bU) {
                                bO = b3 = true;
                            } else {
                                if (bU === true) {
                                    continue;
                                }
                            }
                        }
                        if (bU) {
                            for (var bT = 0; (b1 = bW[bT]) != null; bT++) {
                                if (b1) {
                                    b3 = bP(b1, bU, bT, bW);
                                    var b0 = bS ^ !!b3;
                                    if (b2 && b3 != null) {
                                        if (b0) {
                                            bO = true;
                                        } else {
                                            bW[bT] = false;
                                        }
                                    } else {
                                        if (b0) {
                                            b4.push(b1);
                                            bO = true;
                                        }
                                    }
                                }
                            }
                        }
                        if (b3 !== O) {
                            if (!b2) {
                                bW = b4;
                            }
                            bZ = bZ.replace(bC.match[bX], "");
                            if (!bO) {
                                return [];
                            }
                            break;
                        }
                    }
                }
                if (bZ === bQ) {
                    if (bO == null) {
                        bx.error(bZ);
                    } else {
                        break;
                    }
                }
                bQ = bZ;
            }
            return bW;
        };
        bx.error = function (bO) {
            throw"Syntax error, unrecognized expression: " + bO;
        };
        var bC = bx.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (bO) {
                    return bO.getAttribute("href");
                }, type: function (bO) {
                    return bO.getAttribute("type");
                }
            },
            relative: {
                "+": function (bU, bP) {
                    var bR = typeof bP === "string", bT = bR && !bN.test(bP), bV = bR && !bT;
                    if (bT) {
                        bP = bP.toLowerCase();
                    }
                    for (var bQ = 0, bO = bU.length, bS; bQ < bO; bQ++) {
                        if ((bS = bU[bQ])) {
                            while ((bS = bS.previousSibling) && bS.nodeType !== 1) {
                            }
                            bU[bQ] = bV || bS && bS.nodeName.toLowerCase() === bP ? bS || false : bS === bP;
                        }
                    }
                    if (bV) {
                        bx.filter(bP, bU, true);
                    }
                }, ">": function (bU, bP) {
                    var bT, bS = typeof bP === "string", bQ = 0, bO = bU.length;
                    if (bS && !bN.test(bP)) {
                        bP = bP.toLowerCase();
                        for (; bQ < bO; bQ++) {
                            bT = bU[bQ];
                            if (bT) {
                                var bR = bT.parentNode;
                                bU[bQ] = bR.nodeName.toLowerCase() === bP ? bR : false;
                            }
                        }
                    } else {
                        for (; bQ < bO; bQ++) {
                            bT = bU[bQ];
                            if (bT) {
                                bU[bQ] = bS ? bT.parentNode : bT.parentNode === bP;
                            }
                        }
                        if (bS) {
                            bx.filter(bP, bU, true);
                        }
                    }
                }, "": function (bR, bP, bT) {
                    var bS, bQ = bG++, bO = bL;
                    if (typeof bP === "string" && !bN.test(bP)) {
                        bP = bP.toLowerCase();
                        bS = bP;
                        bO = bv;
                    }
                    bO("parentNode", bP, bQ, bR, bS, bT);
                }, "~": function (bR, bP, bT) {
                    var bS, bQ = bG++, bO = bL;
                    if (typeof bP === "string" && !bN.test(bP)) {
                        bP = bP.toLowerCase();
                        bS = bP;
                        bO = bv;
                    }
                    bO("previousSibling", bP, bQ, bR, bS, bT);
                }
            },
            find: {
                ID: function (bP, bQ, bR) {
                    if (typeof bQ.getElementById !== "undefined" && !bR) {
                        var bO = bQ.getElementById(bP[1]);
                        return bO && bO.parentNode ? [bO] : [];
                    }
                }, NAME: function (bQ, bT) {
                    if (typeof bT.getElementsByName !== "undefined") {
                        var bP = [], bS = bT.getElementsByName(bQ[1]);
                        for (var bR = 0, bO = bS.length; bR < bO; bR++) {
                            if (bS[bR].getAttribute("name") === bQ[1]) {
                                bP.push(bS[bR]);
                            }
                        }
                        return bP.length === 0 ? null : bP;
                    }
                }, TAG: function (bO, bP) {
                    if (typeof bP.getElementsByTagName !== "undefined") {
                        return bP.getElementsByTagName(bO[1]);
                    }
                }
            },
            preFilter: {
                CLASS: function (bR, bP, bQ, bO, bU, bV) {
                    bR = " " + bR[1].replace(bH, "") + " ";
                    if (bV) {
                        return bR;
                    }
                    for (var bS = 0, bT; (bT = bP[bS]) != null; bS++) {
                        if (bT) {
                            if (bU ^ (bT.className && (" " + bT.className + " ").replace(/[\t\n\r]/g, " ").indexOf(bR) >= 0)) {
                                if (!bQ) {
                                    bO.push(bT);
                                }
                            } else {
                                if (bQ) {
                                    bP[bS] = false;
                                }
                            }
                        }
                    }
                    return false;
                }, ID: function (bO) {
                    return bO[1].replace(bH, "");
                }, TAG: function (bP, bO) {
                    return bP[1].replace(bH, "").toLowerCase();
                }, CHILD: function (bO) {
                    if (bO[1] === "nth") {
                        if (!bO[2]) {
                            bx.error(bO[0]);
                        }
                        bO[2] = bO[2].replace(/^\+|\s*/g, "");
                        var bP = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(bO[2] === "even" && "2n" || bO[2] === "odd" && "2n+1" || !/\D/.test(bO[2]) && "0n+" + bO[2] || bO[2]);
                        bO[2] = (bP[1] + (bP[2] || 1)) - 0;
                        bO[3] = bP[3] - 0;
                    } else {
                        if (bO[2]) {
                            bx.error(bO[0]);
                        }
                    }
                    bO[0] = bG++;
                    return bO;
                }, ATTR: function (bS, bP, bQ, bO, bT, bU) {
                    var bR = bS[1] = bS[1].replace(bH, "");
                    if (!bU && bC.attrMap[bR]) {
                        bS[1] = bC.attrMap[bR];
                    }
                    bS[4] = (bS[4] || bS[5] || "").replace(bH, "");
                    if (bS[2] === "~=") {
                        bS[4] = " " + bS[4] + " ";
                    }
                    return bS;
                }, PSEUDO: function (bS, bP, bQ, bO, bT) {
                    if (bS[1] === "not") {
                        if ((bF.exec(bS[3]) || "").length > 1 || /^\w/.test(bS[3])) {
                            bS[3] = bx(bS[3], null, null, bP);
                        } else {
                            var bR = bx.filter(bS[3], bP, bQ, true ^ bT);
                            if (!bQ) {
                                bO.push.apply(bO, bR);
                            }
                            return false;
                        }
                    } else {
                        if (bC.match.POS.test(bS[0]) || bC.match.CHILD.test(bS[0])) {
                            return true;
                        }
                    }
                    return bS;
                }, POS: function (bO) {
                    bO.unshift(true);
                    return bO;
                }
            },
            filters: {
                enabled: function (bO) {
                    return bO.disabled === false && bO.type !== "hidden";
                }, disabled: function (bO) {
                    return bO.disabled === true;
                }, checked: function (bO) {
                    return bO.checked === true;
                }, selected: function (bO) {
                    if (bO.parentNode) {
                        bO.parentNode.selectedIndex;
                    }
                    return bO.selected === true;
                }, parent: function (bO) {
                    return !!bO.firstChild;
                }, empty: function (bO) {
                    return !bO.firstChild;
                }, has: function (bQ, bP, bO) {
                    return !!bx(bO[3], bQ).length;
                }, header: function (bO) {
                    return (/h\d/i).test(bO.nodeName);
                }, text: function (bQ) {
                    var bO = bQ.getAttribute("type"), bP = bQ.type;
                    return bQ.nodeName.toLowerCase() === "input" && "text" === bP && (bO === bP || bO === null);
                }, radio: function (bO) {
                    return bO.nodeName.toLowerCase() === "input" && "radio" === bO.type;
                }, checkbox: function (bO) {
                    return bO.nodeName.toLowerCase() === "input" && "checkbox" === bO.type;
                }, file: function (bO) {
                    return bO.nodeName.toLowerCase() === "input" && "file" === bO.type;
                }, password: function (bO) {
                    return bO.nodeName.toLowerCase() === "input" && "password" === bO.type;
                }, submit: function (bP) {
                    var bO = bP.nodeName.toLowerCase();
                    return (bO === "input" || bO === "button") && "submit" === bP.type;
                }, image: function (bO) {
                    return bO.nodeName.toLowerCase() === "input" && "image" === bO.type;
                }, reset: function (bP) {
                    var bO = bP.nodeName.toLowerCase();
                    return (bO === "input" || bO === "button") && "reset" === bP.type;
                }, button: function (bP) {
                    var bO = bP.nodeName.toLowerCase();
                    return bO === "input" && "button" === bP.type || bO === "button";
                }, input: function (bO) {
                    return (/input|select|textarea|button/i).test(bO.nodeName);
                }, focus: function (bO) {
                    return bO === bO.ownerDocument.activeElement;
                }
            },
            setFilters: {
                first: function (bP, bO) {
                    return bO === 0;
                }, last: function (bQ, bP, bO, bR) {
                    return bP === bR.length - 1;
                }, even: function (bP, bO) {
                    return bO % 2 === 0;
                }, odd: function (bP, bO) {
                    return bO % 2 === 1;
                }, lt: function (bQ, bP, bO) {
                    return bP < bO[3] - 0;
                }, gt: function (bQ, bP, bO) {
                    return bP > bO[3] - 0;
                }, nth: function (bQ, bP, bO) {
                    return bO[3] - 0 === bP;
                }, eq: function (bQ, bP, bO) {
                    return bO[3] - 0 === bP;
                }
            },
            filter: {
                PSEUDO: function (bQ, bV, bU, bW) {
                    var bO = bV[1], bP = bC.filters[bO];
                    if (bP) {
                        return bP(bQ, bU, bV, bW);
                    } else {
                        if (bO === "contains") {
                            return (bQ.textContent || bQ.innerText || bx.getText([bQ]) || "").indexOf(bV[3]) >= 0;
                        } else {
                            if (bO === "not") {
                                var bR = bV[3];
                                for (var bT = 0, bS = bR.length; bT < bS; bT++) {
                                    if (bR[bT] === bQ) {
                                        return false;
                                    }
                                }
                                return true;
                            } else {
                                bx.error(bO);
                            }
                        }
                    }
                }, CHILD: function (bO, bR) {
                    var bU = bR[1], bP = bO;
                    switch (bU) {
                        case"only":
                        case"first":
                            while ((bP = bP.previousSibling)) {
                                if (bP.nodeType === 1) {
                                    return false;
                                }
                            }
                            if (bU === "first") {
                                return true;
                            }
                            bP = bO;
                        case"last":
                            while ((bP = bP.nextSibling)) {
                                if (bP.nodeType === 1) {
                                    return false;
                                }
                            }
                            return true;
                        case"nth":
                            var bQ = bR[2], bX = bR[3];
                            if (bQ === 1 && bX === 0) {
                                return true;
                            }
                            var bT = bR[0], bW = bO.parentNode;
                            if (bW && (bW.sizcache !== bT || !bO.nodeIndex)) {
                                var bS = 0;
                                for (bP = bW.firstChild; bP; bP = bP.nextSibling) {
                                    if (bP.nodeType === 1) {
                                        bP.nodeIndex = ++bS;
                                    }
                                }
                                bW.sizcache = bT;
                            }
                            var bV = bO.nodeIndex - bX;
                            if (bQ === 0) {
                                return bV === 0;
                            } else {
                                return (bV % bQ === 0 && bV / bQ >= 0);
                            }
                    }
                }, ID: function (bP, bO) {
                    return bP.nodeType === 1 && bP.getAttribute("id") === bO;
                }, TAG: function (bP, bO) {
                    return (bO === "*" && bP.nodeType === 1) || bP.nodeName.toLowerCase() === bO;
                }, CLASS: function (bP, bO) {
                    return (" " + (bP.className || bP.getAttribute("class")) + " ").indexOf(bO) > -1;
                }, ATTR: function (bT, bR) {
                    var bQ = bR[1],
                        bO = bC.attrHandle[bQ] ? bC.attrHandle[bQ](bT) : bT[bQ] != null ? bT[bQ] : bT.getAttribute(bQ),
                        bU = bO + "", bS = bR[2], bP = bR[4];
                    return bO == null ? bS === "!=" : bS === "=" ? bU === bP : bS === "*=" ? bU.indexOf(bP) >= 0 : bS === "~=" ? (" " + bU + " ").indexOf(bP) >= 0 : !bP ? bU && bO !== false : bS === "!=" ? bU !== bP : bS === "^=" ? bU.indexOf(bP) === 0 : bS === "$=" ? bU.substr(bU.length - bP.length) === bP : bS === "|=" ? bU === bP || bU.substr(0, bP.length + 1) === bP + "-" : false;
                }, POS: function (bS, bP, bQ, bT) {
                    var bO = bP[2], bR = bC.setFilters[bO];
                    if (bR) {
                        return bR(bS, bQ, bP, bT);
                    }
                }
            }
        };
        var bB = bC.match.POS, bw = function (bP, bO) {
            return "\\" + (bO - 0 + 1);
        };
        for (var by in bC.match) {
            bC.match[by] = new RegExp(bC.match[by].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            bC.leftMatch[by] = new RegExp(/(^(?:.|\r|\n)*?)/.source + bC.match[by].source.replace(/\\(\d+)/g, bw));
        }
        var bD = function (bP, bO) {
            bP = Array.prototype.slice.call(bP, 0);
            if (bO) {
                bO.push.apply(bO, bP);
                return bO;
            }
            return bP;
        };
        try {
            Array.prototype.slice.call(au.documentElement.childNodes, 0)[0].nodeType;
        } catch (bM) {
            bD = function (bS, bR) {
                var bQ = 0, bP = bR || [];
                if (bJ.call(bS) === "[object Array]") {
                    Array.prototype.push.apply(bP, bS);
                } else {
                    if (typeof bS.length === "number") {
                        for (var bO = bS.length; bQ < bO; bQ++) {
                            bP.push(bS[bQ]);
                        }
                    } else {
                        for (; bS[bQ]; bQ++) {
                            bP.push(bS[bQ]);
                        }
                    }
                }
                return bP;
            };
        }
        var bI, bE;
        if (au.documentElement.compareDocumentPosition) {
            bI = function (bP, bO) {
                if (bP === bO) {
                    bA = true;
                    return 0;
                }
                if (!bP.compareDocumentPosition || !bO.compareDocumentPosition) {
                    return bP.compareDocumentPosition ? -1 : 1;
                }
                return bP.compareDocumentPosition(bO) & 4 ? -1 : 1;
            };
        } else {
            bI = function (bW, bV) {
                if (bW === bV) {
                    bA = true;
                    return 0;
                } else {
                    if (bW.sourceIndex && bV.sourceIndex) {
                        return bW.sourceIndex - bV.sourceIndex;
                    }
                }
                var bT, bP, bQ = [], bO = [], bS = bW.parentNode, bU = bV.parentNode, bX = bS;
                if (bS === bU) {
                    return bE(bW, bV);
                } else {
                    if (!bS) {
                        return -1;
                    } else {
                        if (!bU) {
                            return 1;
                        }
                    }
                }
                while (bX) {
                    bQ.unshift(bX);
                    bX = bX.parentNode;
                }
                bX = bU;
                while (bX) {
                    bO.unshift(bX);
                    bX = bX.parentNode;
                }
                bT = bQ.length;
                bP = bO.length;
                for (var bR = 0; bR < bT && bR < bP; bR++) {
                    if (bQ[bR] !== bO[bR]) {
                        return bE(bQ[bR], bO[bR]);
                    }
                }
                return bR === bT ? bE(bW, bO[bR], -1) : bE(bQ[bR], bV, 1);
            };
            bE = function (bP, bO, bQ) {
                if (bP === bO) {
                    return bQ;
                }
                var bR = bP.nextSibling;
                while (bR) {
                    if (bR === bO) {
                        return -1;
                    }
                    bR = bR.nextSibling;
                }
                return 1;
            };
        }
        bx.getText = function (bO) {
            var bP = "", bR;
            for (var bQ = 0; bO[bQ]; bQ++) {
                bR = bO[bQ];
                if (bR.nodeType === 3 || bR.nodeType === 4) {
                    bP += bR.nodeValue;
                } else {
                    if (bR.nodeType !== 8) {
                        bP += bx.getText(bR.childNodes);
                    }
                }
            }
            return bP;
        };
        (function () {
            var bP = au.createElement("div"), bQ = "script" + (new Date()).getTime(), bO = au.documentElement;
            bP.innerHTML = "<a name='" + bQ + "'/>";
            bO.insertBefore(bP, bO.firstChild);
            if (au.getElementById(bQ)) {
                bC.find.ID = function (bS, bT, bU) {
                    if (typeof bT.getElementById !== "undefined" && !bU) {
                        var bR = bT.getElementById(bS[1]);
                        return bR ? bR.id === bS[1] || typeof bR.getAttributeNode !== "undefined" && bR.getAttributeNode("id").nodeValue === bS[1] ? [bR] : O : [];
                    }
                };
                bC.filter.ID = function (bT, bR) {
                    var bS = typeof bT.getAttributeNode !== "undefined" && bT.getAttributeNode("id");
                    return bT.nodeType === 1 && bS && bS.nodeValue === bR;
                };
            }
            bO.removeChild(bP);
            bO = bP = null;
        })();
        (function () {
            var bO = au.createElement("div");
            bO.appendChild(au.createComment(""));
            if (bO.getElementsByTagName("*").length > 0) {
                bC.find.TAG = function (bP, bT) {
                    var bS = bT.getElementsByTagName(bP[1]);
                    if (bP[1] === "*") {
                        var bR = [];
                        for (var bQ = 0; bS[bQ]; bQ++) {
                            if (bS[bQ].nodeType === 1) {
                                bR.push(bS[bQ]);
                            }
                        }
                        bS = bR;
                    }
                    return bS;
                };
            }
            bO.innerHTML = "<a href='#'></a>";
            if (bO.firstChild && typeof bO.firstChild.getAttribute !== "undefined" && bO.firstChild.getAttribute("href") !== "#") {
                bC.attrHandle.href = function (bP) {
                    return bP.getAttribute("href", 2);
                };
            }
            bO = null;
        })();
        if (au.querySelectorAll) {
            (function () {
                var bO = bx, bR = au.createElement("div"), bQ = "__sizzle__";
                bR.innerHTML = "<p class='TEST'></p>";
                if (bR.querySelectorAll && bR.querySelectorAll(".TEST").length === 0) {
                    return;
                }
                bx = function (b2, bT, bX, b1) {
                    bT = bT || au;
                    if (!b1 && !bx.isXML(bT)) {
                        var b0 = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b2);
                        if (b0 && (bT.nodeType === 1 || bT.nodeType === 9)) {
                            if (b0[1]) {
                                return bD(bT.getElementsByTagName(b2), bX);
                            } else {
                                if (b0[2] && bC.find.CLASS && bT.getElementsByClassName) {
                                    return bD(bT.getElementsByClassName(b0[2]), bX);
                                }
                            }
                        }
                        if (bT.nodeType === 9) {
                            if (b2 === "body" && bT.body) {
                                return bD([bT.body], bX);
                            } else {
                                if (b0 && b0[3]) {
                                    var bW = bT.getElementById(b0[3]);
                                    if (bW && bW.parentNode) {
                                        if (bW.id === b0[3]) {
                                            return bD([bW], bX);
                                        }
                                    } else {
                                        return bD([], bX);
                                    }
                                }
                            }
                            try {
                                return bD(bT.querySelectorAll(b2), bX);
                            } catch (bY) {
                            }
                        } else {
                            if (bT.nodeType === 1 && bT.nodeName.toLowerCase() !== "object") {
                                var bU = bT, bV = bT.getAttribute("id"), bS = bV || bQ, b4 = bT.parentNode,
                                    b3 = /^\s*[+~]/.test(b2);
                                if (!bV) {
                                    bT.setAttribute("id", bS);
                                } else {
                                    bS = bS.replace(/'/g, "\\$&");
                                }
                                if (b3 && b4) {
                                    bT = bT.parentNode;
                                }
                                try {
                                    if (!b3 || b4) {
                                        return bD(bT.querySelectorAll("[id='" + bS + "'] " + b2), bX);
                                    }
                                } catch (bZ) {
                                } finally {
                                    if (!bV) {
                                        bU.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                    return bO(b2, bT, bX, b1);
                };
                for (var bP in bO) {
                    bx[bP] = bO[bP];
                }
                bR = null;
            })();
        }
        (function () {
            var bO = au.documentElement,
                bQ = bO.matchesSelector || bO.mozMatchesSelector || bO.webkitMatchesSelector || bO.msMatchesSelector;
            if (bQ) {
                var bS = !bQ.call(au.createElement("div"), "div"), bP = false;
                try {
                    bQ.call(au.documentElement, "[test!='']:sizzle");
                } catch (bR) {
                    bP = true;
                }
                bx.matchesSelector = function (bU, bW) {
                    bW = bW.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!bx.isXML(bU)) {
                        try {
                            if (bP || !bC.match.PSEUDO.test(bW) && !/!=/.test(bW)) {
                                var bT = bQ.call(bU, bW);
                                if (bT || !bS || bU.document && bU.document.nodeType !== 11) {
                                    return bT;
                                }
                            }
                        } catch (bV) {
                        }
                    }
                    return bx(bW, null, null, [bU]).length > 0;
                };
            }
        })();
        (function () {
            var bO = au.createElement("div");
            bO.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!bO.getElementsByClassName || bO.getElementsByClassName("e").length === 0) {
                return;
            }
            bO.lastChild.className = "e";
            if (bO.getElementsByClassName("e").length === 1) {
                return;
            }
            bC.order.splice(1, 0, "CLASS");
            bC.find.CLASS = function (bP, bQ, bR) {
                if (typeof bQ.getElementsByClassName !== "undefined" && !bR) {
                    return bQ.getElementsByClassName(bP[1]);
                }
            };
            bO = null;
        })();

        function bv(bP, bU, bT, bX, bV, bW) {
            for (var bR = 0, bQ = bX.length; bR < bQ; bR++) {
                var bO = bX[bR];
                if (bO) {
                    var bS = false;
                    bO = bO[bP];
                    while (bO) {
                        if (bO.sizcache === bT) {
                            bS = bX[bO.sizset];
                            break;
                        }
                        if (bO.nodeType === 1 && !bW) {
                            bO.sizcache = bT;
                            bO.sizset = bR;
                        }
                        if (bO.nodeName.toLowerCase() === bU) {
                            bS = bO;
                            break;
                        }
                        bO = bO[bP];
                    }
                    bX[bR] = bS;
                }
            }
        }

        function bL(bP, bU, bT, bX, bV, bW) {
            for (var bR = 0, bQ = bX.length; bR < bQ; bR++) {
                var bO = bX[bR];
                if (bO) {
                    var bS = false;
                    bO = bO[bP];
                    while (bO) {
                        if (bO.sizcache === bT) {
                            bS = bX[bO.sizset];
                            break;
                        }
                        if (bO.nodeType === 1) {
                            if (!bW) {
                                bO.sizcache = bT;
                                bO.sizset = bR;
                            }
                            if (typeof bU !== "string") {
                                if (bO === bU) {
                                    bS = true;
                                    break;
                                }
                            } else {
                                if (bx.filter(bU, [bO]).length > 0) {
                                    bS = bO;
                                    break;
                                }
                            }
                        }
                        bO = bO[bP];
                    }
                    bX[bR] = bS;
                }
            }
        }

        if (au.documentElement.contains) {
            bx.contains = function (bP, bO) {
                return bP !== bO && (bP.contains ? bP.contains(bO) : true);
            };
        } else {
            if (au.documentElement.compareDocumentPosition) {
                bx.contains = function (bP, bO) {
                    return !!(bP.compareDocumentPosition(bO) & 16);
                };
            } else {
                bx.contains = function () {
                    return false;
                };
            }
        }
        bx.isXML = function (bO) {
            var bP = (bO ? bO.ownerDocument || bO : 0).documentElement;
            return bP ? bP.nodeName !== "HTML" : false;
        };
        var bK = function (bO, bV) {
            var bT, bR = [], bS = "", bQ = bV.nodeType ? [bV] : bV;
            while ((bT = bC.match.PSEUDO.exec(bO))) {
                bS += bT[0];
                bO = bO.replace(bC.match.PSEUDO, "");
            }
            bO = bC.relative[bO] ? bO + "*" : bO;
            for (var bU = 0, bP = bQ.length; bU < bP; bU++) {
                bx(bO, bQ[bU], bR);
            }
            return bx.filter(bS, bR);
        };
        c.find = bx;
        c.expr = bx.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = bx.uniqueSort;
        c.text = bx.getText;
        c.isXMLDoc = bx.isXML;
        c.contains = bx.contains;
    })();
    var ab = /Until$/, ap = /^(?:parents|prevUntil|prevAll)/, a9 = /,/, bq = /^.[^:#\[\.,]*$/,
        T = Array.prototype.slice, L = c.expr.match.POS, ax = {children: true, contents: true, next: true, prev: true};
    c.fn.extend({
        find: function (bv) {
            var bx = this, bz, bw;
            if (typeof bv !== "string") {
                return c(bv).filter(function () {
                    for (bz = 0, bw = bx.length; bz < bw; bz++) {
                        if (c.contains(bx[bz], this)) {
                            return true;
                        }
                    }
                });
            }
            var by = this.pushStack("", "find", bv), bB, bC, bA;
            for (bz = 0, bw = this.length; bz < bw; bz++) {
                bB = by.length;
                c.find(bv, this[bz], by);
                if (bz > 0) {
                    for (bC = bB; bC < by.length; bC++) {
                        for (bA = 0; bA < bB; bA++) {
                            if (by[bA] === by[bC]) {
                                by.splice(bC--, 1);
                                break;
                            }
                        }
                    }
                }
            }
            return by;
        }, has: function (bw) {
            var bv = c(bw);
            return this.filter(function () {
                for (var by = 0, bx = bv.length; by < bx; by++) {
                    if (c.contains(this, bv[by])) {
                        return true;
                    }
                }
            });
        }, not: function (bv) {
            return this.pushStack(aE(this, bv, false), "not", bv);
        }, filter: function (bv) {
            return this.pushStack(aE(this, bv, true), "filter", bv);
        }, is: function (bv) {
            return !!bv && (typeof bv === "string" ? c.filter(bv, this).length > 0 : this.filter(bv).length > 0);
        }, closest: function (bF, bw) {
            var bC = [], bz, bx, bE = this[0];
            if (c.isArray(bF)) {
                var bB, by, bA = {}, bv = 1;
                if (bE && bF.length) {
                    for (bz = 0, bx = bF.length; bz < bx; bz++) {
                        by = bF[bz];
                        if (!bA[by]) {
                            bA[by] = L.test(by) ? c(by, bw || this.context) : by;
                        }
                    }
                    while (bE && bE.ownerDocument && bE !== bw) {
                        for (by in bA) {
                            bB = bA[by];
                            if (bB.jquery ? bB.index(bE) > -1 : c(bE).is(bB)) {
                                bC.push({selector: by, elem: bE, level: bv});
                            }
                        }
                        bE = bE.parentNode;
                        bv++;
                    }
                }
                return bC;
            }
            var bD = L.test(bF) || typeof bF !== "string" ? c(bF, bw || this.context) : 0;
            for (bz = 0, bx = this.length; bz < bx; bz++) {
                bE = this[bz];
                while (bE) {
                    if (bD ? bD.index(bE) > -1 : c.find.matchesSelector(bE, bF)) {
                        bC.push(bE);
                        break;
                    } else {
                        bE = bE.parentNode;
                        if (!bE || !bE.ownerDocument || bE === bw || bE.nodeType === 11) {
                            break;
                        }
                    }
                }
            }
            bC = bC.length > 1 ? c.unique(bC) : bC;
            return this.pushStack(bC, "closest", bF);
        }, index: function (bv) {
            if (!bv) {
                return (this[0] && this[0].parentNode) ? this.prevAll().length : -1;
            }
            if (typeof bv === "string") {
                return c.inArray(this[0], c(bv));
            }
            return c.inArray(bv.jquery ? bv[0] : bv, this);
        }, add: function (bv, bw) {
            var by = typeof bv === "string" ? c(bv, bw) : c.makeArray(bv && bv.nodeType ? [bv] : bv),
                bx = c.merge(this.get(), by);
            return this.pushStack(G(by[0]) || G(bx[0]) ? bx : c.unique(bx));
        }, andSelf: function () {
            return this.add(this.prevObject);
        }
    });

    function G(bv) {
        return !bv || !bv.parentNode || bv.parentNode.nodeType === 11;
    }

    c.each({
        parent: function (bw) {
            var bv = bw.parentNode;
            return bv && bv.nodeType !== 11 ? bv : null;
        }, parents: function (bv) {
            return c.dir(bv, "parentNode");
        }, parentsUntil: function (bw, bv, bx) {
            return c.dir(bw, "parentNode", bx);
        }, next: function (bv) {
            return c.nth(bv, 2, "nextSibling");
        }, prev: function (bv) {
            return c.nth(bv, 2, "previousSibling");
        }, nextAll: function (bv) {
            return c.dir(bv, "nextSibling");
        }, prevAll: function (bv) {
            return c.dir(bv, "previousSibling");
        }, nextUntil: function (bw, bv, bx) {
            return c.dir(bw, "nextSibling", bx);
        }, prevUntil: function (bw, bv, bx) {
            return c.dir(bw, "previousSibling", bx);
        }, siblings: function (bv) {
            return c.sibling(bv.parentNode.firstChild, bv);
        }, children: function (bv) {
            return c.sibling(bv.firstChild);
        }, contents: function (bv) {
            return c.nodeName(bv, "iframe") ? bv.contentDocument || bv.contentWindow.document : c.makeArray(bv.childNodes);
        }
    }, function (bv, bw) {
        c.fn[bv] = function (bA, bx) {
            var bz = c.map(this, bw, bA), by = T.call(arguments);
            if (!ab.test(bv)) {
                bx = bA;
            }
            if (bx && typeof bx === "string") {
                bz = c.filter(bx, bz);
            }
            bz = this.length > 1 && !ax[bv] ? c.unique(bz) : bz;
            if ((this.length > 1 || a9.test(bx)) && ap.test(bv)) {
                bz = bz.reverse();
            }
            return this.pushStack(bz, bv, by.join(","));
        };
    });
    c.extend({
        filter: function (bx, bv, bw) {
            if (bw) {
                bx = ":not(" + bx + ")";
            }
            return bv.length === 1 ? c.find.matchesSelector(bv[0], bx) ? [bv[0]] : [] : c.find.matches(bx, bv);
        }, dir: function (bx, bw, bz) {
            var bv = [], by = bx[bw];
            while (by && by.nodeType !== 9 && (bz === O || by.nodeType !== 1 || !c(by).is(bz))) {
                if (by.nodeType === 1) {
                    bv.push(by);
                }
                by = by[bw];
            }
            return bv;
        }, nth: function (bz, bv, bx, by) {
            bv = bv || 1;
            var bw = 0;
            for (; bz; bz = bz[bx]) {
                if (bz.nodeType === 1 && ++bw === bv) {
                    break;
                }
            }
            return bz;
        }, sibling: function (bx, bw) {
            var bv = [];
            for (; bx; bx = bx.nextSibling) {
                if (bx.nodeType === 1 && bx !== bw) {
                    bv.push(bx);
                }
            }
            return bv;
        }
    });

    function aE(by, bx, bv) {
        bx = bx || 0;
        if (c.isFunction(bx)) {
            return c.grep(by, function (bA, bz) {
                var bB = !!bx.call(bA, bz, bA);
                return bB === bv;
            });
        } else {
            if (bx.nodeType) {
                return c.grep(by, function (bA, bz) {
                    return (bA === bx) === bv;
                });
            } else {
                if (typeof bx === "string") {
                    var bw = c.grep(by, function (bz) {
                        return bz.nodeType === 1;
                    });
                    if (bq.test(bx)) {
                        return c.filter(bx, bw, !bv);
                    } else {
                        bx = c.filter(bx, bw);
                    }
                }
            }
        }
        return c.grep(by, function (bA, bz) {
            return (c.inArray(bA, bx) >= 0) === bv;
        });
    }

    var ag = / jQuery\d+="(?:\d+|null)"/g, aq = /^\s+/,
        V = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, f = /<([\w:]+)/, A = /<tbody/i,
        Y = /<|&#?\w+;/, S = /<(?:script|object|embed|option|style)/i, q = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bm = /\/(java|ecma)script/i, aM = /^\s*<!(?:\[CDATA\[|\-\-)/, aw = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    aw.optgroup = aw.option;
    aw.tbody = aw.tfoot = aw.colgroup = aw.caption = aw.thead;
    aw.th = aw.td;
    if (!c.support.htmlSerialize) {
        aw._default = [1, "div<div>", "</div>"];
    }
    c.fn.extend({
        text: function (bv) {
            if (c.isFunction(bv)) {
                return this.each(function (bx) {
                    var bw = c(this);
                    bw.text(bv.call(this, bx, bw.text()));
                });
            }
            if (typeof bv !== "object" && bv !== O) {
                return this.empty().append((this[0] && this[0].ownerDocument || au).createTextNode(bv));
            }
            return c.text(this);
        }, wrapAll: function (bv) {
            if (c.isFunction(bv)) {
                return this.each(function (bx) {
                    c(this).wrapAll(bv.call(this, bx));
                });
            }
            if (this[0]) {
                var bw = c(bv, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    bw.insertBefore(this[0]);
                }
                bw.map(function () {
                    var bx = this;
                    while (bx.firstChild && bx.firstChild.nodeType === 1) {
                        bx = bx.firstChild;
                    }
                    return bx;
                }).append(this);
            }
            return this;
        }, wrapInner: function (bv) {
            if (c.isFunction(bv)) {
                return this.each(function (bw) {
                    c(this).wrapInner(bv.call(this, bw));
                });
            }
            return this.each(function () {
                var bw = c(this), bx = bw.contents();
                if (bx.length) {
                    bx.wrapAll(bv);
                } else {
                    bw.append(bv);
                }
            });
        }, wrap: function (bv) {
            return this.each(function () {
                c(this).wrapAll(bv);
            });
        }, unwrap: function () {
            return this.parent().each(function () {
                if (!c.nodeName(this, "body")) {
                    c(this).replaceWith(this.childNodes);
                }
            }).end();
        }, append: function () {
            return this.domManip(arguments, true, function (bv) {
                if (this.nodeType === 1) {
                    this.appendChild(bv);
                }
            });
        }, prepend: function () {
            return this.domManip(arguments, true, function (bv) {
                if (this.nodeType === 1) {
                    this.insertBefore(bv, this.firstChild);
                }
            });
        }, before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (bw) {
                    this.parentNode.insertBefore(bw, this);
                });
            } else {
                if (arguments.length) {
                    var bv = c(arguments[0]);
                    bv.push.apply(bv, this.toArray());
                    return this.pushStack(bv, "before", arguments);
                }
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (bw) {
                    this.parentNode.insertBefore(bw, this.nextSibling);
                });
            } else {
                if (arguments.length) {
                    var bv = this.pushStack(this, "after", arguments);
                    bv.push.apply(bv, c(arguments[0]).toArray());
                    return bv;
                }
            }
        }, remove: function (bv, by) {
            for (var bw = 0, bx; (bx = this[bw]) != null; bw++) {
                if (!bv || c.filter(bv, [bx]).length) {
                    if (!by && bx.nodeType === 1) {
                        c.cleanData(bx.getElementsByTagName("*"));
                        c.cleanData([bx]);
                    }
                    if (bx.parentNode) {
                        bx.parentNode.removeChild(bx);
                    }
                }
            }
            return this;
        }, empty: function () {
            for (var bv = 0, bw; (bw = this[bv]) != null; bv++) {
                if (bw.nodeType === 1) {
                    c.cleanData(bw.getElementsByTagName("*"));
                }
                while (bw.firstChild) {
                    bw.removeChild(bw.firstChild);
                }
            }
            return this;
        }, clone: function (bw, bv) {
            bw = bw == null ? false : bw;
            bv = bv == null ? bw : bv;
            return this.map(function () {
                return c.clone(this, bw, bv);
            });
        }, html: function (bx) {
            if (bx === O) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ag, "") : null;
            } else {
                if (typeof bx === "string" && !S.test(bx) && (c.support.leadingWhitespace || !aq.test(bx)) && !aw[(f.exec(bx) || ["", ""])[1].toLowerCase()]) {
                    bx = bx.replace(V, "<$1></$2>");
                    try {
                        for (var bw = 0, bv = this.length; bw < bv; bw++) {
                            if (this[bw].nodeType === 1) {
                                c.cleanData(this[bw].getElementsByTagName("*"));
                                this[bw].innerHTML = bx;
                            }
                        }
                    } catch (by) {
                        this.empty().append(bx);
                    }
                } else {
                    if (c.isFunction(bx)) {
                        this.each(function (bA) {
                            var bz = c(this);
                            bz.html(bx.call(this, bA, bz.html()));
                        });
                    } else {
                        this.empty().append(bx);
                    }
                }
            }
            return this;
        }, replaceWith: function (bv) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(bv)) {
                    return this.each(function (by) {
                        var bx = c(this), bw = bx.html();
                        bx.replaceWith(bv.call(this, by, bw));
                    });
                }
                if (typeof bv !== "string") {
                    bv = c(bv).detach();
                }
                return this.each(function () {
                    var bx = this.nextSibling, bw = this.parentNode;
                    c(this).remove();
                    if (bx) {
                        c(bx).before(bv);
                    } else {
                        c(bw).append(bv);
                    }
                });
            } else {
                return this.length ? this.pushStack(c(c.isFunction(bv) ? bv() : bv), "replaceWith", bv) : this;
            }
        }, detach: function (bv) {
            return this.remove(bv, true);
        }, domManip: function (bC, bG, bF) {
            var by, bz, bB, bE, bD = bC[0], bw = [];
            if (!c.support.checkClone && arguments.length === 3 && typeof bD === "string" && q.test(bD)) {
                return this.each(function () {
                    c(this).domManip(bC, bG, bF, true);
                });
            }
            if (c.isFunction(bD)) {
                return this.each(function (bI) {
                    var bH = c(this);
                    bC[0] = bD.call(this, bI, bG ? bH.html() : O);
                    bH.domManip(bC, bG, bF);
                });
            }
            if (this[0]) {
                bE = bD && bD.parentNode;
                if (c.support.parentNode && bE && bE.nodeType === 11 && bE.childNodes.length === this.length) {
                    by = {fragment: bE};
                } else {
                    by = c.buildFragment(bC, this, bw);
                }
                bB = by.fragment;
                if (bB.childNodes.length === 1) {
                    bz = bB = bB.firstChild;
                } else {
                    bz = bB.firstChild;
                }
                if (bz) {
                    bG = bG && c.nodeName(bz, "tr");
                    for (var bx = 0, bv = this.length, bA = bv - 1; bx < bv; bx++) {
                        bF.call(bG ? ba(this[bx], bz) : this[bx], by.cacheable || (bv > 1 && bx < bA) ? c.clone(bB, true, true) : bB);
                    }
                }
                if (bw.length) {
                    c.each(bw, bp);
                }
            }
            return this;
        }
    });

    function ba(bv, bw) {
        return c.nodeName(bv, "table") ? (bv.getElementsByTagName("tbody")[0] || bv.appendChild(bv.ownerDocument.createElement("tbody"))) : bv;
    }

    function x(bv, bC) {
        if (bC.nodeType !== 1 || !c.hasData(bv)) {
            return;
        }
        var bB = c.expando, by = c.data(bv), bz = c.data(bC, by);
        if ((by = by[bB])) {
            var bD = by.events;
            bz = bz[bB] = c.extend({}, by);
            if (bD) {
                delete bz.handle;
                bz.events = {};
                for (var bA in bD) {
                    for (var bx = 0, bw = bD[bA].length; bx < bw; bx++) {
                        c.event.add(bC, bA + (bD[bA][bx].namespace ? "." : "") + bD[bA][bx].namespace, bD[bA][bx], bD[bA][bx].data);
                    }
                }
            }
        }
    }

    function ah(bw, bv) {
        var bx;
        if (bv.nodeType !== 1) {
            return;
        }
        if (bv.clearAttributes) {
            bv.clearAttributes();
        }
        if (bv.mergeAttributes) {
            bv.mergeAttributes(bw);
        }
        bx = bv.nodeName.toLowerCase();
        if (bx === "object") {
            bv.outerHTML = bw.outerHTML;
        } else {
            if (bx === "input" && (bw.type === "checkbox" || bw.type === "radio")) {
                if (bw.checked) {
                    bv.defaultChecked = bv.checked = bw.checked;
                }
                if (bv.value !== bw.value) {
                    bv.value = bw.value;
                }
            } else {
                if (bx === "option") {
                    bv.selected = bw.defaultSelected;
                } else {
                    if (bx === "input" || bx === "textarea") {
                        bv.defaultValue = bw.defaultValue;
                    }
                }
            }
        }
        bv.removeAttribute(c.expando);
    }

    c.buildFragment = function (bA, by, bw) {
        var bz, bv, bx, bB;
        if (by && by[0]) {
            bB = by[0].ownerDocument || by[0];
        }
        if (!bB.createDocumentFragment) {
            bB = au;
        }
        if (bA.length === 1 && typeof bA[0] === "string" && bA[0].length < 512 && bB === au && bA[0].charAt(0) === "<" && !S.test(bA[0]) && (c.support.checkClone || !q.test(bA[0]))) {
            bv = true;
            bx = c.fragments[bA[0]];
            if (bx && bx !== 1) {
                bz = bx;
            }
        }
        if (!bz) {
            bz = bB.createDocumentFragment();
            c.clean(bA, bB, bz, bw);
        }
        if (bv) {
            c.fragments[bA[0]] = bx ? bz : 1;
        }
        return {fragment: bz, cacheable: bv};
    };
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (bv, bw) {
        c.fn[bv] = function (bx) {
            var bA = [], bD = c(bx), bC = this.length === 1 && this[0].parentNode;
            if (bC && bC.nodeType === 11 && bC.childNodes.length === 1 && bD.length === 1) {
                bD[bw](this[0]);
                return this;
            } else {
                for (var bB = 0, by = bD.length; bB < by; bB++) {
                    var bz = (bB > 0 ? this.clone(true) : this).get();
                    c(bD[bB])[bw](bz);
                    bA = bA.concat(bz);
                }
                return this.pushStack(bA, bv, bD.selector);
            }
        };
    });

    function bf(bv) {
        if ("getElementsByTagName" in bv) {
            return bv.getElementsByTagName("*");
        } else {
            if ("querySelectorAll" in bv) {
                return bv.querySelectorAll("*");
            } else {
                return [];
            }
        }
    }

    function ay(bv) {
        if (bv.type === "checkbox" || bv.type === "radio") {
            bv.defaultChecked = bv.checked;
        }
    }

    function I(bv) {
        if (c.nodeName(bv, "input")) {
            ay(bv);
        } else {
            if ("getElementsByTagName" in bv) {
                c.grep(bv.getElementsByTagName("input"), ay);
            }
        }
    }

    c.extend({
        clone: function (bz, bB, bx) {
            var bA = bz.cloneNode(true), bv, bw, by;
            if ((!c.support.noCloneEvent || !c.support.noCloneChecked) && (bz.nodeType === 1 || bz.nodeType === 11) && !c.isXMLDoc(bz)) {
                ah(bz, bA);
                bv = bf(bz);
                bw = bf(bA);
                for (by = 0; bv[by]; ++by) {
                    if (bw[by]) {
                        ah(bv[by], bw[by]);
                    }
                }
            }
            if (bB) {
                x(bz, bA);
                if (bx) {
                    bv = bf(bz);
                    bw = bf(bA);
                    for (by = 0; bv[by]; ++by) {
                        x(bv[by], bw[by]);
                    }
                }
            }
            bv = bw = null;
            return bA;
        }, clean: function (bx, bz, bI, bB) {
            var bG;
            bz = bz || au;
            if (typeof bz.createElement === "undefined") {
                bz = bz.ownerDocument || bz[0] && bz[0].ownerDocument || au;
            }
            var bJ = [], bC;
            for (var bF = 0, bA; (bA = bx[bF]) != null; bF++) {
                if (typeof bA === "number") {
                    bA += "";
                }
                if (!bA) {
                    continue;
                }
                if (typeof bA === "string") {
                    if (!Y.test(bA)) {
                        bA = bz.createTextNode(bA);
                    } else {
                        bA = bA.replace(V, "<$1></$2>");
                        var bL = (f.exec(bA) || ["", ""])[1].toLowerCase(), by = aw[bL] || aw._default, bE = by[0],
                            bw = bz.createElement("div");
                        bw.innerHTML = by[1] + bA + by[2];
                        while (bE--) {
                            bw = bw.lastChild;
                        }
                        if (!c.support.tbody) {
                            var bv = A.test(bA),
                                bD = bL === "table" && !bv ? bw.firstChild && bw.firstChild.childNodes : by[1] === "<table>" && !bv ? bw.childNodes : [];
                            for (bC = bD.length - 1; bC >= 0; --bC) {
                                if (c.nodeName(bD[bC], "tbody") && !bD[bC].childNodes.length) {
                                    bD[bC].parentNode.removeChild(bD[bC]);
                                }
                            }
                        }
                        if (!c.support.leadingWhitespace && aq.test(bA)) {
                            bw.insertBefore(bz.createTextNode(aq.exec(bA)[0]), bw.firstChild);
                        }
                        bA = bw.childNodes;
                    }
                }
                var bH;
                if (!c.support.appendChecked) {
                    if (bA[0] && typeof(bH = bA.length) === "number") {
                        for (bC = 0; bC < bH; bC++) {
                            I(bA[bC]);
                        }
                    } else {
                        I(bA);
                    }
                }
                if (bA.nodeType) {
                    bJ.push(bA);
                } else {
                    bJ = c.merge(bJ, bA);
                }
            }
            if (bI) {
                bG = function (bM) {
                    return !bM.type || bm.test(bM.type);
                };
                for (bF = 0; bJ[bF]; bF++) {
                    if (bB && c.nodeName(bJ[bF], "script") && (!bJ[bF].type || bJ[bF].type.toLowerCase() === "text/javascript")) {
                        bB.push(bJ[bF].parentNode ? bJ[bF].parentNode.removeChild(bJ[bF]) : bJ[bF]);
                    } else {
                        if (bJ[bF].nodeType === 1) {
                            var bK = c.grep(bJ[bF].getElementsByTagName("script"), bG);
                            bJ.splice.apply(bJ, [bF + 1, 0].concat(bK));
                        }
                        bI.appendChild(bJ[bF]);
                    }
                }
            }
            return bJ;
        }, cleanData: function (bw) {
            var bz, bx, bv = c.cache, bE = c.expando, bC = c.event.special, bB = c.support.deleteExpando;
            for (var bA = 0, by; (by = bw[bA]) != null; bA++) {
                if (by.nodeName && c.noData[by.nodeName.toLowerCase()]) {
                    continue;
                }
                bx = by[c.expando];
                if (bx) {
                    bz = bv[bx] && bv[bx][bE];
                    if (bz && bz.events) {
                        for (var bD in bz.events) {
                            if (bC[bD]) {
                                c.event.remove(by, bD);
                            } else {
                                c.removeEvent(by, bD, bz.handle);
                            }
                        }
                        if (bz.handle) {
                            bz.handle.elem = null;
                        }
                    }
                    if (bB) {
                        delete by[c.expando];
                    } else {
                        if (by.removeAttribute) {
                            by.removeAttribute(c.expando);
                        }
                    }
                    delete bv[bx];
                }
            }
        }
    });

    function bp(bv, bw) {
        if (bw.src) {
            c.ajax({url: bw.src, async: false, dataType: "script"});
        } else {
            c.globalEval((bw.text || bw.textContent || bw.innerHTML || "").replace(aM, "/*$0*/"));
        }
        if (bw.parentNode) {
            bw.parentNode.removeChild(bw);
        }
    }

    var aj = /alpha\([^)]*\)/i, at = /opacity=([^)]*)/, D = /([A-Z]|^ms)/g, bc = /^-?\d+(?:px)?$/i, bo = /^-?\d/,
        M = /^([\-+])=([\-+.\de]+)/, a7 = {position: "absolute", visibility: "hidden", display: "block"},
        am = ["Left", "Right"], a2 = ["Top", "Bottom"], Z, aH, aW;
    c.fn.css = function (bv, bw) {
        if (arguments.length === 2 && bw === O) {
            return this;
        }
        return c.access(this, bv, bw, true, function (by, bx, bz) {
            return bz !== O ? c.style(by, bx, bz) : c.css(by, bx);
        });
    };
    c.extend({
        cssHooks: {
            opacity: {
                get: function (bx, bw) {
                    if (bw) {
                        var bv = Z(bx, "opacity", "opacity");
                        return bv === "" ? "1" : bv;
                    } else {
                        return bx.style.opacity;
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {"float": c.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (bx, bw, bD, by) {
            if (!bx || bx.nodeType === 3 || bx.nodeType === 8 || !bx.style) {
                return;
            }
            var bB, bC, bz = c.camelCase(bw), bv = bx.style, bE = c.cssHooks[bz];
            bw = c.cssProps[bz] || bz;
            if (bD !== O) {
                bC = typeof bD;
                if (bC === "string" && (bB = M.exec(bD))) {
                    bD = (+(bB[1] + 1) * +bB[2]) + parseFloat(c.css(bx, bw));
                    bC = "number";
                }
                if (bD == null || bC === "number" && isNaN(bD)) {
                    return;
                }
                if (bC === "number" && !c.cssNumber[bz]) {
                    bD += "px";
                }
                if (!bE || !("set" in bE) || (bD = bE.set(bx, bD)) !== O) {
                    try {
                        bv[bw] = bD;
                    } catch (bA) {
                    }
                }
            } else {
                if (bE && "get" in bE && (bB = bE.get(bx, false, by)) !== O) {
                    return bB;
                }
                return bv[bw];
            }
        },
        css: function (bz, by, bw) {
            var bx, bv;
            by = c.camelCase(by);
            bv = c.cssHooks[by];
            by = c.cssProps[by] || by;
            if (by === "cssFloat") {
                by = "float";
            }
            if (bv && "get" in bv && (bx = bv.get(bz, true, bw)) !== O) {
                return bx;
            } else {
                if (Z) {
                    return Z(bz, by);
                }
            }
        },
        swap: function (by, bx, bz) {
            var bv = {};
            for (var bw in bx) {
                bv[bw] = by.style[bw];
                by.style[bw] = bx[bw];
            }
            bz.call(by);
            for (bw in bx) {
                by.style[bw] = bv[bw];
            }
        }
    });
    c.curCSS = c.css;
    c.each(["height", "width"], function (bw, bv) {
        c.cssHooks[bv] = {
            get: function (bz, by, bx) {
                var bA;
                if (by) {
                    if (bz.offsetWidth !== 0) {
                        return r(bz, bv, bx);
                    } else {
                        c.swap(bz, a7, function () {
                            bA = r(bz, bv, bx);
                        });
                    }
                    return bA;
                }
            }, set: function (bx, by) {
                if (bc.test(by)) {
                    by = parseFloat(by);
                    if (by >= 0) {
                        return by + "px";
                    }
                } else {
                    return by;
                }
            }
        };
    });
    if (!c.support.opacity) {
        c.cssHooks.opacity = {
            get: function (bw, bv) {
                return at.test((bv && bw.currentStyle ? bw.currentStyle.filter : bw.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "" : bv ? "1" : "";
            }, set: function (bz, bA) {
                var by = bz.style, bw = bz.currentStyle, bv = c.isNaN(bA) ? "" : "alpha(opacity=" + bA * 100 + ")",
                    bx = bw && bw.filter || by.filter || "";
                by.zoom = 1;
                if (bA >= 1 && c.trim(bx.replace(aj, "")) === "") {
                    by.removeAttribute("filter");
                    if (bw && !bw.filter) {
                        return;
                    }
                }
                by.filter = aj.test(bx) ? bx.replace(aj, bv) : bx + " " + bv;
            }
        };
    }
    c(function () {
        if (!c.support.reliableMarginRight) {
            c.cssHooks.marginRight = {
                get: function (bx, bw) {
                    var bv;
                    c.swap(bx, {display: "inline-block"}, function () {
                        if (bw) {
                            bv = Z(bx, "margin-right", "marginRight");
                        } else {
                            bv = bx.style.marginRight;
                        }
                    });
                    return bv;
                }
            };
        }
    });
    if (au.defaultView && au.defaultView.getComputedStyle) {
        aH = function (bz, bx) {
            var bw, by, bv;
            bx = bx.replace(D, "-$1").toLowerCase();
            if (!(by = bz.ownerDocument.defaultView)) {
                return O;
            }
            if ((bv = by.getComputedStyle(bz, null))) {
                bw = bv.getPropertyValue(bx);
                if (bw === "" && !c.contains(bz.ownerDocument.documentElement, bz)) {
                    bw = c.style(bz, bx);
                }
            }
            return bw;
        };
    }
    if (au.documentElement.currentStyle) {
        aW = function (bz, bx) {
            var bA, bw = bz.currentStyle && bz.currentStyle[bx], bv = bz.runtimeStyle && bz.runtimeStyle[bx],
                by = bz.style;
            if (!bc.test(bw) && bo.test(bw)) {
                bA = by.left;
                if (bv) {
                    bz.runtimeStyle.left = bz.currentStyle.left;
                }
                by.left = bx === "fontSize" ? "1em" : (bw || 0);
                bw = by.pixelLeft + "px";
                by.left = bA;
                if (bv) {
                    bz.runtimeStyle.left = bv;
                }
            }
            return bw === "" ? "auto" : bw;
        };
    }
    Z = aH || aW;

    function r(bx, bw, bv) {
        var bz = bw === "width" ? bx.offsetWidth : bx.offsetHeight, by = bw === "width" ? am : a2;
        if (bz > 0) {
            if (bv !== "border") {
                c.each(by, function () {
                    if (!bv) {
                        bz -= parseFloat(c.css(bx, "padding" + this)) || 0;
                    }
                    if (bv === "margin") {
                        bz += parseFloat(c.css(bx, bv + this)) || 0;
                    } else {
                        bz -= parseFloat(c.css(bx, "border" + this + "Width")) || 0;
                    }
                });
            }
            return bz + "px";
        }
        bz = Z(bx, bw, bw);
        if (bz < 0 || bz == null) {
            bz = bx.style[bw] || 0;
        }
        bz = parseFloat(bz) || 0;
        if (bv) {
            c.each(by, function () {
                bz += parseFloat(c.css(bx, "padding" + this)) || 0;
                if (bv !== "padding") {
                    bz += parseFloat(c.css(bx, "border" + this + "Width")) || 0;
                }
                if (bv === "margin") {
                    bz += parseFloat(c.css(bx, bv + this)) || 0;
                }
            });
        }
        return bz + "px";
    }

    if (c.expr && c.expr.filters) {
        c.expr.filters.hidden = function (bx) {
            var bw = bx.offsetWidth, bv = bx.offsetHeight;
            return (bw === 0 && bv === 0) || (!c.support.reliableHiddenOffsets && (bx.style.display || c.css(bx, "display")) === "none");
        };
        c.expr.filters.visible = function (bv) {
            return !c.expr.filters.hidden(bv);
        };
    }
    var m = /%20/g, ao = /\[\]$/, bt = /\r?\n/g, br = /#.*$/, aC = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        aZ = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        aL = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, aO = /^(?:GET|HEAD)$/, d = /^\/\//,
        P = /\?/, a6 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, t = /^(?:select|textarea)/i, j = /\s+/,
        bs = /([?&])_=[^&]*/, N = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, E = c.fn.load, aa = {}, u = {}, aD,
        w, aS = ["*/"] + ["*"];
    try {
        aD = bl.href;
    } catch (av) {
        aD = au.createElement("a");
        aD.href = "";
        aD = aD.href;
    }
    w = N.exec(aD.toLowerCase()) || [];

    function g(bv) {
        return function (bz, bB) {
            if (typeof bz !== "string") {
                bB = bz;
                bz = "*";
            }
            if (c.isFunction(bB)) {
                var by = bz.toLowerCase().split(j), bx = 0, bA = by.length, bw, bC, bD;
                for (; bx < bA; bx++) {
                    bw = by[bx];
                    bD = /^\+/.test(bw);
                    if (bD) {
                        bw = bw.substr(1) || "*";
                    }
                    bC = bv[bw] = bv[bw] || [];
                    bC[bD ? "unshift" : "push"](bB);
                }
            }
        };
    }

    function aU(bw, bF, bA, bE, bC, by) {
        bC = bC || bF.dataTypes[0];
        by = by || {};
        by[bC] = true;
        var bB = bw[bC], bx = 0, bv = bB ? bB.length : 0, bz = (bw === aa), bD;
        for (; bx < bv && (bz || !bD); bx++) {
            bD = bB[bx](bF, bA, bE);
            if (typeof bD === "string") {
                if (!bz || by[bD]) {
                    bD = O;
                } else {
                    bF.dataTypes.unshift(bD);
                    bD = aU(bw, bF, bA, bE, bD, by);
                }
            }
        }
        if ((bz || !bD) && !by["*"]) {
            bD = aU(bw, bF, bA, bE, "*", by);
        }
        return bD;
    }

    function al(bx, by) {
        var bw, bv, bz = c.ajaxSettings.flatOptions || {};
        for (bw in by) {
            if (by[bw] !== O) {
                (bz[bw] ? bx : (bv || (bv = {})))[bw] = by[bw];
            }
        }
        if (bv) {
            c.extend(true, bx, bv);
        }
    }

    c.fn.extend({
        load: function (bx, bA, bB) {
            if (typeof bx !== "string" && E) {
                return E.apply(this, arguments);
            } else {
                if (!this.length) {
                    return this;
                }
            }
            var bz = bx.indexOf(" ");
            if (bz >= 0) {
                var bv = bx.slice(bz, bx.length);
                bx = bx.slice(0, bz);
            }
            var by = "GET";
            if (bA) {
                if (c.isFunction(bA)) {
                    bB = bA;
                    bA = O;
                } else {
                    if (typeof bA === "object") {
                        bA = c.param(bA, c.ajaxSettings.traditional);
                        by = "POST";
                    }
                }
            }
            var bw = this;
            c.ajax({
                url: bx, type: by, dataType: "html", data: bA, complete: function (bD, bC, bE) {
                    bE = bD.responseText;
                    if (bD.isResolved()) {
                        bD.done(function (bF) {
                            bE = bF;
                        });
                        bw.html(bv ? c("<div>").append(bE.replace(a6, "")).find(bv) : bE);
                    }
                    if (bB) {
                        bw.each(bB, [bE, bC, bD]);
                    }
                }
            });
            return this;
        }, serialize: function () {
            return c.param(this.serializeArray());
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? c.makeArray(this.elements) : this;
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || t.test(this.nodeName) || aZ.test(this.type));
            }).map(function (bv, bw) {
                var bx = c(this).val();
                return bx == null ? null : c.isArray(bx) ? c.map(bx, function (bz, by) {
                    return {name: bw.name, value: bz.replace(bt, "\r\n")};
                }) : {name: bw.name, value: bx.replace(bt, "\r\n")};
            }).get();
        }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (bv, bw) {
        c.fn[bw] = function (bx) {
            return this.bind(bw, bx);
        };
    });
    c.each(["get", "post"], function (bv, bw) {
        c[bw] = function (bx, bz, bA, by) {
            if (c.isFunction(bz)) {
                by = by || bA;
                bA = bz;
                bz = O;
            }
            return c.ajax({type: bw, url: bx, data: bz, success: bA, dataType: by});
        };
    });
    c.extend({
        getScript: function (bv, bw) {
            return c.get(bv, O, bw, "script");
        },
        getJSON: function (bv, bw, bx) {
            return c.get(bv, bw, bx, "json");
        },
        ajaxSetup: function (bw, bv) {
            if (bv) {
                al(bw, c.ajaxSettings);
            } else {
                bv = bw;
                bw = c.ajaxSettings;
            }
            al(bw, bv);
            return bw;
        },
        ajaxSettings: {
            url: aD,
            isLocal: aL.test(w[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": aS
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": bb.String, "text html": true, "text json": c.parseJSON, "text xml": c.parseXML},
            flatOptions: {context: true, url: true}
        },
        ajaxPrefilter: g(aa),
        ajaxTransport: g(u),
        ajax: function (bz, bx) {
            if (typeof bz === "object") {
                bx = bz;
                bz = O;
            }
            bx = bx || {};
            var bD = c.ajaxSetup({}, bx), bS = bD.context || bD,
                bG = bS !== bD && (bS.nodeType || bS instanceof c) ? c(bS) : c.event, bR = c.Deferred(),
                bN = c._Deferred(), bB = bD.statusCode || {}, bC, bH = {}, bO = {}, bQ, by, bL, bE, bI, bA = 0, bw, bK,
                bJ = {
                    readyState: 0, setRequestHeader: function (bU, bV) {
                        if (!bA) {
                            var bT = bU.toLowerCase();
                            bU = bO[bT] = bO[bT] || bU;
                            bH[bU] = bV;
                        }
                        return this;
                    }, getAllResponseHeaders: function () {
                        return bA === 2 ? bQ : null;
                    }, getResponseHeader: function (bU) {
                        var bT;
                        if (bA === 2) {
                            if (!by) {
                                by = {};
                                while ((bT = aC.exec(bQ))) {
                                    by[bT[1].toLowerCase()] = bT[2];
                                }
                            }
                            bT = by[bU.toLowerCase()];
                        }
                        return bT === O ? null : bT;
                    }, overrideMimeType: function (bT) {
                        if (!bA) {
                            bD.mimeType = bT;
                        }
                        return this;
                    }, abort: function (bT) {
                        bT = bT || "abort";
                        if (bL) {
                            bL.abort(bT);
                        }
                        bF(0, bT);
                        return this;
                    }
                };

            function bF(bZ, bU, b0, bW) {
                if (bA === 2) {
                    return;
                }
                bA = 2;
                if (bE) {
                    clearTimeout(bE);
                }
                bL = O;
                bQ = bW || "";
                bJ.readyState = bZ > 0 ? 4 : 0;
                var bT, b4, b3, bX = bU, bY = b0 ? bj(bD, bJ, b0) : O, bV, b2;
                if (bZ >= 200 && bZ < 300 || bZ === 304) {
                    if (bD.ifModified) {
                        if ((bV = bJ.getResponseHeader("Last-Modified"))) {
                            c.lastModified[bC] = bV;
                        }
                        if ((b2 = bJ.getResponseHeader("Etag"))) {
                            c.etag[bC] = b2;
                        }
                    }
                    if (bZ === 304) {
                        bX = "notmodified";
                        bT = true;
                    } else {
                        try {
                            b4 = J(bD, bY);
                            bX = "success";
                            bT = true;
                        } catch (b1) {
                            bX = "parsererror";
                            b3 = b1;
                        }
                    }
                } else {
                    b3 = bX;
                    if (!bX || bZ) {
                        bX = "error";
                        if (bZ < 0) {
                            bZ = 0;
                        }
                    }
                }
                bJ.status = bZ;
                bJ.statusText = "" + (bU || bX);
                if (bT) {
                    bR.resolveWith(bS, [b4, bX, bJ]);
                } else {
                    bR.rejectWith(bS, [bJ, bX, b3]);
                }
                bJ.statusCode(bB);
                bB = O;
                if (bw) {
                    bG.trigger("ajax" + (bT ? "Success" : "Error"), [bJ, bD, bT ? b4 : b3]);
                }
                bN.resolveWith(bS, [bJ, bX]);
                if (bw) {
                    bG.trigger("ajaxComplete", [bJ, bD]);
                    if (!(--c.active)) {
                        c.event.trigger("ajaxStop");
                    }
                }
            }

            bR.promise(bJ);
            bJ.success = bJ.done;
            bJ.error = bJ.fail;
            bJ.complete = bN.done;
            bJ.statusCode = function (bU) {
                if (bU) {
                    var bT;
                    if (bA < 2) {
                        for (bT in bU) {
                            bB[bT] = [bB[bT], bU[bT]];
                        }
                    } else {
                        bT = bU[bJ.status];
                        bJ.then(bT, bT);
                    }
                }
                return this;
            };
            bD.url = ((bz || bD.url) + "").replace(br, "").replace(d, w[1] + "//");
            bD.dataTypes = c.trim(bD.dataType || "*").toLowerCase().split(j);
            if (bD.crossDomain == null) {
                bI = N.exec(bD.url.toLowerCase());
                bD.crossDomain = !!(bI && (bI[1] != w[1] || bI[2] != w[2] || (bI[3] || (bI[1] === "http:" ? 80 : 443)) != (w[3] || (w[1] === "http:" ? 80 : 443))));
            }
            if (bD.data && bD.processData && typeof bD.data !== "string") {
                bD.data = c.param(bD.data, bD.traditional);
            }
            aU(aa, bD, bx, bJ);
            if (bA === 2) {
                return false;
            }
            bw = bD.global;
            bD.type = bD.type.toUpperCase();
            bD.hasContent = !aO.test(bD.type);
            if (bw && c.active++ === 0) {
                c.event.trigger("ajaxStart");
            }
            if (!bD.hasContent) {
                if (bD.data) {
                    bD.url += (P.test(bD.url) ? "&" : "?") + bD.data;
                    delete bD.data;
                }
                bC = bD.url;
                if (bD.cache === false) {
                    var bv = c.now(), bP = bD.url.replace(bs, "$1_=" + bv);
                    bD.url = bP + ((bP === bD.url) ? (P.test(bD.url) ? "&" : "?") + "_=" + bv : "");
                }
            }
            if (bD.data && bD.hasContent && bD.contentType !== false || bx.contentType) {
                bJ.setRequestHeader("Content-Type", bD.contentType);
            }
            if (bD.ifModified) {
                bC = bC || bD.url;
                if (c.lastModified[bC]) {
                    bJ.setRequestHeader("If-Modified-Since", c.lastModified[bC]);
                }
                if (c.etag[bC]) {
                    bJ.setRequestHeader("If-None-Match", c.etag[bC]);
                }
            }
            bJ.setRequestHeader("Accept", bD.dataTypes[0] && bD.accepts[bD.dataTypes[0]] ? bD.accepts[bD.dataTypes[0]] + (bD.dataTypes[0] !== "*" ? ", " + aS + "; q=0.01" : "") : bD.accepts["*"]);
            for (bK in bD.headers) {
                bJ.setRequestHeader(bK, bD.headers[bK]);
            }
            if (bD.beforeSend && (bD.beforeSend.call(bS, bJ, bD) === false || bA === 2)) {
                bJ.abort();
                return false;
            }
            for (bK in {success: 1, error: 1, complete: 1}) {
                bJ[bK](bD[bK]);
            }
            bL = aU(u, bD, bx, bJ);
            if (!bL) {
                bF(-1, "No Transport");
            } else {
                bJ.readyState = 1;
                if (bw) {
                    bG.trigger("ajaxSend", [bJ, bD]);
                }
                if (bD.async && bD.timeout > 0) {
                    bE = setTimeout(function () {
                        bJ.abort("timeout");
                    }, bD.timeout);
                }
                try {
                    bA = 1;
                    bL.send(bH, bF);
                } catch (bM) {
                    if (bA < 2) {
                        bF(-1, bM);
                    } else {
                        c.error(bM);
                    }
                }
            }
            return bJ;
        },
        param: function (bv, bx) {
            var bw = [], bz = function (bA, bB) {
                bB = c.isFunction(bB) ? bB() : bB;
                bw[bw.length] = encodeURIComponent(bA) + "=" + encodeURIComponent(bB);
            };
            if (bx === O) {
                bx = c.ajaxSettings.traditional;
            }
            if (c.isArray(bv) || (bv.jquery && !c.isPlainObject(bv))) {
                c.each(bv, function () {
                    bz(this.name, this.value);
                });
            } else {
                for (var by in bv) {
                    z(by, bv[by], bx, bz);
                }
            }
            return bw.join("&").replace(m, "+");
        }
    });

    function z(bx, bz, bw, by) {
        if (c.isArray(bz)) {
            c.each(bz, function (bB, bA) {
                if (bw || ao.test(bx)) {
                    by(bx, bA);
                } else {
                    z(bx + "[" + (typeof bA === "object" || c.isArray(bA) ? bB : "") + "]", bA, bw, by);
                }
            });
        } else {
            if (!bw && bz != null && typeof bz === "object") {
                for (var bv in bz) {
                    z(bx + "[" + bv + "]", bz[bv], bw, by);
                }
            } else {
                by(bx, bz);
            }
        }
    }

    c.extend({active: 0, lastModified: {}, etag: {}});

    function bj(bE, bD, bA) {
        var bw = bE.contents, bC = bE.dataTypes, bx = bE.responseFields, bz, bB, by, bv;
        for (bB in bx) {
            if (bB in bA) {
                bD[bx[bB]] = bA[bB];
            }
        }
        while (bC[0] === "*") {
            bC.shift();
            if (bz === O) {
                bz = bE.mimeType || bD.getResponseHeader("content-type");
            }
        }
        if (bz) {
            for (bB in bw) {
                if (bw[bB] && bw[bB].test(bz)) {
                    bC.unshift(bB);
                    break;
                }
            }
        }
        if (bC[0] in bA) {
            by = bC[0];
        } else {
            for (bB in bA) {
                if (!bC[0] || bE.converters[bB + " " + bC[0]]) {
                    by = bB;
                    break;
                }
                if (!bv) {
                    bv = bB;
                }
            }
            by = by || bv;
        }
        if (by) {
            if (by !== bC[0]) {
                bC.unshift(by);
            }
            return bA[by];
        }
    }

    function J(bI, bA) {
        if (bI.dataFilter) {
            bA = bI.dataFilter(bA, bI.dataType);
        }
        var bE = bI.dataTypes, bH = {}, bB, bF, bx = bE.length, bC, bD = bE[0], by, bz, bG, bw, bv;
        for (bB = 1; bB < bx; bB++) {
            if (bB === 1) {
                for (bF in bI.converters) {
                    if (typeof bF === "string") {
                        bH[bF.toLowerCase()] = bI.converters[bF];
                    }
                }
            }
            by = bD;
            bD = bE[bB];
            if (bD === "*") {
                bD = by;
            } else {
                if (by !== "*" && by !== bD) {
                    bz = by + " " + bD;
                    bG = bH[bz] || bH["* " + bD];
                    if (!bG) {
                        bv = O;
                        for (bw in bH) {
                            bC = bw.split(" ");
                            if (bC[0] === by || bC[0] === "*") {
                                bv = bH[bC[1] + " " + bD];
                                if (bv) {
                                    bw = bH[bw];
                                    if (bw === true) {
                                        bG = bv;
                                    } else {
                                        if (bv === true) {
                                            bG = bw;
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (!(bG || bv)) {
                        c.error("No conversion from " + bz.replace(" ", " to "));
                    }
                    if (bG !== true) {
                        bA = bG ? bG(bA) : bv(bw(bA));
                    }
                }
            }
        }
        return bA;
    }

    var aB = c.now(), y = /(\=)\?(&|$)|\?\?/i;
    c.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return c.expando + "_" + (aB++);
        }
    });
    c.ajaxPrefilter("json jsonp", function (bE, bB, bD) {
        var by = bE.contentType === "application/x-www-form-urlencoded" && (typeof bE.data === "string");
        if (bE.dataTypes[0] === "jsonp" || bE.jsonp !== false && (y.test(bE.url) || by && y.test(bE.data))) {
            var bC, bx = bE.jsonpCallback = c.isFunction(bE.jsonpCallback) ? bE.jsonpCallback() : bE.jsonpCallback,
                bA = bb[bx], bv = bE.url, bz = bE.data, bw = "$1" + bx + "$2";
            if (bE.jsonp !== false) {
                bv = bv.replace(y, bw);
                if (bE.url === bv) {
                    if (by) {
                        bz = bz.replace(y, bw);
                    }
                    if (bE.data === bz) {
                        bv += (/\?/.test(bv) ? "&" : "?") + bE.jsonp + "=" + bx;
                    }
                }
            }
            bE.url = bv;
            bE.data = bz;
            bb[bx] = function (bF) {
                bC = [bF];
            };
            bD.always(function () {
                bb[bx] = bA;
                if (bC && c.isFunction(bA)) {
                    bb[bx](bC[0]);
                }
            });
            bE.converters["script json"] = function () {
                if (!bC) {
                    c.error(bx + " was not called");
                }
                return bC[0];
            };
            bE.dataTypes[0] = "json";
            return "script";
        }
    });
    c.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (bv) {
                c.globalEval(bv);
                return bv;
            }
        }
    });
    c.ajaxPrefilter("script", function (bv) {
        if (bv.cache === O) {
            bv.cache = false;
        }
        if (bv.crossDomain) {
            bv.type = "GET";
            bv.global = false;
        }
    });
    c.ajaxTransport("script", function (bx) {
        if (bx.crossDomain) {
            var bv, bw = au.head || au.getElementsByTagName("head")[0] || au.documentElement;
            return {
                send: function (by, bz) {
                    bv = au.createElement("script");
                    bv.async = "async";
                    if (bx.scriptCharset) {
                        bv.charset = bx.scriptCharset;
                    }
                    bv.src = bx.url;
                    bv.onload = bv.onreadystatechange = function (bB, bA) {
                        if (bA || !bv.readyState || /loaded|complete/.test(bv.readyState)) {
                            bv.onload = bv.onreadystatechange = null;
                            if (bw && bv.parentNode) {
                                bw.removeChild(bv);
                            }
                            bv = O;
                            if (!bA) {
                                bz(200, "success");
                            }
                        }
                    };
                    bw.insertBefore(bv, bw.firstChild);
                }, abort: function () {
                    if (bv) {
                        bv.onload(0, 1);
                    }
                }
            };
        }
    });
    var F = bb.ActiveXObject ? function () {
        for (var bv in Q) {
            Q[bv](0, 1);
        }
    } : false, C = 0, Q;

    function aK() {
        try {
            return new bb.XMLHttpRequest();
        } catch (bv) {
        }
    }

    function ai() {
        try {
            return new bb.ActiveXObject("Microsoft.XMLHTTP");
        } catch (bv) {
        }
    }

    c.ajaxSettings.xhr = bb.ActiveXObject ? function () {
        return !this.isLocal && aK() || ai();
    } : aK;
    (function (bv) {
        c.extend(c.support, {ajax: !!bv, cors: !!bv && ("withCredentials" in bv)});
    })(c.ajaxSettings.xhr());
    if (c.support.ajax) {
        c.ajaxTransport(function (bv) {
            if (!bv.crossDomain || c.support.cors) {
                var bw;
                return {
                    send: function (bC, bx) {
                        var bB = bv.xhr(), bA, bz;
                        if (bv.username) {
                            bB.open(bv.type, bv.url, bv.async, bv.username, bv.password);
                        } else {
                            bB.open(bv.type, bv.url, bv.async);
                        }
                        if (bv.xhrFields) {
                            for (bz in bv.xhrFields) {
                                bB[bz] = bv.xhrFields[bz];
                            }
                        }
                        if (bv.mimeType && bB.overrideMimeType) {
                            bB.overrideMimeType(bv.mimeType);
                        }
                        if (!bv.crossDomain && !bC["X-Requested-With"]) {
                            bC["X-Requested-With"] = "XMLHttpRequest";
                        }
                        try {
                            for (bz in bC) {
                                bB.setRequestHeader(bz, bC[bz]);
                            }
                        } catch (by) {
                        }
                        bB.send((bv.hasContent && bv.data) || null);
                        bw = function (bL, bF) {
                            var bG, bE, bD, bJ, bI;
                            try {
                                if (bw && (bF || bB.readyState === 4)) {
                                    bw = O;
                                    if (bA) {
                                        bB.onreadystatechange = c.noop;
                                        if (F) {
                                            delete Q[bA];
                                        }
                                    }
                                    if (bF) {
                                        if (bB.readyState !== 4) {
                                            bB.abort();
                                        }
                                    } else {
                                        bG = bB.status;
                                        bD = bB.getAllResponseHeaders();
                                        bJ = {};
                                        bI = bB.responseXML;
                                        if (bI && bI.documentElement) {
                                            bJ.xml = bI;
                                        }
                                        bJ.text = bB.responseText;
                                        try {
                                            bE = bB.statusText;
                                        } catch (bK) {
                                            bE = "";
                                        }
                                        if (!bG && bv.isLocal && !bv.crossDomain) {
                                            bG = bJ.text ? 200 : 404;
                                        } else {
                                            if (bG === 1223) {
                                                bG = 204;
                                            }
                                        }
                                    }
                                }
                            } catch (bH) {
                                if (!bF) {
                                    bx(-1, bH);
                                }
                            }
                            if (bJ) {
                                bx(bG, bE, bJ, bD);
                            }
                        };
                        if (!bv.async || bB.readyState === 4) {
                            bw();
                        } else {
                            bA = ++C;
                            if (F) {
                                if (!Q) {
                                    Q = {};
                                    c(bb).unload(F);
                                }
                                Q[bA] = bw;
                            }
                            bB.onreadystatechange = bw;
                        }
                    }, abort: function () {
                        if (bw) {
                            bw(0, 1);
                        }
                    }
                };
            }
        });
    }
    var U = {}, a8, p, aA = /^(?:toggle|show|hide)$/, aQ = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, a3,
        aG = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
        a4;
    c.fn.extend({
        show: function (by, bB, bA) {
            var bx, bz;
            if (by || by === 0) {
                return this.animate(a1("show", 3), by, bB, bA);
            } else {
                for (var bw = 0, bv = this.length; bw < bv; bw++) {
                    bx = this[bw];
                    if (bx.style) {
                        bz = bx.style.display;
                        if (!c._data(bx, "olddisplay") && bz === "none") {
                            bz = bx.style.display = "";
                        }
                        if (bz === "" && c.css(bx, "display") === "none") {
                            c._data(bx, "olddisplay", B(bx.nodeName));
                        }
                    }
                }
                for (bw = 0; bw < bv; bw++) {
                    bx = this[bw];
                    if (bx.style) {
                        bz = bx.style.display;
                        if (bz === "" || bz === "none") {
                            bx.style.display = c._data(bx, "olddisplay") || "";
                        }
                    }
                }
                return this;
            }
        }, hide: function (bx, bA, bz) {
            if (bx || bx === 0) {
                return this.animate(a1("hide", 3), bx, bA, bz);
            } else {
                for (var bw = 0, bv = this.length; bw < bv; bw++) {
                    if (this[bw].style) {
                        var by = c.css(this[bw], "display");
                        if (by !== "none" && !c._data(this[bw], "olddisplay")) {
                            c._data(this[bw], "olddisplay", by);
                        }
                    }
                }
                for (bw = 0; bw < bv; bw++) {
                    if (this[bw].style) {
                        this[bw].style.display = "none";
                    }
                }
                return this;
            }
        }, _toggle: c.fn.toggle, toggle: function (bx, bw, by) {
            var bv = typeof bx === "boolean";
            if (c.isFunction(bx) && c.isFunction(bw)) {
                this._toggle.apply(this, arguments);
            } else {
                if (bx == null || bv) {
                    this.each(function () {
                        var bz = bv ? bx : c(this).is(":hidden");
                        c(this)[bz ? "show" : "hide"]();
                    });
                } else {
                    this.animate(a1("toggle", 3), bx, bw, by);
                }
            }
            return this;
        }, fadeTo: function (bv, by, bx, bw) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: by}, bv, bx, bw);
        }, animate: function (bz, bw, by, bx) {
            var bv = c.speed(bw, by, bx);
            if (c.isEmptyObject(bz)) {
                return this.each(bv.complete, [false]);
            }
            bz = c.extend({}, bz);
            return this[bv.queue === false ? "each" : "queue"](function () {
                if (bv.queue === false) {
                    c._mark(this);
                }
                var bD = c.extend({}, bv), bK = this.nodeType === 1, bH = bK && c(this).is(":hidden"), bA, bE, bC, bJ,
                    bI, bG, bB, bF, bL;
                bD.animatedProperties = {};
                for (bC in bz) {
                    bA = c.camelCase(bC);
                    if (bC !== bA) {
                        bz[bA] = bz[bC];
                        delete bz[bC];
                    }
                    bE = bz[bA];
                    if (c.isArray(bE)) {
                        bD.animatedProperties[bA] = bE[1];
                        bE = bz[bA] = bE[0];
                    } else {
                        bD.animatedProperties[bA] = bD.specialEasing && bD.specialEasing[bA] || bD.easing || "swing";
                    }
                    if (bE === "hide" && bH || bE === "show" && !bH) {
                        return bD.complete.call(this);
                    }
                    if (bK && (bA === "height" || bA === "width")) {
                        bD.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (c.css(this, "display") === "inline" && c.css(this, "float") === "none") {
                            if (!c.support.inlineBlockNeedsLayout) {
                                this.style.display = "inline-block";
                            } else {
                                bJ = B(this.nodeName);
                                if (bJ === "inline") {
                                    this.style.display = "inline-block";
                                } else {
                                    this.style.display = "inline";
                                    this.style.zoom = 1;
                                }
                            }
                        }
                    }
                }
                if (bD.overflow != null) {
                    this.style.overflow = "hidden";
                }
                for (bC in bz) {
                    bI = new c.fx(this, bD, bC);
                    bE = bz[bC];
                    if (aA.test(bE)) {
                        bI[bE === "toggle" ? bH ? "show" : "hide" : bE]();
                    } else {
                        bG = aQ.exec(bE);
                        bB = bI.cur();
                        if (bG) {
                            bF = parseFloat(bG[2]);
                            bL = bG[3] || (c.cssNumber[bC] ? "" : "px");
                            if (bL !== "px") {
                                c.style(this, bC, (bF || 1) + bL);
                                bB = ((bF || 1) / bI.cur()) * bB;
                                c.style(this, bC, bB + bL);
                            }
                            if (bG[1]) {
                                bF = ((bG[1] === "-=" ? -1 : 1) * bF) + bB;
                            }
                            bI.custom(bB, bF, bL);
                        } else {
                            bI.custom(bB, bE, "");
                        }
                    }
                }
                return true;
            });
        }, stop: function (bw, bv) {
            if (bw) {
                this.queue([]);
            }
            this.each(function () {
                var by = c.timers, bx = by.length;
                if (!bv) {
                    c._unmark(true, this);
                }
                while (bx--) {
                    if (by[bx].elem === this) {
                        if (bv) {
                            by[bx](true);
                        }
                        by.splice(bx, 1);
                    }
                }
            });
            if (!bv) {
                this.dequeue();
            }
            return this;
        }
    });

    function bg() {
        setTimeout(ar, 0);
        return (a4 = c.now());
    }

    function ar() {
        a4 = O;
    }

    function a1(bw, bv) {
        var bx = {};
        c.each(aG.concat.apply([], aG.slice(0, bv)), function () {
            bx[this] = bw;
        });
        return bx;
    }

    c.each({
        slideDown: a1("show", 1),
        slideUp: a1("hide", 1),
        slideToggle: a1("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (bv, bw) {
        c.fn[bv] = function (bx, bz, by) {
            return this.animate(bw, bx, bz, by);
        };
    });
    c.extend({
        speed: function (bx, by, bw) {
            var bv = bx && typeof bx === "object" ? c.extend({}, bx) : {
                complete: bw || !bw && by || c.isFunction(bx) && bx,
                duration: bx,
                easing: bw && by || by && !c.isFunction(by) && by
            };
            bv.duration = c.fx.off ? 0 : typeof bv.duration === "number" ? bv.duration : bv.duration in c.fx.speeds ? c.fx.speeds[bv.duration] : c.fx.speeds._default;
            bv.old = bv.complete;
            bv.complete = function (bz) {
                if (c.isFunction(bv.old)) {
                    bv.old.call(this);
                }
                if (bv.queue !== false) {
                    c.dequeue(this);
                } else {
                    if (bz !== false) {
                        c._unmark(this);
                    }
                }
            };
            return bv;
        }, easing: {
            linear: function (bx, by, bv, bw) {
                return bv + bw * bx;
            }, swing: function (bx, by, bv, bw) {
                return ((-Math.cos(bx * Math.PI) / 2) + 0.5) * bw + bv;
            }
        }, timers: [], fx: function (bw, bv, bx) {
            this.options = bv;
            this.elem = bw;
            this.prop = bx;
            bv.orig = bv.orig || {};
        }
    });
    c.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            (c.fx.step[this.prop] || c.fx.step._default)(this);
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop];
            }
            var bv, bw = c.css(this.elem, this.prop);
            return isNaN(bv = parseFloat(bw)) ? !bw || bw === "auto" ? 0 : bw : bv;
        }, custom: function (bA, bz, by) {
            var bv = this, bx = c.fx;
            this.startTime = a4 || bg();
            this.start = bA;
            this.end = bz;
            this.unit = by || this.unit || (c.cssNumber[this.prop] ? "" : "px");
            this.now = this.start;
            this.pos = this.state = 0;

            function bw(bB) {
                return bv.step(bB);
            }

            bw.elem = this.elem;
            if (bw() && c.timers.push(bw) && !a3) {
                a3 = setInterval(bx.tick, bx.interval);
            }
        }, show: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            c(this.elem).show();
        }, hide: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0);
        }, step: function (bz) {
            var by = a4 || bg(), bv = true, bA = this.elem, bw = this.options, bx, bC;
            if (bz || by >= bw.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                bw.animatedProperties[this.prop] = true;
                for (bx in bw.animatedProperties) {
                    if (bw.animatedProperties[bx] !== true) {
                        bv = false;
                    }
                }
                if (bv) {
                    if (bw.overflow != null && !c.support.shrinkWrapBlocks) {
                        c.each(["", "X", "Y"], function (bD, bE) {
                            bA.style["overflow" + bE] = bw.overflow[bD];
                        });
                    }
                    if (bw.hide) {
                        c(bA).hide();
                    }
                    if (bw.hide || bw.show) {
                        for (var bB in bw.animatedProperties) {
                            c.style(bA, bB, bw.orig[bB]);
                        }
                    }
                    bw.complete.call(bA);
                }
                return false;
            } else {
                if (bw.duration == Infinity) {
                    this.now = by;
                } else {
                    bC = by - this.startTime;
                    this.state = bC / bw.duration;
                    this.pos = c.easing[bw.animatedProperties[this.prop]](this.state, bC, 0, 1, bw.duration);
                    this.now = this.start + ((this.end - this.start) * this.pos);
                }
                this.update();
            }
            return true;
        }
    };
    c.extend(c.fx, {
        tick: function () {
            for (var bw = c.timers, bv = 0; bv < bw.length; ++bv) {
                if (!bw[bv]()) {
                    bw.splice(bv--, 1);
                }
            }
            if (!bw.length) {
                c.fx.stop();
            }
        }, interval: 13, stop: function () {
            clearInterval(a3);
            a3 = null;
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (bv) {
                c.style(bv.elem, "opacity", bv.now);
            }, _default: function (bv) {
                if (bv.elem.style && bv.elem.style[bv.prop] != null) {
                    bv.elem.style[bv.prop] = (bv.prop === "width" || bv.prop === "height" ? Math.max(0, bv.now) : bv.now) + bv.unit;
                } else {
                    bv.elem[bv.prop] = bv.now;
                }
            }
        }
    });
    if (c.expr && c.expr.filters) {
        c.expr.filters.animated = function (bv) {
            return c.grep(c.timers, function (bw) {
                return bv === bw.elem;
            }).length;
        };
    }

    function B(by) {
        if (!U[by]) {
            var bv = au.body, bw = c("<" + by + ">").appendTo(bv), bx = bw.css("display");
            bw.remove();
            if (bx === "none" || bx === "") {
                if (!a8) {
                    a8 = au.createElement("iframe");
                    a8.frameBorder = a8.width = a8.height = 0;
                }
                bv.appendChild(a8);
                if (!p || !a8.createElement) {
                    p = (a8.contentWindow || a8.contentDocument).document;
                    p.write((au.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>");
                    p.close();
                }
                bw = p.createElement(by);
                p.body.appendChild(bw);
                bx = c.css(bw, "display");
                bv.removeChild(a8);
            }
            U[by] = bx;
        }
        return U[by];
    }

    var X = /^t(?:able|d|h)$/i, ad = /^(?:body|html)$/i;
    if ("getBoundingClientRect" in au.documentElement) {
        c.fn.offset = function (bI) {
            var by = this[0], bB;
            if (bI) {
                return this.each(function (bJ) {
                    c.offset.setOffset(this, bI, bJ);
                });
            }
            if (!by || !by.ownerDocument) {
                return null;
            }
            if (by === by.ownerDocument.body) {
                return c.offset.bodyOffset(by);
            }
            try {
                bB = by.getBoundingClientRect();
            } catch (bF) {
            }
            var bH = by.ownerDocument, bw = bH.documentElement;
            if (!bB || !c.contains(bw, by)) {
                return bB ? {top: bB.top, left: bB.left} : {top: 0, left: 0};
            }
            var bC = bH.body, bD = aJ(bH), bA = bw.clientTop || bC.clientTop || 0,
                bE = bw.clientLeft || bC.clientLeft || 0,
                bv = bD.pageYOffset || c.support.boxModel && bw.scrollTop || bC.scrollTop,
                bz = bD.pageXOffset || c.support.boxModel && bw.scrollLeft || bC.scrollLeft, bG = bB.top + bv - bA,
                bx = bB.left + bz - bE;
            return {top: bG, left: bx};
        };
    } else {
        c.fn.offset = function (bG) {
            var bA = this[0];
            if (bG) {
                return this.each(function (bH) {
                    c.offset.setOffset(this, bG, bH);
                });
            }
            if (!bA || !bA.ownerDocument) {
                return null;
            }
            if (bA === bA.ownerDocument.body) {
                return c.offset.bodyOffset(bA);
            }
            c.offset.initialize();
            var bD, bx = bA.offsetParent, bw = bA, bF = bA.ownerDocument, by = bF.documentElement, bB = bF.body,
                bC = bF.defaultView, bv = bC ? bC.getComputedStyle(bA, null) : bA.currentStyle, bE = bA.offsetTop,
                bz = bA.offsetLeft;
            while ((bA = bA.parentNode) && bA !== bB && bA !== by) {
                if (c.offset.supportsFixedPosition && bv.position === "fixed") {
                    break;
                }
                bD = bC ? bC.getComputedStyle(bA, null) : bA.currentStyle;
                bE -= bA.scrollTop;
                bz -= bA.scrollLeft;
                if (bA === bx) {
                    bE += bA.offsetTop;
                    bz += bA.offsetLeft;
                    if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && X.test(bA.nodeName))) {
                        bE += parseFloat(bD.borderTopWidth) || 0;
                        bz += parseFloat(bD.borderLeftWidth) || 0;
                    }
                    bw = bx;
                    bx = bA.offsetParent;
                }
                if (c.offset.subtractsBorderForOverflowNotVisible && bD.overflow !== "visible") {
                    bE += parseFloat(bD.borderTopWidth) || 0;
                    bz += parseFloat(bD.borderLeftWidth) || 0;
                }
                bv = bD;
            }
            if (bv.position === "relative" || bv.position === "static") {
                bE += bB.offsetTop;
                bz += bB.offsetLeft;
            }
            if (c.offset.supportsFixedPosition && bv.position === "fixed") {
                bE += Math.max(by.scrollTop, bB.scrollTop);
                bz += Math.max(by.scrollLeft, bB.scrollLeft);
            }
            return {top: bE, left: bz};
        };
    }
    c.offset = {
        initialize: function () {
            var bv = au.body, bw = au.createElement("div"), bz, bB, bA, bC,
                bx = parseFloat(c.css(bv, "marginTop")) || 0,
                by = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            c.extend(bw.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            bw.innerHTML = by;
            bv.insertBefore(bw, bv.firstChild);
            bz = bw.firstChild;
            bB = bz.firstChild;
            bC = bz.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (bB.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (bC.offsetTop === 5);
            bB.style.position = "fixed";
            bB.style.top = "20px";
            this.supportsFixedPosition = (bB.offsetTop === 20 || bB.offsetTop === 15);
            bB.style.position = bB.style.top = "";
            bz.style.overflow = "hidden";
            bz.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (bB.offsetTop === -5);
            this.doesNotIncludeMarginInBodyOffset = (bv.offsetTop !== bx);
            bv.removeChild(bw);
            c.offset.initialize = c.noop;
        }, bodyOffset: function (bv) {
            var bx = bv.offsetTop, bw = bv.offsetLeft;
            c.offset.initialize();
            if (c.offset.doesNotIncludeMarginInBodyOffset) {
                bx += parseFloat(c.css(bv, "marginTop")) || 0;
                bw += parseFloat(c.css(bv, "marginLeft")) || 0;
            }
            return {top: bx, left: bw};
        }, setOffset: function (by, bH, bB) {
            var bC = c.css(by, "position");
            if (bC === "static") {
                by.style.position = "relative";
            }
            var bA = c(by), bw = bA.offset(), bv = c.css(by, "top"), bF = c.css(by, "left"),
                bG = (bC === "absolute" || bC === "fixed") && c.inArray("auto", [bv, bF]) > -1, bE = {}, bD = {}, bx,
                bz;
            if (bG) {
                bD = bA.position();
                bx = bD.top;
                bz = bD.left;
            } else {
                bx = parseFloat(bv) || 0;
                bz = parseFloat(bF) || 0;
            }
            if (c.isFunction(bH)) {
                bH = bH.call(by, bB, bw);
            }
            if (bH.top != null) {
                bE.top = (bH.top - bw.top) + bx;
            }
            if (bH.left != null) {
                bE.left = (bH.left - bw.left) + bz;
            }
            if ("using" in bH) {
                bH.using.call(by, bE);
            } else {
                bA.css(bE);
            }
        }
    };
    c.fn.extend({
        position: function () {
            if (!this[0]) {
                return null;
            }
            var bx = this[0], bw = this.offsetParent(), by = this.offset(),
                bv = ad.test(bw[0].nodeName) ? {top: 0, left: 0} : bw.offset();
            by.top -= parseFloat(c.css(bx, "marginTop")) || 0;
            by.left -= parseFloat(c.css(bx, "marginLeft")) || 0;
            bv.top += parseFloat(c.css(bw[0], "borderTopWidth")) || 0;
            bv.left += parseFloat(c.css(bw[0], "borderLeftWidth")) || 0;
            return {top: by.top - bv.top, left: by.left - bv.left};
        }, offsetParent: function () {
            return this.map(function () {
                var bv = this.offsetParent || au.body;
                while (bv && (!ad.test(bv.nodeName) && c.css(bv, "position") === "static")) {
                    bv = bv.offsetParent;
                }
                return bv;
            });
        }
    });
    c.each(["Left", "Top"], function (bw, bv) {
        var bx = "scroll" + bv;
        c.fn[bx] = function (bA) {
            var by, bz;
            if (bA === O) {
                by = this[0];
                if (!by) {
                    return null;
                }
                bz = aJ(by);
                return bz ? ("pageXOffset" in bz) ? bz[bw ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && bz.document.documentElement[bx] || bz.document.body[bx] : by[bx];
            }
            return this.each(function () {
                bz = aJ(this);
                if (bz) {
                    bz.scrollTo(!bw ? bA : c(bz).scrollLeft(), bw ? bA : c(bz).scrollTop());
                } else {
                    this[bx] = bA;
                }
            });
        };
    });

    function aJ(bv) {
        return c.isWindow(bv) ? bv : bv.nodeType === 9 ? bv.defaultView || bv.parentWindow : false;
    }

    c.each(["Height", "Width"], function (bw, bv) {
        var bx = bv.toLowerCase();
        c.fn["inner" + bv] = function () {
            var by = this[0];
            return by && by.style ? parseFloat(c.css(by, bx, "padding")) : null;
        };
        c.fn["outer" + bv] = function (bz) {
            var by = this[0];
            return by && by.style ? parseFloat(c.css(by, bx, bz ? "margin" : "border")) : null;
        };
        c.fn[bx] = function (bA) {
            var bB = this[0];
            if (!bB) {
                return bA == null ? null : this;
            }
            if (c.isFunction(bA)) {
                return this.each(function (bF) {
                    var bE = c(this);
                    bE[bx](bA.call(this, bF, bE[bx]()));
                });
            }
            if (c.isWindow(bB)) {
                var bC = bB.document.documentElement["client" + bv], by = bB.document.body;
                return bB.document.compatMode === "CSS1Compat" && bC || by && by["client" + bv] || bC;
            } else {
                if (bB.nodeType === 9) {
                    return Math.max(bB.documentElement["client" + bv], bB.body["scroll" + bv], bB.documentElement["scroll" + bv], bB.body["offset" + bv], bB.documentElement["offset" + bv]);
                } else {
                    if (bA === O) {
                        var bD = c.css(bB, bx), bz = parseFloat(bD);
                        return c.isNaN(bz) ? bD : bz;
                    } else {
                        return this.css(bx, typeof bA === "string" ? bA : bA + "px");
                    }
                }
            }
        };
    });
    bb.jQuery = bb.$ = c;
})(window);
/*!
* jMarker - JavaScript Template using FreeMarker Syntax
* http://code.google.com/p/jmarker/
*
* Copyright 2010 - 2011, sanshi.me
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jmarker.googlecode.com/svn/trunk/license/license.htm
*
* Version: 1.3.6
* Date: Aug 05, 2011
*/
var jMarker = (function () {
    function M(ab) {
        var aa = "";
        do {
            aa = String.fromCharCode(Math.random(0, 1) * 200 + 200);
        } while (ab.indexOf(aa) >= 0);
        return aa;
    }

    function g() {
        if (typeof(console) !== "undefined") {
            console.log("==START==");
            for (var aa = 0; aa < arguments.length; aa++) {
                console.log(arguments[aa]);
            }
            console.log("==END==");
        }
    }

    function p(ac, ad) {
        if (ad.indexOf) {
            return ad.indexOf(ac);
        }
        for (var aa = 0, ab = ad.length; aa < ab; aa++) {
            if (ad[aa] === ac) {
                return aa;
            }
        }
        return -1;
    }

    function N(ad, ag, ai) {
        var aj = /[\[\]{}()'"]/;
        var af = ag.length, ae = "", ah = [], aa = [], ac;

        function ab(al, ak) {
            return p(al + ak, ["[]", "][", "{}", "}{", "()", ")(", "''", '""']) >= 0;
        }

        while (ad < af) {
            ae = ag.charAt(ad);
            if (ah.length === 0) {
                if (typeof(ai) === "string" ? (ai === ae) : ai.test(ae)) {
                    ad++;
                    break;
                } else {
                    if (aj.test(ae)) {
                        ah.push(ae);
                    }
                }
            } else {
                if (aj.test(ae)) {
                    ac = ah[ah.length - 1];
                    if (ab(ae, ac)) {
                        ah.pop();
                    } else {
                        if (ac !== '"' && ac !== "'") {
                            ah.push(ae);
                        }
                    }
                }
            }
            ad++;
            aa.push(ae);
        }
        return [ad, aa];
    }

    function V(ac) {
        var ab = typeof(ac);
        if (ab === "object") {
            var aa = Object.prototype.toString.call(ac);
            if (aa === "[object Array]") {
                return "array";
            } else {
                if (aa === "[object Date]") {
                    return "datetime";
                }
            }
        }
        return ab;
    }

    function F(aa) {
        switch (aa) {
            case"string":
                return "";
                break;
            case"number":
                return 0;
                break;
            case"boolean":
                return false;
                break;
            case"object":
                return {};
                break;
            case"array":
                return [];
                break;
            case"datetime":
                return new Date();
                break;
            default:
                return "";
                break;
        }
    }

    function j(ag) {
        var ak = [], ac = 0, af = ag.length, ae = "", aa = [], ad;
        ag = ag.replace(/[\r\n\t]/g, " ");

        function aj(am) {
            var al = N(ac, ag, am);
            ac = al[0];
            aa = aa.concat(al[1]);
            if (aa.length === 0) {
                ak.push("");
            } else {
                ah();
            }
        }

        function ab() {
            while (ac < af) {
                ae = ag.charAt(ac);
                if (ae === "-" && ag.charAt(ac + 1) === "-" && ag.charAt(ac + 2) === ">") {
                    ac += 3;
                    ah();
                    return;
                }
                ac++;
                aa.push(ae);
            }
        }

        function ah() {
            if (aa.length > 0) {
                ak.push(aa.join(""));
                aa = [];
            }
        }

        function ai(an) {
            var al = 0, am = an.length;
            for (; al < am; al++) {
                if (ag.charAt(ac + al) !== an.charAt(al)) {
                    return false;
                }
            }
            return true;
        }

        while (ac < af) {
            ae = ag.charAt(ac);
            if (ae === "<") {
                if (ai("<#--")) {
                    ac += 4;
                    ah();
                    ak.push("<#--");
                    ab();
                    continue;
                } else {
                    if (ai("<#")) {
                        ac += 2;
                        ah();
                        ak.push("<#");
                        aj(/[\s>]/);
                        if (ag.charAt(ac - 1) === ">") {
                            ac--;
                        }
                        aj(">");
                        continue;
                    } else {
                        if (ai("</#")) {
                            ac += 3;
                            ah();
                            ak.push("</#");
                            aj(">");
                            continue;
                        } else {
                            if (ai("<@")) {
                                ac += 2;
                                ah();
                                ak.push("<@");
                                aj(/[\/\s>]/);
                                if (ag.charAt(ac - 1) === ">" || ag.charAt(ac - 1) === "/") {
                                    ac--;
                                }
                                aj(">");
                                if (ag.charAt(ac - 2) === "/") {
                                    ad = ak[ak.length - 1];
                                    ak[ak.length - 1] = ad.substr(0, ad.length - 1);
                                } else {
                                    ak[ak.length - 3] = "<@@";
                                }
                                continue;
                            } else {
                                if (ai("</@")) {
                                    ac += 3;
                                    ah();
                                    ak.push("</@");
                                    aj(">");
                                    continue;
                                }
                            }
                        }
                    }
                }
            } else {
                if (ae === "$") {
                    if (ai("${")) {
                        ac += 2;
                        ah();
                        ak.push("${");
                        aj("}");
                        continue;
                    }
                }
            }
            ac++;
            aa.push(ae);
        }
        ah();
        return ak;
    }

    function w(an) {
        if (typeof(an) === "string") {
            an = j(an);
        }

        function ae(aG) {
            var aD = 0, aE = aG.length, ay = [], aF, aA, aH;
            while (aD < aE) {
                aF = N(aD, aG, "=");
                aA = K.trim(aF[1].join(""));
                if (aD === 0) {
                    if (aA.indexOf(" ") === -1) {
                        ay.push(aA);
                    } else {
                        var ax = aA.split(" "), az, aC = 0, aB = ax.length;
                        for (; aC < aB; aC++) {
                            az = K.trim(ax[aC]);
                            if (az) {
                                ay.push(az);
                                ay.push(undefined);
                            }
                        }
                        if (aG.charAt(aF[0] - 1) === "=") {
                            ay.pop();
                        }
                    }
                } else {
                    if (aF[0] === aE) {
                        ay.push(X(aA));
                    } else {
                        aH = aA.lastIndexOf(" ");
                        if (aH > 0) {
                            ay.push(K.trim(aA.substr(0, aH)));
                            ay.push(X(aA.substr(aH + 1)));
                        }
                    }
                }
                aD = aF[0];
            }
            return ay;
        }

        function aa() {
            var ax = [], az = arguments, aA = az.length;

            function ay() {
                var aB = 0;
                for (; aB < aA; aB++) {
                    if (an[ar + aB] !== az[aB]) {
                        return false;
                    }
                }
                return true;
            }

            ar++;
            while (1) {
                if (ay()) {
                    break;
                }
                ax.push(an[ar]);
                ar++;
            }
            ar++;
            return ax;
        }

        function af(aC) {
            var ay = ae(aC), aA, az, aB = ay.length, ax = [];
            for (az = 0; az < aB; az += 2) {
                aA = ay[az];
                if (p(aA, al) === -1) {
                    al.push(aA);
                    ax.push("var ");
                }
                ax.push(aA + "=" + X(ay[az + 1]) + ";");
            }
            return ax.join("");
        }

        function ag(aD) {
            var aB, az, ay, aA, aC, ax = [];
            aB = /(.*?)\s+as\s+([$\w]+)/.exec(aD);
            if (aB && aB.length && aB.length === 3) {
                az = X(aB[1]);
                ay = aB[2];
                aA = ay + "_index";
                aC = ay + "_has_next";
                ax.push("(function(){");
                if (!/^\w+$/.test(az)) {
                    ax.push("var _list=" + az + ";");
                    az = "_list";
                }
                ax.push(["var __i=0", "__count=" + az + ".length", ay, aA, aC + ";"].join(","));
                ax.push("for(;__i<__count;__i++){");
                ax.push(ay + "=" + az + "[__i];");
                ax.push(aA + "=__i;");
                ax.push(aC + "=(__i!==__count-1);");
            }
            return ax.join("");
        }

        function ac(ay) {
            var ax, aA, az;
            ax = /(.*?)\s+as\s+([$\w]+)/.exec(ay);
            if (ax && ax.length && ax.length === 3) {
                aA = X(ax[1]);
                az = ax[2];
                return "var " + az + "=jMarker.res(" + aA + ")(null, true);";
            }
            return "";
        }

        function aq(aF) {
            var az = [], aB, aE = [], aC = [], aG, ax, aA, aD, aH, ay;
            aG = ae(aF);
            ax = aG[0];
            aB = "__d_" + ax;
            ai.push(ax);
            aD = aG.length;
            for (aA = 2; aA < aD; aA += 2) {
                ay = aG[aA + 1];
                if (ay) {
                    aH = aB + "." + aG[aA];
                    aE.push("if(!jMarker.exists(" + aH + ")){" + aH + "=" + ay + ";}");
                }
            }
            aC = aa("</#", "macro");
            az.push(J(aC, true, ax, aE.join("")));
            return az.join("");
        }

        function av(aG) {
            var az = [], aB = [], aF = [], aD = [], aH, ax, aC, aE, aI, ay, aA;
            aH = ae(aG);
            ax = aH[0];
            ai.push(ax);
            aE = aH.length;
            for (aC = 2; aC < aE; aC += 2) {
                aI = aH[aC];
                ay = aH[aC + 1];
                aB.push(aI);
                if (ay) {
                    aF.push(aI + "=" + aI + "||" + ay + ";");
                }
            }
            aD = aa("</#", "function");
            aA = w(aD);
            az.push("function " + ax + "(" + aB.join(",") + "){");
            az.push(aF.join(""));
            az.push(aA[0]);
            az.push("}");
            return az.join("");
        }

        function at(aB) {
            var ax = [], az = 0, aA = aB.length, ay = [], aC;
            ax.push("__nested(");
            if (aB) {
                while (az < aA) {
                    aC = N(az, aB, ",");
                    ay.push(X(aC[1].join("")));
                    az = aC[0];
                }
                az = 0;
                aA = ay.length;
                for (; az < aA; az++) {
                    ax.push(ay[az]);
                    ax.push(",");
                }
                ax[ax.length - 1] = ")";
            } else {
                ax.push(")");
            }
            return ax.join("");
        }

        function ad(ax, ay) {
            au = ax;
            ay = K.trim(ay);
            switch (ax) {
                case"if":
                    am.push("if(" + X(ay) + "){");
                    break;
                case"else":
                    am.push("}else{");
                    break;
                case"elseif":
                    am.push("}else if(" + X(ay) + "){");
                    break;
                case"switch":
                    aj = true;
                    am.push("switch(" + X(ay) + "){");
                    break;
                case"case":
                    am.push("case " + X(ay) + ":");
                    break;
                case"break":
                    am.push("break;");
                    break;
                case"default":
                    am.push("default:");
                    break;
                case"local":
                case"assign":
                    am.push(af(ay));
                    break;
                case"list":
                    am.push(ag(ay));
                    break;
                case"include":
                    ab("jMarker.res(" + ay + ")(__d)");
                    break;
                case"import":
                    am.push(ac(ay));
                    break;
                case"macro":
                    am.push(aq(ay));
                    break;
                case"nested":
                    ab(at(ay));
                    break;
                case"function":
                    am.push(av(ay));
                    break;
                case"return":
                    if (ay) {
                        am.push("return " + X(ay) + ";");
                    } else {
                        am.push('return __o.join("");');
                    }
                    break;
                default:
                    break;
            }
        }

        function ak(ax) {
            au = ax;
            switch (ax) {
                case"if":
                    am.push("}");
                    break;
                case"switch":
                    aj = false;
                    am.push("}");
                    break;
                case"list":
                    am.push("}})();");
                    break;
                default:
                    break;
            }
        }

        function ap(aF, ax, aG) {
            var aH, aC, aE, az = [], aD = [], ay, aB, aA;
            ay = aG.lastIndexOf(";");
            if (ay >= 0) {
                aB = aG.substr(ay + 1);
                if (aB.indexOf('"') === -1 && aB.indexOf("'") === -1) {
                    aG = aG.substr(0, ay);
                }
            }
            aH = ae(aG);
            aE = aH.length;
            az.push(ax);
            az.push("({");
            for (aC = 0; aC < aE; aC += 2) {
                az.push(aH[aC]);
                az.push(":");
                az.push(X(aH[aC + 1]));
                if (aC < aE - 2) {
                    az.push(",");
                }
            }
            az.push("}");
            if (aF === "<@") {
                az.push(")");
            } else {
                az.push(",");
                aD = aa("</@", ax);
                aA = w(aD);
                az.push("function(" + aB + "){");
                az.push("var __o=[];");
                az.push(aA[0]);
                az.push('return __o.join("");');
                az.push("}");
                az.push(")");
            }
            ab(az.join(""));
        }

        function ab(ax) {
            am.push("__o.push(" + ax + ");");
        }

        function ao(ax) {
            if (aj && (au === "switch" || au === "break")) {
                return;
            }
            ax = ax.replace(/'/g, "\\'");
            if (ax !== "") {
                am.push("__o.push('" + ax + "');");
            }
        }

        var ar, ah = an.length, aw, am = [], ai = [], al = [], aj = false, au = "";
        ar = 0;
        while (ar < ah) {
            aw = an[ar];
            switch (aw) {
                case"<#":
                    ad(an[++ar], an[++ar]);
                    break;
                case"</#":
                    ak(an[++ar]);
                    break;
                case"<#--":
                    ar++;
                    break;
                case"${":
                    ab(X(an[++ar]));
                    break;
                case"<@@":
                case"<@":
                    ap(aw, an[++ar], an[++ar]);
                    break;
                default:
                    ao(aw);
                    break;
            }
            ar++;
        }
        return [am.join("")].concat(ai);
    }

    function J(ae, aj, aa, ah) {
        var ab = [], ac = w(ae);
        var ai = "__d";
        if (aj) {
            ai += "_" + aa;
            ab.push("function ");
            ab.push(aa);
            ab.push("(" + ai + ",__nested)");
            ab.push("{");
        }
        ab.push("var __o=[];");
        ab.push(ai + "=" + ai + "||{};");
        ab.push(ah);
        ab.push("with(" + ai + "){");
        ab.push(ac[0]);
        ab.push("}");
        if (aj) {
            ab.push('return __o.join("");');
            ab.push("}");
        } else {
            var af = ac.length, ad, ag;
            if (af > 1) {
                ab.push('if(!__macro){return __o.join("");}');
                ab.push("else{return {");
                ab.push('__result: __o.join("")');
                ab.push(",");
                for (ad = 1; ad < af; ad++) {
                    ag = ac[ad];
                    ab.push(ag + ": " + ag);
                    if (ad !== af - 1) {
                        ab.push(",");
                    }
                }
                ab.push("}}");
            } else {
                ab.push('return __o.join("");');
            }
        }
        return ab.join("");
    }

    function X(af) {
        af = K.trim(af);
        if (af.indexOf("?") === -1 && af.indexOf("!") === -1 && af.indexOf("..") === -1) {
            return af;
        }
        var aa = [], ag, ac, ae, ab, ad;
        ag = Q(af);
        ad = Z(ag);
        u(ag, ad);
        for (ac = 0, ae = ag.length; ac < ae; ac++) {
            ab = ag[ac];
            if (typeof(ab[2]) !== "undefined") {
                aa.push(ab[2]);
            } else {
                aa.push(ab[1]);
            }
        }
        return aa.join("");
    }

    function Z(am) {
        var an = {"?": [], "??": [], "!": [], "..": []};
        var ai = 0, aj = am.length, ae, ab, ak, al, ac, ao;
        var ag = /[\[{(]/, ad = /[\]})]/;

        function ap(aq) {
            if (aq < aj) {
                return am[aq];
            }
            return null;
        }

        function ah(ar, aq) {
            return p(ar + aq, ["[]", "][", "{}", "}{", "()", ")("]) >= 0;
        }

        function af(au) {
            var at = au, ar, aq = [];
            for (; at >= 0; at--) {
                ar = am[at];
                if (aq.length > 0) {
                    if (ar[0] === "punctuation") {
                        if (ag.test(ar[1])) {
                            if (ah(ar[1], aq[aq.length - 1])) {
                                aq.pop();
                            }
                        } else {
                            if (ad.test(ar[1])) {
                                aq.push(ar[1]);
                            }
                        }
                    }
                } else {
                    if (ar[0] === "opeartor") {
                        break;
                    } else {
                        if (ar[0] === "punctuation") {
                            if (ag.test(ar[1])) {
                                break;
                            } else {
                                if (ad.test(ar[1])) {
                                    aq.push(ar[1]);
                                }
                            }
                        }
                    }
                }
            }
            return at + 1;
        }

        function aa(au) {
            var at = au, ar, aq = [];
            for (; at < aj; at++) {
                ar = am[at];
                if (aq.length > 0) {
                    if (ar[0] === "punctuation") {
                        if (ad.test(ar[1])) {
                            if (ah(ar[1], aq[aq.length - 1])) {
                                aq.pop();
                            }
                        } else {
                            if (ag.test(ar[1])) {
                                aq.push(ar[1]);
                            }
                        }
                    }
                } else {
                    if (ar[0] === "opeartor") {
                        break;
                    } else {
                        if (ar[0] === "punctuation") {
                            if (ad.test(ar[1])) {
                                break;
                            } else {
                                if (ag.test(ar[1])) {
                                    aq.push(ar[1]);
                                }
                            }
                        }
                    }
                }
            }
            return at - 1;
        }

        for (; ai < aj; ai++) {
            ae = am[ai];
            if (ae[0] === "opeartor") {
                if (ae[1] === "?") {
                    ab = ap(ai + 1);
                    if (ab && ab[0] === "opeartor" && ab[1] === "?") {
                        al = af(ai - 1);
                        an["??"].push([al, ai]);
                        ai++;
                    } else {
                        al = af(ai - 1);
                        ac = aa(ai + 1);
                        ak = ap(ac + 1);
                        if (ak && ak[0] === "opeartor" && ak[1] === ":") {
                            continue;
                        }
                        ao = [al, ai, ac];
                        while (ak && ak[0] === "opeartor" && ak[1] === "?") {
                            ac = aa(ac + 2);
                            ao.push(ac);
                            ak = ap(ac + 1);
                        }
                        an["?"].push(ao);
                        ai = ac;
                    }
                } else {
                    if (ae[1] === "!") {
                        ab = ap(ai + 1);
                        if (ab && ab[0] === "opeartor" && ab[1] === "=") {
                            continue;
                        }
                        al = af(ai - 1);
                        ac = aa(ai + 1);
                        if (al !== ai) {
                            if (ac === ai) {
                                an["!"].push([al, ai]);
                            } else {
                                an["!"].push([al, ai, ac]);
                            }
                        }
                    }
                }
            } else {
                if (ae[0] === "punctuation") {
                    if (ae[1] === ".") {
                        ab = ap(ai + 1);
                        if (ab && ab[0] === "punctuation" && ab[1] === ".") {
                            al = af(ai - 1);
                            ac = aa(ai + 2);
                            an[".."].push([al, ai, ac]);
                            ai++;
                        }
                    }
                }
            }
        }
        return an;
    }

    function Q(am) {
        var ak = [], ae = 0, ah = am.length, ag = "", ab = [];
        var aj = /[\[\]{}\(\)\.]/, ai = /[+\-*\/&%=<>!?|,;\:]/, aq = /[\w\$]/, ac = /[0-9]/;

        function af() {
            if (ae < ah) {
                var ar = am.charAt(ae);
                ab.push(ar);
                ae++;
                return ar;
            }
            return null;
        }

        function an() {
            if (ae < ah) {
                return am.charAt(ae);
            }
            return null;
        }

        function ap(ar) {
            while (ae < ah) {
                ag = an();
                if (ar.test(ag)) {
                    af();
                } else {
                    break;
                }
            }
        }

        function aa(ar) {
            while (ae < ah) {
                ag = af();
                if (ag === ar) {
                    break;
                }
            }
        }

        function ad() {
            if (ab.length > 0) {
                ak.push(["word", ab.join("")]);
                ab = [];
            }
        }

        function ao(ar) {
            af();
            aa(ar);
            ak.push(["string", ab.join("")]);
            ab = [];
        }

        function al(ar) {
            af();
            ap(ac);
            if (am[ae] === "." && am[ae + 1] === ".") {
            } else {
                if (am[ae] === ".") {
                    af();
                    ap(ac);
                }
                if (am[ae] === "e" || am[ae] === "E") {
                    af();
                    if (am[ae] === "-") {
                        af();
                    }
                    ap(ac);
                }
            }
            ak.push(["number", ab.join("")]);
            ab = [];
        }

        while (ae < ah) {
            ag = am.charAt(ae);
            if (aj.test(ag)) {
                ad();
                ak.push(["punctuation", ag]);
                ae++;
            } else {
                if (ai.test(ag)) {
                    ad();
                    ak.push(["opeartor", ag]);
                    ae++;
                } else {
                    if (ag === "'" || ag === '"') {
                        ad();
                        ao(ag);
                    } else {
                        if (ac.test(ag)) {
                            ad();
                            al(ag);
                        } else {
                            if (ag !== " ") {
                                ab.push(ag);
                            }
                            ae++;
                        }
                    }
                }
            }
        }
        ad();
        return ak;
    }

    function u(al, am) {
        var ag, af, ai, ad, aa, ah;
        var ae, ac, an, aj, ak, ab;
        for (ae in am) {
            if (am.hasOwnProperty(ae)) {
                ac = am[ae];
                for (ag = 0, ai = ac.length; ag < ai; ag++) {
                    an = ac[ag];
                    if (ae === "??") {
                        ah = "jMarker.exists(typeof(" + al[an[0]][1] + ')==="undefined"?undefined:' + al[an[0]][1];
                        al[an[0]][2] = ah;
                        al[an[1]][2] = ")";
                        al[an[1] + 1][2] = "";
                    } else {
                        if (ae === "!") {
                            ah = "jMarker.defaultValue(typeof(" + al[an[0]][1] + ')==="undefined"?undefined:' + al[an[0]][1];
                            if (an.length === 2) {
                                al[an[0]][2] = ah;
                                al[an[1]][2] = ")";
                            } else {
                                al[an[0]][2] = ah;
                                al[an[1]][2] = ",";
                                al[an[2]][2] = al[an[2]][1] + ")";
                            }
                        } else {
                            if (ae === "?") {
                                al[an[0]][2] = "jMarker.builtins(" + al[an[0]][1];
                                for (af = 1, aa = an.length - 1; af < aa; af++) {
                                    aj = an[af] + 1;
                                    if (af === 1) {
                                        aj--;
                                    }
                                    al[aj][2] = ",";
                                    aj++;
                                    ak = an[af + 1];
                                    al[aj][2] = "['" + al[aj][1];
                                    while (aj < ak && (ab = al[aj + 1]) && !(ab[0] === "punctuation" && ab[1] === "(")) {
                                        aj++;
                                    }
                                    al[aj][2] = typeof(al[aj][2]) === "undefined" ? al[aj][1] + "'" : al[aj][2] + "'";
                                    if (aj === ak) {
                                        al[aj][2] += "]";
                                    } else {
                                        al[aj + 1][2] = ",";
                                        al[ak][2] = "]";
                                    }
                                }
                                al[an[an.length - 1]][2] += ")";
                            } else {
                                if (ae === "..") {
                                    al[an[0]][2] = "jMarker.sequence(" + al[an[0]][1];
                                    al[an[1]][2] = ",";
                                    al[an[1] + 1][2] = "";
                                    al[an[2]][2] = al[an[2]][1] + ")";
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function D(ab, aa) {
        return String.prototype.substring.apply(ab, aa);
    }

    function f(ab, aa) {
        return String.prototype.substr.apply(ab, aa);
    }

    function C(aa) {
        return JSON.stringify(aa);
    }

    function n(af, ac) {
        var ab = af.split(" "), aa, ad = 0, ae = ab.length;
        for (; ad < ae; ad++) {
            aa = ab[ad];
            if (aa !== "") {
                ab[ad] = aa[0].toUpperCase() + aa.substr(1);
                break;
            }
        }
        return ab.join(" ");
    }

    function R(af, ac) {
        var ab = af.split(" "), aa, ad = 0, ae = ab.length;
        for (; ad < ae; ad++) {
            aa = ab[ad];
            if (aa !== "") {
                ab[ad] = aa[0].toLowerCase() + aa.substr(1);
                break;
            }
        }
        return ab.join(" ");
    }

    function t(af, ac) {
        var ab = af.split(" "), aa, ad = 0, ae = ab.length;
        for (; ad < ae; ad++) {
            aa = ab[ad];
            if (aa !== "") {
                ab[ad] = aa[0].toUpperCase() + aa.substr(1).toLowerCase();
            }
        }
        return ab.join(" ");
    }

    function A(ab, aa) {
        return ab.toUpperCase();
    }

    function P(ab, aa) {
        return ab.toLowerCase();
    }

    function T(ac, ab) {
        var aa = ac.lastIndexOf(ab[0]);
        if (aa >= 0 && (aa + ab[0].length === ac.length)) {
            return true;
        }
        return false;
    }

    function y(ac, ab) {
        var aa = ac.indexOf(ab[0]);
        if (aa === 0) {
            return true;
        }
        return false;
    }

    function Y(ab, aa) {
        return ab.replace(/&/ig, "&amp;").replace(/</ig, "&lt;").replace(/>/ig, "&gt;").replace(/"/ig, "&quot;");
    }

    function h(ab, aa) {
        return b(ab, aa) !== -1;
    }

    function b(ab, aa) {
        return String.prototype.indexOf.apply(ab, aa);
    }

    function c(ab, aa) {
        return String.prototype.lastIndexOf.apply(ab, aa);
    }

    function r(ab, aa) {
        return ab.length;
    }

    function x(ah, ac) {
        var ag = ah.length, ab = ac[0], ad = ac[1] || " ", af = ad.length;
        if (ag >= ab) {
            return ah;
        }
        var aa = [], ae = ab - ag;
        do {
            if (af > ae) {
                aa.push(ad.substr(0, ae));
                ae = 0;
            } else {
                aa.push(ad);
                ae -= af;
            }
        } while (ae > 0);
        aa.push(ah);
        return aa.join("");
    }

    function m(aa, ae) {
        var ah = aa.length, ad = ae[0], ac = ae[1] || " ", ab = ac.length;
        if (ah >= ad) {
            return aa;
        }
        var ai = [], ag = ad - ah, af = 0;
        do {
            ai.push(ac);
            af += ab;
        } while (af < ad);
        return aa + ai.join("").substr(ah, ag);
    }

    function E(ac, ab) {
        var aa = ab[2] || "g";
        if (aa.indexOf("g") === -1) {
            aa += "g";
        }
        if (aa.indexOf("f") >= 0) {
            aa = aa.replace(/[fg]/g, "");
        }
        return String.prototype.replace.apply(ac, [new RegExp(ab[0], aa), ab[1]]);
    }

    function W(ab, aa) {
        return encodeURIComponent(ab);
    }

    function L(ac, ab) {
        var aa = ab[1] || "";
        return String.prototype.split.apply(ac, [new RegExp(ab[0], aa)]);
    }

    function o(ab, aa) {
        return ab + "";
    }

    function s(ab, aa) {
        return K.trim(ab);
    }

    function I(ag, ad) {
        var aa = [], ac = ag.split(" "), ab, ae = 0, af = ac.length;
        for (; ae < af; ae++) {
            ab = ac[ae];
            if (ab !== "") {
                aa.push(ab);
            }
        }
        return aa;
    }

    function U(ab, aa) {
        return Y(ab, aa).replace(/'/ig, "&#39;");
    }

    function l(ab, aa) {
        return Y(ab, aa).replace(/'/ig, "&apos;");
    }

    function B(ab, aa) {
        return ab.length;
    }

    function z(ab, aa) {
        return ab > 0 ? Math.floor(ab) : Math.ceil(ab);
    }

    function d(ab, aa) {
        return Math.round(ab);
    }

    function q(ab, aa) {
        return Math.floor(ab);
    }

    function S(ab, aa) {
        return Math.ceiling(ab);
    }

    function O(ad, ab, aa) {
        var ae = {
            substring: D,
            substr: f,
            cap_first: n,
            uncap_first: R,
            capitalize: t,
            upper_case: A,
            lower_case: P,
            ends_with: T,
            starts_with: y,
            html: Y,
            contains: h,
            index_of: b,
            last_index_of: c,
            length: r,
            left_pad: x,
            right_pad: m,
            replace: E,
            url: W,
            split: L,
            string: o,
            trim: s,
            word_list: I,
            xhtml: U,
            xml: l,
            size: B,
            js_string: C,
            "int": z,
            round: d,
            floor: q,
            ceiling: S
        };
        var ac = ae[ab];
        if (ac) {
            return ac(ad, aa);
        } else {
            return ad;
        }
    }

    function K(aa, ac) {
        if (typeof(ac) === "undefined") {
            var ab = K.res(aa);
            if (!ab) {
                ab = H(aa);
            }
            return ab;
        } else {
            try {
                return K(aa)(ac);
            } catch (ad) {
                g("jMarker(tpl)(data) error:", ad, aa, ac);
            }
        }
    }

    function H(ab) {
        var aa = null;
        try {
            aa = new Function("__d", "__macro", J(ab));
        } catch (ac) {
            aa = new Function("__d", "__macro", J(""));
            g("Compile jMarker template error:", ac, ab);
        }
        return aa;
    }

    var G = {};
    K.res = function (ab, aa) {
        if (typeof(aa) === "undefined") {
            return G[ab];
        } else {
            if (typeof(aa) === "string") {
                G[ab] = H(aa);
            } else {
                G[ab] = aa;
            }
        }
    };
    K.precompile = function () {
        var ae = arguments[0], ag = Array.prototype.slice.call(arguments, 1), ad = 0, af = ag.length, ai, ab, aa,
            ac = "";

        function ah(ak, aj) {
            var al = ak.lastIndexOf(aj);
            if (al >= 0 && al + aj.length === ak.length) {
                ak = ak.substr(0, al);
            }
            return ak;
        }

        for (; ad < af; ad++) {
            ai = ag[ad];
            if (typeof(ai) === "string") {
                ab = ai;
                aa = [ai];
            } else {
                ab = ai[0];
                if (typeof(ai[1]) === "string") {
                    aa = [ai[1]];
                } else {
                    aa = ai[1];
                }
            }
            ab = ah(ab, ".txt");
            $.each(aa, function (aj, ak) {
                $.ajax({
                    async: false, dataType: "txt", url: ae + ak, cache: false, success: function (al) {
                        ac += al;
                    }
                });
            });
            K.res(ab, ac);
        }
    };
    K.trim = function (aa) {
        aa = aa || "";
        return aa.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
    };
    K.exists = function (aa) {
        return typeof(aa) !== "undefined";
    };
    K.defaultValue = function (ab, aa) {
        if (K.exists(ab)) {
            return ab;
        } else {
            if (K.exists(aa)) {
                return aa;
            } else {
                return "";
            }
        }
    };
    K.sequence = function (ad, ab) {
        var ac, aa = [];
        for (var ac = ad; ac <= ab; ac++) {
            aa.push(ac);
        }
        return aa;
    };
    K.builtins = function () {
        var ad, ae = arguments.length, aa, ac, ab;
        aa = arguments[0];
        for (ad = 1; ad < ae; ad++) {
            ac = Array.prototype.slice.call(arguments[ad], 0);
            ab = Array.prototype.shift.call(ac);
            aa = O(aa, ab, ac);
        }
        return aa;
    };
    K._intermediate = j;
    K._scripts = J;
    K._tokens = Q;
    K._sepcialChars = Z;
    K._expression = X;
    K._extendTokens = u;
    return K;
})();
var i18n = {};
i18n.message = function (b) {
    if (b.arguments) {
        return WWF.lang.getByLang(WWF.CONFIG.lang, b.code, b.arguments);
    } else {
        return WWF.lang.get(b.code);
    }
};
var HEMISPHERE_SOUTH = "SOUTH";
var HEMISPHERE_NORTH = "NORTH";
var HEMISPHERE_UNKNOWN = "N/A";
var olson = {};
olson.timezones = {
    "-720,0": new TimeZone("-12:00", "Etc/GMT+12", false),
    "-660,0": new TimeZone("-11:00", "Pacific/Pago_Pago", false),
    "-600,1": new TimeZone("-11:00", "America/Adak", true),
    "-660,1,s": new TimeZone("-11:00", "Pacific/Apia", true),
    "-600,0": new TimeZone("-10:00", "Pacific/Honolulu", false),
    "-570,0": new TimeZone("-10:30", "Pacific/Marquesas", false),
    "-540,0": new TimeZone("-09:00", "Pacific/Gambier", false),
    "-540,1": new TimeZone("-09:00", "America/Anchorage", true),
    "-480,1": new TimeZone("-08:00", "America/Los_Angeles", true),
    "-480,0": new TimeZone("-08:00", "Pacific/Pitcairn", false),
    "-420,0": new TimeZone("-07:00", "America/Phoenix", false),
    "-420,1": new TimeZone("-07:00", "America/Denver", true),
    "-360,0": new TimeZone("-06:00", "America/Guatemala", false),
    "-360,1": new TimeZone("-06:00", "America/Chicago", true),
    "-360,1,s": new TimeZone("-06:00", "Pacific/Easter", true),
    "-300,0": new TimeZone("-05:00", "America/Bogota", false),
    "-300,1": new TimeZone("-05:00", "America/New_York", true),
    "-270,0": new TimeZone("-04:30", "America/Caracas", false),
    "-240,1": new TimeZone("-04:00", "America/Halifax", true),
    "-240,0": new TimeZone("-04:00", "America/Santo_Domingo", false),
    "-240,1,s": new TimeZone("-04:00", "America/Asuncion", true),
    "-210,1": new TimeZone("-03:30", "America/St_Johns", true),
    "-180,1": new TimeZone("-03:00", "America/Godthab", true),
    "-180,0": new TimeZone("-03:00", "America/Argentina/Buenos_Aires", false),
    "-180,1,s": new TimeZone("-03:00", "America/Montevideo", true),
    "-120,0": new TimeZone("-02:00", "America/Noronha", false),
    "-120,1": new TimeZone("-02:00", "Etc/GMT+2", true),
    "-60,1": new TimeZone("-01:00", "Atlantic/Azores", true),
    "-60,0": new TimeZone("-01:00", "Atlantic/Cape_Verde", false),
    "0,0": new TimeZone("00:00", "Etc/UTC", false),
    "0,1": new TimeZone("00:00", "Europe/London", true),
    "60,1": new TimeZone("+01:00", "Europe/Berlin", true),
    "60,0": new TimeZone("+01:00", "Africa/Lagos", false),
    "60,1,s": new TimeZone("+01:00", "Africa/Windhoek", true),
    "120,1": new TimeZone("+02:00", "Asia/Beirut", true),
    "120,0": new TimeZone("+02:00", "Africa/Johannesburg", false),
    "180,1": new TimeZone("+03:00", "Europe/Moscow", true),
    "180,0": new TimeZone("+03:00", "Asia/Baghdad", false),
    "210,1": new TimeZone("+03:30", "Asia/Tehran", true),
    "240,0": new TimeZone("+04:00", "Asia/Dubai", false),
    "240,1": new TimeZone("+04:00", "Asia/Yerevan", true),
    "270,0": new TimeZone("+04:30", "Asia/Kabul", false),
    "300,1": new TimeZone("+05:00", "Asia/Yekaterinburg", true),
    "300,0": new TimeZone("+05:00", "Asia/Karachi", false),
    "330,0": new TimeZone("+05:30", "Asia/Kolkata", false),
    "345,0": new TimeZone("+05:45", "Asia/Kathmandu", false),
    "360,0": new TimeZone("+06:00", "Asia/Dhaka", false),
    "360,1": new TimeZone("+06:00", "Asia/Omsk", true),
    "390,0": new TimeZone("+06:30", "Asia/Rangoon", false),
    "420,1": new TimeZone("+07:00", "Asia/Krasnoyarsk", true),
    "420,0": new TimeZone("+07:00", "Asia/Jakarta", false),
    "480,0": new TimeZone("+08:00", "Asia/Shanghai", false),
    "480,1": new TimeZone("+08:00", "Asia/Irkutsk", true),
    "525,0": new TimeZone("+08:45", "Australia/Eucla", true),
    "525,1,s": new TimeZone("+08:45", "Australia/Eucla", true),
    "540,1": new TimeZone("+09:00", "Asia/Yakutsk", true),
    "540,0": new TimeZone("+09:00", "Asia/Tokyo", false),
    "570,0": new TimeZone("+09:30", "Australia/Darwin", false),
    "570,1,s": new TimeZone("+09:30", "Australia/Adelaide", true),
    "600,0": new TimeZone("+10:00", "Australia/Brisbane", false),
    "600,1": new TimeZone("+10:00", "Asia/Vladivostok", true),
    "600,1,s": new TimeZone("+10:00", "Australia/Sydney", true),
    "630,1,s": new TimeZone("+10:30", "Australia/Lord_Howe", true),
    "660,1": new TimeZone("+11:00", "Asia/Kamchatka", true),
    "660,0": new TimeZone("+11:00", "Pacific/Noumea", false),
    "690,0": new TimeZone("+11:30", "Pacific/Norfolk", false),
    "720,1,s": new TimeZone("+12:00", "Pacific/Auckland", true),
    "720,0": new TimeZone("+12:00", "Pacific/Tarawa", false),
    "765,1,s": new TimeZone("+12:45", "Pacific/Chatham", true),
    "780,0": new TimeZone("+13:00", "Pacific/Tongatapu", false),
    "840,0": new TimeZone("+14:00", "Pacific/Kiritimati", false)
};
olson.dst_start_dates = {
    "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
    "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
    "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
    "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
    "Atlantic/Stanley": new Date(2011, 8, 4, 7, 0, 0, 0),
    "America/Asuncion": new Date(2011, 9, 2, 3, 0, 0, 0),
    "America/Santiago": new Date(2011, 9, 9, 3, 0, 0, 0),
    "America/Campo_Grande": new Date(2011, 9, 16, 5, 0, 0, 0),
    "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
    "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
    "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
    "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
    "America/Havana": new Date(2011, 2, 13, 2, 0, 0, 0),
    "America/New_York": new Date(2011, 2, 13, 7, 0, 0, 0),
    "Asia/Gaza": new Date(2011, 2, 26, 23, 0, 0, 0),
    "Asia/Beirut": new Date(2011, 2, 27, 1, 0, 0, 0),
    "Europe/Minsk": new Date(2011, 2, 27, 3, 0, 0, 0),
    "Europe/Istanbul": new Date(2011, 2, 27, 7, 0, 0, 0),
    "Asia/Damascus": new Date(2011, 3, 1, 2, 0, 0, 0),
    "Asia/Jerusalem": new Date(2011, 3, 1, 6, 0, 0, 0),
    "Africa/Cairo": new Date(2011, 3, 29, 4, 0, 0, 0),
    "Asia/Yerevan": new Date(2011, 2, 27, 4, 0, 0, 0),
    "Asia/Baku": new Date(2011, 2, 27, 8, 0, 0, 0),
    "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
    "Pacific/Fiji": new Date(2010, 11, 29, 23, 0, 0, 0),
    "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
    "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
    "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
    "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0)
};
olson.ambiguity_list = {
    "America/Denver": ["America/Denver", "America/Mazatlan"],
    "America/Chicago": ["America/Chicago", "America/Mexico_City"],
    "America/Asuncion": ["Atlantic/Stanley", "America/Asuncion", "America/Santiago", "America/Campo_Grande"],
    "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
    "Asia/Beirut": ["Asia/Gaza", "Asia/Beirut", "Europe/Minsk", "Europe/Istanbul", "Asia/Damascus", "Asia/Jerusalem", "Africa/Cairo"],
    "Asia/Yerevan": ["Asia/Yerevan", "Asia/Baku"],
    "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
    "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
    "America/New_York": ["America/Havana", "America/New_York"],
    "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
    "America/Godthab": ["America/Miquelon", "America/Godthab"]
};

function TimeZone(d, c, b) {
    this.utc_offset = d;
    this.olson_tz = c;
    this.uses_dst = b;
}

TimeZone.prototype.display = function () {
    this.ambiguity_check();
    var b = "<b>UTC-offset</b>: " + this.utc_offset + "<br/>";
    b += "<b>Zoneinfo key</b>: " + this.olson_tz + "<br/>";
    b += "<b>Zone uses DST</b>: " + (this.uses_dst ? "yes" : "no") + "<br/>";
    return b;
};
TimeZone.prototype.ambiguity_check = function () {
    var b = olson.ambiguity_list[this.olson_tz];
    if (typeof(b) == "undefined") {
        return;
    }
    var d = b.length;
    for (var c = 0; c < d; c++) {
        var f = b[c];
        if (date_is_dst(olson.dst_start_dates[f])) {
            this.olson_tz = f;
            return;
        }
    }
};

function date_is_dst(c) {
    var d = ((c.getMonth() > 5 ? get_june_offset() : get_january_offset()));
    var b = get_date_offset(c);
    return (d - b) != 0;
}

function get_date_offset(b) {
    return -b.getTimezoneOffset();
}

function get_timezone_info() {
    var b = get_january_offset();
    var c = get_june_offset();
    var d = b - c;
    if (d < 0) {
        return {utc_offset: b, dst: 1, hemisphere: HEMISPHERE_NORTH};
    } else {
        if (d > 0) {
            return {utc_offset: c, dst: 1, hemisphere: HEMISPHERE_SOUTH};
        }
    }
    return {utc_offset: b, dst: 0, hemisphere: HEMISPHERE_UNKNOWN};
}

function get_january_offset() {
    return get_date_offset(new Date(2011, 0, 1, 0, 0, 0, 0));
}

function get_june_offset() {
    return get_date_offset(new Date(2011, 5, 1, 0, 0, 0, 0));
}

function determine_timezone() {
    var d = get_timezone_info();
    var c = "";
    if (d.hemisphere == HEMISPHERE_SOUTH) {
        c = ",s";
    }
    var b = d.utc_offset + "," + d.dst + c;
    return {timezone: olson.timezones[b], key: b};
}

/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
(function () {
    var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    Math.uuid = function (c, g) {
        var j = b, f = [];
        g = g || j.length;
        if (c) {
            for (var d = 0; d < c; d++) {
                f[d] = j[0 | Math.random() * g];
            }
        } else {
            var h;
            f[8] = f[13] = f[18] = f[23] = "-";
            f[14] = "4";
            for (var d = 0; d < 36; d++) {
                if (!f[d]) {
                    h = 0 | Math.random() * 16;
                    f[d] = j[(d == 19) ? (h & 3) | 8 : h];
                }
            }
        }
        return f.join("");
    };
    Math.uuidFast = function () {
        var h = b, f = new Array(36), d = 0, g;
        for (var c = 0; c < 36; c++) {
            if (c == 8 || c == 13 || c == 18 || c == 23) {
                f[c] = "-";
            } else {
                if (c == 14) {
                    f[c] = "4";
                } else {
                    if (d <= 2) {
                        d = 33554432 + (Math.random() * 16777216) | 0;
                    }
                    g = d & 15;
                    d = d >> 4;
                    f[c] = h[(c == 19) ? (g & 3) | 8 : g];
                }
            }
        }
        return f.join("");
    };
    Math.uuidCompact = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (g) {
            var f = Math.random() * 16 | 0, d = g == "x" ? f : (f & 3 | 8);
            return d.toString(16);
        }).toUpperCase();
    };
})();
if (!this.JSON) {
    this.JSON = {};
}
(function () {
    function f(n) {
        return n < 10 ? "0" + n : n;
    }

    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function (key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"},
        rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key);
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
            case"string":
                return quote(value);
            case"number":
                return isFinite(value) ? String(value) : "null";
            case"boolean":
            case"null":
                return String(value);
            case"object":
                if (!value) {
                    return "null";
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null";
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v;
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        k = rep[i];
                        if (typeof k === "string") {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v);
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v);
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v;
        }
    }

    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " ";
                }
            } else {
                if (typeof space === "string") {
                    indent = space;
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
            }
            return str("", {"": value});
        };
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j;
            }
            throw new SyntaxError("JSON.parse");
        };
    }
}());
jQuery.cookie = function (c, m, p) {
    if (typeof m != "undefined") {
        p = p || {};
        if (m === null) {
            m = "";
            p = $.extend({}, p);
            p.expires = -1;
        }
        var g = "";
        if (p.expires && (typeof p.expires == "number" || p.expires.toUTCString)) {
            var h;
            if (typeof p.expires == "number") {
                h = new Date();
                h.setTime(h.getTime() + (p.expires * 24 * 60 * 60 * 1000));
            } else {
                h = p.expires;
            }
            g = "; expires=" + h.toUTCString();
        }
        if (p.needEncode === undefined) {
            p.needEncode = true;
        }
        var o = p.path ? "; path=" + (p.path) : "";
        var j = p.domain ? "; domain=" + (p.domain) : "";
        var b = p.secure ? "; secure" : "";
        document.cookie = [c, "=", p.needEncode ? encodeURIComponent(m) : m, g, o, j, b].join("");
    } else {
        var f = null;
        if (document.cookie && document.cookie != "") {
            var n = document.cookie.split(";");
            for (var l = 0; l < n.length; l++) {
                var d = jQuery.trim(n[l]);
                if (d.substring(0, c.length + 1) == (c + "=")) {
                    f = decodeURIComponent(d.substring(c.length + 1));
                    break;
                }
            }
        }
        return f;
    }
};
/*!
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($, t) {
    var m, q = Array.prototype.slice, w = decodeURIComponent, b = $.param, d, p, A, c = $.bbq = $.bbq || {}, u, z, n,
        g = $.event.special, f = "hashchange", F = "querystring", I = "fragment", D = "elemUrlAttr", j = "location",
        o = "href", y = "src", C = /^.*\?|#.*$/g, B = /^.*\#/, l, H = {};

    function J(K) {
        return typeof K === "string";
    }

    function G(L) {
        var K = q.call(arguments, 1);
        return function () {
            return L.apply(this, K.concat(q.call(arguments)));
        };
    }

    function r(K) {
        return K.replace(/^[^#]*#?(.*)$/, "$1");
    }

    function s(K) {
        return K.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1");
    }

    function h(M, R, K, N, L) {
        var T, Q, P, S, O;
        if (N !== m) {
            P = K.match(M ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/);
            O = P[3] || "";
            if (L === 2 && J(N)) {
                Q = N.replace(M ? B : C, "");
            } else {
                S = p(P[2]);
                N = J(N) ? p[M ? I : F](N) : N;
                Q = L === 2 ? N : L === 1 ? $.extend({}, N, S) : $.extend({}, S, N);
                Q = b(Q);
                if (M) {
                    Q = Q.replace(l, w);
                }
            }
            T = P[1] + (M ? "#" : Q || !P[1] ? "?" : "") + Q + O;
        } else {
            T = R(K !== m ? K : t[j][o]);
        }
        return T;
    }

    b[F] = G(h, 0, s);
    b[I] = d = G(h, 1, r);
    d.noEscape = function (L) {
        L = L || "";
        var K = $.map(L.split(""), encodeURIComponent);
        l = new RegExp(K.join("|"), "g");
    };
    d.noEscape(",/");
    $.deparam = p = function (N, K) {
        var M = {}, L = {"true": !0, "false": !1, "null": null};
        $.each(N.replace(/\+/g, " ").split("&"), function (Q, V) {
            var P = V.split("="), U = w(P[0]), O, T = M, R = 0, W = U.split("]["), S = W.length - 1;
            if (/\[/.test(W[0]) && /\]$/.test(W[S])) {
                W[S] = W[S].replace(/\]$/, "");
                W = W.shift().split("[").concat(W);
                S = W.length - 1;
            } else {
                S = 0;
            }
            if (P.length === 2) {
                O = w(P[1]);
                if (K) {
                    O = O && !isNaN(O) ? +O : O === "undefined" ? m : L[O] !== m ? L[O] : O;
                }
                if (S) {
                    for (; R <= S; R++) {
                        U = W[R] === "" ? T.length : W[R];
                        T = T[U] = R < S ? T[U] || (W[R + 1] && isNaN(W[R + 1]) ? {} : []) : O;
                    }
                } else {
                    if ($.isArray(M[U])) {
                        M[U].push(O);
                    } else {
                        if (M[U] !== m) {
                            M[U] = [M[U], O];
                        } else {
                            M[U] = O;
                        }
                    }
                }
            } else {
                if (U) {
                    M[U] = K ? m : "";
                }
            }
        });
        return M;
    };

    function E(M, K, L) {
        if (K === m || typeof K === "boolean") {
            L = K;
            K = b[M ? I : F]();
        } else {
            K = J(K) ? K.replace(M ? B : C, "") : K;
        }
        return p(K, L);
    }

    p[F] = G(E, 0);
    p[I] = A = G(E, 1);
    $[D] || ($[D] = function (K) {
        return $.extend(H, K);
    })({a: o, base: o, iframe: y, img: y, input: y, form: "action", link: o, script: y});
    n = $[D];

    function x(N, L, M, K) {
        if (!J(M) && typeof M !== "object") {
            K = M;
            M = L;
            L = m;
        }
        return this.each(function () {
            var Q = $(this), O = L || n()[(this.nodeName || "").toLowerCase()] || "", P = O && Q.attr(O) || "";
            Q.attr(O, b[N](P, M, K));
        });
    }

    $.fn[F] = G(x, F);
    $.fn[I] = G(x, I);
    c.pushState = u = function (N, K) {
        if (J(N) && /^#/.test(N) && K === m) {
            K = 2;
        }
        var M = N !== m, L = d(t[j][o], M ? N : {}, M ? K : 2);
        t[j][o] = L + (/#/.test(L) ? "" : "#");
    };
    c.getState = z = function (K, L) {
        return K === m || typeof K === "boolean" ? A(K) : A(L)[K];
    };
    c.removeState = function (K) {
        var L = {};
        if (K !== m) {
            L = z();
            $.each($.isArray(K) ? K : arguments, function (N, M) {
                delete L[M];
            });
        }
        u(L, 2);
    };
    g[f] = $.extend(g[f], {
        add: function (K) {
            var M;

            function L(O) {
                var N = O[I] = d();
                O.getState = function (P, Q) {
                    return P === m || typeof P === "boolean" ? p(N, P) : p(N, Q)[P];
                };
                M.apply(this, arguments);
            }

            if ($.isFunction(K)) {
                M = K;
                return L;
            } else {
                M = K.handler;
                K.handler = L;
            }
        }
    });
})(jQuery, this);
/*!
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($, m, c) {
    var n, o = $.event.special, d = "location", f = "hashchange", p = "href", h = $.browser, j = document.documentMode,
        l = h.msie && (j === c || j < 8), g = "on" + f in m && !l;

    function b(q) {
        q = q || m[d][p];
        return q.replace(/^[^#]*#?(.*)$/, "$1");
    }

    $[f + "Delay"] = 100;
    o[f] = $.extend(o[f], {
        setup: function () {
            if (g) {
                return false;
            }
            $(n.start);
        }, teardown: function () {
            if (g) {
                return false;
            }
            $(n.stop);
        }
    });
    n = (function () {
        var q = {}, w, r, s, u;

        function t() {
            s = u = function (x) {
                return x;
            };
            if (l) {
                r = $('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;
                u = function () {
                    return b(r.document[d][p]);
                };
                s = function (z, x) {
                    if (z !== x) {
                        var y = r.document;
                        y.open().close();
                        y[d].hash = "#" + z;
                    }
                };
                s(b());
            }
        }

        q.start = function () {
            if (w) {
                return;
            }
            var y = b();
            s || t();
            (function x() {
                var A = b(), z = u(y);
                if (A !== y) {
                    s(y = A, z);
                    $(m).trigger(f);
                } else {
                    if (z !== y) {
                        m[d][p] = m[d][p].replace(/#.*/, "") + "#" + z;
                    }
                }
                w = setTimeout(x, $[f + "Delay"]);
            })();
        };
        q.stop = function () {
            if (!r) {
                w && clearTimeout(w);
                w = 0;
            }
        };
        return q;
    })();
})(jQuery, this);
(function (b) {
    b.fn.overlabel = function (c) {
        var f = b.extend({}, b.fn.overlabel.defaults, c);
        var d = this.filter("label[for]").map(function () {
            var g = b(this);
            var n = g.attr("for");
            var l = document.getElementById(n);
            if (!l) {
                return;
            }
            var m = b.meta ? b.extend({}, f, g.data()) : f;
            g.addClass(m.label_class);
            var h = function () {
                g.css(m.hide_css);
            };
            var j = function () {
                this.value || g.css(m.show_css);
            };
            b(l).parent().addClass(m.wrapper_class).end().keypress(h).blur(j).each(h).each(j);
            b(l).bind("paste", function () {
                h();
            });
            return this;
        });
        return f.filter ? d : d.end();
    };
    b.fn.overlabel.defaults = {
        label_class: "overlabel-apply",
        wrapper_class: "overlabel-wrapper",
        hide_css: {"text-indent": "-10000px"},
        show_css: {"text-indent": "0px", cursor: "text"},
        filter: false
    };
})(jQuery);
/*!
 * WWF  2.0
 * Copyright(c) 2009-2010 JUI JS, Inc.
 * author:colin@hf.webex.com
 */
(function ($) {
    if (!$ || /1\.(0|1|2|3)\.(0|1|2)/.test($.fn.jquery)) {
        alert("WWF requires jQuery v1.4.2 or later! ");
        return;
    }
    var complist = {}, initFn = [], zIndex = 10000, expr_class = /^(?:[\w\-_]+)?\.([\w\-_]+)/,
        expr_id = /^(?:[\w\-_]+)?#([\w\-_]+)/, expr_url = /^http[s]?:\/\/(.*)?$/;
    if (typeof WWF == "undefined") {
        WWF = {};
    }
    WWF.version = "2.0";
    var toString = Object.prototype.toString, is = function (obj, type) {
        switch (type) {
            case"Object":
                return obj === Object(obj);
                break;
            case"Null":
                return obj === null;
                break;
            case"Undefined":
                return typeof(obj) === "undefined";
                break;
            default:
                return toString.call(obj).slice(8, -1) === type;
                break;
        }
    };
    WWF.extend = function (target, source, defaults) {
        if (arguments.length == 1) {
            source = target;
            target = WWF;
        }
        if (arguments.length == 3) {
            var tmp = defaults;
            defaults = source;
            source = tmp;
            tmp = null;
        }
        $.extend(target, source, defaults);
        return target;
    };
    var _extend = function (target, source, rewrite) {
        for (var key in source) {
            if ((target[key] == undefined || rewrite) && source[key] != undefined) {
                target[key] = source[key];
            }
        }
        return target;
    };
    WWF.extendIf = function () {
        var args = Array.prototype.slice.call(arguments, 0), rewrite = args[args.length - 1], result = args[0];
        if (WWF.isBoolean(rewrite)) {
            rewrite = Boolean(rewrite);
            args.length = args.length - 1;
        } else {
            rewrite = false;
        }
        for (var i = 1; i < args.length; i++) {
            _extend(result, args[i], rewrite);
        }
        return result;
    };
    WWF.extend({
        debug: false, mockupMode: false, path: (function () {
            var result;
            try {
                a.b.c();
            } catch (e) {
                result = e.fileName || e.sourceURL;
            }
            if (!result) {
                var scripts = document.getElementsByTagName("script"), script = scripts[scripts.length - 1];
                result = script.src;
            }
            return result.substr(0, result.lastIndexOf("/"));
        })(), emptyFn: function () {
        }, namespace: function () {
            var o, d;
            $.each(arguments, function (i, v) {
                d = v.split(".");
                o = window[d[0]] = window[d[0]] || {};
                $.each(d.slice(1), function (j, v2) {
                    o = o[v2] = o[v2] || {};
                });
            });
            return o;
        }, getNextzIndex: function () {
            return zIndex++;
        }, classFromName: function (name) {
            return new Function(" try{if(" + name + "){ return " + name + "}else{return false}}catch(e){return false}")();
        }, isEmpty: function (o) {
            return (undefined === o || null === o || "" === o || ($.isArray(o) && !o.length));
        }, isElement: function (o) {
            return o ? !!o.nodeType : false;
        }, isSelector: function (v) {
            if (expr_class.test(v) || expr_id.test(v)) {
                return true;
            }
            return false;
        }, isURL: function (v, strict) {
            if (!strict) {
                return expr_url.test(v);
            } else {
                return WWF.verify.isURL(v);
            }
        }
    });
    WWF.ns = WWF.namespace;
    $.each(["Number", "Null", "Undefined", "String", "Boolean", "Date", "Object"], function (i, name) {
        WWF["is" + name] = function (obj) {
            return is(obj, name);
        };
    });
    var styleCache = {};
    WWF.extend({
        loadScript: function (content, fn, isInner, doc) {
            WWF.loadScriptAndCallback(content, fn, null, isInner, doc);
        }, loadScriptAndCallback: function (content, fn, errFn, isInner, doc) {
            var container = doc || document.getElementsByTagName("head")[0], script, done = false;
            doc = doc || document;
            script = doc.createElement("script");
            script.language = "javascript";
            script.charset = "UTF-8";
            script.type = "text/javascript";
            script.onload = script.onreadystatechange = function () {
                if (!done && (!script.readyState || "loaded" === script.readyState || "complete" === script.readyState)) {
                    done = true;
                    fn && fn();
                    script.onload = script.onreadystatechange = null;
                    script.parentNode.removeChild(script);
                    script = null;
                    return;
                }
            };
            script.onerror = function () {
                if (!done) {
                    done = true;
                    errFn && errFn();
                }
            };
            if (isInner) {
                script.text = content;
            } else {
                script.src = content;
            }
            container.appendChild(script);
            if (!done && isInner) {
                done = true;
                fn && fn();
            }
            container = null;
        }, loadStyle: function (content, fn, isInner, doc) {
            doc = doc || document;
            if (isInner) {
                var style = styleCache[doc];
                if (!style) {
                    style = styleCache[doc] = doc.createElement("style");
                    style.setAttribute("type", "text/css");
                    document.getElementsByTagName("head")[0].appendChild(style);
                }
                style.styleSheet && (style.styleSheet.cssText += content) || style.appendChild(doc.createTextNode(content));
            } else {
                var link = document.createElement("link");
                link.charset = $.charset;
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = content;
                doc.getElementsByTagName("head")[0].appendChild(link);
                var styles = doc.styleSheets, load = function () {
                    for (var i = 0; i < styles.length; i++) {
                        if (link === (styles[i].ownerNode || styles[i].owningElement)) {
                            return fn();
                        }
                    }
                    setTimeout(arguments.callee, 5);
                };
            }
            if (fn) {
                fn();
            }
        }, globalEval: function (code) {
            if (code && /\S/.test(code)) {
                var method = window.execScript ? "execScript" : "eval";
                try {
                    window[method](code);
                } catch (e) {
                    throw"WWF.globalEval:eval code error.";
                }
            }
        }
    });
    WWF.extend({
        init: function (el) {
            if (!el) {
                el = document.body;
            }
            for (var i = 0; i < initFn.length; i++) {
                initFn[i].call(this, el);
            }
        }, regInit: function (fn) {
            if ($.isFunction(fn)) {
                initFn.push(fn);
            }
        }
    });
    var ie = eval("''+/*@cc_on @_jscript_version@*/-0"), ua = navigator.userAgent.toLowerCase(),
        isSafari = /apple/i.test(navigator.vendor), isChrome = !!(top.google || top.chrome);
    var isIE11 = (ua.indexOf("trident/7") > 0 && ua.indexOf("rv:11") > 0);
    WWF.extend({
        browser: {
            version: parseInt(ie.toString().replace("5.", ""), 10),
            ie: parseInt(ie, 10),
            ie5: ie === 5.5,
            ie6: ie === 5.6,
            ie7: ie === 5.7,
            ie8: ie === 5.8,
            ie9: ie === 9,
            ie11: isIE11,
            firefox: !isSafari && !isChrome && !!top.crypto,
            opera: is(top.opera, "Opera"),
            chrome: isChrome,
            safari: isSafari
        }, flashVersion: function () {
            var f = "-", n = navigator;
            if (n.plugins && n.plugins.length) {
                navigator.plugins.refresh(false);
                for (var ii = 0; ii < n.plugins.length; ii++) {
                    if (n.plugins[ii] && n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                        f = n.plugins[ii].description.split("Shockwave Flash ")[1];
                        break;
                    }
                }
            } else {
                if (window.ActiveXObject) {
                    for (ii = 10; ii >= 2; ii--) {
                        try {
                            var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                            if (fl) {
                                f = ii + ".0";
                                break;
                            }
                        } catch (e) {
                        }
                    }
                }
            }
            return f;
        }
    });
    WWF.platform = {};
    var spf = "";
    $.each([{prop: "platform", regex: /iPhone/i, type: "iPhone"}, {
        prop: "platform",
        regex: /iPod/i,
        type: "iPod"
    }, {prop: "userAgent", regex: /iPad/i, type: "iPad"}, {
        prop: "userAgent",
        regex: /Blackberry/i,
        type: "Blackberry"
    }, {prop: "userAgent", regex: /Android/i, type: "Android"}, {
        prop: "platform",
        regex: /Mac/i,
        type: "Mac"
    }, {prop: "platform", regex: /Win/i, type: "Windows"}, {
        prop: "platform",
        regex: /Linux/i,
        type: "Linux"
    }], function (i, d) {
        var val = d.regex.test(navigator[d.prop]);
        WWF.platform[d.type] = val;
        if (val) {
            spf = " pf-" + d.type.toLowerCase();
        }
    });
    var pf = WWF.platform;
    pf.Desktop = pf.Mac || pf.Windows || (pf.Linux && !pf.Android);
    pf.Tablet = pf.iPad;
    pf.Phone = !pf.Desktop && !pf.Tablet;
    pf.iOS = pf.iPhone || pf.iPad || pf.iPod;
    pf.Standalone = !!window.navigator.standalone;
    pf.version = (function () {
        function toInt(v) {
            return parseFloat(v);
        }

        var match, ua = navigator.userAgent;
        try {
            if (pf.iPhone) {
                match = ua.match(/(iPhone\sOS)\s([\d_]+)/);
                return toInt(match[2].replace(/_/g, "."));
            }
            if (pf.iPad) {
                match = ua.match(/(iPad).*OS\s([\d_]+)/);
                return toInt(match[2].replace(/_/g, "."));
            }
            if (pf.Android) {
                return toInt(ua.match(/(Android)\s+([\d.]+)/)[2]);
            }
            if (pf.Blackberry) {
                return toInt(ua.match(/(BlackBerry).*Version\/([\d.]+)/)[2]);
            }
        } catch (e) {
        }
    })();
    WWF.isTouchDevice = (pf.Tablet || pf.Phone);
    var bw = WWF.browser, vs, getVersion = function (match, remove) {
        var vs = match[2] || match[1];
        for (i = 0; i < remove; i++) {
            vs = vs.substr(0, vs.lastIndexOf("."));
        }
        return vs;
    };
    if (bw.ie && bw.version == 7) {
        var bv = navigator.appVersion, v = bv.split(";");
        v = v[1].replace(/[ ]/g, "");
        if (v == "MSIE6.0") {
            bw.version = 6;
            bw.ie6 = true;
            bw.ie7 = false;
        }
    }
    try {
        if (bw.firefox) {
            bw.version = getVersion(/(firefox)[ \/]([\w.]+)/.exec(ua), 1);
        }
        if (bw.chrome && !pf.Android) {
            bw.version = getVersion(/(chrome)[ \/]([\w.]+)/.exec(ua), 2);
        }
        if (bw.safari || pf.Android) {
            bw.version = getVersion(/(version)[ \/]([\w.]+)/.exec(ua), 1);
        }
    } catch (e) {
    }
    var mb = WWF.browser, css = spf;
    bw = "bw-" + (mb.firefox ? "ff" : (mb.chrome ? "ch" : (mb.safari ? "sf" : (mb.ie ? "ie" : ""))));
    css = css + " " + bw + " " + bw + mb.version.toString();
    if (css.indexOf(".") > 0) {
        css = css.replace(".", "_");
    }
    if (mb.firefox && mb.version >= 4) {
        css = css + " " + bw + "4--";
    }
    if (WWF.CONFIG && WWF.CONFIG.lang) {
        css += " " + WWF.CONFIG.lang;
    } else {
        if (!WWF.CONFIG) {
            WWF.CONFIG = {};
        }
    }
    $(function () {
        $(document.body).addClass(css);
        setTimeout(function () {
            WWF.init();
        }, 10);
    });
    delete mb;
    WWF.ns("WBX.component");
    WWF.ns("WBX.app");
})(jQuery);
(function () {
    var b = false, c = /xyz/.test(function () {
        xyz;
    }) ? /\b_super\b/ : /.*/;
    this.Class = function () {
    };
    Class.extend = function (j) {
        var h = this.prototype;
        b = true;
        var g = new this();
        b = false;
        for (var f in j) {
            g[f] = typeof j[f] == "function" && typeof h[f] == "function" && c.test(j[f]) ? (function (l, m) {
                return function () {
                    var o = this._super;
                    this._super = h[l];
                    var n = m.apply(this, arguments);
                    this._super = o;
                    return n;
                };
            })(f, j[f]) : (function (l, m) {
                if (l == "defaultConfig") {
                    return $.extend({}, h[l], m);
                } else {
                    return m;
                }
            })(f, j[f]);
        }

        function d() {
            if (!b && this.init) {
                this.init.apply(this, arguments);
            }
        }

        d.prototype = g;
        d.constructor = d;
        d.extend = arguments.callee;
        return d;
    };
})();
(function () {
    function c(m, g) {
        var l = this.monitor[g], d = l.items, h;
        var n = WWF.browser.ie;
        for (var f = 0; f < d.length; f++) {
            if ((d[f].dom == m.target) || jQuery.contains(d[f].dom, m.target)) {
                h = true;
                if (g == "mouseout") {
                    if (WWF.utils.mousein(m, d[f].dom)) {
                        h = false;
                    }
                }
                if (g == "mouseover") {
                    if (m.target == d[f].dom || WWF.utils.mousein(m, d[f].dom)) {
                        h = true;
                    } else {
                        h = false;
                    }
                }
                var j = d[f];
                if (h && !j.fn.call(j.scope || this, m, j.opt)) {
                    break;
                }
            }
        }
    }

    function b(d) {
        if (!this.monitor) {
            this.monitor = {};
        }
        var f = this;
        if (!this.monitor[d]) {
            this.monitor[d] = {items: []};
        }
        this.monitor[d].fn = function (g) {
            return c.call(f, g, d);
        };
        this.dom.bind(d, this.monitor[d].fn);
    }

    WWF.Monitor = Class.extend({
        init: function (d) {
            if (WWF.isString(d) || !d.jquery) {
                d = $(d);
            }
            this.dom = d;
        }, live: function (d, g, j, h, f) {
            if (h) {
                j = WWF.utils.bindObject(j, h);
            }
            this.dom.delegate(d, g, j);
        }, die: function (d, f) {
            this.dom.die(d, f);
        }, bind: function (j, f, h, g, d) {
            if (!j) {
                return;
            }
            if (!this.monitor) {
                this.monitor = {};
            }
            var l;
            if ((WWF.isString(j) && WWF.isSelector(j))) {
                if (g) {
                    h = WWF.utils.bindObject(h, g);
                }
                if (j.jquery) {
                    j = j.selector;
                }
                this.dom.delegate(j, f, h);
                return;
            }
            j = $(j);
            l = j[0];
            if (!this.monitor[f]) {
                b.call(this, f);
            }
            this.monitor[f].items.push({
                dom: l,
                ename: f,
                fn: h,
                scope: g,
                opt: d,
                selector: j.selector || "#" + j.attr("id")
            });
        }, unbind: function (j, g, h) {
            var d = this.monitor, f;
            if (!d) {
                return;
            }

            function l(n, p, o) {
                if (!d[n]) {
                    return false;
                }
                f = d[n].items;
                if (p.jquery) {
                    p = p[0];
                }
                for (var m = 0; m < f.length; m++) {
                    if (f[m].dom == p) {
                        if (!o || o == f[m].fn) {
                            f.splice(m, 1);
                        }
                        return true;
                    }
                }
            }

            if (!g) {
                for (k in d) {
                    l(k, j, h);
                }
                return true;
            }
            l(g, j, h);
            return false;
        }, destory: function () {
            this.dom = null;
            this.monitor = null;
        }
    });
})();
(function () {
    function b(c, g, f) {
        var d;
        d = c.events.length;
        while (d--) {
            e = c.events[d];
            if (e.fn == g && c.scope == f) {
                return d;
            }
        }
        return -1;
    }

    WWF.Observable = Class.extend({
        init: function () {
            this.events = {};
            if (this._init) {
                this._init();
            }
        }, on: function (f, l, j, d) {
            if (f.indexOf(",") > 0) {
                names = f.split(",");
                for (var h = 0; h < names.length; h++) {
                    this.on(names[h], l, j, d);
                }
                return;
            }
            var g = this.events;
            f = f.toLowerCase();
            var c = g[f];
            if (!c) {
                throw WWF.utils.format("not support the event [{0}]", f);
                return false;
            }
            if (b.call(this, c, l, j) < 0) {
                c.events.push({fn: l, scope: j, options: d});
            }
            return this;
        }, un: function (d, j, h) {
            if (d.indexOf(",") > 0) {
                names = d.split(",");
                for (var g = 0; g < names.length; g++) {
                    this.un(names[g], j, h);
                }
                return;
            }
            var f = this.events, c;
            d = d.toLowerCase();
            c = f[d];
            h = h || this;
            if (j == undefined) {
                f[d] = {events: [], scope: null};
            } else {
                if ((index = b.call(this, c, j, h))) {
                    c.events.splice(index, 1);
                    return true;
                }
            }
            return false;
        }, fire: function (j, f, l) {
            var h = this.events, d, c;
            j = j.toLowerCase();
            d = h[j];
            c = d.events.length;
            if (c > 0) {
                d.firing = true;
                f = f || [];
                for (var g = 0; g < c; g++) {
                    e = d.events[g];
                    l = e.scope || l || d.scope || window;
                    if (e && e.fn.apply(l, f) === false) {
                        return false;
                    }
                }
            }
            d.firing = false;
            return true;
        }, _supportEvents: function () {
            if (!this.events) {
                this.events = {};
            }
            var f;
            for (var d = 0, c = arguments; d < c.length; d++) {
                f = c[d].toLowerCase();
                if (!this.events[f]) {
                    this.events[f] = {scope: window, events: []};
                }
            }
        }, _setEvent: function (c, f) {
            for (k in c) {
                v = c[k];
                if ($.isFunction(v)) {
                    var d = k.toLowerCase();
                    if (d.indexOf("on") == 0) {
                        d = d.substr(2, d.length - 2);
                        if (this.events[d]) {
                            if (f) {
                                this.un(d);
                            }
                            this.on(d, v, null, true);
                            delete c[k];
                        }
                    }
                }
            }
        }, clearEvents: function () {
            for (var c in this.events) {
                this.events[c].events = [];
            }
        }, destory: function () {
            this.events = null;
        }
    });
})();
(function (d, c) {
    var b = {};
    d.Component = d.Observable.extend({
        rendered: false,
        alwaysRender: true,
        autoRender: true,
        recycling: false,
        init: function (f) {
            this.events = {};
            this.config = c.extend({}, this.defaultConfig, f);
            if (f && !d.isEmpty(f.autoRender)) {
                this.autoRender = f.autoRender;
            }
            this.getId();
            if (this._init) {
                this._init(this.config);
            }
            this._addTplData("id", this.id);
            this._setEvent(this.config);
            if (this.autoRender) {
                this.render();
            }
        },
        getId: function () {
            if (this.id) {
                return this.id;
            }
            if (this.config.id) {
                this.id = this.config.id;
                return this.id;
            }
            if (this.config.name) {
                this.id = this.config.name;
                return this.id;
            }
            var f = this.templateName ? this.templateName.replace(".", "_") : "WWF";
            if (!b[f]) {
                b[f] = 0;
            }
            this.id = f + b[f]++;
            return this.id;
        },
        destory: function (g) {
            this._super();
            for (var f in this.ui) {
                this.ui[f] = null;
            }
            this.ui = null;
            if (this.monitor && !this.config.parent) {
                this.monitor.destory();
            }
            this.config = null;
            this.monitor = null;
            if (g != true && this.view) {
                this.view.remove();
            }
            this.view = null;
            this.destroyed = true;
        },
        destroy: function (f) {
            this.destory(f);
        },
        _getTemplate: function () {
            if (this.config.template) {
                return (function (f) {
                    this.process = function (g) {
                        return jMarker(f, g);
                    };
                    return this;
                })(this.config.template);
            } else {
                if (this.config.from) {
                    this.view = c(this.config.from);
                    if (this.view[0].tagName == "TEXTAREA") {
                        return this.view.val();
                    }
                } else {
                    if (this.templateName) {
                        return d.template.get(this.templateName);
                    }
                }
            }
            return false;
        },
        _createView: function () {
            var f;
            if (this.config.template) {
                this.view = c(d.utils.process(this.config.template, this.tpldata));
            } else {
                if (this.config.from) {
                    this.view = c(this.config.from);
                    this.alwaysRender = false;
                } else {
                    f = d.template.get(this.templateName);
                    try {
                        this.view = c(f.process(this.tpldata));
                    } catch (g) {
                        d.logger.error("jMarker error:in template " + this.templateName);
                    }
                }
            }
            if (this.config.clsName) {
                this.view.addClass(this.config.clsName);
            }
            if (this.config.style) {
                this.view.css(this.config.style);
            }
            if (this.recycling) {
                this.view.attr("data-recycling", true);
                this.view.attr("data-id", this.id);
            }
            this._getHandler();
        },
        _getHandler: function () {
            if (this.handler) {
                this.ui = {};
                for (var f in this.handler) {
                    var g = this.handler[f];
                    if (g.indexOf("${") >= 0) {
                        this.handler[f] = g = d.utils.process(g, this.tpldata);
                    }
                    this.ui[f] = this.view.find(g);
                }
            }
        },
        bind: function (l, g, j, h, f) {
            if (!this.monitor) {
                throw"should not call method [bind] monitor not be create";
            }
            this.monitor.bind(l, g, j, h, f);
        },
        unbind: function (j, f, h, g) {
            this.monitor.unbind(j, f, h, g);
        },
        live: function (f, h, l, j, g) {
            if (!this.monitor) {
                throw"should not call method [live] monitor not be create";
            }
            this.monitor.live(f, h, l, j, g);
        },
        die: function (f, g) {
            this.monitor.die(f, g);
        },
        render: function (f) {
            this._createView();
            if (this.config.parent && this.config.parent.monitor) {
                this.monitor = this.config.parent.monitor;
            }
            if (!this.monitor) {
                this.monitor = new d.Monitor(this.view);
            }
            if (this._beforeRender) {
                this._beforeRender();
            }
            this.renderTo = f || this.config.renderTo;
            if (this.alwaysRender) {
                this._render();
            }
            this.rendered = true;
            if (this._afterRender) {
                this._afterRender();
            }
        },
        _render: function () {
            if (!this.renderTo) {
                this.renderTo = document.body;
            }
            this.view.appendTo(this.renderTo);
        },
        _addTplData: function () {
            if (!this.tpldata) {
                this.tpldata = {};
            }
            var f = arguments, l = f.length;
            if (l === 1) {
                c.extend(this.tpldata, f[0]);
                return this;
            } else {
                if (f[0].indexOf(",") == -1 && d.isString(f[1])) {
                    this.tpldata[c.trim(f[0])] = f[1];
                    return this;
                } else {
                    var j = f[0].split(","), g;
                    for (var h = 0; h < j.length; h++) {
                        g = c.trim(j[h]);
                        this.tpldata[g] = f[1][g];
                    }
                    return this;
                }
            }
        },
        beforeMethod: function () {
        },
        afterMethod: function () {
        },
        css: function (f) {
            this.view.css(f);
            return this;
        }
    });
})(WWF, jQuery);
WWF.loadTemplate = function () {
    var b = arguments[0];
    if (jMarker.res(b)) {
        return;
    }
    var c = "", d = Array.prototype.slice.call(arguments, 1);
    $.each(d, function (g, f) {
        $.ajax({
            async: false, dataType: "txt", url: f, cache: false, success: function (h) {
                c += h;
            }
        });
    });
    jMarker.res(b, c);
};
WWF.template = {};
WWF.template.add = function (b, c) {
    jMarker.res(b, c);
};
WWF.template.get = function (c) {
    var b = jMarker.res(c);
    b.process = function (d) {
        return this(d);
    };
    return b;
};
jQuery.fn.limit = function (c, q, p) {
    var u, s, t, r, m, l, w = $(document), g;
    var o = WWF.dom.getViewportWidth(), b = WWF.dom.getViewportHeight(), d = w.scrollLeft(), h = w.scrollTop(),
        f = this.offset(), n = this.width(), j = this.height();
    if (c) {
        u = 0;
        t = o - n;
        m = t / 2;
        s = 0;
        r = b - j;
        g = b * 0.5 - j / 2;
        l = (j < 4 * b / 7) ? g : r / 2;
    } else {
        u = d;
        t = o + u - n;
        m = t / 2;
        s = h;
        r = b + s - j;
        g = b * 0.5 - j / 2 + s;
        l = (j < 4 * b / 7) ? g : (r + s) / 2;
    }
    if (m < 0) {
        m = 0;
    }
    if (l < 0) {
        l = 0;
    }
    return {minX: u, minY: s, maxX: t, maxY: r, centerX: m, centerY: l};
};
(function (f) {
    f.fn.formPrompt = function (n) {
        var l = f(this);
        var j = l.data("wwf-form-prompt"), m = f.trim(l.val());
        l.data("wwf-form-prompt", f.trim(n));
        if (m == "") {
            l.addClass("wwf-prompt");
            l.val(n);
            l.data("__prompt", true);
        }
        if (j === undefined) {
            l.bind("focus", function () {
                var o = l.data("__prompt");
                if (o) {
                    l.removeClass("wwf-prompt");
                    l.val("");
                    l.data("__prompt", false);
                }
            });
            l.blur(function () {
                var o = l.data("__prompt");
                if (!o) {
                    var p = f.trim(l.val());
                    if (p == "") {
                        l.addClass("wwf-prompt");
                        l.val(l.data("wwf-form-prompt"));
                        l.data("__prompt", true);
                    }
                }
            });
        }
    };
    var c = f.fn.val;
    f.fn.val = function () {
        var j = Array.prototype.slice.call(arguments, 0);
        if (j.length == 0) {
            var l = f(this);
            if (l.length > 0 && (l[0].tagName == "TEXTAREA" || l[0].tagName == "INPUT")) {
                if (l.data("__prompt") == true) {
                    return "";
                }
            }
        }
        return c.apply(this, j);
    };

    function b(l) {
        l = f(l);
        if (l.length <= 0) {
            return false;
        }
        if (l[0] == document.body) {
            return l;
        }
        var j = l.css("position");
        if (j == "relative" || j == "fixed" || j == "absolute") {
            return l;
        }
        return b(l.parent());
    }

    var h = {
        "top left": 0,
        "top middle": 1,
        "top right": 2,
        "right middle": 3,
        "right bottom": 4,
        "bottom middle": 5,
        "bottom left": 6,
        "left middle": 7,
        "middle middle": 8
    };

    function d(l, j) {
        var n = l.offset(), s = j.offset();
        var p = [], o = n.top - s.top, q = n.left - s.left, r = l.outerWidth(), m = l.outerHeight();
        p.push({x: q, y: o});
        p.push({x: q + r / 2, y: o});
        p.push({x: q + r, y: o});
        p.push({x: q + r, y: o + m / 2});
        p.push({x: q + r, y: o + m});
        p.push({x: q + r / 2, y: o + m});
        p.push({x: q, y: o + m});
        p.push({x: q, y: o + m / 2});
        p.push({x: q + r / 2, y: o + m / 2});
        return p;
    }

    f.fn.follow = function (A, B, o, m) {
        var q = f(this), l = f(A), s = {top: 0, left: 0, right: 0, bottom: 0};
        B = B ? B : "bottom,left";
        if (o) {
            o = f.extend(s, o);
        } else {
            o = s;
        }
        if (l.length <= 0) {
            WWF.logger.warn("$.fn.follow:Cannot find target!");
            return;
        }
        var y = 0, w = 0, x = WWF.dom.getViewportWidth(), u = WWF.dom.getViewportHeight() + WWF.dom.getScrollTop();

        function j(X, Y, W, U, V, S, P, I, G) {
            var M = {}, T, H, O, J = X.split(","), N = P.outerWidth(), Q = P.outerHeight();
            if (!G) {
                G = 1;
            }
            for (_key in h) {
                if (_key.indexOf(J[0]) >= 0 && _key.indexOf(J[1]) >= 0) {
                    T = Y[h[_key]];
                }
            }
            switch (J[0]) {
                case"left":
                    H = T.x - N + o.left;
                    break;
                case"right":
                    H = T.x + o.right;
                    break;
                case"top":
                    O = T.y - Q + o.top;
                    break;
                case"bottom":
                    O = T.y + o.bottom;
                    break;
            }
            if (J.length > 1) {
                switch (J[1]) {
                    case"left":
                        H = T.x + o.left;
                        break;
                    case"right":
                        H = T.x - N + o.right;
                        break;
                    case"top":
                        O = T.y + o.top;
                        break;
                    case"bottom":
                        O = T.y - Q + o.bottom;
                        break;
                    case"middle":
                        if (O) {
                            H = T.x - N / 2;
                        } else {
                            O = T.y - Q / 2;
                        }
                        break;
                }
            }

            function K(Z) {
                if (Z.indexOf("left") >= 0) {
                    return Z.replace("left", "right");
                } else {
                    if (Z.indexOf("right") >= 0) {
                        return Z.replace("right", "left");
                    } else {
                        return Z.replace("middle", "left");
                    }
                }
            }

            function E(Z) {
                if (Z.indexOf("top") >= 0) {
                    return Z.replace("top", "bottom");
                } else {
                    return Z.replace("bottom", "top");
                }
            }

            var F = 0;
            if (WWF.browser.firefox) {
                F = 32;
            }
            if (!(m === true)) {
                var L = X.toString(), R = 0;
                if ((I.left + H) < (W + R) || (I.left + H + N + R) > V - F) {
                    L = K(L);
                }
                if ((I.top + O) < (U + R + WWF.dom.getScrollTop()) || (I.top + O + Q + R) > S - F) {
                    L = E(L);
                }
                if (G < 3 && L != X) {
                    G++;
                    return j(L, Y, W, U, V, S, P, I, G);
                }
            }
            return {y: O, x: H, position: X};
            return false;
        }

        var p = b(q.parent());
        if (!p.length > 0) {
            return;
        }
        var t = d(l, p);
        B = B.toLowerCase();
        var C = j(B, t, y, w, x, u, q, p.offset());
        var D = l[0].ownerDocument;
        if (D != q[0].ownerDocument) {
            var n = "defaultView" in D ? D.defaultView : D.parentWindow;
            if (n.frameElement && n != n.frameElement) {
                var r = n.frameElement;
                var z = f(r).offset();
                C.y += z.top;
                C.x += z.left;
            }
        }
        q.css({position: "absolute", top: C.y, left: C.x});
        return C.position;
    };

    function g(j) {
        while (j[0] != document.body) {
            if (j.css("position") == "absolute") {
                return true;
            }
            j = j.parent();
            if (!j || j.length < 1 || j.parent() == j) {
                return false;
            }
        }
    }

    f.fn.center = function (s, q) {
        s = f(s);
        var l = b(this.parent());
        if (!l || l.length <= 0 || s.length <= 0) {
            return;
        }
        var p = d(s, l);
        var u = p[8];
        var j = this.offset(), m = this.outerWidth(), w = this.outerHeight(), t, n, r = l.offset();
        t = u.y - w / 2;
        n = u.x - m / 2;
        if (q) {
            offset = s.offset();
            if (g(l)) {
                minY = p[0].y;
            } else {
                minY = Math.max(p[0].y, WWF.dom.getScrollTop());
            }
            maxY = Math.min((WWF.dom.getScrollTop() + WWF.dom.getViewportHeight()), p[6].y + r.top);
            t = (maxY - minY) / 2 - (w / 2) + minY;
        }
        this.css({top: t, left: n, position: "absolute"});
    };
    f.fn.shadow = function (m) {
        if (WWF.browser.ie6) {
            return;
        }
        var j = f(this), l = j.data("shadow");
        if (!l) {
            l = f('<div class="wwf-shadow wwf-out"></div>');
            l.css({
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                "z-index": -1,
                display: "block"
            });
            l.appendTo(j);
            j.data("shadow", l);
        }
    };
    f.fn.aria = function (j) {
        if (j.role) {
            $this.attr("aria-role", j.role);
        }
        return $this;
    };
    f.fn.getTabbables = function (o, m) {
        var r = this, p = r.find("a,input,textarea,button"), s, u = null, q, w = [], t,
            j = String.prototype.toLowerCase;

        function n(x) {
            if (WWF.browser.firefox) {
                return false;
            }
            if (j.call(x[0].tagName) == "input" && j.call(x.attr("type")) == "radio" && x.attr("name")) {
                return true;
            }
            return false;
        }

        function l(y) {
            if (!m) {
                return false;
            }
            if (!f.isArray(m)) {
                m = [m];
            }
            y = f(y);
            var z;
            for (var x = 0; x < m.length; x++) {
                z = f(m[x]);
                if (z[0] == y[0]) {
                    return true;
                }
            }
            return false;
        }

        for (q = 0; q < p.length; q++) {
            t = f(p[q]);
            if (l(t)) {
                continue;
            }
            if (t.is(":tabbable")) {
                if (n(t)) {
                    if (u == null) {
                        u = t.attr("name");
                        if (o) {
                            s = t;
                        }
                    } else {
                        if (u == t.attr("name")) {
                            if (!o) {
                                s = t;
                            }
                        } else {
                            if (s) {
                                w.push(s);
                                s = null;
                            }
                            u = t.attr("name");
                            if (o) {
                                w.push(t);
                            }
                        }
                    }
                } else {
                    u = null;
                    if (s) {
                        w.push(s);
                        s = null;
                    }
                    w.push(t);
                }
            }
        }
        if (s) {
            w.push(s);
            s = null;
        }
        return w;
    };
    f.fn.getLastTabElement = function (m, j) {
        var l = this.getTabbables(m, j);
        if (l.length > 0) {
            return l[l.length - 1];
        } else {
            return null;
        }
    };
    f.fn.getFirstTabElement = function (o, j) {
        var m = this.getTabbables(o, j);
        var n = this, l = n.find("a,input,textarea,button");
        if (m.length > 0) {
            return m[0];
        } else {
            return null;
        }
    };
})(jQuery);
(function (b) {
    function c(d) {
        return !b(d).parents().andSelf().filter(function () {
            return b.curCSS(this, "visibility") === "hidden" || b.expr.filters.hidden(this);
        }).length;
    }

    b.extend(b.expr[":"], {
        focusable: function (g) {
            var l = g.nodeName.toLowerCase(), d = b.attr(g, "tabindex");
            if ("area" === l) {
                var j = g.parentNode, h = j.name, f;
                if (!g.href || !h || j.nodeName.toLowerCase() !== "map") {
                    return false;
                }
                f = b("img[usemap=#" + h + "]")[0];
                return !!f && c(f);
            }
            if (b.attr(g, "disabled")) {
                return false;
            }
            return (/input|select|textarea|button|object/.test(l) ? !g.disabled : "a" == l ? g.href || !isNaN(d) : !isNaN(d)) && c(g);
        }, tabbable: function (f) {
            var d = b.attr(f, "tabindex");
            return (isNaN(d) || d >= 0) && b(f).is(":focusable");
        }
    });
})(jQuery);
(function () {
    WWF.drag = function (n, c, o, d) {
        var g = {}, j = $(document), h = function (p) {
            c.draging = false;
            n.draggable = true;
            document.body.releaseCapture && c[0].releaseCapture();
            WWF.utils.resetUserSelect();
            j.unbind("mousemove", l);
            j.unbind("mouseup", h);
            n.unbind("ondragstart", m);
        }, f = function (p) {
            WWF.utils.stopUserSelect();
            c.draging = true;
            j.bind("mousemove", l);
            j.bind("mouseup", h);
            n.bind("ondragstart", m);
            g = {x: parseInt(c.css("left"), 10) - p.pageX, y: parseInt(c.css("top"), 10) - p.pageY};
            document.body.setCapture && c[0].setCapture();
        }, l = function (u) {
            var q = c.limit(), p, r;
            p = u.pageX + g.x;
            r = u.pageY + g.y;
            if (p >= q.maxX - 20) {
                p = q.maxX - 30;
            }
            if (p <= q.minX + 5) {
                p = q.minX + 10;
            }
            if (r <= 5) {
                r = 10;
            }
            var s = WWF.dom.getDocumentHeight() - c.outerHeight();
            if (r >= (s - 20)) {
                r = s - 30;
            }
            c.css("left", p + "px");
            c.css("top", r + "px");
        }, b = function () {
        }, m = function () {
            return false;
        };
        n.draggable = true;
        n.bind("mousedown", f);
        n.css({cursor: "move"});
        c.css("position", "absolute");
    };
})();
(function () {
    WWF.ns("WWF.dom");
    var b;
    b = WWF.dom = {
        getDocumentHeight: function () {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, b.getViewportHeight());
        }, getDocumentWidth: function () {
            var c = Math.max(!$.boxModel ? document.body.scrollWidth : document.documentElement.scrollWidth, b.getViewportWidth());
            if (!WWF.browser.ie) {
                if (document.documentElement.scrollHeight > document.documentElement.clientHeight && document.documentElement.scrollWidth <= document.documentElement.clientWidth) {
                    c -= 17;
                }
            }
            return c;
        }, getViewportHeight: function () {
            return WWF.browser.ie ? ($.boxModel ? document.documentElement.clientHeight : document.body.clientHeight) : self.innerHeight;
        }, getViewportWidth: function () {
            return !$.boxModel && !WWF.browser.opera ? document.body.clientWidth : WWF.browser.ie ? document.documentElement.clientWidth : self.innerWidth;
        }, getScrollTop: function () {
            return document.documentElement.scrollTop || document.body.scrollTop;
        }
    };
})();
(function () {
    WWF.template.add("WWF.Mask", '<div class="wwf-mask"></div>');
    WWF.Mask = WWF.Component.extend({
        templateName: "WWF.Mask",
        defaultConfig: {
            opacity: "0.6",
            bgcolor: "#000",
            target: document.body,
            transparent: false,
            useImg: true,
            zindex: null
        },
        handler: {},
        _init: function (d) {
            this._supportEvents("click", "show", "hide");
            if (this.config.target) {
                this.config.target = $(this.config.target);
            }
            if (this.config.target && this.config.target[0] != document.body) {
                this.config.renderTo = $(this.config.target).parent();
                this.isinner = true;
            } else {
                this.isinner = false;
            }
        },
        _beforeRender: function () {
            var d = WWF.browser;
            if (d.ie && this.config.useImg) {
                this.view.css({
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    display: "none",
                    left: 0,
                    "z-index": this.config.zindex || WWF.getNextzIndex(),
                    overflow: "hidden"
                });
            } else {
                this.view.css({
                    width: "100%",
                    height: "100%",
                    "background-color": this.config.bgcolor,
                    filter: "alpha(opacity=0)",
                    zoom: 1,
                    "-moz-opacity": "0.0",
                    opacity: "0",
                    position: "absolute",
                    top: 0,
                    display: "none",
                    left: 0,
                    "z-index": this.config.zindex || WWF.getNextzIndex(),
                    color: "#FFF",
                    overflow: "auto"
                });
            }
            this.setTransparent(this.config.transparent);
        },
        show: function () {
            var d = this;
            if (!this.__resize) {
                this.__resize = $.proxy(this.resize, this);
            }
            this.resize();
            d.view.show();
            var f = WWF.browser;
            if (!f.ie || !this.config.useImg) {
                this.view.animate({opacity: this.config.opacity});
            }
            $(window).bind("resize", this.__resize);
            this.fire("show", [], this.view);
            return this;
        },
        hide: function () {
            this.view.hide();
            if (this.__resize) {
                $(window).unbind("resize", this.__resize);
            }
            this.fire("hide", [], this.view);
            return this;
        },
        zIndex: function (d) {
            if (d) {
                this.view.css("z-index", parseInt(d, 10));
            } else {
                return this.css("z-index");
            }
            return this;
        },
        resize: function () {
            var g, d = {};
            if (!this.isinner) {
                d.height = WWF.dom.getDocumentHeight();
                d.top = 0;
                d.left = 0;
            } else {
                var f = this.config.target;
                g = f.position();
                $.extend(d, f.offset());
                d.height = f.outerHeight();
                d.width = f.outerWidth();
                d.left = g.left + parseInt(WWF.utils.cssToInt(f.css("margin-left")), 10);
                d.top = g.top + parseInt(WWF.utils.cssToInt(f.css("margin-top")), 10);
            }
            this.view.css(d);
            return this;
        },
        setTarget: function (d) {
            this.config.target = d || document.body;
            this.resize();
            return this;
        },
        setTransparent: function (d) {
            if (d) {
                this.view.addClass("wwf-mask-transparent");
            } else {
                this.view.removeClass("wwf-mask-transparent");
            }
        }
    });
    var c, b = [];
    WWF.Overlay = {
        show: function () {
            index = WWF.getNextzIndex();
            b.push(index);
            c.zIndex(index);
            if (b.length <= 1) {
                c.show();
            }
        }, hide: function () {
            var d = b.pop();
            if (b.length <= 0) {
                c.hide();
            } else {
                c.zIndex(b[b.length - 1]);
            }
        }, clear: function () {
            b = [];
            c.hide();
        }
    };
    $(function () {
        c = new WWF.Mask();
        c.view.css("position", "fixed");
        var d = WWF.frame;
        if (d) {
            d.bind(d.EVENT_BEFORE_REFRESH_BODY, function () {
                WWF.Overlay.clear();
            }, true);
        }
    });
})();
WWF.ns("WWF.utils");
(function () {
    var b = /\${([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g;
    WWF.extend(WWF.utils, {
        capitalize: function (c) {
            return !c ? c : c.charAt(0).toUpperCase() + c.substr(1).toLowerCase();
        }, urlEncode: function (c) {
            return encodeURIComponent(c);
        }, encodeParam: function (c) {
            return encodeURIComponent(c);
        }, decodeParam: function (c) {
            return decodeURIComponent(c);
        }, process: function (d, f, c) {
            return d.replace(b, function (g, l, n, j) {
                var h = f[l];
                if (h === undefined || h === null) {
                    if (c === undefined) {
                        return "";
                    }
                    switch (c) {
                        case 0:
                            return "";
                        case 1:
                            return l;
                        default:
                            return g;
                    }
                }
                return h;
            });
        }, format: function (f, g) {
            var c;
            if (arguments.length == 2 && $.isArray(arguments[1])) {
                c = arguments[1];
            } else {
                c = Array.prototype.slice.call(arguments, 1);
            }
            return f.replace(/\{(\d+)\}/g, function (d, h) {
                return c[h];
            });
        }, firstUpperCase: function (c) {
            return c.replace(/\b\w+\b/, function (d) {
                return d.substring(0, 1).toUpperCase() + d.substring(1);
            });
        }, htmlDecode: function (c) {
            return !c ? c : String(c).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
        }, filterHtml: function (c) {
            if (!c) {
                return "";
            }
            c = c.replace(/&/g, "&amp;");
            c = c.replace(/"/g, "&quot;");
            c = c.replace(/</g, "&lt;");
            c = c.replace(/>/g, "&gt;");
            c = c.replace(/'/g, "&#39;");
            return c;
        }, htmlEncode: function (c) {
            return this.filterHtml(c);
        }, filterJs: function (c) {
            if (!c) {
                return "";
            }
            c = c.replace(/\\/g, "\\x5c");
            c = c.replace(/"/g, "\\x22");
            c = c.replace(/'/g, "\\x27");
            c = c.replace(/\r/g, "\\x0d");
            c = c.replace(/\n/g, "\\x0a");
            c = c.replace(/\//g, "\\x2f");
            return c;
        }, filterJsInHtml: function (c) {
            return filterHtml(filterJs(c));
        }, filterUrl: function (d) {
            var c = d.indexOf(":");
            if (c < 0) {
                return d;
            }
            var f = d.substring(0, c).replace(/^\s+/, "").toLowerCase();
            if (legalProtocols.test(f)) {
                return d;
            }
            return null;
        }, ellipsis: function () {
        }, wordwarp: function (g) {
            if (WWF.browser.firefox) {
                var d = document.createTreeWalker(g, NodeFilter.SHOW_TEXT, null, false);
                var h, f, j = String.fromCharCode("8203");
                while (d.nextNode()) {
                    h = d.currentNode;
                    f = trim(h.nodeValue).split("").join(j);
                    h.nodeValue = f;
                }
                return true;
            }
        }
    });
    WWF.regInit(function (c) {
        if (WWF.browser.firefox) {
            $(".wwf-wordwarp", c).each(function () {
                WWF.utils.wordwarp(this);
            });
        }
    });
})();
WWF.ns("WWF.utils");
(function () {
    var eventObj = $({});
    WWF.extend(WWF.utils, {
        getURLParam: function (name, url) {
            var uri = url || window.location.href, re;
            if (!WWF.isEmpty(name)) {
                re = new RegExp("" + name + "=([^&?]*)", "ig");
                return ((uri.match(re)) ? (uri.match(re)[0].substr(name.length + 1)) : null);
            } else {
                re = /\w*\=([^\&\?]*)/ig;
                var retval = {}, item;
                while ((arr = re.exec(uri)) != null) {
                    item = arr[0];
                    if (item) {
                        item = item.split("=");
                        retval[item[0]] = item[1];
                    }
                }
                return retval;
            }
        }, setURLParam: function (key, val, url) {
            url = url || window.location.href;
            var d = WWF.utils.getURLParam(null, url), base = "";
            if (url.indexOf("?")) {
                base = url.split("?")[0] + "?";
            } else {
                if (url.indexOf("#")) {
                    base = url.split("#")[0] + "#";
                }
            }
            if (val == "" && d[key]) {
                delete d[key];
            } else {
                d[key] = WWF.utils.urlEncode(val);
            }
            var data = [];
            for (key in d) {
                data.push(key + "=" + d[key]);
            }
            return base + data.join("&");
        }, cloneArray: function (obj) {
            var result, item;
            if (WWF.isObject(obj) || $.isArray(obj)) {
                result = {};
                for (var k in obj) {
                    result[k] = WWF.utils.cloneArray(obj[k]);
                }
            } else {
                result = obj;
            }
            return result;
        }, data: function () {
            var node = $("#_wbx_data");
            if (node.length === 0) {
                node = $("<div />").attr("id", "_wbx_data").appendTo("body");
            }
            return node.data.apply(node, arguments);
        }, trigger: function () {
            eventObj.trigger.apply(eventObj, arguments);
        }, bind: function () {
            eventObj.bind.apply(eventObj, arguments);
        }, unbind: function () {
            eventObj.unbind.apply(eventObj, arguments);
        }, contactURL: function () {
            var baseURL = arguments[0];
            var nextURL = arguments[1];
            if (arguments.length === 3) {
                nextURL = WWF.utils.contactURL(arguments[1], arguments[2]);
            }
            if (baseURL.lastIndexOf("/") !== baseURL.length - 1) {
                baseURL += "/";
            }
            if (typeof(nextURL) === "undefined") {
                return baseURL.substr(0, baseURL.length - 1);
            } else {
                if (nextURL.indexOf("/") === 0) {
                    nextURL = nextURL.substr(1);
                }
                return baseURL + nextURL;
            }
        }, flashVersion: function () {
            var f = "-", n = navigator;
            if (n.plugins && n.plugins.length) {
                navigator.plugins.refresh(false);
                for (var ii = 0; ii < n.plugins.length; ii++) {
                    if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                        f = n.plugins[ii].description.split("Shockwave Flash ")[1];
                        break;
                    }
                }
            } else {
                if (window.ActiveXObject) {
                    for (ii = 10; ii >= 2; ii--) {
                        try {
                            var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                            if (fl) {
                                f = ii + ".0";
                                break;
                            }
                        } catch (e) {
                        }
                    }
                }
            }
            return f;
        }, arrayRemove: function (arr, value) {
            if (arr.length <= 0) {
                return [];
            }
            var index = $.inArray(value, arr);
            if (index >= 0) {
                arr.splice(index, 1);
            }
            return arr;
        }, cssToInt: function (v) {
            if (v == "auto") {
                return 0;
            }
            return parseInt(v, 10);
        }, clearSelect: function () {
            try {
                if (window.getSelection) {
                    window.getSelection().removeAllRanges();
                } else {
                    document.selection.empty();
                }
            } catch (_) {
            }
        }, getStyleName: function (css, el) {
            var prefixes = ["", "-ms-", "-moz-", "-webkit-", "-khtml-", "-o-"];
            var reg_cap = /-([a-z])/g;
            el = el || document.documentElement;
            var style = el.style, test;
            for (var i = 0, l = prefixes.length; i < l; i++) {
                test = (prefixes[i] + css).replace(reg_cap, function ($0, $1) {
                    return $1.toUpperCase();
                });
                if (test in style) {
                    return test;
                }
            }
            return null;
        }, stopUserSelect: function () {
            var userSelect = WWF.utils.getStyleName("user-select");
            if (typeof userSelect === "string") {
                document.documentElement.style[userSelect] = "none";
            }
            document.unselectable = "on";

            function newFN() {
                return false;
            }

            newFN.oldFn = document.onselectstart;
            document.onselectstart = newFN;
        }, resetUserSelect: function () {
            var userSelect = WWF.utils.getStyleName("user-select");
            if (typeof userSelect === "string") {
                document.documentElement.style[userSelect] = "text";
            }
            document.unselectable = "off";
            var oldFn = document.onselectstart ? document.onselectstart.oldFn : null;
            document.onselectstart = oldFn || null;
        }, cookieEnabled: function () {
            var cookieEnabled = (navigator.cookieEnabled) ? true : false;
            if (WWF.browser.ie) {
                $.cookie("testcookie", "testcookie");
                cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
                $.cookie("testcookie", null);
            }
            return cookieEnabled;
        }, generateAndSubmitForm: function (url, formID) {
            this._generatePostForm(url, formID);
            document.getElementById(formID).submit();
        }, _generatePostForm: function (url, formID) {
            var paramsMap = {};
            var actionStr = this._getActionFromUrl(url);
            this._getParametersFromUrl(url, paramsMap);
            this._setFormAttributes(formID, actionStr, paramsMap);
        }, _getActionFromUrl: function (url) {
            if (this._isNoParametersInUrl(url)) {
                return url;
            }
            return url.substring(0, url.indexOf("?"));
        }, _getParametersFromUrl: function (url, paramsMap) {
            if (this._isNoParametersInUrl(url)) {
                return paramsMap;
            }
            var markIndex = url.indexOf("?");
            var paramsStr = url.substring(markIndex + 1, url.length);
            return this._getParametersMap(paramsStr, paramsMap);
        }, _isNoParametersInUrl: function (url) {
            if (url === null || typeof url == "undefined") {
                return true;
            }
            var markIndex = url.indexOf("?");
            if (markIndex <= 0) {
                return true;
            }
            return false;
        }, _getParametersMap: function (paramsStr, paramsMap) {
            if (paramsStr === null || typeof paramsStr == "undefined") {
                return paramsMap;
            }
            var paramsArray = paramsStr.split("&");
            for (var i in paramsArray) {
                this._getParamKeyValue(paramsArray[i], paramsMap);
            }
        }, _getParamKeyValue: function (param, paramsMap) {
            if (typeof param != "string") {
                return;
            }
            if (param === null || typeof param == "undefined" || param.indexOf("=") <= 0) {
                return;
            }
            var markIndex = param.indexOf("=");
            var key = param.substring(0, markIndex);
            var value = "";
            if (markIndex + 1 <= param.length) {
                var encodeValue = param.substring(markIndex + 1, param.length);
                try {
                    value = decodeURIComponent(encodeValue);
                } catch (err) {
                    value = encodeValue;
                }
            }
            paramsMap[key] = value;
        }, _setFormAttributes: function (formID, action, paramsMap) {
            var postForm = document.getElementById(formID);
            postForm.action = action;
            postForm.method = "post";
            for (var key in paramsMap) {
                var newInput = document.createElement("input");
                newInput.type = "hidden";
                newInput.name = key;
                newInput.value = paramsMap[key];
                postForm.appendChild(newInput);
            }
        }
    });
    WWF.support = {cookie: WWF.utils.cookieEnabled()};
    var em = WWF.EscManager = {
        queue: [], inited: false, add: function (fn) {
            if (!em.inited) {
                em.init();
            }
            em.queue.push(fn);
        }, remove: function (fn) {
            var index = $.inArray(fn, em.queue);
            if (index >= 0) {
                em.queue = em.queue.slice(0, index);
            }
        }, init: function () {
            $(document).bind("keydown", function (e) {
                var args = Array.prototype.slice.call(arguments, 0);
                var fn = em.queue[em.queue.length - 1];
                if ($.isFunction(fn)) {
                    return fn.apply(this, args);
                }
            });
            em.inited = true;
        }
    };
})();
(function () {
    WWF.ns("WWF.accessiblity");
    WWF.accessiblity = {
        isHighContrastMode: function () {
            var b = WWF.platform.Windows && (WWF.browser.firefox || WWF.browser.ie);
            if (!b) {
                return false;
            }
            $(document.body).append("<p id='hcmtest' style='position:absolute;top:0;left:-99999px;background-color:#878787;'>T</p>");
            var c = $("#hcmtest").css("background-color").toLowerCase();
            $("#hcmtest").remove();
            if (c != "#878787" && c != "rgb(135, 135, 135)") {
                return true;
            } else {
                return false;
            }
        }
    };
})();
$(function () {
    if (WWF.accessiblity.isHighContrastMode()) {
        var b = $(document.body);
        if (!b.hasClass("wcag-hcm")) {
            b.addClass("wcag-hcm");
        }
    }
});
(function () {
    WWF.keyboard = {
        getText: function (c) {
            for (var b in this) {
                if (this[b] == c) {
                    return b;
                }
            }
            return "";
        },
        BackSpace: 8,
        Tab: 9,
        Clear: 12,
        Enter: 13,
        Shift: 16,
        Control: 17,
        Alt: 18,
        Pause: 19,
        Caps_Lock: 20,
        Escape: 27,
        space: 32,
        Prior: 33,
        Next: 34,
        End: 35,
        Home: 36,
        Left: 37,
        Up: 38,
        Right: 39,
        Down: 40,
        Select: 41,
        Print: 42,
        Execute: 43,
        Insert: 45,
        Delete: 46,
        Help: 47,
        Numpad_Enter: 108,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        F13: 124,
        F14: 125,
        F15: 126,
        F16: 127,
        F17: 128,
        F18: 129,
        F19: 130,
        F20: 131,
        F21: 132,
        F22: 133,
        F23: 134,
        F24: 135
    };
})();
(function () {
    var f = false, b = {error: [], info: [], debug: [], warn: [], log: []};

    function g(j) {
        var h = Array.prototype.slice.call(arguments[1], 0);
        b[j].push(h);
        if (typeof console == "object" && $.isFunction(console[j])) {
            console[j].apply(console, h);
        } else {
            d.call(this, j, h);
        }
    }

    function d(l, h) {
        if (this.rendered) {
            var j = WWF.utils.format("<li>{0}</li>", h.join(","));
            if (this.ui.content[0].firstChild) {
                $(j).insertBefore(this.ui.content[0].firstChild);
            } else {
                $(j).appendTo(this.ui.content);
            }
        }
    }

    WWF.template.add("WWF.Logger", '<div class="wwf-logger"><div class="wwf-log-bar"><i class="wwf-ic16 wwf-ic-delete"></i><ul class=" clearfix"><li>all</li><li>error</li><li>warn</li><li>debug</li><li class="clearfix">info</li></ul></div><div class="wwf-logger-warp"><ul class="wwf-logger-content"></ul></div></div>');
    var c = WWF.Component.extend({
        templateName: "WWF.Logger",
        handler: {content: ".wwf-logger-content", warp: ".wwf-logger-warp"},
        warn: function () {
            g.call(this, "warn", arguments);
        },
        error: function () {
            g.call(this, "error", arguments);
        },
        info: function () {
            g.call(this, "info", arguments);
        },
        log: function () {
            g.call(this, "log", arguments);
        },
        debug: function () {
            g.call(this, "debug", arguments);
        },
        _beforeRender: function () {
            this._show("error");
        },
        _show: function (m) {
            var l;
            this.ui.content.empty();
            for (var j in b) {
                if (m == j || m == "all") {
                    var h = b[j];
                    for (l = 0; l < h.length; l++) {
                        d.call(this, m, h[l]);
                    }
                }
            }
        },
        show: function (h) {
            if (!this.rendered) {
                this.render();
            }
            h = h || "error";
            this._show(h);
            this.view.show();
        },
        hide: function () {
            if (this.rendered) {
                this.view.hide();
            }
        },
        _beforeRender: function () {
            for (_key in b) {
                for (var h = 0; h < b[_key].length; h++) {
                    d.apply(this, b[_key][h]);
                }
            }
            var j = this;
            this.bind(".wwf-log-bar li", "click", function () {
                j.show($(this).text());
            });
        }
    });
    WWF.logger = new c({autoRender: false});
})();
WWF.extend(WWF.utils, {
    bindObject: $.proxy, defer: function (h, g, f, c, b) {
        var d = WWF.utils.bindObject(h, f, c, b);
        if (g > 0) {
            return setTimeout(d, g);
        }
        d();
        return 0;
    }, concatParams: function () {
        var c = Array.prototype.slice, b = c.call(arguments, 1), d = arguments[0];
        return function () {
            var f = c.call(arguments, 0);
            return d.apply(window, f.concat(b));
        };
    }
});
(function () {
    function b(d) {
        var f = {};
        if ($.isArray(this.fields)) {
            if ($.isArray(d)) {
                for (var c = 0; c < this.fields.length; c++) {
                    f[this.fields[c]] = d[c];
                }
            } else {
                f[this.fields[0]] = d;
            }
        } else {
            f = d;
        }
        return f;
    }

    WWF.DataStore = WWF.Observable.extend({
        keys: [],
        autoID: 0,
        changed: false,
        defaultConfig: {
            data: null, fields: null, service: "", serviceParams: "", getKey: function (c) {
                id = "ds-item-" + this.autoID;
                this.autoID++;
                return id;
            }
        },
        init: function (c) {
            this._super();
            this._supportEvents("change", "load", "add", "remove", "loadstart", "loadend");
            this.config = $.extend({}, this.defaultConfig, c);
            this.fields = this.config.fields;
            this.getKey = this.config.getKey;
            this._setEvent();
            this.data = [];
        },
        loadData: function () {
            var c = this.config;
            if (c.service) {
                if (WWF.request.isDefine(c.service)) {
                    this.fire("loadstart");
                    WWF.request.call(c.service, c.serviceParams, WWF.utils.bindObject(this.readAjax, this), "json");
                }
            } else {
                if (c.url) {
                    this.fire("loadstart");
                    WWF.request.get(c.data, null, WWF.utils.bindObject(this.readAjax, this), "json");
                }
            }
            if (c.data && WWF.isObject(c.data)) {
                this.read(c.data);
            }
        },
        filter: function (d, f) {
            var c = this.data.length;
            for (c > 0; c--;) {
            }
        },
        query: function (d, f) {
            var c = this.data.length;
            if (WWF.isNumber(d)) {
                if (d >= 0 && d < c) {
                    return {data: this.data[d], index: d};
                } else {
                    return null;
                }
            }
            for (c > 0; c--;) {
                if (this.data[c][d] == f) {
                    return {data: this.data[c], index: c};
                }
            }
            return null;
        },
        each: function () {
        },
        sort: function (d, c) {
            c = String(c).toLowerCase() == "asc";
            if ($.isFunction(d)) {
                this.data.sort(d);
            } else {
                this.data.sort(function (g, f) {
                    if (g[d] > f[d]) {
                        return c ? 1 : -1;
                    } else {
                        return c ? -1 : 1;
                    }
                });
            }
            this.fire("change", [this.data, "sort"]);
        },
        read: function (c) {
            var f;
            if ($.isArray(c)) {
                f = this.readArray(c);
            } else {
                if (WWF.isObject(c)) {
                }
            }
            this.data = f;
            this.fire("load", [this.data]);
        },
        update: function (c) {
            var f;
            if ($.isArray(c)) {
                f = this.readArray(c);
            }
            this.data = f;
            this.fire("change", [this.data]);
        },
        getData: function (c) {
            return this.data[c];
        },
        getNativeData: function (c) {
        },
        readArray: function (c) {
            var h = [];
            for (var f = 0; f < c.length; f++) {
                var g = c[f], d = this.getKey(g);
                this.keys.push(d);
                if (this.fields) {
                    g = b.call(this, g);
                }
                h.push(g);
            }
            return h;
        },
        readAjax: function (c) {
            this.fire("loadend");
            this.read(c.result);
        },
        destory: function () {
            this._super();
            this.data = null;
            this.snapshot = null;
        }
    });
    WWF.DataStore.get = function (d, c) {
        if ($.isArray(d)) {
            return new WWF.DataStore({data: d, fields: c});
        } else {
            if (WWF.isString(d)) {
                return new WWF.DataStore({data: d});
            } else {
                if (d instanceof WWF.DataStore) {
                    return d;
                }
            }
        }
    };
})();
(function () {
    WWF.ns("WWF.utils");
    var b = WWF.utils;
    WWF.extend(b, {
        surround: function (u, E, F, m, c, n) {
            u = $(u);
            E = $(E);
            if (WWF.platform.Phone || WWF.platform.Tablet) {
                c = true;
            }
            if (E.length < 0 || u.length < 0) {
                return;
            }
            var z, B, w, f = jQuery.contains(E[0], u[0]), D = 0, j = 0, C = WWF.dom.getViewportWidth(), A = 0,
                h = WWF.dom.getViewportHeight() + WWF.dom.getScrollTop(), q = $.extend({}, u.offset()),
                p = $.extend({}, E.offset()), d = $(window).scrollTop(), y = 0, x = 0;
            q.width = u.outerWidth();
            q.height = u.outerHeight();
            p.width = E.outerWidth();
            p.height = E.outerHeight();
            B = F.split(",");
            w = F;
            if (m) {
                y = m.left || y;
                x = m.top || x;
            } else {
                m = {};
            }
            if (f) {
                z = {
                    top: function () {
                        var s = (0 - q.height - p.height);
                        if ((p.top + s) < 0) {
                            s = p.height;
                            w = w.replace("top", "bottom");
                        }
                        if (s == 0) {
                            s = "auto";
                        }
                        return s;
                    }, bottom: function () {
                        return "auto";
                    }, left: function () {
                        return "auto";
                    }, right: function () {
                        var s = p.width - q.width;
                        return s;
                    }
                };
            } else {
                z = {
                    top: function () {
                        var s = p.top - q.height - A;
                        if (!c && (s < j)) {
                            s = p.top + p.height;
                            w = w.replace("top", "bottom");
                        }
                        return s;
                    }, bottom: function () {
                        var s = p.top + p.height + A;
                        if (!c && ((s + q.height) > h)) {
                            s = p.top - q.height;
                            w = w.replace("bottom", "top");
                        }
                        return s;
                    }, left: function () {
                        var s = p.left - A;
                        if (!c && ((s + q.width) > C)) {
                            s = p.left + p.width - q.width;
                            w = w.replace("left", "right");
                        }
                        return s;
                    }, right: function () {
                        var s = p.left + p.width - q.width + A;
                        if (!c && (s < D)) {
                            s = p.left;
                            w = w.replace("right", "left");
                        }
                        return s;
                    }
                };
            }
            var o = u.css("z-index") || WWF.getNextzIndex(), r = z[$.trim(B[0])](), g = z[$.trim(B[1])]();
            B = w.split(",");
            y = m[$.trim(B[1])] || 0;
            x = m[$.trim(B[0])] || 0;
            F = "absolute";
            if (n) {
                var l = $(n).offset();
                y += -l.left;
                x += -l.top;
            }
            var G = {"z-index": o, position: F, top: r + x, left: g + y};
            u.css(G);
            G.status = w;
            return G;
        }, testRange: function (c, j) {
            c = $(c);
            j = $(j);
            var d = c.offset(), m = c.outerHeight(), h = c.outerWidth(), n = j.offset(), l = j.innerHeight(),
                g = j.innerWidth(), f;
            return b.inRange(d.left, d.top, m, h, n.left, n.top, g, l);
        }, mousein: function (h, g) {
            if (g.view) {
                g = g.view;
            }
            g = $(g);
            var j = g.offset(), c = j.left, l = j.top, f = g.outerWidth() + c, d = g.outerHeight() + l;
            if (h.pageX > f || h.pageX < c) {
                return false;
            }
            if (h.pageY > d || h.pageY < l) {
                return false;
            }
            return true;
        }, inRange: function (d, q, h, o, c, p, g, m, j) {
            var n = {x1: d, y1: q, x2: d + h, y2: q + o}, l = {x1: c, y1: p, x2: c + g, y2: p + m}, f = {x: 0, y: 0};
            if (n.x1 < l.x1) {
                f.x = n.x1 - l.x1;
            } else {
                if (n.x2 > l.x2) {
                    f.x = l.x2 - n.x2;
                }
            }
            if (n.y1 < l.y1) {
                f.y = n.y1 - l.y1;
            } else {
                if (n.y2 > l.y2) {
                    f.y = l.y2 - n.y2;
                }
            }
            if (j) {
                return f;
            }
            if (f.x == 0 && f.y == 0) {
                return true;
            }
            return false;
        }, limit: function (g, f, p) {
            var m, l, d, c, q, o, r, t = $(document), j, n, h, u;
            if (!f) {
                f = $(document.body);
            }
            if (WWF.isString(f) || !f.jquery) {
                f = $(f);
            }
            if (f[0] == document.body) {
                j = WWF.dom.getViewportWidth();
                n = WWF.dom.getViewportHeight();
                h = t.scrollLeft();
                u = t.scrollTop();
            } else {
                j = f.width();
                n = f.height();
                h = u = 0;
            }
            g = $(g);
            boxWidth = g.outerWidth();
            boxHeight = g.outerHeight();
            if (f.css("position") == "static") {
                var s = f.position();
                h = s.left;
                u = s.top;
            }
            if (p) {
                m = 0;
                d = j - boxWidth;
                q = d / 2;
                l = 0;
                c = n - boxHeight;
                r = n * 0.5 - boxHeight / 2;
                o = (boxHeight < 4 * n / 7) ? r : c / 2;
            } else {
                m = h;
                d = j + m - boxWidth;
                q = d / 2;
                l = u;
                c = n + l - boxHeight;
                r = n * 0.5 - boxHeight / 2 + l;
                o = (boxHeight < 4 * n / 7) ? r : (c + l) / 2;
            }
            if (q < 0) {
                q = 0;
            }
            if (o < 0) {
                o = 0;
            }
            return {minX: m, minY: l, maxX: d, maxY: c, centerX: q, centerY: o};
        }, getFixContainer: function () {
            return WWF.utils.getGlobalContainer("wwf-fix-container", {
                "z-index": 8000,
                margin: "0 auto",
                width: "960",
                height: 0,
                position: "relative"
            });
        }, getGlobalContainer: function (g, f) {
            g = g || "wwf-global-container";
            f = f || {height: 0, position: "relative"};
            var d = $("#" + g);
            var c = $("#header");
            if (c.length <= 0) {
                c = document.body.firstChild;
            }
            if (d.length < 1) {
                d = $('<div id="' + g + '"></div>').insertBefore(c);
                d.css(f);
            }
            return d;
        }
    });
})();
(function () {
    var h = new Date();
    var d = null;
    var j = null;

    function b() {
        $.ajax({
            cache: false,
            type: "GET",
            dataType: "text",
            url: WWF.CONFIG.frameworkURL + "/api/now.do",
            success: function (n) {
                h = new Date(n);
            }
        });
    }

    function f() {
        var o = new Date().getTime();
        var n = o - j;
        j = o;
        if (n > 0 && n < 6000) {
            h = new Date(h.getTime() + n);
        } else {
            h = new Date(h.getTime() + 1000);
            b();
            WWF.logger.log("sync:" + n);
        }
        if (n <= 0) {
            window.clearInterval(d);
            d = window.setInterval(f, 1000);
        }
    }

    function m() {
        return -new Date().getTimezoneOffset() / 60;
    }

    function c(r) {
        var n = WWF.CONFIG.timezone, s = WWF.CONFIG.dayLightSavingTime, q = s.length, o = 0, p;
        if (q && r >= s[0][0] && r < s[q - 1][1]) {
            for (; o < q; o++) {
                p = s[o];
                if (r >= p[0] && r < p[1]) {
                    n = p[2];
                    break;
                }
            }
        }
        return n;
    }

    function l(n) {
        return (new Date().getTimezoneOffset() * 60000) + (c(n) * 3600000);
    }

    function g(o) {
        o = o || WWF.utils.serverTime();
        var n = null;
        try {
            if (typeof(o) === "string") {
                o = $.trim(o);
                if (/GMT|UTC/.test(o)) {
                    n = new Date($.trim(o));
                } else {
                    var q = new Date(o.replace(/-/g, "/"));
                    return new Date(q.getTime());
                }
            } else {
                n = new Date(o);
            }
        } catch (p) {
            WWF.logger.log("Parse date error:" + o);
            return null;
        }
        return new Date(n.getTime() + c(n) * 3600000);
    }

    $.extend(WWF.utils, {
        timeagoLang: function () {
            var n = Array.prototype.slice.call(arguments);
            n[0] = "timeago." + n[0];
            n.unshift(WWF.CONFIG.timeagoLang);
            return WWF.lang.getByLang.apply(window, n);
        }, timeagoAmpm: function (n) {
            if (n >= 12 && n < 18) {
                return WWF.utils.timeagoLang("afternoon");
            } else {
                if (n >= 18) {
                    return WWF.utils.timeagoLang("afternoon");
                } else {
                    return WWF.utils.timeagoLang("morning");
                }
            }
        }, timeago24: function (n, p) {
            if (p < 10) {
                p = "0" + p;
            }
            if (WWF.CONFIG.time24) {
                return WWF.utils.timeagoLang("time24", n, p);
            } else {
                var o = WWF.utils.timeagoAmpm(n);
                if (n > 12) {
                    n -= 12;
                }
                if (n === 0) {
                    n = 12;
                }
                return WWF.utils.timeagoLang("timeampm", n, p, o);
            }
        }, timeago: function (r, p) {
            var q = g(WWF.utils.serverTime());
            var y = g(r), F, N;
            if (!y) {
                return "";
            }
            p = p || "list";

            function V() {
                return WWF.utils.timeagoLang.apply(window, arguments);
            }

            function w(W) {
                return W.getUTCHours();
            }

            function x(X) {
                var W = w(X);
                var Y = X.getUTCMinutes();
                return WWF.utils.timeago24(W, Y);
            }

            function o(X) {
                var W = X.getUTCMonth();
                return V("month" + (W + 1));
            }

            function P(W) {
                return W.getUTCDay();
            }

            function R(W) {
                var X = P(W);
                if (X === 0) {
                    return V("week7");
                } else {
                    return V("week" + X);
                }
            }

            function K(W) {
                return W.getUTCDate();
            }

            function G(W) {
                return W.getUTCFullYear();
            }

            function s(X, Y, aa, ac, W) {
                var Z, ab = x(X);
                if (aa) {
                    if (Y) {
                        Z = V("weekmonthdayyear", R(X), o(X), K(X), G(X));
                    } else {
                        Z = V("monthdayyear", o(X), K(X), G(X));
                    }
                } else {
                    if (Y) {
                        Z = V("weekmonthday", R(X), o(X), K(X));
                    } else {
                        Z = V("monthday", o(X), K(X));
                    }
                }
                if (!ac) {
                    return Z;
                } else {
                    if (W) {
                        return WWF.utils.format("{0}<br>{1}", Z, ab);
                    } else {
                        return V("datetime", Z, ab);
                    }
                }
            }

            function n(X, Y, W) {
                if (typeof(Y) === "number") {
                    if (Y >= 1 && Y <= 4) {
                        Y = "today";
                    } else {
                        if (Y === 10) {
                            Y = "yesterday";
                        } else {
                            if (Y === 20) {
                                Y = "tomorrow";
                            }
                        }
                    }
                }
                if (W) {
                    return WWF.utils.format("{0}<br>{1}", V(Y), x(y));
                } else {
                    return V("datetime", V(Y), x(X));
                }
            }

            function D(W, X, Y) {
                if (W === 1) {
                    return V("seconds");
                } else {
                    if (W === 2) {
                        return V("minute");
                    } else {
                        if (W === 3) {
                            var Z = Math.round(Y);
                            if (Z === 1) {
                                return V("aminute");
                            } else {
                                return V("minutes", Math.round(Y));
                            }
                        } else {
                            if (W === 4) {
                                return x(X);
                            }
                        }
                    }
                }
                return "ERROR";
            }

            var t = q.getTime() - y.getTime();
            var H = t / 1000;
            var M = H / 60;
            var Q = M / 60;
            var A = 24 * 60 * 60 * 1000;
            var T = new Date(q.getTime());
            var u = T.setUTCHours(0, 0, 0, 0);
            if (typeof u === "object") {
                u = u.getTime();
            }
            var L = new Date(u);
            var U = new Date(u - A);
            var E = new Date(u - P(T) * A);
            var J = new Date(u + (7 - P(T)) * A);
            var C = new Date(u + A);
            var O = new Date(u + 2 * A);
            var I = new Date(new Date(L).setUTCMonth(0, 1));
            var B = new Date(I).setUTCFullYear(I.getUTCFullYear() + 1, 0, 1);
            var z = new Date(q.getTime() + 30 * 1000);
            var S = 40;
            if (y >= B) {
                S = 40;
            } else {
                if (y < B && y >= I) {
                    if (y >= J) {
                        S = 30;
                    } else {
                        if (y < J && y >= O) {
                            S = 25;
                        } else {
                            if (y < O && y >= C) {
                                S = 20;
                            } else {
                                if (y < C && y >= z) {
                                    S = 4;
                                } else {
                                    if (y < z && y >= L) {
                                        if (H < 30) {
                                            S = 1;
                                        } else {
                                            if (H >= 30 && H < 60) {
                                                S = 2;
                                            } else {
                                                if (M >= 1 && M < 60) {
                                                    S = 3;
                                                } else {
                                                    S = 4;
                                                }
                                            }
                                        }
                                    } else {
                                        if (y < L && y >= U) {
                                            S = 10;
                                        } else {
                                            if (y > E) {
                                                S = 25;
                                            } else {
                                                S = 30;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    S = 40;
                }
            }
            if (p === "list" || p === "meetingList") {
                if (S >= 1 && S <= 20) {
                    return n(y, S, true);
                } else {
                    if (S === 25) {
                        return s(y, true, false, true, true);
                    } else {
                        if (S === 30) {
                            return s(y, true, false, true, true);
                        } else {
                            if (S === 40) {
                                return s(y, true, true, true, true);
                            }
                        }
                    }
                }
            } else {
                if (p === "dialog" || p === "fileDetail") {
                    if (S >= 1 && S <= 20) {
                        return n(y, S, false);
                    } else {
                        if (S === 25) {
                            return s(y, true, false, true, false);
                        } else {
                            if (S === 30) {
                                return s(y, true, false, true, false);
                            } else {
                                if (S === 40) {
                                    return s(y, true, true, true, false);
                                }
                            }
                        }
                    }
                } else {
                    if (p === "meetingDetail") {
                        if (S >= 1 && S <= 20) {
                            return n(y, S, false);
                        } else {
                            if (S === 25 || S === 30) {
                                return s(y, true, false, true, false);
                            } else {
                                if (S === 40) {
                                    return s(y, true, true, true, false);
                                }
                            }
                        }
                    } else {
                        if (p === "feed" || p === "comments") {
                            if (S >= 1 && S <= 4) {
                                return D(S, y, M);
                            } else {
                                if (S === 10 || S === 20) {
                                    return n(y, S, false);
                                } else {
                                    if (S === 25) {
                                        return s(y, true, false, true, false);
                                    } else {
                                        if (S === 30) {
                                            return s(y, true, false, true, false);
                                        } else {
                                            if (S === 40) {
                                                return s(y, true, true, true, false);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return "ERROR";
        }, timeDistance: function (p) {
            var n = g(WWF.utils.serverTime());
            var o = g(p);
            return n.getTime() - o.getTime();
        }, serverTime: function (n) {
            if (typeof(n) === "undefined") {
                return h;
            } else {
                h = new Date(n);
                if (!d) {
                    j = new Date().getTime();
                    d = window.setInterval(f, 1000);
                }
            }
        }, parseTimestamp: function (n) {
            return g(n);
        }, localTimezone: function () {
            return m();
        }
    });
    WWF.utils.serverTime(WWF.CONFIG.serverTime);
})();
(function (c) {
    var b = {
        init: function (d) {
            var f = {module: "list", interval: true};
            if (d) {
                c.extend(f, d);
            }
            return this.each(function () {
                var s = c(this);
                var p, q, m;
                var h = f.module, r;
                r = s.attr("data-timeago-module");
                if (r) {
                    h = r;
                }
                var j = f.interval, n;
                n = s.attr("data-timeago-interval");
                if (n) {
                    j = n === "true" ? true : false;
                }
                q = s.attr("data-timeago");
                p = WWF.utils.timeago(q, h);
                if (f.preprocess) {
                    m = f.preprocess.call(s, p);
                    if (m) {
                        p = m;
                    }
                }
                if (s.attr("action")) {
                    p = s.attr("action") + " " + p;
                }
                s.html(p);
                if (j) {
                    var o = Math.abs(WWF.utils.timeDistance(q) / 1000);
                    var l = -1;
                    if (o < 60) {
                        l = 10;
                    } else {
                        if (o >= 60 && o < 60 * 60) {
                            l = 60;
                        } else {
                            if (o >= 60 * 60 && o < 60 * 60 * 24) {
                                l = 60 * 10;
                            }
                        }
                    }
                    if (l > 0) {
                        var g = s.data("timeago-timeout-timer");
                        if (g) {
                            window.clearTimeout(g);
                        }
                        g = window.setTimeout(function () {
                            if (s && s.length) {
                                s.timeago(d);
                            }
                        }, l * 1000);
                        s.data("timeago-timeout-timer", g);
                    }
                }
            });
        }
    };
    c.fn.timeago = function (d) {
        if (b[d]) {
            return b[d].apply(this, Array.prototype.slice.call(arguments, 1));
        } else {
            if (typeof(d) === "object" || !d) {
                c(this).data("timeagoOptions", Array.prototype.slice.call(arguments, 0));
                return b.init.apply(this, arguments);
            } else {
            }
        }
    };
    c.fn.timeago.update = function () {
        c(document.body).find("[data-timeago]").each(function () {
            var d = c(this);
            b.init.apply(d, d.data("timeagoOptions") || []);
        });
    };
})(jQuery);
(function () {
    var b = WWF.CONFIG;
    WWF.session = {
        ticket: function (d) {
            if (undefined == d) {
                return $.cookie("WBX11Ticket");
            } else {
                var f = b.secureCookie, c = f ? "webex.com" : document.location.host;
                $.cookie("WBX11Ticket", d, {path: "/", domain: c, secure: f});
            }
        }, wbxsid: function (c) {
            if (undefined == c) {
                return $.cookie("wbxSessionID");
            }
        }, wbxcid: function (c) {
            if (undefined == c) {
                return WWF.CONFIG.csrf_token;
            }
        }, updateUserSetting: function (c) {
            if (b.timezone != c.offset || b.region != c.region) {
                WWF.request({
                    spi: "i18n.getUserSettings", success: function (d) {
                        var f = d.result;
                        b.timezone = f.offset;
                        b.region = f.region;
                        b.timeZone = f.timezoneId;
                        b.dayLightSavingTime = f.dayLightSavingTime;
                        $.fn.timeago.update();
                    }
                });
            }
        }, getUserSettings: function () {
            return {offset: b.timezone, region: b.region, timezoneId: b.timeZone};
        }
    };
})();
WWF.server = (function () {
    var b = ["rootCred", "cred", "token", "jabberToken", "wapiURL", "currentUser.displayName", "currentUser.email", "currentUser.firstName", "currentUser.language.id", "currentUser.language.code", "currentUser.language.name", "currentUser.lastName", "currentUser.location", "currentUser.password", "currentUser.id", "currentUser.userName", "currentUser.photoUrl", "currentUser.photoUrl", "currentUser.isFirstFollow", "currentUser.isFirstLogin", "currentUser.isFirstView", "currentUser.isFirstAdminAccess", "currentUser.isFirstAdminView", "currentUser.isFirstOwnerView", "currentUser.isOrgAdmin", "currentOrg.ID", "currentOrg.name", "currentOrg.namespaceID"];
    return {
        getVariable: function (c) {
            if ($.inArray(c, b)) {
                return "<_env_|" + c + ">";
            } else {
                WWF.logger.error("Server Variables [%s] not define", c);
            }
        }
    };
})();
WWF.verify = (function () {
    var d = {
        intege: "^-?[1-9]\\d*$",
        intege1: "^[1-9]\\d*$",
        intege2: "^-[1-9]\\d*$",
        num: "^([+-]?)\\d*\\.?\\d+$",
        num1: "^[1-9]\\d*|0$",
        num2: "^-[1-9]\\d*|0$",
        decmal: "^([+-]?)\\d*\\.\\d+$",
        decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",
        decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",
        decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",
        decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",
        decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",
        email: "^([a-zA-Z0-9_.-^='*])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$",
        color: "^[a-fA-F0-9]{6}$",
        url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",
        chinese: "^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",
        ascii: "^[\\x00-\\xFF]+$",
        zipcode: "^\\d{6}$",
        mobile: "^(13|15)[0-9]{9}$",
        ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",
        notempty: "^\\S+$",
        picture: "(.*)\\.(jpg|bmp|gif|ico|jpeg|tif|png)$",
        rar: "(.*)\\.(rar|zip|7zip|tgz)$",
        date: "^\\d{4}(\\-|\\/|.)\\d{1,2}\\1\\d{1,2}$",
        qq: "^[1-9]*[1-9][0-9]*$",
        tel: "^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",
        account: "^\\w+$",
        letter: "^[A-Za-z]+$",
        letter_u: "^[A-Z]+$",
        letter_l: "^[a-z]+$",
        idcard: "^[1-9]([0-9]{14}|[0-9]{17})$"
    }, b = {};

    function c(g, f) {
        f = f || "";
        if (!b[g]) {
            b[g] = new RegExp(d[g], f);
        }
        return b[g];
    }

    return {
        isEmail: function (h) {
            if (!h || h.length <= 0) {
                return false;
            }
            var B = 0, u;
            var E = /^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
            var A = /^(.+)@(.+)$/;
            var y = '\\(\\)><@,;:\\\\\\"\\.\\[\\]';
            var s = "[^\\s" + y + "]";
            var l = '("[^"]*")';
            var z = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
            var g = s + "+";
            var x = "(" + g + "|" + l + ")";
            var t = new RegExp("^" + x + "(\\." + x + ")*$");
            var n = new RegExp("^" + g + "(\\." + g + ")*$");
            var j = h.match(A);
            if (j == null) {
                return false;
            }
            var C = j[1];
            var D = j[2], f, p = false;
            for (u = 0; u < C.length; u++) {
                if (C.charCodeAt(u) > 127) {
                    return false;
                }
            }
            for (u = 0; u < D.length; u++) {
                f = D.charCodeAt(u);
                p = (f == 45 || f == 95 || f == 46);
                if (!(f > 96 && f < 123) && !(f > 64 && f < 91) && !(f > 47 && f < 58) && !p) {
                    return false;
                }
            }
            if (C.match(t) == null) {
                return false;
            }
            var r = D.match(z);
            if (r != null) {
                for (u = 1; u <= 4; u++) {
                    if (r[u] > 255) {
                        return false;
                    }
                }
                return true;
            }
            var q = new RegExp("^" + g + "$");
            var m = D.split(".");
            var w = m.length;
            for (u = 0; u < w; u++) {
                if (m[u].search(q) == -1) {
                    return false;
                }
            }
            if (w > 1) {
                var o = m[w - 1];
                if (o.length < 2) {
                    return false;
                }
                if (o.indexOf("_") >= 0 || o.indexOf("-") >= 0) {
                    return false;
                }
                if (/[0-9]/g.test(o)) {
                    return false;
                }
            }
            if (B && m[m.length - 1].length != 2 && m[m.length - 1].search(E) == -1) {
                return false;
            }
            if (w < 2) {
                return false;
            }
            return true;
        }, isNumber: function (f) {
            return c("num").test(str);
        }, isDouble: function (f) {
            return c("decmal").test(str);
        }, isColor: function (f) {
            return c("color").test(str);
        }, isURL: function (f) {
            return c("url").test(f);
        }, isChinese: function (f) {
            return c("chinese").test(str);
        }, isIP4: function (f) {
            return c("ip4").test(str);
        }, isAccount: function (f) {
            return c("account").test(str);
        }, isZipFile: function (f) {
            return c("rar").test(str);
        }, isPicture: function (f) {
            return c("picture").test(str);
        }
    };
})();
(function () {
    var c = WWF.MenuManager = {
        _menu: null, regist: function (d) {
            if (c._menu && c._menu.id != d.id) {
                c._menu.hide();
            }
            c._menu = d;
        }
    };
    var b = WWF.platform.Phone || WWF.platform.Tablet;
    WWF.template.add("WWF.Menu", '<div class="${skin}  ${clsAppend} unselectable" style="${appendStyle}" id="${id}" aria-role="menu"><div class="wwf-menu-wrap"><div class="wwf-menu-inner"></div></div></div>');
    WWF.Menu = WWF.Component.extend({
        templateName: "WWF.Menu",
        defaultConfig: {
            itemConfig: {},
            deferEventTrigger: true,
            appendStyle: "",
            radius: true,
            itemClass: "WWF.MenuItem",
            scrollHeight: 400,
            itemHeight: null,
            multiple: false,
            skin: "wwf-menu",
            keyNav: true,
            useInnerkeyNav: false,
            useCharacterNav: true,
            useHover: false,
            width: null,
            height: null,
            horizontal: false,
            clsHover: "wwf-item-hover",
            clsSelected: "wwf-item-selected",
            data: null,
            fields: "label",
            filterField: "label",
            filterDelayTime: 500,
            singleDisplay: true,
            ellipsis: true,
            focusItem: true,
            restoreFocus: true,
            shadow: true,
            minWidth: 140,
            esc: true,
            clearSelectedAfterClick: false,
            renderChild: true
        },
        recycling: true,
        handler: {body: ".wwf-menu-inner", wrap: ".wwf-menu-wrap"},
        blockRefresh: false,
        _init: function (d) {
            this._supportEvents("click", "dblclick", "keyup", "mouseover", "mouseout", "contextmenu", "containerclick", "selectionchange", "show", "hide", "beforeshow");
            this.store = WWF.DataStore.get(d.data, d.fields);
            this._addTplData("skin,appendStyle", this.config);
            this._addTplData("clsAppend", WWF.browser.ie9 ? "wwf-out-hide" : "wwf-out");
            this._items = [];
            this.fix = false;
            if (!this.config.multiple) {
                this.selected = {};
            } else {
                this.selected = [];
            }
            this.hoverItem = null;
            this._navCache = {};
            this._last = -1;
            this.isShow = false;
            this.childRendered = false;
            if ($.isFunction(this.config.getItemHtml)) {
                this.getItemHtml = this.config.getItemHtml;
            }
            if (this.config.horizontal) {
                this.config.ellipsis = false;
                this.config.minWidth = 10;
            }
            if (d.width) {
                this.config.minWidth = Math.min(d.minWidth, d.width);
            } else {
                this.config.width = "auto";
            }
            this.shortcut = [];
        },
        _beforeRender: function () {
            if (!this.config.renderTo) {
                this.fix = true;
                this.config.renderTo = WWF.utils.getFixContainer();
            }
            var d = {"max-height": this.config.scrollHeight};
            if (this.config.height) {
                d.height = this.config.height;
            }
            if (this.config.width) {
                d.width = this.config.width;
            }
            if (this.config.ellipsis && !WWF.browser.ie7) {
                this.config.itemConfig.ellipsis = "wwf-ellipsis";
            }
            this.ui.wrap.css(d);
            if (this.config.shadow) {
                if (WWF.browser.ie) {
                    this.view.shadow();
                } else {
                    this.view.addClass("wwf-shadow");
                }
            }
            if (this.config.radius) {
                this.view.addClass("wwf-radius");
            }
            if (this.config.horizontal) {
                this.view.addClass("wwf-menu-horizontal");
            }
            if (this.store) {
                var f = this, g;
                this.store.on("load", this.refresh, this).on("change", this.refresh, this).on("loadstart", function () {
                    g = new WWF.Loading({renderTo: f.ui.body, type: "text"});
                }).on("loadend", function () {
                    if (g) {
                        g.hide();
                    }
                });
            }
            this.__hide = WWF.utils.bindObject(this.hide, this);
            this.view.regWWFInstance(this);
        },
        _afterRender: function () {
            if (this.store && this.store.data.length <= 0) {
                this.store.loadData();
            } else {
                this.refresh();
            }
            this.view.data("menu", this);
        },
        refresh: function () {
            this.clearSelections(false);
            this.hoverItem = null;
            var f = this.ui.body;
            var d = this.config.renderChild;
            if (d || (!d && this.childRendered)) {
                var g = this.store.data;
                if (g.length < 1) {
                    f.html("");
                } else {
                    this.shortcut = [];
                    this._renderChildren(g);
                }
            }
        },
        _datachange: function (g, f) {
            if (f == "sort") {
                for (var d = 0; d < g.length; d++) {
                    this._items[d].update(g);
                }
            }
        },
        _renderChildren: function (l) {
            var f = true;
            var n = $("<div></div>");
            this.hoverItem = null;
            if (f) {
                var p;
                for (var g = 0; g < this._items.length; g++) {
                    p = this._items[g];
                    p.un("mouseover");
                    p.destory(true);
                    this._items[g] = null;
                    delete this._items[g];
                }
                this._items = [];
                this.ui.body.html("");
            }
            if (this.selected) {
                this.selected = null;
            }
            for (var m = 0; m < l.length; m++) {
                if (!f) {
                    this._items[m].refresh(l[m]);
                } else {
                    itemCls = this.config.itemClass;
                    if (WWF.isString(itemCls)) {
                        itemCls = WWF.classFromName(itemCls);
                    }
                    var o = $.extend(this.config.itemConfig, {
                        parent: this,
                        data: l[m],
                        horizontal: this.config.horizontal,
                        renderTo: n
                    });
                    if (this.config.clsSelected) {
                        o.clsSelected = this.config.clsSelected;
                    }
                    if (this.config.itemHeight) {
                        o.style = {height: this.config.itemHeight};
                    }
                    var d = o.data.shortcut;
                    var h = new itemCls(o);
                    h.index = m;
                    if (d) {
                        this.shortcut[d.toLowerCase()] = h;
                    }
                    h.on("click", this._itemClick, this);
                    h.bindHoverEvent(this.config.clsHover);
                    if (!this.config.multiple && !this.config.useHover) {
                        h.on("mouseover", this._select, this);
                        h.on("mouseout", this.unselect, this);
                    } else {
                        h.on("mouseover", this.hover, this);
                        h.on("mouseout", this.unhover, this);
                    }
                    this._items.push(h);
                }
            }
            n.appendTo(this.ui.body);
            this.__ellipsis = false;
            this.setMinWidth();
            this.childRendered = true;
        },
        _itemClick: function (f, d) {
            this._select(d);
            if (((+(new Date)) - !this.__fixEnterEventInLink) > 100) {
                this._fireClick(true, f, this.store.getData(d.index), this.view, f, d);
            }
        },
        getItem: function (d, h) {
            if (WWF.isNumber(d) && d < this._items.length) {
                return this._items[d];
            } else {
                if (d instanceof WWF.MenuItem) {
                    return d;
                }
            }
            if (arguments.length == 2) {
                var g = false;
                for (var f = 0; f < this._items.length; f++) {
                    var j = this._items[f].data[d];
                    if (this._items[f].data.label != "-" && undefined === j) {
                        break;
                    }
                    if (j == h) {
                        g = this._items[f];
                        break;
                    }
                }
                return g;
            }
        },
        characterNav: function (m) {
            if (!this.config.useCharacterNav) {
                return;
            }
            var f = this._navCache, j = +new Date();
            if (!f.time) {
                f.time = j;
            }
            if ((j - f.time) <= this.config.filterDelayTime) {
                m = (f.key || "") + m;
            }
            f.time = j;
            if (f.key != m) {
                f = this._navCache = {key: m, find: 0, items: [], time: j};
                for (var l = 0; l < this._items.length; l++) {
                    var n = this._items[l], h = n.data[this.config.filterField];
                    if (h.substr(0, m.length).toLowerCase() == m.toLowerCase()) {
                        if (f.key == m) {
                            f.items.push(l);
                        }
                    }
                }
            } else {
                f.find++;
                if (f.items && (f.find >= f.items.length)) {
                    f.find = 0;
                }
            }
            var g = f.items[f.find];
            if (g != undefined) {
                if (this.config.multiple) {
                    this.hover(g);
                } else {
                    this._select(g);
                }
            }
        },
        _keyNavType: function (g) {
            if (g.keyCode == WWF.keyboard.Control) {
                this.fixChromeKeydown = true;
            }
            switch (g.keyCode) {
                case WWF.keyboard.Up:
                    this.selectPrev(this.config.useHover);
                    return false;
                    break;
                case WWF.keyboard.Down:
                    this.selectNext(this.config.useHover);
                    return false;
                    break;
                case WWF.keyboard.Enter:
                    if (this.config.useHover) {
                        if (this.hoverItem) {
                            if (this.config.multiple) {
                                this.__fixEnterEventInLink = +(new Date);
                                this._select(this.hoverItem);
                                return false;
                            } else {
                                return this._itemClick(g, this.hoverItem);
                            }
                            return false;
                        }
                    }
                    if (!this.config.multiple) {
                        this.__fixEnterEventInLink = +(new Date);
                        return this._fireClick(false, g, this.getSelectedItems(), this.view, g, this.selected);
                    }
                    break;
                case WWF.keyboard.Escape:
                    if (this.config.esc) {
                        this.hide();
                        return false;
                    }
                    break;
                case WWF.keyboard.Tab:
                    if (this.config.esc) {
                        this.hide();
                        return true;
                    }
                    break;
                case WWF.keyboard.Control:
                    return;
                    break;
                default:
                    if (this.fixChromeKeydown) {
                        this.fixChromeKeydown = false;
                        return;
                    }
                    var d = WWF.keyboard.getText(g.keyCode);
                    if (d) {
                        d = d.toLowerCase();
                        var f = this.shortcut[d];
                        if (f && (f instanceof WWF.MenuItem) && f.isActive()) {
                            return this._fireClick(false, g, this.store.getData(f.index), this.view);
                        }
                    }
                    if (g.keyCode >= WWF.keyboard.A && g.keyCode <= WWF.keyboard.Z) {
                        this.characterNav(WWF.keyboard.getText(g.keyCode));
                    }
                    break;
            }
        },
        _fireClick: function (f, j, h) {
            var d = Array.prototype.slice.call(arguments, 2), g = this;
            if (!h) {
                return true;
            }
            if (h.deferEventTrigger === false) {
                g.fire("click", d);
            } else {
                if (this.config.deferEventTrigger) {
                    window.setTimeout(function () {
                        g.fire("click", d);
                    }, 10);
                } else {
                    this.fire("click", d);
                }
            }
            if (this.config.clearSelectedAfterClick) {
                this.clearSelections();
            }
            if (!f) {
                j.stopPropagation();
                if (!WWF.platform.Linux) {
                    return false;
                }
            }
        },
        clearSelections: function (d) {
            this._last = -1;
            if (!this.config.multiple) {
                if (!this.selected) {
                    return;
                }
                if ($.isFunction(this.selected.unselect)) {
                    this.selected.unselect();
                }
                this.selected = {};
            } else {
                if (!this.selected || this.selected.length < 1) {
                    return;
                }
                $.each(function (f, g) {
                    g.unselect();
                });
                this.selected = [];
            }
            if (!d) {
                this.fire("selectionchange", [this.selected], this);
            }
        },
        unselect: function (d, j) {
            var g = this.getItem(d, j), h;
            if (!this.config.multiple) {
                if (!g) {
                    g = this.selected;
                }
                if (g && g.selected) {
                    g.unselect();
                } else {
                    if (this.selected && this.selected.unselect) {
                        this.selected.unselect();
                    }
                }
                this.selected = null;
                this._last = -1;
                h = this.store.getData(g.index);
            } else {
                this.selected = WWF.utils.arrayRemove(this.selected, g.index);
                h = [];
                for (var f = 0; f < this.selected.length; f++) {
                    h[f] = this.store.getData(this.selected[f]);
                }
            }
            this.fire("selectionchange", [h], this);
        },
        select: function (d, h, f) {
            if (this.childRendered && this.isShow) {
                if (!b) {
                    this.ui.wrap.scrollTop(this.ui.body.outerHeight());
                }
                return this._select(d, h, f);
            } else {
                var g = this.store.query(d, h);
                if (g) {
                    this._last = g.index;
                    return g.data;
                } else {
                    return null;
                }
            }
        },
        _select: function (d, l, g) {
            var h = this.getItem(d, l), j;
            if (!h) {
                this.clearSelections();
                return;
            }
            if (!h.isActive()) {
                return;
            }
            this._last = h.index;
            if (!this.config.multiple) {
                if (h && !h.selected) {
                    if (this.selected && this.selected.unselect) {
                        this.selected.unselect();
                    }
                    this.selected = h;
                    this._last = h.index;
                    h.select();
                    if (this.config.focusItem) {
                        h.focus();
                    }
                    j = this.store.getData(h.index);
                }
                if (h) {
                    this._scrollInView(h);
                }
            } else {
                if (h.selected) {
                    h.unselect();
                    this.selected = WWF.utils.arrayRemove(this.selected, h.index);
                } else {
                    if (!this.selected) {
                        this.selected = [];
                    }
                    this.selected.push(h.index);
                    h.select();
                    if (this.config.focusItem) {
                        h.focus();
                    }
                }
                j = [];
                for (var f = 0; f < this.selected.length; f++) {
                    j[f] = this.store.getData(this.selected[f]);
                }
            }
            if (!g) {
                this.fire("selectionchange", [j], this);
            }
            return h ? h.config.data : null;
        },
        hover: function (d) {
            var f = this.getItem(d);
            if (!f || !f.isActive()) {
                return;
            }
            if (this.hoverItem) {
                this.hoverItem.out();
            }
            this.hoverItem = f;
            if (f && f.hover) {
                f.hover();
            }
            if (this.config.focusItem) {
                f.focus();
            }
            this._scrollInView(f);
            return f;
        },
        unhover: function (d) {
            if (this.hoverItem) {
                this.hoverItem.out();
            }
            this.hoverItem = null;
        },
        selectPrev: function (h) {
            var g;
            if (!this.childRendered) {
                g = this.store.query(this._last - 1);
                if (g) {
                    this._last = g.index;
                    return g.data;
                } else {
                    return null;
                }
            }
            if (this._last <= 0) {
                return;
            }
            var d = false;
            for (var f = this._last - 1; f >= 0; f--) {
                g = this._items[f];
                if (g.isActive()) {
                    d = true;
                    this._last = f;
                    break;
                }
            }
            if (d) {
                if (h) {
                    return this.hover(g);
                } else {
                    return this._select(g);
                }
            }
        },
        selectNext: function (g) {
            var f;
            if (!this.childRendered) {
                f = this.store.query(this._last + 1);
                if (f) {
                    this._last = f.index;
                    return f.data;
                } else {
                    return null;
                }
            }
            if (this._last >= (this._items.length - 1)) {
                return;
            }
            finded = false;
            for (var d = this._last + 1; d < this._items.length; d++) {
                f = this._items[d];
                if (f.isActive()) {
                    finded = true;
                    this._last = d;
                    break;
                }
            }
            if (finded) {
                if (g) {
                    return this.hover(f);
                } else {
                    return this._select(f);
                }
            }
        },
        selectFirst: function () {
            this._last = -1;
            return this.selectNext();
        },
        _adjustScrollHeight: function () {
            if (this.hasScroll() && !this.__adjustedScrollHeight) {
                var f = this._items[0].view.outerHeight(), d;
                d = Math.ceil(this.config.scrollHeight / f) * f - 1;
                this.ui.wrap.css("max-height", d);
                if (this.ui.body.outerHeight() <= d) {
                    this.setMinWidth();
                }
                this.__adjustedScrollHeight = true;
            }
        },
        _bindKeydownEvent: function () {
            if (this.__keyNav) {
                var f = document;
                if (this.config.useInnerkeyNav) {
                    f = this.view;
                    $(f).bind("keydown", this.__keyNav);
                } else {
                    var d = $.inArray(this.__keyNav, WWF.EscManager.queue);
                    if (d < 0) {
                        WWF.EscManager.add(this.__keyNav);
                    }
                }
            }
        },
        show: function (j, l, d, h) {
            var g = this;
            if (!this.childRendered) {
                this._renderChildren(this.store.data);
                this.childRendered = true;
                this._last = -1;
            }
            g.fire("beforeshow", [], g);
            this.ui.body.show();
            if (this.config.keyNav && !this.__keyNav) {
                this.__keyNav = WWF.utils.bindObject(this._keyNavType, this);
            }
            this._bindKeydownEvent();
            if (!this.isShow) {
                if (this.config.singleDisplay) {
                    WWF.MenuManager.regist(this);
                }
                if (this.config.esc) {
                }
                if (b) {
                    function f() {
                        if (!g.__scrollInMobile && g.hasScroll()) {
                            g.iscroll = new iScroll(g.ui.wrap[0]);
                            g.__scrollInMobile = true;
                        }
                    }

                    if (!WWF.classFromName("iScroll")) {
                        WWF.loadScript(WWF.path + "/iscroll.min.js", f);
                    } else {
                        f();
                    }
                }
            }
            this.isShow = true;
            this._adjustScrollHeight();
            this.view.removeClass("wwf-menu-hide");
            if (WWF.browser.ie9) {
                this.view.show();
            } else {
                if (WWF.browser.ie11) {
                    this.view.css("visibility", "visible");
                }
            }
            this._setMinWidth();
            d = d ? d : "bottom,left";
            if (j) {
                this.target = j;
                this.view.follow(j, d, l, h);
            } else {
                if (!this.fix) {
                    this.view.css({top: "auto", left: "auto"});
                }
            }
            if (this.iscroll) {
                this.iscroll.refresh();
            }
            if (!this.__ellipsis && this.config.width && this.config.ellipsis) {
                $(".wwf-ellipsis", this.view).ellipsis({tooltip: {renderTo: this.view, position: "right,top"}});
            }
            this.view.css("z-index", this.config.zIndex || WWF.getNextzIndex());
            setTimeout(function () {
                g.fire("show", [], g);
            }, 10);
            return this;
        },
        _restoreFocus: function () {
            if (this.config.restoreFocus) {
                try {
                    if (WWF.isObject(this.config.restoreFocus)) {
                        $(this.config.restoreFocus).focus();
                    } else {
                        this.target.focus();
                    }
                } catch (d) {
                }
            }
        },
        hide: function (g) {
            if (!this.isShow) {
                return;
            }
            this.ui.body.hide();
            this.isShow = false;
            var f = this;
            if (this.target) {
                if (WWF.browser.ie9) {
                    this.view.hide();
                } else {
                    if (WWF.browser.ie11) {
                        this.view.css("visibility", "hidden");
                    } else {
                        this.view.css({left: "-5000px", top: "-5000px"});
                    }
                }
                this._restoreFocus();
            }
            if (this.__keyNav) {
                var d = document;
                if (this.config.useInnerkeyNav) {
                    d = this.view;
                    $(d).unbind("keydown", this.__keyNav);
                } else {
                    WWF.EscManager.remove(this.__keyNav);
                }
            }
            this.view.addClass("wwf-menu-hide");
            if (WWF.browser.ie) {
                this.view.find("*[data-ui='Tooltip']").tooltip("hide");
            }
            if (this.config.esc) {
            }
            if (this.hoverItem) {
                this.hoverItem.out();
                this.hoverItem = null;
            }
            if (!g) {
                this.clearSelections();
            }
            if (this.config.deferEventTrigger) {
                setTimeout(function () {
                    f.fire("hide", [], f);
                }, 15);
            } else {
                this.fire("hide", [], this);
            }
            return this;
        },
        _scrollInView: function (o) {
            if (b) {
                return;
            }
            if (this.config.focusItem) {
                return;
            }
            var p = this.getItem(o);
            if (o == undefined || (!p && !p.id)) {
                return;
            }
            var n, m, j, h, f = this.ui.body.position(), l = p.view.position(), g = p.view.outerHeight();
            n = this.ui.wrap.scrollTop();
            m = n + this.ui.wrap.outerHeight();
            j = l.top;
            h = l.top + g;
            if (n > j) {
                this.ui.wrap.scrollTop(j);
            } else {
                if (m < h) {
                    var d = n + (h - m);
                    d += 2;
                    this.ui.wrap.scrollTop(d);
                }
            }
        },
        position: function (f, g, d) {
            if (!d) {
                d = "bottom,left";
            }
            return this.view.follow(f, d, g);
        },
        getItemHtml: function (g) {
            itemCls = this.config.itemClass;
            if (WWF.isString(itemCls)) {
                itemCls = WWF.classFromName(itemCls);
            }
            var h = $.extend(this.config.itemConfig, {
                data: g,
                event: false,
                autoRender: false,
                ellipsis: "wwf-ellipsis"
            });
            var f = new itemCls(h);
            f._createView();
            f._beforeRender();
            var d = f.getHtml();
            f.destory();
            f = null;
            return d;
        },
        each: function (f) {
            var g = this, h;
            for (var d = 0; d < this._items.length; d++) {
                h = this._items[d];
                if (f.call(g, h.data, h) === true) {
                    break;
                }
            }
        },
        sort: function (f, d) {
            this.store.sort(f, d);
            return this;
        },
        displayItems: function (g, d) {
            var h = d ? "show" : "hide";
            var f = d ? "hide" : "show";
            $.each(this._items, function (j, l) {
                if (g.call(window, j, l.data)) {
                    l[h]();
                } else {
                    l[f]();
                }
            });
            this.setMinWidth();
        },
        hasScroll: function () {
            return this.ui.body[0].offsetHeight > this.ui.wrap[0].offsetHeight;
        },
        disableItems: function (f, d) {
            $.each(this._items, function (g, h) {
                if (!h.isLine) {
                    if (f.call(window, g, h.data)) {
                        h.disable(d);
                    } else {
                        h.disable(!d);
                    }
                }
            });
        },
        destory: function () {
            this._super();
            for (var d = 0; d < this._items.length; d++) {
                this._items[d] = null;
            }
            this._items = null;
            this.store.destory();
            this.store = null;
            if (this.view && this.view.remove) {
                this.view.remove();
            }
        },
        reset: function () {
            $.each(this._items, function (d, f) {
                f.show();
                f.disable(false);
            });
            this.clearSelections(false);
        },
        getStore: function () {
            return this.store;
        },
        zIndex: function (d) {
            this.view.css("z-index", d);
        },
        filter: function (g, f) {
            var d = function (h, m, j) {
                var l = h[j];
                if (l.indexOf(m) != -1) {
                    return false;
                } else {
                    return true;
                }
            };
            f = f || "label";
            $.each(this._items, function (h, j) {
                if (d(j.data, g, f)) {
                    j.hide();
                } else {
                    j.show();
                }
            });
        },
        updateItem: function (d, h, g) {
            var f = this.getItem(d, h);
            this.store.data[f.index] = g;
            f.refresh(g);
            $(".wwf-ellipsis", f.view).ellipsis();
            return this;
        },
        update: function (f) {
            this._navCache = {};
            this.__adjustedScrollHeight = false;
            var d = this;
            $(".wwf-ellipsis", d.view).tooltip(false);
            d.store.update(f);
        },
        getInstance: function () {
            return this;
        },
        getSelectedItems: function () {
            var f = null;
            if (!this.config.multiple) {
                if (this.selected) {
                    f = this.store.getData(this.selected.index);
                }
            } else {
                if (this.selected && this.selected.length > 0) {
                    f = [];
                    for (var d = 0; d < this.selected.length; d++) {
                        f[d] = this.store.getData(this.selected[d]);
                    }
                }
            }
            return f;
        },
        setFixContainer: function (d) {
            if (!d) {
                d = WWF.utils.getFixContainer();
            } else {
                d = $(d);
            }
            this.view.appendTo(d);
            this.config.renderTo = d;
        },
        setMinWidth: function (d) {
            if (this.isShow) {
                d = d || this._needSetWidth;
                if (d) {
                    this._setMinWidth(d);
                }
            } else {
                if (d) {
                    this.config.minWidth = d;
                    this._needSetWidth = d;
                }
            }
        },
        _setMinWidth: function (d) {
            var m = WWF.browser;
            if (this.config.horizontal) {
                return;
            }
            if (this.config.width != "auto") {
                this.ui.wrap.css({width: this.config.width});
            } else {
                var l = this, p, g = this.ui.body, h = 0, j = function () {
                    var q;
                    if (m.ie8) {
                        q = 22;
                    } else {
                        if (m.ie9 || m.ie7) {
                            q = 19;
                        } else {
                            q = 21;
                        }
                    }
                    return q;
                };
                if (d) {
                    this.config.minWidth = d;
                } else {
                    d = this.config.minWidth;
                }
                var o = this.hasScroll();
                g.show();
                this.ui.wrap.removeAttr("style");
                if (m.ie && m.version < 8) {
                    this.view.css("width", "none");
                    this.view.find(".wwf-menu-item:not(.wwf-menu-line) .wwf-menu-label").css("display", "inline-block");
                    this.view.find(".wwf-menu-label > span").css("width", "auto").removeClass("wwf-ellipsis");
                }
                var f = l.ui.body[0].scrollWidth;
                f += (o ? j() : 0);
                d = Math.max(f, d);
                d = Math.min(d, 600);
                var n = {"min-width": d, "max-height": this.config.scrollHeight};
                if (this.config.width != "auto") {
                    n.width = this.config.width;
                }
                if (this.config.height) {
                    n.height = this.config.height;
                }
                if (m.ie && m.version < 8) {
                    n["min-width"] = this.config.minWidth;
                }
                this.ui.wrap.css(n);
            }
            if (m.ie && m.version < 8) {
                this.view.find(".wwf-menu-item:not(.wwf-menu-line) .wwf-menu-label").css("display", "block");
                this.view.find(".wwf-menu-label > span").addClass("wwf-ellipsis");
                this.view.css("width", d);
            }
            this._ellipsis();
            this._needSetWidth = null;
        },
        _ellipsis: function () {
            $(".wwf-ellipsis", this.view).ellipsis({
                reset: true,
                useTitle: true,
                tooltip: {position: "left,top", renderTo: this.view}
            });
        },
        restoreFocus: function (d) {
            this.config.restoreFocus = d;
        },
        updateConfig: function (d) {
            if (d.focusItem != undefined) {
                this.config.focusItem = d.focusItem;
                this.config.restoreFocus = this.config.focusItem;
            }
            if (d.scrollHeight) {
                this.config.scrollHeight = d.scrollHeight;
                this.ui.wrap.css("max-height", d.scrollHeight);
            }
            if (d.restoreFocus != undefined) {
                this.config.restoreFocus = d.restoreFocus;
            }
            if (d.width) {
                this.setMinWidth(d.width);
                this.ui.wrap.css("width", d.width);
            }
            if (d.deferEventTrigger != undefined) {
                this.config.deferEventTrigger = d.deferEventTrigger;
            }
            this._ellipsis();
        },
        removeEscHandle: function () {
            WWF.EscManager.remove(this.__keyNav);
        }
    });
})();
(function () {
    WWF.template.add("WWF.Loading", ' <div class="wwf-load "><span >${text}</span></div>');
    WWF.Loading = WWF.Component.extend({
        templateName: "WWF.Loading",
        defaultConfig: {
            icon: true,
            border: true,
            text: null,
            mask: false,
            center: true,
            transparent: false,
            maskTransparent: true,
            clsAppend: null,
            target: null,
            zindex: null
        },
        handler: {text: "span"},
        _init: function () {
            var c = this, b = c.config;
            c.defaultConfig.text = '正在载入...';
            if (!(b.text === false)) {
                b.text = c.defaultConfig.text;
            }
            c._addTplData("text", b);
            c._supportEvents("show", "hide");
            if (b.target && b.target != document.body) {
                b.renderTo = $(b.target).parent();
                c.isinner = true;
            } else {
                c.isinner = false;
            }
        },
        _beforeRender: function () {
            this.update(this.config);
        },
        _afterRender: function () {
            this.show();
            if (this.config.center) {
                this.center();
            }
            if (this.config.clsAppend) {
                this.view.addClass(this.config.clsAppend);
            }
            if (this.config.once) {
                this.destory(true);
            }
        },
        text: function (b) {
            if (b) {
                this.ui.text.text(b);
            } else {
                return this.ui.text.text();
            }
        },
        show: function () {
            this.view.css({"z-index": this.config.zindex || WWF.getNextzIndex()});
            if (!this.config.transparent) {
                this.view.css("display", "inline-block");
            }
            if (this.mask) {
                this.mask.show();
            }
            if (this.config.center) {
                this.center();
            }
            this.fire("show");
            this.isShow = true;
            if (this.config.border) {
                this.startAnimat();
            }
            return this;
        },
        hide: function () {
            this.view.hide();
            if (this.mask) {
                this.mask.hide();
            }
            this.isShow = false;
            return this;
        },
        update: function (c) {
            var b = true;
            if (c && c.text === false) {
                b = false;
            }
            $.extend(this.config, c);
            if (!c || !c.text) {
                this.config.text = this.defaultConfig.text;
            }
            if (this.config.center && this.rendered) {
                this.center();
            }
            if (this.config.mask) {
                if (!this.mask) {
                    this.mask = new WWF.Mask({
                        target: this.config.target || this.config.renderTo,
                        transparent: this.config.maskTransparent,
                        opacity: "0.1",
                        zindex: this.config.zindex ? (this.config.zindex - 1) : null
                    });
                }
                this.mask.show();
            }
            this.text(this.config.text);
            this.view[0].className = "wwf-load";
            if (this.config.icon) {
                this.ui.text.addClass("wwf-load-icon");
            }
            if (this.config.border) {
                this.view.addClass("wwf-load-box");
            } else {
                if (b) {
                    this.ui.text.addClass("wwf-load-text");
                }
            }
            this.startAnimat();
        },
        center: function () {
            var d, c, b = {position: "absolute"};
            this.view.css(b);
            if (this.isinner) {
                this.view.center(this.config.target);
            } else {
                d = WWF.utils.limit(this.view, this.config.renderTo);
                b.left = d.centerX;
                b.top = d.centerY;
            }
            this.view.css(b);
            return this;
        },
        getMask: function () {
            return this.mask;
        },
        setTransparent: function (b) {
            if (!b) {
                this.view.show();
            }
        },
        startAnimat: function () {
            if (this.config.icon === false) {
                var b = this.text();
                this.text(b.replace("...", ""));
                this.ui.text.addClass("wwf-load-anim");
            }
        }
    });
    $.fn.loading = function () {
        var d = arguments[0], b = $(this).data("WWF.Loading"), c = {};
        if (this != document || this != document.body) {
            c = {target: this};
        }
        if (!b) {
            if (arguments.length == 1 && WWF.isObject(d)) {
                $.extend(c, d);
            }
            b = new WWF.Loading(c);
            $(this).data("WWF.Loading", b);
        }
        if (WWF.isString(d)) {
            if ($.isFunction(b[d])) {
                return b[d].apply(b, Array.prototype.slice.call(arguments, 1));
            } else {
                if (b[d]) {
                    return b[d];
                }
            }
        } else {
            if (d === false) {
                b.hide();
            } else {
                b.update(d);
                b.show();
            }
        }
        return this;
    };
    WWF.ns("$.wwf.loading");
    $.wwf.loading.create = function (b) {
        if (b.target) {
            return $(b.target).loading(b);
        } else {
            var c = new WWF.Loading(b);
            $(c.view).data("WWF.Loading", c);
            return c.view;
        }
    };
})();
(function () {
    if (WWF.Tooltip) {
        return;
    }
    var b = WWF.TooltipManager = {
        _cache: [], _free: [], get: function (n) {
            var m, l = true;
            while (l) {
                m = b._free.shift();
                if (!m) {
                    l = false;
                }
                if (m && m.view && m.view.parent().length) {
                    m.update(n);
                    l = false;
                    return m;
                }
            }
            return b.create(n);
        }, clear: function () {
            b._cache = [];
            b._free = [];
        }, create: function (m) {
            var l = new WWF.Tooltip(m);
            b._cache.push(l);
            return l;
        }, free: function (l) {
            b._free.push(l);
        }
    };
    WWF.template.add("WWF.tooltip", '<div class="wwf-tooltip wwf-out ${clsAppend}"><i class="ie-fix"></i><div class="warp"><div class="wwf-tooltip-body wwf-wordwrap" ></div><i></i><a href="javascript:;" class="close wwf-ic16 wwf-ic-delete"></a></div></div>');
    WWF.Tooltip = WWF.Component.extend({
        templateName: "WWF.tooltip",
        autoRender: false,
        defaultConfig: {
            content: "",
            maxWidth: 400,
            width: null,
            effects: null,
            showtime: 0,
            closable: false,
            target: null,
            position: "top,left",
            type: "tooltip",
            disableInMobile: false,
            clsIconTooltip: "wwf-icon-tooltip",
            layoutHandler: false,
            stopBubbling: false,
            arrow: true,
            handleTab: false,
            defaultFocus: null,
            clsAppend: "",
            offset: {top: -15, bottom: 3, right: 12, left: -12}
        },
        handler: {content: ".warp .wwf-tooltip-body", icon: ".warp i", close: ".warp .close", arrow: ".ie-fix"},
        _init: function () {
            this._supportEvents("show", "hide", "close", "beforeclose");
            this.isShow = false;
            this._addTplData("clsAppend", this.config.clsAppend);
        },
        _beforeRender: function () {
            if (!this.config.renderTo || $(this.config.renderTo).size() == 0) {
                this.fixResize = true;
                this.config.renderTo = WWF.utils.getFixContainer();
            }
            this.update(this.config, true);
            var l = this;
            this.ui.close.bind("click", $.proxy(this.close, this));
        },
        _afterRender: function () {
        },
        close: function (l) {
            if (this.fire("beforeclose", [l], this) === false) {
                return;
            }
            this.fire("close", [l], this);
            this.hide();
        },
        show: function (l, n) {
            if (l && l.target) {
                this.config.target = l.target;
            }
            if ($(this.config.target).length < 0) {
                return;
            }
            if (this.config.disableInMobile && (WWF.platform.Tablet || WWF.platform.Phone)) {
                return this;
            }
            if (!this.rendered) {
                this.render();
            }
            this.view.css({
                "z-index": WWF.getNextzIndex(),
                left: "auto",
                top: "auto",
                width: this.config.width || "auto"
            });
            this.view.show();
            if (!this.config.width) {
                this.view.width(this.view.outerWidth());
            }
            this._setPosition(n);
            this.fire("show", [], this);
            this.isShow = true;
            if (this.config.showtime > 0) {
                this.__autoclose = setTimeout($.proxy(this.hide, this), this.config.showtime * 1000);
            }
            if (this.config.layoutHandler) {
                var m = this;
                this.__setPosition = function () {
                    m._setPosition();
                };
                WWF.frame.bind(this.config.layoutHandler, this.__setPosition);
            }
            if (this.config.handleTab) {
                this.__tabHandler = $.proxy(this._tabHandler, this);
                this.view.bind("keydown", this.__tabHandler);
                this._setDefaultFocus();
            }
            return this;
        },
        _tabHandler: function (q) {
            var p = (q.keyCode == WWF.keyboard.Tab), r, o, m, n = this.view;
            if (p) {
                if (q.shiftKey) {
                    o = n.getLastTabElement(false, this.ui.close);
                    r = n.getFirstTabElement(false);
                    if (r && q.target == r[0]) {
                        m = this.ui.close;
                    } else {
                        if (q.target == this.ui.close[0]) {
                            m = o;
                        }
                    }
                } else {
                    o = n.getLastTabElement(true, this.ui.close);
                    r = n.getFirstTabElement(true);
                    if (o && q.target == o[0]) {
                        m = this.ui.close;
                    } else {
                        if (q.target == this.ui.close[0]) {
                            m = r;
                        }
                    }
                }
                if (m) {
                    try {
                        m.focus();
                    } catch (l) {
                    }
                    q.stopPropagation();
                    return false;
                }
            }
            if (q.keyCode == WWF.keyboard.Escape) {
                this.close();
                q.stopPropagation();
                return false;
            }
            if (q.keyCode == WWF.keyboard.Enter) {
                if (q.target == this.ui.close[0]) {
                    this.close();
                    q.stopPropagation();
                    return false;
                }
                q.stopPropagation();
            }
        },
        _setDefaultFocus: function () {
            var m;
            if (this.config.defaultFocus) {
                m = $(this.config.defaultFocus);
            } else {
                m = this.view.getFirstTabElement(true);
            }
            if (m) {
                try {
                    m.focus();
                } catch (l) {
                }
            }
        },
        hide: function () {
            if (!this.view) {
                return;
            }
            this.view.hide();
            this.isShow = false;
            if (this.__autoclose) {
                clearTimeout(this.__autoclose);
                this.__autoclose = null;
            }
            if (this.config.layoutHandler) {
                WWF.utils.unbind(this.config.layoutHandler);
            }
            if (WWF.browser.chrome) {
                this.view.find("a,input").blur();
            }
            this.fire("hide", [], this);
        },
        update: function (o, l) {
            if (this.__setPosition) {
                WWF.utils.unbind(this.config.layoutHandler, this.__setPosition);
            }
            if (this.__autoclose) {
                clearTimeout(this.__autoclose);
                this.__autoclose = null;
            }
            var n = "auto", q = this.defaultConfig.maxWidth;
            if (o) {
                var r = $(o.renderTo);
                if (r.size() > 0 && r[0] != $(this.config.renderTo)[0]) {
                    this.view.appendTo(r);
                    this.renderTo = r;
                } else {
                    if (this.renderTo && this.renderTo[0] != $(this.config.renderTo)[0]) {
                        r = $(this.config.renderTo);
                        this.view.appendTo(r);
                        this.renderTo = r;
                    }
                }
                this.config = $.extend({}, this.defaultConfig, o);
                n = o.width;
                q = o.maxWidth;
                this.ui.close.unbind("click").bind("click", $.proxy(this.close, this));
            }
            if (this.config.stopBubbling) {
                this.view.bind("click", function () {
                    return false;
                });
            } else {
                this.view.unbind("click");
            }
            if (l != true) {
                this.clearEvents();
            }
            this._setEvent(this.config);
            this.view[0].className = "wwf-tooltip wwf-out " + this.config.clsAppend;
            this.ui.icon[0].className = "clearfix";
            var p = $.isFunction(this.config.content) ? this.config.content() : this.config.content;
            this.ui.content.html(p);
            if (this.config.icon) {
                this.ui.icon.addClass(this.config.icon);
                this.view.addClass(this.config.clsIconTooltip);
            }
            if (this.config.type) {
                var m = {tooltip: "warn", bubble: "", help: "info", error: "error"};
                this.view.addClass(m[this.config.type]);
            }
            if (n) {
                this.view.width(n);
            }
            this.view.css("max-width", q);
            if (this.config.closable) {
                this.ui.content.addClass("wwf-tooltip-body-close");
                this.ui.close.show();
            } else {
                this.ui.close.hide();
                this.ui.content.removeClass("wwf-tooltip-body-close");
            }
        },
        _setPosition: function (n) {
            var p = this.config.position.split(","), z = $(this.config.target), A = z.offset(), x,
                q = {left: "right-mode", right: "left-mode"}, u = 0, r = 0, m = 0, l = 0;
            n = n || this.config.offset;
            if (z.size() && !z.is(":visible")) {
                this.hide();
                return;
            }
            if (n) {
                m = n.left || 0;
                l = n.top || 0;
            }
            this.view.removeClass("top").removeClass("left-mode").removeClass("right-mode").removeClass("bottom");
            if (n && n.type) {
                n = this.config.offset;
            }
            $renderTo = $(this.view.parent());
            var o = $renderTo.css("position");
            if (o == "relative") {
                u = $renderTo.offset().left;
                r = 0;
                A = z.position();
            } else {
                if (o == "absolute") {
                    u = -z.outerWidth();
                    r = z.parent().offset().top - $renderTo.offset().top - 17;
                    A = z.position();
                }
            }
            if ($.trim(p[0]) == "left" || $.trim(p[0]) == "right") {
                var s = this.view.follow(this.config.target, this.config.position, n || {top: -15, left: -8});
                if (s) {
                    var w = s.split(",");
                    this.view.addClass(w.length ? w[1] : "");
                    this.view.addClass(q[w[0]]);
                }
            } else {
                x = this.view.follow(this.config.target, this.config.position, n || {top: -15, left: -8});
                this.view.addClass(x.replace(",", " "));
            }
            var y = $(this.config.target).width();
            if (x && y < 30) {
                this.css({left: x.left - y / 2 - 5});
            }
            if (this.config.arrow) {
                this.view.addClass("wwf-tooltip-arrow");
            }
        },
        destroy: function () {
            this.config.layoutHandler && WWF.utils.unbind(this.config.layoutHandler);
            if (this.config.showtime > 0) {
                clearTimeout(this.__autoclose);
            }
            this._super();
        }
    });
    var h = (WWF.platform.Tablet || WWF.platform.Phone);
    var d = 0, g, c;
    var f = {
        show: function (o) {
            var n = $(this), p = WWF.utils.htmlEncode(n.attr("title"));
            if (n.data("tooltip-isshow") == true) {
                var m = n.data("tooltip-options");
                if (m.handleEvent) {
                    f.hide.call(this);
                }
                o.stopPropagation();
                return false;
            }
            if (this.title) {
                n.data("title", this.title);
                this.title = "";
            }
            if (this.alt) {
                this.alt = "";
            }
            if (!n.data("tooltip-options")) {
                if (p) {
                    n.data("tooltip-options", {content: p});
                } else {
                    return;
                }
            }
            if (!h) {
                var l = n.data("tooltip-options");
                if (l.notDelay) {
                    f.showTooltip.call(n);
                } else {
                    clearTimeout(d);
                    d = setTimeout($.proxy(f.showTooltip, n), 700);
                    g = n[0];
                }
            } else {
                f.showTooltip.call(n);
                $(document).one("touchend", $.proxy(f.hide, n));
            }
            if (o.type !== "touchstart" && o.type !== "mouseenter") {
                o.stopPropagation();
                return false;
            }
        }, showTooltip: function () {
            var l = this.data("tooltip-options");
            if (this.data("tooltip-isshow") == true) {
                return;
            }
            if (!l) {
                return;
            }
            if (!l.renderTo) {
                l.renderTo = WWF.frame.pageCacheNode();
            }
            l.target = this[0];
            if (!this.is(":visible")) {
                return;
            }
            if (l.handleEvent && l.arrow != true) {
                l.arrow = false;
            }
            if (c) {
                c.hide();
            }
            var m = WWF.TooltipManager.get(l);
            m.show();
            c = m;
            this.data("tooltip-isshow", true);
            this.data("tooltip", m);
        }, hide: function (m) {
            var l = $(this);
            clearTimeout(d);
            if (l.data("tooltip")) {
                var n = l.data("tooltip");
                if (c == n) {
                    c = null;
                }
                n.hide();
                WWF.TooltipManager.free(n);
                l.data("tooltip", "");
            }
            l.data("tooltip-isshow", false);
            if (l.data("title")) {
                this.title = l.data("title");
                l.data("title", "");
            }
        }
    };
    var j = $(document);
    if (h) {
    } else {
        j.delegate("*[data-ui='Tooltip']", "mouseenter", f.show).delegate("*[data-ui='Tooltip']", "mouseleave click mousewheel", f.hide);
    }
    j.delegate("*[data-ui='Tooltip-click']", "click touchstart", f.show);
    $.fn.tooltip = function (l) {
        $(this).each(function () {
            var r = $(this), q = l;
            if (q === false) {
                r.removeAttr("data-ui");
                if (g == r[0]) {
                    clearTimeout(d);
                }
                r.data("tooltip-options", "");
                var s = r.data("tooltip");
                if (s) {
                    s.hide();
                    WWF.TooltipManager.free(s);
                    r.data("tooltip", "");
                }
                return;
            }
            if (!q) {
                q = {};
            }
            if (WWF.isObject(q)) {
                q = $.extend({offset: {top: -15, bottom: 3, right: 0, left: -10}}, q);
            }
            var n = "Tooltip";
            if (WWF.isString(q)) {
                var p = $(this).data("tooltip");
                if (!p) {
                    return;
                }
                if ($.isFunction(p[q])) {
                    return p[q].apply(p, Array.prototype.slice.call(arguments, 1));
                } else {
                    return p[q];
                }
            } else {
                if (h && !q.supportTouch && !q.handleEvent) {
                    return;
                }
                if (WWF.isObject(q)) {
                    if (!q.content) {
                        if (!r.attr("title")) {
                            WWF.logger.warn("Tooltip:not define the parameter of content ");
                            return;
                        }
                        q.content = WWF.utils.htmlEncode(r.attr("title"));
                    }
                    if (!q.renderTo) {
                        q.renderTo = WWF.frame.pageCacheNode();
                    }
                    if (q.handleEvent) {
                        n = n + "-" + q.handleEvent;
                        var m = function (u) {
                            if (!r.data("tooltip-isshow")) {
                                return;
                            }
                            var w = r.data("tooltip");
                            if (u == undefined || !WWF.utils.mousein(u, w.view[0]) && u.target != r[0]) {
                                var t = Array.prototype.slice.call(arguments, 0);
                                f.hide.apply(r[0], t);
                            } else {
                                $(document.body).one("click", m);
                            }
                        };
                        q.notDelay = true;
                        q.onShow = function () {
                            $(document.body).one("click", m);
                        };
                        if (q.hideOnBlur) {
                            r.unbind("blur").bind("blur", function (o) {
                                f.hide.call(r[0], o);
                                $(document.body).unbind("click", m);
                            });
                        }
                    }
                    r.data("tooltip-options", q);
                } else {
                    if (r.attr("title")) {
                        r.data("tooltip-options", {
                            content: WWF.utils.htmlEncode(r.attr("title")),
                            renderTo: WWF.frame.pageCacheNode()
                        });
                    }
                }
            }
            r.attr("data-ui", n);
        });
        return this;
    };
    WWF.ns("$.wwf.tooltip");
    $.wwf.tooltip.create = function (l) {
        l.fixResize = true;
        var m = new WWF.Tooltip(l);
        if (l.autoShow != false) {
            m.show();
        } else {
            return m;
        }
        $(m.view).data("tooltip", m);
        return m.view;
    };
    $.fn.testTooltip = function () {
        var l = $(this);
        f.showTooltip.call(l);
    };
    $(function () {
        var l = WWF.frame;
        if (l) {
            l.bind(l.EVENT_BEFORE_REFRESH_BODY, function () {
                WWF.TooltipManager.clear();
            }, true);
        }
    });
})();
WWF.template.add("WWF.combox", '<#import "controls.ftl" as controls> <@controls.combox id=id className=className name=name value=value data=data theme=theme isIconList=isIconList />');
WWF.Combox = WWF.Component.extend({
    templateName: "WWF.combox",
    defaultConfig: {
        id: undefined,
        baseId: undefined,
        className: undefined,
        name: undefined,
        width: 80,
        height: 24,
        buttonWidth: 24,
        iconWidth: 20,
        maxLength: undefined,
        scrollHeight: 250,
        isIconList: false,
        formLabel: undefined,
        selector: undefined,
        defaultValue: undefined,
        uneditable: false,
        disabled: false,
        filter: undefined,
        filterList: false,
        autoShowList: false,
        forceHideList: true,
        selectorConfig: undefined,
        emptyLabel: "",
        valueField: "value",
        labelField: "label",
        nodeCopy: false,
        wrappedMenu: false,
        tooltipContainer: undefined
    },
    handler: {
        baseEl: ".wwf-cp-combox-base",
        baseHiddenEl: ".wwf-cp-combox-base-hidden",
        proxyEl: "a.wwf-cp-combox-proxy",
        iconEl: "span.icon",
        wrapEl: ".wwf-cp-combox-wrap",
        buttonEl: ".wwf-cp-combox-button",
        arrowEl: ".wwf-cp-combox-arrow"
    },
    _actionRecord: undefined,
    _actionTimer: undefined,
    _isMenuShowed: false,
    _blurTimer: undefined,
    _selectorType: undefined,
    _valueInited: false,
    _isFocused: false,
    _inputStatus: undefined,
    _currentValue: undefined,
    _setValueTimer: undefined,
    _focusTimer: undefined,
    _isDisabled: false,
    _isEditable: true,
    _eventBinded: false,
    _isFiltered: false,
    _filterListTimer: undefined,
    _init: function () {
        this._protectedInit();
    },
    _protectedInit: function () {
        this._supportEvents("rendered", "beforechange", "change", "blur", "input");
        this._tplData = {
            id: this.config.id || null,
            className: this.config.className || "empty",
            name: this.config.name || "",
            value: this.config.value || "",
            data: this.config.data || [],
            theme: this.config.theme || "webex",
            isIconList: this.config.isIconList
        };
        this._addTplData(this._tplData);
    },
    _uiUpdate: function () {
        if (this.config.diabled) {
            this.disable();
        } else {
            if (this.config.uneditable) {
                this.editable(false);
            } else {
                this.editable(true);
            }
        }
        this._setIconWidth(this.config.iconWidth);
        this._setButtonWidth(this.config.buttonWidth);
        this._setWidth(this.config.width);
        this._applyIcon();
        if (this.config.className && !this.ui.containerEl.hasClass(this.config.className)) {
            this.ui.containerEl.addClass(this.config.className);
        }
    },
    _beforeRender: function () {
        this.ui.containerEl = this.view;
        if (this.config.selector && this.config.autoShowList) {
            this.config.selector.show(this.ui.wrapEl, {top: 0, left: 0});
        }
        if (this.config.maxLength) {
            this.ui.baseEl.attr("maxlength", this.config.maxLength);
        }
        if (this.config.formLabel) {
            this.ui.baseEl.attr("title", this.config.formLabel);
            this.ui.proxyEl.attr("title", this.config.formLabel);
        }
        if (this.config.selector) {
            this._selectorType = this.config.selector[0].className.indexOf("wwf-menu") > -1 ? "menu" : "tree";
            if (this.config.wrappedMenu) {
                this.ui.containerEl.append(this.config.selector);
            }
        } else {
            if (this.config.selectorConfig) {
                this._selectorType = "menu";
                this.config.selectorConfig.itemConfig = this.config.selectorConfig.itemConfig || {};
                if (this.config.isIconList) {
                    this.config.selectorConfig.itemConfig.icon = (this.config.selectorConfig.itemConfig.icon === undefined || this.config.selectorConfig.itemConfig.icon === null) ? this.config.isIconList : this.config.selectorConfig.itemConfig.icon;
                }
                this.config.selectorConfig.renderChild = false;
                this.config.selectorConfig.focusItem = false;
                if (this.config.wrappedMenu) {
                    this.config.selectorConfig.renderTo = this.ui.containerEl;
                } else {
                    if (!this.config.selectorConfig.renderTo) {
                        this.config.selectorConfig.renderTo = WWF.frame.pageCacheNode();
                    }
                }
                if (!this.config.selectorConfig.data) {
                    this.config.selectorConfig.data = $.parseJSON(this.ui.baseHiddenEl.attr("data"));
                }
                this.config.selectorConfig.clsHover = null;
                this.config.selector = $.wwf[this._selectorType].create(this.config.selectorConfig);
            }
        }
        this.config.selector[this._selectorType]("updateConfig", {
            focusItem: false,
            restoreFocus: false,
            deferEventTrigger: false
        });
        if (this.config.id) {
            this.ui.containerEl.attr("id", this.config.id);
        }
        if (this.config.name) {
            this.ui.baseHiddenEl.attr("name", this.config.name);
        }
        this._uiUpdate();
        if (this.config.disabled) {
            this.disable(true);
        }
        this._eventBinding();
    },
    _afterRender: function () {
        var b;
        if (this.config.defaultValue !== undefined && this.config.defaultValue !== null && this.config.defaultValue === this.config.defaultValue) {
            if (typeof this.config.defaultValue === "string" || typeof this.config.defaultValue === "number") {
                b = this.config.selector[this._selectorType]("select", this.config.valueField, this.config.defaultValue);
                if (b) {
                    this.config.defaultValue = b;
                }
            }
        } else {
            b = this.ui.baseHiddenEl.val();
            if (b) {
                this.config.defaultValue = {value: b};
            } else {
                this.config.defaultValue = "";
            }
        }
        this._setValue(this.config.defaultValue);
        if (!this._valueInited) {
            this._valueInited = true;
        }
        this.fire("rendered", [this]);
        this.view.data("combox", this);
    },
    _setBaseId: function () {
        if (!this.config.baseId) {
            this.config.baseId = "combox_base_" + Math.round(Math.random() * 100000000);
        }
        if (!this.config.uneditable) {
            if (this.ui.proxyEl && this.ui.proxyEl.length) {
                this.ui.proxyEl.attr("id", "");
            }
            this.ui.baseEl.attr("id", this.config.baseId);
        } else {
            if (this.ui.proxyEl && this.ui.proxyEl.length) {
                this.ui.baseEl.attr("id", "wwf_" + this.config.baseId);
                this.ui.proxyEl.attr("id", this.config.baseId);
            }
        }
    },
    _stopEvents: function (b) {
        if (b && b.preventDefault) {
            b.preventDefault();
        }
    },
    _addProxy: function () {
        this.ui.proxyEl = this.ui.wrapEl.find("a.wwf-cp-combox-proxy");
        if (!this.ui.proxyEl.length) {
            this.ui.baseEl.before('<a class="wwf-cp-combox-proxy wwf-ellipsis" href="#combox_proxy"></a>');
            this.ui.proxyEl = this.ui.wrapEl.find("a.wwf-cp-combox-proxy");
        }
        this.ui.baseEl.attr("disabled", true);
        this.ui.baseEl.css("display", "none");
        if (this.ui.proxyEl && this.ui.proxyEl.length) {
            this.ui.proxyEl.unbind("focus", this._focusHandle);
            this.ui.proxyEl.unbind("blur", this._blurHandle);
            this.ui.proxyEl.unbind("click", this._stopEvents);
            this.ui.proxyEl.bind("focus", {ctx: this}, this._focusHandle);
            this.ui.proxyEl.bind("blur", {ctx: this}, this._blurHandle);
            this.ui.proxyEl.bind("click", {ctx: this}, this._stopEvents);
            if (!this.config.nodeCopy) {
                this.ui.proxyEl.html(WWF.utils.filterHtml(this._currentValue && this._currentValue[this.config.labelField] || this._currentValue));
            } else {
                this.ui.proxyEl.html(this._currentValue && this._currentValue[this.config.labelField] || this._currentValue);
            }
            this.ui.proxyEl.attr("title", this.config.formLabel);
            this._setWidth();
        }
        if (this.config.isIconList && this.config.nodeCopy) {
            this.ui.iconEl.hide();
        }
    },
    _removeProxy: function () {
        if (this.ui.proxyEl && this.ui.proxyEl.length) {
            this.ui.proxyEl.unbind("focus", this._focusHandle);
            this.ui.proxyEl.unbind("blur", this._blurHandle);
            this.ui.proxyEl.unbind("click", this._stopEvents);
            this.ui.proxyEl.remove();
            delete this.ui.proxyEl;
        }
        this.ui.baseEl.attr("disabled", false);
        this.ui.baseEl.css("display", "inline");
        if (this.config.isIconList && this.config.nodeCopy) {
            this.ui.iconEl.show();
        }
    },
    _setWidth: function (g) {
        var b = g * 1 || this.config.width || this.defaultConfig.width || this.view.outerWidth(),
            d = this.config.isIconList && !this.config.nodeCopy ? (this.config.iconWidth * 1 || this.defaultConfig.iconWidth) : 0,
            c = this.config.buttonWidth * 1 || this.defaultConfit.buttonWidth, f, h;
        this.config.width = b;
        f = b - d - c - 5 - 3;
        f = Math.max(f, 10);
        this.ui.baseEl.css("width", f + "px");
        this.ui.proxyEl.css("width", (f + 5) + "px");
        this.config.selector[this._selectorType]("setMinWidth", b);
    },
    _setHeight: function (b) {
        iH = (b * 1 || this.config.height * 1 || this.defaultConfig.height) - 2;
        this.config.height = iH + 2;
        this.ui.wrapEl.css({height: iH, "line-height": iH});
        this.ui.buttonEl.css({height: iH, "line-height": iH});
        this.ui.baseEl.css({height: iH, "line-height": iH});
        if (this.ui.proxyEl) {
            this.ui.proxyEl.css({height: iH, "line-height": iH});
        }
    },
    _setButtonWidth: function (b) {
        iW = b * 1 || this.config.buttonWidth || this.defaultConfig.buttonWidth;
        this.config.buttonWidth = iW;
        this.ui.buttonEl.css({width: iW});
    },
    _setIconWidth: function (b) {
        iW = this.config.isIconList ? (b * 1 || this.config.iconWidth * 1 || this.defaultConfig.iconWidth) : 0;
        this.ui.iconEl.css("width", iW);
        this.config.iconWidth = iW;
    },
    _applyIcon: function () {
        if (this.config.isIconList && !this.ui.containerEl.hasClass("wwf-cp-combox-isiconlist")) {
            this.ui.containerEl.addClass("wwf-cp-combox-isiconlist");
        } else {
            if (!this.config.isIconList) {
                this.ui.containerEl.removeClass("wwf-cp-combox-isiconlist");
            }
        }
    },
    _eventBinding: function () {
        var b = this;
        this.ui.baseEl.bind("focus", {ctx: this}, this._focusHandle);
        this.ui.baseEl.bind("blur", {ctx: this}, this._blurHandle);
        this.ui.wrapEl.bind("mousedown", {ctx: this}, this._mousedownHandle);
        this.ui.wrapEl.bind("click", {ctx: this}, this._buttonClickHandle);
        if (!WWF.platform.Desktop) {
            this.ui.buttonEl.attr("href", "#show_list");
        }
        if (this.config.selector.attr("binded") !== "true") {
            this.config.selector.bind("click", function (c) {
                b._setAction(c.type);
            });
            this.config.selector.attr("binded", "true");
        }
    },
    _keyBinding: function () {
        var b = this;
        setTimeout(function () {
            if (b._isFocused && !b._eventBinded) {
                $(document).bind("keydown", {ctx: b}, b._keyHandler);
                $(document).bind("keyup", {ctx: b}, b._keyHandler);
                b._eventBinded = true;
            }
        }, 0);
    },
    _keyUnbinding: function () {
        $(document).unbind("keydown", this._keyHandler);
        $(document).unbind("keyup", this._keyHandler);
        this._eventBinded = false;
    },
    _checkMenuStatus: function () {
        return this.config.selector[this._selectorType]("isShow");
    },
    _toggleMenu: function (c) {
        var f = !!(this.config.selector[0] && this.config.selector[0].nodeType), b, g, d = this;
        if (f) {
            c = (c === undefined || c === null) ? undefined : !!c;
            b = this._checkMenuStatus();
            if (typeof c === "boolean") {
                if (c && this.config.baseId !== this.config.selector.attr("baseId")) {
                    g = "show";
                } else {
                    if (!c && this.config.baseId !== this.config.selector.attr("baseId")) {
                        g = null;
                    } else {
                        if ((!b && c === true)) {
                            g = "show";
                        } else {
                            if (b && c === false) {
                                g = "hide";
                            }
                        }
                    }
                }
            } else {
                g = b ? "hide" : "show";
            }
            if (g) {
                $(this.config.selector)[this._selectorType](g, this.ui.wrapEl, {top: 0, left: 0});
                this._isMenuShowed = (g === "show");
                if (g === "show") {
                    if (this._isFiltered) {
                        this.config.selector[this._selectorType]("filter", "");
                        this._isFiltered = false;
                    }
                    if (this._currentValue && this._currentValue[this.config.valueField] !== undefined && this._currentValue[this.config.valueField] !== null) {
                        this.config.selector[this._selectorType]("select", this.config.valueField, this._currentValue[this.config.valueField]);
                    } else {
                        if (!this._currentValue || typeof this._currentValue !== "string") {
                            this.config.selector[this._selectorType]("select", 0);
                        }
                    }
                    this.config.selector.unbind("mousedown");
                    this.config.selector.bind("mousedown", function (h) {
                        d._setAction(h.type);
                    });
                    this.config.selector[this._selectorType]("un", "click");
                    this.config.selector[this._selectorType]("on", "click", function (h) {
                        d._menuClickHandler(h);
                    });
                    this.config.selector[this._selectorType]("un", "selectionchange");
                    this.config.selector[this._selectorType]("on", "selectionchange", function (h) {
                    });
                    this._setBaseId();
                    this.config.selector.attr("baseId", this.config.baseId);
                } else {
                }
            }
        }
    },
    _manualFocus: function () {
        var b = this;
        window.clearTimeout(this._focusTimer);
        this._focusTimer = window.setTimeout(function () {
            b._setAction("manual");
            if (!b.config.disabled) {
                if (b.config.uneditable && b.ui.proxyEl) {
                    b.ui.proxyEl.focus();
                } else {
                    b.ui.baseEl.focus();
                }
            }
            b._isFocused = true;
            b._keyBinding();
        }, 10);
    },
    _focusStart: function (b) {
        this._isFocused = true;
        if (this.config.autoShowList || (this.config.uneditable && !this.config.forceHideList)) {
            this._toggleMenu(true);
        }
        this._isFocused = true;
        this._keyBinding();
        this._removeEmptyLabel();
    },
    _blurStart: function (b) {
        this._isFocused = false;
        this._toggleMenu(false);
        this._keyUnbinding();
        this._applyInputValue();
        this.fire("blur", [this]);
    },
    _stoppedBlur: function (b) {
        this._manualFocus();
    },
    _buttonHandler: function (b) {
        if (!this.config.disabled) {
            this._toggleMenu(this._isFocused === false ? true : undefined);
        }
    },
    _menuClickHandler: function (c) {
        this._toggleMenu(false);
        var b = this;
        b.config.selector[b._selectorType]("hide");
        if (!b._actionRecord && b._inputStatus === "byInput" && b.config.uneditable !== true) {
            b._applyInputValue();
        } else {
            b._setSimpleValue(c);
        }
    },
    _keyHandler: function (c) {
        var b = c.data.ctx, d;
        switch (c.keyCode) {
            case 13:
                if (c.type === "keyup") {
                    return;
                }
                if (b._inputStatus === "byInput") {
                    b._applyInputValue();
                    b._toggleMenu(false);
                }
                break;
            case 9:
                if (c.type === "keyup") {
                    return;
                }
                if (b._inputStatus === "byInput") {
                    b._applyInputValue();
                    b._toggleMenu(false);
                }
                break;
            case 38:
                if (c.type === "keyup") {
                    return;
                }
                if (c.altKey) {
                    b._toggleMenu();
                } else {
                    if (!b._checkMenuStatus()) {
                        b.value(b.config.selector[b._selectorType]("selectPrev"));
                    }
                }
                b._inputStatus = "bySelector";
                c.preventDefault();
                break;
            case 40:
                if (c.type === "keyup") {
                    return;
                }
                if (c.altKey) {
                    b._toggleMenu();
                } else {
                    if (!b._checkMenuStatus()) {
                        b.value(b.config.selector[b._selectorType]("selectNext"));
                    }
                }
                b._inputStatus = "bySelector";
                c.preventDefault();
                break;
            case 27:
                if (c.type === "keyup") {
                    return;
                }
                b._restoreValue();
                break;
            default:
                if (c.type === "keydown") {
                    if (b.config.filterList && ((c.keyCode >= 48 && c.keyCode <= 57) || (c.keyCode >= 65 && c.keyCode <= 90) || (c.keyCode >= 96 && c.keyCode <= 105) || c.keyCode === 46 || c.keyCode === 8)) {
                        window.clearTimeout(b._filterListTimer);
                        b._toggleMenu(true);
                        b._filterListTimer = window.setTimeout(function () {
                            d = b.ui.baseEl.val().toUpperCase();
                            if (d) {
                                b.config.selector[b._selectorType]("filter", d);
                                b._isFiltered = true;
                            }
                            var f = b.config.selector[b._selectorType]("selectFirst");
                            if (!f) {
                                b._inputStatus = "byInput";
                            } else {
                                b._inputStatus = "bySelector";
                            }
                        }, 100);
                    } else {
                        b._inputStatus = "byInput";
                    }
                } else {
                    if (!b.config.uneditable && c.type === "keyup" && b._inputStatus === "byInput") {
                        b.fire("input", [b.ui.baseEl.val(), b]);
                    }
                }
                if (b.ui.baseEl.hasClass("empty-value") && !b.config.uneditable) {
                    b._removeEmptyLabel();
                }
                if (!b.config.uneditable && c.type === "keyup" && b.ui.baseEl.val()) {
                    b.config.selector[b._selectorType]("config").useCharacterNav = false;
                    b.config.selector[b._selectorType]("each", function (h, g) {
                        var f = h[b.config.labelField] || h.label || "";
                        if (f.toUpperCase().indexOf(b.ui.baseEl.val().toUpperCase()) === 0) {
                            this.select(g);
                            return true;
                        }
                    });
                }
                break;
        }
    },
    _focusHandle: function (c) {
        var b = c.data.ctx;
        if (!b._setAction(c.type)) {
            b._focusStart(c);
        }
    },
    _blurHandle: function (c) {
        var b = c.data.ctx;
        if (!b._setAction(c.type)) {
            b._blurStart(c);
        } else {
            b._stoppedBlur(c);
        }
    },
    _mousedownHandle: function (d) {
        var c = d.data.ctx, b = d.target;
        if (c.config.disabled) {
            return;
        }
        c._setAction(d.type);
        if (b === c.ui.baseEl[0] || (c.ui.proxyEl && c.ui.proxyEl[0] && (b === c.ui.proxyEl[0] || $.contains(c.ui.proxyEl[0], b)))) {
            if (c.config.uneditable) {
                c._buttonHandler(d);
            } else {
                c._focusStart(d);
            }
        } else {
            if (b === c.ui.buttonEl[0] || $.contains(c.ui.buttonEl[0], b)) {
                c._buttonHandler(d);
                c._manualFocus();
            }
        }
        if (!c._isFocused) {
            c._buttonHandler(d);
            c._manualFocus();
        }
    },
    _buttonClickHandle: function (d) {
        var c = d.data.ctx, b = d.target;
        if (b === c.ui.buttonEl[0] || $.contains(c.ui.buttonEl[0], b)) {
            d.preventDefault();
        }
    },
    _filterChecker: function (b) {
        if (this.config.filter && this.config.filter.constructor === RegExp) {
            return !!this.config.filter.test(b + "");
        } else {
            if ($.isFunction(this.config.filter)) {
                return this.config.filter(b);
            }
        }
    },
    _genIconClass: function (b) {
        if (b.value) {
            return "wwf-ic-country-" + b.value.toLowerCase();
        } else {
            if (b === "gen^regExp") {
                var c = /(?:^| )wwf-ic-country[\-_](?:[^ ]+)(?:$| )/g;
                return c;
            } else {
                if (b + "") {
                    return "wwf-ic-country_byinput";
                } else {
                    return "wwf-ic-country_empty";
                }
            }
        }
    },
    _applyInputValue: function () {
        if (this._inputStatus === "byInput" && !this.config.disabled && !this.config.uneditable) {
            var c = this.ui.baseEl.val(), b = true, d;
            b = this._filterChecker(c);
            if (this._currentValue && this._currentValue[this.config.valueField] === this.ui.baseHiddenEl.val() && this._currentValue[this.config.labelField] === this.ui.baseEl.val()) {
                return;
            }
            if (typeof b === "object" && (b.value !== undefined || b.label !== undefined)) {
                this._setValue(b);
            } else {
                if (typeof b === "string" || typeof b === "number") {
                    d = this.config.selector[this._selectorType]("select", this.config.labelField, b);
                    if (d) {
                        this.value(d);
                        return;
                    } else {
                        this._setValue(b);
                    }
                } else {
                    if (b !== false) {
                        this._setValue(c);
                    } else {
                        this._restoreValue();
                    }
                }
            }
        } else {
            if (this._inputStatus === "bySelector") {
                this._restoreValue();
            } else {
                this._checkEmptyValue();
            }
        }
    },
    _restoreValue: function () {
        this._setValue(this._currentValue || "");
    },
    _getValue: function () {
        return this._currentValue;
    },
    _setValueBase: function (b) {
        var f, g, d, c = this;
        if (!this._isBlank(b[this.config.labelField]) || !this._isBlank(b[this.config.valueField]) || !this._isBlank(b.value) || !this._isBlank(b.label) || !this._isBlank(b.index)) {
            g = !this._isBlank(b[this.config.valueField]) ? b[this.config.valueField] + "" : b.value;
            d = !this._isBlank(b[this.config.labelField]) ? b[this.config.labelField] + "" : b.label;
            f = this.config.selector[this._selectorType]("select", this.config.valueField, g) || this.config.selector[this._selectorType]("select", this.config.labelField, d) || this.config.selector[this._selectorType]("select", b.index * 1);
            if (f) {
                g = (!this._isBlank(f[this.config.valueField]) ? f[this.config.valueField] + "" : b.value) || "";
                d = (!this._isBlank(f[this.config.labelField]) ? f[this.config.labelField] + "" : b.label) || "";
                if (this.config.nodeCopy && this.ui.proxyEl && this.ui.proxyEl[0]) {
                    d = this.config.selector[this._selectorType]("getItemHtml", f);
                } else {
                    d = this.config.uneditable ? WWF.utils.filterHtml(d) : d;
                }
            } else {
                return;
            }
            g = g || d;
            d = d || g;
        } else {
            if (typeof b === "string" || typeof b === "number") {
                g = d = b + "";
                if (this.config.uneditable) {
                    d = WWF.utils.filterHtml(d);
                }
            } else {
                return;
            }
        }
        window.clearTimeout(this._setValueTimer);
        this._setValueTimer = window.setTimeout(function () {
            if (!g && !d && g !== b) {
                return;
            } else {
                g += "";
                d += "";
            }
            c.ui.baseEl.val(d);
            c.ui.baseHiddenEl.val(g);
            if (c.ui.proxyEl && c.ui.proxyEl[0]) {
                c.ui.proxyEl.html(d);
                var h = $(".wwf-ellipsis", c.ui.proxyEl);
                if (h && h.length) {
                    h.ellipsis({
                        reset: true,
                        renderTo: c.config.tooltipContainer === true ? c.view : c.config.tooltipContainer
                    });
                } else {
                    c.ui.proxyEl.ellipsis({
                        reset: true,
                        renderTo: c.config.tooltipContainer === true ? c.view : c.config.tooltipContainer
                    });
                }
            }
            if (c.config.isIconList) {
                c.ui.iconEl[0].className = c.ui.iconEl[0].className.replace(c._genIconClass("gen^regExp"), "");
                c.ui.iconEl.addClass(c._genIconClass(b));
            }
        }, 10);
        return f || g;
    },
    _isBlank: function (b) {
        return b === undefined || b === null || b !== b;
    },
    _isInSelector: function (c) {
        var b = {}, d;
        if (!this._isBlank(c[this.config.labelField]) || !this._isBlank(c[this.config.valueField]) || !this._isBlank(c.value) || !this._isBlank(c.label)) {
            b[this.config.valueField] = !this._isBlank(c[this.config.valueField]) ? c[this.config.valueField] + "" : c.value + "";
            b[this.config.labelField] = !this._isBlank(c[this.config.labelField]) ? c[this.config.labelField] + "" : c.label + "";
            d = this.config.selector[this._selectorType]("select", this.config.valueField, b.value) || this.config.selector[this._selectorType]("select", this.config.labelField, b.label);
            if (d && this.config.nodeCopy) {
                this.ui.proxyEl[0].innerHTML = this.config.selector[this._selectorType]("getItemHtml", d);
            }
            return d;
        }
        return false;
    },
    _setSimpleValue: function (b) {
        if (b) {
            sValue = !this._isBlank(b[this.config.valueField]) ? b[this.config.valueField] + "" : b.value;
            sLabel = !this._isBlank(b[this.config.labelField]) ? b[this.config.labelField] + "" : b.label;
        }
        if (!sValue && !sLabel && sValue !== b) {
            return;
        } else {
            sValue += "";
            sLabel += "";
        }
        if (!this._currentValue || sValue !== (this._currentValue[this.config.valueField] || this._currentValue.value) + "" || sLabel !== (this._currentValue[this.config.labelField] || this._currentValue.label) + "") {
            this._currentValue = b;
            this.ui.baseEl.val(sLabel);
            this.ui.baseHiddenEl.val(sValue);
            if (this.ui.proxyEl && this.ui.proxyEl[0]) {
                if (this.config.nodeCopy) {
                    sLabel = this.config.selector[this._selectorType]("getItemHtml", b);
                } else {
                    sLabel = WWF.utils.filterHtml(sLabel);
                }
                this.ui.proxyEl.html(sLabel);
                var c = $(".wwf-ellipsis", this.ui.proxyEl);
                if (c && c.length) {
                    c.ellipsis({
                        reset: true,
                        renderTo: this.config.tooltipContainer === true ? this.view : this.config.tooltipContainer
                    });
                } else {
                    this.ui.proxyEl.ellipsis({
                        reset: true,
                        renderTo: this.config.tooltipContainer === true ? this.view : this.config.tooltipContainer
                    });
                }
            }
            if (!this._valueInited) {
                this._valueInited = true;
            } else {
                this._checkEmptyValue(b);
                this.fire("change", [b, this]);
            }
        }
        if (this.ui.baseEl.val(sLabel) !== sLabel) {
            this.ui.baseEl.val(sLabel);
        }
    },
    _setValue: function (d, g) {
        var b = false, f, c;
        if ((d || d === "") && (!this.config.emptyLabel || this.config.emptyLabel !== d)) {
            if ($.isArray(d)) {
            } else {
                if (typeof d === "object" && d !== null) {
                    f = this._setValueBase(d);
                    if (f && (!this._currentValue || f[this.config.valueField] !== this._currentValue[this.config.valueField] || f[this.config.labelField] !== this._currentValue[this.config.labelField])) {
                        b = true;
                        this._currentValue = f;
                    }
                } else {
                    if (typeof d === "string" || typeof d === "number") {
                        f = this.config.selector[this._selectorType]("select", this.config.labelField, d + "");
                        if (f) {
                            b = this._setValue(f, true);
                        } else {
                            this._setValueBase(d + "");
                            if (!this._currentValue || this._currentValue !== d + "") {
                                b = true;
                                this._currentValue = d + "";
                            }
                        }
                    }
                }
            }
            if (g) {
                return b;
            }
            if (b) {
                if (!this._valueInited) {
                    this._valueInited = true;
                } else {
                    this.fire("change", [f || d, this]);
                }
                this._checkEmptyValue(d);
                return true;
            } else {
                this._checkEmptyValue(d);
            }
        }
        return false;
    },
    _checkEmptyValue: function (b) {
        var c = this;
        if (this.config.emptyLabel) {
            if (!b && !this._currentValue) {
                setTimeout(function () {
                    if (!c._currentValue) {
                        c.ui.baseEl.val(c.config.emptyLabel);
                        c.ui.baseEl.addClass("empty-value");
                        if (c.ui.proxyEl && c.ui.proxyEl[0]) {
                            c.ui.proxyEl.html(c.config.emptyLabel);
                            c.ui.proxyEl.addClass("empty-value");
                        }
                    }
                }, 20);
            } else {
                this.ui.baseEl.removeClass("empty-value");
                if (c.ui.proxyEl && c.ui.proxyEl[0]) {
                    c.ui.proxyEl.removeClass("empty-value");
                }
            }
        }
    },
    _removeEmptyLabel: function () {
        if (this.config.emptyLabel && this.config.emptyLabel === this.ui.baseEl.val()) {
            this.ui.baseEl.removeClass("empty-value");
            this.ui.baseEl.val("");
            this.ui.baseEl.focus();
        }
    },
    _setAction: function (b) {
        var d, f = 10, c = this;
        if (this._actionRecord) {
            if (this._actionRecord === b) {
                d = 2;
            } else {
                d = 1;
            }
        } else {
            d = 0;
        }
        this._actionRecord = b;
        window.clearTimeout(this._actionTimer);
        this._actionTimer = window.setTimeout(function () {
            c._actionRecord = undefined;
        }, f);
        return d;
    },
    disable: function (b) {
        if (b !== false) {
            this.ui.containerEl.addClass("wwf-cp-combox-disabled");
            this._removeProxy();
            this.ui.baseEl.attr("disabled", "disabled");
            this.config.disabled = true;
            this._toggleMenu(false);
        } else {
            this.ui.containerEl.removeClass("wwf-cp-combox-disabled");
            this.editable(!this.config.uneditable);
            this.config.disabled = false;
        }
    },
    editable: function (b) {
        if (b !== false) {
            this.ui.containerEl.removeClass("wwf-cp-combox-uneditabled");
            this._removeProxy();
            this.config.uneditable = false;
            this._setBaseId();
        } else {
            this.ui.containerEl.addClass("wwf-cp-combox-uneditabled");
            this._addProxy();
            this.config.uneditable = true;
            this._setBaseId();
        }
    },
    value: function (b) {
        if (!this._isBlank(b)) {
            return this._setValue(b);
        } else {
            return this._getValue(b);
        }
    },
    uiUpdate: function (c) {
        if (c) {
            var b = 0;
            if (c.autoShowList !== undefined && c.autoShowList !== null && c.autoShowList === c.autoShowList) {
                this.config.autoShowList = !!c.autoShowList;
            }
            if (c.buttonWidth !== undefined && c.buttonWidth !== null && c.buttonWidth === c.buttonWidth && c.buttonWidth * 1) {
                this.config.buttonWidth = c.buttonWidth * 1;
                b += 1;
            }
            if (c.className !== undefined && c.className !== null && c.className === c.className) {
                this.ui.containerEl.addClass(c.className);
            }
            if (c.filterList !== undefined && c.filterList !== null && c.filterList === c.filterList) {
                this.config.filterList = !!c.filterList;
            }
            if (c.height !== undefined && c.height !== null && c.height === c.height && c.height * 1) {
                this.config.height = c.height * 1;
                b += 1;
            }
            if (c.iconWidth !== undefined && c.iconWidth !== null && c.iconWidth === c.iconWidth && c.iconWidth * 1) {
                this.config.iconWidth = c.iconWidth * 1;
                b += 1;
            }
            if (c.isIconList !== undefined && c.isIconList !== null && c.isIconList === c.isIconList) {
                this.config.isIconList = c.isIconList;
                b += 1;
            }
            if (c.width !== undefined && c.width !== null && c.width === c.width && c.width) {
                this.config.width = c.width;
                b += 1;
            }
            if (b) {
                this._uiUpdate();
            }
        }
    },
    updateData: function (b) {
        if (b && this.config.selector) {
            this.config.selector[this._selectorType]("update", b);
        }
    },
    manualFocus: function () {
        this._manualFocus();
    }
});
(function () {
    WWF.template.add("WWF.MenuItem", '<div class="wwf-menu-item "><a class="wwf-menu-label ${_labelclass}" id="${id}"  aria-role="menuitem" href="javascript:void(0);"   hidefocus="true"  ><span class="${ellipsis} wwf-menu-icon">${WWF.MenuItem.prototype.__operateLabel(label)}</span></a></div>');
    WWF.MenuItem = WWF.Component.extend({
        templateName: "WWF.MenuItem",
        selected: false,
        defaultConfig: {
            clsSelected: "wwf-item-selected",
            clsDisable: "wwf-item-disable",
            clsHover: "wwf-item-selected",
            clsIcon: "wwf-bg-ic16",
            icon: false,
            disable: false,
            horizontal: false,
            ellipsis: "",
            prepareData: function (c, b) {
                return c;
            },
            prepareElement: null,
            event: true
        },
        handler: {icon: ".wwf-menu-icon", label: ".wwf-menu-label", text: ".wwf-menu-label > span"},
        _init: function (c) {
            this._supportEvents("click", "mouseout", "mouseover", "select");
            if (c.data) {
                this.data = this.config.prepareData(c.data);
                if ($.trim(this.data.label) == "-") {
                    this.isLine = true;
                    this.config.disable = true;
                    this.config.template = null;
                } else {
                    this.isLine = false;
                }
                var d = this.data.tooltip || this.data.label || "";
                var b = this.data.shortcut;
                if (b) {
                    d = d + " (" + b + ")";
                }
                this._addTplData("_labelclass", "");
                this._addTplData("_tooltip", d);
                this._addTplData("ellipsis", this.config);
                this._addTplData(this.data);
                if (this.data.id) {
                    this.id = "menuitem_" + this.data.id;
                }
                this._addTplData("id", this.id);
            }
            this.disabled = this.config.disable;
        },
        __operateLabel: function (b) {
            return WWF.utils.htmlEncode(b).replace(/\s/g, "&nbsp;");
        },
        _beforeRender: function () {
            if (this.isLine) {
                this.view.addClass("wwf-menu-line");
            } else {
                if (this.config.event) {
                    this._bindEvent();
                }
                var b = "";
                if (this.config.icon) {
                    b = this.config.clsIcon;
                }
                if (this.data.icon) {
                    b += " " + this.data.icon;
                } else {
                    if (this.config.horizontal) {
                        b = "";
                    }
                }
                this.ui.icon.addClass(b);
            }
        },
        _bindEvent: function () {
            this.bind(this.view, "click", this._click, this);
        },
        _afterRender: function () {
            this.isshow = true;
            if (this.config.prepareElement) {
                this.config.prepareElement.call(this.ui.label, this);
            }
        },
        refresh: function (c) {
            this.config.data = c;
            this.data = this.config.prepareData(c, this);
            if ($.trim(this.data.label) == "-") {
                this.isLine = true;
            }
            this.unbind(this.view);
            var b = $(this._getTemplate().process(this.data));
            this.view.replaceWith(b);
            this.view = b;
            this._getHandler();
            this._beforeRender();
            this.bindHoverEvent();
        },
        bindHoverEvent: function (b) {
            this.config.clsHover = b || this.config.clsHover;
            if (this.isLine) {
                return;
            }
            this.bind(this.view, "mouseover", this._mousehover, this);
            this.bind(this.view, "mouseout", this._mouseout, this);
        },
        _mousehover: function (b) {
            if (this.isLine) {
                return;
            }
            this.fire("mouseover", [this]);
        },
        _mouseout: function (b) {
            if (this.isLine) {
                return;
            }
            this.fire("mouseout", [this]);
        },
        hover: function () {
            if (this.disabled) {
                return false;
            }
            if (this.isLine) {
                return false;
            }
            this.view.addClass(this.config.clsHover);
            return true;
        },
        out: function () {
            if (this.disabled) {
                return false;
            }
            if (this.isLine) {
                return;
            }
            this.view.removeClass(this.config.clsHover);
            this.ui.text.tooltip("hide");
        },
        focus: function () {
            if (this.ui.label.length > 0) {
                try {
                    this.ui.label.focus();
                } catch (b) {
                }
            }
        },
        select: function () {
            if (this.disabled) {
                return false;
            }
            this.view.addClass(this.config.clsSelected);
            this.selected = true;
            return true;
        },
        _click: function (b) {
            if (this.disabled) {
                return false;
            }
            this.fire("click", [b, this, this.config.data], this);
        },
        unselect: function () {
            this.selected = false;
            this.view.removeClass(this.config.clsSelected);
            this.ui.text.tooltip("hide");
        },
        disable: function (b) {
            this.disabled = b;
            var c = b ? "addClass" : "removeClass";
            this.view[c](this.config.clsDisable);
            if (b && this.ui.label) {
                this.ui.label.attr("disabled", true);
            } else {
                this.ui.label.removeAttr("disabled");
            }
        },
        show: function () {
            this.view.show();
            this.isshow = true;
        },
        hide: function () {
            this.view.hide();
            this.isshow = false;
        },
        isActive: function () {
            if (!this.isshow) {
                return false;
            }
            if (this.isLine) {
                return false;
            }
            if (this.disabled) {
                return false;
            }
            return true;
        },
        getHtml: function () {
            return this.view.html();
        },
        tooltip: function (c) {
            if (c === false) {
                if (this._old_tooltip) {
                    this.ui.label.attr("title", this._old_tooltip);
                    this._old_tooltip = null;
                } else {
                    this.ui.label.removeAttr("title");
                }
                return;
            }
            if (WWF.isObject(c) && c.content) {
                c = c.content;
            }
            var b = this.ui.label.attr("title");
            if (b) {
                this._old_tooltip = b;
            }
            this.ui.label.attr("title", c);
        }
    });
})();
WWF.template.add("WWF.dialog", '<#import "controls.ftl" as controls> <@controls.dialog id=id title=title skin=skin/>');
(function () {
    WWF.Dialog = WWF.Component.extend({
        templateName: "WWF.dialog",
        defaultConfig: {
            title: false,
            open: true,
            skin: "skin-default",
            width: null,
            height: null,
            left: null,
            top: null,
            drag: true,
            focus: null,
            esc: true,
            closable: true,
            overlay: true,
            icon: null,
            content: null,
            contentURL: null,
            useIframe: false,
            fixed: false,
            buttonAligh: "right",
            autoFocus: true,
            buttons: [],
            center: true,
            zindex: null,
            restoreFocus: null,
            resizable: false
        },
        handler: {
            title: ".wwf-title",
            content: ".wwf-content",
            warp: ".wwf-content-wrap",
            buttonbar: ".wwf-buttons-wrap",
            close: ".wwf-close"
        },
        alwaysRender: true,
        _init: function (b) {
            this._supportEvents("open", "close", "complete", "exception", "resizeStart", "resizeStop", "resize");
            if (!b.title) {
                b.title = '信息';
            }
            this._addTplData("title", b);
            this.isOpen = false;
            this._addTplData("skin", b);
            if (!this.config.renderTo) {
                this.config.renderTo = WWF.frame ? WWF.frame.pageCacheContainerNode() : document.body;
            }
            this.contentReady = false;
        },
        _beforeRender: function () {
            var b = this.config, c = {};
            if (b.width) {
                c.width = b.width + "px";
                this.view.children("table").css({width: "100%"});
                this.view.find(".wwf-td-content").width(b.width - 20);
                this.ui.warp.css({"max-width": b.width - 28});
            }
            if (b.height) {
                c.height = b.height + "px";
            }
            if (b.top) {
                c.top = b.top;
                b.center = false;
            }
            if (b.left) {
                c.left = b.left;
                b.center = false;
            }
            this.view.css(c);
            if (b.element) {
                b.content = b.element;
                this.keepcontent = true;
            }
            if (b.contentURL) {
                b.content = b.contentURL;
            }
            this.ui.buttonbar.css({"text-align": this.config.buttonAligh});
            this.view.attr("id", this.id);
            if (b.drag) {
                WWF.drag(this.ui.title, this.view);
                this.ui.title.css({cursor: "move"});
            }
            this.__close = $.proxy(this.close, this);
            this.__keyNav = $.proxy(function (g) {
                if (g.keyCode == WWF.keyboard.Escape) {
                    this.close();
                }
            }, this);
            if (b.closable) {
                this.bind(this.ui.close, "click", this.__close);
                this.ui.close.attr("role", "button");
            } else {
                this.config.esc = false;
                this.ui.close.hide();
            }
            if (b.buttons) {
                this.addButton(b.buttons);
            }
            this.view.attr({role: "dialog", "aria-labelledby": this.id + "_title"});
            this.view.bind("keydown", $.proxy(this._tab_handler, this));
            if (this.config.resizable) {
                var d = this, f = Array.prototype.slice;
                this._resizeable = new WWF.Resizable({
                    renderTo: this.view,
                    maxWidth: b.maxWidth,
                    maxHeight: b.maxHeight,
                    minWidth: b.minWidth,
                    minHeight: b.minHeight,
                    onResize: function (h) {
                        var g = f.call(arguments, 0);
                        d.fire("resize", g, d);
                    },
                    onResizeStart: function (h) {
                        var g = f.call(arguments, 0);
                        d.fire("resizeStart", g, d);
                    },
                    onResizeStop: function (h) {
                        var g = f.call(arguments, 0);
                        d.fire("resizeStop", g, d);
                    }
                });
            }
            this.on("complete", this._setDefaultFocus, this);
        },
        _setDefaultFocus: function () {
            this.ui.title.ellipsis({handlePadding: true, tooltip: {renderTo: this.view}});
            if (!this.isOpen || !this.contentReady) {
                return;
            }
            if (this.config.center) {
                this.center();
            }
            if (this.config.focus) {
                var b = this.find(this.config.focus);
                if (b) {
                    try {
                        b.focus();
                    } catch (d) {
                    }
                }
            } else {
                if (!this.config.autoFocus) {
                    return;
                }
                var c = this.find(".wwf-center").getFirstTabElement(true, this.ui.close);
                if (c) {
                    c.focus();
                } else {
                    if (this.config.closable) {
                        this.ui.close.focus();
                    }
                }
            }
        },
        _aria_focus_iframe_first: function () {
            var c = $(this.iframe.document.body), d = c.getFirstTabElement(true);
            try {
                d.focus();
            } catch (b) {
            }
        },
        _tab_handler: function (h) {
            var g = (h.keyCode == WWF.keyboard.Tab);
            var c = false, f = this.find(".wwf-center"), d;
            if (h.shiftKey) {
                if (g) {
                    if (this.config.closable && h.target == this.ui.close[0] || !this.config.closable && h.target == f.getFirstTabElement(true)[0]) {
                        if (this.config.useIframe) {
                            f = $(this.iframe.document.body);
                            d = f.getLastTabElement();
                        } else {
                            d = f.getLastTabElement(false, this.ui.close);
                        }
                        if (d) {
                            try {
                                d.focus();
                            } catch (b) {
                            }
                            return false;
                        }
                    }
                }
            } else {
                if (g) {
                    if (this.config.useIframe) {
                        this._aria_focus_iframe_first();
                        return false;
                    } else {
                        d = f.getLastTabElement(true, this.ui.close);
                        if (!d || h.target == d[0]) {
                            if (this.config.closable) {
                                this.ui.close.focus();
                                return false;
                            } else {
                                var j = f.getFirstTabElement(true);
                                if (j) {
                                    j.focus();
                                    return false;
                                }
                            }
                        }
                    }
                }
            }
        },
        _afterRender: function () {
            var b = this.config;
            if (b.content) {
                this.content(b.content, b.contentURL);
            }
            if (this.config.open) {
                this.open();
            }
        },
        close: function (d) {
            if (!this.view) {
                return;
            }
            if (this.config.overlay) {
                WWF.Overlay.hide();
            }
            if (this.keepcontent) {
                this.ui.cache = $("#dialog-cache");
                if (this.ui.cache.length <= 0) {
                    this.ui.cache = $('<div id="dialog-cache" class="wwf-hide"></div>').appendTo(document.body);
                }
                this.ui.content.children().appendTo(this.ui.cache);
            }
            this.isOpen = false;
            if (this.config.restoreFocus) {
                var c = $(this.config.restoreFocus);
                try {
                    c.focus();
                } catch (b) {
                }
            }
            this.fire("close", [], this);
            this.removeEscHandle();
            this.view.find(".wwf-ellipsis").tooltip(false);
            this.view.hide();
            if (WWF.browser.ie) {
                setTimeout($.proxy(this.destory, this), 100);
            } else {
                this.destory();
            }
        },
        open: function () {
            if (this.config.overlay) {
                WWF.Overlay.show();
            }
            this.view.css({"z-index": this.config.zindex || WWF.getNextzIndex()});
            this.view.show();
            if (this.config.esc) {
                WWF.EscManager.add(this.__keyNav);
            }
            if (this.config.center) {
                this.center();
            }
            var b = this;
            this.isOpen = true;
            this._setDefaultFocus();
            this.fire("open", [], this);
            if (!this.config.contentURL) {
                this.fire("complete", [this], this);
            }
            return this;
        },
        destory: function (b) {
            this._super(b);
            if (this._resizeable) {
                this._resizeable.destroy();
            }
        },
        content: function (b, g) {
            if (b.jquery || WWF.isElement(b)) {
                b = $(b);
                if (b[0].tagName == "TEXTAREA") {
                    b = b.val();
                } else {
                    this.keepcontent = true;
                    b.appendTo(this.ui.content);
                    this.contentReady = true;
                }
            } else {
                if (WWF.isString(b)) {
                    var d = this;
                    if (g) {
                        if (this.config.useIframe) {
                            this.view.find(".wwf-center").addClass("wwf-useiframe");
                            var c = $('<iframe   width="100%" height="100%" tabindex="-1"  frameborder="0" scrolling="auto" ></iframe>');
                            c.bind("load", function () {
                                try {
                                    c.get(0).contentWindow.parentWindow = self;
                                    c.window = c.get(0).contentWindow;
                                    c.document = c.window.document;
                                    var h = $(c.document.body);
                                    h.bind("keydown", function (n) {
                                        var m = (n.keyCode == WWF.keyboard.Tab), l;
                                        if (n.shiftKey) {
                                            if (m) {
                                                l = h.getFirstTabElement();
                                                if (l && n.target == l[0]) {
                                                    if (d.config.closable) {
                                                        d.ui.close.focus();
                                                    }
                                                    return false;
                                                }
                                            }
                                        } else {
                                            if (m) {
                                                l = h.getLastTabElement(true);
                                                if (l && n.target == l[0]) {
                                                    if (d.config.closable) {
                                                        d.ui.close.focus();
                                                    }
                                                    return false;
                                                }
                                            }
                                        }
                                    });
                                } catch (j) {
                                    d.fire("exception", [j.message]);
                                }
                                if (!d.config) {
                                    return;
                                }
                                d.contentReady = true;
                                d.fire("complete", [d, c], d);
                                d._aria_focus_iframe_first();
                            });
                            c.css({display: "block"});
                            this.view.addClass("wwf-iframe-dialog");
                            c.attr("src", b);
                            c.appendTo(this.ui.content);
                            this.iframe = c;
                        } else {
                            var f = $.wwf.loading.create({
                                renderTo: this.ui.content,
                                clsAppend: "wwf-dialog-load",
                                border: false,
                                center: false,
                                once: true
                            });
                            WWF.request.get(b, function (h) {
                                if (!d.config) {
                                    return;
                                }
                                if (WWF.frame && WWF.frame.html) {
                                    WWF.frame.html(h, d.ui.content);
                                } else {
                                    d.ui.content.html(h);
                                }
                                d.contentReady = true;
                                d.ui.warp.loading(false);
                                d.fire("complete", [h, d], d);
                            }, function (j, h, l) {
                                if (!d.config) {
                                    return;
                                }
                                d.ui.warp.loading(false);
                                d.fire("exception", [l, h, d], d);
                                return true;
                            });
                        }
                    } else {
                        this.ui.content.html(b);
                        this.contentReady = true;
                    }
                }
            }
            return this;
        },
        position: function (b, c) {
            this.view.css({top: c + "px", left: b + "px"});
            return this;
        },
        size: function (b, c) {
            this.view.css({width: b + "px", height: c + "px"});
            return this;
        },
        center: function (d) {
            var c = this.view;
            if (d) {
                this.view.center(d);
            } else {
                var b = c.limit();
                c.css({left: b.centerX, top: b.centerY});
            }
            return this;
        },
        follow: function (b) {
            return this;
        },
        title: function (b) {
            if (WWF.isEmpty(b)) {
                return this.config.title;
            } else {
                this.config.title = b;
                this.ui.title.text(b);
                if (this.isOpen) {
                    this.ui.title.ellipsis({
                        tooltip: {content: WWF.utils.filterHtml(b)},
                        renderTo: this.view,
                        reset: true
                    });
                }
                return this;
            }
        },
        addButton: function (c) {
            function d(f) {
                f.parent = this;
                f.renderTo = this.ui.buttonbar;
                if (f.closeDialog) {
                    var g = this;
                    var h = f.onClick;
                    f.onClick = function () {
                        if (h && $.isFunction(h)) {
                            var j = Array.prototype.slice.call(arguments, 0);
                            if (h.apply(this, j) === true) {
                                g.close();
                            }
                        } else {
                            g.close();
                        }
                    };
                }
                this.buttons.push(new WWF.Button(f));
            }

            if (!this.buttons) {
                this.buttons = [];
            }
            if ($.isArray(c)) {
                for (var b = 0; b < c.length; b++) {
                    d.call(this, c[b]);
                }
            } else {
                d.call(this, c);
            }
        },
        removeButton: function (d) {
            var c = (d == undefined) ? true : false;
            if (WWF.isNumber(d)) {
                this.buttons[d].destory();
                this.buttons.splice(d, 1);
            } else {
                for (var b = 0; b < this.buttons.length; b++) {
                    if (c || this.buttons[b].id == d) {
                        this.buttons[b].destory();
                        if (!c) {
                            return;
                        }
                    }
                }
                this.buttons = [];
            }
        },
        getButton: function (c) {
            if (WWF.isNumber(c)) {
                return this.buttons[c];
            }
            for (var b = 0; b < this.buttons.length; b++) {
                if (this.buttons[b].id == c) {
                    return this.buttons[b];
                }
            }
        },
        updateButton: function (c, b) {
            this.getButton(c).update(b);
        },
        find: function (b) {
            return this.view.find(b);
        },
        removeEscHandle: function () {
            if (this.config.esc) {
                WWF.EscManager.remove(this.__keyNav);
            }
        }
    });
    WWF.extend({
        Alert: function (d, f) {
            var b = {title: '信息', open: false, buttons: [{text: '确定', closeDialog: true, onClick: f}]};
            if (WWF.isString(d)) {
                b.content = d;
            } else {
                if (d.type) {
                    d.content = '<table ><tr><td style="vertical-align: top;padding-right: 8px; width:32px"><div class="wwf-ic32 wwf-ic-' + d.type + '"></div></td><td>' + d.content + "</td></tr></table>";
                }
                $.extend(b, d);
            }
            var c = new WWF.Dialog(b);
            if (WWF.browser.ie7) {
                c.on("open", function () {
                    this.find(".wwf-td-content").css("width", parseInt(this.view.css("width")) - 35);
                });
            }
            c.open();
            return c;
        }, Confirm: function (f, d, n, c, j, m) {
            var l = true, p = null, g = false, o = false, q = '确定', h = '取消';
            if (WWF.isObject(c)) {
                if (c.focused) {
                    p = "#sys_confirm_ok";
                }
                g = c.highlight;
                q = c.text || q;
            } else {
                if (c === true) {
                    g = c;
                }
            }
            if (WWF.isObject(j)) {
                if (j.focused) {
                    p = "#sys_confirm_cancel";
                }
                o = j.highlight;
                h = j.text || h;
            }
            if (j === true) {
                g = j;
            }
            var b = {
                title: m || '确认', focus: p, open: true, onClose: function () {
                    if (l) {
                        var r = Array.prototype.slice.call(arguments, 0);
                        if ($.isFunction(n)) {
                            n.apply(this, r);
                        }
                    }
                }, buttons: [{
                    text: q, id: "sys_confirm_ok", closeDialog: true, highlight: g, onClick: function () {
                        var r = Array.prototype.slice.call(arguments, 0);
                        l = false;
                        if ($.isFunction(d)) {
                            return d.apply(this, r);
                        } else {
                            return true;
                        }
                    }
                }, {
                    text: h, id: "sys_confirm_cancel", closeDialog: true, highlight: o, onClick: function () {
                        var r = Array.prototype.slice.call(arguments, 0);
                        l = false;
                        if ($.isFunction(n)) {
                            return n.apply(this, r);
                        } else {
                            return true;
                        }
                    }
                }]
            };
            if (WWF.isString(f)) {
                b.content = f;
            } else {
                $.extend(b, f);
            }
            return new WWF.Dialog(b);
        }
    });
})(WWF);
(function () {
    WWF.template.add("WWF.button", '<#import "controls.ftl" as controls> <@controls.button id=id text=text tooltip=tooltip icon=icon size=size split=split highlight=highlight disable=disabled />');
    WWF.template.add("WWF.inputbutton", '<#import "controls.ftl" as controls> <@controls.inputbutton id=id text=text tooltip=tooltip  highlight=highlight disable=disabled />');
    WWF.Button = WWF.Component.extend({
        templateName: "WWF.button",
        defaultConfig: {
            icon: "",
            type: "submit",
            iconLayout: "",
            size: "normal",
            text: "",
            tooltip: "",
            disabled: false,
            clsDisable: "disabled",
            width: false,
            maxWidth: false,
            size: "normal",
            highlight: false,
            split: false
        },
        handler: {text: "span", splitTrigger: "em", icon: "i"},
        _init: function (b) {
            this._supportEvents("click", "trigger", "mousedown", "mouseup");
            if (!this.config.text) {
                this.config.text = '提交';
            }
            if (b.element) {
                var f = this.config.element, c = $(f);
                if (c.attr("id")) {
                    this.id = this.config.id = c.attr("id");
                }
                this.config.text = $(f).text();
                if (c.hasClass(this.config.clsDisable)) {
                    this.config.disabled = true;
                }
                this.config.highlight = c.hasClass("green");
                this.config.from = b.element;
            }
            this.disabled = b.disabled;
            this._addTplData("text,split,tooltip,highlight,disabled,icon,size,type", b);
            var d = "wwf-btn " + (this.config.highlight ? "green" : "gray");
            d += " " + this.config.size;
            this._addTplData("className", d);
            return this;
        },
        _beforeRender: function () {
            if (this.disabled) {
                this.disable(this.disabled);
            }
            if (this.config.split) {
                this.view.addClass("split");
                this.bind(this.ui.splitTrigger, "click", this._trigger, this);
                this.view.bind("keydown", $.proxy(this._keydown, this));
            }
            var b = this.config;
            var f = this.view, c = b.width, d = b.maxWidth;
            if (b.split) {
                f = this.ui.text;
                if (c) {
                    c = c - 20;
                }
                if (d) {
                    d = d - 20;
                }
            }
            if (c) {
                this.ellipsis = true;
                f.width(c);
            }
            if (d) {
                this.ellipsis = true;
                f.css("max-width", d);
            }
            this.bind(this.view, "click", this._click, this);
        },
        _keydown: function (b) {
            if (b.keyCode == WWF.keyboard.Down) {
                this._trigger(b);
            }
        },
        _afterRender: function () {
            this._ellipsis();
        },
        _ellipsis: function () {
            if (this.ellipsis) {
                var b = this.view;
                if (this.config.split) {
                    b = this.ui.text;
                }
                b.addClass("wwf-ellipsis");
                b.ellipsis({customTooltip: false, reset: true});
            }
        },
        _trigger: function (b) {
            if (!this.disabled) {
                this.fire("trigger", [b, this, this.config.parent], this.view);
            }
        },
        _click: function (b) {
            if (!this.disabled) {
                this.fire("click", [b, this, this.config.parent], this.view);
            }
        },
        disable: function (b) {
            this.disabled = b;
            if (b) {
                this.view.addClass(this.config.clsDisable);
                this.view.attr("hidefocus", true);
                this.view.attr("tabindex", -1);
                this.view.attr("disabled", true);
            } else {
                this.view.removeClass(this.config.clsDisable);
                this.view.removeAttr("hidefocus");
                this.view.removeAttr("tabindex");
                if (this.view.attr("disabled")) {
                    this.view.removeAttr("disabled");
                }
            }
        },
        text: function (b) {
            if (b) {
                this.ui.text.text(b);
                this.view.attr("title", b);
                this._ellipsis();
            } else {
                return this.ui.text.text();
            }
        },
        attr: function (b, c) {
            return this.view.attr(b, c);
        },
        update: function (c) {
            if (c.text) {
                this.text(c.text);
            }
            if (c.icon) {
                this.ui.icon[0].className = "wwf-ic16 " + c.icon;
                this.view.addClass("wwf-icon-btn");
            }
            if (!WWF.isUndefined(c.highlight)) {
                var d = (this.config.highlight ? "green" : "gray"), b = c.highlight ? "green" : "gray";
                this.view[0].className = this.view[0].className.replace(d, b);
                this.config.highlight = c.highlight;
                this._ellipsis();
            }
            if (c.icon == "") {
                this.ui.icon.hide();
            }
            if (!WWF.isUndefined(c.disabled)) {
                this.disable(c.disabled);
            }
            if (!WWF.isUndefined(c.tooltip)) {
                this.view.attr("title", c.tooltip);
            }
            this._setEvent(c, true);
        }
    });
    WWF.InputButton = WWF.Button.extend({templateName: "WWF.inputbutton"});
})();
(function () {
    WWF.VirtualInput = WWF.Component.extend({
        defaultConfig: {
            disabled: false,
            label: "Label",
            checked: false,
            value: "",
            name: "",
            id: "",
            otherAttr: {}
        }, handler: {label: "label", input: "input"}, _init: function (b) {
            this._supportEvents("click", "change");
            if (b.element) {
                var c = $(b.element), d = c.find("input");
                if (c.is("input")) {
                    d = c;
                    c = c.parent();
                }
                if (d.attr("id")) {
                    this.config.id = d.attr("id");
                }
                if (d.attr("name")) {
                    this.config.name = d.attr("name");
                }
                if (d.attr("disabled") == "disabled") {
                    this.config.disabled = true;
                }
                if (d.attr("checked") == "checked") {
                    c.attr("aria-checked", true);
                    this.config.checked = true;
                }
                this.config.value = d.val();
                this.config.label = c.find("label").text();
                this.config.from = c;
            }
            this._disabled = b.disabled;
            this._addTplData("label,value,name,id,checked,disabled,otherAttr", b);
            return this;
        }, _beforeRender: function () {
            this.ui.input.bind("focus", $.proxy(this._focus, this)).bind("change", $.proxy(this._change, this)).bind("blur", $.proxy(this._blur, this)).bind("keyup", $.proxy(this._keyup, this));
        }, _connectLableToInput: function () {
            this.ui.label.bind("mousedown", $.proxy(this._mousedown, this)).bind("mouseup", $.proxy(this._mouseup, this)).bind("click", function (b) {
                b.preventDefault();
            });
        }, _mouseup: function () {
            this.view.removeClass("mousedown");
            this.toggleChecked();
        }, toggleChecked: function () {
            var b = this.ui.input.prop("checked") ? false : true;
            this.checked(b);
        }, checked: function (c) {
            if (this._disabled) {
                return;
            }
            var b = this.ui.input;
            if (c === undefined) {
                return b.prop("checked") ? true : false;
            }
            if (c) {
                b.attr("checked", "checked").change();
                this.view.attr("aria-checked", "true");
                this.view.removeAttr("style").css("zoom", "normal");
            } else {
                b.removeAttr("checked").change();
                this.view.removeAttr("aria-checked");
                this.view.removeAttr("style").css("zoom", "normal");
            }
            return c;
        }, _mousedown: function () {
            this.view.addClass("mousedown");
            var b = this;
            setTimeout(function () {
                b.focus();
            }, 10);
        }, _keyup: function (c) {
            var b = this;
            var d = this.ui.input.prop("checked") ? false : true;
            switch (c.keyCode) {
                case WWF.keyboard.space:
                    setTimeout(function () {
                        b.checked(d);
                    }, 10);
                    break;
            }
        }, _focus: function () {
            this.view.addClass("f-focus");
            if (WWF.browser.ie7 || WWF.browser.ie8) {
                this.view.removeAttr("style").css("zoom", "normal");
            }
        }, _blur: function (b) {
            this.view.removeClass("f-focus");
            if (WWF.browser.ie7 || WWF.browser.ie8) {
                this.view.removeAttr("style").css("zoom", "normal");
            }
        }, focus: function () {
            if (this.ui.input.attr("disabled") == "disabled") {
                return;
            }
            this.ui.input.focus();
        }, _change: function () {
        }, disable: function (b) {
            if (b) {
                this.ui.input.attr("disabled", "disabled");
                this.view.attr("aria-disabled", "true");
            } else {
                this.ui.input.removeAttr("disabled");
                this.view.removeAttr("aria-disabled");
            }
            this.view.removeAttr("style").css("zoom", "normal");
            this._disabled = b;
        }
    });
})();
(function () {
    WWF.template.add("WWF.inputBox", '<#import "controls.ftl" as controls> <@controls.inputBox id=id name=name value=value type=type disabled=disabled readOnly=readOnly placeholder=placeholder maxLength=maxLength otherAttr=otherAttr/>');
    WWF.InputBox = WWF.Component.extend({
        templateName: "WWF.inputBox",
        defaultConfig: {
            id: "",
            name: "",
            value: "",
            type: "text",
            disabled: false,
            readOnly: false,
            placeholder: "",
            clsDisable: "disabled",
            otherAttr: {}
        },
        handler: {span: "span", placeholder: "label", input: "input"},
        _init: function (b) {
            this.disabled = b.disabled;
            this._supportEvents("focus", "blur");
            if (b.element) {
                var c = $(b.element);
                if (c.is("input")) {
                    c = c.parent();
                }
                if (c.attr("id")) {
                    this.id = this.config.id = c.attr("id");
                }
                this.config.value = c.text();
                if (c.hasClass(this.config.clsDisable)) {
                    this.config.disabled = true;
                }
                this.config.from = c;
            }
            this._addTplData("id,name,value,type,disabled, readOnly, placeholder, maxLength, otherAttr", b);
            return this;
        },
        _beforeRender: function () {
            var b = this;
            b.ui.input.focus(function () {
                b.view.addClass("f-focus");
            });
            b.ui.input.blur(function () {
                b.view.removeClass("f-focus");
            });
        },
        _afterRender: function () {
            if (!this.__isPlaceholer() || WWF.browser.safari || WWF.browser.ie === 10) {
                this.ui.placeholder.overlabel();
                this.ui.placeholder.show();
                this.ui.input.removeAttr("placeholder");
            }
        },
        __isPlaceholer: function () {
            var b = document.createElement("input");
            return "placeholder" in b;
        },
        setStatus: function (b) {
            if (b == "error") {
                this.view.addClass("f-error");
            } else {
                if (b == "normal") {
                    this.view.removeClass("f-error");
                }
            }
        },
        attr: function (b, c) {
            return this.view.attr(b, c);
        },
        disable: function (b) {
            this.disabled = b;
            if (b) {
                this.ui.input.attr("hidefocus", true);
                this.ui.input.attr("tabindex", -1);
                this.ui.input.attr("disabled", true);
            } else {
                this.ui.input.removeAttr("hidefocus");
                this.ui.input.removeAttr("tabindex");
                if (this.view.attr("aria-disabled")) {
                    this.view.removeAttr("aria-disabled");
                }
                if (this.ui.input.attr("disabled")) {
                    this.ui.input.removeAttr("disabled");
                }
            }
        },
        focus: function () {
            this.ui.input.focus();
        },
        blur: function () {
            this.ui.input.blur();
        }
    });
})();
(function () {
    WWF.template.add("WWF.checkbox", '<#import "controls.ftl" as controls> <@controls.checkbox id=id name=name value=value label=label checked=checked disabled=disabled otherAttr=otherAttr />');
    WWF.Checkbox = WWF.VirtualInput.extend({
        templateName: "WWF.checkbox", defaultConfig: {}, _init: function (b) {
            this._super(b);
        }, _beforeRender: function () {
            this.checked(this.config.checked);
            this._connectLableToInput();
            this._super();
        }
    });
})();
(function () {
    var b = {};
    WWF.template.add("WWF.radio", '<#import "controls.ftl" as controls> <@controls.radio id=id name=name value=value label=label checked=checked disabled=disabled  otherAttr=otherAttr />');
    WWF.Radiobox = WWF.VirtualInput.extend({
        templateName: "WWF.radio", defaultConfig: {}, _init: function (c) {
            this._super(c);
            if (!b[c.name]) {
                b[c.name] = [];
            }
            b[c.name].push(this);
        }, _beforeRender: function () {
            this._super();
            this._connectLableToInput();
        }, _keyup: function (c) {
            switch (c.keyCode) {
                case WWF.keyboard.Left:
                case WWF.keyboard.Right:
                case WWF.keyboard.Up:
                case WWF.keyboard.Down:
                case WWF.keyboard.space:
                    this._updateGroup();
                    break;
            }
        }, _mouseup: function () {
            if (this.ui.input.attr("disabled") == "disabled") {
                return;
            }
            this.view.removeClass("mousedown");
            var c = b[this.config.name];
            if (c.length) {
                this._updateGroup(c);
            }
        }, _updateGroup: function () {
            var d = b[this.config.name];
            var c = this;
            $.each(d, function (f, g) {
                if (g != c) {
                    g.checked(false);
                }
            });
            this.checked(true);
        }, destroy: function () {
            delete b[this.config.name];
        }
    });
})();
(function () {
    WWF.widget = function (b, c) {
        var h = WWF.ns("$." + b);
        var d = b, b = b.slice(b.lastIndexOf(".") + 1), f = b.toLowerCase();
        var g = WWF.ns(d);
        g[b] = WWF.Component.extend(c);
        h.create = function (j) {
            var l = new g[b](j);
            if (l.view) {
                l.view.data(f, l);
            }
            return l.view;
        };
        if (WWF.isBoolean(c.jqueryPlugin) && !c.jqueryPlugin) {
            return;
        }
        if ($.isFunction(c.jqueryPlugin)) {
            $.fn[b.toLowerCase()] = c.jqueryPlugin;
            delete c.jqueryPlugin;
            return;
        }
        $.fn[f] = function (n) {
            var l = arguments, m;

            function j(p, o) {
                m = $(this).data(f);
                if (n && m && WWF.isString(n)) {
                    return m[n].apply(m, Array.prototype.slice.call(l, 1));
                } else {
                    if (!m) {
                        if (WWF.isObject(n) || !n) {
                            n = n || {};
                            n.element = this;
                            return h.create(n);
                        } else {
                            WWF.logger.error(WWF.utils.format("Method [{0}] does not exist on jQuery.wwf.{1}", n, b));
                        }
                    } else {
                        return m;
                    }
                }
            }

            if (this.length == 1) {
                return j.call(this, 0, this);
            } else {
                return $.each(this, j);
            }
        };
    };
    WWF.createComponent = function () {
        WWF.logger.warn("this function will be scrap, please use WWF.widget");
        var b = Array.prototype.slice.call(arguments, 0);
        WWF.widget.apply(this, b);
    };
})();
(function (g) {
    var c = {
        reset: false,
        useTitle: false,
        tooltip: true,
        customTooltip: true,
        handlePadding: false,
        position: "bottom,left"
    };

    function b(j, l, h) {
        if (l) {
            g(j).css({"padding-right": l, "margin-right": h});
        }
    }

    function d(r, h) {
        var G = document, j = true, l = g.fn.ellipsis.defaultConfig, E = g(r), q = r.offsetWidth, o = "...",
            y = './/text()[normalize-space(.) != ""]', s = g.extend({}, c, h);
        if (s.reset) {
            if (r._setTitle) {
                if (s.useTitle) {
                    E.text(r.title);
                }
                r.removeAttribute("title");
                r._setTitle = false;
                if (s.customTooltip) {
                    E.tooltip(false);
                }
            }
            if (r.__setwidth) {
                r.style.width = "auto";
                r.__setwidth = false;
            }
        }
        var t, u;
        if (s.handlePadding) {
            t = parseInt(E.css("padding-right"), 10) || 0;
            u = parseInt(E.css("margin-right"), 10) || 0;
            E.css("padding-right", 0);
            q = r.offsetWidth - t;
            E.css("margin-right", u + t);
        }
        if (r.scrollWidth > q) {
            if (l.tooltipFilter && g.isFunction(l.tooltipFilter)) {
                j = l.tooltipFilter(E) != false;
            }
            if (s.tooltip && j) {
                if (!r.getAttribute("title")) {
                    r.setAttribute("title", g.trim(r.textContent || r.innerText));
                }
                r._setTitle = true;
                if (s.customTooltip) {
                    if (s.renderTo || WWF.isObject(s.tooltip)) {
                        var F = {renderTo: s.renderTo};
                        if (typeof s.tooltip == "object") {
                            g.extend(F, s.tooltip);
                        }
                        E.tooltip(F);
                    } else {
                        r.setAttribute("data-ui", "Tooltip");
                    }
                }
            }
            var B = E.css("max-width"), C = WWF.browser;
            if (C.ie && C.version < 9 && (B = B ? parseInt(B, 10) : B)) {
                E.width(B);
                r.__setwidth = true;
            }
        } else {
            b(r, t, u);
            return;
        }
        if (typeof r.style.textOverflow == "string") {
            b(r, t, u);
            return;
        }
        r.appendChild(G.createTextNode(o));
        var D = G.evaluate(y, r, null, 5, null);
        var z = D.iterateNext(), J = [], x = [], A, m, H, I;
        while (z) {
            J.push(z);
            x.push(z.data);
            z = D.iterateNext();
        }
        for (A = J.length - 2; A > 0; A--) {
            J[A].deleteData(0, J[A].length);
        }
        for (A = 1; A < J.length - 1 && r.scrollWidth <= q; A++) {
            J[A].appendData(x[A]);
        }
        z = J[A - 1];
        m = x[A - 1];
        H = x[0];
        while (1) {
            if (r.scrollWidth <= q) {
                A = (H.length >> 1) + H.length % 2;
                if (!A) {
                    break;
                }
                m = H.substring(0, A);
                H = H.substring(A);
                if (m.length <= 2 && H.length <= 2) {
                    break;
                }
                z.appendData(m);
            } else {
                if (!m) {
                    break;
                }
                A = (m.length >> 1) + m.length % 2;
                H = m.substring(A);
                m = m.substring(0, A);
                if (z.length > 1) {
                    z.deleteData(z.length - H.length, A);
                }
            }
            if (I == r.scrollWidth) {
                break;
            }
            I = r.scrollWidth;
        }
        b(r, t);
    }

    function f(l, h, o) {
        var j = o, m = h.length - 1;
        for (; j < o + 100; j++) {
            if (j > m) {
                return;
            }
            d(h[j], l);
        }
        setTimeout(function () {
            f(l, h, j);
        }, 10);
    }

    g.fn.ellipsis = function (h) {
        f(h, this, 0);
        return this;
    };
    g.fn.ellipsis.defaultConfig = {tooltipFilter: null};
})(jQuery);
$.fn.dropmenu = function (g) {
    var l = {
        clsHover: "",
        clsActive: "",
        monitor: null,
        position: "bottom,left",
        deferEventTrigger: false,
        offset: {top: 0, bottom: 0, left: 0, right: 0},
        renderTo: WWF.frame && WWF.frame.pageCacheNode()
    }, j, f, h, d;
    if (WWF.isString(g)) {
        j = this.data("dropmenu"), d = [].slice.call(arguments, 1);
        if (j) {
            if ($.isFunction(j[g])) {
                return j[g].apply(j, d);
            } else {
                return j[g];
            }
        }
    }
    f = $.extend({}, l, g);
    j = new WWF.Menu($.extend(f, {
        onBeforeShow: function () {
            g.onBeforeShow && g.onBeforeShow.call(h, this);
        }, onShow: function () {
            $(document).bind("click", b);
            g.onShow && g.onShow.call(h, this);
        }, onHide: function () {
            $(document).unbind("click", b);
            g.onHide && g.onHide.call(h, this);
        }, onClick: function (n, o) {
            var m = h;
            b();
            g.onClick && g.onClick.call(m, n, o, m);
        }
    }));

    function c(n) {
        var m = n.currentTarget;
        $(document).unbind("click", b);
        if (j.isShow && h) {
            if (m != h[0]) {
                g.onHide && g.onHide.call(h, j);
                h.removeClass(f.clsActive);
                j.position(this, f.offset, f.position);
                h = $(m);
                g.onBeforeShow && g.onBeforeShow.call(h, j);
                g.onShow && g.onShow.call(h, j);
                h && h.addClass(f.clsActive);
                setTimeout(function () {
                    $(document).bind("click", b);
                }, 100);
                return;
            } else {
                b();
                return;
            }
        }
        h = $(m);
        h && h.addClass(f.clsActive);
        j.show(this, f.offset, f.position);
    }

    function b() {
        if ($.isFunction(g.hideMenu)) {
            g.hideMenu.call(j);
        } else {
            j.hide();
        }
        if (j.isShow) {
            h && h.removeClass(f.clsActive);
            h = null;
        }
    }

    this.data("dropmenu", j);
    if (f.monitor) {
        $(f.monitor).delegate(this.selector, "click", c);
    } else {
        this.bind("click", c);
    }
};
(function (d) {
    var b = "fruit", g, m = d[b];
    g = d[b] = {
        $: {}, version: "0.2.1", global: d, $package: b, noConflict: function () {
            d[b] = m;
            return g;
        }, config: {debug: window.location.search.match("(\\?|&)debug") !== null}
    };
    var f = Object.prototype.toString, n = Array.prototype.slice;

    function o(p) {
        return typeof(p) == "object" && p === Object(p);
    }

    var l = Array.isArray || function (p) {
        return f.call(p) === "[object Array]";
    };

    function c() {
        var p = arguments, s = p.length, u = p[0], r = 0, t, q;
        if (s == 1) {
            u = this;
        }
        for (; r < s; r++) {
            t = p[r];
            if (u && (o(t) || isFunction(t))) {
                for (q in t) {
                    u[q] = t[q];
                }
            }
        }
        return u;
    }

    function j(t, r, q) {
        var p, q = q || d;
        if (l(t)) {
            var s = t.length;
            for (p = 0; p < t.length; p++) {
                if (r.call(q, t[p], p) === false) {
                    break;
                }
            }
        } else {
            for (p in t) {
                if (r.call(q, t[p], p) === false) {
                    break;
                }
            }
        }
    }

    g.util = {
        extend: c, each: j, isArray: l, isObject: o, isUndef: function (p) {
            return typeof(p) === "undefined";
        }, isNull: function (p) {
            return p === null;
        }, isDefine: function (p) {
            return !this.isUndef(p) && !this.isNull(p);
        }, emptyFun: function () {
        }, isFunction: function (p) {
            return typeof(p) === "function";
        }
    };
    j(["String", "Boolean", "Date", "Number"], function (p) {
        fruit.util["is" + p] = function (q) {
            return f.call(q) === "[object " + p + "]";
        };
    });
    var h = fruit.util;
    h.createObject = function (p) {
        return Object.create ? Object.create(p.prototype) : new p;
    };
    h.extendClass = function (s, r, u) {
        var q = function () {
        }, p, t;
        p = r.prototype;
        q.prototype = p;
        t = h.createObject(q);
        if (u) {
            t.$super = p;
            t.$fullname = u.$fullname;
            t.$namespace = u.$namespace;
            t.$name = u.$name;
        }
        s.prototype = t;
        s.constructor = s;
        return s;
    };
    isFunction = fruit.util.isFunction;
})(window);
(function (fruit, util) {
    var writer, slice = Array.prototype.slice, ie = eval("''+/*@cc_on @_jscript_version@*/-0");
    var Logger = util.logger = {
        setLogger: function (fn) {
            if (!util.isFunction(fn)) {
                return;
            }
            writer = fn;
        }
    };
    writer = function (type) {
        var args = slice.call(arguments[1], 0);
        if (ie) {
            type = "info";
        }
        if (typeof console == "object" && util.isFunction(console[type])) {
            console[type].apply(console, args);
        }
    };
    var getFnName = function (callee) {
        var _callee = callee.toString().replace(/[\s\?]*/g, ""), comb = _callee.length >= 50 ? 50 : _callee.length;
        _callee = _callee.substring(0, comb);
        var name = _callee.match(/^function([^\(]+?)\(/);
        if (name && name[1]) {
            return name[1];
        }
        if (callee.caller) {
            var caller = callee.caller, _caller = caller.toString().replace(/[\s\?]*/g, "");
            var last = _caller.indexOf(_callee), str = _caller.substring(last - 30, last);
            name = str.match(/var([^\=]+?)\=/);
            if (name && name[1]) {
                return name[1];
            }
        }
        return "";
    };
    var debugPool = {};
    util.each(["warn", "info", "error", "debug", "log"], function (type) {
        Logger[type] = function (info) {
            var level = fruit.config.debug;
            if (this.$name) {
                level = debugPool[this.$fullname] || level;
            }
            if (type != "error" && type != "warn" && !level) {
                return;
            }
            if (util.isString(info) && info.indexOf("{0}") >= 0) {
                var args = slice.call(arguments, 1);
                info = fruit.util.format(info, args);
                args = [info];
            } else {
                var args = slice.call(arguments, 0);
            }
            var fn = arguments.callee.caller, clsName = "", methodName = "";
            if (this.$fullname) {
                clsName = this.$fullname;
            }
            if (fn && fn.$name) {
                if (!clsName && fn.$owner) {
                    clsName = fn.$owner.prototype.$fullname;
                }
                methodName = fn.$name;
            } else {
                methodName = getFnName(arguments.callee);
            }
            method = (clsName ? clsName + "->" : "") + (methodName ? methodName + ": " : "  ");
            if (method) {
                info = method + info;
            }
            args[0] = info;
            writer.call(fruit.log, type, args);
        };
    });
    Logger.listen = function (name) {
        util.each(arguments, function (name) {
            debugPool[name] = 1;
        });
    };
    fruit.global.logger = Logger;
})(fruit, fruit.util);
(function (d, f, b) {
    var c = {
        trim: (function () {
            trim = String.prototype.trim, rnotwhite = /\S/, trimLeft = /^\s+/, trimRight = /\s+$/;
            if (rnotwhite.test("\xA0")) {
                trimLeft = /^[\s\xA0]+/;
                trimRight = /[\s\xA0]+$/;
            }
            return trim ? function (g) {
                return b.isDefine(g) ? trim.call(g) : "";
            } : function (g) {
                return b.isDefine(g) ? g.toString().replace(trimLeft, "").replace(trimRight, "") : "";
            };
        })(), camelize: function (g) {
            return g.replace(/\-(\w)/ig, function (j, h) {
                return h.toUpperCase();
            });
        }, decamelize: function (g) {
            return g.replace(/[A-Z]/g, function (h) {
                return "-" + h.toLowerCase();
            });
        }, upperFirstChar: function (g) {
            return g.replace(/\b[a-z]/g, function (h) {
                return h.toLocaleUpperCase();
            });
        }, format: function (h, j) {
            var g;
            if (arguments.length == 2 && b.isArray(arguments[1])) {
                g = arguments[1];
            } else {
                g = Array.prototype.slice.call(arguments, 1);
            }
            return h.replace(/\{(\d+)\}/g, function (l, n) {
                return g[n];
            });
        }, capitalize: function (g) {
            return !g ? g : g.charAt(0).toUpperCase() + g.substr(1).toLowerCase();
        }, htmlEncode: function (g) {
            return !g ? g : String(g).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
        }, htmlDecode: function (g) {
            return !g ? g : String(g).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
        }, urlEncode: function (g) {
            return encodeURIComponent(g);
        }, urlDecode: function (g) {
            return decodeURIComponent(g);
        }
    };
    b.extend(b, c);
})(fruit, document, fruit.util);
(function (c, b) {
    var d = {
        indexOf: function (f, j) {
            var h, g = -1;
            if (f.indexOf) {
                return f.indexOf(j);
            }
            if (b.isUndef(j)) {
                return g;
            }
            for (h = 0; h < f.length; h++) {
                if (f[h] === j) {
                    g = h;
                    break;
                }
            }
            return g;
        }, arrayUniq: function (h) {
            for (var g = 0; g < h.length; g++) {
                for (var f = g + 1; f < h.length; f++) {
                    if (h[g] === h[f]) {
                        h.splice(f, 1);
                        f--;
                    }
                }
            }
            return h;
        }, delFromArray: function (g, j) {
            var f = j.length;
            var h = this.clone(j);
            while (f--) {
                if (g == h[f]) {
                    h.splice(f, 1);
                }
            }
            return h;
        }, clone: function (h) {
            var j = this.isArray(h) ? [] : {}, g;
            for (var f in h) {
                g = h[f];
                if (typeof g == "object" && g != null) {
                    j[f] = this.clone(g);
                } else {
                    j[f] = g;
                }
            }
            return j;
        }
    };
    b.extend(b, d);
})(fruit, fruit.util);
(function (c, b) {
    var d = Object.prototype.toString;
    var f = {
        getType: function (h) {
            if (h === null) {
                return "Null";
            }
            if (h === undefined) {
                return "Undefined";
            }
            var g = d.call(h);
            return g.substr(8, g.length - 9);
        }, isEmpty: function (g) {
            return (g === null) || (g === undefined) || (g === "") || (c.util.isArray(g) && g.length === 0);
        }, getObjectKeys: function (j) {
            var g = [];
            for (var h in j) {
                if (j.hasOwnProperty(h)) {
                    g.push(h);
                }
            }
            return g;
        }, getObjectVals: function (j) {
            var g = [];
            for (var h in j) {
                if (j.hasOwnProperty(h)) {
                    g.push(j[h]);
                }
            }
            return g;
        }, toInt: function (g) {
            return parseInt(g, 10);
        }, toFloat: function (g) {
            return parseFloat(g);
        }, isNumeric: function (g) {
            return !isNaN(parseFloat(g)) && isFinite(g);
        }, isEmptyObject: function (h) {
            var g;
            for (g in h) {
                return false;
            }
            return true;
        }, mixin: function (j, h, g) {
            var n = j || {}, m = h || {};
            if (g) {
                n = this.clone(n);
                m = this.clone(m);
            }
            for (var l in m) {
                n[l] = m[l];
            }
            return n;
        }, merge: function (j, h, g) {
            var n = j || {}, m = h || {};
            if (g) {
                n = this.clone(n);
                m = this.clone(m);
            }
            for (var l in m) {
                if (typeof n[l] == "undefined") {
                    n[l] = m[l];
                }
            }
            return n;
        }
    };
    b.extend(b, f);
})(fruit, fruit.util);
(function (g, b) {
    var f = window.navigator.userAgent;

    function h(m, l) {
        var n = {MSIE: "IE", AppleWebKit: "WebKit", Firefox: "FF"};
        if (!b.isDefine(m)) {
            return "";
        }
        var j = b.trim(m.replace("/", ""));
        if (l) {
            j = n[j] || j;
        }
        return j;
    }

    function c(j) {
        if (!b.isDefine(j)) {
            return 0;
        }
        if (j.indexOf(".") > 0) {
            j = j.split(".");
            return Number(j[0]);
        } else {
            return parseInt(j, 10);
        }
    }

    function d(n) {
        var m = ["MSIE ", "Firefox/", "Chrome/", "Opera/", "Safari/"],
            p = ["AppleWebKit/", "Gecko/", "Presto/", "Trident/"];
        var j = n.match(new RegExp("((?:" + m.join(")|(?:") + "))([\\d\\._]+)")), l, o = {};
        if (j && j.length == 3) {
            l = h(j[1], true);
            o.browserName = h(j[1], true);
            o["is" + l] = true;
            if (l == "Safari") {
                j = n.match(/(Version)[ \/]([\w.]+)/);
            }
            o.browserVersion = c(j[2]);
        } else {
            o.isOtherBrowser = true;
            o.browserVersion = 0;
        }
        j = n.match(new RegExp("((?:" + p.join(")|(?:") + "))([\\d\\._]+)"));
        if (j && j.length) {
            l = h(j[1], true);
            o.engineName = l;
            o["is" + l] = true;
            o.engineVersion = c(j[2]);
        }
        return o;
    }

    b.detectBrowser = d;
    b.extend(b, d(f));
    b["is" + b.browserName + b.browserVersion] = true;
})(fruit, fruit.util);
(function (d, g) {
    var b = window.navigator, c = b.userAgent, j = b.platform, n,
        f = ["Win", "Android", "iPhone", "iPad", "iPod", "Linux", "X11", "Mac", "BlackBerry", "MacIntel"],
        h = /Win|Linux|Unix|Mac|MacIntel/, l = {X11: "Unix"};

    function m(p) {
        var o = p.match(new RegExp("((?:" + f.join(")|(?:") + "))|([\\d\\._]+)")), q, r = {};
        if (o) {
            q = l[o[1]] || o[1];
        }
        if (!q) {
            q = "Other";
        }
        r.OSName = q;
        if (q.substr(0, 1) == "i") {
            r[q] = true;
        } else {
            r["is" + q] = true;
        }
        if (h.test(q) && !r.isAndroid) {
            r.isDesktop = true;
        } else {
            r.isMobile = true;
        }
        r.OSVersion = parseInt(navigator.appVersion.split(" ")[0], 10);
        return r;
    }

    g.detectOS = m;
    g.extend(g, m(j));
})(fruit, fruit.util);
(function (d, c) {
    var f = {
        dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };
    var b = {
        formatDate: function () {
            var g = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                h = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                l = /[^-+\dA-Z]/g, j = function (n, m) {
                    n = n;
                    m = m || 2;
                    while (n.length < m) {
                        n = "0" + n;
                    }
                    return n;
                };
            return function (t, G, B) {
                var q = this.formatDate;
                if (arguments.length == 1 && Object.prototype.toString.call(t) == "[object String]" && !/\d/.test(t)) {
                    G = t;
                    t = undefined;
                }
                t = t ? new Date(t) : new Date;
                if (!t) {
                    throw"invalid date";
                }
                G = this.dateMasks[G] || G || this.dateMasks["default"];
                if (G.slice(0, 4) == "UTC:") {
                    G = G.slice(4);
                    B = true;
                }
                var E = B ? "getUTC" : "get", x = t[E + "Date"](), n = t[E + "Day"](), u = t[E + "Month"](),
                    A = t[E + "FullYear"](), C = t[E + "Hours"](), w = t[E + "Minutes"](), F = t[E + "Seconds"](),
                    z = t[E + "Milliseconds"](), p = B ? 0 : t.getTimezoneOffset(), r = {
                        d: x,
                        dd: j(x),
                        ddd: f.dayNames[n],
                        dddd: f.dayNames[n + 7],
                        m: u + 1,
                        mm: j(u + 1),
                        mmm: f.monthNames[u],
                        mmmm: f.monthNames[u + 12],
                        yy: String(A).slice(2),
                        yyyy: A,
                        h: C % 12 || 12,
                        hh: j(C % 12 || 12),
                        H: C,
                        HH: j(C),
                        M: w,
                        MM: j(w),
                        s: F,
                        ss: j(F),
                        l: j(z, 3),
                        L: j(z > 99 ? Math.round(z / 10) : z),
                        t: C < 12 ? "a" : "p",
                        tt: C < 12 ? "am" : "pm",
                        T: C < 12 ? "A" : "P",
                        TT: C < 12 ? "AM" : "PM",
                        Z: B ? "UTC" : (String(t).match(h) || [""]).pop().replace(l, ""),
                        o: (p > 0 ? "-" : "+") + j(Math.floor(Math.abs(p) / 60) * 100 + Math.abs(p) % 60, 4),
                        S: ["th", "st", "nd", "rd"][x % 10 > 3 ? 0 : (x % 100 - x % 10 != 10) * x % 10]
                    };
                return G.replace(g, function (m) {
                    return m in r ? r[m] : m.slice(1, m.length - 1);
                });
            };
        }(),
        dateMasks: {
            "default": "ddd mmm dd yyyy HH:MM:ss",
            shortDate: "m/d/yy",
            mediumDate: "mmm d, yyyy",
            longDate: "mmmm d, yyyy",
            fullDate: "dddd, mmmm d, yyyy",
            shortTime: "h:MM TT",
            mediumTime: "h:MM:ss TT",
            longTime: "h:MM:ss TT Z",
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        },
        newDate: function (h) {
            if (h) {
                if (c.isIE) {
                    var g = new Date();
                    var j = h.split("-");
                    g.setUTCFullYear(j[0], j[1] - 1, j[2]);
                    g.setUTCHours(0, 0, 0);
                } else {
                    var g = new Date(h);
                }
            } else {
                var g = new Date();
            }
            return g;
        },
        getDayNames: function (g) {
            if (g == "ddd") {
                return f.dayNames.slice(0, 7);
            } else {
                return f.dayNames.slice(7);
            }
        }
    };
    c.extend(c, b);
})(fruit, fruit.util);
(function (c, b) {
    func = {
        intercept: function (h, g, f, d) {
            if (!b.isFunction(g)) {
                return h;
            } else {
                return function (t, s, r, q, p, o, n, m, l, j) {
                    var u = this;
                    g.target = u;
                    g.method = h;
                    return (g.call(f || u || window, t, s, r, q, p, o, n, m, l, j) !== false) ? h.call(u || window, t, s, r, q, p, o, n, m, l, j) : d || null;
                };
            }
        }, bind: function (f, d) {
            if (b.isString(f)) {
                f = d[f];
            }
            return f.bind ? f.bind(d) : function () {
                return f.apply(d, arguments);
            };
        }, objectCreate: function (d) {
            return Object.create ? Object.create(d.prototype) : new d;
        }, defer: function (g, d) {
            var f = window.setTimeout(function () {
                g.call(d || this);
            }, 0);
            return f;
        }, delay: function (g, h, d) {
            var f = window.setTimeout(function () {
                h.call(d || this);
            }, g * 1000);
            return f;
        }
    };
    b.extend(b, func);
})(fruit, fruit.util);
(function (d, b) {
    var g = "en_US", c = {}, h = Array.prototype.slice;
    var f = b.i18n = {
        get: function (l) {
            var m, j = h.call(arguments, 1), n = d.config.lang || g;
            j.unshift(n, l);
            return this.getByLang.apply(this, j);
        }, getByLang: function (n, l) {
            var m, j = h.call(arguments, 2);
            if (c[n]) {
                m = c[n][l];
            }
            if (!m) {
                b.logger.log(d.util.format("not define language variable of [{0}] in {1}", l, n));
                return "";
            }
            if (j.length == 0) {
                return m;
            } else {
                return d.util.format(m, j);
            }
        }, setLang: function (j) {
            g = j;
        }, add: function (n) {
            var j;
            if (!c[n]) {
                c[n] = {};
            }
            var l, m;
            if (arguments.length == 2) {
                m = arguments[1];
                for (j in m) {
                    c[n][j] = m[j];
                }
            }
            if (arguments.length == 3) {
                l = $.trim(arguments[1]);
                m = arguments[2];
                if (d.util.isString(m)) {
                    c[n][l] = $.trim(m);
                } else {
                    for (j in m) {
                        c[n][l + "." + j] = m[j];
                    }
                }
            } else {
                $.extend(c[n], arguments[1]);
            }
        }
    };
})(fruit, fruit.util);
(function (c, b) {
    var d = {
        getURL: function () {
            return window.location.href;
        }, getURLParams: function (f) {
            f = f || this.getURLHash();
            if (f.indexOf("?") < 0) {
                f += "?";
            }
            return $.deparam.querystring(f);
        }, getURLHash: function (f) {
            f = f || this.getURL();
            if (/\#\/.+/.test(f)) {
                f = f.split("#").slice(1).join("");
            } else {
                f = "";
            }
            if (!f.replace(/[\/\s]+/ig, "")) {
                f = "";
            }
            return f;
        }, getURLParam: function (g, f) {
            var h = this.getURLParams(f);
            return h[g];
        }, baseURL: function (f) {
            f = f || this.getURL();
            if (/#/.test(f)) {
                f = f.substr(0, f.indexOf("#"));
            }
            if (/\/$/.test(f)) {
                f = f.substr(0, f.length - 1);
            }
            return f;
        }, generateURLString: function (l, f) {
            var h = this.getURLHash(f), g, j, m = [];
            for (g in l) {
                m.push(g + "=" + l[g]);
            }
            if (m.length === 0) {
                return h;
            }
            if (/\?/.test(h)) {
                j = h + "&" + m.join("&");
            } else {
                j = h + "?" + m.join("&");
            }
            return j;
        }
    };
    b.extend(b, d);
})(fruit, fruit.util);
(function (c, b) {
    b.keys = {
        BACKSPACE: 8,
        TAB: 9,
        CLEAR: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        META: b.isWebKit ? 91 : 224,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESCAPE: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        HELP: 47,
        LEFT_WINDOW: 91,
        RIGHT_WINDOW: 92,
        SELECT: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_PLUS: 107,
        NUMPAD_ENTER: 108,
        NUMPAD_MINUS: 109,
        NUMPAD_PERIOD: 110,
        NUMPAD_DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        F13: 124,
        F14: 125,
        F15: 126,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145
    };
})(fruit, fruit.util);
(function (c, b) {
    var d = {
        createCSS: function (h, g) {
            var f = JSON.stringify(g);
            var j = document.createElement("style");
            j.setAttribute("type", "text/css");
            document.head.appendChild(j);
            if (j.styleSheet && j.styleSheet.cssText) {
                j.styleSheet.cssText += f;
            } else {
                j.appendChild(document.createTextNode(f));
            }
        }
    };
    b.extend(b, d);
})(fruit, fruit.util);
(function (d, c, f) {
    var b = [];
    d.ns = function (h) {
        if (arguments.length > 1 && !c.isUndef(arguments[1]) && arguments[1] !== true) {
            c.each(arguments, function (o) {
                d.ns(o);
            });
        }
        var n = h.split("."), g = n.shift(), j = f[g], m, l = arguments[1];
        if (!j) {
            if (l) {
                return null;
            } else {
                j = f[g] = {$package: g, extend: c.extend};
            }
        }
        c.each(n, function (o) {
            if (l && !j[o]) {
                j = null;
                return false;
            }
            m = j.$package;
            j = j[o] = j[o] || {$package: m + "." + o, extend: c.extend};
        });
        return j;
    };
    c.extend(d, {
        ready: function (g) {
            if (b) {
                b.push(g);
            } else {
                g.call(d.global);
            }
        }, execReadyFn: function () {
            c.each(b, function (g) {
                g();
            }, this);
            b = null;
        }
    });
})(fruit, fruit.util, window);
(function () {
    var c = fruit.util, g = c.isUndef, j = c.isFunction, b = "defaultValue";
    var d = {};
    window.mirrorPool = d;

    function f() {
    }

    f.get = function (m, n) {
        var l = n ? this.instance : this.prototype;
        if (!l) {
            logger.error("need parameter of id.");
            return null;
        }
        if (n) {
            l = l[m];
            if (l) {
                return l.map[n] || l[b];
            }
        } else {
            if (l[m]) {
                return l[m].defaultValue;
            } else {
                return null;
            }
        }
    };
    f.set = function (m, n, o) {
        if (g(n)) {
            return;
        }
        var l = o ? this.instance : this.prototype;
        if (!l) {
            logger.error("need parameter of id.");
            return null;
        }
        if (o) {
            l = l[m];
            if (l) {
                l.map[o] = n;
            }
        } else {
            l[m] = {defaultValue: n, map: []};
        }
    };
    f.cache = function (l, m) {
        if (m) {
            this.prototype["__cache_" + l] = m.join(",");
        } else {
            return this.prototype["__cache_" + l];
        }
    };
    f.filter = function (m, q, n) {
        var l = q ? this.instance : this.prototype;
        if (!l) {
            logger.error("need parameter of id.");
            return null;
        }
        var p = {}, o;
        c.each((n || l), function (s, r) {
            if (n) {
                r = s;
                s = l[s];
            }
            o = s.map[q] || s[b];
            if (!j(o) && m(o, r)) {
                p[r] = o;
            }
        });
        return p;
    };
    fruit.ns("fruit.manager");
    var h = fruit.manager.MirrorManager = function () {
    };
    h.create = function (m, o) {
        var n = this.get(o);
        if (!n) {
            n = f;
        }
        var l = c.extendClass(function () {
        }, n);
        c.extend(l, f);
        l.$name = m;
        d[m] = l;
        return l;
    };
    h.get = function (n) {
        if (!n) {
            return null;
        }
        if (c.isString(n)) {
            return d[n];
        }
        var m = n.$fullname, o = n.$id, l;
        if (!m && n.prototype) {
            m = n.prototype.$fullname;
        }
        l = d[m];
        if (!l.instance) {
            l.instance = new l;
            l.shell = {};
        }
        if (!l.shell[o]) {
            l.shell[o] = {
                get: function (p) {
                    return l.get(p, o);
                }, set: function (p, q) {
                    return l.set(p, q, o);
                }, filter: function (p, q) {
                    return l.filter(p, o, q);
                }
            };
        }
        return l.shell[o];
    };
})();
(function (s, b) {
    var m = {preprocessors: {}, postprocessors: {}, order: {}}, x = 1, n = s.manager.MirrorManager,
        h = s.manager.OptionManager;
    s.Class = function () {
    };
    n.create("fruit.Class");
    b.extend(s.Class, {
        init: function () {
        }, regProcessor: function (z, C, B) {
            var D = n.get(this.prototype.$fullname);
            var A = B ? "postprocessing" : "preprocessing";
            D.set(A + "_" + z, C);
            return B ? u.call(this, z, C) : o.call(this, z, C);
        }, setProcessorOrder: function (z) {
            var A = n.get(this.prototype.$fullname);
            A.set("processing_order", z);
            m.order[this.$fullname || this.prototype.$fullname] = z;
        }
    });
    b.extend(s.Class.prototype, {
        $fullname: "fruit.Class", superMethod: function (A) {
            var C = this.superMethod.caller, B, z;
            if (C.$orig) {
                B = C.$orig;
            }
            if (!C.$owner) {
                C = C.caller;
            }
            if (!B) {
                B = C.$owner.prototype.$super;
            }
            z = C.$name;
            return (B[z] || B.prototype[z]).apply(this, A || []);
        }, getClassName: function () {
            return this.$name;
        }, getStatics: function () {
            return this.$self || s.getClass(this.$fullname);
        }
    });

    function d(z) {
        var B = this.prototype, A, C, D;
        for (A in z) {
            if (z.hasOwnProperty(A)) {
                D = z[A], sourceFn = B[A];
                if (b.isFunction(D)) {
                    if ((A == "init" || A == "destroy") && sourceFn) {
                        D = b.intercept(D, sourceFn);
                    }
                    if (sourceFn && sourceFn.$owner && sourceFn.$owner != this.prototype.$super) {
                        D.$orig = sourceFn.$owner;
                    }
                    D.$owner = this;
                    D.$name = A;
                }
                B[A] = D;
            }
        }
    }

    function y(z, B) {
        var A = this.$fullname || this.prototype.$fullname;
        if (!m[z][A]) {
            m[z][A] = B ? [] : {};
        }
        return m[z][A];
    }

    function u(A, B) {
        var z = y.call(this, "postprocessors");
        z[A] = B;
    }

    function o(A, B) {
        var z = y.call(this, "preprocessors");
        z[A] = B;
    }

    function c(A) {
        var B = j.call(this), z = j.call(A);
        b.extend(B, z);
        m.preprocessors[this.$fullname] = B;
        B = l.call(this), z = l.call(A);
        b.extend(B, z);
        m.postprocessors[this.$fullname] = B;
    }

    function l(A) {
        var z = y.call(this, "postprocessors");
        if (A) {
            return r.call(this, z);
        }
        return z;
    }

    function r(A) {
        var B = m.order[this.extend], z;
        if (B) {
            B = [].concat(B);
        } else {
            B = [];
        }
        b.each(A, function (D, C) {
            z = b.indexOf(B, C);
            if (z >= 0) {
                B[z] = A[C];
            } else {
                B.slice(z, 1);
                B.push(D);
            }
        });
        return B;
    }

    function j(A) {
        var z = y.call(this, "preprocessors");
        if (A) {
            return r.call(this, z);
        }
        return z;
    }

    function p() {
        var z;
        if (this.extend) {
            z = s.getClass(this.extend);
        } else {
            z = s.Class;
        }
        c.call(this, z);
    }

    function w(A, B) {
        var z = B._onClassCreated;
        delete B._onClassCreated;
        delete B._onBeforeCreated;
        d.call(A, B.methods || B.entity);
        return z.call(A, A, B);
    }

    function t(D, B, z) {
        if (!b.isFunction(D)) {
            z = B;
            B = D;
            D = function (O, N, M, L, K, J, I, H, G, F) {
                if (b.isFunction(this.init)) {
                    this.initialized = true;
                    this.$id = x++;
                    this.init(O, N, M, L, K, J, I, H, G, F);
                    delete this.initialized;
                }
                return this;
            };
        }
        if (!B) {
            B = {props: {}};
        }
        B._onClassCreated = z || s.emptyFun;
        B._onBeforeCreated = w;
        var A = 0, E = j.call(B, true);
        var C = function (F, H) {
            var G = E[A++];
            if (!G) {
                return H._onBeforeCreated.call(this, F, H);
            }
            if (G.call(this, F, H, C) !== false) {
                return C.call(this, F, H);
            }
        };
        C.call(this, D, B);
        return D;
    }

    function q(B, C) {
        var D, A = "", z;
        if (C.indexOf(".") >= 0) {
            D = C.split(".");
            C = D.pop();
            A = D.join(".");
        }
        if (!B.extend) {
            B.extend = "fruit.Class";
        }
        b.extend(B, {$namespace: A, $name: C, $fullname: A == "" ? C : A + "." + C});
    }

    function f(C, A) {
        if (C.indexOf(".") < 0) {
            return s.global;
        } else {
            var B = C.lastIndexOf("."), z = C.substr(0, B);
            return s.ns(z, A);
        }
    }

    s.getClass = function (B) {
        var z = f(B, true), C, A;
        if (z) {
            C = B.lastIndexOf("."), A = B.substr(C + 1);
            return z[A];
        } else {
            return z;
        }
    };
    s.getObject = s.getClass;
    s.define = function (C, B, A) {
        if (!b.isString(C)) {
            return null;
        }
        if (b.isFunction(B)) {
            B = B();
        }
        if (!B) {
            B = {};
        }
        q(B, C);
        p.call(B);
        var z = f(B.$fullname);
        t(B, function (E, H) {
            var D = l.call(E, true), G = this, F = 0;
            var I = function (J, L) {
                var K = D[F++];
                if (!K) {
                    if (b.isFunction(A)) {
                        A.call(G, J, L);
                    }
                    z[L.$name] = J;
                    return J;
                }
                if (K.call(this, J, L, I) !== false) {
                    return I.call(this, J, L);
                }
            };
            return I.call(this, this, H);
        });
        return z[B.$name];
    };
    s.create = function (B, A) {
        var z = s.getClass(B), C;
        return new z(A);
    };
    s.Class.regProcessor("extend", function (z, B) {
        var C = B.extend, A;
        if (!C) {
            A = s.Class;
        } else {
            A = s.getClass(C);
        }
        if (!A) {
            throw"Not find class " + C;
        }
        b.extend(z, A);
        n.create(B.$fullname, A.prototype.$fullname);
        b.extendClass(z, A, B);
    });

    function g(B, z, H) {
        var G = z.prototype, E = B.prototype, F, C, A, D;
        for (F in G) {
            if (G.hasOwnProperty(F)) {
                A = E[F], D = G[F];
                if (b.isFunction(D)) {
                    if (H) {
                        D = b.bind(D, H);
                    }
                    if ((F == "init" || F == "destroy") && A) {
                        C = b.intercept(A, D);
                    } else {
                        C = D;
                    }
                    C.$owner = z;
                    C.$name = F;
                    E[F] = C;
                } else {
                    if (F.indexOf("$") == 0) {
                        continue;
                    } else {
                        E[F] = D;
                    }
                }
            }
        }
    }

    b.mixinClass = g;
    s.Class.regProcessor("mixins", function (A, C) {
        var z = C.mixins;
        if (z) {
            var B = b.isArray(z) ? z : [z];
            b.each(B, function (D, E) {
                var G = s.getClass(D);
                g(A, G);
                var F = G.prototype.init;
                if (b.isFunction(F)) {
                    if (C.init) {
                    } else {
                        C.init = F;
                    }
                }
            });
        }
    });
    s.Class.regProcessor("singleton", function (z, B, A) {
        if (B.singleton) {
            var C = new z({});
            C._$self = z;
            A.call(this, C, B);
            return false;
        }
    }, true);
    s.Class.regProcessor("statics", function (z, C) {
        var B = C.statics;
        if (B) {
            for (var A in B) {
                if (B.hasOwnProperty(A)) {
                    z[A] = B[A];
                }
            }
        }
    });
})(fruit, fruit.util);
(function (c, l) {
    var j = "options_", g = {};

    function f(o, m, n) {
        if (!c.isObject(n) || c.isUndef(n.defaultValue)) {
            n = {defaultValue: n, readOnly: false};
        }
        o.set(j + m, n);
    }

    function d(q, m, o, r) {
        if (c.isUndef(o)) {
            return false;
        }
        var p = q.get(j + m);
        if (!p) {
            logger.warn("the option of {0} is not support! ", m);
            return false;
        }
        if (!r && p.readOnly) {
            logger.error("the option {0} is readonly, cannot be set!", m);
            return false;
        }
        var n = p.acceptTypes;
        if (n) {
            n = c.isArray(n) ? n : [n];
            if (c.indexOf(n, c.getType(o)) < 0) {
                logger.warn('option "' + m + '" only accepts value of type [' + n + "]");
                return false;
            }
        }
        if (p.hidden) {
            logger.warn('Cannot access hidden option "' + m + '".');
            return false;
        }
        if (p.defaultValue === o) {
            return false;
        }
        p = c.extend({}, p);
        p.defaultValue = o;
        q.set(j + m, p);
        return true;
    }

    function b(n, m) {
        return n.get(j + m);
    }

    function h() {
    }

    c.extend(h.prototype, {
        init: function (m) {
            if (m && c.isObject(m)) {
                var n = l.get(this);
                c.each(m, function (p, o) {
                    d(n, o, p, true);
                });
            }
        }, getOption: function (m) {
            var n = b(l.get(this), m);
            if (n && !n.hidden) {
                return n.defaultValue;
            }
        }, setOption: function (m, o, n) {
            return d(l.get(this), m, o, n);
        }, getAllOptions: function () {
            var m = {}, o = l.get(this.$fullname).get("_cache_option_keys"), p = l.get(this);
            if (o) {
                o = o.split(",");
            }
            p.filter(function n(r, q) {
                if (q.indexOf(j) == 0) {
                    q = q.replace(j, "");
                    m[q] = r.defaultValue;
                }
            }, o);
            return m;
        }, getOptionEntity: function (m) {
            return b(l.get(this), m);
        }
    });
    fruit.Class.regProcessor("options", function (n, r) {
        var q = r.options, p = r.extend, s = l.get(r), o;
        var m = s.get("_cache_option_keys") || "";
        c.each(q, function (u, t) {
            f(s, t, u);
            o = j + t;
            if (!m.length) {
                m = o;
            } else {
                if (m.indexOf(o) < 0) {
                    m += "," + o;
                }
            }
        });
        s.set("_cache_option_keys", m);
        if (q && !n.prototype.getOption) {
            c.mixinClass(n, h);
        }
    });
})(fruit.util, fruit.manager.MirrorManager);
(function (g, b) {
    var d = {};
    g.defineInterface = function (j, h, l) {
        d[j] = {prop: l, fun: h, cls: {}};
    };

    function f(j, h) {
        var l = d[j];
        if (l.fun) {
            b.each(l.fun, function (m) {
                if (!b.isFunction(h.prototype[m])) {
                    b.logger.error(h.prototype.$fullname + " need method " + m + " for interface " + j);
                }
            });
        }
    }

    function c(j, l) {
        var h = d[l];
        if (h) {
            h.cls[j] = true;
        }
    }

    g.Class.prototype.interfaceOf = function (j) {
        var h = d[j] || {cls: {}};
        return h.cls[this.$fullname];
    };
    g.Class.regProcessor("implement", function (h, l) {
        var j = l.implement;
        if (j) {
            f(j, h);
            c(l.$fullname, j);
            delete l.implement;
        }
    }, true);
})(fruit, fruit.util);
(function (c, b) {
    c.define("fruit.Observable", function () {
        function g(h) {
            if (h) {
                return h.toLowerCase();
            } else {
                return null;
            }
        }

        function d(j, h) {
            h = g(h);
            if (!j._$events) {
                j._$events = {};
            }
            if (!j._$events[h]) {
                j._$events[h] = [];
            }
            return j._$events[h];
        }

        function f(j, h) {
            j._$events[h] = [];
        }

        return {
            option: {listeners: null}, methods: {
                init: function (j) {
                    var h = j && j.listeners;
                    if (h) {
                        this.on(h);
                    }
                }, on: function (h, m, l, p) {
                    if (arguments.length == 1) {
                        var n = this, q = h, l = q.scope || this, o;
                        delete q.scope;
                        b.each(q, function (s, r) {
                            o = l;
                            if (b.isObject(s)) {
                                s.scope && (o = s.scope);
                                p = s.data;
                                s = s.fn;
                            }
                            if (b.isFunction(s)) {
                                n.on(r, s, o, p);
                            }
                        });
                    } else {
                        var j = d(this, h);
                        j.push({scope: l, fn: m, data: p});
                    }
                    return this;
                }, off: function (h, m, l) {
                    var j = d(this, h), n = this;
                    if (!b.isDefine(m)) {
                        f(this, h);
                        return;
                    }
                    b.each(j, function (p, o) {
                        if (p.fn == m && (b.isUndef(l) || (p.scope == l))) {
                            j.splice(o, 1);
                            b.logger.info.call(n, h);
                            return false;
                        }
                    });
                    return this;
                }, trigger: function (l, j, n, p) {
                    var m = d(this, l), o = this, h = true;
                    b.logger.log.call(this, l);
                    b.each(m, function (t, r) {
                        var q = n || t.scope || o, s;
                        if (p) {
                            s = t.fn.apply(q, j);
                        } else {
                            s = t.fn.call(q, o, j);
                        }
                        if (s === false) {
                            h = false;
                        }
                        return h;
                    });
                    return h;
                }
            }
        };
    });
})(fruit, fruit.util);
fruit.defineInterface("fruit.interfaces.IRequest", ["send", "abort", "setRequestHeader", "getResponseHeader", "getAllResponseHeaders"]);
(function (b) {
    b.ns("fruit.io");
    b.util.extend(b.io, {
        SESSION_TIMEOUT: "session_timeout",
        REQUEST_COMPLETE: "request_complete",
        GLOBAL_ERROR: "global_error",
        SESSION_TIMEOUT_CODE: 580,
        GLOBAL_ERROR_CODE: 590
    });
    b.io.ajax = function (f) {
        var j = b.util.extend({}, f), h;
        var g = j.beforeSend, l = j.success, d = j.error, c = j.complete;
        if (!j.method && j.type) {
            j.method = j.type;
            delete j.type;
        }
        if (!j.responseType && j.dataType) {
            j.responseType = j.dataType;
            delete j.dataType;
        }
        j.listeners = {beforeSend: g, success: l, error: d, complete: c};
        delete j.beforeSend;
        delete j.success;
        delete j.error;
        delete j.complete;
        h = new b.io.Request(j).send();
        return h;
    };
})(fruit);
(function (c) {
    var b = {UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4};
    var d = new c.Observable();
    c.define("fruit.io.Request", {
        implement: "fruit.interfaces.IRequest",
        mixins: "fruit.Observable",
        options: {
            url: {defaultValue: "", acceptTypes: ["String"]},
            async: {defaultValue: true, acceptTypes: ["Boolean"]},
            method: {defaultValue: "GET", acceptTypes: ["String", "Null"]},
            responseType: {defaultValue: "", acceptTypes: ["String", "Null"]},
            data: {defaultValue: null, acceptTypes: ["Object", "String", "Null"]},
            headers: {defaultValue: {}, acceptTypes: ["Object", "Null"]},
            timeout: {defaultValue: 60000, acceptTypes: ["Number", "Null"]},
            listeners: {defaultValue: {}, acceptTypes: ["Object", "Null"]},
            cache: {defaultValue: true, acceptTypes: ["Boolean", "Null"]}
        },
        statics: {
            on: function (f, g) {
                d.on(f, g);
            }, off: function (f, g) {
                d.off(f, g);
            }, trigger: function (f, g) {
                d.trigger(f, g, null, true);
            }
        },
        methods: {
            init: function (f) {
                this.__cloneOptions();
                this.readyState = b.UNSENT;
                this.status = 0;
                this.statusText = "";
                this.responseText = "";
                this.responseXML = "";
                this._xhr = null;
            }, __cloneOptions: function () {
                var f = this.getAllOptions();
                this.async = f.async;
                this.url = f.url;
                this.method = f.method;
                this.timeout = f.timeout;
                this.responseType = f.responseType;
                this.headers = f.headers;
                this.responseType = f.responseType;
                this.cache = f.cache;
                this.listeners = {success: f.success, error: f.error, complete: f.complete, beforeSend: f.beforeSend};
            }, setOption: function (f, g) {
                this.superMethod([f, g]);
                this.name = g;
            }, __checkAbort: function () {
            }, send: function () {
                var f = this.getAllOptions();
                var j = c.util.extend({}, f), l;
                var h = this;

                function g(o, n) {
                    function m(q) {
                        h.readyState = q.readyState;
                        h.status = q.status;
                        h.statusText = q.statusText;
                        h.responseXML = q.responseXML;
                        h.responseText = q.responseText;
                        h.setRequestHeader = q.setRequestHeader;
                        h.getAllResponseHeaders = q.getAllResponseHeaders;
                        h.getResponseHeader = q.getResponseHeader;
                        h.abort = q.abort;
                        return h;
                    }

                    function p(q) {
                        if (!l) {
                            l = m(q);
                        }
                        return l;
                    }

                    return function () {
                        var t = Array.prototype.slice.call(arguments, 0);
                        var s = j.listeners;
                        if (s) {
                            switch (o.toUpperCase()) {
                                case"SUCCESS":
                                    if (s.success) {
                                        t[2] = p(t[2]);
                                        s.success.apply(n, t);
                                    }
                                    break;
                                case"ERROR":
                                    if (s.error) {
                                        t[0] = p(t[0]);
                                        var w = t[0];
                                        var u = w.status;
                                        var r = w.getResponseHeader("reason");
                                        if (u == c.io.SESSION_TIMEOUT_CODE) {
                                            c.io.Request.trigger(c.io.SESSION_TIMEOUT, [w, r], null, true);
                                            return;
                                        }
                                        if (u == c.io.GLOBAL_ERROR_CODE) {
                                            c.io.Request.trigger(c.io.GLOBAL_ERROR, [w, r], null, true);
                                            return;
                                        }
                                        if (u == 404) {
                                            c.io.Request.trigger(c.io.GLOBAL_ERROR, [w, r], null, true);
                                            return;
                                        }
                                        var q = s.error.apply(n, t);
                                        if (u == 500 && q !== false) {
                                            c.io.Request.trigger(c.io.GLOBAL_ERROR, [w, r], null, true);
                                        }
                                    }
                                    break;
                                case"COMPLETE":
                                    if (s.complete) {
                                        t[0] = p(t[0]);
                                        s.complete.apply(n, t);
                                        c.io.Request.trigger(c.io.REQUEST_COMPLETE, [h, h.statusText], null, true);
                                    }
                                    break;
                                case"BEFORESEND":
                                    if (s.beforeSend) {
                                        t[0] = p(t[0]);
                                        s.beforeSend.apply(n, t);
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                    };
                }

                c.util.extend(f, {
                    type: f.method,
                    dataType: f.responseType,
                    beforeSend: g("beforeSend", j),
                    success: g("success", j),
                    error: g("error", j),
                    complete: g("complete", j)
                });
                delete f.method;
                delete f.responseType;
                this._xhr = $.ajax(f);
                return this;
            }, abort: function () {
                if (this._xhr) {
                    this._xhr.abort();
                }
            }, setRequestHeader: function (g, f) {
                this._xhr.setRequestHeader(g, f);
                this.headers[g] = f;
            }, getResponseHeader: function (f) {
                return this._xhr.getResponseHeader(f);
            }, getAllResponseHeaders: function () {
                return this._xhr.getAllResponseHeaders();
            }
        }
    });
})(fruit);
(function (B, c) {
    var q = "hashchange", p = "beforerefresh", r = "afterrefresh", u = "lockmsg", t = B.util.bind, f = {}, m = 0, x, s,
        w = "_anchor", g = 0, C = B.dom, j = false, n = function (I) {
            var F = I.length, G = 0, E = "";
            if (F === 0) {
                return;
            }
            (function H() {
                function J() {
                    G++;
                    if (G < F) {
                        H();
                    }
                }

                if (!I[G].inline) {
                    B.io.load.script(I[G].url, J, J);
                } else {
                    E = I[G].url;
                    if (E) {
                        B.io.load.script(E, null, null, true);
                    }
                    J();
                }
            })();
        }, A = function (J) {
            var M = [], K = 0, I = [], H = /<script(.*?)>/ig, L, G, F, E;
            lastEndScriptIndex = -1;
            while (L = H.exec(J)) {
                if (L.index < lastEndScriptIndex) {
                    continue;
                }
                M.push(J.substring(K, L.index));
                K = H.lastIndex;
                G = L[1];
                if (E = /src="(.*?)"/i.exec(G)) {
                    I.push({url: E[1], inline: false});
                    if (G.charAt(G.length - 1) !== "/") {
                        F = z(K, J);
                        K = F[1];
                    }
                } else {
                    F = z(K, J);
                    I.push({url: F[0], inline: true});
                    K = F[1];
                }
            }
            M.push(J.substr(K));
            return {content: M.join(""), scripts: I};
        }, z = function (G, F) {
            var E = F.indexOf("<\/script>", G);
            lastEndScriptIndex = E + "<\/script>".length;
            return [F.substring(G, E), lastEndScriptIndex];
        }, D = function (E) {
            o();
            x.trigger(r);
        }, y = function (E) {
            l();
            if (typeof x.option.ajaxError === "function") {
                x.option.ajaxError(E);
            }
        }, b = function () {
            if (x.trigger(p) === false) {
            }
            l();
        }, l = function () {
            c.each(f, function (F, E) {
                x.off(E, F);
            });
        }, o = function () {
            var G = B.util.getURLParams(), E = G[w];
            if (E) {
                var F = $("a[name=" + E + "]").offset();
                if (F) {
                    window.scrollTo(0, F.top);
                }
            }
        }, d = function (G, F) {
            var E = A(G);
            F = F || x.option.bodyID;
            $(F).empty();
            $(E.content).appendTo(F);
            n(E.scripts);
        }, h = function (F, G) {
            var E;
            if (typeof G === "function") {
                E = function () {
                    G(D);
                };
            } else {
                E = function (H) {
                    d(H);
                    D();
                };
            }
            if (this._isAjaxCall) {
                this._isAjaxCall.abort();
                this._isAjaxCall = false;
            }
            this._isAjaxCall = B.io.ajax({
                url: F,
                cache: false,
                type: x.option.ajaxType || "POST",
                data: x.option.data || "",
                success: E,
                error: y
            });
        };
    B.define("fruit.Frame", {
        mixins: "fruit.Observable",
        singleton: true,
        entity: {
            lockMessage: {},
            lockFn: {},
            option: {mockup: "", bodyID: null, defaultUrl: null, pageFreshFrequency: 20},
            run: function (E) {
                this.option = c.extend(this.option, E);
                x = this;
                this.on(E.listeners);
                this.beforeUrl = B.util.getURL();
                $(window).bind(q, t(this.onHashChange, this));
                $(window).trigger(q);
            },
            onHashChange: function () {
                var F = B.util.getURLHash() || this.option.defaultUrl;
                if (typeof this.option.ajaxUrl === "function") {
                    F = this.option.ajaxUrl();
                } else {
                    F = B.util.baseURL() + F;
                }
                var E = this;
                if (this.trigger(q, [{
                        module: this.module(),
                        feature: this.feature(),
                        params: B.util.getURLParams(),
                        afterUrl: B.util.getURL(),
                        isFeatureChange: (function () {
                            if (E.moduleFeature(E.beforeUrl) === E.moduleFeature()) {
                                return false;
                            } else {
                                return true;
                            }
                        })(),
                        beforeUrl: this.beforeUrl
                    }], null, true) === false) {
                    return false;
                }
                this.refreshBody(F);
            },
            html: d,
            refreshBody: function (E, F) {
                this.beforeUrl = this.afterUrl || this.beforeUrl;
                this.afterUrl = E;
                if (m > 0 && B.util.getURLHash() === s) {
                    return;
                }
                if (m > 0) {
                    this.trigger(u);
                    return;
                }
                if (g >= this.option.pageFreshFrequency) {
                    window.location.reload(true);
                    return;
                }
                b();
                E = x.option.ajaxUrl || E || B.util.baseURL() + B.util.getURLHash();
                h(E, F);
                g++;
            },
            anchor: function (E) {
                if (E) {
                    var G = B.util.getURLParams();
                    G[w] = E;
                    var F = B.util.generateURLString(G);
                    window.location.hash = F;
                    o();
                }
            },
            moduleFeature: function (E) {
                var F = B.util.getURLHash(E) || this.option.defaultUrl;
                if (/\?/.test(F)) {
                    F = F.substr(0, F.indexOf("?"));
                }
                return F;
            },
            module: function (E) {
                var F = this.moduleFeature(E);
                return F.split("/").slice(1, 2).join("");
            },
            feature: function (E) {
                if (this.moduleFeature(E)) {
                    var F = this.moduleFeature(E).split("/");
                    if (F.length > 2) {
                        return F.slice(2, 3)[0];
                    } else {
                        return "";
                    }
                }
            },
            lock: function (G, H, F) {
                if (typeof G === "object") {
                    for (var E in G) {
                        if (typeof G[E] === "object") {
                            if (this.lockMessage[E] === undefined) {
                                m++;
                            }
                            this.lockMessage[E] = G[E];
                        }
                    }
                } else {
                    if (this.lockMessage[G] === undefined) {
                        m++;
                    }
                    this.lockMessage[G] = H;
                }
                if (typeof F === "function") {
                    this.lockFn[G] = F;
                }
                s = B.util.getURLHash();
            },
            unlock: function (E, F) {
                if (!E) {
                    m = 0;
                    this.lockMessage = {};
                    this.lockFn = {};
                }
                if (typeof this.lockMessage[E] != "undefined") {
                    m--;
                    delete this.lockMessage[E];
                    delete this.lockFn[E];
                }
                if (!F) {
                    s = null;
                }
            },
            hold: function () {
                if (s) {
                    window.location.hash = s;
                }
            },
            on: function (E, F, G) {
                if (c.isObject(E)) {
                    return this.superMethod(arguments);
                }
                if (G === true) {
                    f[E] = F;
                }
                this.superMethod([E, F]);
            }
        }
    });
})(fruit, fruit.util);
(function (b) {
    b.ns("fruit.io");
    b.io.ajax = function (f) {
        var j = b.util.extend({}, f), h;
        var g = j.beforeSend, l = j.success, d = j.error, c = j.complete;
        if (!j.method && j.type) {
            j.method = j.type;
            delete j.type;
        }
        if (!j.responseType && j.dataType) {
            j.responseType = j.dataType;
            delete j.dataType;
        }
        j.listeners = {beforeSend: g, success: l, error: d, complete: c};
        delete j.beforeSend;
        delete j.success;
        delete j.error;
        delete j.complete;
        if (b.util.isDefine(j.spi)) {
            if (j.useMerge == undefined) {
                j.useMerge = b.io.SPIRequest.useMergeDefault;
            }
            if (j.useMerge || j.useMerge) {
                h = b.io.MergeSPIRequest.add(j);
            } else {
                h = new b.io.SPIRequest(j);
                h.send();
            }
        } else {
            h = new b.io.Request(j);
            h.send();
        }
        return h;
    };
})(fruit);
(function (c, b) {
    c.define("fruit.io.SPIRequest", {
        extend: "fruit.io.Request",
        statics: {
            SUCCESS: "SUCCESS", FAILURE: "FAILURE", PENDING: "PENDING", defaultUrl: "", getToken: function () {
                return null;
            }, useMergeDefault: true, setDefaultUrl: function (d) {
                this.defaultUrl = d;
            }, getDefaultUrl: function () {
                return this.defaultUrl;
            }, setUseMergeDefault: function (d) {
                this.useMergeDefault = d;
            }
        },
        options: {method: "POST", responseType: "json", spi: "", id: "", useMerge: true, isSecondCall: false},
        methods: {
            init: function (d) {
                this.setOption("url", d.url || c.io.SPIRequest.defaultUrl);
                this.useMerge = (this.getOption("spi") && this.getOption("useMerge")) ? true : false;
                this.id = Math.uuid();
                this.aborted = false;
            }, send: function () {
                var d = this.updateOptions();
                return this.superMethod([d]);
            }, abort: function () {
                if (this.useMerge) {
                    this.aborted = true;
                } else {
                    this.superMethod();
                }
            }, onSuccess: function (g, d, j) {
                var f = this;
                if (b.isArray(g)) {
                    g = g[0];
                }
                switch (g.status) {
                    case c.io.SPIRequest.SUCCESS:
                        this.trigger("success", [g, g.status, f], null, true);
                        break;
                    case c.io.SPIRequest.FAILURE:
                        if (g.exceptionID == 1155 || g.exceptionID == 102) {
                            var h = g.reason.split("|");
                            if (h.length > 1) {
                                g.reason = h[0];
                            }
                            c.io.Request.trigger(c.io.SESSION_TIMEOUT, [f, g.reason], null, true);
                        } else {
                            this.trigger("error", [g, "failure"], null, true);
                        }
                        break;
                    case c.io.SPIRequest.PENDING:
                        c.io.MergeSPIRequest.add(this, true);
                        break;
                    default:
                        b.logger.warn("unknow result status [" + g.status + "]!");
                        break;
                }
            }, __error: function (g, f) {
                this.statusText = "error";
                this.__checkAbort();
                var d;
                if (f == "timeout" || (g && g.status == 0)) {
                    d = {status: "FAILURE", reason: this.statusText, xhr: this};
                } else {
                    d = {status: "FAILURE", reason: this.statusText, xhr: this};
                }
                this.trigger("error", [d, this.statusText], null, true);
            }, onError: function (f, d) {
                this.__error(f, d);
            }, onComplete: function (f, d) {
                this.trigger("complete", arguments, this, true);
            }, updateOptions: function () {
                var g = this, h = b.bind, f = g.listeners;
                var d = g.getOption("listeners").beforeSend;
                g.setOption("data", g.getData());
                g.setOption("listeners", {
                    success: g.onSuccess ? h(g.onSuccess, g) : null,
                    error: g.onError ? h(g.onError, g) : null,
                    complete: g.onComplete ? h(g.onComplete, g) : null,
                    beforeSend: d ? h(d, g) : null
                });
                return this.getAllOptions();
            }, getData: function () {
                var f = this.getDataObject();
                if (!b.isArray(f)) {
                    f = [f];
                }
                var d = c.io.SPIRequest.getWbxcid();
                if (d) {
                    return {__spiCall__: JSON.stringify(f), wbxcid: d};
                } else {
                    return {__spiCall__: JSON.stringify(f)};
                }
            }, getDataObject: function () {
                var g = this.getOption("spi").split(".");
                var f = this.getOption("isSecondCall") ? "" : g[0];
                var d = this.getOption("data");
                if (d) {
                    return {id: this.id, service: f, spi: g[1], parameters: d};
                } else {
                    return {id: this.id, service: f, spi: g[1]};
                }
            }
        }
    });
})(fruit, fruit.util);
(function (b) {
    var c = b.util.bind;
    b.define("fruit.io.MergeSPIRequest", {
        extend: "fruit.io.SPIRequest",
        statics: {
            waitTime: 100, maxRequest: 20, checkWaitTime: 20, count: 0, add: function (g, d) {
                if (!this.instance) {
                    this.instance = new b.io.MergeSPIRequest({url: b.io.SPIRequest.getDefaultUrl()});
                }
                var f;
                if (g.$name) {
                    f = g;
                } else {
                    f = new b.io.SPIRequest(g);
                }
                if (d) {
                    f.setOption("isSecondCall", true);
                }
                this.instance.push(f);
                this.count++;
                return f;
            }
        },
        methods: {
            init: function (d) {
                this.list = {};
                var f = this.getStatics();
                this.timeid = setTimeout(c(this.send, this), f.waitTime);
            }, send: function () {
                var d = this.getStatics();
                d.instance = null;
                d.count = 0;
                this.timeid = 0;
                this.superMethod();
            }, push: function (d) {
                var f = this.getStatics();
                this.list[d.id] = d;
                if (f.maxRequest < f.count) {
                    this.timeid && clearTimeout(this.timeid);
                    this.send();
                }
            }, onSuccess: function (f, d, g) {
                this.distribute(arguments, f);
            }, onError: function (f, d) {
                this.distribute(arguments);
            }, onComplete: function () {
                this.distribute(arguments);
            }, getDataObject: function () {
                var d = [];
                b.util.each(this.list, function (g, f) {
                    d.push(g.getDataObject());
                });
                return d;
            }, distribute: function (f, l) {
                var h = this, g, j = this.list, m = this.distribute.caller.$name;
                var d = {};
                if (l) {
                    b.util.each(l, function (n) {
                        d[n.id] = n;
                    });
                }
                b.util.each(j, function (p) {
                    if (!p.aborted) {
                        var n = [];
                        if (l && p.id && d[p.id]) {
                            var o = p.id;
                            g = h.list[o];
                            n[0] = d[o];
                        } else {
                            g = p;
                            n = f;
                        }
                        g[m].apply(g, n);
                    } else {
                        if (m == "onComplete") {
                            h.trigger("complete", [h, "abort"], h, true);
                        } else {
                            h.trigger("error", [h, "abort"], h, true);
                        }
                    }
                });
            }
        }
    });
})(fruit);
(function (d) {
    var b = function (n, m, j, l, o) {
        var g = o || document.getElementsByTagName("head")[0], h, f = false;
        o = o || document;
        h = o.createElement("script");
        h.language = "javascript";
        h.charset = "UTF-8";
        h.type = "text/javascript";
        h.onload = h.onreadystatechange = function () {
            if (!f && (!h.readyState || "loaded" === h.readyState || "complete" === h.readyState)) {
                f = true;
                m && m();
                h.onload = h.onreadystatechange = null;
                h.parentNode.removeChild(h);
                h = null;
                return;
            }
        };
        h.onerror = function () {
            if (!f) {
                f = true;
                j && j();
            }
        };
        if (l) {
            h.text = n;
        } else {
            h.src = n;
        }
        g.appendChild(h);
        if (!f && l) {
            f = true;
            m && m();
        }
        g = null;
    }, c = function (m, h, f, o) {
        o = o || document;
        if (f) {
            var g = styleCache[o];
            if (!g) {
                g = styleCache[o] = o.createElement("style");
                g.setAttribute("type", "text/css");
                document.getElementsByTagName("head")[0].appendChild(g);
            }
            g.styleSheet && (g.styleSheet.cssText += m) || g.appendChild(o.createTextNode(m));
        } else {
            var l = document.createElement("link");
            l.charset = "UTF-8";
            l.rel = "stylesheet";
            l.type = "text/css";
            l.href = m;
            o.getElementsByTagName("head")[0].appendChild(l);
            var j = o.styleSheets, n = function () {
                for (var p = 0; p < j.length; p++) {
                    if (l === (j[p].ownerNode || j[p].owningElement)) {
                        return h();
                    }
                }
                setTimeout(arguments.callee, 5);
            };
        }
        if (h) {
            h();
        }
    };
    d.ns("fruit.io.load").extend({script: b, style: c});
})(fruit);
(function () {
    var b = function (d) {
        var f = d.toLowerCase();
        WWF.ns("$.wwf." + f);
        $.wwf[f].create = function (g) {
            var h = new WWF[d](g);
            h.view.data(f, h);
            return h.view;
        };
        $.fn[f] = function (j) {
            var h = arguments, g = function (m, l) {
                var n = $(this).data(f);
                if (j && n && WWF.isString(j)) {
                    if ($.isFunction(n[j])) {
                        return n[j].apply(n, Array.prototype.slice.call(h, 1));
                    } else {
                        return n[j];
                    }
                } else {
                    if (!n) {
                        if (WWF.isObject(j) || !j) {
                            j = j || {};
                            j.element = this;
                            var o = new WWF[d](j);
                            $(this).data(f, o);
                            if (f == "menu") {
                                return o.view;
                            }
                            return $(this);
                        } else {
                            WWF.logger.warn(WWF.utils.format("Method [{0}] does not exist on jQuery.wwf.{1}", j, d));
                        }
                    } else {
                        return n;
                    }
                }
            };
            if (this.length == 1) {
                return g.call(this, 0, this);
            } else {
                return $.each(this, g);
            }
        };
    };
    WWF.ns("$.wwf.monitor");
    $.wwf.monitor.create = function (d) {
        return new WWF.Monitor(d);
    };
    b("Dialog");
    b("Menu");
    b("GroupMenu");
    b("Button");
    b("InputButton");
    b("Editor");
    b("Autocomplete");
    b("Autocomplete2");
    b("Combox");
    b("Notification");
    b("Tree");
    b("InputBox");
    b("Checkbox");
    b("Radiobox");
    $.wwf.alert = function (g, h) {
        var d = Array.prototype.slice.call(arguments, 0);
        var f = WWF.Alert.apply(this, d);
        return f.view;
    };
    $.wwf.confirm = function (j, g, f) {
        var d = Array.prototype.slice.call(arguments, 0);
        var h = WWF.Confirm.apply(this, d);
        return h.view;
    };
    $.wwf.notify = function (d) {
        WWF.Notification.notify(d);
    };
    $.wwf.treeCombox = {};
    $.wwf.treeCombox.create = function (f) {
        var d = $.wwf.tree.create({
            service: f.service,
            renderTo: (f.selectorConfig ? f.selectorConfig.renderTo : null),
            scrollHeight: 200,
            uniqueField: f.uniqueField,
            serviceParams: f.serviceParams,
            keyNav: true,
            focusItem: false,
            root: f.root,
            autoShow: false,
            appendCls: "wwf-shadow wwf-out",
            prepareAllData: f.prepareAllData || function (g) {
                return g;
            },
            prepareData: f.prepareData || function (h) {
                var g = $.extend({}, h);
                g.label = g[f.labelField];
                g.isOpen = false;
                if (g.isFolder == "0") {
                    g.isFolder = false;
                }
                return g;
            }
        });
        delete f.service;
        delete f.serviceParams;
        delete f.selectorConfig;
        delete f.keyNav;
        delete f.root;
        delete f.appendCls;
        f.selector = d;
        f.uneditable = true;
        return new WWF.Combox(f);
    };
    $.fn.getWWFInstance = function () {
        return $(this).data("WWFInstance");
    };
    $.fn.regWWFInstance = function (d) {
        $(this).data("WWFInstance", d);
    };
    var c = {meeting: "wbx.meeting", file: "wbx.fileupload"};
    WWF.ns("WWF.module.meeting");
    WWF.ns("WWF.module.scheduler");
    WWF.module.meeting.checkMeetingService = function () {
        var f = c.meeting + ".min_" + WWF.CONFIG.lang + ".js", d = [].slice.call(arguments, 0), g = this;
        if (!g._called) {
            g._called = [d];
        } else {
            g._called.push(d);
        }
        if (!WWF.module.meeting.__load) {
            WWF.loadScript(WWF.path + "/" + f, function () {
                $.each(g._called, function (h, j) {
                    WWF.module.meeting.checkMeetingService.apply(window, j);
                });
            });
            WWF.module.meeting.__load = true;
        }
    };
    WWF.module.scheduler.instantMeeting = function () {
        var f = c.meeting + ".min_" + WWF.CONFIG.lang + ".js", d = [].slice.call(arguments, 0);
        if (!WWF.module.meeting.__load) {
            WWF.loadScript(WWF.path + "/" + f, function () {
                WWF.module.scheduler.instantMeeting.apply(window, d);
            });
            WWF.module.meeting.__load = true;
        }
    };
    WBX.component.FileUploader = function () {
        var f = c.file + ".min_" + WWF.CONFIG.lang + ".js", d = [].slice.call(arguments, 0), g = this;
        if (!g.__load) {
            g._filecalled = [];
            WWF.loadScript(WWF.path + "/" + f, function () {
                g.api = new WBX.component.FileUploader(d[0], d[1]);
                for (name in g.api) {
                    if ($.isFunction(g.api[name])) {
                        g[name] = $.proxy(g.api[name], g.api);
                    }
                }
                $.each(g._filecalled, function (h, j) {
                    g.api[j.name].apply(g.api, j.args);
                });
                g.__loaded = true;
            });
            g.__load = true;
        }
    };
    WBX.component.FileUploader.destroy = function () {
    };
    $.each(["data"], function (f, d) {
        WBX.component.FileUploader.prototype[d] = function () {
            var g = [].slice.call(arguments, 0);
            if (this.__loaded) {
                this.api[d].apply(this.api, g);
            } else {
                this._filecalled.push({name: d, args: g});
            }
        };
    });
})();
(function () {
    var b = [], c = new Date();
    WWF.frame = WWF.frame || {};
    WWF.frame = {
        EVENT_HASH_CHANGE: "hashchange",
        EVENT_BEFORE_REFRESH_BODY: "beforerefresh",
        EVENT_AFTER_REFRESH_BODY: "afterrefresh",
        EVENT_CLEAR_LOCK: "lockmsg",
        EVENT_UNLOCK: "unlock",
        init: function (f) {
            fruit.io.Request.on(fruit.io.GLOBAL_ERROR, function (q, p) {
                if (fruit.Frame.afterUrl.indexOf("common/pageNotFound") > 0) {
                    var n = WWF.frame.getHtmlError(q.responseText, "BODY");
                    fruit.Frame.html(n);
                    return;
                } else {
                    if (q.status === 404) {
                        var o = fruit.util.baseURL() + "/common/pageNotFound";
                        fruit.Frame.refreshBody(o);
                        return;
                    }
                }
                if (fruit.Frame.afterUrl.indexOf("common/globalError") > 0) {
                    var n = WWF.frame.getHtmlError(q.responseText, "BODY");
                    fruit.Frame.html(n);
                } else {
                    var o = fruit.util.baseURL() + "/common/globalError";
                    fruit.Frame.refreshBody(o);
                }
            });
            if (WWF.CONFIG.isProduct) {
                if (WWF.CONFIG.autoCorrectDomain && WWF.SESSION && WWF.SESSION.commonSession && WWF.SESSION.commonSession.siteUrl) {
                    var l = WWF.SESSION.commonSession.siteUrl, d = window.location.hostname, j = window.location.href;
                    if (l !== d) {
                        $.cookie("wbxSessionID", null, {path: WWF.CONFIG.frameworkURL});
                        window.location.href = j.replace(d, l);
                        fruit.Frame.lock("checkLoginSiteUrl");
                    }
                }
            }
            var g = determine_timezone();
            if (typeof(g.timezone) != "undefined") {
                var h = g.timezone.olson_tz;
                $.cookie("clientJodaID", h, {path: WWF.CONFIG.contextPath, secure: WWF.CONFIG.secureCookie});
            }
            WWF.request.bind(WWF.request.events.SESSION_TIMEOUT, function () {
                WWF.CONFIG.isLoggedIn = false;
            });
            var m = fruit.Frame;
            f = $.extend({
                mockup: false,
                bodyID: "#pageBody",
                headID: "#header",
                defaultUrl: "/home",
                ajaxType: (WWF.CONFIG.enforcePOST) ? "POST" : "GET",
                pageFreshFrequency: 20,
                listeners: {
                    hashchange: function (o) {
                        var q = $("#header"), n = o.module, p = q.find("a[module=" + n + "]");
                        if (!p.hasClass("cur")) {
                            q.find("a.cur").removeClass("cur");
                            p.addClass("cur");
                        }
                    }, beforerefresh: function () {
                        if (fruit.Frame.moduleFeature() === "/files/publicShareView" || fruit.Frame.moduleFeature() === "/meetings/detail") {
                            this.option.data = fruit.util.getURLParams();
                            this.option.ajaxUrl = this.afterUrl.split("?")[0] + "?rnd=" + Math.random();
                        } else {
                            this.option.data = null;
                            this.option.ajaxUrl = null;
                        }
                    }
                }
            }, f);
            m.run(f);
            m.on(WWF.frame.EVENT_BEFORE_REFRESH_BODY, function () {
                WWF.frame.pageCacheContainerNode().empty();
            });
            m.on(WWF.frame.EVENT_AFTER_REFRESH_BODY, function () {
                var q = WWF.frame.getPageTitle();
                if (q) {
                    document.title = q;
                }
                var p = WWF.frame.getMetaDataInSubPage();
                if (p) {
                    var o = document.getElementsByTagName("head")[0];
                    var n = document.createElement("meta");
                    n.setAttribute("description", "description");
                    n.setAttribute("content", p);
                    o.appendChild(n);
                }
            });
            m.on("lockmsg", function (p, t) {
                var s = [], o = [], n, r;
                if ($.isEmptyObject(this.lockMessage) && $.isEmptyObject(this.lockFn)) {
                    return false;
                }
                for (n in this.lockMessage) {
                    s.push(this.lockMessage[n]);
                }
                if (!s.join("")) {
                    if (typeof this.lockFn[n] === "function") {
                        this.lockFn[n]();
                    }
                    return false;
                }
                if (s.length > 1) {
                    r = ["<p>", '如果在保存更改前离开，将发生以下情况：', '</p><ul class="wwf-lists wwf-lists-bullets"><li>'].join("");
                    if (typeof s[0] === "object") {
                        var q = [];
                        $.each(s, function (u) {
                            q.push(s[u][1]);
                        });
                        r += q.join("</li><li>");
                    } else {
                        r += s.join("</li><li>");
                    }
                    r += "</li></ul>";
                } else {
                    if (typeof s[0] === "object") {
                        r = ["<p>", s[0][0], "</p>"].join("");
                    } else {
                        r = ["<p>", '如果在保存更改前离开，将发生以下情况：', "</p>"].join("");
                        r = r + '<ul class="wwf-lists wwf-lists-bullets"><li>' + s.join("") + "</li></ul>";
                    }
                }
                r = ['<div class="wwf-info info32 wwf-dialog-spacing">', '<i class="wwf-ic32 wwf-ic-info">&nbsp;</i>', r, "<p>", '要离开该页并放弃所做的更改吗？', "</p>", "</div>"].join("");
                WWF.Confirm(r, function () {
                    window.onbeforeunload = null;
                    if (typeof t === "function") {
                        WWF.frame.trigger(WWF.frame.EVENT_UNLOCK);
                        t.call(this, true);
                    } else {
                        WWF.frame.recoverRefreshBody();
                    }
                }, function () {
                    m.hold();
                    if (typeof t === "function") {
                        t.call(this, false);
                    }
                    return true;
                }, {text: '离开该页'}, {text: '留在该页', focused: true}, '未保存的更改');
            });
        },
        checkLeave: function (d) {
            if (!fruit.Frame.trigger("lockmsg", d)) {
                WWF.frame.trigger(WWF.frame.EVENT_UNLOCK);
                d();
            }
        },
        getHtmlError: function (h, f) {
            var g = ["<!--PAGE_IDENTITY:" + f + "_START-->", "<!--PAGE_IDENTITY:" + f + "_END-->"];
            var j = h.indexOf(g[0]) + g[0].length, d = h.indexOf(g[1]) - j;
            if (j > 0 && d > 0) {
                return h.substr(j, d);
            }
            return false;
        },
        html: function (f, d) {
            fruit.Frame.html(f, d);
        },
        bind: function (d, h, f) {
            d = d.split(" ");
            for (var g = 0; g < d.length; g++) {
                fruit.Frame.on(d[g], h, !f);
            }
        },
        anchor: function (d) {
            fruit.Frame.anchor(d);
        },
        isLowTouchUser: function () {
            return false;
        },
        parameters: function (f, d) {
            if (f === undefined) {
                return fruit.util.getURLParams();
            } else {
                window.location.hash = "#" + $.param.querystring(this.getUrl(), f, d);
            }
        },
        getUrl: function () {
            return fruit.util.getURLHash();
        },
        module: function (d) {
            if (d) {
                window.location.hash = "#/" + fruit.Frame.module();
            } else {
                return fruit.Frame.module();
            }
        },
        trigger: function (d) {
            fruit.Frame.trigger(d);
        },
        feature: function (d) {
            if (d) {
                window.location.hash = "#/" + fruit.Frame.module() + "/" + d;
            } else {
                return fruit.Frame.feature();
            }
        },
        refreshBody: function (d) {
            fruit.Frame.unlock();
            fruit.Frame.refreshBody(d);
        },
        backupRefreshBody: function (d) {
            fruit.Frame.lock("holdPersionUrl", null, d);
        },
        hash: function (d) {
            if (d) {
                window.location.hash = d;
            } else {
                return fruit.util.getURLHash();
            }
        },
        getIdentity: function () {
            return $("#__identity").val().toLowerCase();
        },
        getMetaDataInSubPage: function () {
            var d = $("#__metadata").val();
            if (!d) {
                return false;
            }
            return d;
        },
        getPageTitle: function () {
            var h = $("#__title").val();
            if (!h) {
                return false;
            }
            var f = $("#__title").attr("branding") || "true";
            var g = WWF.CONFIG.productName || "Cisco WebEx Meetings";
            var j = WWF.CONFIG.orgName;
            var l = [];
            l.push(h);
            if (g) {
                l.push(g);
            }
            if (j && f === "true") {
                l.push(j);
            }
            var d = WWF.CONFIG.appVersion;
            if (d) {
                if ($.cookie("PreviewVersion")) {
                    l.push("(Current App Version is " + $.cookie("PreviewVersion") + ")");
                } else {
                    l.push("(Current App Version is " + d + ")");
                }
            }
            return l.join(" - ");
        },
        recoverRefreshBody: function () {
            fruit.Frame.unlock();
            fruit.Frame.onHashChange();
        },
        bindHashChange: function (f, d) {
            WWF.frame.bind(WWF.frame.EVENT_HASH_CHANGE, f, d);
        },
        triggerHashChange: function () {
            fruit.Frame.trigger(WWF.frame.EVENT_HASH_CHANGE, [{
                module: fruit.Frame.module(),
                feature: fruit.Frame.feature(),
                afterUrl: fruit.util.getURL(),
                beforeUrl: fruit.Frame.beforeUrl
            }], null, true);
        },
        saveLogs: function (d) {
            if (!WWF.CONFIG.isLoggedIn || b.length > 10 || (new Date() - c) > 10 * 60 * 1000 || d) {
                if (b.length > 0) {
                    WWF.request.call("logging.saveLog", {loggingEntries: b}, function (f) {
                    });
                    b = [];
                    c = new Date();
                }
            }
        },
        addTrackLog: function (f, d) {
            if (f) {
                b.push({trackid: f, timestamp: WWF.utils.serverTime().getTime(), clientid: $.cookie("clientid")});
                WWF.frame.saveLogs(d);
            }
        },
        addLog: function (d) {
            b.push({
                objectid: d,
                timestamp: WWF.utils.serverTime().getTime(),
                url: window.location.href,
                clientid: $.cookie("clientid")
            });
            WWF.frame.saveLogs();
        },
        saveLog: function (d) {
            WWF.frame.addLog(d);
            WWF.frame.saveLogs(true);
        },
        pageCacheContainerNode: function () {
            var d = $("#pagecachecontainer");
            if (!d.length) {
                if ($("#header").length) {
                    d = $('<div id="pagecachecontainer"><!-- --></div>').insertBefore("#header");
                } else {
                    d = $('<div id="pagecachecontainer"><!-- --></div>').prependTo("body");
                }
            }
            return d;
        },
        pageCacheNode: function () {
            var d = WWF.frame.pageCacheContainerNode(), f = $("#pagecache");
            if (!f.length) {
                f = $('<div id="pagecache"><!-- --></div>').appendTo(d);
                f.css({"z-index": 8000, margin: "0 auto", width: "960", height: 0, position: "relative"});
            }
            return f;
        },
        isPageBodyEmpty: function () {
            return !$("#pageBody").children().length;
        },
        popupSessionTimeout: function () {
            WWF.request.trigger(WWF.request.events.SESSION_TIMEOUT, [{timeoutType: "SESSION_TIMEOUT"}]);
        },
        checkLoginSiteUrl: function () {
            var g = $.cookie("loginsiteurl"), d = window.location.hostname, f = window.location.href;
            if (g && g !== d) {
                window.location.href = f.replace(d, g);
                return true;
            }
            return false;
        },
        lock: function (d, g, f) {
            fruit.Frame.lock(d, g, f);
        },
        unlock: function (d) {
            fruit.Frame.unlock(d);
        }
    };
})();
WWF.lang = WWF.lang || {};
WWF.lang = fruit.util.i18n;
(function () {
    var f, d = {}, g = false, c = {};
    var b = fruit.util;
    f = WWF.request = function (h) {
        var m = h.id || Math.uuid(), j = h.beforeSend;
        b.extend(h, {
            beforeSend: function (o) {
                o.setRequestHeader("trackID", m);
                o.setRequestHeader("UserSetting", JSON.stringify(WWF.session.getUserSettings()));
                if (b.isFunction(j)) {
                    var n = Array.prototype.slice.call(arguments, 0);
                    j.apply(this, n);
                }
            }
        });
        var l = fruit.io.ajax.apply(this, arguments);
        c[m] = l;
        return l;
    };
    WWF.request.call = function (m, o, j, n, l) {
        var h = WWF.request.getService(m, o);
        if (h) {
            if (h.data.parameters) {
                o = b.extend({}, o, h.data.parameters);
            }
            if (h.data.spi) {
                m = h.data.service + "." + h.data.spi;
            }
            return WWF.request({spi: m, data: o, success: j, error: n, complete: l});
        }
    };
    fruit.io.sendAjax = function (l, j) {
        if (j.length > 1) {
            if (b.isFunction(j[1])) {
                j[4] = j[3];
                j[3] = j[2];
                j[2] = j[1];
            }
            if (!b.isFunction(j[3])) {
                j[4] = j[3];
                j[3] = null;
            }
            j = {url: j[0], data: j[1], success: j[2], error: j[3], dataType: j[4] || "html"};
        } else {
            j = j[0];
        }
        var h = b.extend({dataType: "html", type: l}, j);
        return WWF.request(h);
    };
    WWF.request.get = function () {
        var h = Array.prototype.slice.call(arguments, 0);
        return fruit.io.sendAjax("GET", h);
    };
    WWF.request.post = function () {
        var h = Array.prototype.slice.call(arguments, 0);
        return fruit.io.sendAjax("POST", h);
    };
    WWF.request.abort = function (j) {
        if (WWF.isString(j) && c[j]) {
            var h = c[j];
            delete c[j];
            if (h.xhr && h.xhr.abort) {
                h.xhr.abort();
            }
        }
        if (j.abort) {
            j.abort();
        }
    };
    WWF.request.bind = fruit.io.Request.on;
    WWF.request.unbind = fruit.io.Request.off;
    WWF.request.trigger = fruit.io.Request.trigger;
    fruit.io.SPIRequest.setDefaultUrl(((WWF.CONFIG && WWF.CONFIG.contextPath) ? WWF.CONFIG.contextPath : "") + "/JSONRPCHandler.do");
    fruit.io.Request.on(fruit.io.REQUEST_COMPLETE, function (l, h) {
        var j;
        if (j = l.getResponseHeader("UserSetting")) {
            WWF.session.updateUserSetting(JSON.parse(j));
        }
    });
    WWF.request.SUCCESS = "SUCCESS";
    WWF.request.FAILURE = "FAILURE";
    WWF.request.PENDING = "PENDING";
    WWF.request.COMPLETE = "COMPLETE";
    WWF.request.events = {
        failure: "error",
        success: "success",
        complete: "complete",
        SESSION_TIMEOUT: "session_timeout"
    };
    WWF.request.status = {
        UNKNOW_ERROR: "unknow_error",
        GLOBAL_ERROR: "global_error",
        SESSION_TIMEOUT: "session_timeout"
    }, WWF.request.ABORT = "abort", WWF.request.useMerge = true, WWF.request.path = WWF.path + "/data/", fruit.io.SPIRequest.getWbxsid = function () {
        return WWF.session.wbxsid();
    }, fruit.io.SPIRequest.getToken = function () {
        return WWF.session.ticket();
    }, fruit.io.SPIRequest.getWbxcid = function () {
        return WWF.session.wbxcid();
    };
    WWF.request.startService = function () {
        g = false;
    }, WWF.request.stopService = function () {
        g = true;
        var h = fruit.io.MergeSPIRequest.list;
        b.each(function (l, j) {
            if (l && l.abort) {
                l.abort();
            }
        });
    };
    WWF.request.setService = function (l, j) {
        var h = d[l];
        if (h) {
            b.extend(h, j);
        } else {
            d[l] = j;
        }
    };
    WWF.request.getService = function (l, q, u) {
        if (!f.isDefine(l)) {
            return null;
        }
        var w = l.split("."), n = w[0], h = w[1];
        var x = d[n][h];
        var m = Math.uuid(), o = b.extend({}, x.params, q);
        if (x.service) {
            var p = x.service.split("."), t = p[0], r = p[1], j;
            q = "";
            j = x.url || d[n].url || d.url;
            if (f.useMerge) {
                q = {service: t, spi: r, parameters: o, id: m};
            } else {
                q = {__spiCall__: JSON.stringify([{service: t, spi: r, parameters: o, id: m}])};
            }
            return {url: j, type: "POST", id: m, dataType: x.dataType || "json", data: q};
        } else {
            return {url: x.url || d[n].url || d.url, type: "POST", dataType: x.dataType || "json", data: o};
        }
    };
    WWF.request.isDefine = function (j) {
        var h = j.split("."), l = h[0], m = h[1];
        if (!d[l]) {
            return false;
        }
        if (!d[l][m]) {
            return false;
        }
        return true;
    }, WWF.request.setServiceURL = function (h) {
        fruit.io.SPIRequest.prototype.setOption("url", h);
    };
})();
WWF.utils = WWF.utils || {};
WWF.utils.getURLParam = function (c, b) {
    return fruit.util.getURLParam(c, b);
};
WWF.utils.setURLParam = function (c, f, b) {
    var d = {};
    d[c] = f;
    return fruit.util.generateURLString(d, b);
};
jMarker.res("controls.ftl", function (__d, __macro) {
    var __o = [];
    __d = __d || {};
    with (__d) {
        __o.push(" ");

        function autocomplete(__d_autocomplete, __nested) {
            var __o = [];
            __d_autocomplete = __d_autocomplete || {};
            with (__d_autocomplete) {
                __o.push(' <div class="wwf-autocomplete" id="');
                __o.push(id);
                __o.push('" name="');
                __o.push(name);
                __o.push('"> <input type="text" class="wwf-autocomplete-input" /> </div> ');
            }
            return __o.join("");
        }

        __o.push(" ");

        function getClassName(highlight) {
            __o.push(" ");
            if (highlight == true) {
                __o.push(" ");
                return "green";
                __o.push(" ");
            } else {
                __o.push(" ");
                return "gray";
                __o.push(" ");
            }
            __o.push(" ");
        }

        __o.push(" ");

        function getDisable(disabled) {
            __o.push(" ");
            if (disabled == true) {
                __o.push(" ");
                return "disabled";
                __o.push(" ");
            } else {
                __o.push(" ");
                return "";
                __o.push(" ");
            }
            __o.push(" ");
        }

        __o.push(" ");

        function button(__d_button, __nested) {
            var __o = [];
            __d_button = __d_button || {};
            if (!jMarker.exists(__d_button.icon)) {
                __d_button.icon = "";
            }
            if (!jMarker.exists(__d_button.size)) {
                __d_button.size = "normal";
            }
            if (!jMarker.exists(__d_button.highlight)) {
                __d_button.highlight = false;
            }
            if (!jMarker.exists(__d_button.split)) {
                __d_button.split = false;
            }
            if (!jMarker.exists(__d_button.disable)) {
                __d_button.disable = false;
            }
            with (__d_button) {
                __o.push(' <a href="javascript:;" class="wwf-btn ');
                __o.push(getClassName(highlight));
                __o.push(" ");
                __o.push(size);
                __o.push(" ");
                __o.push(getDisable(disable));
                __o.push(" ");
                if (icon != "") {
                    __o.push("wwf-btn-icon");
                }
                __o.push(" ");
                if (split == true) {
                    __o.push("split");
                }
                __o.push('" ');
                __o.push(getDisable(disable));
                __o.push(" ");
                if (getDisable(disable) == "disabled") {
                    __o.push(" tabindex=-1 ");
                }
                __o.push('id="');
                __o.push(id);
                __o.push('"  title="');
                __o.push(tooltip);
                __o.push('"><span> ');
                if (icon != "") {
                    __o.push(' <i class="wwf-ic16 ');
                    __o.push(icon);
                    __o.push('"></i> ');
                }
                __o.push(" ");
                __o.push(text);
                __o.push("</span><em></em></a> ");
            }
            return __o.join("");
        }

        __o.push("  ");

        function getClassName(highlight) {
            __o.push(" ");
            if (highlight == true) {
                __o.push(" ");
                return "green";
                __o.push(" ");
            } else {
                __o.push(" ");
                return "gray";
                __o.push(" ");
            }
            __o.push(" ");
        }

        __o.push(" ");

        function getDisable(disabled) {
            __o.push(" ");
            if (disabled == true) {
                __o.push(" ");
                return "disabled";
                __o.push(" ");
            } else {
                __o.push(" ");
                return "";
                __o.push(" ");
            }
            __o.push(" ");
        }

        __o.push(" ");

        function inputbutton(__d_inputbutton, __nested) {
            var __o = [];
            __d_inputbutton = __d_inputbutton || {};
            if (!jMarker.exists(__d_inputbutton.size)) {
                __d_inputbutton.size = "normal";
            }
            if (!jMarker.exists(__d_inputbutton.type)) {
                __d_inputbutton.type = "submit";
            }
            if (!jMarker.exists(__d_inputbutton.highlight)) {
                __d_inputbutton.highlight = false;
            }
            if (!jMarker.exists(__d_inputbutton.disable)) {
                __d_inputbutton.disable = false;
            }
            with (__d_inputbutton) {
                __o.push(' <input type="');
                __o.push(type);
                __o.push('"  class="wwf-btn ');
                __o.push(getClassName(highlight));
                __o.push(" _fix ");
                __o.push(size);
                __o.push(" _fix ");
                __o.push(getDisable(disable));
                __o.push(' " id="');
                __o.push(id);
                __o.push('"  title="');
                __o.push(tooltip);
                __o.push('" value="');
                __o.push(text);
                __o.push('"> ');
            }
            return __o.join("");
        }

        __o.push(" ");

        function dialog(__d_dialog, __nested) {
            var __o = [];
            __d_dialog = __d_dialog || {};
            with (__d_dialog) {
                __o.push(' <div class="wwf-dialog wwf-dialog-wrap ');
                __o.push(skin);
                __o.push('" > <table><tbody><tr> <td class="wwf-border wwf-left-top"></td> <td class="wwf-border wwf-top"></td> <td class="wwf-border wwf-right-top"></td> </tr><tr> <td class="wwf-border wwf-left"></td> <td class="wwf-center"> <table class="wwf-content-table"><tbody> <tr><td class="wwf-td-title" colspan="2"> <div class="wwf-title-wrap"> <div class="wwf-title wwf-ellipsis" id="');
                __o.push(id);
                __o.push('_title" >');
                __o.push(title);
                __o.push('</div> <a href="javascript:;" title="');
                __o.push('关闭');
                __o.push('" class="wwf-close" onclick="return false;">');
                __o.push('关闭');
                __o.push('</a></div> </td></tr><tr> <td  class="wwf-td-content" ><div class="wwf-content-wrap" tabindex="-1"><div class="wwf-content" >&nbsp;</div> <div class="wwf-content-mask"></div><div class="wwf-loading-tip">Loading..</div></div></td></tr><tr> <td class="wwf-td-buttons" colspan="2"><div class="wwf-buttons-wrap"></div></td></tr></tbody></table> </td><td class="wwf-border wwf-right"></td></tr><tr><td class="wwf-border wwf-left-bottom"></td> <td class="wwf-border wwf-bottom"></td><td class="wwf-border wwf-right-bottom"></td></tr></tbody> </table></div> ');
            }
            return __o.join("");
        }

        __o.push(" ");

        function combox(__d_combox, __nested) {
            var __o = [];
            __d_combox = __d_combox || {};
            with (__d_combox) {
                __o.push(" <span");
                if (id != "") {
                    __o.push(" id=");
                    __o.push(id);
                }
                __o.push(' class="');
                if (isIconList == true) {
                    __o.push("wwf-cp-combox-isiconlist ");
                } else {
                    __o.push("wwf-cp-combox-noticonlist ");
                }
                __o.push("wwf-cp-combox ");
                if (className != "") {
                    __o.push(className);
                } else {
                    __o.push("empty");
                }
                __o.push(" wwf-cp-combox-theme-");
                if (theme != "") {
                    __o.push(theme);
                } else {
                    __o.push("webex");
                }
                __o.push('"> <span class="wwf-cp-combox-wrap');
                if (isIconList == true) {
                    __o.push(" wwf-cp-combox-list-icon");
                }
                __o.push('"> <span class="icon"></span> <input type="hidden" name="');
                __o.push(name);
                __o.push('" value="');
                __o.push(value);
                __o.push('" class="wwf-cp-combox-base-hidden" data=\'');
                __o.push(data);
                __o.push('\' /> <input type="text" class="wwf-cp-combox-base" /> <a class="wwf-cp-combox-button"><span class="wwf-cp-combox-arrow"></span></a> </span> </span> ');
            }
            return __o.join("");
        }

        __o.push("  ");

        function datePicker(__d_datePicker, __nested) {
            var __o = [];
            __d_datePicker = __d_datePicker || {};
            with (__d_datePicker) {
                __o.push(' <label class="wwf-datepicker" id="');
                __o.push(jMarker.defaultValue(typeof(id) === "undefined" ? undefined : id));
                __o.push('"> <input type="text" id="');
                __o.push(jMarker.defaultValue(typeof(name) === "undefined" ? undefined : name));
                __o.push('" name="');
                __o.push(jMarker.defaultValue(typeof(name) === "undefined" ? undefined : name));
                __o.push('" date="');
                __o.push(jMarker.defaultValue(typeof(date) === "undefined" ? undefined : date));
                __o.push('" value="');
                __o.push(jMarker.defaultValue(typeof(value) === "undefined" ? undefined : value));
                __o.push('"/> <button class="picker">show calendar</button> </label> ');
            }
            return __o.join("");
        }

        __o.push("  ");

        function dialog(__d_dialog, __nested) {
            var __o = [];
            __d_dialog = __d_dialog || {};
            with (__d_dialog) {
                __o.push(' <div class="wwf-dialog wwf-dialog-wrap ');
                __o.push(skin);
                __o.push('" > <table><tbody><tr> <td class="wwf-border wwf-left-top"></td> <td class="wwf-border wwf-top"></td> <td class="wwf-border wwf-right-top"></td> </tr><tr> <td class="wwf-border wwf-left"></td> <td class="wwf-center"> <table class="wwf-content-table"><tbody> <tr><td class="wwf-td-title" colspan="2"> <div class="wwf-title-wrap"> <div class="wwf-title wwf-ellipsis" id="');
                __o.push(id);
                __o.push('_title" >');
                __o.push(title);
                __o.push('</div> <a href="javascript:;" title="');
                __o.push('关闭');
                __o.push('" class="wwf-close" onclick="return false;">');
                __o.push('关闭');
                __o.push('</a></div> </td></tr><tr> <td  class="wwf-td-content" ><div class="wwf-content-wrap" tabindex="-1"><div class="wwf-content" >&nbsp;</div> <div class="wwf-content-mask"></div><div class="wwf-loading-tip">Loading..</div></div></td></tr><tr> <td class="wwf-td-buttons" colspan="2"><div class="wwf-buttons-wrap"></div></td></tr></tbody></table> </td><td class="wwf-border wwf-right"></td></tr><tr><td class="wwf-border wwf-left-bottom"></td> <td class="wwf-border wwf-bottom"></td><td class="wwf-border wwf-right-bottom"></td></tr></tbody> </table></div> ');
            }
            return __o.join("");
        }

        __o.push(" ");

        function editor(__d_editor, __nested) {
            var __o = [];
            __d_editor = __d_editor || {};
            if (!jMarker.exists(__d_editor.title)) {
                __d_editor.title = "";
            }
            if (!jMarker.exists(__d_editor.editorClass)) {
                __d_editor.editorClass = "wwf-editor";
            }
            with (__d_editor) {
                __o.push(' <div class="');
                __o.push(editorClass);
                __o.push('"> <textarea id="');
                __o.push(id);
                __o.push('" name="');
                __o.push(name);
                __o.push('" title="');
                __o.push(title);
                __o.push('" class="wwf-editor-textarea"></textarea> </div> ');
            }
            return __o.join("");
        }

        __o.push(" ");

        function getLoadClass(icon) {
            __o.push(" ");
            if (icon == true) {
                __o.push(" ");
                return "wwf-load-icon wwf-load-text";
                __o.push(" ");
            } else {
                __o.push(" ");
                return "wwf-load-text wwf-load-anim";
                __o.push(" ");
            }
            __o.push(" ");
        }

        __o.push(" ");

        function loading(__d_loading, __nested) {
            var __o = [];
            __d_loading = __d_loading || {};
            if (!jMarker.exists(__d_loading.text)) {
                __d_loading.text = "Loading";
            }
            if (!jMarker.exists(__d_loading.icon)) {
                __d_loading.icon = false;
            }
            with (__d_loading) {
                __o.push(' <div class="wwf-load"> <span  class="');
                __o.push(getLoadClass(icon));
                __o.push('">');
                __o.push(text);
                __o.push("</span> </div> ");
            }
            return __o.join("");
        }

        __o.push("  ");

        function menu(__d_menu, __nested) {
            var __o = [];
            __d_menu = __d_menu || {};
            with (__d_menu) {
                __o.push(' <div class="wwf-menu"> <a tabindex="-1" onclick="return false;" href="#"></a> <div class="wwf-menu-inner"></div></div> ');
            }
            return __o.join("");
        }

        __o.push(" ");

        function menuitem(__d_menuitem, __nested) {
            var __o = [];
            __d_menuitem = __d_menuitem || {};
            with (__d_menuitem) {
                __o.push(' <div class="wwf-menu-item "><span >&nbsp;');
                __o.push(label);
                __o.push("</span></div> ");
            }
            return __o.join("");
        }

        __o.push(" ");

        function notification(__d_notification, __nested) {
            var __o = [];
            __d_notification = __d_notification || {};
            with (__d_notification) {
                __o.push(' <div id="');
                __o.push(id);
                __o.push('" class="wwf-notification wwf-notification-type-');
                if (type) {
                    __o.push(type);
                } else {
                    __o.push("info");
                }
                __o.push('" style="display:none;"> <a href="javascript:void(\'close\');" class="notif-icon-close wwf-ic16 wwf-ic-close" style="display:none;"></a> <div class="notif-msg-wrapper"> <span class="notif-icon"></span> <span class="notif-msg"></span> </div> </div> ');
            }
            return __o.join("");
        }

        __o.push("  ");
        __o.push("  ");

        function HTab(__d_HTab, __nested) {
            var __o = [];
            __d_HTab = __d_HTab || {};
            with (__d_HTab) {
                __o.push(' <ul class="wwf-tab-h ');
                __o.push(jMarker.defaultValue(typeof(data) === "undefined" ? undefined : data.className));
                __o.push('"');
                if ((data.id != "")) {
                    __o.push(' id="');
                    __o.push(jMarker.defaultValue(typeof(data) === "undefined" ? undefined : data.id));
                    __o.push('"');
                }
                __o.push("> ");
                (function () {
                    var _list = data.items;
                    var __i = 0, __count = _list.length, list, list_index, list_has_next;
                    for (; __i < __count; __i++) {
                        list = _list[__i];
                        list_index = __i;
                        list_has_next = (__i !== __count - 1);
                        __o.push(' <li class="tab-head');
                        if ((jMarker.exists(typeof(list) === "undefined" ? undefined : list.selected))) {
                            __o.push(" on");
                        }
                        __o.push('"> <a class="tab" href="');
                        __o.push(list.url);
                        __o.push('"> <span class="container"> <i class="prefix">');
                        __o.push(jMarker.defaultValue(typeof(list) === "undefined" ? undefined : list.prefix));
                        __o.push('</i> <span class="title">');
                        __o.push(list.txt);
                        __o.push('</span> <i class="suffix">');
                        __o.push(jMarker.defaultValue(typeof(list) === "undefined" ? undefined : list.suffix));
                        __o.push("</i> </span> </a> </li> ");
                    }
                })();
                __o.push(" </ul> ");
            }
            return __o.join("");
        }

        __o.push("  ");
        __o.push(" ");

        function VTab(__d_VTab, __nested) {
            var __o = [];
            __d_VTab = __d_VTab || {};
            with (__d_VTab) {
                __o.push(' <ul class="wwf-tab-v ');
                __o.push(jMarker.defaultValue(typeof(data) === "undefined" ? undefined : data.className));
                __o.push('"');
                if ((data.id != "")) {
                    __o.push(' id="');
                    __o.push(jMarker.defaultValue(typeof(data) === "undefined" ? undefined : data.id));
                    __o.push('"');
                }
                __o.push("> ");
                (function () {
                    var _list = data.items;
                    var __i = 0, __count = _list.length, AList, AList_index, AList_has_next;
                    for (; __i < __count; __i++) {
                        AList = _list[__i];
                        AList_index = __i;
                        AList_has_next = (__i !== __count - 1);
                        __o.push(' <li class="');
                        if ((jMarker.exists(typeof(AList) === "undefined" ? undefined : AList.subItems))) {
                            __o.push("acd-head");
                        } else {
                            __o.push("tab-head");
                        }
                        if ((jMarker.exists(typeof(AList) === "undefined" ? undefined : AList.selected))) {
                            __o.push(" on");
                        }
                        __o.push('"> <a class="tab" href="#');
                        __o.push(jMarker.defaultValue(typeof(AList) === "undefined" ? undefined : AList.url));
                        __o.push('"> <span class="container"> <i class="prefix">');
                        __o.push(jMarker.defaultValue(typeof(AList) === "undefined" ? undefined : AList.prefix));
                        __o.push('</i> <span class="title">');
                        __o.push(jMarker.defaultValue(typeof(AList) === "undefined" ? undefined : AList.txt));
                        __o.push('</span> <i class="suffix">');
                        __o.push(jMarker.defaultValue(typeof(AList) === "undefined" ? undefined : AList.suffix));
                        __o.push("</i> </span> </a> ");
                        if ((jMarker.exists(typeof(AList) === "undefined" ? undefined : AList.subItems))) {
                            __o.push(' <ul class="sub-tab-v"> ');
                            (function () {
                                var _list = AList.subItems;
                                var __i = 0, __count = _list.length, SList, SList_index, SList_has_next;
                                for (; __i < __count; __i++) {
                                    SList = _list[__i];
                                    SList_index = __i;
                                    SList_has_next = (__i !== __count - 1);
                                    __o.push(' <li class="sub-tab-head"> <a href="#');
                                    __o.push(jMarker.defaultValue(typeof(SList) === "undefined" ? undefined : SList.url));
                                    __o.push('" class="sub-tab');
                                    if ((jMarker.exists(typeof(SList) === "undefined" ? undefined : SList.selected))) {
                                        __o.push(" on");
                                    }
                                    __o.push('"> <span class="title">');
                                    __o.push(jMarker.defaultValue(typeof(SList) === "undefined" ? undefined : SList.txt));
                                    __o.push('</span> <i class="suffix">');
                                    __o.push(jMarker.defaultValue(typeof(SList) === "undefined" ? undefined : SList.suffix));
                                    __o.push("</i> </a> </li> ");
                                }
                            })();
                            __o.push(" </ul> ");
                        }
                        __o.push(" </li> ");
                    }
                })();
                __o.push(" </ul> ");
            }
            return __o.join("");
        }

        __o.push(" ");

        function tooltip(__d_tooltip, __nested) {
            var __o = [];
            __d_tooltip = __d_tooltip || {};
            with (__d_tooltip) {
                __o.push(' <div id="tooltip_');
                __o.push(id);
                __o.push('" class="tip_box"> <div class="tip_wrap round"><div class="tipwrap round"> <a href="javascript:;" class="tip_close j-hide" id="tooltip_');
                __o.push(id);
                __o.push('_close"></a> <span class="tip_cont">');
                __o.push(content);
                __o.push('</span> </div></div> <em class="tip_arrow tip_v j-hide" ><span></span></em> <em class="tip_arrow tip_h j-hide"><span></span></em> </div> ');
            }
            return __o.join("");
        }

        __o.push("    ");

        function list(__d_list, __nested) {
            var __o = [];
            __d_list = __d_list || {};
            if (!jMarker.exists(__d_list.showHead)) {
                __d_list.showHead = true;
            }
            if (!jMarker.exists(__d_list.showTopPagination)) {
                __d_list.showTopPagination = true;
            }
            if (!jMarker.exists(__d_list.showBottomPagination)) {
                __d_list.showBottomPagination = true;
            }
            if (!jMarker.exists(__d_list.emptyMessage)) {
                __d_list.emptyMessage = "";
            }
            if (!jMarker.exists(__d_list.appendBody)) {
                __d_list.appendBody = "";
            }
            if (!jMarker.exists(__d_list.prependBody)) {
                __d_list.prependBody = "";
            }
            with (__d_list) {
                __o.push(' <div id="');
                __o.push(id);
                __o.push('" class="wwf-list"> <div class="wwf-list-paging-top"> ');
                if ((totalCount > 0) && showTopPagination) {
                    __o.push(" ");
                    __o.push(pagination({pageSize: pageSize, pageNum: pageNum, totalCount: totalCount}));
                    __o.push(" ");
                }
                __o.push(' </div>  <div class="wwf-list-head wwf-list-row wwf-list-title clearfix" ');
                if (!showHead) {
                    __o.push('style="display:none;"');
                }
                __o.push("> ");
                (function () {
                    var __i = 0, __count = columns.length, column, column_index, column_has_next;
                    for (; __i < __count; __i++) {
                        column = columns[__i];
                        column_index = __i;
                        column_has_next = (__i !== __count - 1);
                        __o.push(' <div style="width: ');
                        __o.push(column.width - 10);
                        __o.push('px;" class="wwf-list-col"> ');
                        if (jMarker.exists(typeof(column) === "undefined" ? undefined : column.rich) && column.rich) {
                            __o.push(" ");
                            __o.push(column.title);
                            __o.push(" ");
                        } else {
                            __o.push(" ");
                            if (jMarker.exists(typeof(column) === "undefined" ? undefined : column.sort) && column.sort != "") {
                                __o.push(" ");
                                if (column.sort == sort) {
                                    __o.push(' <a data-monitor-id="list_column_');
                                    __o.push(column_index);
                                    __o.push('" wwf-list-sortfield="');
                                    __o.push(column.sort);
                                    __o.push('" wwf-list-sortdirection="');
                                    __o.push(order);
                                    __o.push('" class="sortable wwf-list-sort-');
                                    __o.push(order);
                                    __o.push('" style="max-width: ');
                                    __o.push(column.width - 26);
                                    __o.push('px;" href="javascript:;" title="');
                                    __o.push(column.title);
                                    __o.push('"> <span ');
                                    if (jMarker.exists(typeof(column) === "undefined" ? undefined : column.tooltip)) {
                                        __o.push('title="');
                                        __o.push(column.tooltip);
                                        __o.push('"');
                                    }
                                    __o.push(' class="wwf-ellipsis"  style="max-width: ');
                                    __o.push(column.width - 26);
                                    __o.push('px;">');
                                    __o.push(column.title);
                                    __o.push("</span> </a> ");
                                } else {
                                    __o.push(' <a data-monitor-id="list_column_');
                                    __o.push(column_index);
                                    __o.push('" wwf-list-sortfield="');
                                    __o.push(column.sort);
                                    __o.push('" class="sortable" href="javascript:;" title="');
                                    __o.push(column.title);
                                    __o.push('"> <span ');
                                    if (jMarker.exists(typeof(column) === "undefined" ? undefined : column.tooltip)) {
                                        __o.push('title="');
                                        __o.push(column.tooltip);
                                        __o.push('"');
                                    }
                                    __o.push(' class="wwf-ellipsis" style="max-width: ');
                                    __o.push(column.width - 10);
                                    __o.push('px;">');
                                    __o.push(column.title);
                                    __o.push("</span> </a> ");
                                }
                                __o.push(" ");
                            } else {
                                __o.push(' <a data-monitor-id="list_column_');
                                __o.push(column_index);
                                __o.push('" href="javascript:;" tabindex="-1" title="');
                                __o.push(column.title);
                                __o.push('"> <span ');
                                if (jMarker.exists(typeof(column) === "undefined" ? undefined : column.tooltip)) {
                                    __o.push('title="');
                                    __o.push(column.tooltip);
                                    __o.push('"');
                                }
                                __o.push(' class="wwf-ellipsis" style="max-width: ');
                                __o.push(column.width - 10);
                                __o.push('px;">');
                                __o.push(column.title);
                                __o.push("</span> </a> ");
                            }
                            __o.push(" ");
                        }
                        __o.push(" </div> ");
                    }
                })();
                __o.push(' </div>  <div class="wwf-list-body"> ');
                if (totalCount == 0) {
                    __o.push(" ");
                    if (emptyMessage != "") {
                        __o.push(" ");
                        __o.push(emptyMessage);
                        __o.push(" ");
                    } else {
                        __o.push(" ");
                        __o.push(__nested("emptyMessage.list"));
                        __o.push(" ");
                    }
                    __o.push(" ");
                } else {
                    __o.push(" ");
                    if (prependBody != "") {
                        __o.push(" ");
                        __o.push(prependBody);
                        __o.push(" ");
                    } else {
                        __o.push(" ");
                        __o.push(__nested("prependBody.list"));
                        __o.push(" ");
                    }
                    __o.push("  ");
                    (function () {
                        var __i = 0, __count = items.length, item, item_index, item_has_next;
                        for (; __i < __count; __i++) {
                            item = items[__i];
                            item_index = __i;
                            item_has_next = (__i !== __count - 1);
                            __o.push(' <div class="wwf-list-row clearfix ');
                            if (jMarker.exists(typeof(item) === "undefined" ? undefined : item.className)) {
                                __o.push(item.className);
                            }
                            __o.push('"> ');
                            (function () {
                                var __i = 0, __count = columns.length, column, column_index, column_has_next;
                                for (; __i < __count; __i++) {
                                    column = columns[__i];
                                    column_index = __i;
                                    column_has_next = (__i !== __count - 1);
                                    __o.push(' <div style="width: ');
                                    __o.push(column.width - 10);
                                    __o.push('px;" class="wwf-list-col"> ');
                                    __o.push(__nested(column.field, item));
                                    __o.push(" </div> ");
                                }
                            })();
                            __o.push(" </div> ");
                        }
                    })();
                    __o.push("  ");
                    if (appendBody != "") {
                        __o.push(" ");
                        __o.push(appendBody);
                        __o.push(" ");
                    } else {
                        __o.push(" ");
                        __o.push(__nested("appendBody.list"));
                        __o.push(" ");
                    }
                    __o.push(" ");
                }
                __o.push(' </div>  <div class="wwf-list-paging-bottom"> ');
                if ((totalCount > 0) && showBottomPagination) {
                    __o.push(" ");
                    __o.push(pagination({pageSize: pageSize, pageNum: pageNum, totalCount: totalCount}));
                    __o.push(" ");
                }
                __o.push(' </div> <div class="clear"> </div> </div> ');
            }
            return __o.join("");
        }

        __o.push("  ");

        function pagination_getPageStartEndIndex(pageNum, pageSize, totalCount) {
            __o.push(" ");
            __o.push(" ");
            var startIndex = (pageNum - 1) * pageSize;
            __o.push(" ");
            if ((startIndex > totalCount - 1)) {
                __o.push(" ");
                startIndex = (Math.floor(totalCount / pageSize) - 1) * pageSize;
                __o.push(" ");
            }
            __o.push(" ");
            if (startIndex < 0) {
                __o.push(" ");
                startIndex = 0;
                __o.push(" ");
            }
            __o.push(" ");
            __o.push(" ");
            var endIndex = startIndex + pageSize - 1;
            __o.push(" ");
            if ((endIndex > totalCount - 1)) {
                __o.push(" ");
                endIndex = totalCount - 1;
                __o.push(" ");
            }
            __o.push(" ");
            return [startIndex, endIndex];
            __o.push(" ");
        }

        __o.push(" ");

        function pagination(__d_pagination, __nested) {
            var __o = [];
            __d_pagination = __d_pagination || {};
            with (__d_pagination) {
                __o.push(" ");
                var totalPageCount = 0;
                var maxPageCount = 5;
                var halfMaxPageCount = jMarker.builtins((maxPageCount / 2), ["floor"]);
                __o.push(" ");
                __o.push(" ");
                totalPageCount = jMarker.builtins((totalCount / pageSize), ["floor"]);
                __o.push(" ");
                if ((totalCount % pageSize > 0)) {
                    __o.push(" ");
                    totalPageCount = totalPageCount + 1;
                    __o.push(" ");
                }
                __o.push(" ");
                var minPageDisabled = "";
                __o.push(" ");
                if (pageNum == 1) {
                    __o.push(" ");
                    minPageDisabled = "disable";
                    __o.push(" ");
                }
                __o.push(" ");
                var maxPageDisabled = "";
                __o.push(" ");
                if (pageNum == totalPageCount) {
                    __o.push(" ");
                    maxPageDisabled = "disable";
                    __o.push(" ");
                }
                __o.push('   <div class="wwf-pagination ');
                if (totalPageCount == 1) {
                    __o.push("wwf-hide");
                }
                __o.push('" > <a data-monitor-id="pagination_first" class="wwf-pagination-first ');
                __o.push(minPageDisabled);
                __o.push('" title="');
                __o.push(wwf.lang.get({code: "wwf.pagination.first"}));
                __o.push('" wwf-pagination-pagenum="1" href="javascript:;">');
                __o.push(wwf.lang.get({code: "wwf.pagination.first"}));
                __o.push('</a> <a data-monitor-id="pagination_previous" class="wwf-pagination-pre ');
                __o.push(minPageDisabled);
                __o.push('" title="');
                __o.push(wwf.lang.get({code: "wwf.pagination.pre"}));
                __o.push('" wwf-pagination-pagenum="');
                __o.push(jMarker.builtins((pageNum - 1), ["string.computer"]));
                __o.push('" href="javascript:;">');
                __o.push(wwf.lang.get({code: "wwf.pagination.pre"}));
                __o.push("</a> ");
                var _iptCur = '<label for="pagination_current" class="wwf-pagination-current-label wwf-hide"></label><input data-monitor-id="pagination_current" name="pagination_current"  id="pagination_current" type="text" class="wwf-pagination-current" value="' + pageNum + '" wwf-pagination-pagenum="' + pageNum + '">';
                __o.push(" ");
                __o.push(wwf.lang.get({code: "wwf.pagination.of", arguments: [_iptCur, totalPageCount]}));
                __o.push('  <a data-monitor-id="pagination_next" class="wwf-pagination-next ');
                __o.push(maxPageDisabled);
                __o.push('" title="');
                __o.push(wwf.lang.get({code: "wwf.pagination.next"}));
                __o.push('" wwf-pagination-pagenum="');
                __o.push(jMarker.builtins((pageNum + 1), ["string.computer"]));
                __o.push('" href="javascript:;">');
                __o.push(wwf.lang.get({code: "wwf.pagination.next"}));
                __o.push('</a> <a data-monitor-id="pagination_last" class="wwf-pagination-last ');
                __o.push(maxPageDisabled);
                __o.push('" title="');
                __o.push(wwf.lang.get({code: "wwf.pagination.last"}));
                __o.push('" wwf-pagination-pagenum="');
                __o.push(jMarker.builtins(totalPageCount, ["string.computer"]));
                __o.push('" href="javascript:;">');
                __o.push(wwf.lang.get({code: "wwf.pagination.last"}));
                __o.push("</a> </div> ");
            }
            return __o.join("");
        }

        __o.push(" ");

        function inputBox(__d_inputBox, __nested) {
            var __o = [];
            __d_inputBox = __d_inputBox || {};
            if (!jMarker.exists(__d_inputBox.value)) {
                __d_inputBox.value = "";
            }
            if (!jMarker.exists(__d_inputBox.type)) {
                __d_inputBox.type = "text";
            }
            if (!jMarker.exists(__d_inputBox.placeholder)) {
                __d_inputBox.placeholder = "";
            }
            if (!jMarker.exists(__d_inputBox.maxLength)) {
                __d_inputBox.maxLength = "";
            }
            if (!jMarker.exists(__d_inputBox.disabled)) {
                __d_inputBox.disabled = false;
            }
            if (!jMarker.exists(__d_inputBox.readOnly)) {
                __d_inputBox.readOnly = false;
            }
            if (!jMarker.exists(__d_inputBox.otherAttr)) {
                __d_inputBox.otherAttr = {};
            }
            with (__d_inputBox) {
                __o.push(' <span class="f-textbox" ');
                if (disabled == true) {
                    __o.push('aria-disabled="true"');
                }
                __o.push(" ");
                if (readOnly == true) {
                    __o.push('aria-readonly="true"');
                }
                __o.push('> <label for="');
                __o.push(id);
                __o.push('" class="f-placeholder">');
                __o.push(placeholder);
                __o.push('</label> <input id="');
                __o.push(id);
                __o.push('" data-monitor-id="');
                __o.push(id);
                __o.push('" name="');
                __o.push(name);
                __o.push('" value="');
                __o.push(value);
                __o.push('" type="');
                __o.push(type);
                __o.push('"  ');
                if (disabled == true) {
                    __o.push(' disabled="disabled" ');
                }
                __o.push("  ");
                if (readOnly == true) {
                    __o.push(' readonly="readonly" ');
                }
                __o.push("  ");
                if (placeholder != "") {
                    __o.push(' placeholder="');
                    __o.push(placeholder);
                    __o.push('" ');
                }
                __o.push("  ");
                if (maxLength != "") {
                    __o.push(' maxLength="');
                    __o.push(maxLength);
                    __o.push('" ');
                }
                __o.push("  ");
                if (jMarker.exists(typeof(otherAttr) === "undefined" ? undefined : otherAttr.items)) {
                    __o.push(" ");
                    (function () {
                        var _list = otherAttr.items;
                        var __i = 0, __count = _list.length, OList, OList_index, OList_has_next;
                        for (; __i < __count; __i++) {
                            OList = _list[__i];
                            OList_index = __i;
                            OList_has_next = (__i !== __count - 1);
                            __o.push(" ");
                            __o.push(jMarker.defaultValue(typeof(OList) === "undefined" ? undefined : OList.attr));
                            __o.push('="');
                            __o.push(jMarker.defaultValue(typeof(OList) === "undefined" ? undefined : OList.val));
                            __o.push('" ');
                        }
                    })();
                    __o.push(" ");
                }
                __o.push(" /> </span> ");
            }
            return __o.join("");
        }

        __o.push(" ");

        function checkbox(__d_checkbox, __nested) {
            var __o = [];
            __d_checkbox = __d_checkbox || {};
            if (!jMarker.exists(__d_checkbox.checked)) {
                __d_checkbox.checked = false;
            }
            if (!jMarker.exists(__d_checkbox.disabled)) {
                __d_checkbox.disabled = false;
            }
            if (!jMarker.exists(__d_checkbox.otherAttr)) {
                __d_checkbox.otherAttr = {};
            }
            with (__d_checkbox) {
                __o.push(' <div class="f-checkbox" ');
                if (disabled == true) {
                    __o.push('aria-disabled="true"');
                }
                __o.push(" ");
                if (checked == true) {
                    __o.push('aria-checked="true"');
                }
                __o.push('> <input type="checkbox" name="');
                __o.push(name);
                __o.push('" value="');
                __o.push(value);
                __o.push('" id="');
                __o.push(id);
                __o.push('" data-monitor-id="');
                __o.push(id);
                __o.push('" ');
                if (disabled == true) {
                    __o.push(' disabled="disabled" ');
                }
                __o.push(" ");
                if (checked == true) {
                    __o.push(' checked="checked" ');
                }
                __o.push(" ");
                if (jMarker.exists(typeof(otherAttr) === "undefined" ? undefined : otherAttr.items)) {
                    __o.push(" ");
                    (function () {
                        var _list = otherAttr.items;
                        var __i = 0, __count = _list.length, OList, OList_index, OList_has_next;
                        for (; __i < __count; __i++) {
                            OList = _list[__i];
                            OList_index = __i;
                            OList_has_next = (__i !== __count - 1);
                            __o.push(" ");
                            __o.push(jMarker.defaultValue(typeof(OList) === "undefined" ? undefined : OList.attr));
                            __o.push('="');
                            __o.push(jMarker.defaultValue(typeof(OList) === "undefined" ? undefined : OList.val));
                            __o.push('" ');
                        }
                    })();
                    __o.push(" ");
                }
                __o.push(' /> <label for="');
                __o.push(id);
                __o.push('"> <a class="f-form-img"></a> ');
                __o.push(label);
                __o.push(" </label> </div> ");
            }
            return __o.join("");
        }

        __o.push(" ");

        function radio(__d_radio, __nested) {
            var __o = [];
            __d_radio = __d_radio || {};
            if (!jMarker.exists(__d_radio.checked)) {
                __d_radio.checked = false;
            }
            if (!jMarker.exists(__d_radio.disabled)) {
                __d_radio.disabled = false;
            }
            if (!jMarker.exists(__d_radio.otherAttr)) {
                __d_radio.otherAttr = {};
            }
            with (__d_radio) {
                __o.push(' <div class="f-radio" ');
                if (disabled == true) {
                    __o.push('aria-disabled="true"');
                }
                __o.push(" ");
                if (checked == true) {
                    __o.push('aria-checked="true"');
                }
                __o.push('> <input type="radio" name="');
                __o.push(name);
                __o.push('" value="');
                __o.push(value);
                __o.push('" id="');
                __o.push(id);
                __o.push('" data-monitor-id="');
                __o.push(id);
                __o.push('" ');
                if (disabled == true) {
                    __o.push(' disabled="disabled" ');
                }
                __o.push(" ");
                if (checked == true) {
                    __o.push(' checked="checked" ');
                }
                __o.push(" ");
                if (jMarker.exists(typeof(otherAttr) === "undefined" ? undefined : otherAttr.items)) {
                    __o.push(" ");
                    (function () {
                        var _list = otherAttr.items;
                        var __i = 0, __count = _list.length, OList, OList_index, OList_has_next;
                        for (; __i < __count; __i++) {
                            OList = _list[__i];
                            OList_index = __i;
                            OList_has_next = (__i !== __count - 1);
                            __o.push(" ");
                            __o.push(jMarker.defaultValue(typeof(OList) === "undefined" ? undefined : OList.attr));
                            __o.push('="');
                            __o.push(jMarker.defaultValue(typeof(OList) === "undefined" ? undefined : OList.val));
                            __o.push('" ');
                        }
                    })();
                    __o.push(" ");
                }
                __o.push(' /> <label for="');
                __o.push(id);
                __o.push('"> <a class="f-form-img"></a> ');
                __o.push(label);
                __o.push(" </label> </div> ");
            }
            return __o.join("");
        }

        __o.push(" ");
    }
    if (!__macro) {
        return __o.join("");
    } else {
        return {
            __result: __o.join(""),
            autocomplete: autocomplete,
            getClassName: getClassName,
            getDisable: getDisable,
            button: button,
            getClassName: getClassName,
            getDisable: getDisable,
            inputbutton: inputbutton,
            dialog: dialog,
            combox: combox,
            datePicker: datePicker,
            dialog: dialog,
            editor: editor,
            getLoadClass: getLoadClass,
            loading: loading,
            menu: menu,
            menuitem: menuitem,
            notification: notification,
            HTab: HTab,
            VTab: VTab,
            tooltip: tooltip,
            list: list,
            pagination_getPageStartEndIndex: pagination_getPageStartEndIndex,
            pagination: pagination,
            inputBox: inputBox,
            checkbox: checkbox,
            radio: radio
        };
    }
});
(function (b) {
    WBX.component.marketing = {
        go: function (n, j, f, h) {
            var c = n;
            if (j) {
                c = this._getTargetKey(n);
            }
            var d = "_blank";
            if (f) {
                d = "_self";
            }
            var l = WWF.CONFIG.contextPath + "/account/goecommerce?key=" + c;
            if (h) {
                var g = [];
                for (var m in h) {
                    if (WWF.isEmpty(h[m])) {
                        continue;
                    }
                    g.push(m + "=" + h[m]);
                }
                if (g.length > 0) {
                    l += "&" + g.join("&");
                }
            }
            window.open(l, d);
        }, trackRender: function (g, f, d) {
            var c = g;
            if (f) {
                c = this._getTargetKey(g);
            }
            WWF.frame.addTrackLog(c, d);
        }, _getTargetKey: function (g) {
            var c = g;
            var f = WWF.frame.module();
            var d = WWF.frame.feature();
            if (WWF.isEmpty(d)) {
                c = f + "_" + c;
            } else {
                c = f + "_" + d + "_" + c;
            }
            return c;
        }, didyouknow: {
            create: function (c, f) {
                var d = this;
                if (WWF.CONFIG.isLoggedIn && ("1" === WWF.CONFIG.orgType)) {
                    this._setupService();
                    WWF.request.call("marketing.getDiduknowMessage", {module: c}, function (m) {
                        var j = m.result;
                        if (j.size > 0) {
                            var g = new Array();
                            g.push("<div class='section'><div>");
                            var l = j.messageList;
                            for (var h = 0; h < j.size; h++) {
                                g.push("<div style='display:");
                                g.push(h > 0 ? "none;" : "block;");
                                g.push("' id='did_u_know_msg_" + (h + 1) + "'>" + l[h] + "</div>");
                            }
                            g.push("</div><div style='text-align: right;'><a href='javascript: void(0);' id='pre_diduknow' class='wwf-pagination-pre'>pre</a>");
                            g.push("<span id='curr_msg_count_span'>1</span>/<span id='max_msg_count_span'>" + j.size + "</span>");
                            g.push("<a href='javascript: void(0);' id='next_diduknow' class='wwf-pagination-next'>last</a></div></div>");
                            b(f).html(g.join(""));
                            d._bindPrevHandler(j.size);
                            d._bindNextHandler(j.size);
                        } else {
                        }
                    }, function (g) {
                    });
                }
            }, _bindPrevHandler: function (d) {
                var c = b("#curr_msg_count_span");
                if (b("#pre_diduknow").length) {
                    b("#pre_diduknow").click(function () {
                        var h = c.text();
                        var f = parseInt(h, 10);
                        if (d > 1) {
                            b("#did_u_know_msg_" + f).hide();
                            var g;
                            if (f == 1) {
                                g = d;
                            } else {
                                g = f - 1;
                            }
                            b("#did_u_know_msg_" + g).show();
                            c.text(g);
                        }
                    });
                }
            }, _bindNextHandler: function (d) {
                var c = b("#curr_msg_count_span");
                if (b("#next_diduknow").length) {
                    b("#next_diduknow").click(function () {
                        var h = c.text();
                        var f = parseInt(h, 10);
                        if (d > 1) {
                            b("#did_u_know_msg_" + f).hide();
                            var g;
                            if (f == d) {
                                g = 1;
                            } else {
                                g = f + 1;
                            }
                            b("#did_u_know_msg_" + g).show();
                            c.text(g);
                        }
                    });
                }
            }, _setupService: function () {
                WWF.request.setService("marketing", {
                    getDiduknowMessage: {
                        service: "marketing.getDiduknowMessage",
                        params: {}
                    }
                });
            }
        }, topbar: {
            create: function () {
                var c = this;
                c._setupService();
                WWF.utils.bind("component.fte.close", function (d, f) {
                    WWF.request.call("marketing.getProductionMessage", {}, function (l) {
                        if (l && l.result) {
                            var h = l.result;
                            var n = h.msgContent;
                            var g = h.priority;
                            var m = h.customized;
                            var j = h.closable;
                            if (n) {
                                if (m) {
                                    WBX.component.header.showTopMessage(n, j, WBX.component.marketing.topbar._closeTopBar);
                                } else {
                                    WBX.component.header.showITMessage(n, j, WBX.component.marketing.topbar._closeTopBar);
                                }
                            }
                        }
                    }, function (g) {
                    });
                });
            }, _closeTopBar: function () {
                WWF.request.call("marketing.closeTopBar", {}, function (c) {
                }, function (c) {
                });
            }, _setupService: function () {
                WWF.request.setService("marketing", {
                    getProductionMessage: {
                        service: "marketing.getProductionMessage",
                        params: {}
                    }, closeTopBar: {service: "marketing.closeTopBar", params: {}}
                });
            }
        }
    };
})(jQuery);
$(function () {
    if (WWF.CONFIG.isLoggedIn) {
        WBX.component.marketing.topbar.create();
    } else {
    }
});