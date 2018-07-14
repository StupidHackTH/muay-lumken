import toMaterialColor from 'material-color-hash'

export function colorize(str, weight = 500) {
  return toMaterialColor(str, weight).backgroundColor
}

export function bkdr(str) {
  let seed = 131
  let seed2 = 137
  let hash = 0

  str += 'x'

  var MAX_SAFE_INTEGER = parseInt(9007199254740991 / seed2)

  for (let i = 0; i < str.length; i++) {
    if (hash > MAX_SAFE_INTEGER) {
      hash = parseInt(hash / seed2)
    }

    hash = hash * seed + str.charCodeAt(i)
  }

  return hash
}

export function colorHash(str, sat = 80, lum = 40) {
  if (!str) return null

  let hash = 0
  if (str.length === 0) return hash

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
    hash &= hash
  }

  return `hsl(${Math.abs(hash % 359)}, ${sat}%, ${lum}%)`
}

export default colorize
