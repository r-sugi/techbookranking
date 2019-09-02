export const sumArray = arr => {
  return arr.reduce(function(prev, current, i, arr) {
    return prev + current
  })
}

export const urlBookPointMapper = path => {
  if (path === '/booklists/all' || path.match(/\/booklists\/[a-z0-9]{32}.*/)) {
    return 'pointAll'
  } else if (path === '/booklists/monthly') {
    return 'pointMonthly'
  } else {
    return 'pointYearly'
  }
}
