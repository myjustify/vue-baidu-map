export function createPoint (BMap, options = {}) {
  const { lng, lat } = options
  return new BMap.Point(lng, lat)
}

export function createPixel (BMap, options = {}) {
  const { x, y } = options
  return new BMap.Pixel(x, y)
}

export function createBounds (BMap, options = {}) {
  const { sw, ne } = options
  return new BMap.Bounds(createPoint(BMap, sw), createPoint(BMap, ne))
}

export function createSize (BMap, options = {}) {
  const { width = 0, height = 0 } = options
  return new BMap.Size(width, height)
}

export function createIcon (BMap, options = {}) {
  const { url, size, opts = {} } = options
  const { anchor, imageSize, imageOffset, infoWindowAnchor, printImageUrl } = clearFalse(opts)
  return new BMap.Icon(url, createSize(BMap, size), clearFalse({
    anchor: anchor && createSize(BMap, anchor),
    imageSize: imageSize && createSize(BMap, imageSize),
    imageOffset: imageOffset && createSize(BMap, imageOffset),
    infoWindowAnchor: infoWindowAnchor && createSize(BMap, infoWindowAnchor),
    printImageUrl: printImageUrl
  }))
}

export function createLabel (BMap, options = {}) {
  const { content, opts } = options
  const { offset, position, enableMassClear } = clearFalse(opts)
  return new BMap.Label(content, {
    offset: offset && createSize(BMap, offset),
    position: position && createPoint(BMap, position),
    enableMassClear: enableMassClear
  })
}

export function createSymbol (BMap, options = {}) {
  const { path, opts } = options
  const { anchor, fillColor, fillOpacity, scale, rotation, strokeColor, strokeOpacity, strokeWeight } = opts
  return new BMap.Symbol(global[path] || path, {
    anchor: anchor && createSize(BMap, anchor),
    fillColor: fillColor,
    fillOpacity: fillOpacity,
    scale: scale,
    rotation: rotation,
    strokeColor: strokeColor,
    strokeOpacity: strokeOpacity,
    strokeWeight: strokeWeight
  })
}

export function createIconSequence (BMap, options = {}) {
  const { symbol, offset, repeat, fixedRotation } = options
  return new BMap.IconSequence(
      symbol && createSymbol(BMap, symbol),
      offset,
      repeat,
      fixedRotation
  )
}

const isF = (v) => v === null || v === undefined || v === ''
const isObject = (v) => Object.prototype.toString.call(v) === '[object Object]'
export function clearFalse(obj, opt = {}) {
  opt = {
    dep: true,
    o: true, // 忽略判断空对象
    a: true, // 忽略空数组 咱不实现
    ...opt
  }
  function fixObj(value = {}, target = {}) {
    for (let k in value) {
      const son = value[k]
      if (isF(son)) continue
      if (opt.o && isObject(son)) {
        if (!Object.keys(son).length) continue;
        if (opt.dep) {
          target[k] = fixObj(son, {})
        } else {
          target[k] = son
        }
      } else {
        target[k] = son
      }
    }
    return target
  }
  return fixObj(obj)
}
