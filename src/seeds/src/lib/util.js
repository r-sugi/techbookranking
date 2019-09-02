const uuidv1 = require('uuid/v1')
module.exports.getRandomInt = (min, max) => {
  const MIN = Math.ceil(min)
  const MAX = Math.floor(max)
  return Math.floor(Math.random() * (MAX - MIN)) + MIN
}
module.exports.uuid = () => {
  return uuidv1()
    .split('-')
    .join('')
}
