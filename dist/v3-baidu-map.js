const eo = {
  "bm-map": [
    "click",
    "dblclick",
    "rightclick",
    "rightdblclick",
    "maptypechange",
    "mousemove",
    "mouseover",
    "mouseout",
    "movestart",
    "moving",
    "moveend",
    "zoomstart",
    "zoomend",
    "addoverlay",
    "addcontrol",
    "removecontrol",
    "removeoverlay",
    "clearoverlays",
    "dragstart",
    "dragging",
    "dragend",
    "addtilelayer",
    "removetilelayer",
    "load",
    "resize",
    "hotspotclick",
    "hotspotover",
    "hotspotout",
    "tilesloaded",
    "touchstart",
    "touchmove",
    "touchend",
    "longpress"
  ],
  "bm-geolocation": [
    "locationSuccess",
    "locationError"
  ],
  "bm-overview-map": [
    "viewchanged",
    "viewchanging"
  ],
  "bm-marker": [
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mouseout",
    "mouseover",
    "remove",
    "infowindowclose",
    "infowindowopen",
    "dragstart",
    "dragging",
    "dragend",
    "rightclick"
  ],
  "bm-polyline": [
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mouseout",
    "mouseover",
    "mousemove",
    "remove",
    "lineupdate"
  ],
  "bm-polygon": [
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mouseout",
    "mouseover",
    "remove",
    "lineupdate"
  ],
  "bm-circle": [
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mouseout",
    "mouseover",
    "remove",
    "lineupdate"
  ],
  "bm-label": [
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mouseout",
    "mouseover",
    "remove",
    "rightclick"
  ],
  "bm-info-window": [
    "close",
    "open",
    "maximize",
    "restore",
    "clickclose"
  ],
  "bm-ground": [
    "click",
    "dblclick"
  ],
  "bm-autocomplete": [
    "onconfirm",
    "onhighlight"
  ],
  "bm-point-collection": [
    "click",
    "mouseover",
    "mouseout"
  ]
};
var no = typeof global == "object" && global && global.Object === Object && global;
const oo = no;
var io = typeof self == "object" && self && self.Object === Object && self, so = oo || io || Function("return this")();
const ro = so;
var ao = ro.Symbol;
const Ct = ao;
var un = Object.prototype, lo = un.hasOwnProperty, co = un.toString, Et = Ct ? Ct.toStringTag : void 0;
function uo(t) {
  var e = lo.call(t, Et), n = t[Et];
  try {
    t[Et] = void 0;
    var o = !0;
  } catch {
  }
  var s = co.call(t);
  return o && (e ? t[Et] = n : delete t[Et]), s;
}
var po = Object.prototype, ho = po.toString;
function fo(t) {
  return ho.call(t);
}
var go = "[object Null]", mo = "[object Undefined]", je = Ct ? Ct.toStringTag : void 0;
function yo(t) {
  return t == null ? t === void 0 ? mo : go : je && je in Object(t) ? uo(t) : fo(t);
}
function _o(t) {
  return t != null && typeof t == "object";
}
var bo = "[object Symbol]";
function vo(t) {
  return typeof t == "symbol" || _o(t) && yo(t) == bo;
}
function wo(t, e) {
  for (var n = -1, o = t == null ? 0 : t.length, s = Array(o); ++n < o; )
    s[n] = e(t[n], n, t);
  return s;
}
var So = Array.isArray;
const xo = So;
var Co = 1 / 0, We = Ct ? Ct.prototype : void 0, He = We ? We.toString : void 0;
function pn(t) {
  if (typeof t == "string")
    return t;
  if (xo(t))
    return wo(t, pn) + "";
  if (vo(t))
    return He ? He.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Co ? "-0" : e;
}
function Io(t) {
  return t == null ? "" : pn(t);
}
function Mo(t, e, n) {
  var o = -1, s = t.length;
  e < 0 && (e = -e > s ? 0 : s + e), n = n > s ? s : n, n < 0 && (n += s), s = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var r = Array(s); ++o < s; )
    r[o] = t[o + e];
  return r;
}
function Oo(t, e, n) {
  var o = t.length;
  return n = n === void 0 ? o : n, !e && n >= o ? t : Mo(t, e, n);
}
var Eo = "\\ud800-\\udfff", $o = "\\u0300-\\u036f", ko = "\\ufe20-\\ufe2f", Bo = "\\u20d0-\\u20ff", To = $o + ko + Bo, No = "\\ufe0e\\ufe0f", Po = "\\u200d", Ro = RegExp("[" + Po + Eo + To + No + "]");
function dn(t) {
  return Ro.test(t);
}
function Ao(t) {
  return t.split("");
}
var hn = "\\ud800-\\udfff", Do = "\\u0300-\\u036f", zo = "\\ufe20-\\ufe2f", Lo = "\\u20d0-\\u20ff", Fo = Do + zo + Lo, Vo = "\\ufe0e\\ufe0f", jo = "[" + hn + "]", le = "[" + Fo + "]", ce = "\\ud83c[\\udffb-\\udfff]", Wo = "(?:" + le + "|" + ce + ")", fn = "[^" + hn + "]", gn = "(?:\\ud83c[\\udde6-\\uddff]){2}", mn = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ho = "\\u200d", yn = Wo + "?", _n = "[" + Vo + "]?", Zo = "(?:" + Ho + "(?:" + [fn, gn, mn].join("|") + ")" + _n + yn + ")*", Uo = _n + yn + Zo, Go = "(?:" + [fn + le + "?", le, gn, mn, jo].join("|") + ")", Ko = RegExp(ce + "(?=" + ce + ")|" + Go + Uo, "g");
function Jo(t) {
  return t.match(Ko) || [];
}
function qo(t) {
  return dn(t) ? Jo(t) : Ao(t);
}
function Yo(t) {
  return function(e) {
    e = Io(e);
    var n = dn(e) ? qo(e) : void 0, o = n ? n[0] : e.charAt(0), s = n ? Oo(n, 1).join("") : e.slice(1);
    return o[t]() + s;
  };
}
var Xo = Yo("toUpperCase");
const Qo = Xo;
function J(t, e) {
  const n = e || eo[this.$options.name];
  n && n.forEach((o) => {
    const s = o.slice(0, 2) === "on", r = "on" + Qo(s ? o.slice(2) : o), i = this.$attrs[r];
    i && t.addEventListener(o, i);
  });
}
function k(t, e = {}) {
  const { lng: n, lat: o } = e;
  return new t.Point(n, o);
}
function Gt(t, e = {}) {
  const { sw: n, ne: o } = e;
  return new t.Bounds(k(t, n), k(t, o));
}
function T(t, e = {}) {
  const { width: n, height: o } = e;
  return new t.Size(n, o);
}
function Pt(t, e = {}) {
  const { url: n, size: o, opts: s = {} } = e;
  return new t.Icon(n, T(t, o), {
    anchor: s.anchor && T(t, s.anchor),
    imageSize: s.imageSize && T(t, s.imageSize),
    imageOffset: s.imageOffset && T(t, s.imageOffset),
    infoWindowAnchor: s.infoWindowAnchor && T(t, s.infoWindowAnchor),
    printImageUrl: s.printImageUrl
  });
}
function ti(t, e = {}) {
  const { content: n, opts: o } = e;
  return new t.Label(n, {
    offset: o.offset && T(t, o.offset),
    position: o.position && k(t, o.position),
    enableMassClear: o.enableMassClear
  });
}
function ei(t, e = {}) {
  const { path: n, opts: o } = e;
  return new t.Symbol(global[n] || n, {
    anchor: o.anchor && T(t, o.anchor),
    fillColor: o.fillColor,
    fillOpacity: o.fillOpacity,
    scale: o.scale,
    rotation: o.rotation,
    strokeColor: o.strokeColor,
    strokeOpacity: o.strokeOpacity,
    strokeWeight: o.strokeWeight
  });
}
function ni(t, e = {}) {
  const { symbol: n, offset: o, repeat: s, fixedRotation: r } = e;
  return new t.IconSequence(
    n && ei(t, n),
    o,
    s,
    r
  );
}
const st = (t) => t.lng && t.lat, Ze = (t) => Object.prototype.toString.call(t).slice(8, -1), W = (t, e) => st(e) ? k(t, e) : e;
function oi(t, e) {
  const n = /* @__PURE__ */ Object.create(null), o = t.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return e ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function Ie(t) {
  if (N(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n], s = X(o) ? ai(o) : Ie(o);
      if (s)
        for (const r in s)
          e[r] = s[r];
    }
    return e;
  } else {
    if (X(t))
      return t;
    if (H(t))
      return t;
  }
}
const ii = /;(?![^(]*\))/g, si = /:([^]+)/, ri = /\/\*.*?\*\//gs;
function ai(t) {
  const e = {};
  return t.replace(ri, "").split(ii).forEach((n) => {
    if (n) {
      const o = n.split(si);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
}
function Me(t) {
  let e = "";
  if (X(t))
    e = t;
  else if (N(t))
    for (let n = 0; n < t.length; n++) {
      const o = Me(t[n]);
      o && (e += o + " ");
    }
  else if (H(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const ot = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, li = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], bn = () => {
}, ci = () => !1, ui = /^on[^a-z]/, pi = (t) => ui.test(t), et = Object.assign, di = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, hi = Object.prototype.hasOwnProperty, D = (t, e) => hi.call(t, e), N = Array.isArray, wt = (t) => ne(t) === "[object Map]", fi = (t) => ne(t) === "[object Set]", Z = (t) => typeof t == "function", X = (t) => typeof t == "string", Oe = (t) => typeof t == "symbol", H = (t) => t !== null && typeof t == "object", gi = (t) => H(t) && Z(t.then) && Z(t.catch), mi = Object.prototype.toString, ne = (t) => mi.call(t), vn = (t) => ne(t).slice(8, -1), yi = (t) => ne(t) === "[object Object]", Ee = (t) => X(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, wn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, _i = /-(\w)/g, Kt = wn((t) => t.replace(_i, (e, n) => n ? n.toUpperCase() : "")), Jt = wn((t) => t.charAt(0).toUpperCase() + t.slice(1)), qt = (t, e) => !Object.is(t, e), bi = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Ue;
const vi = () => Ue || (Ue = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ge(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let Sn;
function wi(t, e = Sn) {
  e && e.active && e.effects.push(t);
}
function Si() {
  return Sn;
}
const ue = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, xn = (t) => (t.w & ut) > 0, Cn = (t) => (t.n & ut) > 0, xi = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= ut;
}, Ci = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let o = 0; o < e.length; o++) {
      const s = e[o];
      xn(s) && !Cn(s) ? s.delete(t) : e[n++] = s, s.w &= ~ut, s.n &= ~ut;
    }
    e.length = n;
  }
}, pe = /* @__PURE__ */ new WeakMap();
let Bt = 0, ut = 1;
const de = 30;
let U;
const ft = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), he = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Ii {
  constructor(e, n = null, o) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, wi(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = U, n = gt;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = U, U = this, gt = !0, ut = 1 << ++Bt, Bt <= de ? xi(this) : Ke(this), this.fn();
    } finally {
      Bt <= de && Ci(this), ut = 1 << --Bt, U = this.parent, gt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    U === this ? this.deferStop = !0 : this.active && (Ke(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ke(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
let gt = !0;
const In = [];
function Mn() {
  In.push(gt), gt = !1;
}
function On() {
  const t = In.pop();
  gt = t === void 0 ? !0 : t;
}
function K(t, e, n) {
  if (gt && U) {
    let o = pe.get(t);
    o || pe.set(t, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = ue());
    const r = process.env.NODE_ENV !== "production" ? { effect: U, target: t, type: e, key: n } : void 0;
    Mi(s, r);
  }
}
function Mi(t, e) {
  let n = !1;
  Bt <= de ? Cn(t) || (t.n |= ut, n = !xn(t)) : n = !t.has(U), n && (t.add(U), U.deps.push(t), process.env.NODE_ENV !== "production" && U.onTrack && U.onTrack(Object.assign({ effect: U }, e)));
}
function pt(t, e, n, o, s, r) {
  const i = pe.get(t);
  if (!i)
    return;
  let a = [];
  if (e === "clear")
    a = [...i.values()];
  else if (n === "length" && N(t)) {
    const c = Number(o);
    i.forEach((d, u) => {
      (u === "length" || u >= c) && a.push(d);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), e) {
      case "add":
        N(t) ? Ee(n) && a.push(i.get("length")) : (a.push(i.get(ft)), wt(t) && a.push(i.get(he)));
        break;
      case "delete":
        N(t) || (a.push(i.get(ft)), wt(t) && a.push(i.get(he)));
        break;
      case "set":
        wt(t) && a.push(i.get(ft));
        break;
    }
  const l = process.env.NODE_ENV !== "production" ? { target: t, type: e, key: n, newValue: o, oldValue: s, oldTarget: r } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? Dt(a[0], l) : Dt(a[0]));
  else {
    const c = [];
    for (const d of a)
      d && c.push(...d);
    process.env.NODE_ENV !== "production" ? Dt(ue(c), l) : Dt(ue(c));
  }
}
function Dt(t, e) {
  const n = N(t) ? t : [...t];
  for (const o of n)
    o.computed && Je(o, e);
  for (const o of n)
    o.computed || Je(o, e);
}
function Je(t, e) {
  (t !== U || t.allowRecurse) && (process.env.NODE_ENV !== "production" && t.onTrigger && t.onTrigger(et({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
const Oi = /* @__PURE__ */ oi("__proto__,__v_isRef,__isVue"), En = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Oe)
), Ei = /* @__PURE__ */ $e(), $i = /* @__PURE__ */ $e(!0), ki = /* @__PURE__ */ $e(!0, !0), qe = /* @__PURE__ */ Bi();
function Bi() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const o = O(this);
      for (let r = 0, i = this.length; r < i; r++)
        K(o, "get", r + "");
      const s = o[e](...n);
      return s === -1 || s === !1 ? o[e](...n.map(O)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Mn();
      const o = O(this)[e].apply(this, n);
      return On(), o;
    };
  }), t;
}
function Ti(t) {
  const e = O(this);
  return K(e, "has", t), e.hasOwnProperty(t);
}
function $e(t = !1, e = !1) {
  return function(o, s, r) {
    if (s === "__v_isReactive")
      return !t;
    if (s === "__v_isReadonly")
      return t;
    if (s === "__v_isShallow")
      return e;
    if (s === "__v_raw" && r === (t ? e ? Nn : Tn : e ? Ki : Bn).get(o))
      return o;
    const i = N(o);
    if (!t) {
      if (i && D(qe, s))
        return Reflect.get(qe, s, r);
      if (s === "hasOwnProperty")
        return Ti;
    }
    const a = Reflect.get(o, s, r);
    return (Oe(s) ? En.has(s) : Oi(s)) || (t || K(o, "get", s), e) ? a : G(a) ? i && Ee(s) ? a : a.value : H(a) ? t ? Rn(a) : Pn(a) : a;
  };
}
const Ni = /* @__PURE__ */ Pi();
function Pi(t = !1) {
  return function(n, o, s, r) {
    let i = n[o];
    if (bt(i) && G(i) && !G(s))
      return !1;
    if (!t && (!fe(s) && !bt(s) && (i = O(i), s = O(s)), !N(n) && G(i) && !G(s)))
      return i.value = s, !0;
    const a = N(n) && Ee(o) ? Number(o) < n.length : D(n, o), l = Reflect.set(n, o, s, r);
    return n === O(r) && (a ? qt(s, i) && pt(n, "set", o, s, i) : pt(n, "add", o, s)), l;
  };
}
function Ri(t, e) {
  const n = D(t, e), o = t[e], s = Reflect.deleteProperty(t, e);
  return s && n && pt(t, "delete", e, void 0, o), s;
}
function Ai(t, e) {
  const n = Reflect.has(t, e);
  return (!Oe(e) || !En.has(e)) && K(t, "has", e), n;
}
function Di(t) {
  return K(t, "iterate", N(t) ? "length" : ft), Reflect.ownKeys(t);
}
const zi = {
  get: Ei,
  set: Ni,
  deleteProperty: Ri,
  has: Ai,
  ownKeys: Di
}, $n = {
  get: $i,
  set(t, e) {
    return process.env.NODE_ENV !== "production" && Ge(`Set operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  },
  deleteProperty(t, e) {
    return process.env.NODE_ENV !== "production" && Ge(`Delete operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  }
}, Li = /* @__PURE__ */ et({}, $n, {
  get: ki
}), ke = (t) => t, oe = (t) => Reflect.getPrototypeOf(t);
function zt(t, e, n = !1, o = !1) {
  t = t.__v_raw;
  const s = O(t), r = O(e);
  n || (e !== r && K(s, "get", e), K(s, "get", r));
  const { has: i } = oe(s), a = o ? ke : n ? Pe : Ne;
  if (i.call(s, e))
    return a(t.get(e));
  if (i.call(s, r))
    return a(t.get(r));
  t !== s && t.get(e);
}
function Lt(t, e = !1) {
  const n = this.__v_raw, o = O(n), s = O(t);
  return e || (t !== s && K(o, "has", t), K(o, "has", s)), t === s ? n.has(t) : n.has(t) || n.has(s);
}
function Ft(t, e = !1) {
  return t = t.__v_raw, !e && K(O(t), "iterate", ft), Reflect.get(t, "size", t);
}
function Ye(t) {
  t = O(t);
  const e = O(this);
  return oe(e).has.call(e, t) || (e.add(t), pt(e, "add", t, t)), this;
}
function Xe(t, e) {
  e = O(e);
  const n = O(this), { has: o, get: s } = oe(n);
  let r = o.call(n, t);
  r ? process.env.NODE_ENV !== "production" && kn(n, o, t) : (t = O(t), r = o.call(n, t));
  const i = s.call(n, t);
  return n.set(t, e), r ? qt(e, i) && pt(n, "set", t, e, i) : pt(n, "add", t, e), this;
}
function Qe(t) {
  const e = O(this), { has: n, get: o } = oe(e);
  let s = n.call(e, t);
  s ? process.env.NODE_ENV !== "production" && kn(e, n, t) : (t = O(t), s = n.call(e, t));
  const r = o ? o.call(e, t) : void 0, i = e.delete(t);
  return s && pt(e, "delete", t, void 0, r), i;
}
function tn() {
  const t = O(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? wt(t) ? new Map(t) : new Set(t) : void 0, o = t.clear();
  return e && pt(t, "clear", void 0, void 0, n), o;
}
function Vt(t, e) {
  return function(o, s) {
    const r = this, i = r.__v_raw, a = O(i), l = e ? ke : t ? Pe : Ne;
    return !t && K(a, "iterate", ft), i.forEach((c, d) => o.call(s, l(c), l(d), r));
  };
}
function jt(t, e, n) {
  return function(...o) {
    const s = this.__v_raw, r = O(s), i = wt(r), a = t === "entries" || t === Symbol.iterator && i, l = t === "keys" && i, c = s[t](...o), d = n ? ke : e ? Pe : Ne;
    return !e && K(r, "iterate", l ? he : ft), {
      // iterator protocol
      next() {
        const { value: u, done: h } = c.next();
        return h ? { value: u, done: h } : {
          value: a ? [d(u[0]), d(u[1])] : d(u),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function at(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(`${Jt(t)} operation ${n}failed: target is readonly.`, O(this));
    }
    return t === "delete" ? !1 : this;
  };
}
function Fi() {
  const t = {
    get(r) {
      return zt(this, r);
    },
    get size() {
      return Ft(this);
    },
    has: Lt,
    add: Ye,
    set: Xe,
    delete: Qe,
    clear: tn,
    forEach: Vt(!1, !1)
  }, e = {
    get(r) {
      return zt(this, r, !1, !0);
    },
    get size() {
      return Ft(this);
    },
    has: Lt,
    add: Ye,
    set: Xe,
    delete: Qe,
    clear: tn,
    forEach: Vt(!1, !0)
  }, n = {
    get(r) {
      return zt(this, r, !0);
    },
    get size() {
      return Ft(this, !0);
    },
    has(r) {
      return Lt.call(this, r, !0);
    },
    add: at(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: at(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: at(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: at(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Vt(!0, !1)
  }, o = {
    get(r) {
      return zt(this, r, !0, !0);
    },
    get size() {
      return Ft(this, !0);
    },
    has(r) {
      return Lt.call(this, r, !0);
    },
    add: at(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: at(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: at(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: at(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Vt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    t[r] = jt(r, !1, !1), n[r] = jt(r, !0, !1), e[r] = jt(r, !1, !0), o[r] = jt(r, !0, !0);
  }), [
    t,
    n,
    e,
    o
  ];
}
const [Vi, ji, Wi, Hi] = /* @__PURE__ */ Fi();
function Be(t, e) {
  const n = e ? t ? Hi : Wi : t ? ji : Vi;
  return (o, s, r) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? o : Reflect.get(D(n, s) && s in o ? n : o, s, r);
}
const Zi = {
  get: /* @__PURE__ */ Be(!1, !1)
}, Ui = {
  get: /* @__PURE__ */ Be(!0, !1)
}, Gi = {
  get: /* @__PURE__ */ Be(!0, !0)
};
function kn(t, e, n) {
  const o = O(n);
  if (o !== n && e.call(t, o)) {
    const s = vn(t);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Bn = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap();
function Ji(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function qi(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Ji(vn(t));
}
function Pn(t) {
  return bt(t) ? t : Te(t, !1, zi, Zi, Bn);
}
function Rn(t) {
  return Te(t, !0, $n, Ui, Tn);
}
function Wt(t) {
  return Te(t, !0, Li, Gi, Nn);
}
function Te(t, e, n, o, s) {
  if (!H(t))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const r = s.get(t);
  if (r)
    return r;
  const i = qi(t);
  if (i === 0)
    return t;
  const a = new Proxy(t, i === 2 ? o : n);
  return s.set(t, a), a;
}
function mt(t) {
  return bt(t) ? mt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function bt(t) {
  return !!(t && t.__v_isReadonly);
}
function fe(t) {
  return !!(t && t.__v_isShallow);
}
function ge(t) {
  return mt(t) || bt(t);
}
function O(t) {
  const e = t && t.__v_raw;
  return e ? O(e) : t;
}
function Yi(t) {
  return bi(t, "__v_skip", !0), t;
}
const Ne = (t) => H(t) ? Pn(t) : t, Pe = (t) => H(t) ? Rn(t) : t;
function G(t) {
  return !!(t && t.__v_isRef === !0);
}
function Xi(t) {
  return G(t) ? t.value : t;
}
const Qi = {
  get: (t, e, n) => Xi(Reflect.get(t, e, n)),
  set: (t, e, n, o) => {
    const s = t[e];
    return G(s) && !G(n) ? (s.value = n, !0) : Reflect.set(t, e, n, o);
  }
};
function ts(t) {
  return mt(t) ? t : new Proxy(t, Qi);
}
const yt = [];
function es(t) {
  yt.push(t);
}
function ns() {
  yt.pop();
}
function z(t, ...e) {
  if (process.env.NODE_ENV === "production")
    return;
  Mn();
  const n = yt.length ? yt[yt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = os();
  if (o)
    _t(o, n, 11, [
      t + e.join(""),
      n && n.proxy,
      s.map(({ vnode: r }) => `at <${Xn(n, r.type)}>`).join(`
`),
      s
    ]);
  else {
    const r = [`[Vue warn]: ${t}`, ...e];
    s.length && r.push(`
`, ...is(s)), console.warn(...r);
  }
  On();
}
function os() {
  let t = yt[yt.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const o = t.component && t.component.parent;
    t = o && o.vnode;
  }
  return e;
}
function is(t) {
  const e = [];
  return t.forEach((n, o) => {
    e.push(...o === 0 ? [] : [`
`], ...ss(n));
  }), e;
}
function ss({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", o = t.component ? t.component.parent == null : !1, s = ` at <${Xn(t.component, t.type, o)}`, r = ">" + n;
  return t.props ? [s, ...rs(t.props), r] : [s + r];
}
function rs(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((o) => {
    e.push(...An(o, t[o]));
  }), n.length > 3 && e.push(" ..."), e;
}
function An(t, e, n) {
  return X(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : G(e) ? (e = An(t, O(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : Z(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = O(e), n ? e : [`${t}=`, e]);
}
const Dn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function _t(t, e, n, o) {
  let s;
  try {
    s = o ? t(...o) : t();
  } catch (r) {
    zn(r, e, n);
  }
  return s;
}
function me(t, e, n, o) {
  if (Z(t)) {
    const r = _t(t, e, n, o);
    return r && gi(r) && r.catch((i) => {
      zn(i, e, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < t.length; r++)
    s.push(me(t[r], e, n, o));
  return s;
}
function zn(t, e, n, o = !0) {
  const s = e ? e.vnode : null;
  if (e) {
    let r = e.parent;
    const i = e.proxy, a = process.env.NODE_ENV !== "production" ? Dn[n] : n;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](t, i, a) === !1)
            return;
      }
      r = r.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      _t(l, null, 10, [t, i, a]);
      return;
    }
  }
  as(t, n, s, o);
}
function as(t, e, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Dn[e];
    if (n && es(n), z(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && ns(), o)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let Yt = !1, ye = !1;
const Q = [];
let ct = 0;
const St = [];
let nt = null, lt = 0;
const Ln = /* @__PURE__ */ Promise.resolve();
let Re = null;
const ls = 100;
function cs(t) {
  const e = Re || Ln;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function us(t) {
  let e = ct + 1, n = Q.length;
  for (; e < n; ) {
    const o = e + n >>> 1;
    Rt(Q[o]) < t ? e = o + 1 : n = o;
  }
  return e;
}
function Ae(t) {
  (!Q.length || !Q.includes(t, Yt && t.allowRecurse ? ct + 1 : ct)) && (t.id == null ? Q.push(t) : Q.splice(us(t.id), 0, t), Fn());
}
function Fn() {
  !Yt && !ye && (ye = !0, Re = Ln.then(jn));
}
function Vn(t) {
  N(t) ? St.push(...t) : (!nt || !nt.includes(t, t.allowRecurse ? lt + 1 : lt)) && St.push(t), Fn();
}
function ps(t) {
  if (St.length) {
    const e = [...new Set(St)];
    if (St.length = 0, nt) {
      nt.push(...e);
      return;
    }
    for (nt = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), nt.sort((n, o) => Rt(n) - Rt(o)), lt = 0; lt < nt.length; lt++)
      process.env.NODE_ENV !== "production" && Wn(t, nt[lt]) || nt[lt]();
    nt = null, lt = 0;
  }
}
const Rt = (t) => t.id == null ? 1 / 0 : t.id, ds = (t, e) => {
  const n = Rt(t) - Rt(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function jn(t) {
  ye = !1, Yt = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Q.sort(ds);
  const e = process.env.NODE_ENV !== "production" ? (n) => Wn(t, n) : bn;
  try {
    for (ct = 0; ct < Q.length; ct++) {
      const n = Q[ct];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        _t(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    ct = 0, Q.length = 0, ps(t), Yt = !1, Re = null, (Q.length || St.length) && jn(t);
  }
}
function Wn(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > ls) {
      const o = e.ownerInstance, s = o && Fe(o.type);
      return z(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      t.set(e, n + 1);
  }
}
const $t = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (vi().__VUE_HMR_RUNTIME__ = {
  createRecord: se(hs),
  rerender: se(fs),
  reload: se(gs)
});
const Xt = /* @__PURE__ */ new Map();
function hs(t, e) {
  return Xt.has(t) ? !1 : (Xt.set(t, {
    initialDef: Tt(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Tt(t) {
  return Qn(t) ? t.__vccOpts : t;
}
function fs(t, e) {
  const n = Xt.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((o) => {
    e && (o.render = e, Tt(o.type).render = e), o.renderCache = [], o.update();
  }));
}
function gs(t, e) {
  const n = Xt.get(t);
  if (!n)
    return;
  e = Tt(e), en(n.initialDef, e);
  const o = [...n.instances];
  for (const s of o) {
    const r = Tt(s.type);
    $t.has(r) || (r !== n.initialDef && en(r, e), $t.add(r)), s.appContext.optionsCache.delete(s.type), s.ceReload ? ($t.add(r), s.ceReload(e.styles), $t.delete(r)) : s.parent ? Ae(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Vn(() => {
    for (const s of o)
      $t.delete(Tt(s.type));
  });
}
function en(t, e) {
  et(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function se(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Y = null, ms = null;
const ys = (t) => t.__isSuspense;
function _s(t, e) {
  e && e.pendingBranch ? N(t) ? e.effects.push(...t) : e.effects.push(t) : Vn(t);
}
const Ht = {};
function bs(t, e, { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = ot) {
  process.env.NODE_ENV !== "production" && !e && (n !== void 0 && z('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && z('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const a = (x) => {
    z("Invalid watch source: ", x, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, l = Si() === (it == null ? void 0 : it.scope) ? it : null;
  let c, d = !1, u = !1;
  if (G(t) ? (c = () => t.value, d = fe(t)) : mt(t) ? (c = () => t, o = !0) : N(t) ? (u = !0, d = t.some((x) => mt(x) || fe(x)), c = () => t.map((x) => {
    if (G(x))
      return x.value;
    if (mt(x))
      return vt(x);
    if (Z(x))
      return _t(
        x,
        l,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && a(x);
  })) : Z(t) ? e ? c = () => _t(
    t,
    l,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : c = () => {
    if (!(l && l.isUnmounted))
      return h && h(), me(t, l, 3, [p]);
  } : (c = bn, process.env.NODE_ENV !== "production" && a(t)), e && o) {
    const x = c;
    c = () => vt(x());
  }
  let h, p = (x) => {
    h = f.onStop = () => {
      _t(
        x,
        l,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, g = u ? new Array(t.length).fill(Ht) : Ht;
  const y = () => {
    if (f.active)
      if (e) {
        const x = f.run();
        (o || d || (u ? x.some((P, E) => qt(P, g[E])) : qt(x, g))) && (h && h(), me(e, l, 3, [
          x,
          // pass undefined as the old value when it's changed for the first time
          g === Ht ? void 0 : u && g[0] === Ht ? [] : g,
          p
        ]), g = x);
      } else
        f.run();
  };
  y.allowRecurse = !!e;
  let b;
  s === "sync" ? b = y : s === "post" ? b = () => rn(y, l && l.suspense) : (y.pre = !0, l && (y.id = l.uid), b = () => Ae(y));
  const f = new Ii(c, b);
  return process.env.NODE_ENV !== "production" && (f.onTrack = r, f.onTrigger = i), e ? n ? y() : g = f.run() : s === "post" ? rn(f.run.bind(f), l && l.suspense) : f.run(), () => {
    f.stop(), l && l.scope && di(l.scope.effects, f);
  };
}
function vs(t, e, n) {
  const o = this.proxy, s = X(t) ? t.includes(".") ? ws(o, t) : () => o[t] : t.bind(o, o);
  let r;
  Z(e) ? r = e : (r = e.handler, n = e);
  const i = it;
  an(this);
  const a = bs(s, r.bind(o), n);
  return i ? an(i) : Vs(), a;
}
function ws(t, e) {
  const n = e.split(".");
  return () => {
    let o = t;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function vt(t, e) {
  if (!H(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), G(t))
    vt(t.value, e);
  else if (N(t))
    for (let n = 0; n < t.length; n++)
      vt(t[n], e);
  else if (fi(t) || wt(t))
    t.forEach((n) => {
      vt(n, e);
    });
  else if (yi(t))
    for (const n in t)
      vt(t[n], e);
  return t;
}
const Ss = (t) => !!t.type.__asyncLoader;
function It(t, e) {
  return process.env.NODE_ENV !== "production" && z("withDirectives can only be used inside render functions."), t;
}
const _e = "components";
function xs(t, e) {
  return Is(_e, t, !0, e) || t;
}
const Cs = Symbol();
function Is(t, e, n = !0, o = !1) {
  const s = it;
  if (s) {
    const r = s.type;
    if (t === _e) {
      const a = Fe(
        r,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (a && (a === e || a === Kt(e) || a === Jt(Kt(e))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      nn(s[t] || r[t], e) || // global registration
      nn(s.appContext[t], e)
    );
    if (!i && o)
      return r;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const a = t === _e ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      z(`Failed to resolve ${t.slice(0, -1)}: ${e}${a}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && z(`resolve${Jt(t.slice(0, -1))} can only be used in render() or setup().`);
}
function nn(t, e) {
  return t && (t[e] || t[Kt(e)] || t[Jt(Kt(e))]);
}
function Ms(t, e, n, o) {
  let s;
  const r = n && n[o];
  if (N(t) || X(t)) {
    s = new Array(t.length);
    for (let i = 0, a = t.length; i < a; i++)
      s[i] = e(t[i], i, void 0, r && r[i]);
  } else if (typeof t == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(t) && z(`The v-for range expect an integer value but got ${t}.`), s = new Array(t);
    for (let i = 0; i < t; i++)
      s[i] = e(i + 1, i, void 0, r && r[i]);
  } else if (H(t))
    if (t[Symbol.iterator])
      s = Array.from(t, (i, a) => e(i, a, void 0, r && r[a]));
    else {
      const i = Object.keys(t);
      s = new Array(i.length);
      for (let a = 0, l = i.length; a < l; a++) {
        const c = i[a];
        s[a] = e(t[c], c, a, r && r[a]);
      }
    }
  else
    s = [];
  return n && (n[o] = s), s;
}
function q(t, e, n = {}, o, s) {
  if (Y.isCE || Y.parent && Ss(Y.parent) && Y.parent.isCE)
    return e !== "default" && (n.name = e), ie("slot", n, o && o());
  let r = t[e];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (z("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), r = () => []), r && r._c && (r._d = !1), A();
  const i = r && Hn(r(n)), a = De(
    At,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${e}`
    },
    i || (o ? o() : []),
    i && t._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), r && r._c && (r._d = !0), a;
}
function Hn(t) {
  return t.some((e) => Un(e) ? !(e.type === te || e.type === At && !Hn(e.children)) : !0) ? t : null;
}
const be = (t) => t ? js(t) ? Ws(t) || t.proxy : be(t.parent) : null, Nt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ et(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => process.env.NODE_ENV !== "production" ? Wt(t.props) : t.props,
    $attrs: (t) => process.env.NODE_ENV !== "production" ? Wt(t.attrs) : t.attrs,
    $slots: (t) => process.env.NODE_ENV !== "production" ? Wt(t.slots) : t.slots,
    $refs: (t) => process.env.NODE_ENV !== "production" ? Wt(t.refs) : t.refs,
    $parent: (t) => be(t.parent),
    $root: (t) => be(t.root),
    $emit: (t) => t.emit,
    $options: (t) => $s(t),
    $forceUpdate: (t) => t.f || (t.f = () => Ae(t.update)),
    $nextTick: (t) => t.n || (t.n = cs.bind(t.proxy)),
    $watch: (t) => vs.bind(t)
  })
), Os = (t) => t === "_" || t === "$", re = (t, e) => t !== ot && !t.__isScriptSetup && D(t, e), Es = {
  get({ _: t }, e) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: a, appContext: l } = t;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    let c;
    if (e[0] !== "$") {
      const p = i[e];
      if (p !== void 0)
        switch (p) {
          case 1:
            return o[e];
          case 2:
            return s[e];
          case 4:
            return n[e];
          case 3:
            return r[e];
        }
      else {
        if (re(o, e))
          return i[e] = 1, o[e];
        if (s !== ot && D(s, e))
          return i[e] = 2, s[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = t.propsOptions[0]) && D(c, e)
        )
          return i[e] = 3, r[e];
        if (n !== ot && D(n, e))
          return i[e] = 4, n[e];
        i[e] = 0;
      }
    }
    const d = Nt[e];
    let u, h;
    if (d)
      return e === "$attrs" && (K(t, "get", e), process.env.NODE_ENV !== "production" && void 0), d(t);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[e])
    )
      return u;
    if (n !== ot && D(n, e))
      return i[e] = 4, n[e];
    if (
      // global properties
      h = l.config.globalProperties, D(h, e)
    )
      return h[e];
    process.env.NODE_ENV !== "production" && Y && (!X(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (s !== ot && Os(e[0]) && D(s, e) ? z(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : t === Y && z(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`));
  },
  set({ _: t }, e, n) {
    const { data: o, setupState: s, ctx: r } = t;
    return re(s, e) ? (s[e] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && D(s, e) ? (z(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : o !== ot && D(o, e) ? (o[e] = n, !0) : D(t.props, e) ? (process.env.NODE_ENV !== "production" && z(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && z(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(r, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[e] = n, !0);
  },
  has({ _: { data: t, setupState: e, accessCache: n, ctx: o, appContext: s, propsOptions: r } }, i) {
    let a;
    return !!n[i] || t !== ot && D(t, i) || re(e, i) || (a = r[0]) && D(a, i) || D(o, i) || D(Nt, i) || D(s.config.globalProperties, i);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : D(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (Es.ownKeys = (t) => (z("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(t)));
function $s(t) {
  const e = t.type, { mixins: n, extends: o } = e, { mixins: s, optionsCache: r, config: { optionMergeStrategies: i } } = t.appContext, a = r.get(e);
  let l;
  return a ? l = a : !s.length && !n && !o ? l = e : (l = {}, s.length && s.forEach((c) => Qt(l, c, i, !0)), Qt(l, e, i)), H(e) && r.set(e, l), l;
}
function Qt(t, e, n, o = !1) {
  const { mixins: s, extends: r } = e;
  r && Qt(t, r, n, !0), s && s.forEach((i) => Qt(t, i, n, !0));
  for (const i in e)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && z('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const a = ks[i] || n && n[i];
      t[i] = a ? a(t[i], e[i]) : e[i];
    }
  return t;
}
const ks = {
  data: on,
  props: ht,
  emits: ht,
  // objects
  methods: ht,
  computed: ht,
  // lifecycle
  beforeCreate: j,
  created: j,
  beforeMount: j,
  mounted: j,
  beforeUpdate: j,
  updated: j,
  beforeDestroy: j,
  beforeUnmount: j,
  destroyed: j,
  unmounted: j,
  activated: j,
  deactivated: j,
  errorCaptured: j,
  serverPrefetch: j,
  // assets
  components: ht,
  directives: ht,
  // watch
  watch: Ts,
  // provide / inject
  provide: on,
  inject: Bs
};
function on(t, e) {
  return e ? t ? function() {
    return et(Z(t) ? t.call(this, this) : t, Z(e) ? e.call(this, this) : e);
  } : e : t;
}
function Bs(t, e) {
  return ht(sn(t), sn(e));
}
function sn(t) {
  if (N(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function j(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ht(t, e) {
  return t ? et(et(/* @__PURE__ */ Object.create(null), t), e) : e;
}
function Ts(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = et(/* @__PURE__ */ Object.create(null), t);
  for (const o in e)
    n[o] = j(t[o], e[o]);
  return n;
}
function Ns() {
  return {
    app: null,
    config: {
      isNativeTag: ci,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
const rn = _s, Ps = (t) => t.__isTeleport, At = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Rs = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), te = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0);
Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
const Zt = [];
let tt = null;
function A(t = !1) {
  Zt.push(tt = t ? null : []);
}
function As() {
  Zt.pop(), tt = Zt[Zt.length - 1] || null;
}
function Zn(t) {
  return t.dynamicChildren = tt || li, As(), tt && tt.push(t), t;
}
function L(t, e, n, o, s, r) {
  return Zn(ze(
    t,
    e,
    n,
    o,
    s,
    r,
    !0
    /* isBlock */
  ));
}
function De(t, e, n, o, s) {
  return Zn(ie(
    t,
    e,
    n,
    o,
    s,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function Un(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const Ds = (...t) => Jn(...t), Gn = "__vInternal", Kn = ({ key: t }) => t ?? null, Ut = ({ ref: t, ref_key: e, ref_for: n }) => t != null ? X(t) || G(t) || Z(t) ? { i: Y, r: t, k: e, f: !!n } : t : null;
function ze(t, e = null, n = null, o = 0, s = null, r = t === At ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Kn(e),
    ref: e && Ut(e),
    scopeId: ms,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Y
  };
  return a ? (Le(l, n), r & 128 && t.normalize(l)) : n && (l.shapeFlag |= X(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && z("VNode created with invalid key (NaN). VNode type:", l.type), // avoid a block node from tracking itself
  !i && // has current parent block
  tt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && tt.push(l), l;
}
const ie = process.env.NODE_ENV !== "production" ? Ds : Jn;
function Jn(t, e = null, n = null, o = 0, s = null, r = !1) {
  if ((!t || t === Cs) && (process.env.NODE_ENV !== "production" && !t && z(`Invalid vnode type when creating vnode: ${t}.`), t = te), Un(t)) {
    const a = ee(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Le(a, n), !r && tt && (a.shapeFlag & 6 ? tt[tt.indexOf(t)] = a : tt.push(a)), a.patchFlag |= -2, a;
  }
  if (Qn(t) && (t = t.__vccOpts), e) {
    e = zs(e);
    let { class: a, style: l } = e;
    a && !X(a) && (e.class = Me(a)), H(l) && (ge(l) && !N(l) && (l = et({}, l)), e.style = Ie(l));
  }
  const i = X(t) ? 1 : ys(t) ? 128 : Ps(t) ? 64 : H(t) ? 4 : Z(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && ge(t) && (t = O(t), z("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, t)), ze(t, e, n, o, s, i, r, !0);
}
function zs(t) {
  return t ? ge(t) || Gn in t ? et({}, t) : t : null;
}
function ee(t, e, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = t, a = e ? Fs(o || {}, e) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && Kn(a),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? N(s) ? s.concat(Ut(e)) : [s, Ut(e)] : Ut(e)
    ) : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && N(i) ? i.map(qn) : i,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== At ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && ee(t.ssContent),
    ssFallback: t.ssFallback && ee(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function qn(t) {
  const e = ee(t);
  return N(t.children) && (e.children = t.children.map(qn)), e;
}
function Ls(t = " ", e = 0) {
  return ie(Rs, null, t, e);
}
function Yn(t = "", e = !1) {
  return e ? (A(), De(te, null, t)) : ie(te, null, t);
}
function Le(t, e) {
  let n = 0;
  const { shapeFlag: o } = t;
  if (e == null)
    e = null;
  else if (N(e))
    n = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), Le(t, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = e._;
      !s && !(Gn in e) ? e._ctx = Y : s === 3 && Y && (Y.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    Z(e) ? (e = { default: e, _ctx: Y }, n = 32) : (e = String(e), o & 64 ? (n = 16, e = [Ls(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Fs(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (const s in o)
      if (s === "class")
        e.class !== o.class && (e.class = Me([e.class, o.class]));
      else if (s === "style")
        e.style = Ie([e.style, o.style]);
      else if (pi(s)) {
        const r = e[s], i = o[s];
        i && r !== i && !(N(r) && r.includes(i)) && (e[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (e[s] = o[s]);
  }
  return e;
}
Ns();
let it = null;
const an = (t) => {
  it = t, t.scope.on();
}, Vs = () => {
  it && it.scope.off(), it = null;
};
function js(t) {
  return t.vnode.shapeFlag & 4;
}
function Ws(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(ts(Yi(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in Nt)
          return Nt[n](t);
      },
      has(e, n) {
        return n in e || n in Nt;
      }
    }));
}
const Hs = /(?:^|[-_])(\w)/g, Zs = (t) => t.replace(Hs, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Fe(t, e = !0) {
  return Z(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Xn(t, e, n = !1) {
  let o = Fe(e);
  if (!o && e.__file) {
    const s = e.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && t && t.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === e)
          return i;
    };
    o = s(t.components || t.parent.type.components) || s(t.appContext.components);
  }
  return o ? Zs(o) : n ? "App" : "Anonymous";
}
function Qn(t) {
  return Z(t) && "__vccOpts" in t;
}
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function ae(t) {
  return !!(t && t.__v_isShallow);
}
function Us() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, s = {
    header(u) {
      return H(u) ? u.__isVue ? ["div", t, "VueInstance"] : G(u) ? [
        "div",
        {},
        ["span", t, d(u)],
        "<",
        a(u.value),
        ">"
      ] : mt(u) ? [
        "div",
        {},
        ["span", t, ae(u) ? "ShallowReactive" : "Reactive"],
        "<",
        a(u),
        `>${bt(u) ? " (readonly)" : ""}`
      ] : bt(u) ? [
        "div",
        {},
        ["span", t, ae(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...r(u.$)
        ];
    }
  };
  function r(u) {
    const h = [];
    u.type.props && u.props && h.push(i("props", O(u.props))), u.setupState !== ot && h.push(i("setup", u.setupState)), u.data !== ot && h.push(i("data", O(u.data)));
    const p = l(u, "computed");
    p && h.push(i("computed", p));
    const g = l(u, "inject");
    return g && h.push(i("injected", g)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), h;
  }
  function i(u, h) {
    return h = et({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((p) => [
          "div",
          {},
          ["span", o, p + ": "],
          a(h[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(u, h = !0) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : H(u) ? ["object", { object: h ? O(u) : u }] : ["span", n, String(u)];
  }
  function l(u, h) {
    const p = u.type;
    if (Z(p))
      return;
    const g = {};
    for (const y in u.ctx)
      c(p, y, h) && (g[y] = u.ctx[y]);
    return g;
  }
  function c(u, h, p) {
    const g = u[p];
    if (N(g) && g.includes(h) || H(g) && h in g || u.extends && c(u.extends, h, p) || u.mixins && u.mixins.some((y) => c(y, h, p)))
      return !0;
  }
  function d(u) {
    return ae(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Mt = {
  beforeMount(t, { value: e }, { transition: n }) {
    t._vod = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : kt(t, e);
  },
  mounted(t, { value: e }, { transition: n }) {
    n && e && n.enter(t);
  },
  updated(t, { value: e, oldValue: n }, { transition: o }) {
    !e != !n && (o ? e ? (o.beforeEnter(t), kt(t, !0), o.enter(t)) : o.leave(t, () => {
      kt(t, !1);
    }) : kt(t, e));
  },
  beforeUnmount(t, { value: e }) {
    kt(t, e);
  }
};
function kt(t, e) {
  t.style.display = e ? t._vod : "none";
}
function Gs() {
  Us();
}
process.env.NODE_ENV !== "production" && Gs();
const F = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e)
    n[o] = s;
  return n;
}, V = window, rt = "BMapGL", Ks = "//api.map.baidu.com/api?v=1.0&&type=webgl&callback=_initBaiduMap", dt = "setMapStyleV2", Js = {
  name: "bm-map",
  props: {
    ak: {
      type: String
    },
    center: {
      type: [Object, String]
    },
    zoom: {
      type: Number,
      default: 5
    },
    minZoom: {
      type: Number
    },
    maxZoom: {
      type: Number
    },
    highResolution: {
      type: Boolean,
      default: !0
    },
    mapClick: {
      type: Boolean,
      default: !0
    },
    mapType: {
      type: String
    },
    dragging: {
      type: Boolean,
      default: !0
    },
    scrollWheelZoom: {
      type: Boolean,
      default: !1
    },
    doubleClickZoom: {
      type: Boolean,
      default: !0
    },
    keyboard: {
      type: Boolean,
      default: !0
    },
    inertialDragging: {
      type: Boolean,
      default: !0
    },
    continuousZoom: {
      type: Boolean,
      default: !0
    },
    pinchToZoom: {
      type: Boolean,
      default: !0
    },
    autoResize: {
      type: Boolean,
      default: !0
    },
    theme: {
      type: Array
    },
    mapStyle: {
      type: Object
    }
  },
  data() {
    return {
      hasBmView: !1
    };
  },
  watch: {
    center(t, e) {
      const { map: n, zoom: o } = this;
      Ze(t) === "String" && t !== e && n.centerAndZoom(t, o);
    },
    "center.lng"(t, e) {
      const { BMap: n, map: o, zoom: s, center: r } = this;
      t !== e && t >= -180 && t <= 180 && o.centerAndZoom(new n.Point(t, r.lat), s);
    },
    "center.lat"(t, e) {
      const { BMap: n, map: o, zoom: s, center: r } = this;
      t !== e && t >= -74 && t <= 74 && o.centerAndZoom(new n.Point(r.lng, t), s);
    },
    zoom(t, e) {
      const { map: n } = this;
      t !== e && t >= 3 && t <= 19 && n.setZoom(t);
    },
    minZoom(t) {
      const { map: e } = this;
      e.setMinZoom(t);
    },
    maxZoom(t) {
      const { map: e } = this;
      e.setMaxZoom(t);
    },
    highResolution() {
      this.reset();
    },
    mapClick() {
      this.reset();
    },
    mapType(t) {
      const { map: e } = this;
      e.setMapType(V[t]);
    },
    dragging(t) {
      const { map: e } = this;
      t ? e.enableDragging() : e.disableDragging();
    },
    scrollWheelZoom(t) {
      const { map: e } = this;
      t ? e.enableScrollWheelZoom() : e.disableScrollWheelZoom();
    },
    doubleClickZoom(t) {
      const { map: e } = this;
      t ? e.enableDoubleClickZoom() : e.disableDoubleClickZoom();
    },
    keyboard(t) {
      const { map: e } = this;
      t ? e.enableKeyboard() : e.disableKeyboard();
    },
    inertialDragging(t) {
      const { map: e } = this;
      t ? e.enableInertialDragging() : e.disableInertialDragging();
    },
    continuousZoom(t) {
      const { map: e } = this;
      t ? e.enableContinuousZoom() : e.disableContinuousZoom();
    },
    pinchToZoom(t) {
      const { map: e } = this;
      t ? e.enablePinchToZoom() : e.disablePinchToZoom();
    },
    autoResize(t) {
      const { map: e } = this;
      t ? e.enableAutoResize() : e.disableAutoResize();
    },
    theme(t) {
      const { map: e } = this;
      e[dt]({ styleJson: t });
    },
    "mapStyle.features": {
      handler(t, e) {
        const { map: n, mapStyle: o } = this, { style: s, styleJson: r } = o;
        n[dt]({
          styleJson: r,
          features: t,
          style: s
        });
      },
      deep: !0
    },
    "mapStyle.style"(t, e) {
      const { map: n, mapStyle: o } = this, { features: s, styleJson: r } = o;
      n[dt]({
        styleJson: r,
        features: s,
        style: t
      });
    },
    "mapStyle.styleJson": {
      handler(t, e) {
        const { map: n, mapStyle: o } = this, { features: s, style: r } = o;
        n[dt]({
          styleJson: t,
          features: s,
          style: r
        });
      },
      deep: !0
    },
    mapStyle(t) {
      const { map: e, theme: n } = this;
      !n && e[dt](t);
    }
  },
  mounted() {
    this.reset();
  },
  methods: {
    setMapOptions() {
      const { map: t, minZoom: e, maxZoom: n, mapType: o, dragging: s, scrollWheelZoom: r, doubleClickZoom: i, keyboard: a, inertialDragging: l, continuousZoom: c, pinchToZoom: d, autoResize: u } = this;
      e && t.setMinZoom(e), n && t.setMaxZoom(n), o && t.setMapType(V[o]), s ? t.enableDragging() : t.disableDragging(), r ? t.enableScrollWheelZoom() : t.disableScrollWheelZoom(), i ? t.enableDoubleClickZoom() : t.disableDoubleClickZoom(), a ? t.enableKeyboard() : t.disableKeyboard(), l ? t.enableInertialDragging() : t.disableInertialDragging(), c ? t.enableContinuousZoom() : t.disableContinuousZoom(), d ? t.enablePinchToZoom() : t.disablePinchToZoom(), u ? t.enableAutoResize() : t.disableAutoResize();
    },
    init(t) {
      if (this.map)
        return;
      let e = this.$refs.view;
      setTimeout(() => {
        const n = new t.Map(e, { enableHighResolution: this.highResolution, enableMapClick: this.mapClick });
        this.map = n;
        const { setMapOptions: o, zoom: s, getCenterPoint: r, theme: i, mapStyle: a } = this;
        i ? n[dt]({ styleJson: i }) : a && n[dt](a), o(), J.call(this, n), n.centerAndZoom(r(), s), this.$emit("ready", { BMap: t, map: n });
      });
    },
    getCenterPoint() {
      const { center: t, BMap: e } = this;
      switch (Ze(t)) {
        case "String":
          return t;
        case "Object":
          return new e.Point(t.lng, t.lat);
        default:
          return new e.Point();
      }
    },
    initMap(t) {
      this.BMap = t, this.init(t);
    },
    getMapScript() {
      if (V[rt])
        return V[rt]._preloader ? V[rt]._preloader : Promise.resolve(V[rt]);
      {
        const t = this.ak || this._BMap().ak;
        return V[rt] = {}, V[rt]._preloader = new Promise((e, n) => {
          V._initBaiduMap = function() {
            e(V[rt]), V.document.body.removeChild(o), V[rt]._preloader = null, V._initBaiduMap = null;
          };
          const o = document.createElement("script");
          V.document.body.appendChild(o), o.src = Ks + `&ak=${t}`;
        }), V[rt]._preloader;
      }
    },
    reset() {
      const { getMapScript: t, initMap: e } = this;
      t().then(e);
    }
  }
}, qs = {
  key: 0,
  ref: "view",
  style: { width: "100%", height: "100%" }
};
function Ys(t, e, n, o, s, r) {
  return A(), L("div", null, [
    s.hasBmView ? Yn("", !0) : (A(), L("div", qs, null, 512)),
    q(t.$slots, "default")
  ]);
}
const Xs = /* @__PURE__ */ F(Js, [["render", Ys]]), Qs = {
  name: "bm-view"
};
function tr(t, e, n, o, s, r) {
  return A(), L("div");
}
const er = /* @__PURE__ */ F(Qs, [["render", tr]]), nr = {
  control: {
    unload: "removeControl"
  },
  layer: {
    unload: "removeTileLayer"
  },
  overlay: {
    unload: "removeOverlay"
  },
  contextMenu: {
    unload: "removeContextMenu"
  }
}, ve = (t) => t.$options.name !== "bm-map" ? ve(t.$parent) : t;
function ln() {
  const { unload: t, renderByParent: e, $parent: n } = this;
  e && n.reload(), t();
}
class or {
  constructor(e) {
    this.methods = {
      ready() {
        const n = ve(this.$parent), o = this.BMap = n.BMap, s = this.map = n.map;
        this.load(), this.$emit("ready", {
          BMap: o,
          map: s
        });
      },
      transmitEvent(n) {
        this.$emit(n.type.replace(/^on/, ""), n);
      },
      reload() {
        this && this.BMap && this.$nextTick(() => {
          this.unload(), this.$nextTick(this.load);
        });
      },
      unload() {
        const { map: n, originInstance: o } = this;
        try {
          switch (e.type) {
            case "search":
              return o.clearResults();
            case "autoComplete":
            case "lushu":
              return o.dispose();
            case "markerClusterer":
              return o.clearMarkers();
            default:
              n[nr[e.type].unload](o);
          }
        } catch {
        }
      }
    }, this.computed = {
      renderByParent() {
        return this.$parent.preventChildrenRender;
      }
    }, this.mounted = function() {
      const o = ve(this.$parent).map, { ready: s } = this;
      o && s();
    }, this.unmounted = ln, this.beforeUnmount = ln;
  }
}
const M = (t) => new or({ type: t }), ir = {
  name: "bm-scale",
  render() {
  },
  mixins: [M("control")],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    }
  },
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, anchor: n, offset: o } = this;
      this.originInstance = new t.ScaleControl({
        anchor: global[n],
        offset: o && T(t, o)
      }), e.addControl(this.originInstance);
    }
  }
}, sr = {
  name: "bm-navigation",
  render() {
  },
  mixins: [M("control")],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    type: {
      type: String
    },
    showZoomInfo: {
      type: Boolean
    },
    enableGeolocation: {
      type: Boolean,
      default: !1
    }
  },
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    },
    type() {
      this.reload();
    },
    showZoomInfo() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, anchor: n, offset: o, type: s, showZoomInfo: r, enableGeolocation: i } = this;
      this.originInstance = new t.NavigationControl({
        anchor: global[n],
        offset: o && T(t, o),
        type: global[s],
        showZoomInfo: r,
        enableGeolocation: i
      }), e.addControl(this.originInstance);
    }
  }
}, rr = {
  name: "bm-map-type",
  render() {
  },
  mixins: [M("control")],
  props: ["type", "mapTypes", "anchor", "offset"],
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    },
    type() {
      this.reload();
    },
    mapTypes() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, anchor: n, offset: o, type: s } = this, r = [];
      this.mapTypes && this.mapTypes.forEach((i) => r.push(global[i])), this.originInstance = new t.MapTypeControl({
        anchor: global[n],
        offset: o && T(t, o),
        type: global[s],
        mapTypes: r
      }), e.addControl(this.originInstance);
    }
  }
}, ar = {
  name: "bm-overview-map",
  mixins: [M("control")],
  render() {
  },
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    size: {
      type: Object
    },
    isOpen: {
      type: Boolean
    }
  },
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    },
    size() {
      this.reload();
    },
    isOpen() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, isOpen: n, size: o, offset: s, anchor: r } = this;
      this.mapTypes && this.mapTypes.forEach((i) => {
      }), this.originInstance = new t.OverviewMapControl({
        anchor: global[r],
        offset: T(t, s),
        size: T(t, o),
        isOpen: n
      }), J.call(this, this.originInstance), e.addControl(this.originInstance);
    }
  }
}, lr = {
  name: "bm-geolocation",
  render() {
  },
  mixins: [M("control")],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    showAddressBar: {
      type: Boolean
    },
    autoLocation: {
      type: Boolean
    },
    locationIcon: {
      type: Object
    }
  },
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    },
    showAddressBar() {
      this.reload();
    },
    autoLocation() {
      this.reload();
    },
    locationIcon() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, anchor: n, showAddressBar: o, autoLocation: s, locationIcon: r, offset: i } = this;
      this.originInstance = new t.GeolocationControl({
        anchor: global[n],
        showAddressBar: o,
        enableAutoLocation: s,
        offset: i && T(t, i),
        locationIcon: r && Pt(t, r)
      }), J.call(this, this.originInstance), e.addControl(this.originInstance);
    }
  }
}, cr = {
  name: "bm-copyright",
  render() {
  },
  mixins: [M("control")],
  props: ["anchor", "offset", "copyright"],
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    },
    copyright() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, offset: n, anchor: o, updateCopyrightList: s } = this;
      this.originInstance = new t.CopyrightControl({
        anchor: global[o],
        offset: n && T(t, n)
      }), s(), e.addControl(this.originInstance);
    },
    updateCopyrightList() {
      const { BMap: t, map: e } = this, { removeCopyright: n, getCopyrightCollection: o } = this.originInstance, s = o();
      s && s.forEach((r) => {
        n(r.id);
      }), this.copyright && this.copyright.forEach((r) => {
        const i = r.bounds ? new t.Bounds(new t.Point(r.bounds.sw.lng, r.bounds.sw.lat), new t.Point(r.bounds.ne.lng, r.bounds.ne.lat)) : e.getBounds();
        this.originInstance.addCopyright({
          id: r.id,
          content: r.content,
          bounds: i
        }), this.originInstance.getCopyrightCollection();
      });
    }
  }
}, ur = {
  name: "bm-city-list",
  render() {
  },
  mixins: [M("control")],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    }
  },
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, anchor: n, offset: o } = this, s = this;
      this.originInstance = new t.CityListControl({
        anchor: global[n],
        offset: o && T(t, o),
        onChangeBefore() {
          s.$emit("changeBefore");
        },
        onChangeAfter() {
          s.$emit("changeAfter");
        }
      }), e.addControl(this.originInstance);
    }
  }
}, pr = {
  name: "bm-panorama",
  mixins: [M("control")],
  render() {
  },
  props: ["anchor", "offset"],
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, anchor: n, offset: o } = this;
      this.originInstance = new t.PanoramaControl({
        anchor: global[n],
        offset: o && T(t, o)
      }), e.addControl(this.originInstance);
    }
  }
}, dr = {
  name: "bm-control",
  mixins: [M("control")],
  props: ["anchor", "offset"],
  watch: {
    anchor(t) {
      this.originInstance.setAnchor(t);
    },
    offset(t) {
      this.originInstance.setOffset(t);
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, anchor: n, offset: o, $el: s } = this, r = function() {
        this.defaultAnchor = global[n || "BMAP_ANCHOR_TOP_LEFT"], this.defaultOffset = T(t, o);
      };
      r.prototype = new t.Control(), r.prototype.initialize = (i) => i.getContainer().appendChild(s), this.originInstance = new r(), e.addControl(this.originInstance);
    }
  }
};
function hr(t, e, n, o, s, r) {
  return A(), L("div", null, [
    q(t.$slots, "default")
  ]);
}
const fr = /* @__PURE__ */ F(dr, [["render", hr]]), { methods: gr, ...mr } = M("overlay"), cn = window, yr = {
  name: "bm-marker",
  props: {
    position: {},
    offset: {},
    icon: {},
    massClear: {
      type: Boolean,
      default: !0
    },
    dragging: {
      type: Boolean,
      default: !1
    },
    clicking: {
      type: Boolean,
      default: !0
    },
    raiseOnDrag: {
      type: Boolean,
      default: !1
    },
    draggingCursor: {
      type: String
    },
    rotation: {
      type: Number
    },
    shadow: {
      type: Object
    },
    title: {
      type: String
    },
    label: {
      type: Object
    },
    animation: {
      type: String
    },
    top: {
      type: Boolean,
      default: !1
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    "position.lng"(t, e) {
      const { BMap: n, originInstance: o, position: s, renderByParent: r, $parent: i } = this;
      t !== e && t >= -180 && t <= 180 && o.setPosition(k(n, {
        lng: t,
        lat: s.lat
      })), r && i.reload();
    },
    "position.lat"(t, e) {
      const { BMap: n, originInstance: o, position: s, renderByParent: r, $parent: i } = this;
      t !== e && t >= -74 && t <= 74 && o.setPosition(k(n, {
        lng: s.lng,
        lat: t
      })), r && i.reload();
    },
    "offset.width"(t, e) {
      const { BMap: n, originInstance: o } = this;
      t !== e && o.setOffset(new n.Size(t, this.offset.height));
    },
    "offset.height"(t, e) {
      const { BMap: n, originInstance: o } = this;
      t !== e && o.setOffset(new n.Size(this.offset.width, t));
    },
    icon: {
      deep: !0,
      handler(t) {
        const { BMap: e, originInstance: n, rotation: o } = this;
        n && n.setIcon(Pt(e, t)), o && n && n.setRotation(o);
      }
    },
    massClear(t) {
      t ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    dragging(t) {
      t ? this.originInstance.enableDragging() : this.originInstance.disableDragging();
    },
    clicking() {
      this.reload();
    },
    raiseOnDrag() {
      this.reload();
    },
    draggingCursor(t) {
      this.originInstance.setDraggingCursor(t);
    },
    rotation(t) {
      this.originInstance.setRotation(t);
    },
    shadow(t) {
      this.originInstance.setShadow(t);
    },
    title(t) {
      this.originInstance.setTitle(t);
    },
    label(t) {
      this.reload();
    },
    animation(t) {
      this.originInstance.setAnimation(cn[t]);
    },
    top(t) {
      this.originInstance.setTop(t);
    },
    zIndex(t) {
      this.originInstance.setZIndex(t);
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, position: n, offset: o, icon: s, massClear: r, dragging: i, clicking: a, raiseOnDrag: l, draggingCursor: c, rotation: d, shadow: u, title: h, label: p, animation: g, top: y, renderByParent: b, $parent: f, zIndex: C } = this, x = new t.Marker(new t.Point(n.lng, n.lat), {
        offset: o,
        icon: s && Pt(t, s),
        enableMassClear: r,
        enableDragging: i,
        enableClicking: a,
        raiseOnDrag: l,
        draggingCursor: c,
        rotation: d,
        shadow: u,
        title: h
      });
      this.originInstance = x, p && x && x.setLabel(ti(t, p)), x.setTop(y), x.setZIndex(C), J.call(this, x), b ? f.reload() : e.addOverlay(x), x.setAnimation(cn[g]);
    },
    ...gr
  },
  ...mr
};
function _r(t, e, n, o, s, r) {
  return A(), L("div", null, [
    q(t.$slots, "default")
  ]);
}
const br = /* @__PURE__ */ F(yr, [["render", _r]]), vr = {
  render() {
  },
  name: "bm-point-collection",
  mixins: [M("overlay")],
  props: {
    points: {
      type: Array,
      default() {
        return [];
      }
    },
    shape: {
      type: String,
      default: "BMAP_POINT_SHAPE_CIRCLE"
    },
    color: {
      type: String
    },
    size: {
      type: String,
      default: "BMAP_POINT_SIZE_NORMAL"
    }
  },
  watch: {
    shape(t) {
      const { originInstance: e, color: n, size: o } = this;
      e.setStyles({
        shape: global[t],
        color: n,
        size: global[o]
      });
    },
    size(t) {
      const { originInstance: e, color: n, shape: o } = this;
      e.setStyles({
        shape: global[o],
        color: n,
        size: global[t]
      });
    },
    color(t) {
      const { originInstance: e, shape: n, size: o } = this;
      e.setStyles({
        shape: global[n],
        color: t,
        size: global[o]
      });
    },
    points: {
      deep: !0,
      handler(t) {
        const { originInstance: e } = this;
        e.clear(), e.setPoints(t);
      }
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, points: n, shape: o, color: s, size: r } = this, i = this.originInstance = new t.PointCollection(n.map((a) => k(t, a)), {
        shape: global[o],
        color: s,
        size: global[r]
      });
      J.call(this, i), e.addOverlay(i);
    }
  }
}, { methods: wr, ...Sr } = M("overlay"), xr = {
  name: "bm-polyline",
  props: {
    path: {
      type: Array
    },
    strokeColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String
    },
    massClear: {
      type: Boolean,
      default: !0
    },
    clicking: {
      type: Boolean,
      default: !0
    },
    editing: {
      type: Boolean,
      default: !1
    },
    icons: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    iconSequences() {
      const { BMap: t, icons: e } = this;
      return e.map((n) => ni(t, n));
    }
  },
  watch: {
    path: {
      handler(t, e) {
        this.reload();
      },
      deep: !0
    },
    icons: {
      handler(t, e) {
        this.reload();
      },
      deep: !0
    },
    strokeColor(t) {
      this.originInstance.setStrokeColor(t);
    },
    strokeOpacity(t) {
      this.originInstance.setStrokeOpacity(t);
    },
    strokeWeight(t) {
      this.originInstance.setStrokeWeight(t);
    },
    strokeStyle(t) {
      this.originInstance.setStrokeStyle(t);
    },
    editing(t) {
      t ? this.originInstance.enableEditing() : this.originInstance.disableEditing();
    },
    massClear(t) {
      t ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    clicking(t) {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, path: n, strokeColor: o, strokeWeight: s, strokeOpacity: r, strokeStyle: i, editing: a, massClear: l, clicking: c, iconSequences: d } = this, u = new t.Polyline(n.map((h) => k(t, {
        lng: h.lng,
        lat: h.lat
      })), {
        strokeColor: o,
        strokeWeight: s,
        strokeOpacity: r,
        strokeStyle: i,
        enableEditing: a,
        enableMassClear: l,
        enableClicking: c,
        icons: d
      });
      this.originInstance = u, e.addOverlay(u), J.call(this, u);
    },
    ...wr
  },
  ...Sr
}, to = {
  name: "bm-polygon",
  render() {
  },
  mixins: [M("overlay")],
  props: {
    path: {
      type: Array,
      default() {
        return [];
      }
    },
    strokeColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String
    },
    fillColor: {
      type: String
    },
    fillOpacity: {
      type: Number
    },
    massClear: {
      type: Boolean,
      default: !0
    },
    clicking: {
      type: Boolean,
      default: !0
    },
    editing: {
      type: Boolean,
      default: !1
    }
  },
  watch: {
    path: {
      handler(t, e) {
        this.reload();
      },
      deep: !0
    },
    strokeColor(t) {
      this.originInstance.setStrokeColor(t);
    },
    strokeOpacity(t) {
      this.originInstance.setStrokeOpacity(t);
    },
    strokeWeight(t) {
      this.originInstance.setStrokeWeight(t);
    },
    strokeStyle(t) {
      this.originInstance.setStrokeStyle(t);
    },
    fillColor(t) {
      this.originInstance.setFillColor(t);
    },
    fillOpacity(t) {
      this.originInstance.setFillOpacity(t);
    },
    editing(t) {
      t ? this.originInstance.enableEditing() : this.originInstance.disableEditing();
    },
    massClear(t) {
      t ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    clicking(t) {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, path: n, strokeColor: o, strokeWeight: s, strokeOpacity: r, strokeStyle: i, fillColor: a, fillOpacity: l, editing: c, massClear: d, clicking: u } = this, h = new t.Polygon(n.map((p) => k(t, { lng: p.lng, lat: p.lat })), {
        strokeColor: o,
        strokeWeight: s,
        strokeOpacity: r,
        strokeStyle: i,
        fillColor: a,
        fillOpacity: l,
        // enableEditing: editing,
        enableMassClear: d,
        enableClicking: u
      });
      this.originInstance = h, e.addOverlay(h), J.call(this, h), c ? h.enableEditing() : h.disableEditing();
    }
  }
}, Cr = {
  name: "bm-circle",
  render() {
  },
  mixins: [M("overlay")],
  props: {
    center: {},
    radius: {},
    strokeColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String
    },
    fillColor: {
      type: String
    },
    fillOpacity: {
      type: Number
    },
    massClear: {
      type: Boolean,
      default: !0
    },
    clicking: {
      type: Boolean,
      default: !0
    },
    editing: {
      type: Boolean,
      default: !1
    }
  },
  watch: {
    "center.lng"(t, e) {
      const { BMap: n, originInstance: o, isEditing: s, disableEditing: r, enableEditing: i, center: a, editing: l } = this;
      if (!s) {
        r();
        const c = t;
        t.toString() !== e.toString() && c >= -180 && c <= 180 && o.setCenter(k(n, { lng: c, lat: a.lat })), l && i();
      }
    },
    "center.lat"(t, e) {
      const { BMap: n, originInstance: o, isEditing: s, disableEditing: r, enableEditing: i, center: a, editing: l } = this;
      if (!s) {
        r();
        const c = t;
        t.toString() !== e.toString() && c >= -74 && c <= 74 && o.setCenter(k(n, { lng: a.lng, lat: c })), l && i();
      }
    },
    radius(t, e) {
      const { originInstance: n, isEditing: o, disableEditing: s, enableEditing: r, editing: i } = this;
      o || (s(), n.setRadius(t), i && r());
    },
    strokeColor(t) {
      this.originInstance.setStrokeColor(t);
    },
    strokeOpacity(t) {
      this.originInstance.setStrokeOpacity(t);
    },
    strokeWeight(t) {
      this.originInstance.setStrokeWeight(t);
    },
    strokeStyle(t) {
      this.originInstance.setStrokeStyle(t);
    },
    fillColor(t) {
      this.originInstance.setFillColor(t);
    },
    fillOpacity(t) {
      this.originInstance.setFillOpacity(t);
    },
    editing(t) {
      t ? this.enableEditing() : this.disableEditing();
    },
    massClear(t) {
      t ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    clicking(t) {
      this.reload();
    }
  },
  methods: {
    dragStartHandler() {
      this.isEditing = !0;
    },
    dragEndHandler() {
      this.isEditing = !1, this.bindEditingNodeEvents();
    },
    bindEditingNodeEvents() {
      const { originInstance: t, editingKey: e, dragStartHandler: n, dragEndHandler: o } = this;
      t[e].forEach((s) => {
        s.addEventListener("dragstart", n), s.addEventListener("dragend", o);
      });
    },
    enableEditing() {
      const { originInstance: t, bindEditingNodeEvents: e } = this;
      t.enableEditing(), e();
    },
    disableEditing() {
      const { originInstance: t } = this;
      t.disableEditing();
    },
    getEditingKey(t) {
      const e = [];
      t.enableEditing(), setTimeout(() => {
        for (const n in t)
          t[n] && t[n].length === 2 && e.push(n);
        t.disableEditing();
        for (const n in t)
          t[n] && t[n].length === 0 && ~e.indexOf(n) && (this.editingKey = n);
      }, 0);
    },
    load() {
      const { BMap: t, map: e, center: n, radius: o, strokeColor: s, strokeWeight: r, strokeOpacity: i, strokeStyle: a, fillColor: l, fillOpacity: c, editing: d, massClear: u, clicking: h, enableEditing: p, disableEditing: g, getEditingKey: y, editingKey: b } = this, f = new t.Circle(k(t, { lng: n.lng, lat: n.lat }), o, {
        strokeColor: s,
        strokeWeight: r,
        strokeOpacity: i,
        strokeStyle: a,
        fillColor: l,
        fillOpacity: c,
        // enableEditing: editing,
        enableMassClear: u,
        enableClicking: h
      });
      this.originInstance = f, e.addOverlay(f), J.call(this, f), !b && y(f), setTimeout(() => {
        d ? p() : g();
      }, 0);
    }
  }
}, Ir = {
  name: "bm-ground",
  render() {
  },
  mixins: [M("overlay")],
  props: {
    bounds: {
      type: Object
    },
    opacity: {
      type: Number
    },
    imageURL: {
      type: String
    },
    displayOnMinLevel: {
      type: Number
    },
    displayOnMaxLevel: {
      type: Number
    }
  },
  watch: {
    bounds: {
      handler(t) {
        const { BMap: e } = this;
        this.originInstance.setBounds(Gt(e, t));
      },
      deep: !0
    },
    opacity(t) {
      this.originInstance.setOpacity(t);
    },
    imageURL(t) {
      this.originInstance.setImageURL(t);
    },
    displayOnMinLevel(t) {
      this.originInstance.setDisplayOnMinLevel(t);
    },
    displayOnMaxLevel(t) {
      this.originInstance.setDisplayOnMaxLevel(t);
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, bounds: n, opacity: o, imageURL: s, displayOnMinLevel: r, displayOnMaxLevel: i } = this, a = new t.GroundOverlay(n && Gt(t, n), {
        opacity: o,
        imageURL: s,
        displayOnMaxLevel: i,
        displayOnMinLevel: r
      });
      a.setImageURL(s), this.originInstance = a, J.call(this, a), e.addOverlay(a);
    }
  }
}, Mr = {
  name: "bm-label",
  render() {
  },
  mixins: [M("overlay")],
  props: {
    content: {
      type: String
    },
    title: {
      type: String
    },
    offset: {},
    position: {},
    labelStyle: {},
    zIndex: {
      type: Number,
      default: 0
    },
    massClear: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    content(t) {
      this.originInstance.setContent(t);
    },
    title(t) {
      this.originInstance.setTitle(t);
    },
    "offset.width"(t, e) {
      const { BMap: n } = this;
      t.toString() !== e.toString() && this.originInstance.setOffset(T(n, { width: t, height: this.offset.height }));
    },
    "offset.height"(t, e) {
      const { BMap: n } = this;
      t.toString() !== e.toString() && this.originInstance.setOffset(T(n, {
        width: this.offset.width,
        height: t
      }));
    },
    "position.lng"(t, e) {
      const { BMap: n } = this, o = t;
      t.toString() !== e.toString() && o >= -180 && o <= 180 && this.originInstance.setCenter(k(n, { lng: o, lat: this.center.lat }));
    },
    "position.lat"(t, e) {
      const { BMap: n } = this, o = t;
      t.toString() !== e.toString() && o >= -74 && o <= 74 && this.originInstance.setCenter(k(n, { lng: this.center.lng, lat: o }));
    },
    labelStyle: {
      handler(t) {
        this.originInstance.setStyle(t);
      },
      deep: !0
    },
    zIndex(t) {
      this.originInstance.setZIndex(t);
    },
    massClear(t) {
      t ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, content: n, title: o, offset: s, position: r, labelStyle: i, zIndex: a, massClear: l, $parent: c } = this, d = new t.Label(n, {
        offset: T(t, s),
        position: k(t, r),
        enableMassClear: l
      });
      this.originInstance = d;
      try {
        c.originInstance.setLabel(d);
      } catch {
        e.addOverlay(d);
      }
      o && d.setTitle(o), i && d.setStyle(i), a && d.setZIndex(a), J.call(this, d);
    }
  }
}, { methods: Or, ...Er } = M("overlay"), $r = window, kr = {
  name: "bm-info-window",
  props: {
    show: {
      type: Boolean
    },
    position: {
      type: Object
    },
    title: {
      type: String
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    maxWidth: {
      type: Number
    },
    offset: {
      type: Object
    },
    maximize: {
      type: Boolean
    },
    autoPan: {
      type: Boolean
    },
    closeOnClick: {
      type: Boolean,
      default: !0
    },
    message: {
      type: String
    }
  },
  watch: {
    show(t) {
      t ? this.openInfoWindow() : this.closeInfoWindow();
    },
    "position.lng"(t, e) {
      this.reload();
    },
    "position.lat"(t, e) {
      this.reload();
    },
    "offset.width"(t, e) {
      this.reload();
    },
    "offset.height"(t) {
      this.reload();
    },
    maxWidth() {
      this.reload();
    },
    width(t) {
      this.originInstance.setWidth(t);
    },
    height(t) {
      this.originInstance.setHeight(t);
    },
    title(t) {
      this.originInstance.setTitle(t);
    },
    maximize(t) {
      t ? this.originInstance.enableMaximize() : this.originInstance.disableMaximize();
    },
    autoPan(t) {
      t ? this.originInstance.enableAutoPan() : this.originInstance.disableAutoPan();
    },
    closeOnClick(t) {
      t ? this.originInstance.enableCloseOnClick() : this.originInstance.disableCloseOnClick();
    }
  },
  methods: {
    redraw() {
      this.originInstance.redraw();
    },
    load() {
      const { BMap: t, map: e, show: n, title: o, width: s, height: r, maxWidth: i, offset: a, autoPan: l, closeOnClick: c, message: d, maximize: u, bindObserver: h, $parent: p } = this, g = this.$el, y = new t.InfoWindow(g, {
        width: s,
        height: r,
        title: o,
        maxWidth: i,
        offset: T(t, a),
        enableAutoPan: l,
        enableCloseOnClick: c,
        enableMessage: typeof d > "u",
        message: d
      });
      u ? y.enableMaximize() : y.disableMaximize(), J.call(this, y), this.originInstance = y, y.redraw(), [].forEach.call(g.querySelectorAll("img"), (b) => {
        b.onload = () => y.redraw();
      }), h(), this.$container = p.originInstance && p.originInstance.openInfoWindow ? p.originInstance : e, n && this.openInfoWindow();
    },
    bindObserver() {
      const t = $r.MutationObserver;
      if (!t)
        return;
      const { $el: e, originInstance: n } = this;
      this.observer = new t((o) => n.redraw()), this.observer.observe(e, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      });
    },
    openInfoWindow() {
      const { BMap: t, $container: e, position: n, originInstance: o } = this;
      e.openInfoWindow(o, k(t, n));
    },
    closeInfoWindow() {
      this.$container.closeInfoWindow(this.originInstance);
    },
    ...Or
  },
  ...Er
};
function Br(t, e, n, o, s, r) {
  return It((A(), L("div", null, [
    q(t.$slots, "default")
  ], 512)), [
    [Mt, n.show]
  ]);
}
const Tr = /* @__PURE__ */ F(kr, [["render", Br]]), { methods: Nr, ...Pr } = M("overlay"), Rr = {
  name: "bm-overlay",
  props: {
    pane: {
      type: String
    }
  },
  watch: {
    pane() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, $el: n, pane: o } = this, s = this.$emit.bind(this);
      class r extends t.Overlay {
        initialize() {
          s("initialize", {
            BMap: t,
            map: e,
            el: n,
            overlay: this
          });
          try {
            e.getPanes()[o].appendChild(n);
          } catch {
          }
          return n;
        }
        draw() {
          s("draw", {
            BMap: t,
            map: e,
            el: n,
            overlay: this
          });
        }
      }
      const i = new r();
      this.originInstance = i, e.addOverlay(i);
    },
    ...Nr
  },
  ...Pr
};
function Ar(t, e, n, o, s, r) {
  return A(), L("div", null, [
    q(t.$slots, "default")
  ]);
}
const Dr = /* @__PURE__ */ F(Rr, [["render", Ar]]), zr = {
  name: "bm-context-menu",
  props: {
    width: {
      type: Number
    }
  },
  mixins: [M("contextMenu")],
  methods: {
    load() {
      const { width: t, BMap: e, map: n, $parent: o } = this, s = this.parent = o.originInstance || n;
      this.originInstance && s.removeContextMenu(this.originInstance);
      const r = this.originInstance = new e.ContextMenu();
      for (const i of this.$children) {
        if (i.seperator) {
          r.addSeparator();
          continue;
        }
        const a = new e.MenuItem(i.text, function(l, c) {
          i.callback({
            point: l,
            pixel: c,
            BMap: e,
            map: n,
            target: s
          });
        }, {
          width: t,
          id: i.id,
          iconUrl: i.iconUrl
        });
        i.disabled ? a.disable() : a.enable(), i.originInstance = a, r.addItem(a);
      }
      s.addContextMenu(r);
    }
  }
};
function Lr(t, e, n, o, s, r) {
  return A(), L("div", null, [
    q(t.$slots, "default")
  ]);
}
const Fr = /* @__PURE__ */ F(zr, [["render", Lr]]), Vr = {
  name: "bm-context-menu-item",
  props: {
    callback: {
      type: Function,
      default: function() {
      }
    },
    text: {
      type: String
    },
    iconUrl: {
      type: String
    },
    id: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    seperator: {
      type: Boolean
    }
  },
  methods: {
    reload() {
      this.$parent.map && this.$parent.load();
    }
  },
  watch: {
    text() {
      this.reload();
    },
    iconUrl() {
      this.reload();
    },
    id() {
      this.reload();
    },
    disabled() {
      this.reload();
    },
    iseperator() {
      this.reload();
    },
    callback() {
      this.reload();
    }
  },
  destroyed() {
    this.reload();
  },
  mounted() {
    this.reload();
  }
};
function jr(t, e, n, o, s, r) {
  return A(), L("span", null, [
    q(t.$slots, "default")
  ]);
}
const Wr = /* @__PURE__ */ F(Vr, [["render", jr]]), Hr = {
  name: "bm-local-search",
  mixins: [M("search")],
  props: {
    location: {
      type: [Object, String]
    },
    keyword: {
      type: [Array, String]
    },
    panel: {
      type: Boolean,
      default: !0
    },
    forceLocal: {
      type: Boolean
    },
    customData: {
      type: Object
    },
    bounds: {
      type: Object
    },
    nearby: {
      type: Object
    },
    // page: {
    //   type: Number
    // },
    pageCapacity: {
      type: Number
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler(t) {
        const { originInstance: e, search: n } = this;
        e.setLocation(t || this.map), n();
      },
      deep: !0
    },
    keyword() {
      this.search();
    },
    bounds: {
      handler(t) {
        const { searchInBounds: e } = this;
        e(t);
      },
      deep: !0
    },
    nearby: {
      handler(t) {
        const { searchNearby: e } = this;
        e(t);
      },
      deep: !0
    },
    forceLocal() {
      this.reload();
    },
    customData: {
      deep: !0,
      handler() {
        this.reload();
      }
    },
    // panel () {
    //   this.reload()
    // },
    pageCapacity(t) {
      this.originInstance && this.originInstance.setPageCapacity(t);
    },
    autoViewport(t) {
      this.originInstance && (t ? this.originInstance.enableAutoViewport() : this.originInstance.disableAutoViewport());
    },
    selectFirstResult(t) {
      this.originInstance && (t ? this.originInstance.enableFirstResultSelection() : this.originInstance.disableFirstResultSelection());
    },
    highlightMode() {
      this.reload();
    }
  },
  methods: {
    searchNearby(t) {
      const { originInstance: e, keyword: n, customData: o, BMap: s } = this;
      e.searchNearby(n, k(s, t.center), t.radius, o);
    },
    searchInBounds(t) {
      const { originInstance: e, keyword: n, customData: o, BMap: s } = this;
      e.searchInBounds(n, Gt(s, t), o);
    },
    search() {
      const { originInstance: t, keyword: e, forceLocal: n, customData: o, nearby: s, bounds: r, searchNearby: i, searchInBounds: a } = this;
      s ? i(s) : r ? a(r) : t.search(e, {
        forceLocal: n,
        customData: o
      });
    },
    load() {
      const t = this, { map: e, BMap: n, search: o, pageCapacity: s, autoViewport: r, selectFirstResult: i, highlightMode: a, location: l, originInstance: c } = this, d = l ? st(l) ? k(n, l) : l : e, u = this.originInstance = new n.LocalSearch(d, {
        onMarkersSet(h) {
          t.$emit("markersset", h);
        },
        onInfoHtmlSet(h) {
          t.$emit("infohtmlset", h);
        },
        onResultsHtmlSet(h) {
          t.$emit("resultshtmlset", h);
        },
        onSearchComplete(h) {
          c && c !== u && c.clearResults(), t.$emit("searchcomplete", h);
        },
        pageCapacity: s,
        renderOptions: {
          map: e,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: i,
          autoViewport: r,
          highlightMode: a
        }
      });
      o();
    }
  }
};
function Zr(t, e, n, o, s, r) {
  return It((A(), L("div", null, [
    q(t.$slots, "default")
  ], 512)), [
    [Mt, n.panel]
  ]);
}
const Ur = /* @__PURE__ */ F(Hr, [["render", Zr]]), Gr = {
  name: "bm-transit",
  mixins: [M("search")],
  props: {
    location: {
      type: [Object, String]
    },
    start: {
      type: [Object, String]
    },
    end: {
      type: [Object, String]
    },
    panel: {
      type: Boolean,
      default: !0
    },
    policy: {
      type: String
    },
    pageCapacity: {
      type: Number
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler(t) {
        const { originInstance: e, map: n } = this;
        e.setLocation(t || n);
      },
      deep: !0
    },
    start: {
      handler(t) {
        const { originInstance: e, end: n, BMap: o } = this;
        e.search(W(o, t), W(o, n));
      },
      deep: !0
    },
    end: {
      handler(t) {
        const { originInstance: e, start: n, BMap: o } = this;
        e.search(W(o, n), W(o, t));
      },
      deep: !0
    },
    panel() {
      this.reload();
    },
    policy(t) {
      this.originInstance.setPolicy(global[t]);
    },
    pageCapacity(t) {
      this.originInstance && this.originInstance.setPageCapacity(t);
    },
    autoViewport(t) {
      this.originInstance && (t ? this.originInstance.enableAutoViewport() : this.originInstance.disableAutoViewport());
    },
    selectFirstResult() {
      this.reload();
    },
    highlightMode() {
      this.reload();
    }
  },
  methods: {
    search(t, e) {
      const { originInstance: n } = this;
      n.search(t, e);
    },
    load() {
      const t = this, { map: e, BMap: n, location: o, policy: s, pageCapacity: r, selectFirstResult: i, autoViewport: a, highlightMode: l, search: c, start: d, end: u, originInstance: h } = this, p = o ? st(o) ? k(n, o) : o : e, g = this.originInstance = new n.TransitRoute(p, {
        renderOptions: {
          map: e,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: i,
          autoViewport: a,
          highlightMode: l
        },
        policy: global[s],
        pageCapacity: r,
        onSearchComplete(y) {
          h && h !== g && h.clearResults(), t.$emit("searchcomplete", y);
        },
        onMarkersSet(y) {
          t.$emit("markersset", y);
        },
        onInfoHtmlSet(y) {
          t.$emit("infohtmlset", y);
        },
        onPolylinesSet(y) {
          t.$emit("polylinesset", y);
        },
        onResultsHtmlSet(y) {
          t.$emit("resultshtmlset", y);
        }
      });
      c(st(d) ? k(n, d) : d, st(u) ? k(n, u) : u);
    }
  }
};
function Kr(t, e, n, o, s, r) {
  return It((A(), L("div", null, [
    q(t.$slots, "default")
  ], 512)), [
    [Mt, n.panel]
  ]);
}
const Jr = /* @__PURE__ */ F(Gr, [["render", Kr]]), qr = {
  name: "bm-walking",
  mixins: [M("search")],
  props: {
    location: {
      type: [Object, String]
    },
    start: {
      type: [Object, String]
    },
    end: {
      type: [Object, String]
    },
    panel: {
      type: Boolean,
      default: !0
    },
    pageCapacity: {
      type: Number
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler(t) {
        const { originInstance: e, map: n } = this;
        e.setLocation(t || n);
      },
      deep: !0
    },
    start: {
      handler(t) {
        const { originInstance: e, end: n, BMap: o } = this;
        e.search(W(o, t), W(o, n));
      },
      deep: !0
    },
    end: {
      handler(t) {
        const { originInstance: e, start: n, BMap: o } = this;
        e.search(W(o, n), W(o, t));
      },
      deep: !0
    },
    panel() {
      this.reload();
    },
    autoViewport(t) {
      this.reload();
    },
    selectFirstResult(t) {
      this.reload();
    },
    highlightMode() {
      this.reload();
    }
  },
  methods: {
    search(t, e) {
      const { originInstance: n } = this;
      n.search(t, e);
    },
    load() {
      const t = this, { map: e, BMap: n, location: o, selectFirstResult: s, autoViewport: r, highlightMode: i, search: a, start: l, end: c, originInstance: d } = this, u = o ? st(o) ? k(n, o) : o : e, h = this.originInstance = new n.WalkingRoute(u, {
        renderOptions: {
          map: e,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: s,
          autoViewport: r,
          highlightMode: i
        },
        onSearchComplete(p) {
          d && d !== h && d.clearResults(), t.$emit("searchcomplete", p);
        },
        onMarkersSet(p) {
          t.$emit("markersset", p);
        },
        onInfoHtmlSet(p) {
          t.$emit("infohtmlset", p);
        },
        onPolylinesSet(p) {
          t.$emit("polylinesset", p);
        },
        onResultsHtmlSet(p) {
          t.$emit("resultshtmlset", p);
        }
      });
      a(st(l) ? k(n, l) : l, st(c) ? k(n, c) : c);
    }
  }
};
function Yr(t, e, n, o, s, r) {
  return It((A(), L("div", null, [
    q(t.$slots, "default")
  ], 512)), [
    [Mt, n.panel]
  ]);
}
const Xr = /* @__PURE__ */ F(qr, [["render", Yr]]), Qr = {
  name: "bm-driving",
  mixins: [M("search")],
  props: {
    location: {
      type: [Object, String]
    },
    start: {
      type: [Object, String]
    },
    end: {
      type: [Object, String]
    },
    startCity: {
      type: [String, Number]
    },
    endCity: {
      type: [String, Number]
    },
    waypoints: {
      type: Array
    },
    policy: {
      type: String
    },
    panel: {
      type: Boolean,
      default: !0
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler(t) {
        const { originInstance: e, map: n } = this;
        e.setLocation(t || n);
      },
      deep: !0
    },
    start: {
      handler(t) {
        const { originInstance: e, end: n, startCity: o, endCity: s, waypoints: r, BMap: i, getWaypoints: a } = this;
        e.search(W(i, t), W(i, n), {
          startCity: o,
          endCity: s,
          waypoints: a(r)
        });
      },
      deep: !0
    },
    end: {
      handler(t) {
        const { originInstance: e, start: n, startCity: o, endCity: s, waypoints: r, BMap: i, getWaypoints: a } = this;
        e.search(W(i, n), W(i, t), {
          startCity: o,
          endCity: s,
          waypoints: a(r)
        });
      },
      deep: !0
    },
    startCity(t) {
      const { originInstance: e, start: n, end: o, endCity: s, waypoints: r, getWaypoints: i } = this;
      e.search(n, o, {
        val: t,
        endCity: s,
        waypoints: i(r)
      });
    },
    endCity(t) {
      const { originInstance: e, start: n, end: o, startCity: s, waypoints: r, getWaypoints: i } = this;
      e.search(n, o, {
        startCity: s,
        val: t,
        waypoints: i(r)
      });
    },
    waypoints: {
      handler(t) {
        const { originInstance: e, start: n, end: o, startCity: s, endCity: r, getWaypoints: i } = this;
        e.search(n, o, {
          startCity: s,
          endCity: r,
          waypoints: i(t)
        });
      },
      deep: !0
    },
    panel() {
      this.reload();
    },
    policy(t) {
      this.reload();
    },
    autoViewport() {
      this.reload();
    },
    selectFirstResult() {
      this.reload();
    },
    highlightMode() {
      this.reload();
    }
  },
  methods: {
    search(t, e, { startCity: n, endCity: o, waypoints: s }) {
      const { originInstance: r, getWaypoints: i } = this;
      r.search(t, e, {
        startCity: n,
        endCity: o,
        waypoints: i(s)
      });
    },
    getWaypoints(t) {
      const { BMap: e } = this;
      if (t)
        return t.map((n) => W(e, n));
    },
    load() {
      const t = this, { map: e, BMap: n, location: o, policy: s, selectFirstResult: r, autoViewport: i, highlightMode: a, search: l, start: c, end: d, startCity: u, endCity: h, waypoints: p, originInstance: g, getWaypoints: y } = this, b = o ? st(o) ? k(n, o) : o : e, f = this.originInstance = new n.DrivingRoute(b, {
        renderOptions: {
          map: e,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: r,
          autoViewport: i,
          highlightMode: a
        },
        policy: global[s],
        onSearchComplete(C) {
          g && g !== f && g.clearResults(), t.$emit("searchcomplete", C);
        },
        onMarkersSet(C) {
          t.$emit("markersset", C);
        },
        onInfoHtmlSet(C) {
          t.$emit("infohtmlset", C);
        },
        onPolylinesSet(C) {
          t.$emit("polylinesset", C);
        },
        onResultsHtmlSet(C) {
          t.$emit("resultshtmlset", C);
        }
      });
      l(W(n, c), W(n, d), {
        startCity: u,
        endCity: h,
        waypoints: y(p)
      });
    }
  }
};
function ta(t, e, n, o, s, r) {
  return It((A(), L("div", null, [
    q(t.$slots, "default")
  ], 512)), [
    [Mt, n.panel]
  ]);
}
const ea = /* @__PURE__ */ F(Qr, [["render", ta]]), na = {
  name: "bm-bus",
  mixins: [M("search")],
  props: {
    location: {
      type: [Object, String]
    },
    keyword: {
      type: String
    },
    panel: {
      type: Boolean,
      default: !0
    },
    pageCapacity: {
      type: Number
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler(t) {
        const { originInstance: e, map: n } = this;
        e.setLocation(t || n);
      },
      deep: !0
    },
    keyword(t) {
      this.search(t);
    },
    panel() {
      this.reload();
    },
    autoViewport(t) {
      this.reload();
    },
    selectFirstResult(t) {
      this.reload();
    }
  },
  methods: {
    search(t) {
      const { originInstance: e } = this;
      e.getBusList(t);
    },
    load() {
      const t = this, { location: e, selectFirstResult: n, autoViewport: o, highlightMode: s, keyword: r, search: i, BMap: a, map: l, originInstance: c } = this, d = e ? st(e) ? k(a, e) : e : l, u = this.originInstance = new a.BusLineSearch(d, {
        renderOptions: {
          map: l,
          panel: this.$el,
          selectFirstResult: n,
          autoViewport: o,
          highlightMode: s
        },
        onGetBusListComplete(h) {
          c && c !== u && c.clearResults(), t.$emit("getbuslistcomplete", h);
        },
        onGetBusLineComplete(h) {
          c && c !== u && c.clearResults(), t.$emit("getbuslinecomplete", h);
        },
        onBusListHtmlSet(h) {
          t.$emit("buslisthtmlset", h);
        },
        onBusLineHtmlSet(h) {
          t.$emit("buslinehtmlset", h);
        },
        onMarkersSet(h) {
          t.$emit("markersset", h);
        },
        onPolylinesSet(h) {
          t.$emit("polylinesset", h);
        }
      });
      i(r);
    }
  }
};
function oa(t, e, n, o, s, r) {
  return It((A(), L("div", null, null, 512)), [
    [Mt, n.panel]
  ]);
}
const ia = /* @__PURE__ */ F(na, [["render", oa]]), sa = {
  name: "bm-tile",
  render(t) {
  },
  mixins: [M("layer")],
  props: {
    transparentPng: {
      type: Boolean
    },
    tileUrlTemplate: {
      type: String
    },
    copyright: {},
    zIndex: {
      type: Number
    }
  },
  watch: {
    transparentPng() {
      this.reload();
    },
    tileUrlTemplate() {
      this.reload();
    },
    copyright() {
      this.reload();
    },
    zIndex() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, transparentPng: n, tileUrlTemplate: o, copyright: s, zIndex: r } = this;
      this.originInstance = new t.TileLayer({
        transparentPng: n,
        tileUrlTemplate: o,
        copyright: s && {
          id: s.id,
          content: s.content,
          bounds: s.bounds && Gt(s.bounds)
        },
        zIndex: r
      }), e.addTileLayer(this.originInstance);
    }
  }
}, ra = {
  name: "bm-triffic",
  render(t) {
  },
  mixins: [M("layer")],
  props: {
    predictDate: {
      type: Object
    }
  },
  watch: {
    "pridictDate.weekday"() {
      this.reload();
    },
    "pridictDate.hour"() {
      this.reload();
    },
    pridictDate() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { pridictDate: t, BMap: e, map: n } = this;
      this.originInstance = new e.TrafficLayer({
        pridictDate: t
      }), n.addTileLayer(this.originInstance);
    }
  }
}, aa = {
  mixins: [
    M("abstract")
  ],
  props: ["name", "strokeColor", "strokeWeight", "strokeOpacity", "strokeStyle", "fillColor", "fillOpacity", "massClear", "clicking"],
  data() {
    return {
      paths: []
    };
  },
  components: {
    BmPolygon: to
  },
  watch: {
    name() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, name: e } = this;
      new t.Boundary().get(e, (o) => {
        this.paths = o.boundaries.map((s) => (s || []).split(";").map((r) => (([i, a]) => ({ lng: i, lat: a }))(r.split(",").map((i) => +i))));
      });
    }
  }
}, la = { key: 0 };
function ca(t, e, n, o, s, r) {
  const i = xs("bm-polygon");
  return s.paths.length ? (A(), L("div", la, [
    (A(!0), L(At, null, Ms(s.paths, (a, l) => (A(), De(i, {
      key: l,
      path: a,
      "stroke-color": n.strokeColor,
      "stroke-weight": n.strokeWeight,
      "stroke-opacity": n.strokeOpacity,
      "stroke-style": n.strokeStyle,
      "fill-opacity": n.fillOpacity,
      "fill-color": n.fillColor,
      "mass-clear": n.massClear,
      clicking: n.clicking,
      onClick: e[0] || (e[0] = (c) => t.$emit("click", c)),
      onDblclick: e[1] || (e[1] = (c) => t.$emit("dblclick", c)),
      onMousedown: e[2] || (e[2] = (c) => t.$emit("mousedown", c)),
      onMouseup: e[3] || (e[3] = (c) => t.$emit("mouseup", c)),
      onMouseout: e[4] || (e[4] = (c) => t.$emit("mouseout", c)),
      onMouseover: e[5] || (e[5] = (c) => t.$emit("mouseover", c)),
      onRemove: e[6] || (e[6] = (c) => t.$emit("remove", c))
    }, null, 8, ["path", "stroke-color", "stroke-weight", "stroke-opacity", "stroke-style", "fill-opacity", "fill-color", "mass-clear", "clicking"]))), 128))
  ])) : Yn("", !0);
}
const ua = /* @__PURE__ */ F(aa, [["render", ca]]), pa = {
  name: "bm-autocomplete",
  mixins: [M()],
  props: {
    types: {
      type: String
    },
    location: {
      type: String
    },
    sugStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  watch: {
    types() {
      this.reload();
    },
    location() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, $el: n, types: o, location: s, sugStyle: r } = this, i = n.querySelector("input");
      i && (this.originInstance = new t.Autocomplete({
        input: i,
        types: o,
        location: s || e,
        onSearchComplete: (a) => {
          const l = document.querySelectorAll(".tangram-suggestion-main");
          for (const c of l)
            for (const d in r)
              c.style[d] = r[d].toString();
          this.$emit("searchcomplete", a);
        }
      }), this.originInstance.addEventListener("onconfirm", (a) => {
        const l = a.item.value;
        this.$emit("input", l.province + l.city + l.district + l.street + l.business);
      }), J.call(this, this.originInstance));
    }
  }
}, da = /* @__PURE__ */ ze("input", null, null, -1);
function ha(t, e, n, o, s, r) {
  return A(), L("span", null, [
    q(t.$slots, "default", {}, () => [
      da
    ])
  ]);
}
const fa = /* @__PURE__ */ F(pa, [["render", ha]]);
var xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, we = {}, ga = {
  get exports() {
    return we;
  },
  set exports(t) {
    we = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(xt, function() {
    var n = typeof window < "u" ? window : typeof xt < "u" ? xt : this;
    function o(p, g) {
      return g = { exports: {} }, p(g, g.exports, n), g.exports;
    }
    var s = o(function(p, g, y) {
      (function(b, f) {
        typeof g == "object" ? p.exports = f() : (b.BMapLib = b.BMapLib || {}, b.BMapLib.TextIconOverlay = b.BMapLib.TextIconOverlay || f());
      })(n, function() {
        var b, f = b = f || { version: "1.3.8" }, C = {};
        f.guid = "$BAIDU$", C[f.guid] = C[f.guid] || {}, f.dom = f.dom || {}, f.dom.g = function(m) {
          return typeof m == "string" || m instanceof String ? document.getElementById(m) : m && m.nodeName && (m.nodeType == 1 || m.nodeType == 9) ? m : null;
        }, f.g = f.G = f.dom.g, f.dom.getDocument = function(m) {
          return m = f.dom.g(m), m.nodeType == 9 ? m : m.ownerDocument || m.document;
        }, f.lang = f.lang || {}, f.lang.isString = function(m) {
          return Object.prototype.toString.call(m) == "[object String]";
        }, f.isString = f.lang.isString, f.dom._g = function(m) {
          return f.lang.isString(m) ? document.getElementById(m) : m;
        }, f._g = f.dom._g, f.browser = f.browser || {}, /msie (\d+\.\d)/i.test(navigator.userAgent) && (f.browser.ie = f.ie = document.documentMode || +RegExp.$1), f.dom.getComputedStyle = function(m, _) {
          m = f.dom._g(m);
          var v = f.dom.getDocument(m), w;
          return v.defaultView && v.defaultView.getComputedStyle && (w = v.defaultView.getComputedStyle(m, null), w) ? w[_] || w.getPropertyValue(_) : "";
        }, f.dom._styleFixer = f.dom._styleFixer || {}, f.dom._styleFilter = f.dom._styleFilter || [], f.dom._styleFilter.filter = function(m, _, v) {
          for (var w = 0, S = f.dom._styleFilter, B; B = S[w]; w++)
            (B = B[v]) && (_ = B(m, _));
          return _;
        }, f.string = f.string || {}, f.string.toCamelCase = function(m) {
          return m.indexOf("-") < 0 && m.indexOf("_") < 0 ? m : m.replace(/[-_][^-_]/g, function(_) {
            return _.charAt(1).toUpperCase();
          });
        }, f.dom.getStyle = function(m, _) {
          var v = f.dom;
          m = v.g(m), _ = f.string.toCamelCase(_);
          var w = m.style[_] || (m.currentStyle ? m.currentStyle[_] : "") || v.getComputedStyle(m, _);
          if (!w) {
            var S = v._styleFixer[_];
            S && (w = S.get ? S.get(m) : f.dom.getStyle(m, S));
          }
          return (S = v._styleFilter) && (w = S.filter(_, w, "get")), w;
        }, f.getStyle = f.dom.getStyle, /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (f.browser.opera = +RegExp.$1), f.browser.isWebkit = /webkit/i.test(navigator.userAgent), f.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent), f.browser.isStrict = document.compatMode == "CSS1Compat", f.dom.getPosition = function(m) {
          m = f.dom.g(m);
          var _ = f.dom.getDocument(m), v = f.browser, w = f.dom.getStyle;
          v.isGecko > 0 && _.getBoxObjectFor && w(m, "position") == "absolute" && (m.style.top === "" || m.style.left);
          var S = { left: 0, top: 0 }, B = v.ie && !v.isStrict ? _.body : _.documentElement, I, $;
          if (m == B)
            return S;
          if (m.getBoundingClientRect) {
            $ = m.getBoundingClientRect(), S.left = Math.floor($.left) + Math.max(_.documentElement.scrollLeft, _.body.scrollLeft), S.top = Math.floor($.top) + Math.max(_.documentElement.scrollTop, _.body.scrollTop), S.left -= _.documentElement.clientLeft, S.top -= _.documentElement.clientTop;
            var R = _.body, Ot = parseInt(w(R, "borderLeftWidth")), Ve = parseInt(w(R, "borderTopWidth"));
            v.ie && !v.isStrict && (S.left -= isNaN(Ot) ? 2 : Ot, S.top -= isNaN(Ve) ? 2 : Ve);
          } else {
            I = m;
            do {
              if (S.left += I.offsetLeft, S.top += I.offsetTop, v.isWebkit > 0 && w(I, "position") == "fixed") {
                S.left += _.body.scrollLeft, S.top += _.body.scrollTop;
                break;
              }
              I = I.offsetParent;
            } while (I && I != m);
            for ((v.opera > 0 || v.isWebkit > 0 && w(m, "position") == "absolute") && (S.top -= _.body.offsetTop), I = m.offsetParent; I && I != _.body; )
              S.left -= I.scrollLeft, (!v.opera || I.tagName != "TR") && (S.top -= I.scrollTop), I = I.offsetParent;
          }
          return S;
        }, f.event = f.event || {}, f.event._listeners = f.event._listeners || [], f.event.on = function(m, _, v) {
          _ = _.replace(/^on/i, ""), m = f.dom._g(m);
          var w = function(R) {
            v.call(m, R);
          }, S = f.event._listeners, B = f.event._eventFilter, I, $ = _;
          return _ = _.toLowerCase(), B && B[_] && (I = B[_](m, _, w), $ = I.type, w = I.listener), m.addEventListener ? m.addEventListener($, w, !1) : m.attachEvent && m.attachEvent("on" + $, w), S[S.length] = [m, _, v, w, $], m;
        }, f.on = f.event.on, function() {
          var m = C[f.guid];
          f.lang.guid = function() {
            return "TANGRAM__" + (m._counter++).toString(36);
          }, m._counter = m._counter || 1;
        }(), C[f.guid]._instances = C[f.guid]._instances || {}, f.lang.isFunction = function(m) {
          return Object.prototype.toString.call(m) == "[object Function]";
        }, f.lang.Class = function(m) {
          this.guid = m || f.lang.guid(), C[f.guid]._instances[this.guid] = this;
        }, C[f.guid]._instances = C[f.guid]._instances || {}, f.lang.Class.prototype.dispose = function() {
          delete C[f.guid]._instances[this.guid];
          for (var m in this)
            f.lang.isFunction(this[m]) || delete this[m];
          this.disposed = !0;
        }, f.lang.Class.prototype.toString = function() {
          return "[object " + (this._className || "Object") + "]";
        }, f.lang.Event = function(m, _) {
          this.type = m, this.returnValue = !0, this.target = _ || null, this.currentTarget = null;
        }, f.lang.Class.prototype.addEventListener = function(m, _, v) {
          if (f.lang.isFunction(_)) {
            !this.__listeners && (this.__listeners = {});
            var w = this.__listeners, S;
            if (typeof v == "string" && v) {
              if (/[^\w\-]/.test(v))
                throw "nonstandard key:" + v;
              _.hashCode = v, S = v;
            }
            m.indexOf("on") != 0 && (m = "on" + m), typeof w[m] != "object" && (w[m] = {}), S = S || f.lang.guid(), _.hashCode = S, w[m][S] = _;
          }
        }, f.lang.Class.prototype.removeEventListener = function(m, _) {
          if (!(typeof _ < "u" && (f.lang.isFunction(_) && !(_ = _.hashCode) || !f.lang.isString(_)))) {
            !this.__listeners && (this.__listeners = {}), m.indexOf("on") != 0 && (m = "on" + m);
            var v = this.__listeners;
            if (v[m])
              if (typeof _ < "u")
                v[m][_] && delete v[m][_];
              else
                for (var w in v[m])
                  delete v[m][w];
          }
        }, f.lang.Class.prototype.dispatchEvent = function(m, _) {
          f.lang.isString(m) && (m = new f.lang.Event(m)), !this.__listeners && (this.__listeners = {}), _ = _ || {};
          for (var v in _)
            m[v] = _[v];
          var v, w = this.__listeners, S = m.type;
          if (m.target = m.target || this, m.currentTarget = this, S.indexOf("on") != 0 && (S = "on" + S), f.lang.isFunction(this[S]) && this[S].apply(this, arguments), typeof w[S] == "object")
            for (v in w[S])
              w[S][v].apply(this, arguments);
          return m.returnValue;
        }, f.lang.inherits = function(m, _, v) {
          var w, S, B = m.prototype, I = new Function();
          I.prototype = _.prototype, S = m.prototype = new I();
          for (w in B)
            S[w] = B[w];
          m.prototype.constructor = m, m.superClass = _.prototype, typeof v == "string" && (S._className = v);
        }, f.inherits = f.lang.inherits;
        var x = "http://api.map.baidu.com/library/TextIconOverlay/1.2/src/images/m", P = "png", E = function(m, _, v) {
          try {
            BMap;
          } catch {
            throw Error("Baidu Map JS API is not ready yet!");
          }
          b.lang.inherits(E, BMap.Overlay, "TextIconOverlay"), this._position = m, this._text = _, this._options = v || {}, this._styles = this._options.styles || [], !this._styles.length && this._setupDefaultStyles();
        };
        return E.prototype._setupDefaultStyles = function() {
          for (var m = [53, 56, 66, 78, 90], _ = 0, v; v = m[_]; _++)
            this._styles.push({
              url: x + _ + "." + P,
              size: new BMap.Size(v, v)
            });
        }, E.prototype.initialize = function(m) {
          return this._map = m, this._domElement = document.createElement("div"), this._updateCss(), this._updateText(), this._updatePosition(), this._bind(), this._map.getPanes().markerMouseTarget.appendChild(this._domElement), this._domElement;
        }, E.prototype.draw = function() {
          this._map && this._updatePosition();
        }, E.prototype.getText = function() {
          return this._text;
        }, E.prototype.setText = function(m) {
          m && (!this._text || this._text.toString() != m.toString()) && (this._text = m, this._updateText(), this._updateCss(), this._updatePosition());
        }, E.prototype.getPosition = function() {
          return this._position;
        }, E.prototype.setPosition = function(m) {
          m && (!this._position || !this._position.equals(m)) && (this._position = m, this._updatePosition());
        }, E.prototype.getStyleByText = function(m, _) {
          var v = parseInt(m), w = parseInt(v / 10);
          return w = Math.max(0, w), w = Math.min(w, _.length - 1), _[w];
        }, E.prototype._updateCss = function() {
          if (this._domElement) {
            var m = this.getStyleByText(this._text, this._styles);
            this._domElement.style.cssText = this._buildCssText(m);
          }
        }, E.prototype._updateText = function() {
          this._domElement && (this._domElement.innerHTML = this._text);
        }, E.prototype._updatePosition = function() {
          if (this._domElement && this._position) {
            var m = this._domElement.style, _ = this._map.pointToOverlayPixel(this._position);
            _.x -= Math.ceil(parseInt(m.width) / 2), _.y -= Math.ceil(parseInt(m.height) / 2), m.left = _.x + "px", m.top = _.y + "px";
          }
        }, E.prototype._buildCssText = function(m) {
          var _ = m.url, v = m.size, w = m.anchor, S = m.offset, B = m.textColor || "black", I = m.textSize || 10, $ = [];
          if (b.browser.ie < 7)
            $.push('filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="' + _ + '");');
          else {
            $.push("background-image:url(" + _ + ");");
            var R = "0 0";
            S instanceof BMap.Size && (R = S.width + "px " + S.height + "px"), $.push("background-position:" + R + ";");
          }
          return v instanceof BMap.Size && (w instanceof BMap.Size ? (w.height > 0 && w.height < v.height && $.push("height:" + (v.height - w.height) + "px; padding-top:" + w.height + "px;"), w.width > 0 && w.width < v.width && $.push("width:" + (v.width - w.width) + "px; padding-left:" + w.width + "px;")) : ($.push("height:" + v.height + "px; line-height:" + v.height + "px;"), $.push("width:" + v.width + "px; text-align:center;"))), $.push("cursor:pointer; color:" + B + "; position:absolute; font-size:" + I + "px; font-family:Arial,sans-serif; font-weight:bold"), $.join("");
        }, E.prototype._bind = function() {
          if (!this._domElement)
            return;
          var m = this, _ = this._map, v = b.lang.Event;
          function w(S, B) {
            var I = S.srcElement || S.target, $ = S.clientX || S.pageX, R = S.clientY || S.pageY;
            if (S && B && $ && R && I) {
              var Ot = b.dom.getPosition(_.getContainer());
              B.pixel = new BMap.Pixel($ - Ot.left, R - Ot.top), B.point = _.pixelToPoint(B.pixel);
            }
            return B;
          }
          b.event.on(this._domElement, "mouseover", function(S) {
            m.dispatchEvent(w(S, new v("onmouseover")));
          }), b.event.on(this._domElement, "mouseout", function(S) {
            m.dispatchEvent(w(S, new v("onmouseout")));
          }), b.event.on(this._domElement, "click", function(S) {
            m.dispatchEvent(w(S, new v("onclick")));
          });
        }, E;
      });
    }), r = s && typeof s == "object" && "default" in s ? s.default : s, i = function(p, g, y) {
      g = a(g);
      var b = p.pointToPixel(g.getNorthEast()), f = p.pointToPixel(g.getSouthWest());
      b.x += y, b.y -= y, f.x -= y, f.y += y;
      var C = p.pixelToPoint(b), x = p.pixelToPoint(f);
      return new BMap.Bounds(x, C);
    }, a = function(p) {
      var g = l(p.getNorthEast().lng, -180, 180), y = l(p.getSouthWest().lng, -180, 180), b = l(p.getNorthEast().lat, -74, 74), f = l(p.getSouthWest().lat, -74, 74);
      return new BMap.Bounds(new BMap.Point(y, f), new BMap.Point(g, b));
    }, l = function(p, g, y) {
      return g && (p = Math.max(p, g)), y && (p = Math.min(p, y)), p;
    }, c = function(p) {
      return Object.prototype.toString.call(p) === "[object Array]";
    }, d = function(p, g) {
      var y = -1;
      if (c(g)) {
        if (g.indexOf)
          y = g.indexOf(p);
        else
          for (var b = 0, f; f = g[b]; b++)
            if (f === p) {
              y = b;
              break;
            }
      }
      return y;
    }, u = function(p, g) {
      try {
        BMap;
      } catch {
        throw Error("Baidu Map JS API is not ready yet!");
      }
      if (p) {
        this._map = p, this._markers = [], this._clusters = [];
        var y = g || {};
        this._gridSize = y.gridSize || 60, this._maxZoom = y.maxZoom || 18, this._minClusterSize = y.minClusterSize || 2, this._isAverageCenter = !1, y.isAverageCenter != null && (this._isAverageCenter = y.isAverageCenter), this._styles = y.styles || [];
        var b = this;
        this._map.addEventListener("zoomend", function() {
          b._redraw();
        }), this._map.addEventListener("moveend", function() {
          b._redraw();
        });
        var f = y.markers;
        c(f) && this.addMarkers(f);
      }
    };
    u.prototype.addMarkers = function(p) {
      if (p.length) {
        for (var g = 0, y = p.length; g < y; g++)
          this._pushMarkerTo(p[g]);
        this._createClusters();
      }
    }, u.prototype._pushMarkerTo = function(p) {
      var g = d(p, this._markers);
      g === -1 && (p.isInCluster = !1, this._markers.push(p));
    }, u.prototype.addMarker = function(p) {
      this._pushMarkerTo(p), this._createClusters();
    }, u.prototype._createClusters = function() {
      var p = this._map.getBounds();
      if (p.getCenter())
        for (var g = i(this._map, p, this._gridSize), y = 0, b; b = this._markers[y]; y++)
          !b.isInCluster && g.containsPoint(b.getPosition()) && this._addToClosestCluster(b);
    }, u.prototype._addToClosestCluster = function(p) {
      var g = 4e6, y = null;
      p.getPosition();
      for (var b = 0, f; f = this._clusters[b]; b++) {
        var C = f.getCenter();
        if (C) {
          var x = this._map.getDistance(C, p.getPosition());
          x < g && (g = x, y = f);
        }
      }
      if (y && y.isMarkerInClusterBounds(p))
        y.addMarker(p);
      else {
        var f = new h(this);
        f.addMarker(p), this._clusters.push(f);
      }
    }, u.prototype._clearLastClusters = function() {
      for (var p = 0, g; g = this._clusters[p]; p++)
        g.remove();
      this._clusters = [], this._removeMarkersFromCluster();
    }, u.prototype._removeMarkersFromCluster = function() {
      for (var p = 0, g; g = this._markers[p]; p++)
        g.isInCluster = !1;
    }, u.prototype._removeMarkersFromMap = function() {
      for (var p = 0, g; g = this._markers[p]; p++) {
        g.isInCluster = !1;
        var y = g.getLabel();
        this._map.removeOverlay(g), g.setLabel(y);
      }
    }, u.prototype._removeMarker = function(p) {
      var g = d(p, this._markers);
      return g === -1 ? !1 : (this._map.removeOverlay(p), this._markers.splice(g, 1), !0);
    }, u.prototype.removeMarker = function(p) {
      var g = this._removeMarker(p);
      return g && (this._clearLastClusters(), this._createClusters()), g;
    }, u.prototype.removeMarkers = function(p) {
      for (var g = !1, y = 0; y < p.length; y++) {
        var b = this._removeMarker(p[y]);
        g = g || b;
      }
      return g && (this._clearLastClusters(), this._createClusters()), g;
    }, u.prototype.clearMarkers = function() {
      this._clearLastClusters(), this._removeMarkersFromMap(), this._markers = [];
    }, u.prototype._redraw = function() {
      this._clearLastClusters(), this._createClusters();
    }, u.prototype.getGridSize = function() {
      return this._gridSize;
    }, u.prototype.setGridSize = function(p) {
      this._gridSize = p, this._redraw();
    }, u.prototype.getMaxZoom = function() {
      return this._maxZoom;
    }, u.prototype.setMaxZoom = function(p) {
      this._maxZoom = p, this._redraw();
    }, u.prototype.getStyles = function() {
      return this._styles;
    }, u.prototype.setStyles = function(p) {
      this._styles = p, this._redraw();
    }, u.prototype.getMinClusterSize = function() {
      return this._minClusterSize;
    }, u.prototype.setMinClusterSize = function(p) {
      this._minClusterSize = p, this._redraw();
    }, u.prototype.isAverageCenter = function() {
      return this._isAverageCenter;
    }, u.prototype.getMap = function() {
      return this._map;
    }, u.prototype.getMarkers = function() {
      return this._markers;
    }, u.prototype.getClustersCount = function() {
      for (var p = 0, g = 0, y; y = this._clusters[g]; g++)
        y.isReal() && p++;
      return p;
    };
    function h(p) {
      this._markerClusterer = p, this._map = p.getMap(), this._minClusterSize = p.getMinClusterSize(), this._isAverageCenter = p.isAverageCenter(), this._center = null, this._markers = [], this._gridBounds = null, this._isReal = !1, this._clusterMarker = new r(this._center, this._markers.length, { styles: this._markerClusterer.getStyles() });
    }
    return h.prototype.addMarker = function(p) {
      if (this.isMarkerInCluster(p))
        return !1;
      if (!this._center)
        this._center = p.getPosition(), this.updateGridBounds();
      else if (this._isAverageCenter) {
        var g = this._markers.length + 1, y = (this._center.lat * (g - 1) + p.getPosition().lat) / g, b = (this._center.lng * (g - 1) + p.getPosition().lng) / g;
        this._center = new BMap.Point(b, y), this.updateGridBounds();
      }
      p.isInCluster = !0, this._markers.push(p);
      var f = this._markers.length;
      if (f < this._minClusterSize)
        return this._map.addOverlay(p), !0;
      if (f === this._minClusterSize)
        for (var C = 0; C < f; C++) {
          var x = this._markers[C].getLabel();
          this._markers[C].getMap() && this._map.removeOverlay(this._markers[C]), this._markers[C].setLabel(x);
        }
      return this._map.addOverlay(this._clusterMarker), this._isReal = !0, this.updateClusterMarker(), !0;
    }, h.prototype.isMarkerInCluster = function(p) {
      if (this._markers.indexOf)
        return this._markers.indexOf(p) != -1;
      for (var g = 0, y; y = this._markers[g]; g++)
        if (y === p)
          return !0;
      return !1;
    }, h.prototype.isMarkerInClusterBounds = function(p) {
      return this._gridBounds.containsPoint(p.getPosition());
    }, h.prototype.isReal = function(p) {
      return this._isReal;
    }, h.prototype.updateGridBounds = function() {
      var p = new BMap.Bounds(this._center, this._center);
      this._gridBounds = i(this._map, p, this._markerClusterer.getGridSize());
    }, h.prototype.updateClusterMarker = function() {
      if (this._map.getZoom() > this._markerClusterer.getMaxZoom()) {
        this._clusterMarker && this._map.removeOverlay(this._clusterMarker);
        for (var p = 0, g; g = this._markers[p]; p++)
          this._map.addOverlay(g);
        return;
      }
      if (this._markers.length < this._minClusterSize) {
        this._clusterMarker.hide();
        return;
      }
      this._clusterMarker.setPosition(this._center), this._clusterMarker.setText(this._markers.length), this._clusterMarker.addEventListener && !this._clusterMarker._hasClickEvent && this._clusterMarker.addEventListener("click", function(y) {
        this._clusterMarker._hasClickEvent = !0, this._markers && this._map.setViewport(this.getBounds());
      }.bind(this));
    }, h.prototype.remove = function() {
      for (var p = 0, g; g = this._markers[p]; p++) {
        var y = this._markers[p].getLabel();
        this._markers[p].getMap() && this._map.removeOverlay(this._markers[p]), this._markers[p].setLabel(y);
      }
      this._map.removeOverlay(this._clusterMarker), this._markers.length = 0, delete this._markers;
    }, h.prototype.getBounds = function() {
      for (var p = new BMap.Bounds(this._center, this._center), g = 0, y; y = this._markers[g]; g++)
        p.extend(y.getPosition());
      return p;
    }, h.prototype.getCenter = function() {
      return this._center;
    }, u;
  });
})(ga);
const ma = we, ya = {
  name: "bml-marker-clusterer",
  mixins: [M("markerClusterer")],
  props: {
    gridSize: {
      type: Object
    },
    maxZoom: {
      type: Number
    },
    minClusterSize: {
      type: Number
    },
    styles: {
      type: Array,
      default() {
        return [];
      }
    },
    averageCenter: {
      type: Boolean,
      default: !1
    }
  },
  watch: {
    gridSize: {
      handler(t) {
        const { BMap: e, originInstance: n } = this;
        n.setGridSize(e, t.map);
      },
      deep: !0
    },
    maxZoom(t) {
      const { originInstance: e } = this;
      e.setMaxZoom(t);
    },
    minClusterSize: {
      handler(t) {
        const { BMap: e, originInstance: n } = this;
        n.setMinClusterSize(T(e, t));
      },
      deep: !0
    },
    styles: {
      handler(t) {
        const { BMap: e, originInstance: n } = this, o = JSON.parse(JSON.stringify(t)).map((s) => (s.size = s.size && T(e, s.size), s));
        n.setStyles(o);
      },
      deep: !0
    },
    averageCenter(t) {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, gridSize: n, minClusterSize: o, maxZoom: s, styles: r, averageCenter: i } = this;
      this.originInstance = new ma(e, {
        gridSize: n && T(t, n),
        maxZoom: s,
        minClusterSize: o && T(t, o),
        styles: r.map((a) => (a.size = T(t, a.size), a)),
        isAverageCenter: i
      }), this.$nextTick(() => {
        const a = this.$children.map((l) => l.originInstance).filter((l) => l instanceof t.Marker);
        this.originInstance.addMarkers(a);
      });
    }
  },
  beforeCreate() {
    this.preventChildrenRender = !0;
  }
};
function _a(t, e, n, o, s, r) {
  return A(), L("span", null, [
    q(t.$slots, "default")
  ]);
}
const Ea = /* @__PURE__ */ F(ya, [["render", _a]]);
var Se = {}, ba = {
  get exports() {
    return Se;
  },
  set exports(t) {
    Se = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(xt, function() {
    var n = {};
    n.dom = {}, n.dom.g = function(i) {
      return typeof i == "string" || i instanceof String ? document.getElementById(i) : i && i.nodeName && (i.nodeType == 1 || i.nodeType == 9) ? i : null;
    }, n.g = n.G = n.dom.g, n.lang = n.lang || {}, n.lang.isString = function(i) {
      return Object.prototype.toString.call(i) == "[object String]";
    }, n.isString = n.lang.isString, n.dom._g = function(i) {
      return n.lang.isString(i) ? document.getElementById(i) : i;
    }, n._g = n.dom._g, n.dom.getDocument = function(i) {
      return i = n.dom.g(i), i.nodeType == 9 ? i : i.ownerDocument || i.document;
    }, n.browser = n.browser || {}, n.browser.ie = n.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0, n.dom.getComputedStyle = function(i, a) {
      i = n.dom._g(i);
      var l = n.dom.getDocument(i), c;
      return l.defaultView && l.defaultView.getComputedStyle && (c = l.defaultView.getComputedStyle(i, null), c) ? c[a] || c.getPropertyValue(a) : "";
    }, n.dom._styleFixer = n.dom._styleFixer || {}, n.dom._styleFilter = n.dom._styleFilter || [], n.dom._styleFilter.filter = function(i, a, l) {
      for (var c = 0, d = n.dom._styleFilter, u; u = d[c]; c++)
        (u = u[l]) && (a = u(i, a));
      return a;
    }, n.string = n.string || {}, n.string.toCamelCase = function(i) {
      return i.indexOf("-") < 0 && i.indexOf("_") < 0 ? i : i.replace(/[-_][^-_]/g, function(a) {
        return a.charAt(1).toUpperCase();
      });
    }, n.dom.getStyle = function(i, a) {
      var l = n.dom;
      i = l.g(i), a = n.string.toCamelCase(a);
      var c = i.style[a] || (i.currentStyle ? i.currentStyle[a] : "") || l.getComputedStyle(i, a);
      if (!c) {
        var d = l._styleFixer[a];
        d && (c = d.get ? d.get(i) : n.dom.getStyle(i, d));
      }
      return (d = l._styleFilter) && (c = d.filter(a, c, "get")), c;
    }, n.getStyle = n.dom.getStyle, n.dom._NAME_ATTRS = function() {
      var i = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
      };
      return n.browser.ie < 8 ? (i.for = "htmlFor", i.class = "className") : (i.htmlFor = "for", i.className = "class"), i;
    }(), n.dom.setAttr = function(i, a, l) {
      return i = n.dom.g(i), a == "style" ? i.style.cssText = l : (a = n.dom._NAME_ATTRS[a] || a, i.setAttribute(a, l)), i;
    }, n.setAttr = n.dom.setAttr, n.dom.setAttrs = function(i, a) {
      i = n.dom.g(i);
      for (var l in a)
        n.dom.setAttr(i, l, a[l]);
      return i;
    }, n.setAttrs = n.dom.setAttrs, n.dom.create = function(i, a) {
      var l = document.createElement(i), c = a || {};
      return n.dom.setAttrs(l, c);
    }, n.object = n.object || {}, n.extend = n.object.extend = function(i, a) {
      for (var l in a)
        a.hasOwnProperty(l) && (i[l] = a[l]);
      return i;
    };
    var o = function(i, a, l) {
      try {
        BMap;
      } catch {
        throw Error("Baidu Map JS API is not ready yet!");
      }
      !a || a.length < 1 || (this._map = i, this._path = a, this.i = -1, this._setTimeoutQuene = [], this._projection = this._map.getMapType().getProjection(), this._opts = {
        icon: null,
        speed: 4e3,
        defaultContent: "",
        showInfoWindow: !1
      }, this._setOptions(l), this._rotation = 0, !this._opts.icon instanceof BMap.Icon && (this._opts.icon = defaultIcon));
    };
    o.prototype._setOptions = function(i) {
      if (i)
        for (var a in i)
          i.hasOwnProperty(a) && (this._opts[a] = i[a]);
    }, o.prototype.start = function() {
      var i = this, a = i._path.length;
      if (this._opts.onstart && this._opts.onstart(i), i.i != -1 && i.i < a - 1)
        if (i._fromPause)
          i._fromStop || i._moveNext(++i.i);
        else
          return;
      else
        i.i = 0, i._addMarker(), i._timeoutFlag = setTimeout(function() {
          !i._overlay && i._addInfoWin(), i._moveNext(i.i);
        }, 400);
      this._fromPause = !1, this._fromStop = !1;
    }, o.prototype.stop = function() {
      this.i = -1, this._fromStop = !0, clearInterval(this._intervalFlag), this._clearTimeout();
      for (var i = 0, a = this._opts.landmarkPois, l = a.length; i < l; i++)
        a[i].bShow = !1;
      this._opts.onstop && this._opts.onstop(this);
    }, o.prototype.pause = function() {
      clearInterval(this._intervalFlag), this._fromPause = !0, this._clearTimeout(), this._opts.onpause && this._opts.onpause(this);
    }, o.prototype.hideInfoWindow = function() {
      this._opts.showInfoWindow = !1, this._overlay && (this._overlay._div.style.visibility = "hidden");
    }, o.prototype.showInfoWindow = function() {
      this._opts.showInfoWindow = !0, this._overlay && (this._overlay._div.style.visibility = "visible");
    }, o.prototype.dispose = function() {
      clearInterval(this._intervalFlag), this._setTimeoutQuene && this._clearTimeout(), this._map && (this._map.removeOverlay(this._overlay), this._map.removeOverlay(this._marker));
    }, n.object.extend(o.prototype, {
      _addMarker: function(i) {
        this._marker && (this.stop(), this._map.removeOverlay(this._marker), clearTimeout(this._timeoutFlag)), this._overlay && this._map.removeOverlay(this._overlay);
        var a = new BMap.Marker(this._path[0]);
        this._opts.icon && a.setIcon(this._opts.icon), this._map.addOverlay(a), a.setAnimation(BMAP_ANIMATION_DROP), this._marker = a;
      },
      _addInfoWin: function() {
        var i = this;
        !s.prototype.initialize && r();
        var a = new s(i._marker.getPosition(), i._opts.defaultContent);
        a.setRelatedClass(this), this._overlay = a, this._map.addOverlay(a), this._opts.showInfoWindow ? this.showInfoWindow() : this.hideInfoWindow();
      },
      _getMercator: function(i) {
        return this._map.getMapType().getProjection().lngLatToPoint(i);
      },
      _getDistance: function(i, a) {
        return Math.sqrt(Math.pow(i.x - a.x, 2) + Math.pow(i.y - a.y, 2));
      },
      _move: function(i, a, l, c) {
        var d = this, u = 0, h = 10, p = this._opts.speed / (1e3 / h), g = this._projection.lngLatToPoint(i), y = this._projection.lngLatToPoint(a), b = Math.round(d._getDistance(g, y) / p);
        if (b < 1) {
          d._opts.onTick && d._opts.onTick(c), d._moveNext(++d.i);
          return;
        }
        d._intervalFlag = setInterval(function() {
          if (u >= b) {
            if (d._opts.onTick && d._opts.onTick(c), clearInterval(d._intervalFlag), d.i > d._path.length) {
              d._opts.onTick && d._opts.onTick(c);
              return;
            }
            d._moveNext(++d.i);
          } else {
            u++;
            var f = l(g.x, y.x, u, b), C = l(g.y, y.y, u, b), x = d._projection.pointToLngLat(new BMap.Pixel(f, C));
            if (u == 1) {
              var P = null;
              d.i - 1 >= 0 && (P = d._path[d.i - 1]), d._opts.enableRotation == !0 && d.setRotation(P, i, a), d._opts.autoView && (d._map.getBounds().containsPoint(x) || d._map.setCenter(x));
            }
            d._marker.setPosition(x), d._setInfoWin(x);
          }
        }, h);
      },
      setRotation: function(i, a, l) {
        var c = this, d = 0;
        if (a = c._map.pointToPixel(a), l = c._map.pointToPixel(l), l.x != a.x) {
          var u = (l.y - a.y) / (l.x - a.x), h = Math.atan(u);
          d = h * 360 / (2 * Math.PI), l.x < a.x ? d = -d + 90 + 90 : d = -d, c._marker.setRotation(-d);
        } else {
          var p = l.y - a.y, g = 0;
          p > 0 ? g = -1 : g = 1, c._marker.setRotation(-g * 90);
        }
      },
      linePixellength: function(i, a) {
        return Math.sqrt(Math.abs(i.x - a.x) * Math.abs(i.x - a.x) + Math.abs(i.y - a.y) * Math.abs(i.y - a.y));
      },
      pointToPoint: function(i, a) {
        return Math.abs(i.x - a.x) * Math.abs(i.x - a.x) + Math.abs(i.y - a.y) * Math.abs(i.y - a.y);
      },
      _moveNext: function(i) {
        var a = this;
        i < this._path.length - 1 ? a._move(a._path[i], a._path[i + 1], a._tween.linear, i) : (a._opts.onTick && a._opts.onTick(i), a.stop());
      },
      _setInfoWin: function(i) {
        var a = this;
        a._overlay.setPosition(i, a._marker.getIcon().size);
        var l = a._troughPointIndex(i);
        l != -1 ? (clearInterval(a._intervalFlag), a._overlay.setHtml(a._opts.landmarkPois[l].html), a._overlay.setPosition(i, a._marker.getIcon().size), a._pauseForView(l)) : a._overlay.setHtml(a._opts.defaultContent);
      },
      _pauseForView: function(i) {
        var a = this, l = setTimeout(function() {
          a._moveNext(++a.i);
        }, a._opts.landmarkPois[i].pauseTime * 1e3);
        a._setTimeoutQuene.push(l);
      },
      _clearTimeout: function() {
        for (var i in this._setTimeoutQuene)
          clearTimeout(this._setTimeoutQuene[i]);
        this._setTimeoutQuene.length = 0;
      },
      _tween: {
        linear: function(i, a, l, c) {
          var d = i, u = a - i, h = l, p = c;
          return u * h / p + d;
        }
      },
      _troughPointIndex: function(i) {
        for (var a = this._opts.landmarkPois, l, c = 0, d = a.length; c < d; c++)
          if (!a[c].bShow && (l = this._map.getDistance(new BMap.Point(a[c].lng, a[c].lat), i), l < 10))
            return a[c].bShow = !0, c;
        return -1;
      }
    });
    function s(i, a) {
      this._point = i, this._html = a;
    }
    function r() {
      s.prototype = new BMap.Overlay(), s.prototype.initialize = function(i) {
        var a = this._div = n.dom.create("div", { style: "border:solid 1px #ccc;width:auto;min-width:50px;text-align:center;position:absolute;background:#fff;color:#000;font-size:12px;border-radius: 10px;padding:5px;white-space: nowrap;" });
        return a.innerHTML = this._html, i.getPanes().floatPane.appendChild(a), this._map = i, a;
      }, s.prototype.draw = function() {
        this.setPosition(this.lushuMain._marker.getPosition(), this.lushuMain._marker.getIcon().size);
      }, n.object.extend(s.prototype, {
        setPosition: function(i, a) {
          var l = this._map.pointToOverlayPixel(i), c = n.dom.getStyle(this._div, "width"), d = n.dom.getStyle(this._div, "height"), u = parseInt(this._div.clientWidth || c, 10);
          parseInt(this._div.clientHeight || d, 10), this._div.style.left = l.x - u / 2 + "px", this._div.style.bottom = -(l.y - a.height) + "px";
        },
        setHtml: function(i) {
          this._div.innerHTML = i;
        },
        setRelatedClass: function(i) {
          this.lushuMain = i;
        }
      });
    }
    return o;
  });
})(ba);
const va = Se, { methods: wa, ...Sa } = M("lushu"), $a = {
  name: "bm-lushu",
  render(t) {
  },
  props: {
    path: {
      type: Array,
      default: []
    },
    landmarkPois: {
      type: Array,
      default() {
        return [];
      }
    },
    icon: {
      type: Object
    },
    speed: {
      type: Number,
      default: 4e3
    },
    content: {
      type: String,
      default: ""
    },
    autoView: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: Boolean,
      default: !1
    },
    infoWindow: {
      type: Boolean,
      default: !0
    },
    play: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    path: {
      handler(t) {
        this.reload();
      },
      deep: !0
    },
    landmarkPois: {
      handler(t) {
        this.reload();
      },
      deep: !0
    },
    icon: {
      handler(t) {
        const { originInstance: e, content: n } = this, o = Pt(BMap, t);
        e._opts.icon = o;
      },
      deep: !0
    },
    speed(t) {
      const { originInstance: e, content: n } = this;
      e._opts.speed = t;
    },
    content(t) {
      const { originInstance: e, infoWindow: n } = this;
      t && n ? e.showInfoWindow() : e.hideInfoWindow(), e._opts.defaultContent = t, e._overlay && e._overlay.setHtml(t);
    },
    autoView(t) {
      const { originInstance: e, content: n } = this;
      e._opts.autoView = t;
    },
    rotation(t) {
      const { originInstance: e, content: n } = this;
      e._opts.enableRotation = t;
    },
    infoWindow(t) {
      const { originInstance: e, content: n } = this;
      e && t && n ? e.showInfoWindow() : e.hideInfoWindow();
    },
    play(t) {
      const { originInstance: e } = this;
      t && e ? e.start() : !this._isEnd && e.pause();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, path: n, landmarkPois: o, icon: s, speed: r, content: i, autoView: a, rotation: l, infoWindow: c, play: d } = this, u = this.originInstance = new va(e, n, {
        enableRotation: l,
        landmarkPois: o,
        showInfoWindow: c,
        defaultContent: i,
        icon: s && Pt(t, s),
        speed: r,
        autoView: a,
        onstart: (h) => {
          this._isEnd = !1, this.$emit("start");
        },
        onstop: (h) => {
          this._isEnd = !0, this.$emit("stop");
        },
        onTick: (h) => {
          this.$emit("tick", h);
        },
        onpause: (h) => this.$emit("pause")
      });
      d && n.length && u.start(this), n.length && (i && c ? u.showInfoWindow() : u.hideInfoWindow());
    },
    ...wa
  },
  ...Sa
};
var xe = {}, xa = {
  get exports() {
    return xe;
  },
  set exports(t) {
    xe = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(xt, function() {
    function n(r, i, a) {
      var l, c, d = r.prototype, u = new Function();
      u.prototype = i.prototype, c = r.prototype = new u();
      for (l in d)
        c[l] = d[l];
      r.prototype.constructor = r, r.superClass = i.prototype, typeof a == "string" && (c._className = a);
    }
    var o = function() {
      var r = function(c) {
        var d = {
          // data is a two dimensional array
          // a datapoint gets saved as data[point-x-value][point-y-value]
          // the value at [point-x-value][point-y-value] is the occurrence of the datapoint
          data: [],
          // tight coupling of the heatmap object
          heatmap: c
        };
        this.max = 1, this.get = function(u) {
          return d[u];
        }, this.set = function(u, h) {
          d[u] = h;
        };
      };
      r.prototype = {
        // function for adding datapoints to the store
        // datapoints are usually defined by x and y but could also contain a third parameter which represents the occurrence
        addDataPoint: function(l, c) {
          if (!(l < 0 || c < 0)) {
            var d = this, u = d.get("heatmap"), h = d.get("data");
            if (h[l] || (h[l] = []), h[l][c] || (h[l][c] = 0), h[l][c] += arguments.length < 3 ? 1 : arguments[2], d.set("data", h), d.max < h[l][c]) {
              u.get("actx").clearRect(0, 0, u.get("width"), u.get("height")), d.setDataSet({ max: h[l][c], data: h }, !0);
              return;
            }
            u.drawAlpha(l, c, h[l][c], !0);
          }
        },
        setDataSet: function(l, c) {
          var d = this, u = d.get("heatmap"), h = [], p = l.data, g = p.length;
          if (u.clear(), this.max = l.max, u.get("legend") && u.get("legend").update(l.max), c != null && c) {
            for (var y in p)
              if (y !== void 0)
                for (var b in p[y])
                  b !== void 0 && u.drawAlpha(y, b, p[y][b], !1);
          } else
            for (; g--; ) {
              var f = p[g];
              u.drawAlpha(f.x, f.y, f.count, !1), h[f.x] || (h[f.x] = []), h[f.x][f.y] || (h[f.x][f.y] = 0), h[f.x][f.y] = f.count;
            }
          u.colorize(), this.set("data", p);
        },
        exportDataSet: function() {
          var l = this, c = l.get("data"), d = [];
          for (var u in c)
            if (u !== void 0)
              for (var h in c[u])
                h !== void 0 && d.push({ x: parseInt(u, 10), y: parseInt(h, 10), count: c[u][h] });
          return { max: l.max, data: d };
        },
        generateRandomDataSet: function(l) {
          var c = this.get("heatmap"), d = c.get("width"), u = c.get("height"), h = {}, p = Math.floor(Math.random() * 1e3 + 1);
          h.max = p;
          for (var g = []; l--; )
            g.push({ x: Math.floor(Math.random() * d + 1), y: Math.floor(Math.random() * u + 1), count: Math.floor(Math.random() * p + 1) });
          h.data = g, this.setDataSet(h);
        }
      };
      var i = function(c) {
        this.config = c;
        var d = {
          element: null,
          labelsEl: null,
          gradientCfg: null,
          ctx: null
        };
        this.get = function(u) {
          return d[u];
        }, this.set = function(u, h) {
          d[u] = h;
        }, this.init();
      };
      i.prototype = {
        init: function() {
          var l = this, c = l.config, d = c.title || "Legend", u = c.position, h = c.offset || 10;
          c.gradient;
          var p = document.createElement("ul"), g, y, b = "";
          l.processGradientObject(), u.indexOf("t") > -1 ? b += "top:" + h + "px;" : b += "bottom:" + h + "px;", u.indexOf("l") > -1 ? b += "left:" + h + "px;" : b += "right:" + h + "px;", g = document.createElement("div"), g.style.cssText = "border-radius:5px;position:absolute;" + b + "font-family:Helvetica; width:256px;z-index:10000000000; background:rgba(255,255,255,1);padding:10px;border:1px solid black;margin:0;", g.innerHTML = "<h3 style='padding:0;margin:0;text-align:center;font-size:16px;'>" + d + "</h3>", p.style.cssText = "position:relative;font-size:12px;display:block;list-style:none;list-style-type:none;margin:0;height:15px;", y = document.createElement("div"), y.style.cssText = ["position:relative;display:block;width:256px;height:15px;border-bottom:1px solid black; background-image:url(", l.createGradientImage(), ");"].join(""), g.appendChild(p), g.appendChild(y), l.set("element", g), l.set("labelsEl", p), l.update(1);
        },
        processGradientObject: function() {
          var l = this, c = this.config.gradient, d = [];
          for (var u in c)
            c.hasOwnProperty(u) && d.push({ stop: u, value: c[u] });
          d.sort(function(h, p) {
            return h.stop - p.stop;
          }), d.unshift({ stop: 0, value: "rgba(0,0,0,0)" }), l.set("gradientArr", d);
        },
        createGradientImage: function() {
          var l = this, c = l.get("gradientArr"), d = c.length, u = document.createElement("canvas"), h = u.getContext("2d"), p;
          u.width = "256", u.height = "15", p = h.createLinearGradient(0, 5, 256, 10);
          for (var g = 0; g < d; g++)
            p.addColorStop(1 / (d - 1) * g, c[g].value);
          h.fillStyle = p, h.fillRect(0, 5, 256, 10), h.strokeStyle = "black", h.beginPath();
          for (var g = 0; g < d; g++)
            h.moveTo((1 / (d - 1) * g * 256 >> 0) + 0.5, 0), h.lineTo((1 / (d - 1) * g * 256 >> 0) + 0.5, g == 0 ? 15 : 5);
          return h.moveTo(255.5, 0), h.lineTo(255.5, 15), h.moveTo(255.5, 4.5), h.lineTo(0, 4.5), h.stroke(), l.set("ctx", h), u.toDataURL();
        },
        getElement: function() {
          return this.get("element");
        },
        update: function(l) {
          for (var c = this, d = c.get("gradientArr"), u = c.get("ctx"), h = c.get("labelsEl"), p, g = "", y, b = 0; b < d.length; b++)
            p = l * d[b].stop >> 0, y = u.measureText(p).width / 2 >> 0, b == 0 && (y = 0), b == d.length - 1 && (y *= 2), g += '<li style="position:absolute;left:' + (((1 / (d.length - 1) * b * 256 || 0) >> 0) - y + 0.5) + 'px">' + p + "</li>";
          h.innerHTML = g;
        }
      };
      var a = function(c) {
        var d = {
          radius: 40,
          element: {},
          canvas: {},
          acanvas: {},
          ctx: {},
          actx: {},
          legend: null,
          visible: !0,
          width: 0,
          height: 0,
          max: !1,
          gradient: !1,
          opacity: 180,
          premultiplyAlpha: !1,
          bounds: {
            l: 1e3,
            r: 0,
            t: 1e3,
            b: 0
          },
          debug: !1
        };
        this.store = new r(this), this.get = function(u) {
          return d[u];
        }, this.set = function(u, h) {
          d[u] = h;
        }, this.configure(c), this.init();
      };
      return a.prototype = {
        configure: function(l) {
          var c = this;
          if (c.set("radius", l.radius || 40), c.set("element", l.element instanceof Object ? l.element : document.getElementById(l.element)), c.set("visible", l.visible != null ? l.visible : !0), c.set("max", l.max || !1), c.set("gradient", l.gradient || { 0.45: "rgb(0,0,255)", 0.55: "rgb(0,255,255)", 0.65: "rgb(0,255,0)", 0.95: "yellow", 1: "rgb(255,0,0)" }), c.set("opacity", parseInt(255 / (100 / l.opacity), 10) || 180), c.set("width", l.width || 0), c.set("height", l.height || 0), c.set("debug", l.debug), l.legend) {
            var d = l.legend;
            d.gradient = c.get("gradient"), c.set("legend", new i(d));
          }
        },
        resize: function() {
          var l = this, c = l.get("element"), d = l.get("canvas"), u = l.get("acanvas");
          d.width = u.width = l.get("width") || c.style.width.replace(/px/, "") || l.getWidth(c), this.set("width", d.width), d.height = u.height = l.get("height") || c.style.height.replace(/px/, "") || l.getHeight(c), this.set("height", d.height);
        },
        init: function() {
          var l = this, c = document.createElement("canvas"), d = document.createElement("canvas"), u = c.getContext("2d"), h = d.getContext("2d"), p = l.get("element");
          l.initColorPalette(), l.set("canvas", c), l.set("ctx", u), l.set("acanvas", d), l.set("actx", h), l.resize(), c.style.cssText = d.style.cssText = "position:absolute;top:0;left:0;z-index:10000000;", l.get("visible") || (c.style.display = "none"), p.appendChild(c), l.get("legend") && p.appendChild(l.get("legend").getElement()), l.get("debug") && document.body.appendChild(d), h.shadowOffsetX = 15e3, h.shadowOffsetY = 15e3, h.shadowBlur = 15;
        },
        initColorPalette: function() {
          var l = this, c = document.createElement("canvas"), d = l.get("gradient"), u, h, p;
          c.width = "1", c.height = "256", u = c.getContext("2d"), h = u.createLinearGradient(0, 0, 1, 256), p = u.getImageData(0, 0, 1, 1), p.data[0] = p.data[3] = 64, p.data[1] = p.data[2] = 0, u.putImageData(p, 0, 0), p = u.getImageData(0, 0, 1, 1), l.set("premultiplyAlpha", p.data[0] < 60 || p.data[0] > 70);
          for (var g in d)
            h.addColorStop(g, d[g]);
          u.fillStyle = h, u.fillRect(0, 0, 1, 256), l.set("gradient", u.getImageData(0, 0, 1, 256).data);
        },
        getWidth: function(l) {
          var c = l.offsetWidth;
          return l.style.paddingLeft && (c += l.style.paddingLeft), l.style.paddingRight && (c += l.style.paddingRight), c;
        },
        getHeight: function(l) {
          var c = l.offsetHeight;
          return l.style.paddingTop && (c += l.style.paddingTop), l.style.paddingBottom && (c += l.style.paddingBottom), c;
        },
        colorize: function(l, c) {
          var d = this, u = d.get("width"), h = d.get("radius"), p = d.get("height"), g = d.get("actx"), y = d.get("ctx"), b = h * 3, f = d.get("premultiplyAlpha"), C = d.get("gradient"), x = d.get("opacity"), P = d.get("bounds"), E, m, _, v, w, S, B, I, $;
          l != null && c != null ? (l + b > u && (l = u - b), l < 0 && (l = 0), c < 0 && (c = 0), c + b > p && (c = p - b), E = l, m = c, v = l + b, _ = c + b) : (P.l < 0 ? E = 0 : E = P.l, P.r > u ? v = u : v = P.r, P.t < 0 ? m = 0 : m = P.t, P.b > p ? _ = p : _ = P.b), w = g.getImageData(E, m, v - E, _ - m), S = w.data.length;
          for (var R = 3; R < S; R += 4)
            B = w.data[R], I = B * 4, I && ($ = B < x ? B : x, w.data[R - 3] = C[I], w.data[R - 2] = C[I + 1], w.data[R - 1] = C[I + 2], f && (w.data[R - 3] /= 255 / $, w.data[R - 2] /= 255 / $, w.data[R - 1] /= 255 / $), w.data[R] = $);
          y.putImageData(w, E, m);
        },
        drawAlpha: function(l, c, d, u) {
          var h = this, p = h.get("radius"), g = h.get("actx");
          h.get("max");
          var y = h.get("bounds"), b = l - 1.5 * p >> 0, f = c - 1.5 * p >> 0, C = l + 1.5 * p >> 0, x = c + 1.5 * p >> 0;
          g.shadowColor = "rgba(0,0,0," + (d ? d / h.store.max : "0.1") + ")", g.shadowOffsetX = 15e3, g.shadowOffsetY = 15e3, g.shadowBlur = 15, g.beginPath(), g.arc(l - 15e3, c - 15e3, p, 0, Math.PI * 2, !0), g.closePath(), g.fill(), u ? h.colorize(b, f) : (b < y.l && (y.l = b), f < y.t && (y.t = f), C > y.r && (y.r = C), x > y.b && (y.b = x));
        },
        toggleDisplay: function() {
          var l = this, c = l.get("visible"), d = l.get("canvas");
          c ? d.style.display = "none" : d.style.display = "block", l.set("visible", !c);
        },
        // dataURL export
        getImageData: function() {
          return this.get("canvas").toDataURL();
        },
        clear: function() {
          var l = this, c = l.get("width"), d = l.get("height");
          l.store.set("data", []), l.get("ctx").clearRect(0, 0, c, d), l.get("actx").clearRect(0, 0, c, d);
        },
        cleanup: function() {
          var l = this;
          l.get("element").removeChild(l.get("canvas"));
        }
      }, {
        create: function(l) {
          return new a(l);
        },
        util: {
          mousePosition: function(l) {
            var c, d;
            if (l.layerX ? (c = l.layerX, d = l.layerY) : l.offsetX && (c = l.offsetX, d = l.offsetY), !(typeof c > "u"))
              return [c, d];
          }
        }
      };
    }(), s = function(r) {
      try {
        BMap;
      } catch {
        throw Error("Baidu Map JS API is not ready yet!");
      }
      if (!s._isExtended) {
        s._isExtended = !0, n(s, BMap.Overlay, "HeatmapOverlay");
        var i = new s(r);
        this.__proto__ = i.__proto__;
      }
      this.conf = r, this.heatmap = null, this.latlngs = [], this.bounds = null, this._moveendHandler = this._moveendHandler.bind(this);
    };
    return s.prototype.initialize = function(r) {
      this._map = r;
      var i = document.createElement("div");
      return i.style.position = "absolute", i.style.top = 0, i.style.left = 0, i.style.border = 0, i.style.width = this._map.getSize().width + "px", i.style.height = this._map.getSize().height + "px", this.conf.element = i, r.getPanes().mapPane.appendChild(i), this.heatmap = o.create(this.conf), this._div = i, i;
    }, s.prototype.draw = function() {
      var r = this._map.getBounds();
      if (!r.equals(this.bounds)) {
        this.bounds = r;
        var i = this._map.pointToOverlayPixel(r.getNorthEast()), a = this._map.pointToOverlayPixel(r.getSouthWest());
        if (!(!i || !a)) {
          var l = i.y, c = a.x, d = a.y - i.y, u = i.x - a.x;
          if (this.conf.element.style.left = c + "px", this.conf.element.style.top = l + "px", this.conf.element.style.width = u + "px", this.conf.element.style.height = d + "px", this.heatmap.store.get("heatmap").resize(), this.latlngs.length > 0) {
            this.heatmap.clear();
            for (var h = this.latlngs.length, p = {
              max: this.heatmap.store.max,
              data: []
            }; h--; ) {
              var g = this.latlngs[h].latlng;
              if (r.containsPoint(g)) {
                var y = this._map.pointToOverlayPixel(g), b = new BMap.Pixel(y.x - c, y.y - l), f = this.pixelTransform(b);
                p.data.push({
                  x: f.x,
                  y: f.y,
                  count: this.latlngs[h].c
                });
              }
            }
            this.heatmap.store.setDataSet(p);
          }
        }
      }
    }, s.prototype.pixelTransform = function(r) {
      for (var i = this.heatmap.get("width"), a = this.heatmap.get("height"); r.x < 0; )
        r.x += i;
      for (; r.x > i; )
        r.x -= i;
      for (; r.y < 0; )
        r.y += a;
      for (; r.y > a; )
        r.y -= a;
      return r.x = r.x >> 0, r.y = r.y >> 0, r;
    }, s.prototype._moveendHandler = function(r) {
      this.setDataSet(this._data), delete this._data, this._map.removeEventListener("moveend", this._moveendHandler);
    }, s.prototype.setDataSet = function(r) {
      if (this._map) {
        var i = this._map.getBounds(), a = this._map.pointToOverlayPixel(i.getNorthEast()), l = this._map.pointToOverlayPixel(i.getSouthWest());
        (!a || !l) && (this._data = r, this._map.addEventListener("moveend", this._moveendHandler));
        var c = {
          max: r.max,
          data: []
        }, d = r.data, u = d.length;
        for (this.latlngs = []; u--; ) {
          var h = new BMap.Point(d[u].lng, d[u].lat);
          if (this.latlngs.push({
            latlng: h,
            c: d[u].count
          }), !!i.containsPoint(h)) {
            var p = this._map.pointToOverlayPixel(h), g = this._map.pointToOverlayPixel(i.getSouthWest()).x, y = this._map.pointToOverlayPixel(i.getNorthEast()).y, b = new BMap.Pixel(p.x - g, p.y - y), f = this.pixelTransform(b);
            c.data.push({
              x: f.x,
              y: f.y,
              count: d[u].count
            });
          }
        }
        this.heatmap.clear(), this.heatmap.store.setDataSet(c);
      }
    }, s.prototype.addDataPoint = function(r, i, a) {
      var l = new BMap.Point(r, i), c = this.pixelTransform(this._map.pointToOverlayPixel(l));
      this.heatmap.store.addDataPoint(c.x, c.y, a), this.latlngs.push({
        latlng: l,
        c: a
      });
    }, s.prototype.toggle = function() {
      this.heatmap.toggleDisplay();
    }, s;
  });
})(xa);
const Ca = xe, ka = {
  name: "bml-heatmap",
  render() {
  },
  mixins: [M("overlay")],
  props: {
    data: {
      type: Array,
      default: Array
    },
    max: {
      type: Number
    },
    radius: {
      type: Number
    },
    gradient: {
      type: Object
    },
    opacity: {
      type: Number
    }
  },
  watch: {
    data: {
      handler() {
        this.reload();
      },
      deep: !0
    },
    max() {
      this.reload();
    },
    radius(t) {
      const { originInstance: e, opacity: n, gradient: o } = this;
      e.setOptions({
        radius: t,
        opacity: n,
        gradient: o
      });
    },
    gradient: {
      handler(t) {
        const { originInstance: e, radius: n, opacity: o } = this;
        e.setOptions({
          radius: n,
          opacity: o,
          gradient: t
        });
      },
      deep: !0
    },
    opacity(t) {
      const { originInstance: e, radius: n, gradient: o } = this;
      e.setOptions({
        radius: n,
        opacity: t,
        gradient: o
      });
    }
  },
  methods: {
    load() {
      const { map: t, data: e, max: n, radius: o, opacity: s, gradient: r } = this, i = this.originInstance = new Ca({
        radius: o,
        opacity: s,
        gradient: r
      });
      t.addOverlay(i), i.setDataSet({ data: e, max: n });
    }
  }
};
var Ce = {}, Ia = {
  get exports() {
    return Ce;
  },
  set exports(t) {
    Ce = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(xt, function() {
    function n(r, i) {
      try {
        BMap;
      } catch {
        throw Error("Baidu Map JS API is not ready yet!");
      }
      var a = o(r), l = new BMap.Polyline(a, i);
      return l.addEventListener("lineupdate", function() {
        this.isEditing && this.enableEditing();
      }), l.cornerPoints = r, l.editMarkers = [], l.enableEditing = function() {
        var c = this;
        if (c.map) {
          c.disableEditing();
          for (var d = 0; d < c.cornerPoints.length; d++) {
            var u = new BMap.Marker(c.cornerPoints[d], {
              icon: new BMap.Icon("http://api.map.baidu.com/library/CurveLine/1.5/src/circle.png", new BMap.Size(16, 16)),
              enableDragging: !0,
              raiseOnDrag: !0
            });
            u.addEventListener("dragend", function() {
              c.cornerPoints.length = 0;
              for (var h = 0; h < c.editMarkers.length; h++)
                c.cornerPoints.push(c.editMarkers[h].getPosition());
              var p = o(c.cornerPoints);
              c.setPath(p);
            }), u.index = d, c.editMarkers.push(u), c.map.addOverlay(u);
          }
        }
        c.isEditing = !0;
      }, l.disableEditing = function() {
        this.isEditing = !1;
        for (var c = 0; c < this.editMarkers.length; c++)
          this.map.removeOverlay(this.editMarkers[c]), this.editMarkers[c] = null;
        this.editMarkers.length = 0;
      }, l.getPath = function() {
        return a;
      }, l;
    }
    function o(r) {
      for (var i = [], a = 0; a < r.length - 1; a++) {
        var l = s(r[a], r[a + 1]);
        l && l.length > 0 && (i = i.concat(l));
      }
      return i;
    }
    function s(r, i) {
      var a = [];
      if (!r || !i || !(r instanceof BMap.Point) || !(i instanceof BMap.Point))
        return null;
      var l = function(v) {
        return 1 - 2 * v + v * v;
      }, c = function(v) {
        return 2 * v - 2 * v * v;
      }, d = function(v) {
        return v * v;
      }, u = 30, h, p, g, y, b, f, C = 0, x = 0;
      if (typeof i > "u") {
        typeof a < "u" && (a = []);
        return;
      }
      var P = parseFloat(r.lat), E = parseFloat(i.lat), m = parseFloat(r.lng), _ = parseFloat(i.lng);
      for (_ > m && parseFloat(_ - m) > 180 && m < 0 && (m = parseFloat(180 + 180 + m)), m > _ && parseFloat(m - _) > 180 && _ < 0 && (_ = parseFloat(180 + 180 + _)), f = 0, E == P ? (h = 0, p = m - _) : _ == m ? (h = Math.PI / 2, p = P - E) : (h = Math.atan((E - P) / (_ - m)), p = (E - P) / Math.sin(h)), f == 0 && (f = h + Math.PI / 5), g = p / 2, b = g * Math.cos(f) + m, y = g * Math.sin(f) + P, C = 0; C < u + 1; C++)
        a.push(new BMap.Point(
          m * l(x) + b * c(x) + _ * d(x),
          P * l(x) + y * c(x) + E * d(x)
        )), x = x + 1 / u;
      return a;
    }
    return n;
  });
})(Ia);
const Ma = Ce, Oa = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mouseout",
  "mouseover",
  "remove",
  "lineupdate"
], Ba = {
  name: "bml-curve-line",
  render() {
  },
  mixins: [M("overlay")],
  props: {
    points: {
      type: Array,
      default: Array
    },
    strokeColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String
    },
    massClear: {
      type: Boolean,
      default: !0
    },
    clicking: {
      type: Boolean,
      default: !0
    },
    editing: {
      type: Boolean,
      default: !1
    }
  },
  watch: {
    points: {
      handler(t, e) {
        this.originInstance.disableEditing(), this.reload();
      },
      deep: !0
    },
    strokeColor(t) {
      this.originInstance.setStrokeColor(t);
    },
    strokeOpacity(t) {
      this.originInstance.setStrokeOpacity(t);
    },
    strokeWeight(t) {
      this.originInstance.setStrokeWeight(t);
    },
    strokeStyle(t) {
      this.originInstance.setStrokeStyle(t);
    },
    editing(t) {
      t ? this.originInstance.enableEditing() : this.originInstance.disableEditing();
    },
    massClear(t) {
      t ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    clicking(t) {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: e, points: n, strokeColor: o, strokeWeight: s, strokeOpacity: r, strokeStyle: i, editing: a, massClear: l, clicking: c } = this, d = new Ma(n.map((u) => k(t, u)), {
        strokeColor: o,
        strokeWeight: s,
        strokeOpacity: r,
        strokeStyle: i,
        // enableEditing: editing,
        enableMassClear: l,
        enableClicking: c
      });
      a ? d.enableEditing() : d.disableEditing(), this.originInstance = d, e.addOverlay(d), J.call(this, d, Oa);
    }
  }
}, Ta = {
  install(t, e) {
    const { ak: n } = e;
    t.config.globalProperties._BMap = () => ({ ak: n }), t.component("baidu-map", Xs), t.component("bm-view", er), t.component("bm-scale", ir), t.component("bm-navigation", sr), t.component("bm-map-type", rr), t.component("bm-overview-map", ar), t.component("bm-geolocation", lr), t.component("bm-copyright", cr), t.component("bm-city-list", ur), t.component("bm-panorama", pr), t.component("bm-control", fr), t.component("bm-marker", br), t.component("bm-point-collection", vr), t.component("bm-polyline", xr), t.component("bm-polygon", to), t.component("bm-circle", Cr), t.component("bm-ground", Ir), t.component("bm-label", Mr), t.component("bm-info-window", Tr), t.component("bm-overlay", Dr), t.component("bm-context-menu", Fr), t.component("bm-context-menu-item", Wr), t.component("bm-local-search", Ur), t.component("bm-transit", Jr), t.component("bm-walking", Xr), t.component("bm-driving", ea), t.component("bm-bus", ia), t.component("bm-tile", sa), t.component("bm-traffic", ra), t.component("bm-auto-complete", fa), t.component("bm-boundary", ua);
  }
};
export {
  Xs as BaiduMap,
  fa as BmAutoComplete,
  ua as BmBoundary,
  ia as BmBus,
  Cr as BmCircle,
  ur as BmCityList,
  Fr as BmContextMenu,
  Wr as BmContextMenuItem,
  fr as BmControl,
  cr as BmCopyright,
  ea as BmDriving,
  lr as BmGeolocation,
  Ir as BmGround,
  Tr as BmInfoWindow,
  Mr as BmLabel,
  Ur as BmLocalSearch,
  rr as BmMapType,
  br as BmMarker,
  sr as BmNavigation,
  Dr as BmOverlay,
  ar as BmOverviewMap,
  pr as BmPanorama,
  vr as BmPointCollection,
  to as BmPolygon,
  xr as BmPolyline,
  ir as BmScale,
  sa as BmTile,
  ra as BmTraffic,
  Jr as BmTransit,
  er as BmView,
  Xr as BmWalking,
  Ba as BmlCurveLine,
  ka as BmlHeatmap,
  $a as BmlLushu,
  Ea as BmlMarkerClusterer,
  Ta as default
};
