type DateInterval = 'day' | 'days' | 'month' | 'months' | 'year' | 'years'

const create = (increment?: number, interval?: DateInterval): Date => {
  const now = new Date()

  if (!increment || !interval) {
    return now
  }

  switch (interval) {
    case 'day':
    case 'days':
      return new Date(now.getFullYear(), now.getMonth(), now.getDate() + increment)
    case 'month':
    case 'months':
      return new Date(now.getFullYear(), now.getMonth() + increment, now.getDate())
    case 'year':
    case 'years':
      return new Date(now.getFullYear() + increment, now.getMonth(), now.getDate())
    default:
      return now
  }
}

export {create}
