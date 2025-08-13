import * as Jr from "react";
import ur from "react";
import { Slot as Kr } from "@radix-ui/react-slot";
var Ne = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function Xr() {
  if (tr) return we;
  tr = 1;
  var r = ur, a = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(v, c, y) {
    var g, E = {}, _ = null, V = null;
    y !== void 0 && (_ = "" + y), c.key !== void 0 && (_ = "" + c.key), c.ref !== void 0 && (V = c.ref);
    for (g in c) o.call(c, g) && !f.hasOwnProperty(g) && (E[g] = c[g]);
    if (v && v.defaultProps) for (g in c = v.defaultProps, c) E[g] === void 0 && (E[g] = c[g]);
    return { $$typeof: a, type: v, key: _, ref: V, props: E, _owner: d.current };
  }
  return we.Fragment = n, we.jsx = u, we.jsxs = u, we;
}
var ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Hr() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ur, a = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), v = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), A = Symbol.iterator, z = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = A && e[A] || e[z];
      return typeof t == "function" ? t : null;
    }
    var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), p = 1; p < t; p++)
          s[p - 1] = arguments[p];
        re("error", e, s);
      }
    }
    function re(e, t, s) {
      {
        var p = F.ReactDebugCurrentFrame, k = p.getStackAddendum();
        k !== "" && (t += "%s", s = s.concat([k]));
        var R = s.map(function(w) {
          return String(w);
        });
        R.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, R);
      }
    }
    var H = !1, Z = !1, q = !1, te = !1, b = !1, G;
    G = Symbol.for("react.module.reference");
    function Ee(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === f || b || e === d || e === y || e === g || te || e === V || H || Z || q || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === E || e.$$typeof === u || e.$$typeof === v || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === G || e.getModuleId !== void 0));
    }
    function _e(e, t, s) {
      var p = e.displayName;
      if (p)
        return p;
      var k = t.displayName || t.name || "";
      return k !== "" ? s + "(" + k + ")" : s;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function U(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case f:
          return "Profiler";
        case d:
          return "StrictMode";
        case y:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var t = e;
            return oe(t) + ".Consumer";
          case u:
            var s = e;
            return oe(s._context) + ".Provider";
          case c:
            return _e(e, e.render, "ForwardRef");
          case E:
            var p = e.displayName || null;
            return p !== null ? p : U(e.type) || "Memo";
          case _: {
            var k = e, R = k._payload, w = k._init;
            try {
              return U(w(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, $ = 0, L, B, m, ge, he, ve, le;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function M() {
      {
        if ($ === 0) {
          L = console.log, B = console.info, m = console.warn, ge = console.error, he = console.group, ve = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: j,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function ce() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, e, {
              value: L
            }),
            info: Y({}, e, {
              value: B
            }),
            warn: Y({}, e, {
              value: m
            }),
            error: Y({}, e, {
              value: ge
            }),
            group: Y({}, e, {
              value: he
            }),
            groupCollapsed: Y({}, e, {
              value: ve
            }),
            groupEnd: Y({}, e, {
              value: le
            })
          });
        }
        $ < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = F.ReactCurrentDispatcher, C;
    function ne(e, t, s) {
      {
        if (C === void 0)
          try {
            throw Error();
          } catch (k) {
            var p = k.stack.trim().match(/\n( *(at )?)/);
            C = p && p[1] || "";
          }
        return `
` + C + e;
      }
    }
    var Q = !1, J;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ye();
    }
    function ae(e, t) {
      if (!e || Q)
        return "";
      {
        var s = J.get(e);
        if (s !== void 0)
          return s;
      }
      var p;
      Q = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = de.current, de.current = null, M();
      try {
        if (t) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (N) {
              p = N;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (N) {
              p = N;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            p = N;
          }
          e();
        }
      } catch (N) {
        if (N && p && typeof N.stack == "string") {
          for (var x = N.stack.split(`
`), I = p.stack.split(`
`), S = x.length - 1, P = I.length - 1; S >= 1 && P >= 0 && x[S] !== I[P]; )
            P--;
          for (; S >= 1 && P >= 0; S--, P--)
            if (x[S] !== I[P]) {
              if (S !== 1 || P !== 1)
                do
                  if (S--, P--, P < 0 || x[S] !== I[P]) {
                    var W = `
` + x[S].replace(" at new ", " at ");
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, W), W;
                  }
                while (S >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        Q = !1, de.current = R, ce(), Error.prepareStackTrace = k;
      }
      var fe = e ? e.displayName || e.name : "", se = fe ? ne(fe) : "";
      return typeof e == "function" && J.set(e, se), se;
    }
    function Er(e, t, s) {
      return ae(e, !1);
    }
    function _r(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ce(e, t, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ae(e, _r(e));
      if (typeof e == "string")
        return ne(e);
      switch (e) {
        case y:
          return ne("Suspense");
        case g:
          return ne("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Er(e.render);
          case E:
            return Ce(e.type, t, s);
          case _: {
            var p = e, k = p._payload, R = p._init;
            try {
              return Ce(R(k), t, s);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, Le = {}, We = F.ReactDebugCurrentFrame;
    function Se(e) {
      if (e) {
        var t = e._owner, s = Ce(e.type, e._source, t ? t.type : null);
        We.setExtraStackFrame(s);
      } else
        We.setExtraStackFrame(null);
    }
    function Cr(e, t, s, p, k) {
      {
        var R = Function.call.bind(xe);
        for (var w in e)
          if (R(e, w)) {
            var x = void 0;
            try {
              if (typeof e[w] != "function") {
                var I = Error((p || "React class") + ": " + s + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              x = e[w](t, w, p, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              x = S;
            }
            x && !(x instanceof Error) && (Se(k), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", s, w, typeof x), Se(null)), x instanceof Error && !(x.message in Le) && (Le[x.message] = !0, Se(k), T("Failed %s type: %s", s, x.message), Se(null));
          }
      }
    }
    var Sr = Array.isArray;
    function Oe(e) {
      return Sr(e);
    }
    function Tr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, s = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function Pr(e) {
      try {
        return Ue(e), !1;
      } catch {
        return !0;
      }
    }
    function Ue(e) {
      return "" + e;
    }
    function Ye(e) {
      if (Pr(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), Ue(e);
    }
    var Be = F.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qe, Je;
    function jr(e) {
      if (xe.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ar(e) {
      if (xe.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function zr(e, t) {
      typeof e.ref == "string" && Be.current;
    }
    function Mr(e, t) {
      {
        var s = function() {
          qe || (qe = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Ir(e, t) {
      {
        var s = function() {
          Je || (Je = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Fr = function(e, t, s, p, k, R, w) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: s,
        props: w,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function Nr(e, t, s, p, k) {
      {
        var R, w = {}, x = null, I = null;
        s !== void 0 && (Ye(s), x = "" + s), Ar(t) && (Ye(t.key), x = "" + t.key), jr(t) && (I = t.ref, zr(t, k));
        for (R in t)
          xe.call(t, R) && !Or.hasOwnProperty(R) && (w[R] = t[R]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (R in S)
            w[R] === void 0 && (w[R] = S[R]);
        }
        if (x || I) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          x && Mr(w, P), I && Ir(w, P);
        }
        return Fr(e, x, I, k, p, Be.current, w);
      }
    }
    var je = F.ReactCurrentOwner, Ke = F.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var t = e._owner, s = Ce(e.type, e._source, t ? t.type : null);
        Ke.setExtraStackFrame(s);
      } else
        Ke.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function ze(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Xe() {
      {
        if (je.current) {
          var e = U(je.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Vr(e) {
      return "";
    }
    var He = {};
    function Dr(e) {
      {
        var t = Xe();
        if (!t) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (t = `

Check the top-level render call using <` + s + ">.");
        }
        return t;
      }
    }
    function Ze(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = Dr(t);
        if (He[s])
          return;
        He[s] = !0;
        var p = "";
        e && e._owner && e._owner !== je.current && (p = " It was passed a child from " + U(e._owner.type) + "."), ue(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, p), ue(null);
      }
    }
    function Qe(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Oe(e))
          for (var s = 0; s < e.length; s++) {
            var p = e[s];
            ze(p) && Ze(p, t);
          }
        else if (ze(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var k = D(e);
          if (typeof k == "function" && k !== e.entries)
            for (var R = k.call(e), w; !(w = R.next()).done; )
              ze(w.value) && Ze(w.value, t);
        }
      }
    }
    function Gr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var s;
        if (typeof t == "function")
          s = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === E))
          s = t.propTypes;
        else
          return;
        if (s) {
          var p = U(t);
          Cr(s, e.props, "prop", p, e);
        } else if (t.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var k = U(t);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $r(e) {
      {
        for (var t = Object.keys(e.props), s = 0; s < t.length; s++) {
          var p = t[s];
          if (p !== "children" && p !== "key") {
            ue(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ue(null);
            break;
          }
        }
        e.ref !== null && (ue(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    var er = {};
    function rr(e, t, s, p, k, R) {
      {
        var w = Ee(e);
        if (!w) {
          var x = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = Vr();
          I ? x += I : x += Xe();
          var S;
          e === null ? S = "null" : Oe(e) ? S = "array" : e !== void 0 && e.$$typeof === a ? (S = "<" + (U(e.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, x);
        }
        var P = Nr(e, t, s, k, R);
        if (P == null)
          return P;
        if (w) {
          var W = t.children;
          if (W !== void 0)
            if (p)
              if (Oe(W)) {
                for (var fe = 0; fe < W.length; fe++)
                  Qe(W[fe], e);
                Object.freeze && Object.freeze(W);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(W, e);
        }
        if (xe.call(t, "key")) {
          var se = U(e), N = Object.keys(t).filter(function(qr) {
            return qr !== "key";
          }), Me = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[se + Me]) {
            var Br = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Me, se, Br, se), er[se + Me] = !0;
          }
        }
        return e === o ? $r(P) : Gr(P), P;
      }
    }
    function Lr(e, t, s) {
      return rr(e, t, s, !0);
    }
    function Wr(e, t, s) {
      return rr(e, t, s, !1);
    }
    var Ur = Wr, Yr = Lr;
    ke.Fragment = o, ke.jsx = Ur, ke.jsxs = Yr;
  }()), ke;
}
process.env.NODE_ENV === "production" ? Ne.exports = Xr() : Ne.exports = Hr();
var X = Ne.exports;
function fr(r) {
  var a, n, o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var d = r.length;
    for (a = 0; a < d; a++) r[a] && (n = fr(r[a])) && (o && (o += " "), o += n);
  } else for (n in r) r[n] && (o && (o += " "), o += n);
  return o;
}
function mr() {
  for (var r, a, n = 0, o = "", d = arguments.length; n < d; n++) (r = arguments[n]) && (a = fr(r)) && (o && (o += " "), o += a);
  return o;
}
const nr = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, ar = mr, Zr = (r, a) => (n) => {
  var o;
  if ((a == null ? void 0 : a.variants) == null) return ar(r, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: d, defaultVariants: f } = a, u = Object.keys(d).map((y) => {
    const g = n == null ? void 0 : n[y], E = f == null ? void 0 : f[y];
    if (g === null) return null;
    const _ = nr(g) || nr(E);
    return d[y][_];
  }), v = n && Object.entries(n).reduce((y, g) => {
    let [E, _] = g;
    return _ === void 0 || (y[E] = _), y;
  }, {}), c = a == null || (o = a.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((y, g) => {
    let { class: E, className: _, ...V } = g;
    return Object.entries(V).every((A) => {
      let [z, D] = A;
      return Array.isArray(D) ? D.includes({
        ...f,
        ...v
      }[z]) : {
        ...f,
        ...v
      }[z] === D;
    }) ? [
      ...y,
      E,
      _
    ] : y;
  }, []);
  return ar(r, u, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, $e = "-", Qr = (r) => {
  const a = rt(r), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = r;
  return {
    getClassGroupId: (u) => {
      const v = u.split($e);
      return v[0] === "" && v.length !== 1 && v.shift(), pr(v, a) || et(u);
    },
    getConflictingClassGroupIds: (u, v) => {
      const c = n[u] || [];
      return v && o[u] ? [...c, ...o[u]] : c;
    }
  };
}, pr = (r, a) => {
  var u;
  if (r.length === 0)
    return a.classGroupId;
  const n = r[0], o = a.nextPart.get(n), d = o ? pr(r.slice(1), o) : void 0;
  if (d)
    return d;
  if (a.validators.length === 0)
    return;
  const f = r.join($e);
  return (u = a.validators.find(({
    validator: v
  }) => v(f))) == null ? void 0 : u.classGroupId;
}, sr = /^\[(.+)\]$/, et = (r) => {
  if (sr.test(r)) {
    const a = sr.exec(r)[1], n = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, rt = (r) => {
  const {
    theme: a,
    classGroups: n
  } = r, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const d in n)
    Ve(n[d], o, d, a);
  return o;
}, Ve = (r, a, n, o) => {
  r.forEach((d) => {
    if (typeof d == "string") {
      const f = d === "" ? a : ir(a, d);
      f.classGroupId = n;
      return;
    }
    if (typeof d == "function") {
      if (tt(d)) {
        Ve(d(o), a, n, o);
        return;
      }
      a.validators.push({
        validator: d,
        classGroupId: n
      });
      return;
    }
    Object.entries(d).forEach(([f, u]) => {
      Ve(u, ir(a, f), n, o);
    });
  });
}, ir = (r, a) => {
  let n = r;
  return a.split($e).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, tt = (r) => r.isThemeGetter, ot = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const d = (f, u) => {
    n.set(f, u), a++, a > r && (a = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let u = n.get(f);
      if (u !== void 0)
        return u;
      if ((u = o.get(f)) !== void 0)
        return d(f, u), u;
    },
    set(f, u) {
      n.has(f) ? n.set(f, u) : d(f, u);
    }
  };
}, De = "!", Ge = ":", nt = Ge.length, at = (r) => {
  const {
    prefix: a,
    experimentalParseClassName: n
  } = r;
  let o = (d) => {
    const f = [];
    let u = 0, v = 0, c = 0, y;
    for (let A = 0; A < d.length; A++) {
      let z = d[A];
      if (u === 0 && v === 0) {
        if (z === Ge) {
          f.push(d.slice(c, A)), c = A + nt;
          continue;
        }
        if (z === "/") {
          y = A;
          continue;
        }
      }
      z === "[" ? u++ : z === "]" ? u-- : z === "(" ? v++ : z === ")" && v--;
    }
    const g = f.length === 0 ? d : d.substring(c), E = st(g), _ = E !== g, V = y && y > c ? y - c : void 0;
    return {
      modifiers: f,
      hasImportantModifier: _,
      baseClassName: E,
      maybePostfixModifierPosition: V
    };
  };
  if (a) {
    const d = a + Ge, f = o;
    o = (u) => u.startsWith(d) ? f(u.substring(d.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: u,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const d = o;
    o = (f) => n({
      className: f,
      parseClassName: d
    });
  }
  return o;
}, st = (r) => r.endsWith(De) ? r.substring(0, r.length - 1) : r.startsWith(De) ? r.substring(1) : r, it = (r) => {
  const a = Object.fromEntries(r.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const d = [];
    let f = [];
    return o.forEach((u) => {
      u[0] === "[" || a[u] ? (d.push(...f.sort(), u), f = []) : f.push(u);
    }), d.push(...f.sort()), d;
  };
}, lt = (r) => ({
  cache: ot(r.cacheSize),
  parseClassName: at(r),
  sortModifiers: it(r),
  ...Qr(r)
}), ct = /\s+/, dt = (r, a) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: d,
    sortModifiers: f
  } = a, u = [], v = r.trim().split(ct);
  let c = "";
  for (let y = v.length - 1; y >= 0; y -= 1) {
    const g = v[y], {
      isExternal: E,
      modifiers: _,
      hasImportantModifier: V,
      baseClassName: A,
      maybePostfixModifierPosition: z
    } = n(g);
    if (E) {
      c = g + (c.length > 0 ? " " + c : c);
      continue;
    }
    let D = !!z, F = o(D ? A.substring(0, z) : A);
    if (!F) {
      if (!D) {
        c = g + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (F = o(A), !F) {
        c = g + (c.length > 0 ? " " + c : c);
        continue;
      }
      D = !1;
    }
    const T = f(_).join(":"), re = V ? T + De : T, H = re + F;
    if (u.includes(H))
      continue;
    u.push(H);
    const Z = d(F, D);
    for (let q = 0; q < Z.length; ++q) {
      const te = Z[q];
      u.push(re + te);
    }
    c = g + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function ut() {
  let r = 0, a, n, o = "";
  for (; r < arguments.length; )
    (a = arguments[r++]) && (n = br(a)) && (o && (o += " "), o += n);
  return o;
}
const br = (r) => {
  if (typeof r == "string")
    return r;
  let a, n = "";
  for (let o = 0; o < r.length; o++)
    r[o] && (a = br(r[o])) && (n && (n += " "), n += a);
  return n;
};
function ft(r, ...a) {
  let n, o, d, f = u;
  function u(c) {
    const y = a.reduce((g, E) => E(g), r());
    return n = lt(y), o = n.cache.get, d = n.cache.set, f = v, v(c);
  }
  function v(c) {
    const y = o(c);
    if (y)
      return y;
    const g = dt(c, n);
    return d(c, g), g;
  }
  return function() {
    return f(ut.apply(null, arguments));
  };
}
const O = (r) => {
  const a = (n) => n[r] || [];
  return a.isThemeGetter = !0, a;
}, gr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, hr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, mt = /^\d+\/\d+$/, pt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, bt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ht = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, me = (r) => mt.test(r), h = (r) => !!r && !Number.isNaN(Number(r)), ee = (r) => !!r && Number.isInteger(Number(r)), Ie = (r) => r.endsWith("%") && h(r.slice(0, -1)), K = (r) => pt.test(r), yt = () => !0, xt = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  bt.test(r) && !gt.test(r)
), vr = () => !1, wt = (r) => ht.test(r), kt = (r) => vt.test(r), Rt = (r) => !i(r) && !l(r), Et = (r) => pe(r, wr, vr), i = (r) => gr.test(r), ie = (r) => pe(r, kr, xt), Fe = (r) => pe(r, Pt, h), lr = (r) => pe(r, yr, vr), _t = (r) => pe(r, xr, kt), Te = (r) => pe(r, Rr, wt), l = (r) => hr.test(r), Re = (r) => be(r, kr), Ct = (r) => be(r, Ot), cr = (r) => be(r, yr), St = (r) => be(r, wr), Tt = (r) => be(r, xr), Pe = (r) => be(r, Rr, !0), pe = (r, a, n) => {
  const o = gr.exec(r);
  return o ? o[1] ? a(o[1]) : n(o[2]) : !1;
}, be = (r, a, n = !1) => {
  const o = hr.exec(r);
  return o ? o[1] ? a(o[1]) : n : !1;
}, yr = (r) => r === "position" || r === "percentage", xr = (r) => r === "image" || r === "url", wr = (r) => r === "length" || r === "size" || r === "bg-size", kr = (r) => r === "length", Pt = (r) => r === "number", Ot = (r) => r === "family-name", Rr = (r) => r === "shadow", jt = () => {
  const r = O("color"), a = O("font"), n = O("text"), o = O("font-weight"), d = O("tracking"), f = O("leading"), u = O("breakpoint"), v = O("container"), c = O("spacing"), y = O("radius"), g = O("shadow"), E = O("inset-shadow"), _ = O("text-shadow"), V = O("drop-shadow"), A = O("blur"), z = O("perspective"), D = O("aspect"), F = O("ease"), T = O("animate"), re = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], Z = () => [...H(), l, i], q = () => ["auto", "hidden", "clip", "visible", "scroll"], te = () => ["auto", "contain", "none"], b = () => [l, i, c], G = () => [me, "full", "auto", ...b()], Ee = () => [ee, "none", "subgrid", l, i], _e = () => ["auto", {
    span: ["full", ee, l, i]
  }, ee, l, i], oe = () => [ee, "auto", l, i], U = () => ["auto", "min", "max", "fr", l, i], Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...b()], B = () => [me, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], m = () => [r, l, i], ge = () => [...H(), cr, lr, {
    position: [l, i]
  }], he = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ve = () => ["auto", "cover", "contain", St, Et, {
    size: [l, i]
  }], le = () => [Ie, Re, ie], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    y,
    l,
    i
  ], M = () => ["", h, Re, ie], ce = () => ["solid", "dashed", "dotted", "double"], de = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], C = () => [h, Ie, cr, lr], ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    A,
    l,
    i
  ], Q = () => ["none", h, l, i], J = () => ["none", h, l, i], ye = () => [h, l, i], ae = () => [me, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [K],
      breakpoint: [K],
      color: [yt],
      container: [K],
      "drop-shadow": [K],
      ease: ["in", "out", "in-out"],
      font: [Rt],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [K],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [K],
      shadow: [K],
      spacing: ["px", h],
      text: [K],
      "text-shadow": [K],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", me, i, l, D]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [h, i, l, v]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": re()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": re()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: Z()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: te()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": te()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": te()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: G()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": G()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": G()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: G()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: G()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: G()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: G()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: G()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: G()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [ee, "auto", l, i]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [me, "full", "auto", v, ...b()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [h, me, "auto", "initial", "none", i]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", h, l, i]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", h, l, i]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ee, "first", "last", "none", l, i]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Ee()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: _e()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": oe()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": oe()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Ee()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: _e()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": oe()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": oe()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": U()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": U()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Y(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...$(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...$()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Y()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Y()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...$(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...$()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: L()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: L()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: L()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: L()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: L()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: L()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: L()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: L()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: L()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": b()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": b()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: B()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [v, "screen", ...B()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          v,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...B()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          v,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [u]
          },
          ...B()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...B()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...B()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...B()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Re, ie]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, l, Fe]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ie, i]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ct, i, a]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [d, l, i]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [h, "none", l, Fe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", l, i]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", l, i]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: m()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: m()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [h, "from-font", "auto", l, ie]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: m()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [h, "auto", l, i]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: b()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l, i]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", l, i]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ge()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: he()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ve()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ee, l, i],
          radial: ["", l, i],
          conic: [ee, l, i]
        }, Tt, _t]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: m()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: le()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: le()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: le()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: m()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: m()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: m()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: j()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": j()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": j()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": j()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": j()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": j()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": j()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": j()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": j()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": j()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": j()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": j()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": j()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": j()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": j()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: M()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": M()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": M()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": M()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": M()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": M()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": M()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": M()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": M()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": M()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": M()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ce(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ce(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: m()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": m()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": m()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": m()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": m()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": m()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": m()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": m()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": m()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: m()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ce(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [h, l, i]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", h, Re, ie]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: m()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          Pe,
          Te
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: m()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", E, Pe, Te]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": m()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: M()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: m()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [h, ie]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": m()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": M()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": m()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", _, Pe, Te]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": m()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [h, l, i]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...de(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": de()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [h]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": C()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": m()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": m()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": C()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": m()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": m()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": C()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": m()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": m()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": C()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": m()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": m()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": C()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": m()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": m()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": C()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": m()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": m()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": C()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": m()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": m()
      }],
      "mask-image-radial": [{
        "mask-radial": [l, i]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": m()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": m()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": H()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [h]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": C()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": m()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": m()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ge()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: he()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ve()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", l, i]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          l,
          i
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ne()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [h, l, i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [h, l, i]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          V,
          Pe,
          Te
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": m()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", h, l, i]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [h, l, i]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", h, l, i]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [h, l, i]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", h, l, i]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          l,
          i
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ne()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [h, l, i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [h, l, i]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", h, l, i]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [h, l, i]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", h, l, i]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [h, l, i]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [h, l, i]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", h, l, i]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", l, i]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [h, "initial", l, i]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", F, l, i]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [h, l, i]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", T, l, i]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [z, l, i]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Z()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: J()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": J()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": J()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": J()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ye()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ye()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ye()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [l, i, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Z()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ae()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ae()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ae()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ae()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: m()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: m()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l, i]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", l, i]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...m()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [h, Re, ie, Fe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...m()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, At = /* @__PURE__ */ ft(jt);
function dr(...r) {
  return At(mr(r));
}
const zt = () => /* @__PURE__ */ X.jsxs(
  "svg",
  {
    className: "animate-spin h-4 w-4 text-current",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ X.jsx(
        "circle",
        {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ X.jsx(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        }
      )
    ]
  }
), Mt = Zr(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-green-500 text-white shadow-sm hover:bg-green-600",
        warning: "bg-yellow-500 text-black shadow-sm hover:bg-yellow-600"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-9 px-4 py-2",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), It = Jr.forwardRef(
  ({
    className: r,
    variant: a,
    size: n,
    loading: o = !1,
    asChild: d = !1,
    leftIcon: f,
    rightIcon: u,
    children: v,
    badgeContent: c,
    badgeVariant: y = "number",
    ...g
  }, E) => {
    const _ = d ? Kr : "button";
    return /* @__PURE__ */ X.jsxs("div", { className: "relative inline-block", children: [
      /* @__PURE__ */ X.jsxs(
        _,
        {
          className: dr(Mt({ variant: a, size: n, className: r })),
          ref: E,
          disabled: o || g.disabled,
          ...g,
          children: [
            o && /* @__PURE__ */ X.jsx(zt, {}),
            !o && f && /* @__PURE__ */ X.jsx("span", { className: "flex items-center", children: f }),
            o ? "Loading..." : v,
            !o && u && /* @__PURE__ */ X.jsx("span", { className: "flex items-center", children: u })
          ]
        }
      ),
      c !== void 0 && /* @__PURE__ */ X.jsx(
        "span",
        {
          className: dr(
            "absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full bg-red-500 text-white",
            y === "dot" ? "h-3 w-3" : "min-w-[18px] h-[18px] px-1 text-xs font-bold"
          ),
          children: y === "number" && c
        }
      )
    ] });
  }
);
It.displayName = "Button";
export {
  It as Button,
  It as buttonVariants
};
