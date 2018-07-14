const R = 6371000

const radian = num => num * Math.PI / 180

export default function haversine(start, end) {
  const dLat = radian(end.latitude - start.latitude)
  const dLon = radian(end.longitude - start.longitude)

  const lat1 = radian(start.latitude)
  const lat2 = radian(end.latitude)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}
