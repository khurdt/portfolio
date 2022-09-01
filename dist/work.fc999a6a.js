!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e(t.WHATWGFetch = {});
}(this, function(t1) {
    "use strict";
    var e1 = {
        searchParams: "URLSearchParams" in self,
        iterable: "Symbol" in self && "iterator" in Symbol,
        blob: "FileReader" in self && "Blob" in self && function() {
            try {
                return new Blob, !0;
            } catch (t) {
                return !1;
            }
        }(),
        formData: "FormData" in self,
        arrayBuffer: "ArrayBuffer" in self
    };
    if (e1.arrayBuffer) var r1 = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]"
    ], o1 = ArrayBuffer.isView || function(t) {
        return t && r1.indexOf(Object.prototype.toString.call(t)) > -1;
    };
    function n1(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase();
    }
    function i1(t) {
        return "string" != typeof t && (t = String(t)), t;
    }
    function s1(t) {
        var r = {
            next: function() {
                var e = t.shift();
                return {
                    done: void 0 === e,
                    value: e
                };
            }
        };
        return e1.iterable && (r[Symbol.iterator] = function() {
            return r;
        }), r;
    }
    function a(t2) {
        this.map = {}, t2 instanceof a ? t2.forEach(function(t, e) {
            this.append(e, t);
        }, this) : Array.isArray(t2) ? t2.forEach(function(t) {
            this.append(t[0], t[1]);
        }, this) : t2 && Object.getOwnPropertyNames(t2).forEach(function(e) {
            this.append(e, t2[e]);
        }, this);
    }
    function h1(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0;
    }
    function f1(t) {
        return new Promise(function(e, r) {
            t.onload = function() {
                e(t.result);
            }, t.onerror = function() {
                r(t.error);
            };
        });
    }
    function u(t) {
        var e = new FileReader, r = f1(e);
        return e.readAsArrayBuffer(t), r;
    }
    function d(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer;
    }
    function c() {
        return this.bodyUsed = !1, this._initBody = function(t) {
            var r;
            this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : e1.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : e1.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : e1.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : e1.arrayBuffer && e1.blob && (r = t) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([
                this._bodyArrayBuffer
            ])) : e1.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || o1(t)) ? this._bodyArrayBuffer = d(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e1.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, e1.blob && (this.blob = function() {
            var t = h1(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                this._bodyArrayBuffer
            ]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([
                this._bodyText
            ]));
        }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? h1(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(u);
        }), this.text = function() {
            var t3, e2, r2, o2 = h1(this);
            if (o2) return o2;
            if (this._bodyBlob) return t3 = this._bodyBlob, e2 = new FileReader, r2 = f1(e2), e2.readAsText(t3), r2;
            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                for(var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++)r[o] = String.fromCharCode(e[o]);
                return r.join("");
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
        }, e1.formData && (this.formData = function() {
            return this.text().then(p);
        }), this.json = function() {
            return this.text().then(JSON.parse);
        }, this;
    }
    a.prototype.append = function(t, e) {
        t = n1(t), e = i1(e);
        var r = this.map[t];
        this.map[t] = r ? r + ", " + e : e;
    }, a.prototype.delete = function(t) {
        delete this.map[n1(t)];
    }, a.prototype.get = function(t) {
        return t = n1(t), this.has(t) ? this.map[t] : null;
    }, a.prototype.has = function(t) {
        return this.map.hasOwnProperty(n1(t));
    }, a.prototype.set = function(t, e) {
        this.map[n1(t)] = i1(e);
    }, a.prototype.forEach = function(t, e) {
        for(var r in this.map)this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
    }, a.prototype.keys = function() {
        var t = [];
        return this.forEach(function(e, r) {
            t.push(r);
        }), s1(t);
    }, a.prototype.values = function() {
        var t = [];
        return this.forEach(function(e) {
            t.push(e);
        }), s1(t);
    }, a.prototype.entries = function() {
        var t = [];
        return this.forEach(function(e, r) {
            t.push([
                r,
                e
            ]);
        }), s1(t);
    }, e1.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);
    var l = [
        "DELETE",
        "GET",
        "HEAD",
        "OPTIONS",
        "POST",
        "PUT"
    ];
    function y(t, e) {
        var r, o, n = (e = e || {}).body;
        if (t instanceof y) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new a(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0);
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new a(e.headers)), this.method = (r = e.method || this.method || "GET", o = r.toUpperCase(), l.indexOf(o) > -1 ? o : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n);
    }
    function p(t4) {
        var e = new FormData;
        return t4.trim().split("&").forEach(function(t) {
            if (t) {
                var r = t.split("="), o = r.shift().replace(/\+/g, " "), n = r.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(o), decodeURIComponent(n));
            }
        }), e;
    }
    function b(t, e) {
        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new a(e.headers), this.url = e.url || "", this._initBody(t);
    }
    y.prototype.clone = function() {
        return new y(this, {
            body: this._bodyInit
        });
    }, c.call(y.prototype), c.call(b.prototype), b.prototype.clone = function() {
        return new b(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new a(this.headers),
            url: this.url
        });
    }, b.error = function() {
        var t = new b(null, {
            status: 0,
            statusText: ""
        });
        return t.type = "error", t;
    };
    var m = [
        301,
        302,
        303,
        307,
        308
    ];
    b.redirect = function(t, e) {
        if (-1 === m.indexOf(e)) throw new RangeError("Invalid status code");
        return new b(null, {
            status: e,
            headers: {
                location: t
            }
        });
    }, t1.DOMException = self.DOMException;
    try {
        new t1.DOMException;
    } catch (e3) {
        t1.DOMException = function(t, e) {
            this.message = t, this.name = e;
            var r = Error(t);
            this.stack = r.stack;
        }, t1.DOMException.prototype = Object.create(Error.prototype), t1.DOMException.prototype.constructor = t1.DOMException;
    }
    function w(r3, o3) {
        return new Promise(function(n2, i) {
            var s = new y(r3, o3);
            if (s.signal && s.signal.aborted) return i(new t1.DOMException("Aborted", "AbortError"));
            var h = new XMLHttpRequest;
            function f() {
                h.abort();
            }
            h.onload = function() {
                var t5, e, r4 = {
                    status: h.status,
                    statusText: h.statusText,
                    headers: (t5 = h.getAllResponseHeaders() || "", e = new a, t5.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                        var r = t.split(":"), o = r.shift().trim();
                        if (o) {
                            var n = r.join(":").trim();
                            e.append(o, n);
                        }
                    }), e)
                };
                r4.url = "responseURL" in h ? h.responseURL : r4.headers.get("X-Request-URL");
                var o4 = "response" in h ? h.response : h.responseText;
                n2(new b(o4, r4));
            }, h.onerror = function() {
                i(new TypeError("Network request failed"));
            }, h.ontimeout = function() {
                i(new TypeError("Network request failed"));
            }, h.onabort = function() {
                i(new t1.DOMException("Aborted", "AbortError"));
            }, h.open(s.method, s.url, !0), "include" === s.credentials ? h.withCredentials = !0 : "omit" === s.credentials && (h.withCredentials = !1), "responseType" in h && e1.blob && (h.responseType = "blob"), s.headers.forEach(function(t, e) {
                h.setRequestHeader(e, t);
            }), s.signal && (s.signal.addEventListener("abort", f), h.onreadystatechange = function() {
                4 === h.readyState && s.signal.removeEventListener("abort", f);
            }), h.send(void 0 === s._bodyInit ? null : s._bodyInit);
        });
    }
    w.polyfill = !0, self.fetch || (self.fetch = w, self.Headers = a, self.Request = y, self.Response = b), t1.Headers = a, t1.Request = y, t1.Response = b, t1.fetch = w, Object.defineProperty(t1, "__esModule", {
        value: !0
    });
});

//# sourceMappingURL=work.fc999a6a.js.map
