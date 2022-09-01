!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t();
}(0, function() {
    "use strict";
    function e1(e) {
        var t = this.constructor;
        return this.then(function(n) {
            return t.resolve(e()).then(function() {
                return n;
            });
        }, function(n) {
            return t.resolve(e()).then(function() {
                return t.reject(n);
            });
        });
    }
    function t1(e2) {
        return new this(function(t2, n2) {
            function o(e, n3) {
                if (n3 && ("object" == typeof n3 || "function" == typeof n3)) {
                    var f = n3.then;
                    if ("function" == typeof f) return void f.call(n3, function(t) {
                        o(e, t);
                    }, function(n) {
                        r[e] = {
                            status: "rejected",
                            reason: n
                        }, 0 == --i && t2(r);
                    });
                }
                r[e] = {
                    status: "fulfilled",
                    value: n3
                }, 0 == --i && t2(r);
            }
            if (!e2 || "undefined" == typeof e2.length) return n2(new TypeError(typeof e2 + " " + e2 + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var r = Array.prototype.slice.call(e2);
            if (0 === r.length) return t2([]);
            for(var i = r.length, f2 = 0; r.length > f2; f2++)o(f2, r[f2]);
        });
    }
    function n1(e) {
        return !(!e || "undefined" == typeof e.length);
    }
    function o1() {}
    function r1(e) {
        if (!(this instanceof r1)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], l(e, this);
    }
    function i1(e, t) {
        for(; 3 === e._state;)e = e._value;
        0 !== e._state ? (e._handled = !0, r1._immediateFn(function() {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
                var o;
                try {
                    o = n(e._value);
                } catch (r) {
                    return void u1(t.promise, r);
                }
                f1(t.promise, o);
            } else (1 === e._state ? f1 : u1)(t.promise, e._value);
        })) : e._deferreds.push(t);
    }
    function f1(e3, t3) {
        try {
            if (t3 === e3) throw new TypeError("A promise cannot be resolved with itself.");
            if (t3 && ("object" == typeof t3 || "function" == typeof t3)) {
                var n = t3.then;
                if (t3 instanceof r1) return e3._state = 3, e3._value = t3, void c1(e3);
                if ("function" == typeof n) return void l(function(e, t) {
                    return function() {
                        e.apply(t, arguments);
                    };
                }(n, t3), e3);
            }
            e3._state = 1, e3._value = t3, c1(e3);
        } catch (o) {
            u1(e3, o);
        }
    }
    function u1(e, t) {
        e._state = 2, e._value = t, c1(e);
    }
    function c1(e) {
        2 === e._state && 0 === e._deferreds.length && r1._immediateFn(function() {
            e._handled || r1._unhandledRejectionFn(e._value);
        });
        for(var t = 0, n = e._deferreds.length; n > t; t++)i1(e, e._deferreds[t]);
        e._deferreds = null;
    }
    function l(e4, t) {
        var n = !1;
        try {
            e4(function(e) {
                n || (n = !0, f1(t, e));
            }, function(e) {
                n || (n = !0, u1(t, e));
            });
        } catch (o) {
            if (n) return;
            n = !0, u1(t, o);
        }
    }
    var a = setTimeout, s = "undefined" != typeof setImmediate ? setImmediate : null;
    r1.prototype["catch"] = function(e) {
        return this.then(null, e);
    }, r1.prototype.then = function(e5, t4) {
        var n4 = new this.constructor(o1);
        return i1(this, new function(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n;
        }(e5, t4, n4)), n4;
    }, r1.prototype["finally"] = e1, r1.all = function(e6) {
        return new r1(function(t5, o) {
            function r(e, n) {
                try {
                    if (n && ("object" == typeof n || "function" == typeof n)) {
                        var u = n.then;
                        if ("function" == typeof u) return void u.call(n, function(t) {
                            r(e, t);
                        }, o);
                    }
                    i[e] = n, 0 == --f && t5(i);
                } catch (c) {
                    o(c);
                }
            }
            if (!n1(e6)) return o(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(e6);
            if (0 === i.length) return t5([]);
            for(var f = i.length, u2 = 0; i.length > u2; u2++)r(u2, i[u2]);
        });
    }, r1.allSettled = t1, r1.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === r1 ? e : new r1(function(t) {
            t(e);
        });
    }, r1.reject = function(e) {
        return new r1(function(t, n) {
            n(e);
        });
    }, r1.race = function(e) {
        return new r1(function(t, o) {
            if (!n1(e)) return o(new TypeError("Promise.race accepts an array"));
            for(var i = 0, f = e.length; f > i; i++)r1.resolve(e[i]).then(t, o);
        });
    }, r1._immediateFn = "function" == typeof s && function(e) {
        s(e);
    } || function(e) {
        a(e, 0);
    }, r1._unhandledRejectionFn = function(e) {
        void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e);
    };
    var d = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw Error("unable to locate global object");
    }();
    "function" != typeof d.Promise ? d.Promise = r1 : (d.Promise.prototype["finally"] || (d.Promise.prototype["finally"] = e1), d.Promise.allSettled || (d.Promise.allSettled = t1));
});

//# sourceMappingURL=work.7af5a54d.js.map
