
function getPosition (params) {
  return new Promise((resolve, reject) => {
    try {
      if (!navigator.geolocation) {
        throw new Error('浏览器不支持')
      }
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (err) => reject(err)
      )
    } catch (err) {
      reject(err)
    }
  })
}

export default {
  getPosition
}
