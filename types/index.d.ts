interface VueHotelDatepicker {
  name: string
  results: any[]
  searching: boolean
  startDate: typeof Date
  endDate: typeof Date
  request: typeof Request
}

interface Period {
  start?: Date
  end?: Date
}

export declare var Period: Period
