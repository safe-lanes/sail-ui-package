import * as ue from "react";
import F, { useState as Ce, useRef as Me, useLayoutEffect as Mt, useEffect as Ue, useSyncExternalStore as Er, isValidElement as Ye, cloneElement as ut, useCallback as ye } from "react";
import { Slot as Cr } from "@radix-ui/react-slot";
var at = { exports: {} }, ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function jr() {
  if (Rt) return ze;
  Rt = 1;
  var e = F, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(m, i, p) {
    var g, T = {}, N = null, P = null;
    p !== void 0 && (N = "" + p), i.key !== void 0 && (N = "" + i.key), i.ref !== void 0 && (P = i.ref);
    for (g in i) a.call(i, g) && !l.hasOwnProperty(g) && (T[g] = i[g]);
    if (m && m.defaultProps) for (g in i = m.defaultProps, i) T[g] === void 0 && (T[g] = i[g]);
    return { $$typeof: r, type: m, key: N, ref: P, props: T, _owner: n.current };
  }
  return ze.Fragment = o, ze.jsx = s, ze.jsxs = s, ze;
}
var Ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function Rr() {
  return Nt || (Nt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = F, r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), m = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), O = Symbol.iterator, C = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var d = O && t[O] || t[C];
      return typeof d == "function" ? d : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(t) {
      {
        for (var d = arguments.length, b = new Array(d > 1 ? d - 1 : 0), E = 1; E < d; E++)
          b[E - 1] = arguments[E];
        _("error", t, b);
      }
    }
    function _(t, d, b) {
      {
        var E = k.ReactDebugCurrentFrame, M = E.getStackAddendum();
        M !== "" && (d += "%s", b = b.concat([M]));
        var $ = b.map(function(z) {
          return String(z);
        });
        $.unshift("Warning: " + d), Function.prototype.apply.call(console[t], console, $);
      }
    }
    var j = !1, L = !1, u = !1, x = !1, f = !1, A;
    A = Symbol.for("react.module.reference");
    function X(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === l || f || t === n || t === p || t === g || x || t === P || j || L || u || typeof t == "object" && t !== null && (t.$$typeof === N || t.$$typeof === T || t.$$typeof === s || t.$$typeof === m || t.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === A || t.getModuleId !== void 0));
    }
    function B(t, d, b) {
      var E = t.displayName;
      if (E)
        return E;
      var M = d.displayName || d.name || "";
      return M !== "" ? b + "(" + M + ")" : b;
    }
    function K(t) {
      return t.displayName || "Context";
    }
    function H(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case o:
          return "Portal";
        case l:
          return "Profiler";
        case n:
          return "StrictMode";
        case p:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case m:
            var d = t;
            return K(d) + ".Consumer";
          case s:
            var b = t;
            return K(b._context) + ".Provider";
          case i:
            return B(t, t.render, "ForwardRef");
          case T:
            var E = t.displayName || null;
            return E !== null ? E : H(t.type) || "Memo";
          case N: {
            var M = t, $ = M._payload, z = M._init;
            try {
              return H(z($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, J = 0, Q, re, w, Ne, Ie, Pe, ve;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function Z() {
      {
        if (J === 0) {
          Q = console.log, re = console.info, w = console.warn, Ne = console.error, Ie = console.group, Pe = console.groupCollapsed, ve = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        J++;
      }
    }
    function xe() {
      {
        if (J--, J === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, t, {
              value: Q
            }),
            info: ae({}, t, {
              value: re
            }),
            warn: ae({}, t, {
              value: w
            }),
            error: ae({}, t, {
              value: Ne
            }),
            group: ae({}, t, {
              value: Ie
            }),
            groupCollapsed: ae({}, t, {
              value: Pe
            }),
            groupEnd: ae({}, t, {
              value: ve
            })
          });
        }
        J < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = k.ReactCurrentDispatcher, V;
    function me(t, d, b) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (M) {
            var E = M.stack.trim().match(/\n( *(at )?)/);
            V = E && E[1] || "";
          }
        return `
` + V + t;
      }
    }
    var de = !1, ne;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Se();
    }
    function pe(t, d) {
      if (!t || de)
        return "";
      {
        var b = ne.get(t);
        if (b !== void 0)
          return b;
      }
      var E;
      de = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = _e.current, _e.current = null, Z();
      try {
        if (d) {
          var z = function() {
            throw Error();
          };
          if (Object.defineProperty(z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(z, []);
            } catch (oe) {
              E = oe;
            }
            Reflect.construct(t, [], z);
          } else {
            try {
              z.call();
            } catch (oe) {
              E = oe;
            }
            t.call(z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (oe) {
            E = oe;
          }
          t();
        }
      } catch (oe) {
        if (oe && E && typeof oe.stack == "string") {
          for (var S = oe.stack.split(`
`), ee = E.stack.split(`
`), G = S.length - 1, W = ee.length - 1; G >= 1 && W >= 0 && S[G] !== ee[W]; )
            W--;
          for (; G >= 1 && W >= 0; G--, W--)
            if (S[G] !== ee[W]) {
              if (G !== 1 || W !== 1)
                do
                  if (G--, W--, W < 0 || S[G] !== ee[W]) {
                    var se = `
` + S[G].replace(" at new ", " at ");
                    return t.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", t.displayName)), typeof t == "function" && ne.set(t, se), se;
                  }
                while (G >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        de = !1, _e.current = $, xe(), Error.prepareStackTrace = M;
      }
      var ke = t ? t.displayName || t.name : "", ge = ke ? me(ke) : "";
      return typeof t == "function" && ne.set(t, ge), ge;
    }
    function tr(t, d, b) {
      return pe(t, !1);
    }
    function rr(t) {
      var d = t.prototype;
      return !!(d && d.isReactComponent);
    }
    function Be(t, d, b) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return pe(t, rr(t));
      if (typeof t == "string")
        return me(t);
      switch (t) {
        case p:
          return me("Suspense");
        case g:
          return me("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case i:
            return tr(t.render);
          case T:
            return Be(t.type, d, b);
          case N: {
            var E = t, M = E._payload, $ = E._init;
            try {
              return Be($(M), d, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, pt = {}, gt = k.ReactDebugCurrentFrame;
    function Ve(t) {
      if (t) {
        var d = t._owner, b = Be(t.type, t._source, d ? d.type : null);
        gt.setExtraStackFrame(b);
      } else
        gt.setExtraStackFrame(null);
    }
    function or(t, d, b, E, M) {
      {
        var $ = Function.call.bind(Oe);
        for (var z in t)
          if ($(t, z)) {
            var S = void 0;
            try {
              if (typeof t[z] != "function") {
                var ee = Error((E || "React class") + ": " + b + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ee.name = "Invariant Violation", ee;
              }
              S = t[z](d, z, E, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              S = G;
            }
            S && !(S instanceof Error) && (Ve(M), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", b, z, typeof S), Ve(null)), S instanceof Error && !(S.message in pt) && (pt[S.message] = !0, Ve(M), y("Failed %s type: %s", b, S.message), Ve(null));
          }
      }
    }
    var ar = Array.isArray;
    function Ke(t) {
      return ar(t);
    }
    function sr(t) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, b = d && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return b;
      }
    }
    function nr(t) {
      try {
        return yt(t), !1;
      } catch {
        return !0;
      }
    }
    function yt(t) {
      return "" + t;
    }
    function bt(t) {
      if (nr(t))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(t)), yt(t);
    }
    var ht = k.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vt, xt;
    function lr(t) {
      if (Oe.call(t, "ref")) {
        var d = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function cr(t) {
      if (Oe.call(t, "key")) {
        var d = Object.getOwnPropertyDescriptor(t, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function dr(t, d) {
      typeof t.ref == "string" && ht.current;
    }
    function fr(t, d) {
      {
        var b = function() {
          vt || (vt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        b.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function ur(t, d) {
      {
        var b = function() {
          xt || (xt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        b.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var mr = function(t, d, b, E, M, $, z) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: d,
        ref: b,
        props: z,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function pr(t, d, b, E, M) {
      {
        var $, z = {}, S = null, ee = null;
        b !== void 0 && (bt(b), S = "" + b), cr(d) && (bt(d.key), S = "" + d.key), lr(d) && (ee = d.ref, dr(d, M));
        for ($ in d)
          Oe.call(d, $) && !ir.hasOwnProperty($) && (z[$] = d[$]);
        if (t && t.defaultProps) {
          var G = t.defaultProps;
          for ($ in G)
            z[$] === void 0 && (z[$] = G[$]);
        }
        if (S || ee) {
          var W = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          S && fr(z, W), ee && ur(z, W);
        }
        return mr(t, S, ee, M, E, ht.current, z);
      }
    }
    var Je = k.ReactCurrentOwner, _t = k.ReactDebugCurrentFrame;
    function we(t) {
      if (t) {
        var d = t._owner, b = Be(t.type, t._source, d ? d.type : null);
        _t.setExtraStackFrame(b);
      } else
        _t.setExtraStackFrame(null);
    }
    var Qe;
    Qe = !1;
    function Ze(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function wt() {
      {
        if (Je.current) {
          var t = H(Je.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function gr(t) {
      return "";
    }
    var kt = {};
    function yr(t) {
      {
        var d = wt();
        if (!d) {
          var b = typeof t == "string" ? t : t.displayName || t.name;
          b && (d = `

Check the top-level render call using <` + b + ">.");
        }
        return d;
      }
    }
    function Tt(t, d) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var b = yr(d);
        if (kt[b])
          return;
        kt[b] = !0;
        var E = "";
        t && t._owner && t._owner !== Je.current && (E = " It was passed a child from " + H(t._owner.type) + "."), we(t), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, E), we(null);
      }
    }
    function Et(t, d) {
      {
        if (typeof t != "object")
          return;
        if (Ke(t))
          for (var b = 0; b < t.length; b++) {
            var E = t[b];
            Ze(E) && Tt(E, d);
          }
        else if (Ze(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var M = R(t);
          if (typeof M == "function" && M !== t.entries)
            for (var $ = M.call(t), z; !(z = $.next()).done; )
              Ze(z.value) && Tt(z.value, d);
        }
      }
    }
    function br(t) {
      {
        var d = t.type;
        if (d == null || typeof d == "string")
          return;
        var b;
        if (typeof d == "function")
          b = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === T))
          b = d.propTypes;
        else
          return;
        if (b) {
          var E = H(d);
          or(b, t.props, "prop", E, t);
        } else if (d.PropTypes !== void 0 && !Qe) {
          Qe = !0;
          var M = H(d);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(t) {
      {
        for (var d = Object.keys(t.props), b = 0; b < d.length; b++) {
          var E = d[b];
          if (E !== "children" && E !== "key") {
            we(t), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), we(null);
            break;
          }
        }
        t.ref !== null && (we(t), y("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    var Ct = {};
    function jt(t, d, b, E, M, $) {
      {
        var z = X(t);
        if (!z) {
          var S = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ee = gr();
          ee ? S += ee : S += wt();
          var G;
          t === null ? G = "null" : Ke(t) ? G = "array" : t !== void 0 && t.$$typeof === r ? (G = "<" + (H(t.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : G = typeof t, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, S);
        }
        var W = pr(t, d, b, M, $);
        if (W == null)
          return W;
        if (z) {
          var se = d.children;
          if (se !== void 0)
            if (E)
              if (Ke(se)) {
                for (var ke = 0; ke < se.length; ke++)
                  Et(se[ke], t);
                Object.freeze && Object.freeze(se);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Et(se, t);
        }
        if (Oe.call(d, "key")) {
          var ge = H(t), oe = Object.keys(d).filter(function(Tr) {
            return Tr !== "key";
          }), et = oe.length > 0 ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ct[ge + et]) {
            var kr = oe.length > 0 ? "{" + oe.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, et, ge, kr, ge), Ct[ge + et] = !0;
          }
        }
        return t === a ? hr(W) : br(W), W;
      }
    }
    function vr(t, d, b) {
      return jt(t, d, b, !0);
    }
    function xr(t, d, b) {
      return jt(t, d, b, !1);
    }
    var _r = xr, wr = vr;
    Ae.Fragment = a, Ae.jsx = _r, Ae.jsxs = wr;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? at.exports = jr() : at.exports = Rr();
var c = at.exports;
function Dt(e) {
  var r, o, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (r = 0; r < n; r++) e[r] && (o = Dt(e[r])) && (a && (a += " "), a += o);
  } else for (o in e) e[o] && (a && (a += " "), a += o);
  return a;
}
function q() {
  for (var e, r, o = 0, a = "", n = arguments.length; o < n; o++) (e = arguments[o]) && (r = Dt(e)) && (a && (a += " "), a += r);
  return a;
}
const It = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Pt = q, Nr = (e, r) => (o) => {
  var a;
  if ((r == null ? void 0 : r.variants) == null) return Pt(e, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: n, defaultVariants: l } = r, s = Object.keys(n).map((p) => {
    const g = o == null ? void 0 : o[p], T = l == null ? void 0 : l[p];
    if (g === null) return null;
    const N = It(g) || It(T);
    return n[p][N];
  }), m = o && Object.entries(o).reduce((p, g) => {
    let [T, N] = g;
    return N === void 0 || (p[T] = N), p;
  }, {}), i = r == null || (a = r.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((p, g) => {
    let { class: T, className: N, ...P } = g;
    return Object.entries(P).every((O) => {
      let [C, R] = O;
      return Array.isArray(R) ? R.includes({
        ...l,
        ...m
      }[C]) : {
        ...l,
        ...m
      }[C] === R;
    }) ? [
      ...p,
      T,
      N
    ] : p;
  }, []);
  return Pt(e, s, i, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, mt = "-", Ir = (e) => {
  const r = Sr(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (s) => {
      const m = s.split(mt);
      return m[0] === "" && m.length !== 1 && m.shift(), $t(m, r) || Pr(s);
    },
    getConflictingClassGroupIds: (s, m) => {
      const i = o[s] || [];
      return m && a[s] ? [...i, ...a[s]] : i;
    }
  };
}, $t = (e, r) => {
  var s;
  if (e.length === 0)
    return r.classGroupId;
  const o = e[0], a = r.nextPart.get(o), n = a ? $t(e.slice(1), a) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const l = e.join(mt);
  return (s = r.validators.find(({
    validator: m
  }) => m(l))) == null ? void 0 : s.classGroupId;
}, St = /^\[(.+)\]$/, Pr = (e) => {
  if (St.test(e)) {
    const r = St.exec(e)[1], o = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Sr = (e) => {
  const {
    theme: r,
    classGroups: o
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in o)
    st(o[n], a, n, r);
  return a;
}, st = (e, r, o, a) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? r : Ot(r, n);
      l.classGroupId = o;
      return;
    }
    if (typeof n == "function") {
      if (Or(n)) {
        st(n(a), r, o, a);
        return;
      }
      r.validators.push({
        validator: n,
        classGroupId: o
      });
      return;
    }
    Object.entries(n).forEach(([l, s]) => {
      st(s, Ot(r, l), o, a);
    });
  });
}, Ot = (e, r) => {
  let o = e;
  return r.split(mt).forEach((a) => {
    o.nextPart.has(a) || o.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(a);
  }), o;
}, Or = (e) => e.isThemeGetter, zr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const n = (l, s) => {
    o.set(l, s), r++, r > e && (r = 0, a = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let s = o.get(l);
      if (s !== void 0)
        return s;
      if ((s = a.get(l)) !== void 0)
        return n(l, s), s;
    },
    set(l, s) {
      o.has(l) ? o.set(l, s) : n(l, s);
    }
  };
}, nt = "!", it = ":", Ar = it.length, Lr = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: o
  } = e;
  let a = (n) => {
    const l = [];
    let s = 0, m = 0, i = 0, p;
    for (let O = 0; O < n.length; O++) {
      let C = n[O];
      if (s === 0 && m === 0) {
        if (C === it) {
          l.push(n.slice(i, O)), i = O + Ar;
          continue;
        }
        if (C === "/") {
          p = O;
          continue;
        }
      }
      C === "[" ? s++ : C === "]" ? s-- : C === "(" ? m++ : C === ")" && m--;
    }
    const g = l.length === 0 ? n : n.substring(i), T = Mr(g), N = T !== g, P = p && p > i ? p - i : void 0;
    return {
      modifiers: l,
      hasImportantModifier: N,
      baseClassName: T,
      maybePostfixModifierPosition: P
    };
  };
  if (r) {
    const n = r + it, l = a;
    a = (s) => s.startsWith(n) ? l(s.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const n = a;
    a = (l) => o({
      className: l,
      parseClassName: n
    });
  }
  return a;
}, Mr = (e) => e.endsWith(nt) ? e.substring(0, e.length - 1) : e.startsWith(nt) ? e.substring(1) : e, Dr = (e) => {
  const r = Object.fromEntries(e.orderSensitiveModifiers.map((a) => [a, !0]));
  return (a) => {
    if (a.length <= 1)
      return a;
    const n = [];
    let l = [];
    return a.forEach((s) => {
      s[0] === "[" || r[s] ? (n.push(...l.sort(), s), l = []) : l.push(s);
    }), n.push(...l.sort()), n;
  };
}, $r = (e) => ({
  cache: zr(e.cacheSize),
  parseClassName: Lr(e),
  sortModifiers: Dr(e),
  ...Ir(e)
}), Fr = /\s+/, Br = (e, r) => {
  const {
    parseClassName: o,
    getClassGroupId: a,
    getConflictingClassGroupIds: n,
    sortModifiers: l
  } = r, s = [], m = e.trim().split(Fr);
  let i = "";
  for (let p = m.length - 1; p >= 0; p -= 1) {
    const g = m[p], {
      isExternal: T,
      modifiers: N,
      hasImportantModifier: P,
      baseClassName: O,
      maybePostfixModifierPosition: C
    } = o(g);
    if (T) {
      i = g + (i.length > 0 ? " " + i : i);
      continue;
    }
    let R = !!C, k = a(R ? O.substring(0, C) : O);
    if (!k) {
      if (!R) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (k = a(O), !k) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      R = !1;
    }
    const y = l(N).join(":"), _ = P ? y + nt : y, j = _ + k;
    if (s.includes(j))
      continue;
    s.push(j);
    const L = n(k, R);
    for (let u = 0; u < L.length; ++u) {
      const x = L[u];
      s.push(_ + x);
    }
    i = g + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Vr() {
  let e = 0, r, o, a = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (o = Ft(r)) && (a && (a += " "), a += o);
  return a;
}
const Ft = (e) => {
  if (typeof e == "string")
    return e;
  let r, o = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (r = Ft(e[a])) && (o && (o += " "), o += r);
  return o;
};
function Gr(e, ...r) {
  let o, a, n, l = s;
  function s(i) {
    const p = r.reduce((g, T) => T(g), e());
    return o = $r(p), a = o.cache.get, n = o.cache.set, l = m, m(i);
  }
  function m(i) {
    const p = a(i);
    if (p)
      return p;
    const g = Br(i, o);
    return n(i, g), g;
  }
  return function() {
    return l(Vr.apply(null, arguments));
  };
}
const U = (e) => {
  const r = (o) => o[e] || [];
  return r.isThemeGetter = !0, r;
}, Bt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Vt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Wr = /^\d+\/\d+$/, Ur = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Xr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Hr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Te = (e) => Wr.test(e), I = (e) => !!e && !Number.isNaN(Number(e)), fe = (e) => !!e && Number.isInteger(Number(e)), tt = (e) => e.endsWith("%") && I(e.slice(0, -1)), ie = (e) => Ur.test(e), Kr = () => !0, Jr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Yr.test(e) && !qr.test(e)
), Gt = () => !1, Qr = (e) => Xr.test(e), Zr = (e) => Hr.test(e), eo = (e) => !h(e) && !v(e), to = (e) => je(e, Yt, Gt), h = (e) => Bt.test(e), be = (e) => je(e, qt, Jr), rt = (e) => je(e, no, I), zt = (e) => je(e, Wt, Gt), ro = (e) => je(e, Ut, Zr), Ge = (e) => je(e, Xt, Qr), v = (e) => Vt.test(e), Le = (e) => Re(e, qt), oo = (e) => Re(e, io), At = (e) => Re(e, Wt), ao = (e) => Re(e, Yt), so = (e) => Re(e, Ut), We = (e) => Re(e, Xt, !0), je = (e, r, o) => {
  const a = Bt.exec(e);
  return a ? a[1] ? r(a[1]) : o(a[2]) : !1;
}, Re = (e, r, o = !1) => {
  const a = Vt.exec(e);
  return a ? a[1] ? r(a[1]) : o : !1;
}, Wt = (e) => e === "position" || e === "percentage", Ut = (e) => e === "image" || e === "url", Yt = (e) => e === "length" || e === "size" || e === "bg-size", qt = (e) => e === "length", no = (e) => e === "number", io = (e) => e === "family-name", Xt = (e) => e === "shadow", lo = () => {
  const e = U("color"), r = U("font"), o = U("text"), a = U("font-weight"), n = U("tracking"), l = U("leading"), s = U("breakpoint"), m = U("container"), i = U("spacing"), p = U("radius"), g = U("shadow"), T = U("inset-shadow"), N = U("text-shadow"), P = U("drop-shadow"), O = U("blur"), C = U("perspective"), R = U("aspect"), k = U("ease"), y = U("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => [
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
  ], L = () => [...j(), v, h], u = () => ["auto", "hidden", "clip", "visible", "scroll"], x = () => ["auto", "contain", "none"], f = () => [v, h, i], A = () => [Te, "full", "auto", ...f()], X = () => [fe, "none", "subgrid", v, h], B = () => ["auto", {
    span: ["full", fe, v, h]
  }, fe, v, h], K = () => [fe, "auto", v, h], H = () => ["auto", "min", "max", "fr", v, h], ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], J = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Q = () => ["auto", ...f()], re = () => [Te, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...f()], w = () => [e, v, h], Ne = () => [...j(), At, zt, {
    position: [v, h]
  }], Ie = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Pe = () => ["auto", "cover", "contain", ao, to, {
    size: [v, h]
  }], ve = () => [tt, Le, be], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    v,
    h
  ], Z = () => ["", I, Le, be], xe = () => ["solid", "dashed", "dotted", "double"], _e = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => [I, tt, At, zt], me = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    O,
    v,
    h
  ], de = () => ["none", I, v, h], ne = () => ["none", I, v, h], Se = () => [I, v, h], pe = () => [Te, "full", ...f()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ie],
      breakpoint: [ie],
      color: [Kr],
      container: [ie],
      "drop-shadow": [ie],
      ease: ["in", "out", "in-out"],
      font: [eo],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ie],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ie],
      shadow: [ie],
      spacing: ["px", I],
      text: [ie],
      "text-shadow": [ie],
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
        aspect: ["auto", "square", Te, h, v, R]
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
        columns: [I, h, v, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
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
        object: L()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: u()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": u()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": u()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: x()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": x()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": x()
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
        inset: A()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: A()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
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
        z: [fe, "auto", v, h]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Te, "full", "auto", m, ...f()]
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
        flex: [I, Te, "auto", "initial", "none", h]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", I, v, h]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", I, v, h]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [fe, "first", "last", "none", v, h]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": X()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: B()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": X()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: B()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        "auto-cols": H()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": H()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: f()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": f()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": f()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ae(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...J(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...J()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ae()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...J(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...J(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ae()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...J(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...J()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: f()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: f()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: f()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: f()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: f()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: f()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: f()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: f()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: f()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: Q()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Q()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Q()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Q()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Q()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Q()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Q()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Q()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Q()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": f()
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
        "space-y": f()
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
        size: re()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...re()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...re()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...re()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...re()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...re()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...re()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, Le, be]
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
        font: [a, v, rt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", tt, h]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [oo, h, r]
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
        tracking: [n, v, h]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [I, "none", v, rt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          l,
          ...f()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", v, h]
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
        list: ["disc", "decimal", "none", v, h]
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
        placeholder: w()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: w()
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
        decoration: [...xe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [I, "from-font", "auto", v, be]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: w()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [I, "auto", v, h]
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
        indent: f()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v, h]
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
        content: ["none", v, h]
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
        bg: Ne()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ie()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Pe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, fe, v, h],
          radial: ["", v, h],
          conic: [fe, v, h]
        }, so, ro]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: w()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ve()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ve()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ve()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: w()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: w()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: w()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Y()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Y()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Y()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Y()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Y()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Y()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Y()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Y()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Y()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Y()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Y()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Y()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Y()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Y()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Y()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Z()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Z()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Z()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Z()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Z()
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
        "divide-y": Z()
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
        border: [...xe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...xe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: w()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": w()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": w()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": w()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": w()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": w()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": w()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": w()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": w()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: w()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...xe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [I, v, h]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", I, Le, be]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: w()
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
          We,
          Ge
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: w()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", T, We, Ge]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": w()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Z()
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
        ring: w()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [I, be]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": w()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": w()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", N, We, Ge]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": w()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I, v, h]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [..._e(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": _e()
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
        "mask-linear": [I]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": V()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": V()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": w()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": w()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": V()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": V()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": w()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": w()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": V()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": V()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": w()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": w()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": V()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": V()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": w()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": w()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": V()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": V()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": w()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": w()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": V()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": V()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": w()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": w()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": V()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": V()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": w()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": w()
      }],
      "mask-image-radial": [{
        "mask-radial": [v, h]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": V()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": V()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": w()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": w()
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
        "mask-radial-at": j()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [I]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": V()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": V()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": w()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": w()
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
        mask: Ne()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ie()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Pe()
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
        mask: ["none", v, h]
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
          v,
          h
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: me()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [I, v, h]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [I, v, h]
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
          P,
          We,
          Ge
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": w()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", I, v, h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [I, v, h]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", I, v, h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I, v, h]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", I, v, h]
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
          v,
          h
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": me()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [I, v, h]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [I, v, h]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", I, v, h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [I, v, h]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", I, v, h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I, v, h]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [I, v, h]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", I, v, h]
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
        "border-spacing": f()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": f()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": f()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", v, h]
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
        duration: [I, "initial", v, h]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", k, v, h]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [I, v, h]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, v, h]
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
        perspective: [C, v, h]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": L()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: de()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": de()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": de()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": de()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ne()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ne()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ne()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ne()
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
        skew: Se()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Se()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Se()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [v, h, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: L()
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
        translate: pe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": pe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": pe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": pe()
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
        accent: w()
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
        caret: w()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", v, h]
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
        "scroll-m": f()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": f()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": f()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": f()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": f()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": f()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": f()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": f()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": f()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": f()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": f()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": f()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": f()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": f()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": f()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": f()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": f()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": f()
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
        "will-change": ["auto", "scroll", "contents", "transform", v, h]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...w()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [I, Le, be, rt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...w()]
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
}, co = /* @__PURE__ */ Gr(lo);
function le(...e) {
  return co(q(e));
}
const fo = () => /* @__PURE__ */ c.jsxs(
  "svg",
  {
    className: "animate-spin h-4 w-4 text-current",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ c.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
      /* @__PURE__ */ c.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" })
    ]
  }
), uo = Nr(
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
), mo = ue.forwardRef(
  ({
    className: e,
    variant: r,
    size: o,
    loading: a = !1,
    asChild: n = !1,
    leftIcon: l,
    rightIcon: s,
    children: m,
    badgeContent: i,
    badgeVariant: p = "number",
    ...g
  }, T) => {
    const N = n ? Cr : "button";
    return /* @__PURE__ */ c.jsxs("div", { className: "relative inline-block", children: [
      /* @__PURE__ */ c.jsxs(
        N,
        {
          className: le(uo({ variant: r, size: o, className: e })),
          ref: T,
          disabled: a || g.disabled,
          ...g,
          children: [
            a && /* @__PURE__ */ c.jsx(fo, {}),
            !a && l && /* @__PURE__ */ c.jsx("span", { className: "flex items-center", children: l }),
            a ? "Loading..." : m,
            !a && s && /* @__PURE__ */ c.jsx("span", { className: "flex items-center", children: s })
          ]
        }
      ),
      i !== void 0 && /* @__PURE__ */ c.jsx(
        "span",
        {
          className: le(
            "absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full bg-red-500 text-white",
            p === "dot" ? "h-3 w-3" : "min-w-[18px] h-[18px] px-1 text-xs font-bold"
          ),
          children: p === "number" && i
        }
      )
    ] });
  }
);
mo.displayName = "Button";
const po = ue.forwardRef(
  ({
    className: e,
    type: r = "text",
    label: o,
    helperText: a,
    error: n,
    leftIcon: l,
    rightIcon: s,
    topIcon: m,
    buttonIcon: i,
    ...p
  }, g) => /* @__PURE__ */ c.jsxs("div", { className: "w-full", children: [
    o && /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-sm font-medium text-foreground", children: o }),
    m && /* @__PURE__ */ c.jsx("div", { className: "flex justify-center mb-2", children: m }),
    /* @__PURE__ */ c.jsxs("div", { className: "relative flex items-center", children: [
      l && /* @__PURE__ */ c.jsx("span", { className: "absolute left-3 text-muted-foreground", children: l }),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          type: r,
          className: le(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            l ? "pl-10" : "",
            s ? "pr-10" : "",
            n ? "border-destructive focus-visible:ring-destructive" : "",
            e
          ),
          ref: g,
          ...p
        }
      ),
      s && /* @__PURE__ */ c.jsx("span", { className: "absolute right-3 text-muted-foreground", children: s }),
      i && /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "absolute right-1 flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent",
          children: i
        }
      )
    ] }),
    n ? /* @__PURE__ */ c.jsx("p", { className: "mt-1 text-xs text-destructive", children: n }) : a ? /* @__PURE__ */ c.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: a }) : null
  ] })
);
po.displayName = "Input";
const go = ue.forwardRef(
  ({ className: e, ...r }, o) => /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: o,
      className: le("rounded-xl border bg-card text-card-foreground shadow", e),
      ...r
    }
  )
);
go.displayName = "Card";
const yo = ue.forwardRef(
  ({ className: e, ...r }, o) => /* @__PURE__ */ c.jsx("div", { ref: o, className: le("flex flex-col space-y-1.5 p-6", e), ...r })
);
yo.displayName = "CardHeader";
const bo = ue.forwardRef(
  ({ className: e, ...r }, o) => /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: o,
      className: le("font-semibold leading-none tracking-tight", e),
      ...r
    }
  )
);
bo.displayName = "CardTitle";
const ho = ue.forwardRef(
  ({ className: e, ...r }, o) => /* @__PURE__ */ c.jsx("div", { ref: o, className: le("text-sm text-muted-foreground", e), ...r })
);
ho.displayName = "CardDescription";
const vo = ue.forwardRef(
  ({ className: e, ...r }, o) => /* @__PURE__ */ c.jsx("div", { ref: o, className: le("p-6 pt-0", e), ...r })
);
vo.displayName = "CardContent";
const xo = ue.forwardRef(
  ({ className: e, ...r }, o) => /* @__PURE__ */ c.jsx("div", { ref: o, className: le("flex items-center p-6 pt-0", e), ...r })
);
xo.displayName = "CardFooter";
const Ee = ({ steps: e, current: r, direction: o = "vertical", onStepClick: a }) => {
  const n = o === "vertical";
  return /* @__PURE__ */ c.jsx(
    "nav",
    {
      "aria-label": "Progress",
      className: q(
        "flex",
        n ? "flex-col items-start space-y-6" : "flex-row items-start justify-between"
      ),
      children: e.map((l, s) => {
        const m = s === r, i = s < r, p = () => {
          a == null || a(s);
        }, g = q(
          "w-10 h-10 rounded-full flex items-center justify-center border-2 focus:outline-none relative z-10",
          i ? "bg-green-500 border-green-500 text-white" : m ? "border-blue-500 text-blue-600 bg-white" : "border-gray-300 text-gray-500 bg-white"
        );
        return /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: q(
              "flex relative",
              n ? "items-start" : "flex-col items-center flex-1"
            ),
            children: [
              /* @__PURE__ */ c.jsxs("div", { className: q("flex items-center", n ? "flex-col" : ""), children: [
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: p,
                    className: g,
                    "aria-current": m ? "step" : void 0,
                    "aria-disabled": i ? !1 : m ? void 0 : !1,
                    "aria-label": `Step ${s + 1}: ${l.title}`,
                    children: i ? /* @__PURE__ */ c.jsx(
                      "svg",
                      {
                        width: "16",
                        height: "12",
                        viewBox: "0 0 16 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": "true",
                        focusable: "false",
                        children: /* @__PURE__ */ c.jsx(
                          "path",
                          {
                            d: "M1 6L5 10L15 1",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }
                        )
                      }
                    ) : s + 1
                  }
                ),
                n && s < e.length - 1 && /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    className: q(
                      "w-px mt-2",
                      i && s + 1 <= r ? "bg-green-500" : "bg-gray-200"
                    ),
                    style: { height: 40 },
                    "aria-hidden": "true"
                  }
                )
              ] }),
              !n && s < e.length - 1 && /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: q(
                    "absolute top-5 h-px z-0",
                    i && s + 1 <= r ? "bg-green-500" : "bg-gray-200"
                  ),
                  style: {
                    left: "50%",
                    right: "-50%",
                    width: "100%"
                  },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ c.jsxs("div", { className: q(n ? "ml-4" : "mt-2 text-center"), children: [
                /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    className: q(
                      "text-sm font-medium",
                      m ? "text-blue-600" : "text-gray-700"
                    ),
                    children: l.title
                  }
                ),
                l.description && /* @__PURE__ */ c.jsx("div", { className: "text-xs text-gray-500 mt-1", children: l.description }),
                /* @__PURE__ */ c.jsxs("div", { className: "text-xs mt-1", children: [
                  i && /* @__PURE__ */ c.jsx("span", { className: "text-green-500", children: "Completed" }),
                  !i && m && /* @__PURE__ */ c.jsx("span", { className: "text-blue-500", children: "In Progress" }),
                  !i && !m && /* @__PURE__ */ c.jsx("span", { className: "text-gray-400", children: "Pending" })
                ] })
              ] })
            ]
          },
          s
        );
      })
    }
  );
};
function _o(e) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
_o(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var $e = (e) => typeof e == "number" && !isNaN(e), he = (e) => typeof e == "string", ce = (e) => typeof e == "function", wo = (e) => he(e) || $e(e), lt = (e) => he(e) || ce(e) ? e : null, ko = (e, r) => e === !1 || $e(e) && e > 0 ? e : r, ct = (e) => Ye(e) || he(e) || ce(e) || $e(e);
function To(e, r, o = 300) {
  let { scrollHeight: a, style: n } = e;
  requestAnimationFrame(() => {
    n.minHeight = "initial", n.height = a + "px", n.transition = `all ${o}ms`, requestAnimationFrame(() => {
      n.height = "0", n.padding = "0", n.margin = "0", setTimeout(r, o);
    });
  });
}
function Eo({ enter: e, exit: r, appendPosition: o = !1, collapse: a = !0, collapseDuration: n = 300 }) {
  return function({ children: l, position: s, preventExitTransition: m, done: i, nodeRef: p, isIn: g, playToast: T }) {
    let N = o ? `${e}--${s}` : e, P = o ? `${r}--${s}` : r, O = Me(0);
    return Mt(() => {
      let C = p.current, R = N.split(" "), k = (y) => {
        y.target === p.current && (T(), C.removeEventListener("animationend", k), C.removeEventListener("animationcancel", k), O.current === 0 && y.type !== "animationcancel" && C.classList.remove(...R));
      };
      C.classList.add(...R), C.addEventListener("animationend", k), C.addEventListener("animationcancel", k);
    }, []), Ue(() => {
      let C = p.current, R = () => {
        C.removeEventListener("animationend", R), a ? To(C, i, n) : i();
      };
      g || (m ? R() : (O.current = 1, C.className += ` ${P}`, C.addEventListener("animationend", R)));
    }, [g]), F.createElement(F.Fragment, null, l);
  };
}
function Lt(e, r) {
  return { content: Ht(e.content, e.props), containerId: e.props.containerId, id: e.props.toastId, theme: e.props.theme, type: e.props.type, data: e.props.data || {}, isLoading: e.props.isLoading, icon: e.props.icon, reason: e.removalReason, status: r };
}
function Ht(e, r, o = !1) {
  return Ye(e) && !he(e.type) ? ut(e, { closeToast: r.closeToast, toastProps: r, data: r.data, isPaused: o }) : ce(e) ? e({ closeToast: r.closeToast, toastProps: r, data: r.data, isPaused: o }) : e;
}
function Co({ closeToast: e, theme: r, ariaLabel: o = "close" }) {
  return F.createElement("button", { className: `Toastify__close-button Toastify__close-button--${r}`, type: "button", onClick: (a) => {
    a.stopPropagation(), e(!0);
  }, "aria-label": o }, F.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, F.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function jo({ delay: e, isRunning: r, closeToast: o, type: a = "default", hide: n, className: l, controlledProgress: s, progress: m, rtl: i, isIn: p, theme: g }) {
  let T = n || s && m === 0, N = { animationDuration: `${e}ms`, animationPlayState: r ? "running" : "paused" };
  s && (N.transform = `scaleX(${m})`);
  let P = q("Toastify__progress-bar", s ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g}`, `Toastify__progress-bar--${a}`, { "Toastify__progress-bar--rtl": i }), O = ce(l) ? l({ rtl: i, type: a, defaultClassName: P }) : q(P, l), C = { [s && m >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: s && m < 1 ? null : () => {
    p && o();
  } };
  return F.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": T }, F.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${a}` }), F.createElement("div", { role: "progressbar", "aria-hidden": T ? "true" : "false", "aria-label": "notification timer", className: O, style: N, ...C }));
}
var Ro = 1, Kt = () => `${Ro++}`;
function No(e, r, o) {
  let a = 1, n = 0, l = [], s = [], m = r, i = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), g = (y) => (p.add(y), () => p.delete(y)), T = () => {
    s = Array.from(i.values()), p.forEach((y) => y());
  }, N = ({ containerId: y, toastId: _, updateId: j }) => {
    let L = y ? y !== e : e !== 1, u = i.has(_) && j == null;
    return L || u;
  }, P = (y, _) => {
    i.forEach((j) => {
      var L;
      (_ == null || _ === j.props.toastId) && ((L = j.toggle) == null || L.call(j, y));
    });
  }, O = (y) => {
    var _, j;
    (j = (_ = y.props) == null ? void 0 : _.onClose) == null || j.call(_, y.removalReason), y.isActive = !1;
  }, C = (y) => {
    if (y == null) i.forEach(O);
    else {
      let _ = i.get(y);
      _ && O(_);
    }
    T();
  }, R = () => {
    n -= l.length, l = [];
  }, k = (y) => {
    var _, j;
    let { toastId: L, updateId: u } = y.props, x = u == null;
    y.staleId && i.delete(y.staleId), y.isActive = !0, i.set(L, y), T(), o(Lt(y, x ? "added" : "updated")), x && ((j = (_ = y.props).onOpen) == null || j.call(_));
  };
  return { id: e, props: m, observe: g, toggle: P, removeToast: C, toasts: i, clearQueue: R, buildToast: (y, _) => {
    if (N(_)) return;
    let { toastId: j, updateId: L, data: u, staleId: x, delay: f } = _, A = L == null;
    A && n++;
    let X = { ...m, style: m.toastStyle, key: a++, ...Object.fromEntries(Object.entries(_).filter(([K, H]) => H != null)), toastId: j, updateId: L, data: u, isIn: !1, className: lt(_.className || m.toastClassName), progressClassName: lt(_.progressClassName || m.progressClassName), autoClose: _.isLoading ? !1 : ko(_.autoClose, m.autoClose), closeToast(K) {
      i.get(j).removalReason = K, C(j);
    }, deleteToast() {
      let K = i.get(j);
      if (K != null) {
        if (o(Lt(K, "removed")), i.delete(j), n--, n < 0 && (n = 0), l.length > 0) {
          k(l.shift());
          return;
        }
        T();
      }
    } };
    X.closeButton = m.closeButton, _.closeButton === !1 || ct(_.closeButton) ? X.closeButton = _.closeButton : _.closeButton === !0 && (X.closeButton = ct(m.closeButton) ? m.closeButton : !0);
    let B = { content: y, props: X, staleId: x };
    m.limit && m.limit > 0 && n > m.limit && A ? l.push(B) : $e(f) ? setTimeout(() => {
      k(B);
    }, f) : k(B);
  }, setProps(y) {
    m = y;
  }, setToggle: (y, _) => {
    let j = i.get(y);
    j && (j.toggle = _);
  }, isToastActive: (y) => {
    var _;
    return (_ = i.get(y)) == null ? void 0 : _.isActive;
  }, getSnapshot: () => s };
}
var te = /* @__PURE__ */ new Map(), De = [], dt = /* @__PURE__ */ new Set(), Io = (e) => dt.forEach((r) => r(e)), Jt = () => te.size > 0;
function Po() {
  De.forEach((e) => Zt(e.content, e.options)), De = [];
}
var So = (e, { containerId: r }) => {
  var o;
  return (o = te.get(r || 1)) == null ? void 0 : o.toasts.get(e);
};
function Qt(e, r) {
  var o;
  if (r) return !!((o = te.get(r)) != null && o.isToastActive(e));
  let a = !1;
  return te.forEach((n) => {
    n.isToastActive(e) && (a = !0);
  }), a;
}
function Oo(e) {
  if (!Jt()) {
    De = De.filter((r) => e != null && r.options.toastId !== e);
    return;
  }
  if (e == null || wo(e)) te.forEach((r) => {
    r.removeToast(e);
  });
  else if (e && ("containerId" in e || "id" in e)) {
    let r = te.get(e.containerId);
    r ? r.removeToast(e.id) : te.forEach((o) => {
      o.removeToast(e.id);
    });
  }
}
var zo = (e = {}) => {
  te.forEach((r) => {
    r.props.limit && (!e.containerId || r.id === e.containerId) && r.clearQueue();
  });
};
function Zt(e, r) {
  ct(e) && (Jt() || De.push({ content: e, options: r }), te.forEach((o) => {
    o.buildToast(e, r);
  }));
}
function Ao(e) {
  var r;
  (r = te.get(e.containerId || 1)) == null || r.setToggle(e.id, e.fn);
}
function er(e, r) {
  te.forEach((o) => {
    (r == null || !(r != null && r.containerId) || (r == null ? void 0 : r.containerId) === o.id) && o.toggle(e, r == null ? void 0 : r.id);
  });
}
function Lo(e) {
  let r = e.containerId || 1;
  return { subscribe(o) {
    let a = No(r, e, Io);
    te.set(r, a);
    let n = a.observe(o);
    return Po(), () => {
      n(), te.delete(r);
    };
  }, setProps(o) {
    var a;
    (a = te.get(r)) == null || a.setProps(o);
  }, getSnapshot() {
    var o;
    return (o = te.get(r)) == null ? void 0 : o.getSnapshot();
  } };
}
function Mo(e) {
  return dt.add(e), () => {
    dt.delete(e);
  };
}
function Do(e) {
  return e && (he(e.toastId) || $e(e.toastId)) ? e.toastId : Kt();
}
function Fe(e, r) {
  return Zt(e, r), r.toastId;
}
function qe(e, r) {
  return { ...r, type: r && r.type || e, toastId: Do(r) };
}
function Xe(e) {
  return (r, o) => Fe(r, qe(e, o));
}
function D(e, r) {
  return Fe(e, qe("default", r));
}
D.loading = (e, r) => Fe(e, qe("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...r }));
function $o(e, { pending: r, error: o, success: a }, n) {
  let l;
  r && (l = he(r) ? D.loading(r, n) : D.loading(r.render, { ...n, ...r }));
  let s = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, m = (p, g, T) => {
    if (g == null) {
      D.dismiss(l);
      return;
    }
    let N = { type: p, ...s, ...n, data: T }, P = he(g) ? { render: g } : g;
    return l ? D.update(l, { ...N, ...P }) : D(P.render, { ...N, ...P }), T;
  }, i = ce(e) ? e() : e;
  return i.then((p) => m("success", a, p)).catch((p) => m("error", o, p)), i;
}
D.promise = $o;
D.success = Xe("success");
D.info = Xe("info");
D.error = Xe("error");
D.warning = Xe("warning");
D.warn = D.warning;
D.dark = (e, r) => Fe(e, qe("default", { theme: "dark", ...r }));
function Fo(e) {
  Oo(e);
}
D.dismiss = Fo;
D.clearWaitingQueue = zo;
D.isActive = Qt;
D.update = (e, r = {}) => {
  let o = So(e, r);
  if (o) {
    let { props: a, content: n } = o, l = { delay: 100, ...a, ...r, toastId: r.toastId || e, updateId: Kt() };
    l.toastId !== e && (l.staleId = e);
    let s = l.render || n;
    delete l.render, Fe(s, l);
  }
};
D.done = (e) => {
  D.update(e, { progress: 1 });
};
D.onChange = Mo;
D.play = (e) => er(!0, e);
D.pause = (e) => er(!1, e);
function Bo(e) {
  var r;
  let { subscribe: o, getSnapshot: a, setProps: n } = Me(Lo(e)).current;
  n(e);
  let l = (r = Er(o, a, a)) == null ? void 0 : r.slice();
  function s(m) {
    if (!l) return [];
    let i = /* @__PURE__ */ new Map();
    return e.newestOnTop && l.reverse(), l.forEach((p) => {
      let { position: g } = p.props;
      i.has(g) || i.set(g, []), i.get(g).push(p);
    }), Array.from(i, (p) => m(p[0], p[1]));
  }
  return { getToastToRender: s, isToastActive: Qt, count: l == null ? void 0 : l.length };
}
function Vo(e) {
  let [r, o] = Ce(!1), [a, n] = Ce(!1), l = Me(null), s = Me({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current, { autoClose: m, pauseOnHover: i, closeToast: p, onClick: g, closeOnClick: T } = e;
  Ao({ id: e.toastId, containerId: e.containerId, fn: o }), Ue(() => {
    if (e.pauseOnFocusLoss) return N(), () => {
      P();
    };
  }, [e.pauseOnFocusLoss]);
  function N() {
    document.hasFocus() || k(), window.addEventListener("focus", R), window.addEventListener("blur", k);
  }
  function P() {
    window.removeEventListener("focus", R), window.removeEventListener("blur", k);
  }
  function O(x) {
    if (e.draggable === !0 || e.draggable === x.pointerType) {
      y();
      let f = l.current;
      s.canCloseOnClick = !0, s.canDrag = !0, f.style.transition = "none", e.draggableDirection === "x" ? (s.start = x.clientX, s.removalDistance = f.offsetWidth * (e.draggablePercent / 100)) : (s.start = x.clientY, s.removalDistance = f.offsetHeight * (e.draggablePercent === 80 ? e.draggablePercent * 1.5 : e.draggablePercent) / 100);
    }
  }
  function C(x) {
    let { top: f, bottom: A, left: X, right: B } = l.current.getBoundingClientRect();
    x.nativeEvent.type !== "touchend" && e.pauseOnHover && x.clientX >= X && x.clientX <= B && x.clientY >= f && x.clientY <= A ? k() : R();
  }
  function R() {
    o(!0);
  }
  function k() {
    o(!1);
  }
  function y() {
    s.didMove = !1, document.addEventListener("pointermove", j), document.addEventListener("pointerup", L);
  }
  function _() {
    document.removeEventListener("pointermove", j), document.removeEventListener("pointerup", L);
  }
  function j(x) {
    let f = l.current;
    if (s.canDrag && f) {
      s.didMove = !0, r && k(), e.draggableDirection === "x" ? s.delta = x.clientX - s.start : s.delta = x.clientY - s.start, s.start !== x.clientX && (s.canCloseOnClick = !1);
      let A = e.draggableDirection === "x" ? `${s.delta}px, var(--y)` : `0, calc(${s.delta}px + var(--y))`;
      f.style.transform = `translate3d(${A},0)`, f.style.opacity = `${1 - Math.abs(s.delta / s.removalDistance)}`;
    }
  }
  function L() {
    _();
    let x = l.current;
    if (s.canDrag && s.didMove && x) {
      if (s.canDrag = !1, Math.abs(s.delta) > s.removalDistance) {
        n(!0), e.closeToast(!0), e.collapseAll();
        return;
      }
      x.style.transition = "transform 0.2s, opacity 0.2s", x.style.removeProperty("transform"), x.style.removeProperty("opacity");
    }
  }
  let u = { onPointerDown: O, onPointerUp: C };
  return m && i && (u.onMouseEnter = k, e.stacked || (u.onMouseLeave = R)), T && (u.onClick = (x) => {
    g && g(x), s.canCloseOnClick && p(!0);
  }), { playToast: R, pauseToast: k, isRunning: r, preventExitTransition: a, toastRef: l, eventHandlers: u };
}
var Go = typeof window < "u" ? Mt : Ue, He = ({ theme: e, type: r, isLoading: o, ...a }) => F.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`, ...a });
function Wo(e) {
  return F.createElement(He, { ...e }, F.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}
function Uo(e) {
  return F.createElement(He, { ...e }, F.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}
function Yo(e) {
  return F.createElement(He, { ...e }, F.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}
function qo(e) {
  return F.createElement(He, { ...e }, F.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}
function Xo() {
  return F.createElement("div", { className: "Toastify__spinner" });
}
var ft = { info: Uo, warning: Wo, success: Yo, error: qo, spinner: Xo }, Ho = (e) => e in ft;
function Ko({ theme: e, type: r, isLoading: o, icon: a }) {
  let n = null, l = { theme: e, type: r };
  return a === !1 || (ce(a) ? n = a({ ...l, isLoading: o }) : Ye(a) ? n = ut(a, l) : o ? n = ft.spinner() : Ho(r) && (n = ft[r](l))), n;
}
var Jo = (e) => {
  let { isRunning: r, preventExitTransition: o, toastRef: a, eventHandlers: n, playToast: l } = Vo(e), { closeButton: s, children: m, autoClose: i, onClick: p, type: g, hideProgressBar: T, closeToast: N, transition: P, position: O, className: C, style: R, progressClassName: k, updateId: y, role: _, progress: j, rtl: L, toastId: u, deleteToast: x, isIn: f, isLoading: A, closeOnClick: X, theme: B, ariaLabel: K } = e, H = q("Toastify__toast", `Toastify__toast-theme--${B}`, `Toastify__toast--${g}`, { "Toastify__toast--rtl": L }, { "Toastify__toast--close-on-click": X }), ae = ce(C) ? C({ rtl: L, position: O, type: g, defaultClassName: H }) : q(H, C), J = Ko(e), Q = !!j || !i, re = { closeToast: N, type: g, theme: B }, w = null;
  return s === !1 || (ce(s) ? w = s(re) : Ye(s) ? w = ut(s, re) : w = Co(re)), F.createElement(P, { isIn: f, done: x, position: O, preventExitTransition: o, nodeRef: a, playToast: l }, F.createElement("div", { id: u, tabIndex: 0, onClick: p, "data-in": f, className: ae, ...n, style: R, ref: a, ...f && { role: _, "aria-label": K } }, J != null && F.createElement("div", { className: q("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !A }) }, J), Ht(m, e, !r), w, !e.customProgressBar && F.createElement(jo, { ...y && !Q ? { key: `p-${y}` } : {}, rtl: L, theme: B, delay: i, isRunning: r, isIn: f, closeToast: N, hide: T, type: g, className: k, controlledProgress: Q, progress: j || 0 })));
}, Qo = (e, r = !1) => ({ enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: r }), Zo = Eo(Qo("bounce", !0)), ea = { position: "top-right", transition: Zo, autoClose: 5e3, closeButton: !0, pauseOnHover: !0, pauseOnFocusLoss: !0, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light", "aria-label": "Notifications Alt+T", hotKeys: (e) => e.altKey && e.code === "KeyT" };
function ot(e) {
  let r = { ...ea, ...e }, o = e.stacked, [a, n] = Ce(!0), l = Me(null), { getToastToRender: s, isToastActive: m, count: i } = Bo(r), { className: p, style: g, rtl: T, containerId: N, hotKeys: P } = r;
  function O(R) {
    let k = q("Toastify__toast-container", `Toastify__toast-container--${R}`, { "Toastify__toast-container--rtl": T });
    return ce(p) ? p({ position: R, rtl: T, defaultClassName: k }) : q(k, lt(p));
  }
  function C() {
    o && (n(!0), D.play());
  }
  return Go(() => {
    var R;
    if (o) {
      let k = l.current.querySelectorAll('[data-in="true"]'), y = 12, _ = (R = r.position) == null ? void 0 : R.includes("top"), j = 0, L = 0;
      Array.from(k).reverse().forEach((u, x) => {
        let f = u;
        f.classList.add("Toastify__toast--stacked"), x > 0 && (f.dataset.collapsed = `${a}`), f.dataset.pos || (f.dataset.pos = _ ? "top" : "bot");
        let A = j * (a ? 0.2 : 1) + (a ? 0 : y * x);
        f.style.setProperty("--y", `${_ ? A : A * -1}px`), f.style.setProperty("--g", `${y}`), f.style.setProperty("--s", `${1 - (a ? L : 0)}`), j += f.offsetHeight, L += 0.025;
      });
    }
  }, [a, i, o]), Ue(() => {
    function R(k) {
      var y;
      let _ = l.current;
      P(k) && ((y = _.querySelector('[tabIndex="0"]')) == null || y.focus(), n(!1), D.pause()), k.key === "Escape" && (document.activeElement === _ || _ != null && _.contains(document.activeElement)) && (n(!0), D.play());
    }
    return document.addEventListener("keydown", R), () => {
      document.removeEventListener("keydown", R);
    };
  }, [P]), F.createElement("section", { ref: l, className: "Toastify", id: N, onMouseEnter: () => {
    o && (n(!1), D.pause());
  }, onMouseLeave: C, "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text", "aria-label": r["aria-label"] }, s((R, k) => {
    let y = k.length ? { ...g } : { ...g, pointerEvents: "none" };
    return F.createElement("div", { tabIndex: -1, className: O(R), "data-stacked": o, style: y, key: `c-${R}` }, k.map(({ content: _, props: j }) => F.createElement(Jo, { ...j, stacked: o, collapseAll: C, isIn: m(j.toastId, j.containerId), key: `t-${j.key}` }, _)));
  }));
}
const oa = ({ config: e, onSubmit: r }) => {
  const [o, a] = Ce(0), [n, l] = Ce({}), [s, m] = Ce({}), i = e.steps || [], p = e.stepperDirection || "vertical", g = e.stepperPosition || "top", T = e.buttonAlignment || "right", N = e.type || "normal", P = ye(
    (u) => {
      const x = i[u].fields;
      for (const f of x)
        if (!(f.showIf && n[f.showIf.field] !== f.showIf.value) && f.required) {
          const A = n[f.name];
          if (A == null || A === "")
            return D.error(`${f.label} is required`), !1;
        }
      return !0;
    },
    [n, i]
  ), O = ye(() => {
    P(o) && (o < i.length - 1 ? a((u) => u + 1) : r(n));
  }, [o, n, r, i.length, P]), C = ye(() => {
    o > 0 && a((u) => u - 1);
  }, [o]), R = ye(
    (u) => {
      if (u < o) {
        a(u);
        return;
      }
      P(o) && a(u);
    },
    [o, P]
  ), k = ye((u, x) => {
    l((f) => ({ ...f, [u]: x })), m((f) => ({ ...f, [u]: !0 }));
  }, []), y = ye(
    (u) => u.showIf ? n[u.showIf.field] === u.showIf.value : !0,
    [n]
  ), _ = ye(
    (u) => {
      var X;
      if (!y(u)) return null;
      const x = n[u.name] ?? (u.type === "checkbox" ? !1 : ""), f = u.required && s[u.name] && (x === "" || x === void 0 || x === null), A = /* @__PURE__ */ c.jsxs("label", { className: "block mb-1 font-medium", htmlFor: u.name, children: [
        u.label,
        u.required && /* @__PURE__ */ c.jsx("span", { className: "text-red-500 ml-1", children: "*" })
      ] });
      switch (u.type) {
        case "textarea":
          return /* @__PURE__ */ c.jsxs("div", { className: "mb-4", children: [
            A,
            /* @__PURE__ */ c.jsx(
              "textarea",
              {
                id: u.name,
                value: x,
                placeholder: u.placeholder,
                onChange: (B) => k(u.name, B.target.value),
                className: "w-full border rounded p-2"
              }
            ),
            f && /* @__PURE__ */ c.jsxs("div", { className: "text-red-500 text-sm mt-1", children: [
              u.label,
              " is required"
            ] })
          ] }, u.name);
        case "select":
          return /* @__PURE__ */ c.jsxs("div", { className: "mb-4", children: [
            A,
            /* @__PURE__ */ c.jsxs(
              "select",
              {
                id: u.name,
                value: x,
                onChange: (B) => k(u.name, B.target.value),
                className: "w-full border rounded p-2",
                children: [
                  /* @__PURE__ */ c.jsx("option", { value: "", children: "Select..." }),
                  (X = u.options) == null ? void 0 : X.map((B) => /* @__PURE__ */ c.jsx("option", { value: B.value, children: B.label }, B.value))
                ]
              }
            ),
            f && /* @__PURE__ */ c.jsxs("div", { className: "text-red-500 text-sm mt-1", children: [
              u.label,
              " is required"
            ] })
          ] }, u.name);
        case "checkbox":
          return /* @__PURE__ */ c.jsxs("div", { className: "mb-4 flex items-center", children: [
            /* @__PURE__ */ c.jsx(
              "input",
              {
                id: u.name,
                type: "checkbox",
                checked: !!x,
                onChange: (B) => k(u.name, B.target.checked),
                className: "mr-3"
              }
            ),
            /* @__PURE__ */ c.jsxs("label", { htmlFor: u.name, className: "font-medium", children: [
              u.label,
              u.required && /* @__PURE__ */ c.jsx("span", { className: "text-red-500 ml-1", children: "*" })
            ] })
          ] }, u.name);
        default:
          return /* @__PURE__ */ c.jsxs("div", { className: "mb-4", children: [
            A,
            /* @__PURE__ */ c.jsx(
              "input",
              {
                id: u.name,
                type: u.type,
                value: x,
                placeholder: u.placeholder,
                onChange: (B) => k(u.name, B.target.value),
                className: "w-full border rounded p-2"
              }
            ),
            f && /* @__PURE__ */ c.jsxs("div", { className: "text-red-500 text-sm mt-1", children: [
              u.label,
              " is required"
            ] })
          ] }, u.name);
      }
    },
    [n, k, y, s]
  ), j = ({ lastStep: u }) => {
    const x = T === "center" ? "justify-center" : T === "right" ? "justify-end" : T === "space-between" ? "justify-between" : "justify-start";
    return /* @__PURE__ */ c.jsxs("div", { className: `mt-6 flex gap-2 ${x}`, children: [
      o > 0 && /* @__PURE__ */ c.jsx("button", { onClick: C, className: "px-4 py-2 bg-gray-300 rounded", children: "Back" }),
      u ? /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: () => {
            P(o) && r(n);
          },
          className: "px-4 py-2 bg-green-600 text-white rounded",
          children: "Submit"
        }
      ) : /* @__PURE__ */ c.jsx("button", { onClick: O, className: "px-4 py-2 bg-blue-600 text-white rounded", children: "Next" })
    ] });
  }, L = () => {
    const u = {
      steps: i.map((f) => ({
        title: f.title,
        description: f.description ?? "",
        fields: f.fields
      })),
      current: o,
      onStepClick: R,
      direction: p === "vertical" || p === "horizontal" ? p : "vertical"
    }, x = /* @__PURE__ */ c.jsxs("div", { className: "p-6 border rounded bg-white ", children: [
      /* @__PURE__ */ c.jsx("h3", { className: "text-lg font-semibold mb-2", children: i[o].title }),
      i[o].description && /* @__PURE__ */ c.jsx("p", { className: "text-sm text-gray-500 mb-4", children: i[o].description }),
      i[o].fields.map(_),
      /* @__PURE__ */ c.jsx(j, { lastStep: o === i.length - 1 })
    ] });
    switch (g) {
      case "top":
        return /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx(Ee, { ...u, direction: "horizontal" }),
          /* @__PURE__ */ c.jsx("div", { className: "mt-6", children: x })
        ] });
      case "bottom":
        return /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("div", { children: x }),
          /* @__PURE__ */ c.jsx("div", { className: "mt-6", children: /* @__PURE__ */ c.jsx(Ee, { ...u, direction: "horizontal" }) })
        ] });
      case "left":
        return /* @__PURE__ */ c.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ c.jsx("div", { className: "w-1/4", children: /* @__PURE__ */ c.jsx(Ee, { ...u, direction: "vertical" }) }),
          /* @__PURE__ */ c.jsx("div", { className: "w-3/4", children: x })
        ] });
      case "right":
        return /* @__PURE__ */ c.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ c.jsx("div", { className: "w-3/4", children: x }),
          /* @__PURE__ */ c.jsx("div", { className: "w-1/4", children: /* @__PURE__ */ c.jsx(Ee, { ...u, direction: "vertical" }) })
        ] });
      case "center":
      default:
        return /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ c.jsx(Ee, { ...u, direction: "horizontal" }) }),
          /* @__PURE__ */ c.jsx("div", { className: "mt-6", children: x })
        ] });
    }
  };
  return N === "stepper" ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(ot, {}),
    /* @__PURE__ */ c.jsx(
      Ee,
      {
        steps: i.map((u) => ({
          title: u.title,
          description: u.description ?? "",
          fields: u.fields
        })),
        current: o,
        onStepClick: R,
        direction: p
      }
    )
  ] }) : N === "normal" ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(ot, {}),
    /* @__PURE__ */ c.jsxs("div", { children: [
      i[o].fields.map(_),
      /* @__PURE__ */ c.jsxs("div", { className: "mt-6 flex gap-2 justify-end", children: [
        o > 0 && /* @__PURE__ */ c.jsx("button", { onClick: C, className: "px-4 py-2 bg-gray-300 rounded", children: "Back" }),
        o < i.length - 1 ? /* @__PURE__ */ c.jsx("button", { onClick: O, className: "px-4 py-2 bg-blue-600 text-white rounded", children: "Next" }) : /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => {
              P(o) && r(n);
            },
            className: "px-4 py-2 bg-green-600 text-white rounded",
            children: "Submit"
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(ot, {}),
    L()
  ] });
};
export {
  mo as Button,
  uo as ButtonVariants,
  go as Card,
  vo as CardContent,
  ho as CardDescription,
  xo as CardFooter,
  yo as CardHeader,
  bo as CardTitle,
  oa as FormBuilder,
  po as Input
};
