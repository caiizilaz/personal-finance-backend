const cusDate = date => {
  let d = new Date()
  d.setDate(date)
  return d
}

module.exports = { cusDate }