import { openBlock as A, createElementBlock as z, createCommentVNode as dt, renderSlot as N, withDirectives as U, vShow as V, resolveComponent as Ct, Fragment as St, renderList as xt, createBlock as Mt, createElementVNode as kt } from "vue";
const Bt = {
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
var Ot = typeof global == "object" && global && global.Object === Object && global;
const $t = Ot;
var Tt = typeof self == "object" && self && self.Object === Object && self, Pt = $t || Tt || Function("return this")();
const Et = Pt;
var At = Et.Symbol;
const G = At;
var ut = Object.prototype, zt = ut.hasOwnProperty, Lt = ut.toString, q = G ? G.toStringTag : void 0;
function Rt(t) {
  var n = zt.call(t, q), e = t[q];
  try {
    t[q] = void 0;
    var o = !0;
  } catch {
  }
  var l = Lt.call(t);
  return o && (n ? t[q] = e : delete t[q]), l;
}
var Wt = Object.prototype, Nt = Wt.toString;
function jt(t) {
  return Nt.call(t);
}
var Dt = "[object Null]", Ft = "[object Undefined]", at = G ? G.toStringTag : void 0;
function Zt(t) {
  return t == null ? t === void 0 ? Ft : Dt : at && at in Object(t) ? Rt(t) : jt(t);
}
function Ht(t) {
  return t != null && typeof t == "object";
}
var Gt = "[object Symbol]";
function Ut(t) {
  return typeof t == "symbol" || Ht(t) && Zt(t) == Gt;
}
function Vt(t, n) {
  for (var e = -1, o = t == null ? 0 : t.length, l = Array(o); ++e < o; )
    l[e] = n(t[e], e, t);
  return l;
}
var Jt = Array.isArray;
const qt = Jt;
var Xt = 1 / 0, rt = G ? G.prototype : void 0, lt = rt ? rt.toString : void 0;
function gt(t) {
  if (typeof t == "string")
    return t;
  if (qt(t))
    return Vt(t, gt) + "";
  if (Ut(t))
    return lt ? lt.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -Xt ? "-0" : n;
}
function Yt(t) {
  return t == null ? "" : gt(t);
}
function Kt(t, n, e) {
  var o = -1, l = t.length;
  n < 0 && (n = -n > l ? 0 : l + n), e = e > l ? l : e, e < 0 && (e += l), l = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var p = Array(l); ++o < l; )
    p[o] = t[o + n];
  return p;
}
function Qt(t, n, e) {
  var o = t.length;
  return e = e === void 0 ? o : e, !n && e >= o ? t : Kt(t, n, e);
}
var te = "\\ud800-\\udfff", ee = "\\u0300-\\u036f", ne = "\\ufe20-\\ufe2f", ie = "\\u20d0-\\u20ff", oe = ee + ne + ie, se = "\\ufe0e\\ufe0f", ae = "\\u200d", re = RegExp("[" + ae + te + oe + se + "]");
function mt(t) {
  return re.test(t);
}
function le(t) {
  return t.split("");
}
var ft = "\\ud800-\\udfff", ce = "\\u0300-\\u036f", he = "\\ufe20-\\ufe2f", pe = "\\u20d0-\\u20ff", de = ce + he + pe, ue = "\\ufe0e\\ufe0f", ge = "[" + ft + "]", K = "[" + de + "]", Q = "\\ud83c[\\udffb-\\udfff]", me = "(?:" + K + "|" + Q + ")", yt = "[^" + ft + "]", _t = "(?:\\ud83c[\\udde6-\\uddff]){2}", bt = "[\\ud800-\\udbff][\\udc00-\\udfff]", fe = "\\u200d", vt = me + "?", wt = "[" + ue + "]?", ye = "(?:" + fe + "(?:" + [yt, _t, bt].join("|") + ")" + wt + vt + ")*", _e = wt + vt + ye, be = "(?:" + [yt + K + "?", K, _t, bt, ge].join("|") + ")", ve = RegExp(Q + "(?=" + Q + ")|" + be + _e, "g");
function we(t) {
  return t.match(ve) || [];
}
function Ie(t) {
  return mt(t) ? we(t) : le(t);
}
function Ce(t) {
  return function(n) {
    n = Yt(n);
    var e = mt(n) ? Ie(n) : void 0, o = e ? e[0] : n.charAt(0), l = e ? Qt(e, 1).join("") : n.slice(1);
    return o[t]() + l;
  };
}
var Se = Ce("toUpperCase");
const xe = Se;
function j(t, n) {
  const e = n || Bt[this.$options.name];
  e && e.forEach((o) => {
    const l = o.slice(0, 2) === "on", p = "on" + xe(l ? o.slice(2) : o), i = this.$attrs[p];
    i && t.addEventListener(o, i);
  });
}
function O(t, n = {}) {
  const { lng: e, lat: o } = n;
  return new t.Point(e, o);
}
function Y(t, n = {}) {
  const { sw: e, ne: o } = n;
  return new t.Bounds(O(t, e), O(t, o));
}
function T(t, n = {}) {
  const { width: e, height: o } = n;
  return new t.Size(e, o);
}
function X(t, n = {}) {
  const { url: e, size: o, opts: l = {} } = n;
  return new t.Icon(e, T(t, o), {
    anchor: l.anchor && T(t, l.anchor),
    imageSize: l.imageSize && T(t, l.imageSize),
    imageOffset: l.imageOffset && T(t, l.imageOffset),
    infoWindowAnchor: l.infoWindowAnchor && T(t, l.infoWindowAnchor),
    printImageUrl: l.printImageUrl
  });
}
function Me(t, n = {}) {
  const { content: e, opts: o } = n;
  return new t.Label(e, {
    offset: o.offset && T(t, o.offset),
    position: o.position && O(t, o.position),
    enableMassClear: o.enableMassClear
  });
}
function ke(t, n = {}) {
  const { path: e, opts: o } = n;
  return new t.Symbol(global[e] || e, {
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
function Be(t, n = {}) {
  const { symbol: e, offset: o, repeat: l, fixedRotation: p } = n;
  return new t.IconSequence(
    e && ke(t, e),
    o,
    l,
    p
  );
}
const D = (t) => t.lng && t.lat, ct = (t) => Object.prototype.toString.call(t).slice(8, -1), W = (t, n) => D(n) ? O(t, n) : n, L = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, l] of n)
    e[o] = l;
  return e;
}, R = window, F = "BMapGL", Oe = "//api.map.baidu.com/api?v=1.0&&type=webgl&callback=_initBaiduMap", Z = "setMapStyleV2", $e = {
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
    center(t, n) {
      const { map: e, zoom: o } = this;
      ct(t) === "String" && t !== n && e.centerAndZoom(t, o);
    },
    "center.lng"(t, n) {
      const { BMap: e, map: o, zoom: l, center: p } = this;
      t !== n && t >= -180 && t <= 180 && o.centerAndZoom(new e.Point(t, p.lat), l);
    },
    "center.lat"(t, n) {
      const { BMap: e, map: o, zoom: l, center: p } = this;
      t !== n && t >= -74 && t <= 74 && o.centerAndZoom(new e.Point(p.lng, t), l);
    },
    zoom(t, n) {
      const { map: e } = this;
      t !== n && t >= 3 && t <= 19 && e.setZoom(t);
    },
    minZoom(t) {
      const { map: n } = this;
      n.setMinZoom(t);
    },
    maxZoom(t) {
      const { map: n } = this;
      n.setMaxZoom(t);
    },
    highResolution() {
      this.reset();
    },
    mapClick() {
      this.reset();
    },
    mapType(t) {
      const { map: n } = this;
      n.setMapType(R[t]);
    },
    dragging(t) {
      const { map: n } = this;
      t ? n.enableDragging() : n.disableDragging();
    },
    scrollWheelZoom(t) {
      const { map: n } = this;
      t ? n.enableScrollWheelZoom() : n.disableScrollWheelZoom();
    },
    doubleClickZoom(t) {
      const { map: n } = this;
      t ? n.enableDoubleClickZoom() : n.disableDoubleClickZoom();
    },
    keyboard(t) {
      const { map: n } = this;
      t ? n.enableKeyboard() : n.disableKeyboard();
    },
    inertialDragging(t) {
      const { map: n } = this;
      t ? n.enableInertialDragging() : n.disableInertialDragging();
    },
    continuousZoom(t) {
      const { map: n } = this;
      t ? n.enableContinuousZoom() : n.disableContinuousZoom();
    },
    pinchToZoom(t) {
      const { map: n } = this;
      t ? n.enablePinchToZoom() : n.disablePinchToZoom();
    },
    autoResize(t) {
      const { map: n } = this;
      t ? n.enableAutoResize() : n.disableAutoResize();
    },
    theme(t) {
      const { map: n } = this;
      n[Z]({ styleJson: t });
    },
    "mapStyle.features": {
      handler(t, n) {
        const { map: e, mapStyle: o } = this, { style: l, styleJson: p } = o;
        e[Z]({
          styleJson: p,
          features: t,
          style: l
        });
      },
      deep: !0
    },
    "mapStyle.style"(t, n) {
      const { map: e, mapStyle: o } = this, { features: l, styleJson: p } = o;
      e[Z]({
        styleJson: p,
        features: l,
        style: t
      });
    },
    "mapStyle.styleJson": {
      handler(t, n) {
        const { map: e, mapStyle: o } = this, { features: l, style: p } = o;
        e[Z]({
          styleJson: t,
          features: l,
          style: p
        });
      },
      deep: !0
    },
    mapStyle(t) {
      const { map: n, theme: e } = this;
      !e && n[Z](t);
    }
  },
  mounted() {
    this.reset();
  },
  methods: {
    setMapOptions() {
      const { map: t, minZoom: n, maxZoom: e, mapType: o, dragging: l, scrollWheelZoom: p, doubleClickZoom: i, keyboard: r, inertialDragging: s, continuousZoom: a, pinchToZoom: h, autoResize: u } = this;
      n && t.setMinZoom(n), e && t.setMaxZoom(e), o && t.setMapType(R[o]), l ? t.enableDragging() : t.disableDragging(), p ? t.enableScrollWheelZoom() : t.disableScrollWheelZoom(), i ? t.enableDoubleClickZoom() : t.disableDoubleClickZoom(), r ? t.enableKeyboard() : t.disableKeyboard(), s ? t.enableInertialDragging() : t.disableInertialDragging(), a ? t.enableContinuousZoom() : t.disableContinuousZoom(), h ? t.enablePinchToZoom() : t.disablePinchToZoom(), u ? t.enableAutoResize() : t.disableAutoResize();
    },
    init(t) {
      if (this.map)
        return;
      let n = this.$refs.view;
      setTimeout(() => {
        const e = new t.Map(n, { enableHighResolution: this.highResolution, enableMapClick: this.mapClick });
        this.map = e;
        const { setMapOptions: o, zoom: l, getCenterPoint: p, theme: i, mapStyle: r } = this;
        i ? e[Z]({ styleJson: i }) : r && e[Z](r), o(), j.call(this, e), e.centerAndZoom(p(), l), this.$emit("ready", { BMap: t, map: e });
      });
    },
    getCenterPoint() {
      const { center: t, BMap: n } = this;
      switch (ct(t)) {
        case "String":
          return t;
        case "Object":
          return new n.Point(t.lng, t.lat);
        default:
          return new n.Point();
      }
    },
    initMap(t) {
      this.BMap = t, this.init(t);
    },
    getMapScript() {
      if (R[F])
        return R[F]._preloader ? R[F]._preloader : Promise.resolve(R[F]);
      {
        const t = this.ak || this._BMap().ak;
        return R[F] = {}, R[F]._preloader = new Promise((n, e) => {
          R._initBaiduMap = function() {
            n(R[F]), R.document.body.removeChild(o), R[F]._preloader = null, R._initBaiduMap = null;
          };
          const o = document.createElement("script");
          R.document.body.appendChild(o), o.src = Oe + `&ak=${t}`;
        }), R[F]._preloader;
      }
    },
    reset() {
      const { getMapScript: t, initMap: n } = this;
      t().then(n);
    }
  }
}, Te = {
  key: 0,
  ref: "view",
  style: { width: "100%", height: "100%" }
};
function Pe(t, n, e, o, l, p) {
  return A(), z("div", null, [
    l.hasBmView ? dt("", !0) : (A(), z("div", Te, null, 512)),
    N(t.$slots, "default")
  ]);
}
const Ee = /* @__PURE__ */ L($e, [["render", Pe]]), Ae = {
  name: "bm-view"
};
function ze(t, n, e, o, l, p) {
  return A(), z("div");
}
const Le = /* @__PURE__ */ L(Ae, [["render", ze]]), Re = {
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
}, tt = (t) => t.$options.name !== "bm-map" ? tt(t.$parent) : t;
function ht() {
  const { unload: t, renderByParent: n, $parent: e } = this;
  n && e.reload(), t();
}
class We {
  constructor(n) {
    this.methods = {
      ready() {
        const e = tt(this.$parent), o = this.BMap = e.BMap, l = this.map = e.map;
        this.load(), this.$emit("ready", {
          BMap: o,
          map: l
        });
      },
      transmitEvent(e) {
        this.$emit(e.type.replace(/^on/, ""), e);
      },
      reload() {
        this && this.BMap && this.$nextTick(() => {
          this.unload(), this.$nextTick(this.load);
        });
      },
      unload() {
        const { map: e, originInstance: o } = this;
        try {
          switch (n.type) {
            case "search":
              return o.clearResults();
            case "autoComplete":
            case "lushu":
              return o.dispose();
            case "markerClusterer":
              return o.clearMarkers();
            default:
              e[Re[n.type].unload](o);
          }
        } catch {
        }
      }
    }, this.computed = {
      renderByParent() {
        return this.$parent.preventChildrenRender;
      }
    }, this.mounted = function() {
      const o = tt(this.$parent).map, { ready: l } = this;
      o && l();
    }, this.unmounted = ht, this.beforeUnmount = ht;
  }
}
const M = (t) => new We({ type: t }), Ne = {
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
      const { BMap: t, map: n, anchor: e, offset: o } = this;
      this.originInstance = new t.ScaleControl({
        anchor: global[e],
        offset: o && T(t, o)
      }), n.addControl(this.originInstance);
    }
  }
}, je = {
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
      const { BMap: t, map: n, anchor: e, offset: o, type: l, showZoomInfo: p, enableGeolocation: i } = this;
      this.originInstance = new t.NavigationControl({
        anchor: global[e],
        offset: o && T(t, o),
        type: global[l],
        showZoomInfo: p,
        enableGeolocation: i
      }), n.addControl(this.originInstance);
    }
  }
}, De = {
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
      const { BMap: t, map: n, anchor: e, offset: o, type: l } = this, p = [];
      this.mapTypes && this.mapTypes.forEach((i) => p.push(global[i])), this.originInstance = new t.MapTypeControl({
        anchor: global[e],
        offset: o && T(t, o),
        type: global[l],
        mapTypes: p
      }), n.addControl(this.originInstance);
    }
  }
}, Fe = {
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
      const { BMap: t, map: n, isOpen: e, size: o, offset: l, anchor: p } = this;
      this.mapTypes && this.mapTypes.forEach((i) => {
      }), this.originInstance = new t.OverviewMapControl({
        anchor: global[p],
        offset: T(t, l),
        size: T(t, o),
        isOpen: e
      }), j.call(this, this.originInstance), n.addControl(this.originInstance);
    }
  }
}, Ze = {
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
      const { BMap: t, map: n, anchor: e, showAddressBar: o, autoLocation: l, locationIcon: p, offset: i } = this;
      this.originInstance = new t.GeolocationControl({
        anchor: global[e],
        showAddressBar: o,
        enableAutoLocation: l,
        offset: i && T(t, i),
        locationIcon: p && X(t, p)
      }), j.call(this, this.originInstance), n.addControl(this.originInstance);
    }
  }
}, He = {
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
      const { BMap: t, map: n, offset: e, anchor: o, updateCopyrightList: l } = this;
      this.originInstance = new t.CopyrightControl({
        anchor: global[o],
        offset: e && T(t, e)
      }), l(), n.addControl(this.originInstance);
    },
    updateCopyrightList() {
      const { BMap: t, map: n } = this, { removeCopyright: e, getCopyrightCollection: o } = this.originInstance, l = o();
      l && l.forEach((p) => {
        e(p.id);
      }), this.copyright && this.copyright.forEach((p) => {
        const i = p.bounds ? new t.Bounds(new t.Point(p.bounds.sw.lng, p.bounds.sw.lat), new t.Point(p.bounds.ne.lng, p.bounds.ne.lat)) : n.getBounds();
        this.originInstance.addCopyright({
          id: p.id,
          content: p.content,
          bounds: i
        }), this.originInstance.getCopyrightCollection();
      });
    }
  }
}, Ge = {
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
      const { BMap: t, map: n, anchor: e, offset: o } = this, l = this;
      this.originInstance = new t.CityListControl({
        anchor: global[e],
        offset: o && T(t, o),
        onChangeBefore() {
          l.$emit("changeBefore");
        },
        onChangeAfter() {
          l.$emit("changeAfter");
        }
      }), n.addControl(this.originInstance);
    }
  }
}, Ue = {
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
      const { BMap: t, map: n, anchor: e, offset: o } = this;
      this.originInstance = new t.PanoramaControl({
        anchor: global[e],
        offset: o && T(t, o)
      }), n.addControl(this.originInstance);
    }
  }
}, Ve = {
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
      const { BMap: t, map: n, anchor: e, offset: o, $el: l } = this, p = function() {
        this.defaultAnchor = global[e || "BMAP_ANCHOR_TOP_LEFT"], this.defaultOffset = T(t, o);
      };
      p.prototype = new t.Control(), p.prototype.initialize = (i) => i.getContainer().appendChild(l), this.originInstance = new p(), n.addControl(this.originInstance);
    }
  }
};
function Je(t, n, e, o, l, p) {
  return A(), z("div", null, [
    N(t.$slots, "default")
  ]);
}
const qe = /* @__PURE__ */ L(Ve, [["render", Je]]), { methods: Xe, ...Ye } = M("overlay"), pt = window, Ke = {
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
    "position.lng"(t, n) {
      const { BMap: e, originInstance: o, position: l, renderByParent: p, $parent: i } = this;
      t !== n && t >= -180 && t <= 180 && o.setPosition(O(e, {
        lng: t,
        lat: l.lat
      })), p && i.reload();
    },
    "position.lat"(t, n) {
      const { BMap: e, originInstance: o, position: l, renderByParent: p, $parent: i } = this;
      t !== n && t >= -74 && t <= 74 && o.setPosition(O(e, {
        lng: l.lng,
        lat: t
      })), p && i.reload();
    },
    "offset.width"(t, n) {
      const { BMap: e, originInstance: o } = this;
      t !== n && o.setOffset(new e.Size(t, this.offset.height));
    },
    "offset.height"(t, n) {
      const { BMap: e, originInstance: o } = this;
      t !== n && o.setOffset(new e.Size(this.offset.width, t));
    },
    icon: {
      deep: !0,
      handler(t) {
        const { BMap: n, originInstance: e, rotation: o } = this;
        e && e.setIcon(X(n, t)), o && e && e.setRotation(o);
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
      this.originInstance.setAnimation(pt[t]);
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
      const { BMap: t, map: n, position: e, offset: o, icon: l, massClear: p, dragging: i, clicking: r, raiseOnDrag: s, draggingCursor: a, rotation: h, shadow: u, title: m, label: c, animation: f, top: y, renderByParent: b, $parent: g, zIndex: C } = this, S = new t.Marker(new t.Point(e.lng, e.lat), {
        offset: o,
        icon: l && X(t, l),
        enableMassClear: p,
        enableDragging: i,
        enableClicking: r,
        raiseOnDrag: s,
        draggingCursor: a,
        rotation: h,
        shadow: u,
        title: m
      });
      this.originInstance = S, c && S && S.setLabel(Me(t, c)), S.setTop(y), S.setZIndex(C), j.call(this, S), b ? g.reload() : n.addOverlay(S), S.setAnimation(pt[f]);
    },
    ...Xe
  },
  ...Ye
};
function Qe(t, n, e, o, l, p) {
  return A(), z("div", null, [
    N(t.$slots, "default")
  ]);
}
const tn = /* @__PURE__ */ L(Ke, [["render", Qe]]), en = {
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
      const { originInstance: n, color: e, size: o } = this;
      n.setStyles({
        shape: global[t],
        color: e,
        size: global[o]
      });
    },
    size(t) {
      const { originInstance: n, color: e, shape: o } = this;
      n.setStyles({
        shape: global[o],
        color: e,
        size: global[t]
      });
    },
    color(t) {
      const { originInstance: n, shape: e, size: o } = this;
      n.setStyles({
        shape: global[e],
        color: t,
        size: global[o]
      });
    },
    points: {
      deep: !0,
      handler(t) {
        const { originInstance: n } = this;
        n.clear(), n.setPoints(t);
      }
    }
  },
  methods: {
    load() {
      const { BMap: t, map: n, points: e, shape: o, color: l, size: p } = this, i = this.originInstance = new t.PointCollection(e.map((r) => O(t, r)), {
        shape: global[o],
        color: l,
        size: global[p]
      });
      j.call(this, i), n.addOverlay(i);
    }
  }
}, { methods: nn, ...on } = M("overlay"), sn = {
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
      const { BMap: t, icons: n } = this;
      return n.map((e) => Be(t, e));
    }
  },
  watch: {
    path: {
      handler(t, n) {
        this.reload();
      },
      deep: !0
    },
    icons: {
      handler(t, n) {
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
      const { BMap: t, map: n, path: e, strokeColor: o, strokeWeight: l, strokeOpacity: p, strokeStyle: i, editing: r, massClear: s, clicking: a, iconSequences: h } = this, u = new t.Polyline(e.map((m) => O(t, {
        lng: m.lng,
        lat: m.lat
      })), {
        strokeColor: o,
        strokeWeight: l,
        strokeOpacity: p,
        strokeStyle: i,
        enableEditing: r,
        enableMassClear: s,
        enableClicking: a,
        icons: h
      });
      this.originInstance = u, n.addOverlay(u), j.call(this, u);
    },
    ...nn
  },
  ...on
}, It = {
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
      handler(t, n) {
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
      const { BMap: t, map: n, path: e, strokeColor: o, strokeWeight: l, strokeOpacity: p, strokeStyle: i, fillColor: r, fillOpacity: s, editing: a, massClear: h, clicking: u } = this, m = new t.Polygon(e.map((c) => O(t, { lng: c.lng, lat: c.lat })), {
        strokeColor: o,
        strokeWeight: l,
        strokeOpacity: p,
        strokeStyle: i,
        fillColor: r,
        fillOpacity: s,
        // enableEditing: editing,
        enableMassClear: h,
        enableClicking: u
      });
      this.originInstance = m, n.addOverlay(m), j.call(this, m), a ? m.enableEditing() : m.disableEditing();
    }
  }
}, an = {
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
    "center.lng"(t, n) {
      const { BMap: e, originInstance: o, isEditing: l, disableEditing: p, enableEditing: i, center: r, editing: s } = this;
      if (!l) {
        p();
        const a = t;
        t.toString() !== n.toString() && a >= -180 && a <= 180 && o.setCenter(O(e, { lng: a, lat: r.lat })), s && i();
      }
    },
    "center.lat"(t, n) {
      const { BMap: e, originInstance: o, isEditing: l, disableEditing: p, enableEditing: i, center: r, editing: s } = this;
      if (!l) {
        p();
        const a = t;
        t.toString() !== n.toString() && a >= -74 && a <= 74 && o.setCenter(O(e, { lng: r.lng, lat: a })), s && i();
      }
    },
    radius(t, n) {
      const { originInstance: e, isEditing: o, disableEditing: l, enableEditing: p, editing: i } = this;
      o || (l(), e.setRadius(t), i && p());
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
      const { originInstance: t, editingKey: n, dragStartHandler: e, dragEndHandler: o } = this;
      t[n].forEach((l) => {
        l.addEventListener("dragstart", e), l.addEventListener("dragend", o);
      });
    },
    enableEditing() {
      const { originInstance: t, bindEditingNodeEvents: n } = this;
      t.enableEditing(), n();
    },
    disableEditing() {
      const { originInstance: t } = this;
      t.disableEditing();
    },
    getEditingKey(t) {
      const n = [];
      t.enableEditing(), setTimeout(() => {
        for (const e in t)
          t[e] && t[e].length === 2 && n.push(e);
        t.disableEditing();
        for (const e in t)
          t[e] && t[e].length === 0 && ~n.indexOf(e) && (this.editingKey = e);
      }, 0);
    },
    load() {
      const { BMap: t, map: n, center: e, radius: o, strokeColor: l, strokeWeight: p, strokeOpacity: i, strokeStyle: r, fillColor: s, fillOpacity: a, editing: h, massClear: u, clicking: m, enableEditing: c, disableEditing: f, getEditingKey: y, editingKey: b } = this, g = new t.Circle(O(t, { lng: e.lng, lat: e.lat }), o, {
        strokeColor: l,
        strokeWeight: p,
        strokeOpacity: i,
        strokeStyle: r,
        fillColor: s,
        fillOpacity: a,
        // enableEditing: editing,
        enableMassClear: u,
        enableClicking: m
      });
      this.originInstance = g, n.addOverlay(g), j.call(this, g), !b && y(g), setTimeout(() => {
        h ? c() : f();
      }, 0);
    }
  }
}, rn = {
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
        const { BMap: n } = this;
        this.originInstance.setBounds(Y(n, t));
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
      const { BMap: t, map: n, bounds: e, opacity: o, imageURL: l, displayOnMinLevel: p, displayOnMaxLevel: i } = this, r = new t.GroundOverlay(e && Y(t, e), {
        opacity: o,
        imageURL: l,
        displayOnMaxLevel: i,
        displayOnMinLevel: p
      });
      r.setImageURL(l), this.originInstance = r, j.call(this, r), n.addOverlay(r);
    }
  }
}, ln = {
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
    "offset.width"(t, n) {
      const { BMap: e } = this;
      t.toString() !== n.toString() && this.originInstance.setOffset(T(e, { width: t, height: this.offset.height }));
    },
    "offset.height"(t, n) {
      const { BMap: e } = this;
      t.toString() !== n.toString() && this.originInstance.setOffset(T(e, {
        width: this.offset.width,
        height: t
      }));
    },
    "position.lng"(t, n) {
      const { BMap: e } = this, o = t;
      t.toString() !== n.toString() && o >= -180 && o <= 180 && this.originInstance.setCenter(O(e, { lng: o, lat: this.center.lat }));
    },
    "position.lat"(t, n) {
      const { BMap: e } = this, o = t;
      t.toString() !== n.toString() && o >= -74 && o <= 74 && this.originInstance.setCenter(O(e, { lng: this.center.lng, lat: o }));
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
      const { BMap: t, map: n, content: e, title: o, offset: l, position: p, labelStyle: i, zIndex: r, massClear: s, $parent: a } = this, h = new t.Label(e, {
        offset: T(t, l),
        position: O(t, p),
        enableMassClear: s
      });
      this.originInstance = h;
      try {
        a.originInstance.setLabel(h);
      } catch {
        n.addOverlay(h);
      }
      o && h.setTitle(o), i && h.setStyle(i), r && h.setZIndex(r), j.call(this, h);
    }
  }
}, { methods: cn, ...hn } = M("overlay"), pn = window, dn = {
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
    "position.lng"(t, n) {
      this.reload();
    },
    "position.lat"(t, n) {
      this.reload();
    },
    "offset.width"(t, n) {
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
      const { BMap: t, map: n, show: e, title: o, width: l, height: p, maxWidth: i, offset: r, autoPan: s, closeOnClick: a, message: h, maximize: u, bindObserver: m, $parent: c } = this, f = this.$el, y = new t.InfoWindow(f, {
        width: l,
        height: p,
        title: o,
        maxWidth: i,
        offset: T(t, r),
        enableAutoPan: s,
        enableCloseOnClick: a,
        enableMessage: typeof h > "u",
        message: h
      });
      u ? y.enableMaximize() : y.disableMaximize(), j.call(this, y), this.originInstance = y, y.redraw(), [].forEach.call(f.querySelectorAll("img"), (b) => {
        b.onload = () => y.redraw();
      }), m(), this.$container = c.originInstance && c.originInstance.openInfoWindow ? c.originInstance : n, e && this.openInfoWindow();
    },
    bindObserver() {
      const t = pn.MutationObserver;
      if (!t)
        return;
      const { $el: n, originInstance: e } = this;
      this.observer = new t((o) => e.redraw()), this.observer.observe(n, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      });
    },
    openInfoWindow() {
      const { BMap: t, $container: n, position: e, originInstance: o } = this;
      n.openInfoWindow(o, O(t, e));
    },
    closeInfoWindow() {
      this.$container.closeInfoWindow(this.originInstance);
    },
    ...cn
  },
  ...hn
};
function un(t, n, e, o, l, p) {
  return U((A(), z("div", null, [
    N(t.$slots, "default")
  ], 512)), [
    [V, e.show]
  ]);
}
const gn = /* @__PURE__ */ L(dn, [["render", un]]), { methods: mn, ...fn } = M("overlay"), yn = {
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
      const { BMap: t, map: n, $el: e, pane: o } = this, l = this.$emit.bind(this);
      class p extends t.Overlay {
        initialize() {
          l("initialize", {
            BMap: t,
            map: n,
            el: e,
            overlay: this
          });
          try {
            n.getPanes()[o].appendChild(e);
          } catch {
          }
          return e;
        }
        draw() {
          l("draw", {
            BMap: t,
            map: n,
            el: e,
            overlay: this
          });
        }
      }
      const i = new p();
      this.originInstance = i, n.addOverlay(i);
    },
    ...mn
  },
  ...fn
};
function _n(t, n, e, o, l, p) {
  return A(), z("div", null, [
    N(t.$slots, "default")
  ]);
}
const bn = /* @__PURE__ */ L(yn, [["render", _n]]), vn = {
  name: "bm-context-menu",
  props: {
    width: {
      type: Number
    }
  },
  mixins: [M("contextMenu")],
  methods: {
    load() {
      const { width: t, BMap: n, map: e, $parent: o } = this, l = this.parent = o.originInstance || e;
      this.originInstance && l.removeContextMenu(this.originInstance);
      const p = this.originInstance = new n.ContextMenu();
      for (const i of this.$children) {
        if (i.seperator) {
          p.addSeparator();
          continue;
        }
        const r = new n.MenuItem(i.text, function(s, a) {
          i.callback({
            point: s,
            pixel: a,
            BMap: n,
            map: e,
            target: l
          });
        }, {
          width: t,
          id: i.id,
          iconUrl: i.iconUrl
        });
        i.disabled ? r.disable() : r.enable(), i.originInstance = r, p.addItem(r);
      }
      l.addContextMenu(p);
    }
  }
};
function wn(t, n, e, o, l, p) {
  return A(), z("div", null, [
    N(t.$slots, "default")
  ]);
}
const In = /* @__PURE__ */ L(vn, [["render", wn]]), Cn = {
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
function Sn(t, n, e, o, l, p) {
  return A(), z("span", null, [
    N(t.$slots, "default")
  ]);
}
const xn = /* @__PURE__ */ L(Cn, [["render", Sn]]), Mn = {
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
        const { originInstance: n, search: e } = this;
        n.setLocation(t || this.map), e();
      },
      deep: !0
    },
    keyword() {
      this.search();
    },
    bounds: {
      handler(t) {
        const { searchInBounds: n } = this;
        n(t);
      },
      deep: !0
    },
    nearby: {
      handler(t) {
        const { searchNearby: n } = this;
        n(t);
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
      const { originInstance: n, keyword: e, customData: o, BMap: l } = this;
      n.searchNearby(e, O(l, t.center), t.radius, o);
    },
    searchInBounds(t) {
      const { originInstance: n, keyword: e, customData: o, BMap: l } = this;
      n.searchInBounds(e, Y(l, t), o);
    },
    search() {
      const { originInstance: t, keyword: n, forceLocal: e, customData: o, nearby: l, bounds: p, searchNearby: i, searchInBounds: r } = this;
      l ? i(l) : p ? r(p) : t.search(n, {
        forceLocal: e,
        customData: o
      });
    },
    load() {
      const t = this, { map: n, BMap: e, search: o, pageCapacity: l, autoViewport: p, selectFirstResult: i, highlightMode: r, location: s, originInstance: a } = this, h = s ? D(s) ? O(e, s) : s : n, u = this.originInstance = new e.LocalSearch(h, {
        onMarkersSet(m) {
          t.$emit("markersset", m);
        },
        onInfoHtmlSet(m) {
          t.$emit("infohtmlset", m);
        },
        onResultsHtmlSet(m) {
          t.$emit("resultshtmlset", m);
        },
        onSearchComplete(m) {
          a && a !== u && a.clearResults(), t.$emit("searchcomplete", m);
        },
        pageCapacity: l,
        renderOptions: {
          map: n,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: i,
          autoViewport: p,
          highlightMode: r
        }
      });
      o();
    }
  }
};
function kn(t, n, e, o, l, p) {
  return U((A(), z("div", null, [
    N(t.$slots, "default")
  ], 512)), [
    [V, e.panel]
  ]);
}
const Bn = /* @__PURE__ */ L(Mn, [["render", kn]]), On = {
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
        const { originInstance: n, map: e } = this;
        n.setLocation(t || e);
      },
      deep: !0
    },
    start: {
      handler(t) {
        const { originInstance: n, end: e, BMap: o } = this;
        n.search(W(o, t), W(o, e));
      },
      deep: !0
    },
    end: {
      handler(t) {
        const { originInstance: n, start: e, BMap: o } = this;
        n.search(W(o, e), W(o, t));
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
    search(t, n) {
      const { originInstance: e } = this;
      e.search(t, n);
    },
    load() {
      const t = this, { map: n, BMap: e, location: o, policy: l, pageCapacity: p, selectFirstResult: i, autoViewport: r, highlightMode: s, search: a, start: h, end: u, originInstance: m } = this, c = o ? D(o) ? O(e, o) : o : n, f = this.originInstance = new e.TransitRoute(c, {
        renderOptions: {
          map: n,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: i,
          autoViewport: r,
          highlightMode: s
        },
        policy: global[l],
        pageCapacity: p,
        onSearchComplete(y) {
          m && m !== f && m.clearResults(), t.$emit("searchcomplete", y);
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
      a(D(h) ? O(e, h) : h, D(u) ? O(e, u) : u);
    }
  }
};
function $n(t, n, e, o, l, p) {
  return U((A(), z("div", null, [
    N(t.$slots, "default")
  ], 512)), [
    [V, e.panel]
  ]);
}
const Tn = /* @__PURE__ */ L(On, [["render", $n]]), Pn = {
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
        const { originInstance: n, map: e } = this;
        n.setLocation(t || e);
      },
      deep: !0
    },
    start: {
      handler(t) {
        const { originInstance: n, end: e, BMap: o } = this;
        n.search(W(o, t), W(o, e));
      },
      deep: !0
    },
    end: {
      handler(t) {
        const { originInstance: n, start: e, BMap: o } = this;
        n.search(W(o, e), W(o, t));
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
    search(t, n) {
      const { originInstance: e } = this;
      e.search(t, n);
    },
    load() {
      const t = this, { map: n, BMap: e, location: o, selectFirstResult: l, autoViewport: p, highlightMode: i, search: r, start: s, end: a, originInstance: h } = this, u = o ? D(o) ? O(e, o) : o : n, m = this.originInstance = new e.WalkingRoute(u, {
        renderOptions: {
          map: n,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: l,
          autoViewport: p,
          highlightMode: i
        },
        onSearchComplete(c) {
          h && h !== m && h.clearResults(), t.$emit("searchcomplete", c);
        },
        onMarkersSet(c) {
          t.$emit("markersset", c);
        },
        onInfoHtmlSet(c) {
          t.$emit("infohtmlset", c);
        },
        onPolylinesSet(c) {
          t.$emit("polylinesset", c);
        },
        onResultsHtmlSet(c) {
          t.$emit("resultshtmlset", c);
        }
      });
      r(D(s) ? O(e, s) : s, D(a) ? O(e, a) : a);
    }
  }
};
function En(t, n, e, o, l, p) {
  return U((A(), z("div", null, [
    N(t.$slots, "default")
  ], 512)), [
    [V, e.panel]
  ]);
}
const An = /* @__PURE__ */ L(Pn, [["render", En]]), zn = {
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
        const { originInstance: n, map: e } = this;
        n.setLocation(t || e);
      },
      deep: !0
    },
    start: {
      handler(t) {
        const { originInstance: n, end: e, startCity: o, endCity: l, waypoints: p, BMap: i, getWaypoints: r } = this;
        n.search(W(i, t), W(i, e), {
          startCity: o,
          endCity: l,
          waypoints: r(p)
        });
      },
      deep: !0
    },
    end: {
      handler(t) {
        const { originInstance: n, start: e, startCity: o, endCity: l, waypoints: p, BMap: i, getWaypoints: r } = this;
        n.search(W(i, e), W(i, t), {
          startCity: o,
          endCity: l,
          waypoints: r(p)
        });
      },
      deep: !0
    },
    startCity(t) {
      const { originInstance: n, start: e, end: o, endCity: l, waypoints: p, getWaypoints: i } = this;
      n.search(e, o, {
        val: t,
        endCity: l,
        waypoints: i(p)
      });
    },
    endCity(t) {
      const { originInstance: n, start: e, end: o, startCity: l, waypoints: p, getWaypoints: i } = this;
      n.search(e, o, {
        startCity: l,
        val: t,
        waypoints: i(p)
      });
    },
    waypoints: {
      handler(t) {
        const { originInstance: n, start: e, end: o, startCity: l, endCity: p, getWaypoints: i } = this;
        n.search(e, o, {
          startCity: l,
          endCity: p,
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
    search(t, n, { startCity: e, endCity: o, waypoints: l }) {
      const { originInstance: p, getWaypoints: i } = this;
      p.search(t, n, {
        startCity: e,
        endCity: o,
        waypoints: i(l)
      });
    },
    getWaypoints(t) {
      const { BMap: n } = this;
      if (t)
        return t.map((e) => W(n, e));
    },
    load() {
      const t = this, { map: n, BMap: e, location: o, policy: l, selectFirstResult: p, autoViewport: i, highlightMode: r, search: s, start: a, end: h, startCity: u, endCity: m, waypoints: c, originInstance: f, getWaypoints: y } = this, b = o ? D(o) ? O(e, o) : o : n, g = this.originInstance = new e.DrivingRoute(b, {
        renderOptions: {
          map: n,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: p,
          autoViewport: i,
          highlightMode: r
        },
        policy: global[l],
        onSearchComplete(C) {
          f && f !== g && f.clearResults(), t.$emit("searchcomplete", C);
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
      s(W(e, a), W(e, h), {
        startCity: u,
        endCity: m,
        waypoints: y(c)
      });
    }
  }
};
function Ln(t, n, e, o, l, p) {
  return U((A(), z("div", null, [
    N(t.$slots, "default")
  ], 512)), [
    [V, e.panel]
  ]);
}
const Rn = /* @__PURE__ */ L(zn, [["render", Ln]]), Wn = {
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
        const { originInstance: n, map: e } = this;
        n.setLocation(t || e);
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
      const { originInstance: n } = this;
      n.getBusList(t);
    },
    load() {
      const t = this, { location: n, selectFirstResult: e, autoViewport: o, highlightMode: l, keyword: p, search: i, BMap: r, map: s, originInstance: a } = this, h = n ? D(n) ? O(r, n) : n : s, u = this.originInstance = new r.BusLineSearch(h, {
        renderOptions: {
          map: s,
          panel: this.$el,
          selectFirstResult: e,
          autoViewport: o,
          highlightMode: l
        },
        onGetBusListComplete(m) {
          a && a !== u && a.clearResults(), t.$emit("getbuslistcomplete", m);
        },
        onGetBusLineComplete(m) {
          a && a !== u && a.clearResults(), t.$emit("getbuslinecomplete", m);
        },
        onBusListHtmlSet(m) {
          t.$emit("buslisthtmlset", m);
        },
        onBusLineHtmlSet(m) {
          t.$emit("buslinehtmlset", m);
        },
        onMarkersSet(m) {
          t.$emit("markersset", m);
        },
        onPolylinesSet(m) {
          t.$emit("polylinesset", m);
        }
      });
      i(p);
    }
  }
};
function Nn(t, n, e, o, l, p) {
  return U((A(), z("div", null, null, 512)), [
    [V, e.panel]
  ]);
}
const jn = /* @__PURE__ */ L(Wn, [["render", Nn]]), Dn = {
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
      const { BMap: t, map: n, transparentPng: e, tileUrlTemplate: o, copyright: l, zIndex: p } = this;
      this.originInstance = new t.TileLayer({
        transparentPng: e,
        tileUrlTemplate: o,
        copyright: l && {
          id: l.id,
          content: l.content,
          bounds: l.bounds && Y(l.bounds)
        },
        zIndex: p
      }), n.addTileLayer(this.originInstance);
    }
  }
}, Fn = {
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
      const { pridictDate: t, BMap: n, map: e } = this;
      this.originInstance = new n.TrafficLayer({
        pridictDate: t
      }), e.addTileLayer(this.originInstance);
    }
  }
}, Zn = {
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
    BmPolygon: It
  },
  watch: {
    name() {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, name: n } = this;
      new t.Boundary().get(n, (o) => {
        this.paths = o.boundaries.map((l) => (l || []).split(";").map((p) => (([i, r]) => ({ lng: i, lat: r }))(p.split(",").map((i) => +i))));
      });
    }
  }
}, Hn = { key: 0 };
function Gn(t, n, e, o, l, p) {
  const i = Ct("bm-polygon");
  return l.paths.length ? (A(), z("div", Hn, [
    (A(!0), z(St, null, xt(l.paths, (r, s) => (A(), Mt(i, {
      key: s,
      path: r,
      "stroke-color": e.strokeColor,
      "stroke-weight": e.strokeWeight,
      "stroke-opacity": e.strokeOpacity,
      "stroke-style": e.strokeStyle,
      "fill-opacity": e.fillOpacity,
      "fill-color": e.fillColor,
      "mass-clear": e.massClear,
      clicking: e.clicking,
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a)),
      onDblclick: n[1] || (n[1] = (a) => t.$emit("dblclick", a)),
      onMousedown: n[2] || (n[2] = (a) => t.$emit("mousedown", a)),
      onMouseup: n[3] || (n[3] = (a) => t.$emit("mouseup", a)),
      onMouseout: n[4] || (n[4] = (a) => t.$emit("mouseout", a)),
      onMouseover: n[5] || (n[5] = (a) => t.$emit("mouseover", a)),
      onRemove: n[6] || (n[6] = (a) => t.$emit("remove", a))
    }, null, 8, ["path", "stroke-color", "stroke-weight", "stroke-opacity", "stroke-style", "fill-opacity", "fill-color", "mass-clear", "clicking"]))), 128))
  ])) : dt("", !0);
}
const Un = /* @__PURE__ */ L(Zn, [["render", Gn]]), Vn = {
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
      const { BMap: t, map: n, $el: e, types: o, location: l, sugStyle: p } = this, i = e.querySelector("input");
      i && (this.originInstance = new t.Autocomplete({
        input: i,
        types: o,
        location: l || n,
        onSearchComplete: (r) => {
          const s = document.querySelectorAll(".tangram-suggestion-main");
          for (const a of s)
            for (const h in p)
              a.style[h] = p[h].toString();
          this.$emit("searchcomplete", r);
        }
      }), this.originInstance.addEventListener("onconfirm", (r) => {
        const s = r.item.value;
        this.$emit("input", s.province + s.city + s.district + s.street + s.business);
      }), j.call(this, this.originInstance));
    }
  }
}, Jn = /* @__PURE__ */ kt("input", null, null, -1);
function qn(t, n, e, o, l, p) {
  return A(), z("span", null, [
    N(t.$slots, "default", {}, () => [
      Jn
    ])
  ]);
}
const Xn = /* @__PURE__ */ L(Vn, [["render", qn]]);
var H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, et = {}, Yn = {
  get exports() {
    return et;
  },
  set exports(t) {
    et = t;
  }
};
(function(t, n) {
  (function(e, o) {
    t.exports = o();
  })(H, function() {
    var e = typeof window < "u" ? window : typeof H < "u" ? H : this;
    function o(c, f) {
      return f = { exports: {} }, c(f, f.exports, e), f.exports;
    }
    var l = o(function(c, f, y) {
      (function(b, g) {
        typeof f == "object" ? c.exports = g() : (b.BMapLib = b.BMapLib || {}, b.BMapLib.TextIconOverlay = b.BMapLib.TextIconOverlay || g());
      })(e, function() {
        var b, g = b = g || { version: "1.3.8" }, C = {};
        g.guid = "$BAIDU$", C[g.guid] = C[g.guid] || {}, g.dom = g.dom || {}, g.dom.g = function(d) {
          return typeof d == "string" || d instanceof String ? document.getElementById(d) : d && d.nodeName && (d.nodeType == 1 || d.nodeType == 9) ? d : null;
        }, g.g = g.G = g.dom.g, g.dom.getDocument = function(d) {
          return d = g.dom.g(d), d.nodeType == 9 ? d : d.ownerDocument || d.document;
        }, g.lang = g.lang || {}, g.lang.isString = function(d) {
          return Object.prototype.toString.call(d) == "[object String]";
        }, g.isString = g.lang.isString, g.dom._g = function(d) {
          return g.lang.isString(d) ? document.getElementById(d) : d;
        }, g._g = g.dom._g, g.browser = g.browser || {}, /msie (\d+\.\d)/i.test(navigator.userAgent) && (g.browser.ie = g.ie = document.documentMode || +RegExp.$1), g.dom.getComputedStyle = function(d, _) {
          d = g.dom._g(d);
          var v = g.dom.getDocument(d), w;
          return v.defaultView && v.defaultView.getComputedStyle && (w = v.defaultView.getComputedStyle(d, null), w) ? w[_] || w.getPropertyValue(_) : "";
        }, g.dom._styleFixer = g.dom._styleFixer || {}, g.dom._styleFilter = g.dom._styleFilter || [], g.dom._styleFilter.filter = function(d, _, v) {
          for (var w = 0, I = g.dom._styleFilter, $; $ = I[w]; w++)
            ($ = $[v]) && (_ = $(d, _));
          return _;
        }, g.string = g.string || {}, g.string.toCamelCase = function(d) {
          return d.indexOf("-") < 0 && d.indexOf("_") < 0 ? d : d.replace(/[-_][^-_]/g, function(_) {
            return _.charAt(1).toUpperCase();
          });
        }, g.dom.getStyle = function(d, _) {
          var v = g.dom;
          d = v.g(d), _ = g.string.toCamelCase(_);
          var w = d.style[_] || (d.currentStyle ? d.currentStyle[_] : "") || v.getComputedStyle(d, _);
          if (!w) {
            var I = v._styleFixer[_];
            I && (w = I.get ? I.get(d) : g.dom.getStyle(d, I));
          }
          return (I = v._styleFilter) && (w = I.filter(_, w, "get")), w;
        }, g.getStyle = g.dom.getStyle, /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (g.browser.opera = +RegExp.$1), g.browser.isWebkit = /webkit/i.test(navigator.userAgent), g.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent), g.browser.isStrict = document.compatMode == "CSS1Compat", g.dom.getPosition = function(d) {
          d = g.dom.g(d);
          var _ = g.dom.getDocument(d), v = g.browser, w = g.dom.getStyle;
          v.isGecko > 0 && _.getBoxObjectFor && w(d, "position") == "absolute" && (d.style.top === "" || d.style.left);
          var I = { left: 0, top: 0 }, $ = v.ie && !v.isStrict ? _.body : _.documentElement, x, B;
          if (d == $)
            return I;
          if (d.getBoundingClientRect) {
            B = d.getBoundingClientRect(), I.left = Math.floor(B.left) + Math.max(_.documentElement.scrollLeft, _.body.scrollLeft), I.top = Math.floor(B.top) + Math.max(_.documentElement.scrollTop, _.body.scrollTop), I.left -= _.documentElement.clientLeft, I.top -= _.documentElement.clientTop;
            var P = _.body, J = parseInt(w(P, "borderLeftWidth")), st = parseInt(w(P, "borderTopWidth"));
            v.ie && !v.isStrict && (I.left -= isNaN(J) ? 2 : J, I.top -= isNaN(st) ? 2 : st);
          } else {
            x = d;
            do {
              if (I.left += x.offsetLeft, I.top += x.offsetTop, v.isWebkit > 0 && w(x, "position") == "fixed") {
                I.left += _.body.scrollLeft, I.top += _.body.scrollTop;
                break;
              }
              x = x.offsetParent;
            } while (x && x != d);
            for ((v.opera > 0 || v.isWebkit > 0 && w(d, "position") == "absolute") && (I.top -= _.body.offsetTop), x = d.offsetParent; x && x != _.body; )
              I.left -= x.scrollLeft, (!v.opera || x.tagName != "TR") && (I.top -= x.scrollTop), x = x.offsetParent;
          }
          return I;
        }, g.event = g.event || {}, g.event._listeners = g.event._listeners || [], g.event.on = function(d, _, v) {
          _ = _.replace(/^on/i, ""), d = g.dom._g(d);
          var w = function(P) {
            v.call(d, P);
          }, I = g.event._listeners, $ = g.event._eventFilter, x, B = _;
          return _ = _.toLowerCase(), $ && $[_] && (x = $[_](d, _, w), B = x.type, w = x.listener), d.addEventListener ? d.addEventListener(B, w, !1) : d.attachEvent && d.attachEvent("on" + B, w), I[I.length] = [d, _, v, w, B], d;
        }, g.on = g.event.on, function() {
          var d = C[g.guid];
          g.lang.guid = function() {
            return "TANGRAM__" + (d._counter++).toString(36);
          }, d._counter = d._counter || 1;
        }(), C[g.guid]._instances = C[g.guid]._instances || {}, g.lang.isFunction = function(d) {
          return Object.prototype.toString.call(d) == "[object Function]";
        }, g.lang.Class = function(d) {
          this.guid = d || g.lang.guid(), C[g.guid]._instances[this.guid] = this;
        }, C[g.guid]._instances = C[g.guid]._instances || {}, g.lang.Class.prototype.dispose = function() {
          delete C[g.guid]._instances[this.guid];
          for (var d in this)
            g.lang.isFunction(this[d]) || delete this[d];
          this.disposed = !0;
        }, g.lang.Class.prototype.toString = function() {
          return "[object " + (this._className || "Object") + "]";
        }, g.lang.Event = function(d, _) {
          this.type = d, this.returnValue = !0, this.target = _ || null, this.currentTarget = null;
        }, g.lang.Class.prototype.addEventListener = function(d, _, v) {
          if (g.lang.isFunction(_)) {
            !this.__listeners && (this.__listeners = {});
            var w = this.__listeners, I;
            if (typeof v == "string" && v) {
              if (/[^\w\-]/.test(v))
                throw "nonstandard key:" + v;
              _.hashCode = v, I = v;
            }
            d.indexOf("on") != 0 && (d = "on" + d), typeof w[d] != "object" && (w[d] = {}), I = I || g.lang.guid(), _.hashCode = I, w[d][I] = _;
          }
        }, g.lang.Class.prototype.removeEventListener = function(d, _) {
          if (!(typeof _ < "u" && (g.lang.isFunction(_) && !(_ = _.hashCode) || !g.lang.isString(_)))) {
            !this.__listeners && (this.__listeners = {}), d.indexOf("on") != 0 && (d = "on" + d);
            var v = this.__listeners;
            if (v[d])
              if (typeof _ < "u")
                v[d][_] && delete v[d][_];
              else
                for (var w in v[d])
                  delete v[d][w];
          }
        }, g.lang.Class.prototype.dispatchEvent = function(d, _) {
          g.lang.isString(d) && (d = new g.lang.Event(d)), !this.__listeners && (this.__listeners = {}), _ = _ || {};
          for (var v in _)
            d[v] = _[v];
          var v, w = this.__listeners, I = d.type;
          if (d.target = d.target || this, d.currentTarget = this, I.indexOf("on") != 0 && (I = "on" + I), g.lang.isFunction(this[I]) && this[I].apply(this, arguments), typeof w[I] == "object")
            for (v in w[I])
              w[I][v].apply(this, arguments);
          return d.returnValue;
        }, g.lang.inherits = function(d, _, v) {
          var w, I, $ = d.prototype, x = new Function();
          x.prototype = _.prototype, I = d.prototype = new x();
          for (w in $)
            I[w] = $[w];
          d.prototype.constructor = d, d.superClass = _.prototype, typeof v == "string" && (I._className = v);
        }, g.inherits = g.lang.inherits;
        var S = "http://api.map.baidu.com/library/TextIconOverlay/1.2/src/images/m", E = "png", k = function(d, _, v) {
          try {
            BMap;
          } catch {
            throw Error("Baidu Map JS API is not ready yet!");
          }
          b.lang.inherits(k, BMap.Overlay, "TextIconOverlay"), this._position = d, this._text = _, this._options = v || {}, this._styles = this._options.styles || [], !this._styles.length && this._setupDefaultStyles();
        };
        return k.prototype._setupDefaultStyles = function() {
          for (var d = [53, 56, 66, 78, 90], _ = 0, v; v = d[_]; _++)
            this._styles.push({
              url: S + _ + "." + E,
              size: new BMap.Size(v, v)
            });
        }, k.prototype.initialize = function(d) {
          return this._map = d, this._domElement = document.createElement("div"), this._updateCss(), this._updateText(), this._updatePosition(), this._bind(), this._map.getPanes().markerMouseTarget.appendChild(this._domElement), this._domElement;
        }, k.prototype.draw = function() {
          this._map && this._updatePosition();
        }, k.prototype.getText = function() {
          return this._text;
        }, k.prototype.setText = function(d) {
          d && (!this._text || this._text.toString() != d.toString()) && (this._text = d, this._updateText(), this._updateCss(), this._updatePosition());
        }, k.prototype.getPosition = function() {
          return this._position;
        }, k.prototype.setPosition = function(d) {
          d && (!this._position || !this._position.equals(d)) && (this._position = d, this._updatePosition());
        }, k.prototype.getStyleByText = function(d, _) {
          var v = parseInt(d), w = parseInt(v / 10);
          return w = Math.max(0, w), w = Math.min(w, _.length - 1), _[w];
        }, k.prototype._updateCss = function() {
          if (this._domElement) {
            var d = this.getStyleByText(this._text, this._styles);
            this._domElement.style.cssText = this._buildCssText(d);
          }
        }, k.prototype._updateText = function() {
          this._domElement && (this._domElement.innerHTML = this._text);
        }, k.prototype._updatePosition = function() {
          if (this._domElement && this._position) {
            var d = this._domElement.style, _ = this._map.pointToOverlayPixel(this._position);
            _.x -= Math.ceil(parseInt(d.width) / 2), _.y -= Math.ceil(parseInt(d.height) / 2), d.left = _.x + "px", d.top = _.y + "px";
          }
        }, k.prototype._buildCssText = function(d) {
          var _ = d.url, v = d.size, w = d.anchor, I = d.offset, $ = d.textColor || "black", x = d.textSize || 10, B = [];
          if (b.browser.ie < 7)
            B.push('filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="' + _ + '");');
          else {
            B.push("background-image:url(" + _ + ");");
            var P = "0 0";
            I instanceof BMap.Size && (P = I.width + "px " + I.height + "px"), B.push("background-position:" + P + ";");
          }
          return v instanceof BMap.Size && (w instanceof BMap.Size ? (w.height > 0 && w.height < v.height && B.push("height:" + (v.height - w.height) + "px; padding-top:" + w.height + "px;"), w.width > 0 && w.width < v.width && B.push("width:" + (v.width - w.width) + "px; padding-left:" + w.width + "px;")) : (B.push("height:" + v.height + "px; line-height:" + v.height + "px;"), B.push("width:" + v.width + "px; text-align:center;"))), B.push("cursor:pointer; color:" + $ + "; position:absolute; font-size:" + x + "px; font-family:Arial,sans-serif; font-weight:bold"), B.join("");
        }, k.prototype._bind = function() {
          if (!this._domElement)
            return;
          var d = this, _ = this._map, v = b.lang.Event;
          function w(I, $) {
            var x = I.srcElement || I.target, B = I.clientX || I.pageX, P = I.clientY || I.pageY;
            if (I && $ && B && P && x) {
              var J = b.dom.getPosition(_.getContainer());
              $.pixel = new BMap.Pixel(B - J.left, P - J.top), $.point = _.pixelToPoint($.pixel);
            }
            return $;
          }
          b.event.on(this._domElement, "mouseover", function(I) {
            d.dispatchEvent(w(I, new v("onmouseover")));
          }), b.event.on(this._domElement, "mouseout", function(I) {
            d.dispatchEvent(w(I, new v("onmouseout")));
          }), b.event.on(this._domElement, "click", function(I) {
            d.dispatchEvent(w(I, new v("onclick")));
          });
        }, k;
      });
    }), p = l && typeof l == "object" && "default" in l ? l.default : l, i = function(c, f, y) {
      f = r(f);
      var b = c.pointToPixel(f.getNorthEast()), g = c.pointToPixel(f.getSouthWest());
      b.x += y, b.y -= y, g.x -= y, g.y += y;
      var C = c.pixelToPoint(b), S = c.pixelToPoint(g);
      return new BMap.Bounds(S, C);
    }, r = function(c) {
      var f = s(c.getNorthEast().lng, -180, 180), y = s(c.getSouthWest().lng, -180, 180), b = s(c.getNorthEast().lat, -74, 74), g = s(c.getSouthWest().lat, -74, 74);
      return new BMap.Bounds(new BMap.Point(y, g), new BMap.Point(f, b));
    }, s = function(c, f, y) {
      return f && (c = Math.max(c, f)), y && (c = Math.min(c, y)), c;
    }, a = function(c) {
      return Object.prototype.toString.call(c) === "[object Array]";
    }, h = function(c, f) {
      var y = -1;
      if (a(f)) {
        if (f.indexOf)
          y = f.indexOf(c);
        else
          for (var b = 0, g; g = f[b]; b++)
            if (g === c) {
              y = b;
              break;
            }
      }
      return y;
    }, u = function(c, f) {
      try {
        BMap;
      } catch {
        throw Error("Baidu Map JS API is not ready yet!");
      }
      if (c) {
        this._map = c, this._markers = [], this._clusters = [];
        var y = f || {};
        this._gridSize = y.gridSize || 60, this._maxZoom = y.maxZoom || 18, this._minClusterSize = y.minClusterSize || 2, this._isAverageCenter = !1, y.isAverageCenter != null && (this._isAverageCenter = y.isAverageCenter), this._styles = y.styles || [];
        var b = this;
        this._map.addEventListener("zoomend", function() {
          b._redraw();
        }), this._map.addEventListener("moveend", function() {
          b._redraw();
        });
        var g = y.markers;
        a(g) && this.addMarkers(g);
      }
    };
    u.prototype.addMarkers = function(c) {
      if (c.length) {
        for (var f = 0, y = c.length; f < y; f++)
          this._pushMarkerTo(c[f]);
        this._createClusters();
      }
    }, u.prototype._pushMarkerTo = function(c) {
      var f = h(c, this._markers);
      f === -1 && (c.isInCluster = !1, this._markers.push(c));
    }, u.prototype.addMarker = function(c) {
      this._pushMarkerTo(c), this._createClusters();
    }, u.prototype._createClusters = function() {
      var c = this._map.getBounds();
      if (c.getCenter())
        for (var f = i(this._map, c, this._gridSize), y = 0, b; b = this._markers[y]; y++)
          !b.isInCluster && f.containsPoint(b.getPosition()) && this._addToClosestCluster(b);
    }, u.prototype._addToClosestCluster = function(c) {
      var f = 4e6, y = null;
      c.getPosition();
      for (var b = 0, g; g = this._clusters[b]; b++) {
        var C = g.getCenter();
        if (C) {
          var S = this._map.getDistance(C, c.getPosition());
          S < f && (f = S, y = g);
        }
      }
      if (y && y.isMarkerInClusterBounds(c))
        y.addMarker(c);
      else {
        var g = new m(this);
        g.addMarker(c), this._clusters.push(g);
      }
    }, u.prototype._clearLastClusters = function() {
      for (var c = 0, f; f = this._clusters[c]; c++)
        f.remove();
      this._clusters = [], this._removeMarkersFromCluster();
    }, u.prototype._removeMarkersFromCluster = function() {
      for (var c = 0, f; f = this._markers[c]; c++)
        f.isInCluster = !1;
    }, u.prototype._removeMarkersFromMap = function() {
      for (var c = 0, f; f = this._markers[c]; c++) {
        f.isInCluster = !1;
        var y = f.getLabel();
        this._map.removeOverlay(f), f.setLabel(y);
      }
    }, u.prototype._removeMarker = function(c) {
      var f = h(c, this._markers);
      return f === -1 ? !1 : (this._map.removeOverlay(c), this._markers.splice(f, 1), !0);
    }, u.prototype.removeMarker = function(c) {
      var f = this._removeMarker(c);
      return f && (this._clearLastClusters(), this._createClusters()), f;
    }, u.prototype.removeMarkers = function(c) {
      for (var f = !1, y = 0; y < c.length; y++) {
        var b = this._removeMarker(c[y]);
        f = f || b;
      }
      return f && (this._clearLastClusters(), this._createClusters()), f;
    }, u.prototype.clearMarkers = function() {
      this._clearLastClusters(), this._removeMarkersFromMap(), this._markers = [];
    }, u.prototype._redraw = function() {
      this._clearLastClusters(), this._createClusters();
    }, u.prototype.getGridSize = function() {
      return this._gridSize;
    }, u.prototype.setGridSize = function(c) {
      this._gridSize = c, this._redraw();
    }, u.prototype.getMaxZoom = function() {
      return this._maxZoom;
    }, u.prototype.setMaxZoom = function(c) {
      this._maxZoom = c, this._redraw();
    }, u.prototype.getStyles = function() {
      return this._styles;
    }, u.prototype.setStyles = function(c) {
      this._styles = c, this._redraw();
    }, u.prototype.getMinClusterSize = function() {
      return this._minClusterSize;
    }, u.prototype.setMinClusterSize = function(c) {
      this._minClusterSize = c, this._redraw();
    }, u.prototype.isAverageCenter = function() {
      return this._isAverageCenter;
    }, u.prototype.getMap = function() {
      return this._map;
    }, u.prototype.getMarkers = function() {
      return this._markers;
    }, u.prototype.getClustersCount = function() {
      for (var c = 0, f = 0, y; y = this._clusters[f]; f++)
        y.isReal() && c++;
      return c;
    };
    function m(c) {
      this._markerClusterer = c, this._map = c.getMap(), this._minClusterSize = c.getMinClusterSize(), this._isAverageCenter = c.isAverageCenter(), this._center = null, this._markers = [], this._gridBounds = null, this._isReal = !1, this._clusterMarker = new p(this._center, this._markers.length, { styles: this._markerClusterer.getStyles() });
    }
    return m.prototype.addMarker = function(c) {
      if (this.isMarkerInCluster(c))
        return !1;
      if (!this._center)
        this._center = c.getPosition(), this.updateGridBounds();
      else if (this._isAverageCenter) {
        var f = this._markers.length + 1, y = (this._center.lat * (f - 1) + c.getPosition().lat) / f, b = (this._center.lng * (f - 1) + c.getPosition().lng) / f;
        this._center = new BMap.Point(b, y), this.updateGridBounds();
      }
      c.isInCluster = !0, this._markers.push(c);
      var g = this._markers.length;
      if (g < this._minClusterSize)
        return this._map.addOverlay(c), !0;
      if (g === this._minClusterSize)
        for (var C = 0; C < g; C++) {
          var S = this._markers[C].getLabel();
          this._markers[C].getMap() && this._map.removeOverlay(this._markers[C]), this._markers[C].setLabel(S);
        }
      return this._map.addOverlay(this._clusterMarker), this._isReal = !0, this.updateClusterMarker(), !0;
    }, m.prototype.isMarkerInCluster = function(c) {
      if (this._markers.indexOf)
        return this._markers.indexOf(c) != -1;
      for (var f = 0, y; y = this._markers[f]; f++)
        if (y === c)
          return !0;
      return !1;
    }, m.prototype.isMarkerInClusterBounds = function(c) {
      return this._gridBounds.containsPoint(c.getPosition());
    }, m.prototype.isReal = function(c) {
      return this._isReal;
    }, m.prototype.updateGridBounds = function() {
      var c = new BMap.Bounds(this._center, this._center);
      this._gridBounds = i(this._map, c, this._markerClusterer.getGridSize());
    }, m.prototype.updateClusterMarker = function() {
      if (this._map.getZoom() > this._markerClusterer.getMaxZoom()) {
        this._clusterMarker && this._map.removeOverlay(this._clusterMarker);
        for (var c = 0, f; f = this._markers[c]; c++)
          this._map.addOverlay(f);
        return;
      }
      if (this._markers.length < this._minClusterSize) {
        this._clusterMarker.hide();
        return;
      }
      this._clusterMarker.setPosition(this._center), this._clusterMarker.setText(this._markers.length), this._clusterMarker.addEventListener && !this._clusterMarker._hasClickEvent && this._clusterMarker.addEventListener("click", function(y) {
        this._clusterMarker._hasClickEvent = !0, this._markers && this._map.setViewport(this.getBounds());
      }.bind(this));
    }, m.prototype.remove = function() {
      for (var c = 0, f; f = this._markers[c]; c++) {
        var y = this._markers[c].getLabel();
        this._markers[c].getMap() && this._map.removeOverlay(this._markers[c]), this._markers[c].setLabel(y);
      }
      this._map.removeOverlay(this._clusterMarker), this._markers.length = 0, delete this._markers;
    }, m.prototype.getBounds = function() {
      for (var c = new BMap.Bounds(this._center, this._center), f = 0, y; y = this._markers[f]; f++)
        c.extend(y.getPosition());
      return c;
    }, m.prototype.getCenter = function() {
      return this._center;
    }, u;
  });
})(Yn);
const Kn = et, Qn = {
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
        const { BMap: n, originInstance: e } = this;
        e.setGridSize(n, t.map);
      },
      deep: !0
    },
    maxZoom(t) {
      const { originInstance: n } = this;
      n.setMaxZoom(t);
    },
    minClusterSize: {
      handler(t) {
        const { BMap: n, originInstance: e } = this;
        e.setMinClusterSize(T(n, t));
      },
      deep: !0
    },
    styles: {
      handler(t) {
        const { BMap: n, originInstance: e } = this, o = JSON.parse(JSON.stringify(t)).map((l) => (l.size = l.size && T(n, l.size), l));
        e.setStyles(o);
      },
      deep: !0
    },
    averageCenter(t) {
      this.reload();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: n, gridSize: e, minClusterSize: o, maxZoom: l, styles: p, averageCenter: i } = this;
      this.originInstance = new Kn(n, {
        gridSize: e && T(t, e),
        maxZoom: l,
        minClusterSize: o && T(t, o),
        styles: p.map((r) => (r.size = T(t, r.size), r)),
        isAverageCenter: i
      }), this.$nextTick(() => {
        const r = this.$children.map((s) => s.originInstance).filter((s) => s instanceof t.Marker);
        this.originInstance.addMarkers(r);
      });
    }
  },
  beforeCreate() {
    this.preventChildrenRender = !0;
  }
};
function ti(t, n, e, o, l, p) {
  return A(), z("span", null, [
    N(t.$slots, "default")
  ]);
}
const pi = /* @__PURE__ */ L(Qn, [["render", ti]]);
var nt = {}, ei = {
  get exports() {
    return nt;
  },
  set exports(t) {
    nt = t;
  }
};
(function(t, n) {
  (function(e, o) {
    t.exports = o();
  })(H, function() {
    var e = {};
    e.dom = {}, e.dom.g = function(i) {
      return typeof i == "string" || i instanceof String ? document.getElementById(i) : i && i.nodeName && (i.nodeType == 1 || i.nodeType == 9) ? i : null;
    }, e.g = e.G = e.dom.g, e.lang = e.lang || {}, e.lang.isString = function(i) {
      return Object.prototype.toString.call(i) == "[object String]";
    }, e.isString = e.lang.isString, e.dom._g = function(i) {
      return e.lang.isString(i) ? document.getElementById(i) : i;
    }, e._g = e.dom._g, e.dom.getDocument = function(i) {
      return i = e.dom.g(i), i.nodeType == 9 ? i : i.ownerDocument || i.document;
    }, e.browser = e.browser || {}, e.browser.ie = e.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0, e.dom.getComputedStyle = function(i, r) {
      i = e.dom._g(i);
      var s = e.dom.getDocument(i), a;
      return s.defaultView && s.defaultView.getComputedStyle && (a = s.defaultView.getComputedStyle(i, null), a) ? a[r] || a.getPropertyValue(r) : "";
    }, e.dom._styleFixer = e.dom._styleFixer || {}, e.dom._styleFilter = e.dom._styleFilter || [], e.dom._styleFilter.filter = function(i, r, s) {
      for (var a = 0, h = e.dom._styleFilter, u; u = h[a]; a++)
        (u = u[s]) && (r = u(i, r));
      return r;
    }, e.string = e.string || {}, e.string.toCamelCase = function(i) {
      return i.indexOf("-") < 0 && i.indexOf("_") < 0 ? i : i.replace(/[-_][^-_]/g, function(r) {
        return r.charAt(1).toUpperCase();
      });
    }, e.dom.getStyle = function(i, r) {
      var s = e.dom;
      i = s.g(i), r = e.string.toCamelCase(r);
      var a = i.style[r] || (i.currentStyle ? i.currentStyle[r] : "") || s.getComputedStyle(i, r);
      if (!a) {
        var h = s._styleFixer[r];
        h && (a = h.get ? h.get(i) : e.dom.getStyle(i, h));
      }
      return (h = s._styleFilter) && (a = h.filter(r, a, "get")), a;
    }, e.getStyle = e.dom.getStyle, e.dom._NAME_ATTRS = function() {
      var i = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
      };
      return e.browser.ie < 8 ? (i.for = "htmlFor", i.class = "className") : (i.htmlFor = "for", i.className = "class"), i;
    }(), e.dom.setAttr = function(i, r, s) {
      return i = e.dom.g(i), r == "style" ? i.style.cssText = s : (r = e.dom._NAME_ATTRS[r] || r, i.setAttribute(r, s)), i;
    }, e.setAttr = e.dom.setAttr, e.dom.setAttrs = function(i, r) {
      i = e.dom.g(i);
      for (var s in r)
        e.dom.setAttr(i, s, r[s]);
      return i;
    }, e.setAttrs = e.dom.setAttrs, e.dom.create = function(i, r) {
      var s = document.createElement(i), a = r || {};
      return e.dom.setAttrs(s, a);
    }, e.object = e.object || {}, e.extend = e.object.extend = function(i, r) {
      for (var s in r)
        r.hasOwnProperty(s) && (i[s] = r[s]);
      return i;
    };
    var o = function(i, r, s) {
      try {
        BMap;
      } catch {
        throw Error("Baidu Map JS API is not ready yet!");
      }
      !r || r.length < 1 || (this._map = i, this._path = r, this.i = -1, this._setTimeoutQuene = [], this._projection = this._map.getMapType().getProjection(), this._opts = {
        icon: null,
        speed: 4e3,
        defaultContent: "",
        showInfoWindow: !1
      }, this._setOptions(s), this._rotation = 0, !this._opts.icon instanceof BMap.Icon && (this._opts.icon = defaultIcon));
    };
    o.prototype._setOptions = function(i) {
      if (i)
        for (var r in i)
          i.hasOwnProperty(r) && (this._opts[r] = i[r]);
    }, o.prototype.start = function() {
      var i = this, r = i._path.length;
      if (this._opts.onstart && this._opts.onstart(i), i.i != -1 && i.i < r - 1)
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
      for (var i = 0, r = this._opts.landmarkPois, s = r.length; i < s; i++)
        r[i].bShow = !1;
      this._opts.onstop && this._opts.onstop(this);
    }, o.prototype.pause = function() {
      clearInterval(this._intervalFlag), this._fromPause = !0, this._clearTimeout(), this._opts.onpause && this._opts.onpause(this);
    }, o.prototype.hideInfoWindow = function() {
      this._opts.showInfoWindow = !1, this._overlay && (this._overlay._div.style.visibility = "hidden");
    }, o.prototype.showInfoWindow = function() {
      this._opts.showInfoWindow = !0, this._overlay && (this._overlay._div.style.visibility = "visible");
    }, o.prototype.dispose = function() {
      clearInterval(this._intervalFlag), this._setTimeoutQuene && this._clearTimeout(), this._map && (this._map.removeOverlay(this._overlay), this._map.removeOverlay(this._marker));
    }, e.object.extend(o.prototype, {
      _addMarker: function(i) {
        this._marker && (this.stop(), this._map.removeOverlay(this._marker), clearTimeout(this._timeoutFlag)), this._overlay && this._map.removeOverlay(this._overlay);
        var r = new BMap.Marker(this._path[0]);
        this._opts.icon && r.setIcon(this._opts.icon), this._map.addOverlay(r), r.setAnimation(BMAP_ANIMATION_DROP), this._marker = r;
      },
      _addInfoWin: function() {
        var i = this;
        !l.prototype.initialize && p();
        var r = new l(i._marker.getPosition(), i._opts.defaultContent);
        r.setRelatedClass(this), this._overlay = r, this._map.addOverlay(r), this._opts.showInfoWindow ? this.showInfoWindow() : this.hideInfoWindow();
      },
      _getMercator: function(i) {
        return this._map.getMapType().getProjection().lngLatToPoint(i);
      },
      _getDistance: function(i, r) {
        return Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2));
      },
      _move: function(i, r, s, a) {
        var h = this, u = 0, m = 10, c = this._opts.speed / (1e3 / m), f = this._projection.lngLatToPoint(i), y = this._projection.lngLatToPoint(r), b = Math.round(h._getDistance(f, y) / c);
        if (b < 1) {
          h._opts.onTick && h._opts.onTick(a), h._moveNext(++h.i);
          return;
        }
        h._intervalFlag = setInterval(function() {
          if (u >= b) {
            if (h._opts.onTick && h._opts.onTick(a), clearInterval(h._intervalFlag), h.i > h._path.length) {
              h._opts.onTick && h._opts.onTick(a);
              return;
            }
            h._moveNext(++h.i);
          } else {
            u++;
            var g = s(f.x, y.x, u, b), C = s(f.y, y.y, u, b), S = h._projection.pointToLngLat(new BMap.Pixel(g, C));
            if (u == 1) {
              var E = null;
              h.i - 1 >= 0 && (E = h._path[h.i - 1]), h._opts.enableRotation == !0 && h.setRotation(E, i, r), h._opts.autoView && (h._map.getBounds().containsPoint(S) || h._map.setCenter(S));
            }
            h._marker.setPosition(S), h._setInfoWin(S);
          }
        }, m);
      },
      setRotation: function(i, r, s) {
        var a = this, h = 0;
        if (r = a._map.pointToPixel(r), s = a._map.pointToPixel(s), s.x != r.x) {
          var u = (s.y - r.y) / (s.x - r.x), m = Math.atan(u);
          h = m * 360 / (2 * Math.PI), s.x < r.x ? h = -h + 90 + 90 : h = -h, a._marker.setRotation(-h);
        } else {
          var c = s.y - r.y, f = 0;
          c > 0 ? f = -1 : f = 1, a._marker.setRotation(-f * 90);
        }
      },
      linePixellength: function(i, r) {
        return Math.sqrt(Math.abs(i.x - r.x) * Math.abs(i.x - r.x) + Math.abs(i.y - r.y) * Math.abs(i.y - r.y));
      },
      pointToPoint: function(i, r) {
        return Math.abs(i.x - r.x) * Math.abs(i.x - r.x) + Math.abs(i.y - r.y) * Math.abs(i.y - r.y);
      },
      _moveNext: function(i) {
        var r = this;
        i < this._path.length - 1 ? r._move(r._path[i], r._path[i + 1], r._tween.linear, i) : (r._opts.onTick && r._opts.onTick(i), r.stop());
      },
      _setInfoWin: function(i) {
        var r = this;
        r._overlay.setPosition(i, r._marker.getIcon().size);
        var s = r._troughPointIndex(i);
        s != -1 ? (clearInterval(r._intervalFlag), r._overlay.setHtml(r._opts.landmarkPois[s].html), r._overlay.setPosition(i, r._marker.getIcon().size), r._pauseForView(s)) : r._overlay.setHtml(r._opts.defaultContent);
      },
      _pauseForView: function(i) {
        var r = this, s = setTimeout(function() {
          r._moveNext(++r.i);
        }, r._opts.landmarkPois[i].pauseTime * 1e3);
        r._setTimeoutQuene.push(s);
      },
      _clearTimeout: function() {
        for (var i in this._setTimeoutQuene)
          clearTimeout(this._setTimeoutQuene[i]);
        this._setTimeoutQuene.length = 0;
      },
      _tween: {
        linear: function(i, r, s, a) {
          var h = i, u = r - i, m = s, c = a;
          return u * m / c + h;
        }
      },
      _troughPointIndex: function(i) {
        for (var r = this._opts.landmarkPois, s, a = 0, h = r.length; a < h; a++)
          if (!r[a].bShow && (s = this._map.getDistance(new BMap.Point(r[a].lng, r[a].lat), i), s < 10))
            return r[a].bShow = !0, a;
        return -1;
      }
    });
    function l(i, r) {
      this._point = i, this._html = r;
    }
    function p() {
      l.prototype = new BMap.Overlay(), l.prototype.initialize = function(i) {
        var r = this._div = e.dom.create("div", { style: "border:solid 1px #ccc;width:auto;min-width:50px;text-align:center;position:absolute;background:#fff;color:#000;font-size:12px;border-radius: 10px;padding:5px;white-space: nowrap;" });
        return r.innerHTML = this._html, i.getPanes().floatPane.appendChild(r), this._map = i, r;
      }, l.prototype.draw = function() {
        this.setPosition(this.lushuMain._marker.getPosition(), this.lushuMain._marker.getIcon().size);
      }, e.object.extend(l.prototype, {
        setPosition: function(i, r) {
          var s = this._map.pointToOverlayPixel(i), a = e.dom.getStyle(this._div, "width"), h = e.dom.getStyle(this._div, "height"), u = parseInt(this._div.clientWidth || a, 10);
          parseInt(this._div.clientHeight || h, 10), this._div.style.left = s.x - u / 2 + "px", this._div.style.bottom = -(s.y - r.height) + "px";
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
})(ei);
const ni = nt, { methods: ii, ...oi } = M("lushu"), di = {
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
        const { originInstance: n, content: e } = this, o = X(BMap, t);
        n._opts.icon = o;
      },
      deep: !0
    },
    speed(t) {
      const { originInstance: n, content: e } = this;
      n._opts.speed = t;
    },
    content(t) {
      const { originInstance: n, infoWindow: e } = this;
      t && e ? n.showInfoWindow() : n.hideInfoWindow(), n._opts.defaultContent = t, n._overlay && n._overlay.setHtml(t);
    },
    autoView(t) {
      const { originInstance: n, content: e } = this;
      n._opts.autoView = t;
    },
    rotation(t) {
      const { originInstance: n, content: e } = this;
      n._opts.enableRotation = t;
    },
    infoWindow(t) {
      const { originInstance: n, content: e } = this;
      n && t && e ? n.showInfoWindow() : n.hideInfoWindow();
    },
    play(t) {
      const { originInstance: n } = this;
      t && n ? n.start() : !this._isEnd && n.pause();
    }
  },
  methods: {
    load() {
      const { BMap: t, map: n, path: e, landmarkPois: o, icon: l, speed: p, content: i, autoView: r, rotation: s, infoWindow: a, play: h } = this, u = this.originInstance = new ni(n, e, {
        enableRotation: s,
        landmarkPois: o,
        showInfoWindow: a,
        defaultContent: i,
        icon: l && X(t, l),
        speed: p,
        autoView: r,
        onstart: (m) => {
          this._isEnd = !1, this.$emit("start");
        },
        onstop: (m) => {
          this._isEnd = !0, this.$emit("stop");
        },
        onTick: (m) => {
          this.$emit("tick", m);
        },
        onpause: (m) => this.$emit("pause")
      });
      h && e.length && u.start(this), e.length && (i && a ? u.showInfoWindow() : u.hideInfoWindow());
    },
    ...ii
  },
  ...oi
};
var it = {}, si = {
  get exports() {
    return it;
  },
  set exports(t) {
    it = t;
  }
};
(function(t, n) {
  (function(e, o) {
    t.exports = o();
  })(H, function() {
    function e(p, i, r) {
      var s, a, h = p.prototype, u = new Function();
      u.prototype = i.prototype, a = p.prototype = new u();
      for (s in h)
        a[s] = h[s];
      p.prototype.constructor = p, p.superClass = i.prototype, typeof r == "string" && (a._className = r);
    }
    var o = function() {
      var p = function(a) {
        var h = {
          // data is a two dimensional array
          // a datapoint gets saved as data[point-x-value][point-y-value]
          // the value at [point-x-value][point-y-value] is the occurrence of the datapoint
          data: [],
          // tight coupling of the heatmap object
          heatmap: a
        };
        this.max = 1, this.get = function(u) {
          return h[u];
        }, this.set = function(u, m) {
          h[u] = m;
        };
      };
      p.prototype = {
        // function for adding datapoints to the store
        // datapoints are usually defined by x and y but could also contain a third parameter which represents the occurrence
        addDataPoint: function(s, a) {
          if (!(s < 0 || a < 0)) {
            var h = this, u = h.get("heatmap"), m = h.get("data");
            if (m[s] || (m[s] = []), m[s][a] || (m[s][a] = 0), m[s][a] += arguments.length < 3 ? 1 : arguments[2], h.set("data", m), h.max < m[s][a]) {
              u.get("actx").clearRect(0, 0, u.get("width"), u.get("height")), h.setDataSet({ max: m[s][a], data: m }, !0);
              return;
            }
            u.drawAlpha(s, a, m[s][a], !0);
          }
        },
        setDataSet: function(s, a) {
          var h = this, u = h.get("heatmap"), m = [], c = s.data, f = c.length;
          if (u.clear(), this.max = s.max, u.get("legend") && u.get("legend").update(s.max), a != null && a) {
            for (var y in c)
              if (y !== void 0)
                for (var b in c[y])
                  b !== void 0 && u.drawAlpha(y, b, c[y][b], !1);
          } else
            for (; f--; ) {
              var g = c[f];
              u.drawAlpha(g.x, g.y, g.count, !1), m[g.x] || (m[g.x] = []), m[g.x][g.y] || (m[g.x][g.y] = 0), m[g.x][g.y] = g.count;
            }
          u.colorize(), this.set("data", c);
        },
        exportDataSet: function() {
          var s = this, a = s.get("data"), h = [];
          for (var u in a)
            if (u !== void 0)
              for (var m in a[u])
                m !== void 0 && h.push({ x: parseInt(u, 10), y: parseInt(m, 10), count: a[u][m] });
          return { max: s.max, data: h };
        },
        generateRandomDataSet: function(s) {
          var a = this.get("heatmap"), h = a.get("width"), u = a.get("height"), m = {}, c = Math.floor(Math.random() * 1e3 + 1);
          m.max = c;
          for (var f = []; s--; )
            f.push({ x: Math.floor(Math.random() * h + 1), y: Math.floor(Math.random() * u + 1), count: Math.floor(Math.random() * c + 1) });
          m.data = f, this.setDataSet(m);
        }
      };
      var i = function(a) {
        this.config = a;
        var h = {
          element: null,
          labelsEl: null,
          gradientCfg: null,
          ctx: null
        };
        this.get = function(u) {
          return h[u];
        }, this.set = function(u, m) {
          h[u] = m;
        }, this.init();
      };
      i.prototype = {
        init: function() {
          var s = this, a = s.config, h = a.title || "Legend", u = a.position, m = a.offset || 10;
          a.gradient;
          var c = document.createElement("ul"), f, y, b = "";
          s.processGradientObject(), u.indexOf("t") > -1 ? b += "top:" + m + "px;" : b += "bottom:" + m + "px;", u.indexOf("l") > -1 ? b += "left:" + m + "px;" : b += "right:" + m + "px;", f = document.createElement("div"), f.style.cssText = "border-radius:5px;position:absolute;" + b + "font-family:Helvetica; width:256px;z-index:10000000000; background:rgba(255,255,255,1);padding:10px;border:1px solid black;margin:0;", f.innerHTML = "<h3 style='padding:0;margin:0;text-align:center;font-size:16px;'>" + h + "</h3>", c.style.cssText = "position:relative;font-size:12px;display:block;list-style:none;list-style-type:none;margin:0;height:15px;", y = document.createElement("div"), y.style.cssText = ["position:relative;display:block;width:256px;height:15px;border-bottom:1px solid black; background-image:url(", s.createGradientImage(), ");"].join(""), f.appendChild(c), f.appendChild(y), s.set("element", f), s.set("labelsEl", c), s.update(1);
        },
        processGradientObject: function() {
          var s = this, a = this.config.gradient, h = [];
          for (var u in a)
            a.hasOwnProperty(u) && h.push({ stop: u, value: a[u] });
          h.sort(function(m, c) {
            return m.stop - c.stop;
          }), h.unshift({ stop: 0, value: "rgba(0,0,0,0)" }), s.set("gradientArr", h);
        },
        createGradientImage: function() {
          var s = this, a = s.get("gradientArr"), h = a.length, u = document.createElement("canvas"), m = u.getContext("2d"), c;
          u.width = "256", u.height = "15", c = m.createLinearGradient(0, 5, 256, 10);
          for (var f = 0; f < h; f++)
            c.addColorStop(1 / (h - 1) * f, a[f].value);
          m.fillStyle = c, m.fillRect(0, 5, 256, 10), m.strokeStyle = "black", m.beginPath();
          for (var f = 0; f < h; f++)
            m.moveTo((1 / (h - 1) * f * 256 >> 0) + 0.5, 0), m.lineTo((1 / (h - 1) * f * 256 >> 0) + 0.5, f == 0 ? 15 : 5);
          return m.moveTo(255.5, 0), m.lineTo(255.5, 15), m.moveTo(255.5, 4.5), m.lineTo(0, 4.5), m.stroke(), s.set("ctx", m), u.toDataURL();
        },
        getElement: function() {
          return this.get("element");
        },
        update: function(s) {
          for (var a = this, h = a.get("gradientArr"), u = a.get("ctx"), m = a.get("labelsEl"), c, f = "", y, b = 0; b < h.length; b++)
            c = s * h[b].stop >> 0, y = u.measureText(c).width / 2 >> 0, b == 0 && (y = 0), b == h.length - 1 && (y *= 2), f += '<li style="position:absolute;left:' + (((1 / (h.length - 1) * b * 256 || 0) >> 0) - y + 0.5) + 'px">' + c + "</li>";
          m.innerHTML = f;
        }
      };
      var r = function(a) {
        var h = {
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
        this.store = new p(this), this.get = function(u) {
          return h[u];
        }, this.set = function(u, m) {
          h[u] = m;
        }, this.configure(a), this.init();
      };
      return r.prototype = {
        configure: function(s) {
          var a = this;
          if (a.set("radius", s.radius || 40), a.set("element", s.element instanceof Object ? s.element : document.getElementById(s.element)), a.set("visible", s.visible != null ? s.visible : !0), a.set("max", s.max || !1), a.set("gradient", s.gradient || { 0.45: "rgb(0,0,255)", 0.55: "rgb(0,255,255)", 0.65: "rgb(0,255,0)", 0.95: "yellow", 1: "rgb(255,0,0)" }), a.set("opacity", parseInt(255 / (100 / s.opacity), 10) || 180), a.set("width", s.width || 0), a.set("height", s.height || 0), a.set("debug", s.debug), s.legend) {
            var h = s.legend;
            h.gradient = a.get("gradient"), a.set("legend", new i(h));
          }
        },
        resize: function() {
          var s = this, a = s.get("element"), h = s.get("canvas"), u = s.get("acanvas");
          h.width = u.width = s.get("width") || a.style.width.replace(/px/, "") || s.getWidth(a), this.set("width", h.width), h.height = u.height = s.get("height") || a.style.height.replace(/px/, "") || s.getHeight(a), this.set("height", h.height);
        },
        init: function() {
          var s = this, a = document.createElement("canvas"), h = document.createElement("canvas"), u = a.getContext("2d"), m = h.getContext("2d"), c = s.get("element");
          s.initColorPalette(), s.set("canvas", a), s.set("ctx", u), s.set("acanvas", h), s.set("actx", m), s.resize(), a.style.cssText = h.style.cssText = "position:absolute;top:0;left:0;z-index:10000000;", s.get("visible") || (a.style.display = "none"), c.appendChild(a), s.get("legend") && c.appendChild(s.get("legend").getElement()), s.get("debug") && document.body.appendChild(h), m.shadowOffsetX = 15e3, m.shadowOffsetY = 15e3, m.shadowBlur = 15;
        },
        initColorPalette: function() {
          var s = this, a = document.createElement("canvas"), h = s.get("gradient"), u, m, c;
          a.width = "1", a.height = "256", u = a.getContext("2d"), m = u.createLinearGradient(0, 0, 1, 256), c = u.getImageData(0, 0, 1, 1), c.data[0] = c.data[3] = 64, c.data[1] = c.data[2] = 0, u.putImageData(c, 0, 0), c = u.getImageData(0, 0, 1, 1), s.set("premultiplyAlpha", c.data[0] < 60 || c.data[0] > 70);
          for (var f in h)
            m.addColorStop(f, h[f]);
          u.fillStyle = m, u.fillRect(0, 0, 1, 256), s.set("gradient", u.getImageData(0, 0, 1, 256).data);
        },
        getWidth: function(s) {
          var a = s.offsetWidth;
          return s.style.paddingLeft && (a += s.style.paddingLeft), s.style.paddingRight && (a += s.style.paddingRight), a;
        },
        getHeight: function(s) {
          var a = s.offsetHeight;
          return s.style.paddingTop && (a += s.style.paddingTop), s.style.paddingBottom && (a += s.style.paddingBottom), a;
        },
        colorize: function(s, a) {
          var h = this, u = h.get("width"), m = h.get("radius"), c = h.get("height"), f = h.get("actx"), y = h.get("ctx"), b = m * 3, g = h.get("premultiplyAlpha"), C = h.get("gradient"), S = h.get("opacity"), E = h.get("bounds"), k, d, _, v, w, I, $, x, B;
          s != null && a != null ? (s + b > u && (s = u - b), s < 0 && (s = 0), a < 0 && (a = 0), a + b > c && (a = c - b), k = s, d = a, v = s + b, _ = a + b) : (E.l < 0 ? k = 0 : k = E.l, E.r > u ? v = u : v = E.r, E.t < 0 ? d = 0 : d = E.t, E.b > c ? _ = c : _ = E.b), w = f.getImageData(k, d, v - k, _ - d), I = w.data.length;
          for (var P = 3; P < I; P += 4)
            $ = w.data[P], x = $ * 4, x && (B = $ < S ? $ : S, w.data[P - 3] = C[x], w.data[P - 2] = C[x + 1], w.data[P - 1] = C[x + 2], g && (w.data[P - 3] /= 255 / B, w.data[P - 2] /= 255 / B, w.data[P - 1] /= 255 / B), w.data[P] = B);
          y.putImageData(w, k, d);
        },
        drawAlpha: function(s, a, h, u) {
          var m = this, c = m.get("radius"), f = m.get("actx");
          m.get("max");
          var y = m.get("bounds"), b = s - 1.5 * c >> 0, g = a - 1.5 * c >> 0, C = s + 1.5 * c >> 0, S = a + 1.5 * c >> 0;
          f.shadowColor = "rgba(0,0,0," + (h ? h / m.store.max : "0.1") + ")", f.shadowOffsetX = 15e3, f.shadowOffsetY = 15e3, f.shadowBlur = 15, f.beginPath(), f.arc(s - 15e3, a - 15e3, c, 0, Math.PI * 2, !0), f.closePath(), f.fill(), u ? m.colorize(b, g) : (b < y.l && (y.l = b), g < y.t && (y.t = g), C > y.r && (y.r = C), S > y.b && (y.b = S));
        },
        toggleDisplay: function() {
          var s = this, a = s.get("visible"), h = s.get("canvas");
          a ? h.style.display = "none" : h.style.display = "block", s.set("visible", !a);
        },
        // dataURL export
        getImageData: function() {
          return this.get("canvas").toDataURL();
        },
        clear: function() {
          var s = this, a = s.get("width"), h = s.get("height");
          s.store.set("data", []), s.get("ctx").clearRect(0, 0, a, h), s.get("actx").clearRect(0, 0, a, h);
        },
        cleanup: function() {
          var s = this;
          s.get("element").removeChild(s.get("canvas"));
        }
      }, {
        create: function(s) {
          return new r(s);
        },
        util: {
          mousePosition: function(s) {
            var a, h;
            if (s.layerX ? (a = s.layerX, h = s.layerY) : s.offsetX && (a = s.offsetX, h = s.offsetY), !(typeof a > "u"))
              return [a, h];
          }
        }
      };
    }(), l = function(p) {
      try {
        BMap;
      } catch {
        throw Error("Baidu Map JS API is not ready yet!");
      }
      if (!l._isExtended) {
        l._isExtended = !0, e(l, BMap.Overlay, "HeatmapOverlay");
        var i = new l(p);
        this.__proto__ = i.__proto__;
      }
      this.conf = p, this.heatmap = null, this.latlngs = [], this.bounds = null, this._moveendHandler = this._moveendHandler.bind(this);
    };
    return l.prototype.initialize = function(p) {
      this._map = p;
      var i = document.createElement("div");
      return i.style.position = "absolute", i.style.top = 0, i.style.left = 0, i.style.border = 0, i.style.width = this._map.getSize().width + "px", i.style.height = this._map.getSize().height + "px", this.conf.element = i, p.getPanes().mapPane.appendChild(i), this.heatmap = o.create(this.conf), this._div = i, i;
    }, l.prototype.draw = function() {
      var p = this._map.getBounds();
      if (!p.equals(this.bounds)) {
        this.bounds = p;
        var i = this._map.pointToOverlayPixel(p.getNorthEast()), r = this._map.pointToOverlayPixel(p.getSouthWest());
        if (!(!i || !r)) {
          var s = i.y, a = r.x, h = r.y - i.y, u = i.x - r.x;
          if (this.conf.element.style.left = a + "px", this.conf.element.style.top = s + "px", this.conf.element.style.width = u + "px", this.conf.element.style.height = h + "px", this.heatmap.store.get("heatmap").resize(), this.latlngs.length > 0) {
            this.heatmap.clear();
            for (var m = this.latlngs.length, c = {
              max: this.heatmap.store.max,
              data: []
            }; m--; ) {
              var f = this.latlngs[m].latlng;
              if (p.containsPoint(f)) {
                var y = this._map.pointToOverlayPixel(f), b = new BMap.Pixel(y.x - a, y.y - s), g = this.pixelTransform(b);
                c.data.push({
                  x: g.x,
                  y: g.y,
                  count: this.latlngs[m].c
                });
              }
            }
            this.heatmap.store.setDataSet(c);
          }
        }
      }
    }, l.prototype.pixelTransform = function(p) {
      for (var i = this.heatmap.get("width"), r = this.heatmap.get("height"); p.x < 0; )
        p.x += i;
      for (; p.x > i; )
        p.x -= i;
      for (; p.y < 0; )
        p.y += r;
      for (; p.y > r; )
        p.y -= r;
      return p.x = p.x >> 0, p.y = p.y >> 0, p;
    }, l.prototype._moveendHandler = function(p) {
      this.setDataSet(this._data), delete this._data, this._map.removeEventListener("moveend", this._moveendHandler);
    }, l.prototype.setDataSet = function(p) {
      if (this._map) {
        var i = this._map.getBounds(), r = this._map.pointToOverlayPixel(i.getNorthEast()), s = this._map.pointToOverlayPixel(i.getSouthWest());
        (!r || !s) && (this._data = p, this._map.addEventListener("moveend", this._moveendHandler));
        var a = {
          max: p.max,
          data: []
        }, h = p.data, u = h.length;
        for (this.latlngs = []; u--; ) {
          var m = new BMap.Point(h[u].lng, h[u].lat);
          if (this.latlngs.push({
            latlng: m,
            c: h[u].count
          }), !!i.containsPoint(m)) {
            var c = this._map.pointToOverlayPixel(m), f = this._map.pointToOverlayPixel(i.getSouthWest()).x, y = this._map.pointToOverlayPixel(i.getNorthEast()).y, b = new BMap.Pixel(c.x - f, c.y - y), g = this.pixelTransform(b);
            a.data.push({
              x: g.x,
              y: g.y,
              count: h[u].count
            });
          }
        }
        this.heatmap.clear(), this.heatmap.store.setDataSet(a);
      }
    }, l.prototype.addDataPoint = function(p, i, r) {
      var s = new BMap.Point(p, i), a = this.pixelTransform(this._map.pointToOverlayPixel(s));
      this.heatmap.store.addDataPoint(a.x, a.y, r), this.latlngs.push({
        latlng: s,
        c: r
      });
    }, l.prototype.toggle = function() {
      this.heatmap.toggleDisplay();
    }, l;
  });
})(si);
const ai = it, ui = {
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
      const { originInstance: n, opacity: e, gradient: o } = this;
      n.setOptions({
        radius: t,
        opacity: e,
        gradient: o
      });
    },
    gradient: {
      handler(t) {
        const { originInstance: n, radius: e, opacity: o } = this;
        n.setOptions({
          radius: e,
          opacity: o,
          gradient: t
        });
      },
      deep: !0
    },
    opacity(t) {
      const { originInstance: n, radius: e, gradient: o } = this;
      n.setOptions({
        radius: e,
        opacity: t,
        gradient: o
      });
    }
  },
  methods: {
    load() {
      const { map: t, data: n, max: e, radius: o, opacity: l, gradient: p } = this, i = this.originInstance = new ai({
        radius: o,
        opacity: l,
        gradient: p
      });
      t.addOverlay(i), i.setDataSet({ data: n, max: e });
    }
  }
};
var ot = {}, ri = {
  get exports() {
    return ot;
  },
  set exports(t) {
    ot = t;
  }
};
(function(t, n) {
  (function(e, o) {
    t.exports = o();
  })(H, function() {
    function e(p, i) {
      try {
        BMap;
      } catch {
        throw Error("Baidu Map JS API is not ready yet!");
      }
      var r = o(p), s = new BMap.Polyline(r, i);
      return s.addEventListener("lineupdate", function() {
        this.isEditing && this.enableEditing();
      }), s.cornerPoints = p, s.editMarkers = [], s.enableEditing = function() {
        var a = this;
        if (a.map) {
          a.disableEditing();
          for (var h = 0; h < a.cornerPoints.length; h++) {
            var u = new BMap.Marker(a.cornerPoints[h], {
              icon: new BMap.Icon("http://api.map.baidu.com/library/CurveLine/1.5/src/circle.png", new BMap.Size(16, 16)),
              enableDragging: !0,
              raiseOnDrag: !0
            });
            u.addEventListener("dragend", function() {
              a.cornerPoints.length = 0;
              for (var m = 0; m < a.editMarkers.length; m++)
                a.cornerPoints.push(a.editMarkers[m].getPosition());
              var c = o(a.cornerPoints);
              a.setPath(c);
            }), u.index = h, a.editMarkers.push(u), a.map.addOverlay(u);
          }
        }
        a.isEditing = !0;
      }, s.disableEditing = function() {
        this.isEditing = !1;
        for (var a = 0; a < this.editMarkers.length; a++)
          this.map.removeOverlay(this.editMarkers[a]), this.editMarkers[a] = null;
        this.editMarkers.length = 0;
      }, s.getPath = function() {
        return r;
      }, s;
    }
    function o(p) {
      for (var i = [], r = 0; r < p.length - 1; r++) {
        var s = l(p[r], p[r + 1]);
        s && s.length > 0 && (i = i.concat(s));
      }
      return i;
    }
    function l(p, i) {
      var r = [];
      if (!p || !i || !(p instanceof BMap.Point) || !(i instanceof BMap.Point))
        return null;
      var s = function(v) {
        return 1 - 2 * v + v * v;
      }, a = function(v) {
        return 2 * v - 2 * v * v;
      }, h = function(v) {
        return v * v;
      }, u = 30, m, c, f, y, b, g, C = 0, S = 0;
      if (typeof i > "u") {
        typeof r < "u" && (r = []);
        return;
      }
      var E = parseFloat(p.lat), k = parseFloat(i.lat), d = parseFloat(p.lng), _ = parseFloat(i.lng);
      for (_ > d && parseFloat(_ - d) > 180 && d < 0 && (d = parseFloat(180 + 180 + d)), d > _ && parseFloat(d - _) > 180 && _ < 0 && (_ = parseFloat(180 + 180 + _)), g = 0, k == E ? (m = 0, c = d - _) : _ == d ? (m = Math.PI / 2, c = E - k) : (m = Math.atan((k - E) / (_ - d)), c = (k - E) / Math.sin(m)), g == 0 && (g = m + Math.PI / 5), f = c / 2, b = f * Math.cos(g) + d, y = f * Math.sin(g) + E, C = 0; C < u + 1; C++)
        r.push(new BMap.Point(
          d * s(S) + b * a(S) + _ * h(S),
          E * s(S) + y * a(S) + k * h(S)
        )), S = S + 1 / u;
      return r;
    }
    return e;
  });
})(ri);
const li = ot, ci = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mouseout",
  "mouseover",
  "remove",
  "lineupdate"
], gi = {
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
      handler(t, n) {
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
      const { BMap: t, map: n, points: e, strokeColor: o, strokeWeight: l, strokeOpacity: p, strokeStyle: i, editing: r, massClear: s, clicking: a } = this, h = new li(e.map((u) => O(t, u)), {
        strokeColor: o,
        strokeWeight: l,
        strokeOpacity: p,
        strokeStyle: i,
        // enableEditing: editing,
        enableMassClear: s,
        enableClicking: a
      });
      r ? h.enableEditing() : h.disableEditing(), this.originInstance = h, n.addOverlay(h), j.call(this, h, ci);
    }
  }
}, mi = {
  install(t, n) {
    const { ak: e } = n;
    t.config.globalProperties._BMap = () => ({ ak: e }), t.component("baidu-map", Ee), t.component("bm-view", Le), t.component("bm-scale", Ne), t.component("bm-navigation", je), t.component("bm-map-type", De), t.component("bm-overview-map", Fe), t.component("bm-geolocation", Ze), t.component("bm-copyright", He), t.component("bm-city-list", Ge), t.component("bm-panorama", Ue), t.component("bm-control", qe), t.component("bm-marker", tn), t.component("bm-point-collection", en), t.component("bm-polyline", sn), t.component("bm-polygon", It), t.component("bm-circle", an), t.component("bm-ground", rn), t.component("bm-label", ln), t.component("bm-info-window", gn), t.component("bm-overlay", bn), t.component("bm-context-menu", In), t.component("bm-context-menu-item", xn), t.component("bm-local-search", Bn), t.component("bm-transit", Tn), t.component("bm-walking", An), t.component("bm-driving", Rn), t.component("bm-bus", jn), t.component("bm-tile", Dn), t.component("bm-traffic", Fn), t.component("bm-auto-complete", Xn), t.component("bm-boundary", Un);
  }
};
export {
  Ee as BaiduMap,
  Xn as BmAutoComplete,
  Un as BmBoundary,
  jn as BmBus,
  an as BmCircle,
  Ge as BmCityList,
  In as BmContextMenu,
  xn as BmContextMenuItem,
  qe as BmControl,
  He as BmCopyright,
  Rn as BmDriving,
  Ze as BmGeolocation,
  rn as BmGround,
  gn as BmInfoWindow,
  ln as BmLabel,
  Bn as BmLocalSearch,
  De as BmMapType,
  tn as BmMarker,
  je as BmNavigation,
  bn as BmOverlay,
  Fe as BmOverviewMap,
  Ue as BmPanorama,
  en as BmPointCollection,
  It as BmPolygon,
  sn as BmPolyline,
  Ne as BmScale,
  Dn as BmTile,
  Fn as BmTraffic,
  Tn as BmTransit,
  Le as BmView,
  An as BmWalking,
  gi as BmlCurveLine,
  ui as BmlHeatmap,
  di as BmlLushu,
  pi as BmlMarkerClusterer,
  mi as default
};
